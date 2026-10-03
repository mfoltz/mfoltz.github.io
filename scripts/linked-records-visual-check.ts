import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium, type Page } from "playwright";
import type { DbEntityDetail, DbRelatedEntityRef } from "../src/types/db";

const baseUrl = process.env.LINKED_RECORDS_REVIEW_URL ?? "http://127.0.0.1:5190";
assert(["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname), "Local preview required");
const before = process.argv.includes("--before");
const root = path.resolve(process.env.LINKED_RECORDS_REVIEW_OUTPUT ?? ".codex-tmp/visual-review/linked-records");
const output = path.join(root, before ? "before" : "after");
const fixtures = [
  { id: "aftershock-jewel", section: "items", slug: "item-jewel-chaos-t02-aftershock", keys: ["relatedRecipes", "repairRecipes"] },
  { id: "unlinked-jewel", section: "items", slug: "item-jewel-blood-t01", keys: ["relatedRecipes", "repairRecipes"] },
  { id: "aftershock-ability", section: "abilities", slug: "ab-chaos-aftershock-group", keys: ["spellJewels", "spawnedPrefabs"] },
  { id: "boneguard-recipe", section: "recipes", slug: "recipe-armor-boots-t01-bone", keys: ["outputs", "requirements", "repairCosts"] },
  { id: "abomination", section: "npcs", slug: "char-mutant-flesh-golem", keys: ["servantPrefabs", "essenceItemPrefabs"] },
  { id: "sawmill", section: "workstations", slug: "tm-refinement-station-sawmill-small", keys: ["workstationOutputs", "workstationRecipes", "inventoryPrefabs"] }
];
const cases = await Promise.all(fixtures.map(async (fixture) => {
  const detail = JSON.parse(await readFile(`public/data/db/${fixture.section}/by-slug/${fixture.slug}.json`, "utf8")) as DbEntityDetail;
  const refs = fixture.keys.flatMap((key) => (detail[key] ?? []) as DbRelatedEntityRef[]);
  assert(refs.length > 0, `No shared cards in ${fixture.id}`);
  return { ...fixture, title: detail.title, path: `/db/${fixture.section}/${fixture.slug}`, refs };
}));
const selector = before ? "main ul.database-list-surface > li > a > div, main ul.database-list-surface > li > div" : "main [data-db-reference]";
const receipts: Record<string, unknown>[] = [];
const browser = await chromium.launch({ headless: true });
await mkdir(output, { recursive: true });

async function ready(page: Page, fixture: typeof cases[number]) {
  await page.goto(baseUrl + fixture.path);
  await page.getByRole("heading", { level: 1, name: fixture.title, exact: true }).waitFor();
  await page.evaluate(() => document.fonts.ready);
  const fontsLoaded = await page.evaluate(async () => {
    const faces = await Promise.all(["400 16px Inter", "500 16px Cinzel"].map((font) => document.fonts.load(font)));
    return faces.every((family) => family.some((face) => face.status === "loaded"));
  });
  assert(fontsLoaded, "Inter and Cinzel must load before capture");
  await page.locator("main img").evaluateAll(async (images) => {
    await Promise.all(images.map(async (element) => {
      const image = element as HTMLImageElement;
      image.loading = "eager";
      try { await image.decode(); } catch { /* Failed artwork must preserve the text and link. */ }
    }));
  });
}

async function measure(page: Page, fixture: typeof cases[number], enforce = !before) {
  const width = await page.evaluate(() => innerWidth);
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth), 0);
  const cards = await page.locator(selector).evaluateAll((elements, old) => {
    return elements.map((card) => {
      const title = card.querySelector(old ? ".font-medium" : "[data-db-reference-title]") as HTMLElement;
      const prefab = card.querySelector(old ? ".font-mono" : "[data-db-reference-prefab]") as HTMLElement;
      const metadata = card.querySelector(old ? ":scope > div:last-child" : "[data-db-reference-metadata]");
      const amount = metadata?.querySelector(old ? "span" : "[data-db-reference-amount]") ?? null;
      const guid = metadata?.querySelector(old ? "div" : "[data-db-reference-guid]") ?? null;
      const avatar = card.querySelector(".database-avatar-well");
      const boxes = [card, card.firstElementChild, title, prefab, metadata, avatar, amount, guid].map((element) => {
        if (!element) return null;
        const bounds = element.getBoundingClientRect();
        return { x: bounds.x, y: bounds.y, right: bounds.right, bottom: bounds.bottom, width: bounds.width, height: bounds.height };
      });
      return {
        title: title.textContent, prefab: prefab.textContent, path: card.closest("a")?.getAttribute("href") ?? null,
        amount: amount?.textContent ?? null, guid: guid?.textContent ?? null,
        card: boxes[0]!, identity: boxes[1]!, titleBox: boxes[2]!, prefabBox: boxes[3]!,
        metadata: boxes[4], metadataChildren: boxes.slice(6).filter((box) => box !== null), avatar: boxes[5],
        titleOverflow: title.scrollWidth - title.clientWidth, prefabOverflow: prefab.scrollWidth - prefab.clientWidth
      };
    });
  }, before);
  assert.deepEqual(cards.map(({ title, prefab, path: route, amount, guid }) => ({ title, prefab, path: route, amount, guid })),
    fixture.refs.map((ref) => ({ title: ref.title, prefab: ref.prefab, path: ref.path ?? null,
      amount: typeof ref.amount === "number" ? `${ref.amount}x` : null, guid: ref.guid === null ? null : String(ref.guid) })), `${fixture.id}: record contents/order`);
  if (enforce) {
    for (const card of cards) {
      const contained = (box: NonNullable<typeof card.metadata>) => box.x >= card.card.x - 1 && box.right <= card.card.right + 1
        && box.y >= card.card.y - 1 && box.bottom <= card.card.bottom + 1;
      assert(contained(card.titleBox) && contained(card.prefabBox), `${fixture.id}: contained names`);
      assert.equal(card.titleOverflow, 0, `${fixture.id}: title overflow`);
      assert.equal(card.prefabOverflow, 0, `${fixture.id}: prefab overflow`);
      if (card.avatar) assert.equal(card.avatar.width, 44, `${fixture.id}: retained artwork size`);
      if (!card.metadata) continue;
      assert(contained(card.metadata) && card.metadataChildren.every(contained), `${fixture.id}: contained metadata`);
      if (width < 640) {
        assert(card.metadata.y >= card.prefabBox.bottom, `${fixture.id}: metadata below names`);
        assert(Math.abs(card.metadataChildren[0].x - card.prefabBox.x) <= 1, `${fixture.id}: metadata text alignment`);
      } else {
        assert(card.metadata.x >= card.identity.right + 15, `${fixture.id}: desktop metadata column`);
      }
    }
  }
  return { width, cards };
}

async function focusFirstCard(page: Page) {
  const link = page.locator(selector).first().locator("xpath=..");
  assert.equal(await link.evaluate((element) => element.tagName), "A");
  for (let count = 0; count < 120; count++) {
    await page.keyboard.press("Tab");
    if (await link.evaluate((element) => element === document.activeElement)) {
      await page.evaluate(async () => {
        let previous = scrollY, stable = 0;
        while (stable < 5) {
          await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
          stable = scrollY === previous ? stable + 1 : 0;
          previous = scrollY;
        }
      });
      const outline = await link.evaluate((element) => getComputedStyle(element).outlineWidth);
      assert(parseFloat(outline) > 0, "Visible keyboard outline");
      return;
    }
  }
  assert.fail("Keyboard cannot reach first related-record card");
}

try {
  for (const theme of ["dark", "light"] as const) {
    for (const width of [320, 390, 639, 640, 1280]) {
      const context = await browser.newContext({ viewport: { width, height: 960 }, colorScheme: theme });
      await context.addInitScript((value) => localStorage.setItem("vrising-theme", value), theme);
      const page = await context.newPage();
      page.setDefaultTimeout(15000);
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      try {
        for (const fixture of cases) {
          await ready(page, fixture);
          const measurement = await measure(page, fixture);
          await page.screenshot({ path: path.join(output, `${fixture.id}-${theme}-${width}.png`), fullPage: true, animations: "disabled" });
          if (!before && [320, 1280].includes(width)) {
            await focusFirstCard(page);
            if (fixture.id === "aftershock-jewel") await page.screenshot({ path: path.join(output, `focus-${theme}-${width}.png`), animations: "disabled" });
            await page.keyboard.press("Enter");
            await page.waitForURL(baseUrl + fixture.refs[0].path);
            await page.goBack();
            await page.getByRole("heading", { level: 1, name: fixture.title, exact: true }).waitFor();
            assert.equal(new URL(page.url()).pathname, fixture.path);
            await measure(page, fixture);
          }
          receipts.push({ key: `${fixture.id}-${theme}-${width}`, ...measurement,
            keyboardAndBack: !before && [320, 1280].includes(width) ? "passed" : "not-run" });
        }
        if (!before && width === 320) {
          const fixture = cases[0], icon = fixture.refs[0].icon;
          assert(icon);
          await page.route(`**${icon}`, (route) => route.abort());
          await ready(page, fixture);
          await measure(page, fixture);
          await focusFirstCard(page);
          assert.equal(await page.locator(selector).first().locator("img").evaluate((image) => (image as HTMLImageElement).naturalWidth), 0);
          await page.screenshot({ path: path.join(output, `failed-artwork-${theme}-320.png`), animations: "disabled" });
          receipts.push({ key: `failed-artwork-${theme}`, labelsAndLink: "passed" });
        }
        assert.deepEqual(errors, []);
      } finally { await context.close(); }
    }
  }
  if (!before) {
    const extension = path.join(output, "local-zoom-extension");
    await mkdir(extension, { recursive: true });
    await writeFile(path.join(extension, "manifest.json"), JSON.stringify({ manifest_version: 3, name: "Local linked-record zoom check", version: "1.0",
      host_permissions: [`${new URL(baseUrl).origin}/*`], background: { service_worker: "worker.js" } }));
    await writeFile(path.join(extension, "worker.js"), "chrome.runtime.onInstalled.addListener(() => {});\n");
    for (const theme of ["dark", "light"] as const) {
      const profile = await mkdtemp(path.join(output, "zoom-profile-"));
      const context = await chromium.launchPersistentContext(profile, { channel: "chromium", headless: true,
        viewport: { width: 1280, height: 960 }, colorScheme: theme,
        args: [`--disable-extensions-except=${extension}`, `--load-extension=${extension}`] });
      try {
        await context.addInitScript((value) => localStorage.setItem("vrising-theme", value), theme);
        const worker = context.serviceWorkers()[0] ?? await context.waitForEvent("serviceworker");
        const page = context.pages()[0] ?? await context.newPage();
        for (const fixture of [cases[0], cases[3], cases[5]]) {
          await ready(page, fixture);
          const factor = await worker.evaluate(async (url) => {
            const api = (globalThis as unknown as { chrome: { tabs: {
              query(input: { url: string }): Promise<Array<{ id: number }>>;
              setZoom(id: number, factor: number): Promise<void>; getZoom(id: number): Promise<number>;
            } } }).chrome;
            const [tab] = await api.tabs.query({ url });
            await api.tabs.setZoom(tab.id, 2);
            return api.tabs.getZoom(tab.id);
          }, `${new URL(baseUrl).origin}/*`);
          assert.equal(factor, 2);
          await page.waitForFunction(() => devicePixelRatio === 2 && innerWidth === 640 && innerHeight === 480);
          await measure(page, fixture);
          await focusFirstCard(page);
          const session = await context.newCDPSession(page);
          try {
            const capture = await session.send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false, fromSurface: true });
            await writeFile(path.join(output, `zoom200-${fixture.id}-${theme}.png`), Buffer.from(capture.data, "base64"));
          } finally { await session.detach(); }
          await page.keyboard.press("Enter");
          await page.waitForURL(baseUrl + fixture.refs[0].path);
          receipts.push({ key: `zoom200-${fixture.id}-${theme}`, nativeZoom: factor, effectiveCssViewport: "640x480", keyboardCard: "passed" });
        }
      } finally {
        await context.close();
        if (path.dirname(path.resolve(profile)) !== output) throw new Error("Unexpected zoom profile path");
        await rm(profile, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
      }
    }
  }
  await writeFile(path.join(output, "checks.json"), JSON.stringify(receipts, null, 2) + "\n");
  console.log(`Linked-record ${before ? "before capture" : "acceptance"} passed: 60 matrix captures${before ? "." : ", four focus captures, two failed-artwork captures, six native zoom checks."}`);
} finally { await browser.close(); }
