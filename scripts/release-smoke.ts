import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdir, mkdtemp, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium, type Browser, type Page } from "playwright";
import { settleExpansionKeyboardFocus } from "./blueprint-expansion-focus-scroll";
import { smokeOptions, readReleaseFixtures, requireFonts, requireVisibleImages, checkDetail, checkContainment, checkReference } from "./release-smoke-support";

const root = fileURLToPath(new URL("../", import.meta.url));
const help = "npm run smoke:release -- --url https://mfoltz.github.io [--output /external/evidence] [--preflight]";
type RecordRow = Record<string, unknown>;

async function main() {
  if (process.argv.includes("--help")) { console.log(help); return; }
  const options = smokeOptions(process.argv.slice(2));
  // Complete all fixture joins before launching a browser or creating a run directory.
  const fixtures = await readReleaseFixtures(root);
  if (options.preflight) {
    console.log(JSON.stringify({ status: "RELEASE_SMOKE_PREFLIGHT_PASSED", browserLaunched: false,
      base: options.base, outputParent: options.output, blueprints: fixtures.blueprints.length,
      stoneUses: fixtures.stone.materialBlueprints!.length })); return;
  }
  await mkdir(options.output, { recursive: true });
  const output = await mkdtemp(path.join(options.output, "release-"));
  console.log("Release smoke evidence: " + output);
  const startedUtc = new Date().toISOString();
  const records: RecordRow[] = [], requests: RecordRow[] = [], searchIndex: RecordRow[] = [], errors: string[] = [], captures: RecordRow[] = [];
  let browser: Browser | undefined, failure: unknown;
  const git = (...args: string[]) => execFileSync("git", ["--no-optional-locks", ...args], { cwd: root, encoding: "utf8" }).trim();
  const hash = (bytes: Buffer) => createHash("sha256").update(bytes).digest("hex");
  const inputs = ["scripts/release-smoke.ts", "scripts/release-smoke-support.ts", "scripts/blueprint-expansion-focus-scroll.ts",
    "scripts/blueprint-expansion-browser-evaluation.ts", "scripts/blueprint-visual-fixtures.ts",
    "scripts/blueprint-text-remaining-fixtures.ts", "public/data/db/blueprints/index.json", "public/data/db/items/index.json",
    "data/prefabs/All.json", "public/data/db/items/by-slug/" + fixtures.stone.slug + ".json",
    ...fixtures.blueprints.map(f => "public/data/db/blueprints/by-slug/" + f.entry.slug + ".json")];
  let local: RecordRow = {};
  const capture = async (page: Page, name: string, settleImages = true) => {
    if (settleImages) await requireVisibleImages(page);
    const filename = name + ".png";
    const bytes = await page.screenshot({ path: path.join(output, filename), animations: "disabled" });
    captures.push({ filename, sha256: hash(bytes), url: page.url() });
  };
  const ready = async (page: Page, route: string) => {
    const response = await page.goto(options.base + route, { waitUntil: "domcontentloaded", timeout: 30000 });
    assert(response && [200, 404].includes(response.status()), "Expected 200 or the Pages SPA deep-route 404 fallback");
    await page.locator("main h1").first().waitFor({ timeout: 20000 });
    await requireFonts(page); await checkContainment(page);
    return response.status();
  };
  try {
    local = { head: git("rev-parse", "HEAD"), tree: git("rev-parse", "HEAD^{tree}"),
      dirty: git("status", "--porcelain").length > 0,
      inputSha256: Object.fromEntries(await Promise.all(inputs.map(async file => [file, hash(await readFile(path.join(root, file)))]))) };
    browser = await chromium.launch({ headless: true });
    for (const settings of [{ theme: "dark", width: 390 }, { theme: "light", width: 1280 }] as const) {
      // Normal browser requests: global cache-control headers break cross-origin font preflights.
      const context = await browser.newContext({ viewport: { width: settings.width, height: 960 }, colorScheme: settings.theme });
      await context.addInitScript("localStorage.setItem('vrising-theme', " + JSON.stringify(settings.theme) + ")");
      const page = await context.newPage(); page.setDefaultTimeout(15000);
      page.on("pageerror", error => errors.push(error.message));
      page.on("response", response => {
        if (new URL(response.url()).pathname === "/data/search.index.json")
          searchIndex.push({ event: "response", theme: settings.theme, timestampUtc: new Date().toISOString(),
            status: response.status(), contentLength: response.headers()["content-length"] ?? null });
      });
      page.on("requestfinished", request => {
        if (new URL(request.url()).pathname === "/data/search.index.json")
          searchIndex.push({ event: "finished", theme: settings.theme, timestampUtc: new Date().toISOString() });
      });
      page.on("requestfailed", request => requests.push({ url: request.url(), resourceType: request.resourceType(),
        error: request.failure()?.errorText, theme: settings.theme }));
      try {
        assert.equal(await ready(page, "/"), 200, "Homepage must return 200");
        await capture(page, "home-" + settings.theme);
        for (const fixture of fixtures.blueprints) {
          const status = await ready(page, fixture.entry.path);
          await checkDetail(page, fixture.detail);
          await capture(page, fixture.entry.slug + "-" + settings.theme);
          records.push({ check: "detail", prefab: fixture.detail.prefab, guid: fixture.detail.guid, title: fixture.detail.title,
            ...settings, directStatus: status, fonts: "Inter/Cinzel loaded", exactText: true });
        }
        await ready(page, "/db/blueprints");
        await page.locator("main a.database-ledger-row").first().waitFor();
        assert(await page.locator("main a.database-ledger-row").count() > 0);
        await capture(page, "browse-" + settings.theme);
        const first = fixtures.blueprints[0];
        await ready(page, "/search?" + new URLSearchParams({ q: first.detail.prefab!, scope: "db" }));
        const result = page.locator('main a[href="' + first.entry.path + '"]').first();
        await result.waitFor({ timeout: 60000 }); assert((await result.innerText()).includes(first.detail.title));
        await capture(page, "search-" + settings.theme);
        await ready(page, "/db/items/" + fixtures.stone.slug + "?keep=release&usesQ=iron&usesShown=24#linked-records");
        const group = page.locator("#item-blueprint-uses"), input = group.getByRole("searchbox");
        const links = group.locator('a[href^="/db/blueprints/"]');
        await input.waitFor(); assert.equal(await links.count(), 12);
        await group.getByRole("button", { name: "Show more", exact: true }).press("Enter");
        await links.nth(23).waitFor(); assert.equal(await links.count(), 24);
        await page.waitForFunction(href => document.activeElement instanceof HTMLAnchorElement
          && document.activeElement.getAttribute("href") === href, await links.nth(12).getAttribute("href"));
        await settleExpansionKeyboardFocus(page);
        assert(await links.nth(12).evaluate(element => element === document.activeElement), "First revealed link focused");
        const target = fixtures.target, query = target.prefab.toUpperCase() + " " + target.guid;
        await input.fill(query);
        await group.locator("#item-blueprint-uses-count").filter({ hasText: /Showing 1 of 1/ }).waitFor();
        const link = await checkReference(page, target), filtered = page.url();
        await capture(page, "material-links-" + settings.theme);
        await link.press("Enter"); await page.waitForURL(options.base + target.path);
        await page.getByRole("heading", { level: 1, name: target.title, exact: true }).waitFor();
        await page.locator("#source-provenance > summary").click();
        const source = page.getByRole("link", { name: "Open Prefab Reference", exact: true });
        assert.equal(await source.getAttribute("href"), fixtures.linked.detail.prefabPath);
        await source.click(); await page.waitForURL(options.base + fixtures.linked.detail.prefabPath);
        await page.locator("main h1").first().waitFor();
        assert((await page.locator("main").innerText()).includes(target.prefab));
        await page.goBack(); await page.goBack(); await input.waitFor();
        assert.equal(page.url(), filtered); assert.equal(await input.inputValue(), query);
        await page.reload(); await input.waitFor(); assert.equal(await input.inputValue(), query);
        for (const [key, value] of [["usesQ", "iron"], ["usesShown", "24"], ["keep", "release"]])
          assert.equal(new URL(page.url()).searchParams.get(key), value);
        assert.equal(new URL(page.url()).hash, "#linked-records");
        records.push({ check: "navigation", ...settings, browse: true, globalSearch: true, materialSearch: true,
          totalUses: fixtures.stone.materialBlueprints!.length, expansion: 24, keyboard: true, quantities: true,
          sourceNavigation: true, independentParams: true, backReload: true });
      } catch (error) {
        await capture(page, "failure-" + settings.theme, false).catch(() => undefined); throw error;
      } finally { await context.close(); }
    }
    assert.deepEqual(errors, [], "No browser JavaScript errors");
    assert.equal(captures.length, 24); assert.equal(records.length, 18);
  } catch (error) { failure = error; }
  finally { try { await browser?.close(); } catch (error) { failure ??= error; } }
  const receipt = { status: failure ? "RELEASE_SMOKE_FAILED" : "RELEASE_SMOKE_PASSED", startedUtc,
    finishedUtc: new Date().toISOString(), base: options.base, local, records, captures, errors, requestFailures: requests, searchIndex,
    failure: failure instanceof Error ? { message: failure.message, stack: failure.stack } : failure ? String(failure) : null,
    directRoutePolicy: "Pages 404.html SPA fallback accepted only with rendered content; homepage requires 200.",
    limits: "Manual smoke against local expected data; does not establish deployed commit identity or replace full visual regression." };
  await writeFile(path.join(output, "receipt.json"), JSON.stringify(receipt, null, 2) + "\n");
  console.log(receipt.status + ": " + output);
  if (failure) throw failure;
}

main().catch(error => { console.error(error); process.exitCode = 1; });
