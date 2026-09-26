import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium, type Page } from "playwright";

// Run against the local preview after generate:data. No production requests.
const baseUrl = process.env.BROWSE_REVIEW_URL ?? "http://127.0.0.1:5174";
assert.ok(["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname), "A local preview URL is required");
const output = path.resolve(".codex-tmp/visual-review/refinement-matrix");
const routes = [
  { id: "items", path: "/db/items", list: true },
  { id: "abilities", path: "/db/abilities", list: true },
  { id: "item-search", path: "/search?q=blood&scope=items", list: true },
  { id: "blood-essence", path: "/db/items/item-blood-essence-t01" },
  { id: "aftershock", path: "/db/abilities/ab-chaos-aftershock-group" },
  { id: "clive", path: "/db/npcs/char-bandit-bomber-v-blood" },
  { id: "boneguard-boots", path: "/db/recipes/recipe-armor-boots-t01-bone" },
  { id: "jewelcrafting-table", path: "/db/workstations/tm-crafting-station-jewelcrafting-table" }
];
const viewports = process.argv.includes("--interactions-only") ? [] : [{ width: 390, height: 844 }, { width: 768, height: 1024 }, { width: 1280, height: 720 }, { width: 1440, height: 960 }];
const receipts: Record<string, unknown>[] = process.argv.includes("--interactions-only")
  ? JSON.parse(await readFile(path.join(output, "checks.json"), "utf8")).filter((entry: Record<string, unknown>) => entry.key)
  : [];
const browser = await chromium.launch({ headless: true });
await mkdir(output, { recursive: true });

async function go(page: Page, route: typeof routes[number]) {
  await page.goto(baseUrl + route.path);
  await page.locator(route.list ? "main .database-ledger-row" : "main .database-panel h1").first().waitFor();
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(() => [...document.querySelectorAll<HTMLImageElement>("img.database-record-artwork")]
    .filter((img) => { const r = img.getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0; })
    .every((img) => img.complete));
}

async function checkRecipeNames(page: Page) {
  return page.locator(".database-panel dd .database-chip span:last-child").evaluateAll((spans) => {
    const checks: string[] = [];
    for (const span of spans) {
      if (!(span instanceof HTMLElement) || !span.offsetWidth) continue;
      const node = span.firstChild;
      if (!node || node.nodeType !== Node.TEXT_NODE) continue;
      for (const match of (node.textContent ?? "").matchAll(/\S+/g)) {
        const range = document.createRange();
        range.setStart(node, match.index!);
        range.setEnd(node, match.index! + match[0].length);
        if (range.getClientRects().length > 1) checks.push(match[0]);
      }
    }
    return checks;
  });
}

try {
  for (const theme of ["dark", "light"] as const) {
    for (const viewport of viewports) {
      const context = await browser.newContext({ viewport, colorScheme: theme });
      await context.addInitScript((value) => localStorage.setItem("vrising-theme", value), theme);
      const page = await context.newPage();
      for (const route of routes) {
        await go(page, route);
        const key = `${route.id}-${theme}-${viewport.width}`;
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
        const firstTitle = route.list ? await page.locator(".database-ledger-row h2, .database-ledger-row .text-base").first().boundingBox() : null;
        const firstRow = route.list ? await page.locator(".database-ledger-row").first().boundingBox() : null;
        const artwork = route.list ? null : await page.locator("main header .database-record-artwork").boundingBox();
        const recipeBrokenWords = route.id === "boneguard-boots" ? await checkRecipeNames(page) : [];
        await page.screenshot({ path: path.join(output, `${key}.png`) });
        receipts.push({ key, overflow, firstTitle, firstRow, artwork, recipeBrokenWords });
        assert.ok(overflow <= 0, `${key}: horizontal overflow ${overflow}px`);
        if (route.id === "items" || route.id === "abilities") {
          assert.ok(firstTitle && firstTitle.y + firstTitle.height <= viewport.height, `${key}: first title below fold ${JSON.stringify(firstTitle)}`);
          if (viewport.width === 1280) assert.ok(firstRow && firstRow.y + firstRow.height <= viewport.height, `${key}: first record below fold`);
        }
        if (!route.list) {
          assert.ok(artwork && artwork.width > 0 && artwork.height === (viewport.width < 768 ? 64 : viewport.width < 1280 ? 96 : 128), `${key}: detail artwork size`);
        }
        assert.deepEqual(recipeBrokenWords, [], `${key}: recipe names break mid-word`);
        console.log(`[pass] ${key}`);
      }
      await context.close();
    }
  }

  // Pointer and keyboard interactions, plus URL restoration at both layout extremes.
  for (const width of [390, 1280]) {
    const page = await browser.newPage({ viewport: { width, height: 844 } });
    await go(page, routes[0]);
    const rowArt = await page.locator(".database-ledger-row .database-record-artwork").first().boundingBox();
    assert.ok(rowArt && rowArt.width === (width < 640 ? 48 : 64) && rowArt.height === rowArt.width, "Browse thumbnail dimensions");
    let disclosure = page.getByRole("button", { name: "Show filters", exact: true });
    assert.equal(await disclosure.getAttribute("aria-expanded"), "false");
    assert.ok(await page.getByRole("button", { name: /^Jewels / }).isVisible());
    await disclosure.press("Enter");
    assert.equal(await page.getByRole("button", { name: "Hide filters" }).getAttribute("aria-expanded"), "true");
    await page.getByRole("button", { name: /^Jewels / }).first().click();
    await page.waitForURL(/view=jewels/);
    assert.ok(await page.getByRole("button", { name: "Hide filters" }).isVisible());
    await page.locator("main fieldset").last().getByRole("button").nth(1).click();
    await page.waitForURL(/tier=/);
    const facetUrl = page.url();
    await page.reload();
    await page.getByRole("button", { name: "Show filters" }).waitFor();
    assert.equal(page.url(), facetUrl);
    assert.equal(await page.getByRole("button", { name: /^Jewels / }).getAttribute("aria-pressed"), "true");
    await page.getByRole("button", { name: "Show filters" }).click();
    assert.equal(await page.locator("main fieldset").last().getByRole("button").nth(1).getAttribute("aria-pressed"), "true");
    await page.getByRole("button", { name: "Clear filters", exact: true }).click();
    await page.waitForURL(baseUrl + "/db/items");
    assert.ok(await page.getByRole("button", { name: "Hide filters" }).isVisible());
    await page.locator("main input").fill("bone");
    await page.waitForURL(/q=bone/);
    const restoredUrl = page.url();
    await page.reload();
    await page.getByRole("button", { name: "Clear filters", exact: true }).waitFor();
    assert.equal(page.url(), restoredUrl);
    assert.equal(await page.locator("main input").inputValue(), "bone");
    assert.equal(await page.getByRole("button", { name: "Show filters" }).getAttribute("aria-expanded"), "false");
    await page.getByRole("button", { name: "Show filters" }).click();
    await page.locator(".database-ledger-row").first().click();
    await page.locator("main .database-panel h1").waitFor();
    await page.getByRole("navigation", { name: "Breadcrumbs" }).getByRole("link", { name: "Items", exact: true }).click();
    assert.equal(await page.getByRole("button", { name: "Show filters" }).getAttribute("aria-expanded"), "false");

    await go(page, routes[1]);
    assert.ok(await page.getByRole("button", { name: /^Catalog / }).isVisible());
    await page.getByRole("button", { name: /^All Records / }).press("Enter");
    await page.waitForURL(/view=all/);
    assert.equal(await page.getByRole("button", { name: "Show filters" }).getAttribute("aria-expanded"), "false");

    await go(page, routes[2]);
    for (const label of ["All Results", "Database", "Reference"]) {
      assert.ok(await page.getByRole("button", { name: new RegExp(`^${label} `) }).isVisible());
    }
    await page.getByRole("button", { name: "Show filters" }).press("Space");
    await page.getByRole("button", { name: /^Abilities / }).click();
    await page.waitForURL(/scope=abilities/);
    assert.ok(await page.getByRole("button", { name: "Hide filters" }).isVisible());
    await page.getByRole("button", { name: "Clear search" }).click();
    assert.equal(new URL(page.url()).search, "");

    await go(page, routes[4]);
    assert.equal(await page.locator("#tooltip-capture").getAttribute("open"), null);
    await page.locator("a[href='#tooltip-capture']").press("Enter");
    await page.locator("#tooltip-capture[open]").waitFor();
    await page.locator("#tooltip-capture > summary").press("Space");
    assert.equal(await page.locator("#tooltip-capture").getAttribute("open"), null);
    await page.locator("a[href='#tooltip-capture']").click();
    await page.locator("#tooltip-capture[open]").waitFor();
    await page.reload();
    await page.locator("#tooltip-capture[open]").waitFor();
    await page.waitForFunction(() => {
      const box = document.querySelector("#tooltip-capture > summary")?.getBoundingClientRect();
      return box && box.top >= 0 && box.top < innerHeight;
    });
    const tooltip = await page.locator("#tooltip-capture > summary").boundingBox();
    assert.ok(tooltip && tooltip.y >= 0 && tooltip.y < 844, "Tooltip deep link scrolls to the opened section");
    await page.screenshot({ path: path.join(output, `tooltip-deep-link-${width}.png`) });
    receipts.push({ interactionWidth: width, filters: "pass", urlRestoration: "pass", tooltipDeepLinks: "pass" });
    await page.close();
  }

  const page = await browser.newPage();
  await go(page, routes[5]);
  await page.getByRole("navigation", { name: "Breadcrumbs" }).getByRole("link", { name: "NPCs" }).click();
  await page.locator(".database-ledger-row").first().waitFor();
  assert.equal(await page.getByRole("button", { name: "Show filters" }).count(), 0, "NPC default view has no detailed filters");
  await page.getByRole("button", { name: /^Blood Carriers / }).click();
  await page.getByRole("button", { name: "Show filters" }).press("Enter");
  await page.locator("main fieldset button").nth(1).click();
  await page.waitForURL(/blood=/);
  assert.ok(await page.getByRole("button", { name: "Hide filters" }).isVisible());

  // Slow detail navigation must not reuse a previous entity title or fetch twice for breadcrumbs.
  await go(page, routes[6]);
  let release: () => void = () => {};
  const gate = new Promise<void>((resolve) => { release = resolve; });
  let requests = 0;
  await page.route("**/data/db/items/by-slug/*.json", async (route) => {
    requests++;
    await gate;
    await route.continue();
  });
  const outputLink = page.locator(".database-panel .database-chip[href^='/db/items']:visible").first();
  const href = await outputLink.getAttribute("href");
  await outputLink.click();
  await page.getByText("Loading entity detail...").waitFor();
  const crumb = page.locator("nav[aria-label='Breadcrumbs'] [aria-current='page']");
  assert.equal(await crumb.innerText(), href!.split("/").pop()!.replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase()));
  release();
  await page.locator("main .database-panel h1").waitFor();
  assert.equal(await crumb.innerText(), await page.locator("main h1").innerText());
  assert.equal(requests, 1);
  await page.unrouteAll({ behavior: "wait" });

  // Failed image and failed detail fetch leave neither a placeholder nor a stale entity label.
  await page.route("**/icons/**", (route) => route.abort());
  await go(page, routes[3]);
  await page.waitForFunction(() => !document.querySelector("main header .database-record-artwork"));
  assert.equal(await page.locator("main header .database-avatar-well").count(), 0);
  await page.unrouteAll({ behavior: "wait" });
  await page.route("**/data/db/items/by-slug/*.json", (route) => route.abort());
  await page.reload();
  await page.getByText("Failed to fetch", { exact: true }).waitFor();
  assert.equal(await crumb.innerText(), "Item Blood Essence T01");
  receipts.push({ breadcrumbs: "pass", singleDetailFetch: "pass", failedArtwork: "pass", failedDetailFallback: "pass" });
  await page.close();
  console.log("[pass] filter, URL, tooltip, breadcrumb, and failed-artwork interactions");
} finally {
  await writeFile(path.join(output, "checks.json"), JSON.stringify(receipts, null, 2));
  await browser.close();
}
