import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium, type Page } from "playwright";
import type { DbEntityDetail } from "../src/types/db";
import { getBlueprintVisualFixtures } from "./blueprint-visual-fixtures";

const baseUrl = process.env.BLUEPRINT_REVIEW_URL ?? "http://127.0.0.1:5174";
assert(["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname));
const output = path.resolve(".codex-tmp/visual-review/blueprint-materials");
const fixtures = getBlueprintVisualFixtures();
const detail = JSON.parse(await readFile(`public/data/db/blueprints/by-slug/${fixtures.materials.slug}.json`, "utf8")) as DbEntityDetail;
const material = detail.buildMaterials![0];
const receipts: Record<string, unknown>[] = [];
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true });
async function ready(page: Page, route: string) {
  await page.goto(baseUrl + route);
  await page.locator("main h1").waitFor();
  await page.evaluate(() => document.fonts.ready);
}
async function tabTo(page: Page, selector: string) {
  for (let count = 0; count < 80; count++) {
    await page.keyboard.press("Tab");
    if (await page.locator(selector).evaluate((element) => element === document.activeElement)) return;
  }
  assert.fail(`Keyboard cannot reach ${selector}`);
}
async function settleFocusedLink(page: Page, selector: string) {
  // Focus scrolls smoothly on this site; capture only once the focused link is visible.
  await page.waitForFunction((target) => {
    const element = document.querySelector(target);
    const rect = element?.getBoundingClientRect();
    return element === document.activeElement && rect && rect.top >= 0 && rect.bottom <= innerHeight;
  }, selector);
  await page.evaluate(async () => {
    let previous = scrollY;
    let stableFrames = 0;
    while (stableFrames < 5) {
      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
      stableFrames = scrollY === previous ? stableFrames + 1 : 0;
      previous = scrollY;
    }
  });
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
      await ready(page, fixtures.materials.path);
      const selector = `#relation-build-materials a[href='${material.path}']`;
      assert.match(await page.locator(selector).innerText(), new RegExp(`${material.amount}x`));
      await tabTo(page, selector);
      await settleFocusedLink(page, selector);
      await page.screenshot({ path: path.join(output, `material-focus-${theme}-${viewport.width}.png`) });
      await page.keyboard.press("Enter");
      await page.waitForURL(baseUrl + material.path);
      await page.locator("main h1").waitFor();
      assert.equal(await page.locator("main h1").innerText(), material.title);
      await page.goBack();
      await page.locator("#relation-build-materials").waitFor();
      await page.reload();
      await page.locator("#relation-build-materials").waitFor();
      assert.equal(new URL(page.url()).pathname, fixtures.materials.path);
      const crumbs = page.locator("nav[aria-label='Breadcrumbs']");
      assert(await crumbs.getByRole("link", { name: "Blueprints", exact: true }).count());
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth), 0);
      await page.route(`**${fixtures.artwork.portraitAssetPath}`, (route) => route.abort());
      await ready(page, fixtures.artwork.path);
      await page.waitForFunction(() => document.querySelectorAll("main header .database-record-artwork").length === 0);
      assert.equal(await page.locator("main h1").count(), 1);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth), 0);
      await page.screenshot({ path: path.join(output, `artwork-failure-${theme}-${viewport.width}.png`), fullPage: true });
      assert.deepEqual(errors, []);
      receipts.push({ theme, width: viewport.width, keyboard: "Tab/Enter material navigation passed", reloadBackBreadcrumbs: "passed",
        artworkFailure: "passed", material: material.path });
      await context.close();
    }
  }
  // Use the retained closeout harness's native zoom contract and compositor capture.
  const extension = path.join(output, "local-zoom-extension");
  await mkdir(extension, { recursive: true });
  await writeFile(path.join(extension, "manifest.json"), JSON.stringify({ manifest_version: 3, name: "Local Blueprint zoom check", version: "1.0",
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
      await ready(page, fixtures.materials.path);
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
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth), 0);
      await tabTo(page, `#relation-build-materials a[href='${material.path}']`);
      await settleFocusedLink(page, `#relation-build-materials a[href='${material.path}']`);
      const session = await context.newCDPSession(page);
      try {
        const capture = await session.send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false, fromSurface: true });
        await writeFile(path.join(output, `materials-zoom200-${theme}.png`), Buffer.from(capture.data, "base64"));
      } finally { await session.detach(); }
      receipts.push({ theme, nativeZoom: factor, effectiveCssViewport: "640x480", devicePixelRatio: 2, overflow: 0, keyboardMaterialLink: "passed" });
    } finally {
      await context.close();
      // Only remove the temporary profile created by this run inside its artifact directory.
      if (path.dirname(path.resolve(profile)) !== output) throw new Error("Unexpected zoom profile path");
      await rm(profile, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
    }
  }
  await writeFile(path.join(output, "checks.json"), JSON.stringify(receipts, null, 2) + "\n");
  console.log("Blueprint material checks passed: four keyboard/navigation/fallback runs, two native zoom checks, ten captures.");
} finally {
  await browser.close();
}
