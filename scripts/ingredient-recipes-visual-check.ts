import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium, type Page, type Locator } from "playwright";
import type { DbEntityDetail, DbRelatedEntityRef } from "../src/types/db";

const baseUrl = process.env.INGREDIENT_RECIPES_REVIEW_URL ?? "http://127.0.0.1:5190";
assert(["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname), "Local preview required");
const before = process.argv.includes("--before");
const output = path.resolve(process.env.INGREDIENT_RECIPES_REVIEW_OUTPUT ?? ".codex-tmp/visual-review/ingredient-recipes");
const captureDir = path.join(output, before ? "before" : "after");
const fixtures = [
  { id: "iron-ingot", slug: "item-ingredient-mineral-iron-bar", count: 88 },
  { id: "blood-essence", slug: "item-blood-essence-t01", count: 5 },
  { id: "boneguard-boots", slug: "item-boots-t01-bone", count: 1 },
  { id: "emberglass", slug: "item-ingredient-emberglass", count: 3 },
  { id: "blood-coating", slug: "item-vampire-coating-blood", count: 0 }
];
const cases = await Promise.all(fixtures.map(async (fixture) => {
  const detail = JSON.parse(await readFile(`public/data/db/items/by-slug/${fixture.slug}.json`, "utf8")) as DbEntityDetail;
  return { ...fixture, detail, title: detail.title, path: `/db/items/${fixture.slug}`,
    refs: (detail.ingredientRecipes ?? []) as DbRelatedEntityRef[] };
}));
const receipts: Record<string, unknown>[] = [];
const measurements: Record<string, unknown>[] = [];
await mkdir(captureDir, { recursive: true });
const browser = await chromium.launch({ headless: true });

async function ready(page: Page, fixture: typeof cases[number], query = "") {
  await page.goto(baseUrl + fixture.path + query);
  await page.getByRole("heading", { level: 1, name: fixture.title, exact: true }).waitFor();
  await page.evaluate(() => document.fonts.ready);
  assert(await page.evaluate(async () => {
    const faces = await Promise.all(["400 16px Inter", "500 16px Cinzel"].map(font => document.fonts.load(font)));
    return faces.every(family => family.some(face => face.status === "loaded"));
  }), "Loaded Inter and Cinzel required");
  await page.locator("main img").evaluateAll(async images => {
    await Promise.all(images.map(async element => {
      const image = element as HTMLImageElement;
      image.loading = "eager";
      try { await image.decode(); } catch { /* Text and links must survive failed artwork. */ }
    }));
  });
}

async function capture(page: Page, name: string, fullPage = false) {
  await page.screenshot({ path: path.join(captureDir, `${name}.png`), fullPage, animations: "disabled" });
}

async function measure(page: Page, expected: DbRelatedEntityRef[]) {
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth), 0, "Page containment");
  const cards = await page.locator("#item-recipe-uses [data-db-reference]").evaluateAll(elements => elements.map(card => {
    const title = card.querySelector<HTMLElement>("[data-db-reference-title]")!;
    const prefab = card.querySelector<HTMLElement>("[data-db-reference-prefab]")!;
    const metadata = card.querySelector<HTMLElement>("[data-db-reference-metadata]")!;
    const boxes = [card, card.firstElementChild!, title, prefab, metadata, ...metadata.children].map(element => {
      const rect = element.getBoundingClientRect();
      return { x: rect.x, y: rect.y, right: rect.right, bottom: rect.bottom, width: rect.width };
    });
    return { title: title.textContent, prefab: prefab.textContent, path: card.closest("a")?.getAttribute("href"),
      amount: card.querySelector("[data-db-reference-amount]")?.textContent, guid: card.querySelector("[data-db-reference-guid]")?.textContent,
      card: boxes[0], identity: boxes[1], titleBox: boxes[2], prefabBox: boxes[3], metadata: boxes[4],
      children: boxes.slice(5), titleOverflow: title.scrollWidth - title.clientWidth, prefabOverflow: prefab.scrollWidth - prefab.clientWidth };
  }));
  assert.deepEqual(cards.map(({ title, prefab, path: route, amount, guid }) => ({ title, prefab, path: route, amount, guid })),
    expected.map(row => ({ title: row.title, prefab: row.prefab, path: row.path, amount: `${row.amount} required`, guid: String(row.guid) })), "Complete visible identities/order/quantities/routes");
  const width = await page.evaluate(() => innerWidth);
  for (const card of cards) {
    const contained = (box: typeof card.card) => box.x >= card.card.x - 1 && box.right <= card.card.right + 1
      && box.y >= card.card.y - 1 && box.bottom <= card.card.bottom + 1;
    assert([card.titleBox, card.prefabBox, card.metadata, ...card.children].every(contained), "Contained card content");
    assert.equal(card.titleOverflow, 0, "Complete title");
    assert.equal(card.prefabOverflow, 0, "Complete prefab");
    if (width < 640) assert(card.metadata.y >= card.prefabBox.bottom, "Mobile metadata below names");
    else assert(card.metadata.x >= card.identity.right + 15, "Desktop metadata beside names");
  }
  const result = { url: page.url(), width, cards };
  measurements.push(result);
  return result;
}

async function focusByKeyboard(page: Page, link: Locator) {
  for (let count = 0; count < 150; count++) {
    await page.keyboard.press("Tab");
    if (await link.evaluate(element => element === document.activeElement)) {
      assert(parseFloat(await link.evaluate(element => getComputedStyle(element).outlineWidth)) > 0, "Visible keyboard focus");
      await link.evaluate(element => element.scrollIntoView({ block: "center", behavior: "instant" }));
      const box = await link.boundingBox();
      const height = await page.evaluate(() => innerHeight);
      assert(box && box.y >= 0 && box.y + box.height <= height, "Focused recipe visible in the capture");
      return;
    }
  }
  assert.fail("Recipe link unreachable with keyboard");
}

async function interactionChecks(page: Page, fixture: typeof cases[number], key: string) {
  const search = page.getByRole("searchbox", { name: "Search used-in recipes", exact: true });
  const cards = page.locator("#item-recipe-uses [data-db-reference]");
  const more = page.getByRole("button", { name: "Show more", exact: true });
  let count = 12;
  while (count < fixture.refs.length) {
    await more.click();
    const previous = count;
    count = Math.min(count + 12, fixture.refs.length);
    await page.waitForFunction(expected => document.querySelectorAll("#item-recipe-uses [data-db-reference]").length === expected, count);
    assert.equal(await page.evaluate(() => document.activeElement?.querySelector<HTMLElement>("[data-db-reference]")?.dataset.dbReference), fixture.refs[previous].prefab, "Expansion focus");
  }
  await measure(page, fixture.refs);
  assert.equal(await more.count(), 0);
  await capture(page, `${key}-all-88`);

  await ready(page, fixture, "?keep=review&usesShown=24#linked-records");
  const target = fixture.refs[20];
  const query = `${target.prefab.toUpperCase()} ${target.guid}`;
  await search.fill(query);
  await page.waitForFunction(() => document.querySelectorAll("#item-recipe-uses [data-db-reference]").length === 1);
  const params = new URL(page.url()).searchParams;
  assert.equal(params.get("usesQ"), query);
  assert.equal(params.get("usesShown"), null);
  assert.equal(params.get("keep"), "review");
  assert.equal(new URL(page.url()).hash, "#linked-records");
  await measure(page, [target]);
  await capture(page, `${key}-identifier-search`, true);
  await search.fill("no-recorded-recipe-matches-this");
  await page.getByText("No recorded recipes match this search.", { exact: true }).waitFor();
  await measure(page, []);
  await capture(page, `${key}-unmatched`, true);
  await page.getByRole("button", { name: "Clear search", exact: true }).click();
  await measure(page, fixture.refs.slice(0, 12));
  await search.fill("Recipe");
  await more.click();
  await page.waitForFunction(() => document.querySelectorAll("#item-recipe-uses [data-db-reference]").length === 24);
  const returnUrl = page.url();
  await page.keyboard.press("Enter");
  await page.waitForURL(baseUrl + fixture.refs[12].path);
  await page.goBack();
  await page.getByRole("heading", { level: 1, name: fixture.title, exact: true }).waitFor();
  assert.equal(page.url(), returnUrl);
  assert.equal(await search.inputValue(), "Recipe");
  await measure(page, fixture.refs.slice(0, 24));
  await page.reload();
  await search.waitFor();
  assert.equal(await search.inputValue(), "Recipe");
  await measure(page, fixture.refs.slice(0, 24));
  await capture(page, `${key}-restored`, true);

  for (const value of ["garbage", "-12", "9999"]) {
    await ready(page, fixture, `?usesShown=${value}`);
    await measure(page, fixture.refs.slice(0, value === "9999" ? 88 : 12));
  }
  await ready(page, fixture);
  const link = cards.first().locator("xpath=..");
  await focusByKeyboard(page, link);
  await capture(page, `${key}-focus`);
  await page.keyboard.press("Enter");
  await page.waitForURL(baseUrl + fixture.refs[0].path);
  const recipe = JSON.parse(await readFile(`public/data/db/recipes/by-slug/${fixture.refs[0].slug}.json`, "utf8")) as DbEntityDetail;
  await page.getByRole("heading", { level: 1, name: recipe.title, exact: true }).waitFor();
  await page.locator("#source-provenance > summary").click();
  await page.getByRole("link", { name: "Open Prefab Reference", exact: true }).click();
  await page.waitForURL(baseUrl + recipe.prefabPath);
  const heading = page.getByRole("heading", { name: "ProjectM.RecipeRequirementBuffer", exact: true });
  await heading.waitFor();
  const buffer = heading.locator("xpath=ancestor::details[1]");
  if (await buffer.getAttribute("open") === null) await heading.click();
  const text = await buffer.innerText();
  assert(text.includes(fixture.detail.prefab!) && text.includes(String(fixture.detail.guid)) && text.includes(`Amount: ${fixture.refs[0].amount}`), "Source buffer contains exact ingredient requirement");
  await heading.scrollIntoViewIfNeeded();
  await capture(page, `${key}-source`);
  receipts.push({ key, expansion: 88, search: "title/prefab/GUID", keyboard: "passed", backReloadSharedUrl: "passed", source: recipe.prefabPath });
}

async function nativeZoomChecks() {
  const extension = path.join(output, "local-zoom-extension");
  await mkdir(extension, { recursive: true });
  await writeFile(path.join(extension, "manifest.json"), JSON.stringify({ manifest_version: 3, name: "Local ingredient recipe zoom check", version: "1.0",
    host_permissions: [`${new URL(baseUrl).origin}/*`], background: { service_worker: "worker.js" } }));
  await writeFile(path.join(extension, "worker.js"), "chrome.runtime.onInstalled.addListener(() => {});\n");
  for (const theme of ["dark", "light"] as const) {
    const profile = await mkdtemp(path.join(output, "zoom-profile-"));
    const context = await chromium.launchPersistentContext(profile, { channel: "chromium", headless: true,
      viewport: { width: 1280, height: 960 }, colorScheme: theme,
      args: [`--disable-extensions-except=${extension}`, `--load-extension=${extension}`] });
    try {
      await context.addInitScript(value => localStorage.setItem("vrising-theme", value), theme);
      const worker = context.serviceWorkers()[0] ?? await context.waitForEvent("serviceworker");
      const page = context.pages()[0] ?? await context.newPage();
      for (const fixture of [cases[0], cases[3]]) {
        await ready(page, fixture);
        const factor = await worker.evaluate(async url => {
          const api = (globalThis as unknown as { chrome: { tabs: { query(input: { url: string }): Promise<Array<{ id: number }>>;
            setZoom(id: number, factor: number): Promise<void>; getZoom(id: number): Promise<number> } } }).chrome;
          const [tab] = await api.tabs.query({ url });
          await api.tabs.setZoom(tab.id, 2);
          return api.tabs.getZoom(tab.id);
        }, `${new URL(baseUrl).origin}/*`);
        assert.equal(factor, 2);
        await page.waitForFunction(() => devicePixelRatio === 2 && innerWidth === 640 && innerHeight === 480);
        await measure(page, fixture.refs.slice(0, 12));
        await focusByKeyboard(page, page.locator("#item-recipe-uses [data-db-reference]").first().locator("xpath=.."));
        const session = await context.newCDPSession(page);
        try {
          const capture = await session.send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false, fromSurface: true });
          await writeFile(path.join(captureDir, `zoom200-${fixture.id}-${theme}.png`), Buffer.from(capture.data, "base64"));
        } finally { await session.detach(); }
        await page.keyboard.press("Enter");
        await page.waitForURL(baseUrl + fixture.refs[0].path);
        receipts.push({ key: `zoom200-${fixture.id}-${theme}`, nativeZoom: factor, effectiveCssViewport: "640x480", keyboard: "passed" });
      }
    } finally {
      await context.close();
      assert.equal(path.dirname(path.resolve(profile)), output);
      await rm(profile, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
    }
  }
}
try {
  for (const theme of ["dark", "light"] as const) {
    for (const width of [320, 390, 639, 640, 1280]) {
      const context = await browser.newContext({ viewport: { width, height: 960 }, colorScheme: theme });
      await context.addInitScript(value => localStorage.setItem("vrising-theme", value), theme);
      const page = await context.newPage();
      const errors: string[] = [];
      page.on("pageerror", error => errors.push(error.message));
      try {
        for (const fixture of cases) {
          await ready(page, fixture);
          if (!before) {
            assert.equal(fixture.refs.length, fixture.count, `${fixture.id}: census`);
            await measure(page, fixture.refs.slice(0, 12));
            assert.equal(await page.locator("#item-recipe-uses").count(), fixture.count ? 1 : 0);
            if (fixture.id === "emberglass") {
              assert.equal(await page.locator("#item-recipe-uses [data-db-reference]").filter({ hasNot: page.locator("img") }).count(), 2, "Missing artwork remains navigable");
            }
          }
          await page.screenshot({ path: path.join(captureDir, `${fixture.id}-${theme}-${width}.png`), fullPage: true, animations: "disabled" });
          receipts.push({ fixture: fixture.id, theme, width, fonts: "loaded" });
        }
        if (!before && [320, 1280].includes(width)) {
          await ready(page, cases[0]);
          await interactionChecks(page, cases[0], `${theme}-${width}`);
        }
        if (!before && width === 320) {
          let failures = 0;
          const icon = cases[0].refs[0].icon;
          assert(icon);
          await page.route(`**${icon}`, route => { failures++; return route.abort(); });
          await ready(page, cases[0]);
          await measure(page, cases[0].refs.slice(0, 12));
          assert(failures > 0);
          await focusByKeyboard(page, page.locator("#item-recipe-uses [data-db-reference]").first().locator("xpath=.."));
          await capture(page, `failed-artwork-${theme}`);
          receipts.push({ key: `failed-artwork-${theme}`, labelsAndLinks: "passed" });
        }
        assert.deepEqual(errors, []);
      } finally { await context.close(); }
    }
  }
} finally { await browser.close(); }
if (!before) await nativeZoomChecks();
if (!before) await writeFile(path.join(output, "measurements.json"), JSON.stringify(measurements, null, 2));
await writeFile(path.join(output, before ? "before-receipt.json" : "receipt.json"), JSON.stringify(receipts, null, 2));
console.log(`Ingredient recipe ${before ? "before" : "acceptance"} review: ${receipts.length} checks, fonts loaded`);
