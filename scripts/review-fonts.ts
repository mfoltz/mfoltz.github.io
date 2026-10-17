import assert from "node:assert/strict";
import type { Page } from "playwright";

/** fonts.ready can also resolve after failures; require actual loaded faces. */
export async function requireReviewFonts(page: Page): Promise<void> {
  const loaded = await page.evaluate(async () => {
    await document.fonts.ready;
    return (await Promise.all(["400 16px Inter", "500 16px Cinzel"].map(font => document.fonts.load(font))))
      .every(faces => faces.some(face => face.status === "loaded"));
  });
  assert(loaded, "Loaded Inter/Cinzel required for visual acceptance");
}
