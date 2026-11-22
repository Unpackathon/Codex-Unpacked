import {
  Quality,
  PointerPhase,
  ReactionKind,
  ReactionResult,
  ActivityCommandType,
  ActivityEntry,
  ActivityKind,
  ActivityOutcome,
  ActivityApplyResult,
} from "../runtime/single-thread/orbit-enums.mjs";
import { fitNeutral, pointInCanvas } from "./avatar-framing.mjs";

/** @typedef {"signature" | "working" | "searching" | "thinking"} Phase */
/** @typedef {{canvas: HTMLCanvasElement, character: import("../runtime/single-thread/orbit-characters.mjs").Character, activities: boolean, ready: boolean, firstFrame: boolean, fit: ReturnType<typeof fitNeutral>, active: boolean}} Stage */

/** @type {Phase[]} */
const activityCycle = ["working", "searching", "thinking"];
const activityKinds = {
  signature: ActivityKind.None,
  working: ActivityKind.Working,
  searching: ActivityKind.Searching,
  thinking: ActivityKind.Thinking,
};

/** One module, two prepared native characters: activity binding is permanent. */
export class NuxPlaylist {
  /**
   * @param {import("../runtime/single-thread/orbit-characters.mjs").OrbitModule} engine
   * @param {HTMLCanvasElement} canvas
   * @param {() => void} onReady
   * @param {(phase: Phase) => void} [onPhaseChange]
   */
  constructor(engine, canvas, onReady, onPhaseChange) {
    this.onReady = onReady;
    this.onPhaseChange = onPhaseChange;
    this.active = false;
    this.motionActive = false;
    this.reducedMotion = true;
    this.ready = false;
    /** @type {Phase} */
    this.phase = "signature";
    this.started = false;
    this.elapsed = 0;
    this.clock = 0;
    /** @type {number | undefined} */
    this.lastNow = undefined;
    this.sequence = 0n;
    this.episode = 0n;
    this.nextProbe = 0;
    this.restartReaction = false;
    /** @type {Stage[]} */
    this.stages = [];
    const activityCanvas = document.createElement("canvas");
    activityCanvas.id = "alfred-activity";
    activityCanvas.width = activityCanvas.height = 256;
    activityCanvas.setAttribute("aria-hidden", "true");
    canvas.after(activityCanvas);
    try {
      /** @type {Array<[HTMLCanvasElement, boolean]>} */
      const targets = [
        [canvas, false],
        [activityCanvas, true],
      ];
      for (const [target, activities] of targets) {
        target.style.opacity = "0";
        const character = new engine.Character(`#${target.id}`, 256, 256, {
          activities,
        });
        /** @type {Stage} */
        const stage = {
          canvas: target,
          character,
          activities,
          ready: false,
          firstFrame: false,
          fit: null,
          active: false,
        };
        this.stages.push(stage);
        character.setQuality(Quality.Compact);
        const error = character.restore(engine.presetAppearance("alfred"));
        if (error) {
          throw new Error(error);
        }
        if (activities) {
          const result = character.applyActivity({
            command: ActivityCommandType.Restore,
            sequence: 0n,
            episodeId: 0n,
            episodeHighWater: 0n,
            activity: ActivityKind.None,
            outcome: ActivityOutcome.Neutral,
            entry: ActivityEntry.Sustained,
          });
          if (result !== ActivityApplyResult.Applied) {
            throw new Error("Could not bind activity renderer");
          }
        }
        character.setReducedMotion(true);
        character.setActive(false);
        character.onFirstFrame(() => {
          stage.firstFrame = true;
        });
      }
    } catch (error) {
      this.delete();
      throw error;
    }
  }

  /** @param {Phase} phase */
  stageFor(phase) {
    return this.stages[phase === "signature" ? 0 : 1];
  }

  /** @param {Stage} stage @param {boolean} active */
  activate(stage, active) {
    if (stage.active === active) {
      return;
    }
    stage.character.setActive(active);
    stage.active = active;
  }

  /** @param {{active: boolean, motionActive: boolean, reducedMotion: boolean}} options */
  configure({ active, motionActive, reducedMotion }) {
    if (this.active && !active) {
      if (this.started && !this.stageFor(this.phase).activities) {
        this.restartReaction = true;
      }
      this.lastNow = undefined;
    }
    this.active = active;
    this.motionActive = motionActive;
    this.reducedMotion = reducedMotion;
    for (const stage of this.stages) {
      this.activate(
        stage,
        active && (!stage.ready || stage === this.stageFor(this.phase)),
      );
      stage.character.setReducedMotion(
        !stage.ready || !motionActive || reducedMotion,
      );
    }
  }

  /** @param {Stage} stage */
  renderStage(stage) {
    const admitted = stage.character.render(this.clock);
    if (admitted) {
      stage.character.render(this.clock);
    }
    const preparation = stage.character.preparationStats();
    if (stage.character.renderError() || preparation.failed) {
      throw new Error("Native playlist rendering failed");
    }
    if (!stage.ready && stage.firstFrame && !preparation.pending) {
      stage.fit = fitNeutral(stage.character, stage.canvas);
      if (stage.fit) {
        stage.ready = true;
      }
    }
    return admitted;
  }

  /** @param {Phase} phase */
  start(phase) {
    const stage = this.stageFor(phase);
    const previous = this.stageFor(this.phase);
    this.activate(stage, true);
    stage.character.setReducedMotion(this.reducedMotion);
    if (stage.activities) {
      const result = stage.character.applyActivity({
        command: ActivityCommandType.Start,
        sequence: ++this.sequence,
        episodeId: ++this.episode,
        episodeHighWater: 0n,
        activity: activityKinds[phase],
        outcome: ActivityOutcome.Neutral,
        entry: ActivityEntry.Start,
      });
      if (result !== ActivityApplyResult.Applied) {
        throw new Error("Could not start playlist activity");
      }
    } else {
      if (
        stage.character.playReaction(ReactionKind.Signature) !==
        ReactionResult.Accepted
      ) {
        throw new Error("Could not start playlist reaction");
      }
    }
    this.phase = phase;
    this.elapsed = 0;
    this.nextProbe = this.clock + 0.1;
    this.started = true;
    this.restartReaction = false;
    // Admit the selected native pose before revealing its already prepared canvas.
    this.renderStage(stage);
    stage.canvas.style.opacity = "1";
    stage.canvas.dataset.phase = phase;
    if (previous !== stage) {
      previous.canvas.style.opacity = "0";
      this.activate(previous, false);
    }
    this.onPhaseChange?.(phase);
  }

  /** @param {number} now */
  tick(now) {
    if (!this.active) {
      return;
    }
    const delta =
      this.lastNow == null ? 0 : Math.min((now - this.lastNow) / 1000, 0.1);
    this.lastNow = now;
    // A private visible-time clock prevents hidden-tab phase jumps.
    this.clock += delta;
    for (const stage of this.stages) {
      if (!stage.ready) {
        this.activate(stage, true);
        this.renderStage(stage);
      }
    }
    if (!this.ready && this.stages.every((stage) => stage.ready)) {
      this.ready = true;
      this.stages[0].canvas.style.opacity = "1";
      this.activate(this.stages[1], false);
      this.onReady();
    }
    if (!this.ready || !this.motionActive) {
      return;
    }
    if (!this.started || (this.reducedMotion && this.phase !== "working")) {
      this.start(this.reducedMotion ? "working" : "signature");
    }
    if (this.restartReaction && !this.reducedMotion) {
      this.start(this.phase);
    }
    if (!this.reducedMotion) {
      this.elapsed += delta;
    }
    let stage = this.stageFor(this.phase);
    if (!this.reducedMotion && stage.activities && this.elapsed >= 6) {
      this.start(
        activityCycle[
          (activityCycle.indexOf(this.phase) + 1) % activityCycle.length
        ],
      );
      stage = this.stageFor(this.phase);
    } else if (
      !this.reducedMotion &&
      !stage.activities &&
      this.clock >= this.nextProbe
    ) {
      this.nextProbe = this.clock + 0.1;
      // Busy includes release. An accepted probe is cancelled before rendering,
      // so the initial Signature cannot accidentally play twice.
      const result = stage.character.playReaction(ReactionKind.Signature);
      if (result === ReactionResult.Accepted) {
        this.activate(stage, false);
        this.start("working");
        stage = this.stageFor(this.phase);
      }
    }
    this.renderStage(stage);
  }

  /** @param {{x: number, y: number}} data */
  pointer(data) {
    if (!this.ready || !this.started || !this.active || this.reducedMotion) {
      return;
    }
    const stage = this.stageFor(this.phase);
    // Native activity choreography owns its gaze. Legacy gaze remains available
    // during the wake-up, without presses interrupting the chosen playlist.
    if (stage.activities) {
      return;
    }
    const point = pointInCanvas(data.x, data.y, stage.fit);
    stage.character.pointer(PointerPhase.Move, 1, point.x, point.y, this.clock);
  }

  delete() {
    for (const stage of this.stages) {
      stage.character.delete();
      stage.canvas.remove();
    }
    this.stages = [];
  }
}
