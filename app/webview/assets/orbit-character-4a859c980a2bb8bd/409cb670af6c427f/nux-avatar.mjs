// The Home introduction shares the Orbit runtime but owns its two-character playlist.
import createOrbitModule from "../runtime/single-thread/orbit-characters.mjs";
import { NuxPlaylist } from "./nux-playlist.mjs";

const canvas = document.querySelector("canvas");
/** @type {NuxPlaylist | undefined} */
let playlist;
/** @type {number | undefined} */
let frame;
let active = false;
let motionActive = false;
let reducedMotion = true;
let disposed = false;
/** @param {"loaded" | "ready" | "failed"} status */
const send = (status) =>
  parent.postMessage({ type: "dot-avatar-status", status }, location.origin);
const visible = () => active && !document.hidden && !disposed;

function dispose() {
  disposed = true;
  if (frame !== undefined) {
    cancelAnimationFrame(frame);
  }
  playlist?.delete();
}

function schedule() {
  if (frame !== undefined || !playlist || !visible()) {
    return;
  }
  frame = requestAnimationFrame((now) => {
    frame = undefined;
    if (!playlist || !visible()) {
      return;
    }
    try {
      playlist.tick(now);
      if (!playlist.ready || (motionActive && !reducedMotion)) {
        schedule();
      }
    } catch {
      send("failed");
      dispose();
    }
  });
}

function configure() {
  if (disposed) {
    return;
  }
  playlist?.configure({ active: visible(), motionActive, reducedMotion });
  if (visible()) {
    schedule();
  } else {
    if (frame !== undefined) {
      cancelAnimationFrame(frame);
    }
    frame = undefined;
  }
}

addEventListener(
  "message",
  /** @param {MessageEvent<unknown>} event */ ({ source, origin, data }) => {
    if (
      source !== parent ||
      origin !== location.origin ||
      typeof data !== "object" ||
      data == null ||
      !("type" in data) ||
      disposed
    ) {
      return;
    }
    if (data.type === "dot-avatar-config") {
      active = "active" in data && data.active === true;
      motionActive = "motionActive" in data && data.motionActive === true;
      reducedMotion =
        !("reducedMotion" in data) || data.reducedMotion !== false;
      configure();
    } else if (
      data.type === "dot-avatar-pointer" &&
      visible() &&
      "x" in data &&
      typeof data.x === "number" &&
      Number.isFinite(data.x) &&
      "y" in data &&
      typeof data.y === "number" &&
      Number.isFinite(data.y)
    ) {
      playlist?.pointer({ x: data.x, y: data.y });
    }
  },
);
addEventListener("pagehide", dispose, { once: true });
document.addEventListener("visibilitychange", configure);

try {
  const engine = await createOrbitModule({
    locateFile: (file) =>
      new URL(`../runtime/single-thread/${file}`, import.meta.url).href,
    onAbort: () => {
      send("failed");
      dispose();
    },
  });
  if (!disposed && canvas) {
    playlist = new NuxPlaylist(engine, canvas, () => send("ready"));
    send("loaded");
    configure();
  }
} catch {
  send("failed");
  dispose();
}
