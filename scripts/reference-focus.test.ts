import assert from "node:assert/strict";
import { test } from "node:test";
import { chromium } from "playwright";
import { assertFocusedReferenceVisible } from "./reference-focus";

test("focus acceptance waits for native scroll and rejects hidden identifiers", async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 640, height: 480 } });
  try {
    await page.setContent(`<style>
      html { scroll-behavior: smooth } body { margin: 0; height: 2500px }
      a { display: block; position: absolute; top: 1100px; left: 40px; width: 550px; height: 72px }
      a:focus-visible { outline: 2px solid purple }
      header { position: fixed; top: 0; width: 100%; height: 80px; background: white }
      nav { position: fixed; top: 100px; height: 48px; width: 100%; background: white; z-index: 1 }
      [data-db-reference-title], [data-db-reference-prefab] { display: block; height: 24px }
    </style><header></header><nav aria-label="Detail sections"></nav>
    <a href="#destination"><span data-db-reference-title>Complete recipe name</span>
    <span data-db-reference-prefab>Recipe_Complete_Identifier</span></a>`);
    const link = page.locator("a");
    await page.keyboard.press("Tab");
    const result = await assertFocusedReferenceVisible(page, link);
    assert(result.box.y >= 148);
    assert.equal(result.contents[1].text, "Recipe_Complete_Identifier");

    // Keep the card inside the viewport but put a sticky overlay over its title.
    await page.locator("nav").evaluate((element, y) => { element.style.top = `${y + 10}px`; }, result.box.y);
    await assert.rejects(assertFocusedReferenceVisible(page, link), /Focused reference obscured/);
    await page.locator("nav").evaluate(element => { element.style.top = "100px"; });

    // Hit testing also rejects an unrelated overlay, beyond the known sticky bars.
    await page.evaluate(y => {
      const overlay = document.createElement("div"); overlay.id = "unexpected-overlay";
      overlay.style.cssText = `position:fixed;left:0;top:${y + 10}px;width:100%;height:30px;z-index:10;background:white`;
      document.body.append(overlay);
    }, result.box.y);
    await assert.rejects(assertFocusedReferenceVisible(page, link), /Focused reference obscured/);
    await page.locator("#unexpected-overlay").evaluate(element => element.remove());

    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await assert.rejects(assertFocusedReferenceVisible(page, link), /Focused reference outside viewport/);
  } finally { await browser.close(); }
});
