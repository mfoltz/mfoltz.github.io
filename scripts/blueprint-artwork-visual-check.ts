import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium, type Page } from "playwright";
import type { BuildablePortraitReviewSnapshot } from "./buildable-portrait-review";
import type { DbIndexEntry } from "../src/types/db";
import { runtimeBlueprintArtworkPrefabs } from "./blueprint-runtime-artwork";

const baseUrl = process.env.BROWSE_REVIEW_URL ?? "http://127.0.0.1:5174";
assert(["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname), "Local preview required");
const output = path.resolve(".codex-tmp/visual-review/blueprint-artwork");
const review = JSON.parse(await readFile("data/enrichment/buildable-portrait-review.json", "utf8")) as BuildablePortraitReviewSnapshot;
const entries = JSON.parse(await readFile("public/data/db/blueprints/index.json", "utf8")) as DbIndexEntry[];
const curated = review.entries.filter(row => row.evidenceKind === "curated-unique-name-match").sort((a, b) => a.prefab.localeCompare(b.prefab));
const fixtures = ["Stairs", "Floor", "Wall"].map(category => {
  const approved = curated.find(row => row.prefab.includes(`_Castle_${category}_`));
  const entry = entries.find(row => row.tags?.[0] === approved?.prefab);
  assert(approved && entry?.portraitAssetPath, `Missing ${category} artwork fixture`);
  return { category, approved, entry };
});
const native = runtimeBlueprintArtworkPrefabs.map(prefab => {
  const approved = review.entries.find(row => row.prefab === prefab);
  const entry = entries.find(row => row.tags?.[0] === prefab);
  assert(approved?.evidenceKind === "runtime-sprite-name" && entry?.portraitAssetPath, `Missing native fixture: ${prefab}`);
  return { approved, entry };
}).sort((a, b) => a.approved.prefab.localeCompare(b.approved.prefab));
const workstations = JSON.parse(await readFile("public/data/db/workstations/index.json", "utf8")) as DbIndexEntry[];
let captureCount = 0;
const checks: Record<string, unknown>[] = [];
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true });

async function ready(page: Page, route: string) {
  await page.goto(baseUrl + route);
  await page.locator("main h1").waitFor();
  await page.evaluate(() => document.fonts.ready);
}
async function imageLoaded(page: Page, selector: string, expected: string) {
  const image = page.locator(selector);
  await image.waitFor();
  assert.equal(await image.getAttribute("src"), expected);
  await page.waitForFunction(selector => {
    const element = document.querySelector<HTMLImageElement>(selector);
    return element?.complete && element.naturalWidth > 0 && element.naturalHeight > 0;
  }, selector);
}
async function capture(page: Page, id: string, theme: string, width: number) {
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth), 0, `${id}: horizontal overflow`);
  await page.screenshot({ path: path.join(output, `${id}-${theme}-${width}.png`) });
  captureCount++;
}

try {
  for (const theme of ["dark", "light"] as const) {
    for (const viewport of [{ width: 320, height: 700 }, { width: 1280, height: 960 }]) {
      const context = await browser.newContext({ viewport, colorScheme: theme });
      await context.addInitScript(value => localStorage.setItem("vrising-theme", value), theme);
      const page = await context.newPage();
      const errors: string[] = [];
      page.on("pageerror", error => errors.push(error.message));
      page.setDefaultTimeout(15000);
      for (const fixture of fixtures) {
        await ready(page, fixture.entry.path);
        await imageLoaded(page, "main header .database-record-artwork", fixture.entry.portraitAssetPath!);
        assert.equal(await page.locator("main h1").innerText(), fixture.entry.title);
        assert.equal(await page.locator("nav[aria-label='Breadcrumbs'] a[href='/db/blueprints']").count(), 1);
        await capture(page, `detail-${fixture.category.toLowerCase()}`, theme, viewport.width);
        if (fixture.category === "Stairs") {
          await page.locator("#source-provenance summary").click();
          assert.match(await page.locator("#source-provenance").innerText(), /curated-unique-name-match/i);
          assert.match(await page.locator("#source-provenance").innerText(), /buildable-portrait-review\.json/);
        }
      }
      const fixture = fixtures[0];
      const query = encodeURIComponent(fixture.approved.prefab);
      await ready(page, `/db/blueprints?q=${query}`);
      await imageLoaded(page, "main .database-ledger-row .database-record-artwork", fixture.entry.portraitAssetPath!);
      assert.equal(await page.locator("main .database-ledger-row").count(), 1);
      if (viewport.width === 320) await page.locator("main .database-ledger-row").scrollIntoViewIfNeeded();
      await capture(page, "browse-stairs", theme, viewport.width);
      await ready(page, `/search?q=${query}&scope=blueprints`);
      await imageLoaded(page, `main a[href='${fixture.entry.path}'] .database-record-artwork`, fixture.entry.portraitAssetPath!);
      if (viewport.width === 320) await page.locator(`main a[href='${fixture.entry.path}']`).scrollIntoViewIfNeeded();
      await capture(page, "search-stairs", theme, viewport.width);
      for (const fixture of native) {
        await ready(page, fixture.entry.path);
        await imageLoaded(page, "main header .database-record-artwork", fixture.entry.portraitAssetPath!);
        assert.equal(await page.locator("main h1").innerText(), fixture.entry.title);
        assert.equal(await page.locator("nav[aria-label='Breadcrumbs'] a[href='/db/blueprints']").count(), 1);
        await capture(page, `native-detail-${fixture.entry.slug}`, theme, viewport.width);
        await page.locator("#source-provenance summary").click();
        assert.match(await page.locator("#source-provenance").innerText(), /runtime-sprite-name/i);
        assert.match(await page.locator("#source-provenance").innerText(), /buildable-portrait-review\.json/);
        if (fixture.approved.prefab === "BP_Castle_Wall_Tier01_Wood_Entrance" || fixture.approved.prefab === "TM_Castle_Wall_Tier02_Stone_Entrance") {
          const query = encodeURIComponent(fixture.approved.prefab);
          await ready(page, `/db/blueprints?q=${query}`);
          const target = `main a[href='${fixture.entry.path}']`;
          assert.equal(await page.locator(target).count(), 1);
          await imageLoaded(page, `${target} .database-record-artwork`, fixture.entry.portraitAssetPath!);
          if (viewport.width === 320) await page.locator(target).scrollIntoViewIfNeeded();
          await capture(page, `native-browse-${fixture.entry.slug}`, theme, viewport.width);
          await ready(page, `/search?q=${query}&scope=blueprints`);
          await imageLoaded(page, `main a[href='${fixture.entry.path}'] .database-record-artwork`, fixture.entry.portraitAssetPath!);
          if (viewport.width === 320) await page.locator(`main a[href='${fixture.entry.path}']`).scrollIntoViewIfNeeded();
          await capture(page, `native-search-${fixture.entry.slug}`, theme, viewport.width);
        }
        const workstation = workstations.find(row => row.tags?.[0] === fixture.approved.prefab);
        if (workstation) {
          await ready(page, workstation.path);
          await imageLoaded(page, "main header .database-record-artwork", fixture.entry.portraitAssetPath!);
          await capture(page, `workstation-${workstation.slug}`, theme, viewport.width);
        }
      }
      assert.deepEqual(errors, []);
      checks.push({ theme, width: viewport.width, fixtures: fixtures.map(row => row.approved.prefab), nativeFixtures: native.map(row => row.approved.prefab), detail: "loaded", browse: "loaded", search: "loaded", curatedProvenance: "visible", nativeProvenance: "visible", breadcrumbs: "passed", overflow: 0 });
      await context.close();
    }
  }
  const request = await browser.newContext();
  for (const approved of review.entries) {
    const fileName = path.posix.basename(approved.sourceRef);
    const response = await request.request.get(baseUrl + `/icons/buildables/${fileName}`);
    assert.equal(response.status(), 200, approved.prefab);
    assert.equal(createHash("sha256").update(await response.body()).digest("hex"), approved.sha256, approved.prefab);
  }
  await request.close();
  await writeFile(path.join(output, "checks.json"), JSON.stringify({ runs: checks, captures: captureCount, servedReviewedRecords: review.entries.length, servedOriginalImages: new Set(review.entries.map(row => row.sourceRef)).size }, null, 2) + "\n");
  console.log(`Blueprint artwork checks passed: four theme/viewport runs, ${captureCount} captures, 57 original images served.`);
} finally {
  await browser.close();
}
