import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { tmpdir } from "node:os";
import { generateKeyPairSync } from "node:crypto";
import { chromium, type Page } from "playwright";
import type { DbEntityDetail, DbIndexEntry, DbRelatedEntityRef } from "../src/types/db";
import { readExpansion, expansionTextFields, type ExpansionRow } from "./blueprint-text-expansion";
import { assertFocusedReferenceVisible } from "./reference-focus";
import { revealExpansionSourceBacklink } from "./blueprint-expansion-source-navigation";
import { blueprintZoomExtensionId, blueprintZoomStage } from "./blueprint-text-zoom";
import { clipboardMockSource, measureReferenceSource, type ExpansionPageMeasurement } from "./blueprint-expansion-browser-evaluation";

const base = process.env.BLUEPRINT_EXPANSION_REVIEW_URL ?? "http://127.0.0.1:5194";
assert(["localhost", "127.0.0.1"].includes(new URL(base).hostname));
const output = path.resolve(process.env.BLUEPRINT_EXPANSION_REVIEW_OUTPUT ?? ".codex-tmp/visual-review/blueprint-text-expansion");
const before = process.argv.includes("--before"), phase = before ? "before" : "after", directory = path.join(output, phase);
await mkdir(directory, { recursive: true });
const json = async <T,>(file: string): Promise<T> => JSON.parse(await readFile(file, "utf8"));
const evidence = await readExpansion(process.cwd());
const blueprints = await json<DbIndexEntry[]>("public/data/db/blueprints/index.json");
type Fixture = { id: string; route: string; detail?: DbEntityDetail; promoted?: ExpansionRow };
const fixtures: Fixture[] = [];
for (const row of evidence.rows) {
  const entries = blueprints.filter(entry => entry.tags?.includes(row.prefab)); assert.equal(entries.length, 1);
  assert.equal(entries[0].path, row.path);
  fixtures.push({ id: entries[0].slug, route: row.path, promoted: row,
    detail: await json(`public/data/db/blueprints/by-slug/${entries[0].slug}.json`) });
}
const representatives = new Set([
  "BP_Castle_Chain_Plant_BleedingHeart", "BP_Castle_Chain_Plant_Cotton", "BP_Castle_Chain_Tree_AppleTree_01",
  "BP_Castle_Debug_Room", "BP_Castle_Debug_ArtQualityBenchmarkRoom", "BP_Castle_Wall_Tier01_Wood_Entrance",
  "BP_Castle_Wall_Tier02_Stone_Entrance", "BP_Tier02_WallpaperSet_CastleStone01", "BP_Tier02_WallpaperSet_ProjectK_Middle",
  "TM_BloodAltar_T01", "TM_BloodFountain_CastleHeart_Rebuilding", "TM_Castle_Fence_Iron02"
]);
const extra: Fixture[] = [{ id: "browse", route: "/db/blueprints" }, { id: "duplicate-name", route: "/db/blueprints?q=plant" },
  { id: "global-search", route: "/search?q=plant&scope=db" }];
for (const slug of ["item-ingredient-stone-brick", "item-blood-essence-t01", "item-building-plants-bleeding-heart-seed",
  "item-ingredient-book-structure-wallpaper-classical-t03"])
  extra.push({ id: slug, route: `/db/items/${slug}`, detail: await json(`public/data/db/items/by-slug/${slug}.json`) });
fixtures.push(...extra);
const receipts: unknown[] = [], measurements: unknown[] = [];
const browser = await chromium.launch({ headless: true });
async function ready(page: Page, route: string) {
  await page.goto(base + route); await page.locator("main h1").first().waitFor();
  const pathname = new URL(route, base).pathname;
  if (pathname === "/db/blueprints" || pathname === "/search")
    await page.locator("main .database-ledger-row").first().waitFor();
  await page.evaluate(() => document.fonts.ready);
  assert(await page.evaluate(async () => (await Promise.all(["400 16px Inter", "500 16px Cinzel"].map(font => document.fonts.load(font))))
    .every(faces => faces.some(face => face.status === "loaded"))), "Loaded Inter/Cinzel required");
  await page.locator("main img").evaluateAll(async elements => Promise.all(elements.map(async element => {
    const image = element as HTMLImageElement; image.loading = "eager";
    try { await image.decode(); } catch { /* supported failed-artwork state */ }
  })));
}
async function measure(page: Page) {
  const result = await page.evaluate<ExpansionPageMeasurement>(measureReferenceSource);
  assert(result.overflow <= 0, "Page containment");
  for (const card of result.cards) {
    for (const field of card.fields) {
      assert(field.box.x >= card.card.x - 1 && field.box.right <= card.card.right + 1 && field.box.y >= card.card.y - 1
        && field.box.bottom <= card.card.bottom + 1, "Card content containment");
      assert(field.overflow <= 1, "Complete reference text");
    }
    if (result.width < 640 && card.metadata) {
      assert(card.metadata.y >= Math.max(card.title.bottom, card.prefab.bottom) - 1, "Mobile metadata below names");
      if (card.metadataContent) assert(Math.abs(card.metadataContent.x - card.title.x) <= 1, "Metadata aligns with names");
    }
  }
  measurements.push({ route: page.url(), ...result });
}
async function checkFixture(page: Page, fixture: Fixture) {
  if (fixture.detail) {
    await page.getByRole("heading", { level: 1, name: fixture.detail.title, exact: true }).waitFor();
    assert.equal(await page.locator("main h1").textContent(), fixture.detail.title);
    assert((await page.locator("main").innerText()).includes(fixture.detail.prefab!), "Complete prefab available");
    if (fixture.promoted && !before) {
      const fields = expansionTextFields(fixture.promoted);
      assert.equal(fixture.detail.title, fields.displayNameEn); assert.equal(fixture.detail.description, fields.summaryEn);
      assert.equal(await page.getByText(fields.summaryEn, { exact: true }).count(), 1, "Owned description displayed once");
    }
  }
  await measure(page);
}
async function checkGuidCopy(page: Page, fixture: Fixture) {
  if (typeof fixture.detail?.guid !== "number") return;
  await page.evaluate(clipboardMockSource);
  await page.getByRole("button", { name: "Copy GUID", exact: true }).first().click();
  assert.equal(await page.evaluate(() => (window as unknown as { copiedGuid: string }).copiedGuid), String(fixture.detail.guid));
}
async function keyboardActivate(page: Page, link: ReturnType<Page["locator"]>) {
  await page.locator("main h1").evaluate(element => { const heading = element as HTMLElement; heading.tabIndex = -1; heading.focus(); });
  for (let i = 0; i < 220; i++) {
    await page.keyboard.press("Tab");
    if (await link.evaluate(element => element === document.activeElement)) {
      measurements.push(await assertFocusedReferenceVisible(page, link)); await page.keyboard.press("Enter"); return;
    }
  }
  assert.fail("Target reference unreachable with keyboard");
}
async function relatedNavigation(page: Page, fixture: Fixture, book = false) {
  const group = page.locator(book ? "#item-book-blueprints" : "#item-blueprint-uses");
  const refs = (book ? fixture.detail!.bookBlueprints : fixture.detail!.materialBlueprints) as DbRelatedEntityRef[];
  const selected = new Set(evidence.rows.map(row => row.prefab));
  const target = refs.find(ref => selected.has(ref.prefab))!; assert(target?.path);
  await ready(page, fixture.route + "?keep=expansion&usesQ=iron&usesShown=24" + (book ? "&buildQ=stone&buildShown=24" : "&bookQ=wall&bookShown=24") + "#linked-records");
  await group.getByRole("searchbox").waitFor();
  const links = group.locator('a[href^="/db/blueprints/"]');
  let shown = await links.count(); assert.equal(shown, Math.min(12, refs.length));
  while (refs.indexOf(target) >= shown || (shown === 12 && refs.length > 12)) {
    const previous = shown; await group.getByRole("button", { name: "Show more", exact: true }).press("Enter");
    shown = Math.min(refs.length, previous + 12);
    await links.nth(shown - 1).waitFor(); assert.equal(await links.count(), shown);
    await page.waitForFunction(href => document.activeElement instanceof HTMLAnchorElement
      && document.activeElement.getAttribute("href") === href, await links.nth(previous).getAttribute("href"));
    assert(await links.nth(previous).evaluate(element => element === document.activeElement), "First revealed link focused");
    measurements.push(await assertFocusedReferenceVisible(page, links.nth(previous)));
  }
  const link = group.locator(`a[href="${target.path}"]`).first(), expandedUrl = page.url();
  assert((await link.innerText()).includes(target.title)); assert((await link.innerText()).includes(target.prefab));
  assert.equal(await link.locator("[data-db-reference-guid]").textContent(), String(target.guid));
  if (!book && typeof target.amount === "number") assert.equal(await link.locator("[data-db-reference-amount]").textContent(), `${target.amount} required`);
  await keyboardActivate(page, link); await page.waitForURL(base + target.path);
  const blueprint = await json<DbEntityDetail>(`public/data/db/blueprints/by-slug/${target.slug}.json`);
  await page.getByRole("heading", { level: 1, name: target.title, exact: true }).waitFor();
  await page.locator("#source-provenance > summary").click();
  const source = page.getByRole("link", { name: "Open Prefab Reference", exact: true });
  assert.equal(await source.getAttribute("href"), blueprint.prefabPath); await source.click();
  await page.waitForURL(base + blueprint.prefabPath);
  await revealExpansionSourceBacklink(page, target.path);
  await page.locator(`a[href="${target.path}"]`).first().waitFor();
  assert((await page.locator(`a[href="${target.path}"]`).first().innerText()).includes(target.title));
  await page.goBack(); await page.goBack(); await group.getByRole("searchbox").waitFor();
  assert.equal(page.url(), expandedUrl); assert.equal(await links.count(), shown);
  await page.reload(); await group.getByRole("searchbox").waitFor(); assert.equal(await links.count(), shown);
  const input = group.getByRole("searchbox"), query = `${target.prefab.toUpperCase()} ${target.guid}`;
  await input.fill(query);
  await group.locator(book ? "#item-book-blueprints-count" : "#item-blueprint-uses-count").filter({ hasText: /Showing 1 of 1/ }).waitFor();
  await link.waitFor(); assert.equal(await links.count(), 1);
  const filteredUrl = page.url(); assert.equal(new URL(filteredUrl).searchParams.get(book ? "bookShown" : "buildShown"), null);
  await keyboardActivate(page, link); await page.waitForURL(base + target.path); await page.goBack();
  await input.waitFor(); assert.equal(page.url(), filteredUrl); assert.equal(await input.inputValue(), query);
  await page.reload(); await input.waitFor(); assert.equal(await input.inputValue(), query);
  assert.equal(new URL(page.url()).searchParams.get("usesQ"), "iron");
  assert.equal(new URL(page.url()).searchParams.get("usesShown"), "24");
  assert.equal(new URL(page.url()).searchParams.get(book ? "buildQ" : "bookQ"), book ? "stone" : "wall");
  await input.fill("no-recorded-blueprint-matches-this-query");
  await group.getByText(book ? "No recorded Blueprint links match this search." : "No recorded Blueprints match this search.", { exact: true }).waitFor();
  await group.getByRole("button", { name: "Clear search", exact: true }).click();
  assert(await input.evaluate(element => element === document.activeElement));
  await links.nth(Math.min(12, refs.length) - 1).waitFor();
  assert.equal(await links.count(), Math.min(12, refs.length)); await measure(page);
  receipts.push({ related: fixture.id, book, expansion: shown, keyboard: true, source: true, independentState: true, backReload: true });
}
async function searchChecks(page: Page) {
  await ready(page, "/db/blueprints?q=BP_Castle_Chain_Plant_");
  await page.locator('main a.database-ledger-row[href^="/db/blueprints/"]').first().waitFor();
  assert.equal(await page.locator('main a.database-ledger-row[href^="/db/blueprints/"]').count(), 14);
  assert.equal(await page.getByRole("heading", { level: 2, name: "Plant", exact: true }).count(), 14);
  for (const query of [evidence.rows[0].prefab, String(evidence.rows[0].guid)]) {
    for (const route of ["/db/blueprints", "/search"]) {
      const params = new URLSearchParams({ q: query }); if (route === "/search") params.set("scope", "db");
      await ready(page, route + "?" + params.toString());
      await page.locator(`main a[href="${evidence.rows[0].path}"]`).first().waitFor();
    }
  }
  receipts.push({ duplicateNames: 14, fullPrefabSearch: true, signedGuidSearch: true });
}
async function nativeZoom() {
  const stages: unknown[] = [];
  const record = async (event: unknown) => {
    stages.push({ timestamp: new Date().toISOString(), event });
    await writeFile(path.join(output, "native-zoom-stages.json"), JSON.stringify(stages, null, 2));
    console.log("Native zoom:", JSON.stringify(event));
  };
  // Chromium creates additional nested database paths inside its profile.
  // Keep those paths short independently of the retained artifact directory.
  const runtime = await mkdtemp(path.join(tmpdir(), "blueprint-zoom-"));
  try {
  const extension = path.join(runtime, "extension");
  await mkdir(extension, { recursive: true });
  const key = generateKeyPairSync("rsa", { modulusLength: 2048 }).publicKey.export({ type: "spki", format: "der" });
  const extensionId = blueprintZoomExtensionId(key);
  await writeFile(path.join(extension, "manifest.json"), JSON.stringify({ manifest_version: 3, name: "Blueprint pilot local zoom", version: "1.0",
    key: key.toString("base64"), host_permissions: [new URL(base).origin + "/*"] }));
  await writeFile(path.join(extension, "zoom.html"), "<!doctype html><title>Owned native zoom controller</title>");
  for (const theme of ["dark", "light"] as const) {
    const profile = await mkdtemp(path.join(runtime, "profile-"));
    const context = await chromium.launchPersistentContext(profile, { channel: "chromium", headless: true,
      viewport: { width: 1280, height: 960 }, colorScheme: theme,
      args: [`--disable-extensions-except=${extension}`, `--load-extension=${extension}`] });
    try {
      await context.addInitScript(value => localStorage.setItem("vrising-theme", value), theme);
      const page = context.pages()[0] ?? await context.newPage();
      const controller = await context.newPage();
      await blueprintZoomStage(`${theme}: extension controller readiness`, () =>
        controller.goto(`chrome-extension://${extensionId}/zoom.html`, { timeout: 15_000 }), record);
      assert.equal(new URL(controller.url()).hostname, extensionId);
      assert.equal(await blueprintZoomStage(`${theme}: extension identity`, () => controller.evaluate(() =>
        (globalThis as unknown as { chrome: { runtime: { id: string } } }).chrome.runtime.id), record), extensionId);
      for (const fixture of [fixtures.find(f => f.promoted?.prefab === "BP_Tier02_WallpaperSet_ProjectK_Middle")!, fixtures.find(f => f.promoted?.prefab === "BP_Castle_Wall_Tier01_Wood_Entrance")!, extra.find(f => f.id === "item-ingredient-stone-brick")!]) {
        await ready(page, fixture.route);
        const stage = `${theme}: ${fixture.id}`;
        const tabs = await blueprintZoomStage(`${stage}: tabs.query`, () => controller.evaluate(async url => {
          const api = (globalThis as unknown as { chrome: { tabs: { query(input: { url: string }): Promise<{ id: number }[]> } } }).chrome;
          return api.tabs.query({ url });
        }, new URL(base).origin + "/*"), record);
        assert.equal(tabs.length, 1, "Exactly one owned preview tab required");
        const tabId = tabs[0].id;
        assert(Number.isSafeInteger(tabId));
        await blueprintZoomStage(`${stage}: tabs.setZoom`, () => controller.evaluate(async id => {
          const api = (globalThis as unknown as { chrome: { tabs: { setZoom(id: number, factor: number): Promise<void> } } }).chrome;
          await api.tabs.setZoom(id, 2);
        }, tabId), record);
        assert.equal(await blueprintZoomStage(`${stage}: tabs.getZoom`, () => controller.evaluate(async id => {
          const api = (globalThis as unknown as { chrome: { tabs: { getZoom(id: number): Promise<number> } } }).chrome;
          return api.tabs.getZoom(id);
        }, tabId), record), 2);
        await page.waitForFunction(() => devicePixelRatio === 2 && innerWidth === 640);
        await checkFixture(page, fixture);
        const session = await context.newCDPSession(page);
        try {
          const shot = await session.send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false, fromSurface: true });
          await writeFile(path.join(directory, `zoom200-${fixture.id}-${theme}.png`), Buffer.from(shot.data, "base64"));
        } finally { await session.detach(); }
        receipts.push({ nativeZoom: 2, fixture: fixture.id, theme });
      }
    } finally {
      await context.close(); assert.equal(path.dirname(profile), runtime);
      await rm(profile, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
    }
  }
  } finally {
    assert.equal(path.dirname(runtime), path.resolve(tmpdir()));
    assert(path.basename(runtime).startsWith("blueprint-zoom-"));
    await rm(runtime, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
  }
}
try {
  let captures = 0;
  for (const theme of ["dark", "light"] as const) for (const width of [320, 390, 639, 640, 1280]) {
    const context = await browser.newContext({ viewport: { width, height: 960 }, colorScheme: theme });
    await context.addInitScript(value => localStorage.setItem("vrising-theme", value), theme);
    const page = await context.newPage(), errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    try {
      for (const fixture of fixtures.filter(f => !f.promoted || width === 320 || width === 1280 || representatives.has(f.promoted.prefab))) {
        await ready(page, fixture.route); await checkFixture(page, fixture);
        await page.mouse.move(0, 0);
        // A fixed 960px frame covers the changed hero copy; DOM measurement
        // checks the complete page and every card, including below the fold.
        await page.screenshot({ path: path.join(directory, `${fixture.id}--${theme}--${width}.png`), animations: "disabled" });
        await checkGuidCopy(page, fixture);
        receipts.push({ fixture: fixture.id, theme, width, fonts: "Inter/Cinzel loaded", frameHeight: 960 });
        captures++; if (captures % 25 === 0) console.log(`${phase}: ${captures}/654 responsive captures accepted`);
      }
      if (!before && width === 390) {
        await relatedNavigation(page, extra.find(f => f.id === "item-ingredient-stone-brick")!);
        await relatedNavigation(page, extra.find(f => f.id === "item-ingredient-book-structure-wallpaper-classical-t03")!, true);
        await searchChecks(page);
        await page.route("**/icons/**", route => route.abort());
        const artwork = fixtures.find(f => f.promoted?.prefab === "BP_Castle_Wall_Tier01_Wood_Entrance")!;
        await ready(page, artwork.route); await checkFixture(page, artwork);
        await page.mouse.move(0, 0);
        await page.screenshot({ path: path.join(directory, `failed-artwork--${theme}.png`), animations: "disabled" });
        receipts.push({ failedArtwork: true, theme });
      }
      assert.deepEqual(errors, []);
    } finally { await context.close(); }
  }
  assert.equal(captures, 654); if (!before) await nativeZoom();
  await writeFile(path.join(output, `${phase}-receipt.json`), JSON.stringify({ status: "PASSED", phase, captures,
    viewportPolicy: "960px frames; complete-page DOM/card measurements; existing regression suites retain their capture policies", receipts, measurements }, null, 2));
  console.log(`Blueprint text expansion ${phase}: ${captures} responsive captures passed.`);
} catch (error) {
  await writeFile(path.join(output, `${phase}-failure.json`), JSON.stringify({ phase, error: String(error), stack: (error as Error).stack, receipts, measurements }, null, 2));
  throw error;
} finally { await browser.close(); }
