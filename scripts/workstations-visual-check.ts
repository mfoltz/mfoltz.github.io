import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium, type Page } from "playwright";
import { requireReviewFonts } from "./review-fonts";
import { nativeZoomRecorder, openNativeZoomController } from "./blueprint-text-zoom";
import type { DbIndexEntry } from "../src/types/db";

const base = process.env.BROWSE_REVIEW_URL ?? "http://127.0.0.1:5197";
assert(["localhost", "127.0.0.1"].includes(new URL(base).hostname));
const output = path.resolve(process.env.WORKSTATION_REVIEW_OUTPUT ?? ".codex-tmp/visual-review/workstations");
await mkdir(output, { recursive: true });
const entries: DbIndexEntry[] = JSON.parse(await readFile("public/data/db/workstations/index.json", "utf8"));
const prefabs = ["TM_CraftingStation_Anvil", "TM_CraftingStation_BloodMixer", "TM_RefinementStation_Fabricator",
  "TM_CraftingStation_Stables", "TM_SpecialStation_ServantCoffin_StrongbladeDLC", "TM_RefinementStation_Sawmill_Large",
  "TM_Castle_RefinementStation_Soulshard", "TM_RefinementStation_TeslaLightningRod"];
const fixtures = prefabs.map(prefab => {
  const entry = entries.find(row => row.tags?.[0] === prefab); assert(entry, prefab); return entry;
});
const routeFor = (entry: DbIndexEntry) => "/db/workstations?" + new URLSearchParams({ q: entry.tags!.slice(0, 2).join(" ") });
const errors: string[] = [], captures: string[] = [];
let activePage: Page | undefined;
async function ready(page: Page, route: string, selector = "main .database-ledger-row") {
  await page.goto(base + route);
  await page.locator(selector).first().waitFor({ timeout: route.startsWith("/search") ? 60_000 : 15_000 });
  await requireReviewFonts(page);
  await page.waitForFunction(() => [...document.querySelectorAll<HTMLImageElement>("main img")]
    .filter(img => { const r = img.getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0; })
    .every(img => img.complete && img.naturalWidth > 0));
}
async function containment(page: Page) {
  assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), "Page overflow");
  const bad = await page.locator("main .database-ledger-row h2").evaluateAll(headings =>
    headings.filter(h => h.scrollWidth > h.clientWidth + 1).map(h => h.textContent));
  assert.deepEqual(bad, [], "Clipped record title");
}
async function capture(page: Page, name: string, fullPage = true) {
  await containment(page);
  const destination = path.join(output, name + ".png");
  if (fullPage) await page.screenshot({ path: destination, fullPage: true });
  else {
    // Native zoom needs a physical viewport capture; full-page CSS dimensions crop it.
    const session = await page.context().newCDPSession(page);
    try {
      const result = await session.send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false, fromSurface: true });
      await writeFile(destination, Buffer.from(result.data, "base64"));
    } finally { await session.detach(); }
  }
  captures.push(name);
}
const browser = await chromium.launch({ headless: true });
try {
  for (const theme of ["dark", "light"] as const) {
    const context = await browser.newContext({ colorScheme: theme });
    await context.addInitScript(value => localStorage.setItem("vrising-theme", value), theme);
    const page = await context.newPage(); activePage = page;
    page.setDefaultTimeout(15_000); page.setDefaultNavigationTimeout(30_000);
    page.on("pageerror", error => errors.push(String(error)));
    page.on("request", request => assert(!request.url().includes("/data/db/vendors/"), "Invented vendor storage request"));
    for (const width of [320, 390, 639, 640, 1280]) {
      await page.setViewportSize({ width, height: 960 });
      for (const entry of fixtures) {
        await ready(page, routeFor(entry));
        const row = page.locator(`main a[href="${entry.path}"]`);
        assert.equal(await page.locator("main .database-ledger-row").count(), 1);
        assert.equal(await row.locator("h2").innerText(), entry.title);
        assert.equal(await row.locator("ul").count(), 0, "No trailing workstation metadata slot");
        assert.equal(await row.getByText("NoInput", { exact: true }).count(), 0);
        assert(!/technical prefab context/i.test(await row.innerText()));
        if (entry.description && !entry.description.includes("workstation record with player-facing")) {
          assert((await row.innerText()).includes(entry.description.trim()), "Complete owned prose");
        }
        if (entry.portraitAssetPath) {
          const image = row.locator("img");
          const box = await image.boundingBox(); assert(box);
          assert.equal(await image.getAttribute("loading"), "lazy");
          assert(box.height > (width < 640 ? 48 : 64), "Portrait prominence");
        } else assert.equal(await row.locator("img").count(), 0);
        await capture(page, `${theme}-${width}-${entry.slug}`);
      }
      await ready(page, "/db/vendors");
      assert.equal(await page.locator("main .database-ledger-row").count(), 15);
      await capture(page, `${theme}-${width}-vendors`);
      await ready(page, "/db/vendors?region=noctem");
      assert.equal(await page.locator("main .database-ledger-row").count(), 2);
      await capture(page, `${theme}-${width}-same-name-vendors`);
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await ready(page, "/db/workstations");
    assert.match(await page.locator("main").innerText(), /121 results/i);
    assert.equal(await page.locator('main a[href*="/char-trader-"]').count(), 0);
    await ready(page, "/db/workstations?role=vendor&area=farbane&q=Knowledge");
    await page.waitForURL(url => url.pathname === "/db/vendors");
    assert.equal(new URL(page.url()).searchParams.get("region"), "farbane");
    assert.equal(new URL(page.url()).searchParams.get("role"), null);
    assert.equal(await page.locator("main .database-ledger-row").count(), 1);
    const vendor = page.locator("main .database-ledger-row");
    const destination = await vendor.getAttribute("href"); assert(destination?.startsWith("/db/workstations/"));
    await vendor.focus();
    await page.waitForFunction(() => {
      const r = document.activeElement?.getBoundingClientRect(); return r && r.top >= 0 && r.bottom <= innerHeight;
    });
    await capture(page, `${theme}-vendor-keyboard-focus`);
    await vendor.press("Enter");
    await page.locator("main h1").waitFor();
    await page.getByRole("link", { name: "Vendors", exact: true }).waitFor();
    assert.equal(new URL(page.url()).pathname, destination);
    assert((await page.locator("main").innerText()).toLowerCase().includes("vendor database"));
    await capture(page, `${theme}-vendor-detail`);
    await page.reload(); await page.getByRole("link", { name: "Vendors", exact: true }).waitFor();
    await page.goBack(); await page.getByRole("heading", { name: "Vendor Records", exact: true }).waitFor();
    assert.equal(new URL(page.url()).searchParams.get("region"), "farbane");
    await page.getByRole("button", { name: /^clear filters$/i }).click();
    await page.waitForURL(url => url.pathname === "/db/vendors" && !url.search);
    assert.equal(await page.locator("main .database-ledger-row").count(), 15);
    await page.goto(base + "/db/vendors?region=noctem&inventory=minor&q=unmatched-test-query");
    await page.getByText("No vendors match these filters. Clear filters to widen this catalog.", { exact: true }).waitFor();
    assert.equal(new URL(page.url()).searchParams.get("region"), "noctem");
    assert.equal(new URL(page.url()).searchParams.get("inventory"), "minor");
    await capture(page, `${theme}-vendor-empty-state`);
    for (const route of ["/", "/db"]) {
      await ready(page, route, 'main a[href="/db/vendors"]');
      assert.equal(await page.locator('main a[href="/db/vendors"]').count(), 1);
    }
    await ready(page, "/search?scope=vendors&q=CHAR_Trader_");
    assert.equal(await page.locator("main .database-ledger-row").count(), 15);
    await page.getByRole("heading", { name: "Vendors", exact: true }).waitFor();
    assert.equal(await page.getByText("Castle Workstation", { exact: true }).count(), 0);
    assert.equal(await page.getByText("Vendor", { exact: true }).count(), 15);
    await capture(page, `${theme}-vendor-search`);
    for (const entry of entries.filter(entry => entry.workstationRole === "Vendor")) {
      await ready(page, entry.path, "main h1");
      assert.equal(await page.locator("main h1").innerText(), entry.title);
      assert.equal(await page.getByRole("link", { name: "Vendors", exact: true }).getAttribute("href"), "/db/vendors");
      assert((await page.locator("main").innerText()).toLowerCase().includes("vendor database"));
    }
    await ready(page, "/db/workstations?q=Blood%20Mixer");
    assert.equal(await page.locator("main .database-ledger-row h2").innerText(), "Blood Homogenizer");
    await page.route("**/icons/buildables/**", route => route.abort());
    await ready(page, routeFor(fixtures[0]));
    await page.waitForFunction(() => !document.querySelector("main .database-record-artwork"));
    await capture(page, `${theme}-failed-artwork`);
    await context.close(); activePage = undefined;
  }
  assert.deepEqual(errors, []);
} catch (error) {
  await activePage?.screenshot({ path: path.join(output, "failed.png"), fullPage: true });
  await writeFile(path.join(output, "failure.json"), JSON.stringify({ error: String(error), captures, errors }, null, 2));
  throw error;
} finally { await browser.close(); }
const recordZoom = nativeZoomRecorder(output);
for (const theme of ["dark", "light"] as const) {
  const zoom = await openNativeZoomController(base, theme, recordZoom);
  try {
    await ready(zoom.page, routeFor(fixtures[0]));
    assert.equal(await zoom.setZoom(), 2);
    await zoom.page.waitForFunction(() => devicePixelRatio === 2 && innerWidth === 640 && innerHeight === 480);
    await requireReviewFonts(zoom.page);
    await zoom.page.locator("main .database-ledger-row").scrollIntoViewIfNeeded();
    await capture(zoom.page, `${theme}-native-200-anvil`, false);
    await ready(zoom.page, "/db/vendors?region=noctem");
    await zoom.page.locator("main .database-ledger-row").first().scrollIntoViewIfNeeded();
    await capture(zoom.page, `${theme}-native-200-vendors`, false);
    await writeFile(path.join(output, `${theme}-native-200-geometry.json`), JSON.stringify(await zoom.page.evaluate(() => ({
      innerWidth, innerHeight, scrollWidth: document.documentElement.scrollWidth,
      rows: [...document.querySelectorAll("main .database-ledger-row")].map(row => ({
        text: row.textContent, bounds: row.getBoundingClientRect().toJSON()
      }))
    })), null, 2));
  } finally { await zoom.close(); }
}
await writeFile(path.join(output, "receipt.json"), JSON.stringify({ status: "PASS", captures, count: captures.length, errors }, null, 2));
console.log(JSON.stringify({ status: "PASS", captures: captures.length, output }));
