import assert from "node:assert/strict";
import type { Page } from "playwright";

// This helper belongs only to the expansion acceptance harness. The reader's
// Gameplay records disclosure stays collapsed until a user opens its summary.
export async function revealExpansionSourceBacklink(page: Page, destination: string) {
  const related = page.locator('section[aria-label="Related records and source"]');
  await related.waitFor();
  const selector = `a[href="${destination}"]`;
  const disclosures = related.locator(":scope > details")
    .filter({ has: page.locator("summary").filter({ hasText: /^Gameplay records\s*\(\d+\)\s*$/ }) })
    .filter({ has: page.locator(selector) });
  assert.equal(await disclosures.count(), 1, "One exact Gameplay records disclosure must own the target backlink");
  const disclosure = disclosures.first(), backlink = disclosure.locator(selector);
  assert.equal(await backlink.count(), 1, "One exact target backlink is required");
  const summary = disclosure.locator(":scope > summary");
  assert.equal(await summary.count(), 1, "One direct Gameplay records summary is required");
  if (await disclosure.getAttribute("open") === null) await summary.click();
  assert.notEqual(await disclosure.getAttribute("open"), null, "Gameplay records disclosure must be open");
  await backlink.waitFor();
  return backlink;
}
