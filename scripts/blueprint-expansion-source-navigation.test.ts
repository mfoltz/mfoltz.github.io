import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { chromium, type Browser, type Page } from "playwright";
import { revealExpansionSourceBacklink } from "./blueprint-expansion-source-navigation";

const destination = "/db/blueprints/bp-castle-debug-art-quality-benchmark-room";
const title = "Castle Art Benchmark Room";
let browser: Browser;
before(async () => { browser = await chromium.launch({ headless: true }); });
after(async () => { await browser?.close(); });
const group = (open = false, count = 1, label = "Gameplay records") =>
  `<details${open ? " open" : ""}><summary>${label} <span>(${count})</span></summary>${Array.from({ length: count }, () => `<a href="${destination}">${title}</a>`).join("")}</details>`;
async function fixture(contents: string, check: (page: Page) => Promise<void>) {
  const page = await browser.newPage();
  try {
    await page.setContent(`<section aria-label="Related records and source">${contents}</section>`);
    await check(page);
  } finally { await page.close(); }
}

test("opens the native closed Gameplay records summary before requiring the exact visible backlink", async () => {
  await fixture(group(), async page => {
    assert.equal(await page.locator(`a[href="${destination}"]`).isVisible(), false);
    const backlink = await revealExpansionSourceBacklink(page, destination);
    assert.equal(await backlink.isVisible(), true);
    assert.equal(await backlink.getAttribute("href"), destination);
    assert.equal(await backlink.textContent(), title);
    assert.notEqual(await page.locator("details").getAttribute("open"), null);
  });
});

test("leaves an already-open Gameplay records disclosure open", async () => {
  await fixture(group(true), async page => {
    await revealExpansionSourceBacklink(page, destination);
    assert.notEqual(await page.locator("details").getAttribute("open"), null);
    assert.equal(await page.locator(`a[href="${destination}"]`).isVisible(), true);
  });
});

test("rejects a missing target without opening an unrelated disclosure", async () => {
  await fixture(group(), async page => {
    await assert.rejects(() => revealExpansionSourceBacklink(page, "/db/blueprints/no-record"), /One exact Gameplay records disclosure/);
    assert.equal(await page.locator("details").getAttribute("open"), null);
  });
});

test("rejects ambiguous target-owning disclosures without opening either", async () => {
  await fixture(group() + group(), async page => {
    await assert.rejects(() => revealExpansionSourceBacklink(page, destination), /One exact Gameplay records disclosure/);
    assert.deepEqual(await page.locator("details").evaluateAll(elements => elements.map(element => element.hasAttribute("open"))), [false, false]);
  });
});

test("rejects duplicate exact backlinks within one disclosure", async () => {
  await fixture(group(false, 2), async page => {
    await assert.rejects(() => revealExpansionSourceBacklink(page, destination), /One exact target backlink/);
    assert.equal(await page.locator("details").getAttribute("open"), null);
  });
});

test("does not substitute another disclosure label for Gameplay records", async () => {
  await fixture(group(false, 1, "Other records"), async page => {
    await assert.rejects(() => revealExpansionSourceBacklink(page, destination), /One exact Gameplay records disclosure/);
    assert.equal(await page.locator("details").getAttribute("open"), null);
  });
});
