import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { tmpdir } from "node:os";
import { generateKeyPairSync } from "node:crypto";
import { chromium, type Page } from "playwright";
import type { DbEntityDetail, DbIndexEntry, DbRelatedEntityRef } from "../src/types/db";
import { blueprintTextFields, readBlueprintText } from "./blueprint-text";
import { assertFocusedReferenceVisible } from "./reference-focus";
import { blueprintZoomExtensionId, blueprintZoomStage } from "./blueprint-text-zoom";

const base = process.env.BLUEPRINT_TEXT_REVIEW_URL ?? "http://127.0.0.1:5194";
assert(["localhost", "127.0.0.1"].includes(new URL(base).hostname));
const output = path.resolve(process.env.BLUEPRINT_TEXT_REVIEW_OUTPUT ?? ".codex-tmp/visual-review/blueprint-text");
const before = process.argv.includes("--before");
const zoomProbe = process.argv.includes("--native-zoom-probe");
assert(!(before && zoomProbe));
const phase = before ? "before" : "after";
const directory = path.join(output, phase);
await mkdir(directory, { recursive: true });
const json = async <T,>(file: string): Promise<T> => JSON.parse(await readFile(file, "utf8"));
const witness = await readBlueprintText(process.cwd());
const blueprints = await json<DbIndexEntry[]>("public/data/db/blueprints/index.json");
const targets = [...witness.rows.map(row => row.prefab), "BP_Castle_Chain_Plant_BleedingHeart", "BP_Castle_Debug_Room"];
type Fixture = { id: string; route: string; detail?: DbEntityDetail; promoted?: typeof witness.rows[number] };
const fixtures: Fixture[] = [];
for (const prefab of targets) {
  const entry = blueprints.find(row => row.tags?.includes(prefab))!;
  assert(entry, prefab);
  fixtures.push({ id: entry.slug, route: entry.path,
    detail: await json(`public/data/db/blueprints/by-slug/${entry.slug}.json`),
    promoted: witness.rows.find(row => row.prefab === prefab) });
}
fixtures.push({ id: "browse", route: "/db/blueprints" }, { id: "search", route: "/search?q=stygian&scope=db" });
for (const slug of ["item-ingredient-stone-brick", "item-blood-essence-t01", "item-ingredient-book-floor-alchemy-lab"])
  fixtures.push({ id: slug, route: `/db/items/${slug}`, detail: await json(`public/data/db/items/by-slug/${slug}.json`) });
const receipts: unknown[] = [], measurements: unknown[] = [];
const browser = await chromium.launch({ headless: true });
async function ready(page: Page, route: string) {
  await page.goto(base + route);
  await page.locator("main h1").first().waitFor();
  await page.evaluate(() => document.fonts.ready);
  assert(await page.evaluate(async () => (await Promise.all(["400 16px Inter", "500 16px Cinzel"].map(font => document.fonts.load(font))))
    .every(faces => faces.some(face => face.status === "loaded"))), "Loaded Inter/Cinzel required");
  await page.locator("main img").evaluateAll(async elements => {
    await Promise.all(elements.map(async element => {
      const image = element as HTMLImageElement; image.loading = "eager";
      try { await image.decode(); } catch { /* The supported fallback must retain text. */ }
    }));
  });
}
async function measure(page: Page) {
  const result = await page.evaluate(() => {
    return { overflow: document.documentElement.scrollWidth - innerWidth, width: innerWidth,
      cards: [...document.querySelectorAll("[data-db-reference]")].filter(node => node.getBoundingClientRect().width > 0).map(node => {
        const card = node.getBoundingClientRect();
        return { card: { x: card.x, y: card.y, right: card.right, bottom: card.bottom },
          fields: [...node.querySelectorAll("[data-db-reference-title],[data-db-reference-prefab],[data-db-reference-metadata]")].map(field => {
            const bounds = field.getBoundingClientRect();
            return { text: field.textContent, box: { x: bounds.x, y: bounds.y, right: bounds.right, bottom: bounds.bottom },
              overflow: field.scrollWidth - field.clientWidth };
          }) };
      }) };
  });
  assert(result.overflow <= 0, "Page containment");
  for (const card of result.cards) for (const field of card.fields) {
    assert(field.box.x >= card.card.x - 1 && field.box.right <= card.card.right + 1
      && field.box.y >= card.card.y - 1 && field.box.bottom <= card.card.bottom + 1, "Card contents contained");
    assert(field.overflow <= 1, "Complete card text");
  }
  measurements.push({ route: page.url(), ...result });
}
async function checkFixture(page: Page, fixture: Fixture) {
  if (fixture.detail) {
    assert.equal(await page.locator("main h1").textContent(), fixture.detail.title);
    if (fixture.promoted && !before) {
      const fields = blueprintTextFields(fixture.promoted);
      assert.equal(fixture.detail.title, fields.displayNameEn);
      assert.equal(fixture.detail.description, fields.summaryEn);
      assert.equal(await page.getByText(fields.summaryEn, { exact: true }).count(), 1, "Description shown once");
      assert(await page.locator("main").innerText().then(text => text.includes(fixture.promoted!.prefab)), "Complete prefab");
      assert(!/[<>{}]|\\n/.test(fields.summaryEn), "No raw markup/placeholder/escape in display copy");
    }
  }
  if (fixture.id === "search" && !before)
    await page.getByRole("link", { name: /Stygian Summoning Circle/ }).first().waitFor();
  await measure(page);
}
async function keyboardActivate(page: Page, link: ReturnType<Page["locator"]>) {
  await page.locator("main h1").evaluate(element => {
    const heading = element as HTMLElement; heading.tabIndex = -1; heading.focus();
  });
  for (let i = 0; i < 180; i++) {
    await page.keyboard.press("Tab");
    if (await link.evaluate(element => element === document.activeElement)) {
      measurements.push(await assertFocusedReferenceVisible(page, link));
      await page.keyboard.press("Enter");
      return;
    }
  }
  assert.fail("Target card unreachable with keyboard");
}
async function relatedNavigation(page: Page, fixture: Fixture, book = false) {
  const group = page.locator(book ? "#item-book-blueprints" : "#item-blueprint-uses");
  const refs = (book ? fixture.detail!.bookBlueprints : fixture.detail!.materialBlueprints) as DbRelatedEntityRef[];
  const target = refs.find(row => witness.rows.some(owned => owned.prefab === row.prefab))!;
  assert(target?.path && target.prefab);
  const query = `${target.prefab} ${target.guid}`;
  await ready(page, fixture.route + "?keep=pilot&usesQ=iron&usesShown=24#linked-records");
  await group.getByRole("searchbox").fill(query);
  const link = group.locator(`a[href="${target.path}"]`).first();
  await link.waitFor();
  assert((await link.innerText()).includes(target.title));
  assert((await link.innerText()).includes(target.prefab));
  const returnUrl = page.url();
  await keyboardActivate(page, link);
  await page.waitForURL(base + target.path);
  await page.getByRole("heading", { level: 1, name: target.title, exact: true }).waitFor();
  const owned = witness.rows.find(row => row.prefab === target.prefab)!;
  await page.getByText(blueprintTextFields(owned).summaryEn, { exact: true }).waitFor();
  await page.locator("#source-provenance > summary").click();
  const source = page.getByRole("link", { name: "Open Prefab Reference", exact: true });
  assert.equal(await source.getAttribute("href"), fixture.detail ? (await json<DbEntityDetail>(`public/data/db/blueprints/by-slug/${target.slug}.json`)).prefabPath : "");
  await source.click();
  await page.waitForURL(new RegExp("/prefabs/"));
  await page.goBack(); await page.goBack();
  await group.getByRole("searchbox").waitFor();
  assert.equal(page.url(), returnUrl);
  assert.equal(await group.getByRole("searchbox").inputValue(), query);
  assert.equal(new URL(page.url()).searchParams.get("usesQ"), "iron");
  assert.equal(new URL(page.url()).searchParams.get("usesShown"), "24");
  await page.reload(); await group.getByRole("searchbox").waitFor();
  assert.equal(await group.getByRole("searchbox").inputValue(), query);
  await measure(page);
  receipts.push({ related: fixture.id, target: target.prefab, keyboard: true, source: true, backReload: true });
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
      for (const fixture of [fixtures[7], fixtures[9], fixtures[14]]) {
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
  if (zoomProbe) {
    await nativeZoom();
    await writeFile(path.join(output, "native-zoom-probe-receipt.json"), JSON.stringify({ status: "DIAGNOSTIC_PASSED", receipts, measurements }, null, 2));
    console.log("Native zoom diagnostic passed; full suite acceptance still required.");
  } else {
  for (const theme of ["dark", "light"] as const) for (const width of [320, 390, 639, 640, 1280]) {
    const context = await browser.newContext({ viewport: { width, height: 960 }, colorScheme: theme });
    await context.addInitScript(value => localStorage.setItem("vrising-theme", value), theme);
    const page = await context.newPage(); const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    try {
      for (const fixture of fixtures) {
        await ready(page, fixture.route); await checkFixture(page, fixture);
        await page.screenshot({ path: path.join(directory, `${fixture.id}-${theme}-${width}.png`), fullPage: true, animations: "disabled" });
        receipts.push({ fixture: fixture.id, theme, width, fonts: "Inter/Cinzel loaded" });
      }
      if (!before && width === 390) {
        await relatedNavigation(page, fixtures[14]);
        await relatedNavigation(page, fixtures[16], true);
        await page.route("**/icons/**", route => route.abort());
        await ready(page, fixtures[3].route); await checkFixture(page, fixtures[3]);
        await page.screenshot({ path: path.join(directory, `failed-artwork-${theme}.png`), fullPage: true });
        receipts.push({ failedArtwork: true, theme });
      }
      assert.deepEqual(errors, []);
    } finally { await context.close(); }
  }
  if (!before) await nativeZoom();
  await writeFile(path.join(output, `${phase}-receipt.json`), JSON.stringify({ status: "PASSED", phase, receipts, measurements }, null, 2));
  console.log(`Blueprint text ${phase}: ${receipts.length} checks passed.`);
  }
} catch (error) {
  await writeFile(path.join(output, `${phase}-failure.json`), JSON.stringify({ phase, error: String(error), stack: (error as Error).stack, receipts, measurements }, null, 2));
  throw error;
} finally { await browser.close(); }
