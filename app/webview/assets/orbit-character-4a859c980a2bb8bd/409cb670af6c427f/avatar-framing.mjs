// Production activity framing: a half-size portrait inside a doubled renderer.
/**
 * @param {import("../runtime/single-thread/orbit-characters.mjs").Character} character
 * @param {HTMLCanvasElement} canvas
 */
export function fitNeutral(character, canvas) {
  const width = canvas.width;
  const height = canvas.height;
  const data = character.captureNeutral(width, height, 1);
  if (!data) {
    return null;
  }
  let left = width,
    top = height,
    right = 0,
    bottom = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * 4 + 3] >= 8) {
        left = Math.min(left, x);
        top = Math.min(top, y);
        right = Math.max(right, x + 1);
        bottom = Math.max(bottom, y + 1);
      }
    }
  }
  if (right <= left || bottom <= top) {
    return null;
  }
  const scale =
    Math.min(width / (right - left), height / (bottom - top)) * 0.82 * 0.5;
  const fit = {
    scale,
    x: 0.5 - ((left + right) / (2 * width)) * scale,
    y: 0.5 - ((top + bottom) / (2 * height)) * scale,
  };
  canvas.style.transform = `translate(${fit.x * 100}%, ${fit.y * 100}%) scale(${scale})`;
  return fit;
}

/**
 * @param {number} x
 * @param {number} y
 * @param {NonNullable<ReturnType<typeof fitNeutral>>} fit
 */
export function pointInCanvas(x, y, fit) {
  return {
    x: Math.max(0, Math.min(1, (0.25 + x * 0.5 - fit.x) / fit.scale)),
    y: Math.max(0, Math.min(1, (0.25 + y * 0.5 - fit.y) / fit.scale)),
  };
}
