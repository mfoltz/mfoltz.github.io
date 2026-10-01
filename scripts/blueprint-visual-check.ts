import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium, type Page } from "playwright";
import { getBlueprintBrowseModel } from "../src/lib/blueprintBrowse";
import type { DbEntityDetail, DbRelatedEntityRef } from "../src/types/db";
import { getBlueprintVisualFixtures } from "./blueprint-visual-fixtures";

const baseUrl = process.env.BROWSE_REVIEW_URL ?? "http://127.0.0.1:5174";
assert(["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname), "Local preview required");
const output = path.resolve(".codex-tmp/visual-review/blueprint-integration");
const fixtures = getBlueprintVisualFixtures();
const detail = JSON.parse(await readFile(`public/data/db/blueprints/by-slug/${fixtures.linkedBooks.slug}.json`, "utf8")) as DbEntityDetail;
const sources = detail.unlockSources as DbRelatedEntityRef[];
const bookOwner = sources.find((source) => source.requiredBooks?.length);
const book = bookOwner?.requiredBooks?.[0];
assert(bookOwner?.path && book?.path && book.prefab, "Review requires canonical source and book links");
const receipts: Record<string, unknown>[] = [];
const browser = await chromium.launch({ headless: true });
await mkdir(output, { recursive: true });

async function ready(page: Page, route: string, list = false) {
  await page.goto(baseUrl + route);
  await page.locator(list ? "main .database-ledger-row" : "main .database-panel h1").first().waitFor();
  await page.evaluate(() => document.fonts.ready);
}

async function checkRows(page: Page) {
  const params = new URL(page.url()).searchParams;
  const expected = getBlueprintBrowseModel(fixtures.entries, params).filtered.slice(0, 120).map((entry) => entry.title);
  await page.waitForFunction((titles) => JSON.stringify([...document.querySelectorAll("main .database-ledger-row h2")].map((element) => element.textContent)) === JSON.stringify(titles), expected);
  assert.deepEqual(await page.locator("main .database-ledger-row h2").allTextContents(), expected);
}

try {
  for (const theme of ["dark", "light"] as const) {
    for (const viewport of [{ width: 320, height: 700 }, { width: 390, height: 844 }, { width: 1280, height: 960 }]) {
      const context = await browser.newContext({ viewport, colorScheme: theme });
      await context.addInitScript((value) => localStorage.setItem("vrising-theme", value), theme);
      const page = await context.newPage();
      const runtimeErrors: string[] = [];
      page.on("pageerror", (error) => runtimeErrors.push(error.message));
      page.setDefaultTimeout(15000);
      const routes = [
        { id: "browse", path: "/db/blueprints", list: true },
        { id: "filtered", path: "/db/blueprints?books=linked&sort=sources", list: true },
        { id: "books", path: fixtures.linkedBooks.path },
        { id: "no-books", path: fixtures.linkedNoBooks.path },
        { id: "unlinked", path: fixtures.unlinked.path },
        { id: "materials", path: fixtures.materials.path },
        { id: "artwork", path: fixtures.artwork.path },
        { id: "empty-materials", path: fixtures.emptyMaterials.path },
        { id: "held-materials", path: fixtures.heldMaterials.path }
      ];
      for (const route of routes) {
        await ready(page, route.path, route.list);
        if (route.list) await checkRows(page);
        if (route.id === "filtered") await page.getByRole("button", { name: "Show filters", exact: true }).click();
        if (route.id === "books") {
          assert.equal(await page.locator("#relation-unlock-source-records").getByRole("heading", { name: "Book requirements" }).count(), sources.filter((source) => source.requiredBooks?.length).length);
          await page.locator("nav[aria-label='Detail sections'] a[href='#relation-unlock-source-records']").click();
          await page.locator("#relation-unlock-source-records h3").first().waitFor();
        }
        if (route.id === "unlinked") {
          assert.match(await page.locator("#relation-unlock-source-records").innerText(), /Availability is not established/);
          assert.equal(await page.getByRole("heading", { name: "Book requirements" }).count(), 0);
        }
        if (route.id === "materials" || route.id === "artwork") {
          assert.match(await page.locator("#relation-build-materials").innerText(), /Recorded material requirements/);
          assert((await page.locator("#relation-build-materials a[href^='/db/items/']").count()) > 0);
        }
        if (route.id === "artwork") {
          const art = page.locator("main header .database-record-artwork");
          assert.equal(await art.getAttribute("src"), fixtures.artwork.portraitAssetPath);
          await page.waitForFunction(() => [...document.querySelectorAll<HTMLImageElement>("main header img")].every((img) => img.complete && img.naturalWidth > 0));
        }
        if (route.id === "empty-materials" || route.id === "held-materials") {
          assert.match(await page.locator("#relation-build-materials").innerText(), /Build cost is unknown/);
          assert.equal(await page.locator("#relation-build-materials a").count(), 0);
          if (route.id === "held-materials") assert.match(await page.locator("#relation-build-materials").innerText(), /zero-valued/);
        }
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
        assert(overflow <= 0, `${theme}/${viewport.width}/${route.id}: overflow ${overflow}`);
        if (!route.list) assert.equal(await page.locator("main h1").count(), 1);
        await page.screenshot({ path: path.join(output, `${route.id}-${theme}-${viewport.width}.png`), fullPage: !route.list });
        receipts.push({ theme, width: viewport.width, route: route.path, overflow });
      }

      await ready(page, "/db/blueprints", true);
      assert.equal(await page.locator("main .database-ledger-row").count(), 120);
      await page.getByRole("button", { name: "Show more blueprints" }).click();
      assert.equal(await page.locator("main .database-ledger-row").count(), 240);
      await page.getByRole("button", { name: "Show filters", exact: true }).click();
      await page.getByLabel("Source type", { exact: true }).selectOption(bookOwner.sourceType!);
      await page.getByLabel("Source linkage", { exact: true }).selectOption("linked");
      await page.getByLabel("Book linkage", { exact: true }).selectOption("linked");
      const historyBeforeSort = page.url();
      await page.getByLabel("Sort", { exact: true }).selectOption("sources");
      await page.getByRole("searchbox", { name: "Search blueprints" }).fill(book.title);
      await checkRows(page);
      assert((await page.locator("main .database-ledger-row").count()) > 0, "Book display-name search must find linked Blueprints");
      await page.getByRole("searchbox", { name: "Search blueprints" }).fill(book.prefab);
      await checkRows(page);
      assert((await page.locator("main .database-ledger-row").count()) > 0);
      const filteredUrl = page.url();
      await page.getByRole("button", { name: "Hide filters", exact: true }).click();
      assert.match(await page.locator("main .database-sticky-panel").innerText(), /Books: linked/i);
      await page.reload();
      await page.locator("main .database-ledger-row").first().waitFor();
      assert.equal(page.url(), filteredUrl);
      await checkRows(page);
      await page.goBack();
      assert.equal(page.url(), historyBeforeSort);
      await checkRows(page);
      await page.goForward();
      assert.equal(page.url(), filteredUrl);
      await checkRows(page);
      await page.getByRole("button", { name: "Clear filters", exact: true }).click();
      assert.equal(new URL(page.url()).search, "");
      await checkRows(page);
      await page.getByRole("searchbox", { name: "Search blueprints" }).fill("blueprint-no-match-987654321");
      await page.getByText("No blueprints match these filters.").waitFor();
      await page.getByRole("button", { name: "Clear filters", exact: true }).click();
      await checkRows(page);

      await ready(page, fixtures.linkedBooks.path);
      await page.locator(`#relation-unlock-source-records a[href='${bookOwner.path}']`).click();
      assert.equal(new URL(page.url()).pathname, bookOwner.path);
      await page.locator(".reader-document").waitFor();
      await ready(page, fixtures.linkedBooks.path);
      await page.locator(`#relation-unlock-source-records a[href='${book.path}']`).click();
      assert.equal(new URL(page.url()).pathname, book.path);
      await page.locator("main h1").waitFor();
      await ready(page, fixtures.unlinked.path);
      await page.locator("nav[aria-label='Breadcrumbs'] a[href='/db/blueprints']").click();
      await page.locator("main .database-ledger-row").first().waitFor();
      assert.equal(new URL(page.url()).pathname, "/db/blueprints");

      let failOnce = true;
      await page.route("**/data/db/blueprints/index.json", async (route) => {
        if (failOnce) { failOnce = false; await route.fulfill({ status: 503, body: "Temporary test failure" }); }
        else await route.continue();
      });
      await page.goto(baseUrl + "/db/blueprints");
      await page.getByRole("button", { name: "Retry", exact: true }).click();
      await page.locator("main .database-ledger-row").first().waitFor();
      await checkRows(page);
      assert.deepEqual(runtimeErrors, []);
      receipts.push({ theme, width: viewport.width, interactions: "passed", source: bookOwner.path, book: book.path });
      await context.close();
    }
  }
  await writeFile(path.join(output, "checks.json"), JSON.stringify(receipts, null, 2) + "\n");
  console.log(`Blueprint visual checks passed: ${receipts.filter((entry) => entry.route).length} captures and six interaction runs.`);
} finally {
  await browser.close();
}
