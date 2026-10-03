import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium, type Page } from "playwright";
import type { DbEntityDetail, DbIndexEntry } from "../src/types/db";

const baseUrl = process.env.JEWEL_REVIEW_URL ?? "http://127.0.0.1:5190";
assert(["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname));
const output = path.resolve(process.env.JEWEL_REVIEW_OUTPUT ?? ".codex-tmp/visual-review/jewel-abilities");
const read = async <T,>(file: string): Promise<T> => JSON.parse(await readFile(file, "utf8"));
const index = await read<DbIndexEntry[]>("public/data/db/items/index.json");
const jewels = index.filter((row) => row.itemType === "Jewel" || row.categories.includes("Jewel"));
const details = new Map<string, DbEntityDetail>();
for (const row of jewels) details.set(row.slug, await read(`public/data/db/items/by-slug/${row.slug}.json`));
const linked = jewels.find((row) => row.subtitle === "Item_Jewel_Chaos_T02_Aftershock");
const unlinked = jewels.find((row) => details.get(row.slug)?.jewelAbilityStatus === "unrecorded");
const ordinary = index.find((row) => row.subtitle === "Item_BloodEssence_T01");
assert(linked && unlinked && ordinary, "Missing jewel navigation fixtures");
const jewel = details.get(linked.slug)!;
const ability = jewel.associatedAbilities![0];
const schools = ["Blood", "Chaos", "Frost", "Illusion", "Storm", "Unholy"];
const schoolFixtures = schools.map((school) => {
  const row = jewels.find((entry) => entry.subtitle?.startsWith(`Item_Jewel_${school}_`) && details.get(entry.slug)?.jewelAbilityStatus === "recorded");
  assert(row, `Missing ${school} jewel fixture`);
  return { school, row, ability: details.get(row.slug)!.associatedAbilities![0] };
});
const receipts: Record<string, unknown>[] = [];
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true });
async function ready(page: Page, row: { path: string; title: string }) {
  await page.goto(baseUrl + row.path);
  await page.getByRole("heading", { name: row.title, exact: true, level: 1 }).waitFor();
  await page.evaluate(() => document.fonts.ready);
  const fontsLoaded = await page.evaluate(async () => {
    const faces = await Promise.all(["400 16px Inter", "500 16px Cinzel"].map((font) => document.fonts.load(font)));
    return faces.every((family) => family.some((face) => face.status === "loaded"));
  });
  assert(fontsLoaded, "Inter and Cinzel must load before visual capture");
}
async function noOverflow(page: Page) {
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth), 0);
}
async function tabTo(page: Page, selector: string) {
  for (let count = 0; count < 80; count++) {
    await page.keyboard.press("Tab");
    if (await page.locator(selector).evaluate((element) => element === document.activeElement)) {
      await page.waitForFunction((target) => {
        const element = document.querySelector(target), rect = element?.getBoundingClientRect();
        return element === document.activeElement && rect && rect.top >= 0 && rect.bottom <= innerHeight;
      }, selector);
      // Capture after the site's smooth focus scroll settles.
      await page.evaluate(async () => {
        let previous = scrollY, stableFrames = 0;
        while (stableFrames < 5) {
          await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
          stableFrames = scrollY === previous ? stableFrames + 1 : 0;
          previous = scrollY;
        }
      });
      return;
    }
  }
  assert.fail(`Keyboard cannot reach ${selector}`);
}
try {
  for (const theme of ["dark", "light"] as const) {
    for (const viewport of [{ width: 320, height: 700 }, { width: 1280, height: 960 }]) {
      const context = await browser.newContext({ viewport, colorScheme: theme });
      await context.addInitScript((value) => localStorage.setItem("vrising-theme", value), theme);
      const page = await context.newPage();
      page.setDefaultTimeout(15000);
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      try {
        for (const fixture of schoolFixtures) {
          await ready(page, fixture.row);
          assert.equal(await page.locator(`#jewel-associated-ability a[href='${fixture.ability.path}']`).count(), 1);
          await noOverflow(page);
          await page.screenshot({ path: path.join(output, `${fixture.school}-${theme}-${viewport.width}.png`), fullPage: true });
        }
        await ready(page, linked);
        const selector = `#jewel-associated-ability a[href='${ability.path}']`;
        await tabTo(page, selector);
        await page.screenshot({ path: path.join(output, `ability-focus-${theme}-${viewport.width}.png`) });
        await page.keyboard.press("Enter");
        await page.waitForURL(baseUrl + ability.path);
        await page.getByRole("heading", { name: ability.title, exact: true, level: 1 }).waitFor();
        const reverse = page.locator(`#relation-spell-jewels a[href='${linked.path}']`);
        assert.equal(await reverse.count(), 1);
        await reverse.click();
        await page.getByRole("heading", { name: linked.title, exact: true, level: 1 }).waitFor();
        await page.reload();
        await page.locator(selector).waitFor();
        assert.equal(new URL(page.url()).pathname, linked.path);
        assert.equal(await page.locator("nav[aria-label='Breadcrumbs']").getByRole("link", { name: "Items", exact: true }).count(), 1);
        await page.locator("#source-provenance summary").click();
        assert.match(await page.locator("#source-provenance").innerText(), /ProjectM\.Shared\.JewelInstance\.OverrideAbilityType/);
        assert((await page.locator("#source-provenance").innerText()).includes(jewel.sourcePath!));
        const browse = `/db/items?view=jewels&q=${encodeURIComponent(jewel.prefab!)}`;
        await page.goto(baseUrl + browse);
        await page.locator(`main a[href='${linked.path}']`).click();
        await page.locator(selector).click();
        await page.waitForURL(baseUrl + ability.path);
        await page.goBack();
        await page.locator(selector).waitFor();
        await page.goBack();
        await page.locator(`main a[href='${linked.path}']`).waitFor();
        assert.equal(new URL(page.url()).searchParams.get("view"), "jewels");
        assert.equal(new URL(page.url()).searchParams.get("q"), jewel.prefab);
        await ready(page, unlinked);
        assert.match(await page.locator("#jewel-associated-ability").innerText(), /No ability association is recorded in this snapshot/);
        assert.equal(await page.locator("#jewel-associated-ability a").count(), 0);
        await noOverflow(page);
        await page.screenshot({ path: path.join(output, `unlinked-${theme}-${viewport.width}.png`), fullPage: true });
        await ready(page, ordinary);
        assert.equal(await page.locator("#jewel-associated-ability").count(), 0);
        assert(ability.icon, "Missing associated ability artwork fixture");
        await page.route(`**${ability.icon}`, (route) => route.abort());
        await ready(page, linked);
        await page.locator(selector).scrollIntoViewIfNeeded();
        await page.waitForFunction((target) => !document.querySelector(target)?.querySelector("img"), selector);
        assert.match(await page.locator(selector).innerText(), /Aftershock/);
        await noOverflow(page);
        await page.screenshot({ path: path.join(output, `artwork-fallback-${theme}-${viewport.width}.png`) });
        assert.deepEqual(errors, []);
        receipts.push({ theme, width: viewport.width, schoolFixtures: schools, keyboard: "Tab/Enter passed",
          reverseLink: "passed", backReloadBrowseStateBreadcrumbs: "passed", provenance: "passed", unrecorded: "passed",
          ordinaryItem: "passed", artworkFallback: "passed", overflow: 0, pageErrors: errors });
      } finally { await context.close(); }
    }
  }
  const extension = path.join(output, "local-zoom-extension");
  await mkdir(extension, { recursive: true });
  await writeFile(path.join(extension, "manifest.json"), JSON.stringify({ manifest_version: 3, name: "Local jewel zoom check", version: "1.0",
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
      await ready(page, linked);
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
      const selector = `#jewel-associated-ability a[href='${ability.path}']`;
      await tabTo(page, selector);
      await noOverflow(page);
      const session = await context.newCDPSession(page);
      try {
        const capture = await session.send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false, fromSurface: true });
        await writeFile(path.join(output, `zoom200-${theme}.png`), Buffer.from(capture.data, "base64"));
      } finally { await session.detach(); }
      await page.keyboard.press("Enter");
      await page.waitForURL(baseUrl + ability.path);
      receipts.push({ theme, nativeZoom: factor, effectiveCssViewport: "640x480", keyboardAbilityLink: "passed", overflow: 0 });
    } finally {
      await context.close();
      if (path.dirname(path.resolve(profile)) !== output) throw new Error("Unexpected zoom profile path");
      await rm(profile, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
    }
  }
  await writeFile(path.join(output, "checks.json"), JSON.stringify(receipts, null, 2) + "\n");
  console.log("Jewel ability visual checks passed: four theme/viewport runs, six schools, 38 captures, two native zoom checks.");
} finally { await browser.close(); }
