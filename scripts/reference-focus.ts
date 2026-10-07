import assert from "node:assert/strict";
import type { Locator, Page } from "playwright";

// Observe the browser's focus scroll; a second scroll can interrupt its smooth
// animation and leave the link under sticky navigation after the capture check.
export async function assertFocusedReferenceVisible(page: Page, link: Locator, requireOutline = true) {
  let previous = "", stableSince = Date.now();
  const deadline = Date.now() + 5000;
  while (true) {
    const geometry = await link.evaluate(element => {
      const box = element.getBoundingClientRect();
      return JSON.stringify([scrollX, scrollY, box.x, box.y, box.width, box.height]);
    });
    if (geometry !== previous) { previous = geometry; stableSince = Date.now(); }
    if (Date.now() - stableSince >= 250) break;
    assert(Date.now() < deadline, "Focused reference scroll did not settle");
    await page.waitForTimeout(50);
  }
  const result = await link.evaluate(element => {
    const checks = {
      rect(node: Element) {
        const box = node.getBoundingClientRect();
        return { x: box.x, y: box.y, right: box.right, bottom: box.bottom, width: box.width, height: box.height };
      },
      inViewport(b: { x: number; y: number; right: number; bottom: number; width: number; height: number }) {
        return b.width > 0 && b.height > 0 && b.x >= 0 && b.y >= 0 && b.right <= innerWidth && b.bottom <= innerHeight;
      },
      overlaps(a: DOMRect | ReturnType<typeof this.rect>, b: ReturnType<typeof this.rect>) {
        return Math.min(a.right, b.right) > Math.max(a.x, b.x) && Math.min(a.bottom, b.bottom) > Math.max(a.y, b.y);
      }
    };
    const viewport = { width: innerWidth, height: innerHeight };
    const box = checks.rect(element);
    const overlays = [...document.querySelectorAll('header, nav[aria-label="Detail sections"]')]
      .filter(node => ["fixed", "sticky"].includes(getComputedStyle(node).position))
      .map(node => checks.rect(node));
    const contents = [...element.querySelectorAll("[data-db-reference-title], [data-db-reference-prefab], [data-db-reference-guid], [data-db-reference-amount]")].map(node => {
      const bounds = checks.rect(node);
      const points = [[bounds.x + 1, bounds.y + 1], [bounds.right - 1, bounds.y + 1],
        [bounds.x + 1, bounds.bottom - 1], [bounds.right - 1, bounds.bottom - 1],
        [(bounds.x + bounds.right) / 2, (bounds.y + bounds.bottom) / 2]];
      return { text: node.textContent, bounds, contained: checks.inViewport(bounds),
        unobscured: !overlays.some(overlay => checks.overlaps(bounds, overlay)) && points.every(([x, y]) => {
          const hit = document.elementFromPoint(x, y);
          return hit !== null && element.contains(hit);
        }) };
    });
    return { url: location.href, active: element === document.activeElement,
      outlineWidth: parseFloat(getComputedStyle(element).outlineWidth), box, viewport, overlays,
      contained: checks.inViewport(box), unobscured: !overlays.some(overlay => checks.overlaps(box, overlay)), contents };
  });
  assert(result.active, "Reference retains keyboard/expansion focus");
  if (requireOutline) assert(result.outlineWidth > 0, "Visible keyboard focus outline");
  assert(result.contained, `Focused reference outside viewport: ${JSON.stringify(result)}`);
  assert(result.contents.length >= 2, "Focused reference has complete title and prefab hooks");
  assert(result.unobscured && result.contents.every(content => content.contained && content.unobscured),
    `Focused reference obscured: ${JSON.stringify(result)}`);
  return result;
}
