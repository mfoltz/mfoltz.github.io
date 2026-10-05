import assert from "node:assert/strict";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium, type Page } from "playwright";
import type { DbEntityDetail, DbItemDetail, DbRelatedEntityRef } from "../src/types/db";
import { blueprintUnlockSourcePath } from "./blueprint-unlocks";

const base = process.env.BROWSE_REVIEW_URL ?? "http://127.0.0.1:5192";
assert(["localhost", "127.0.0.1"].includes(new URL(base).hostname));
const phase = process.env.HYPHEN_REVIEW_PHASE ?? "after";
assert(["before", "after"].includes(phase));
const output = path.resolve(process.env.HYPHEN_REVIEW_OUTPUT ?? ".codex-tmp/visual-review/blueprint-hyphens");
const json = async <T,>(file: string): Promise<T> => JSON.parse(await readFile(file, "utf8"));
const pins = await json<Array<{ source: string; sourceGuid: number; target: string; guid: number; book: string | null }>>("scripts/fixtures/blueprint-hyphen-links.json");
assert.equal(pins.length, 38);
const load = async <T extends DbEntityDetail>(section: string) => {
  const index = await json<Array<{ slug: string }>>(`public/data/db/${section}/index.json`);
  return Promise.all(index.map(row => json<T>(`public/data/db/${section}/by-slug/${row.slug}.json`)));
};
const [blueprints, items] = await Promise.all([load<DbEntityDetail>("blueprints"), load<DbItemDetail>("items")]);
const books = [...new Set(pins.flatMap(pin => pin.book ? [pin.book] : []))].map(prefab => items.find(row => row.prefab === prefab)!);
assert.equal(books.length, 3); assert(books.every(Boolean));
const representativePins = [pins.find(pin => pin.book)!, pins.find(pin => pin.book?.includes("Path_"))!, pins.find(pin => !pin.book)!];
const browser = await chromium.launch({ headless: true });
const receipts: unknown[] = [];
await mkdir(path.join(output, phase), { recursive: true });
async function ready(page: Page, section: string, detail: DbEntityDetail) {
  await page.goto(`${base}/db/${section}/${detail.slug}`, { waitUntil: "domcontentloaded" });
  await page.getByRole("heading", { level: 1, name: detail.title, exact: true }).waitFor();
  assert(await page.evaluate(async () => {
    await document.fonts.ready;
    return (await Promise.all(["400 16px Inter", "500 16px Cinzel"].map(font => document.fonts.load(font))))
      .every(faces => faces.some(face => face.status === "loaded"));
  }), "Loaded Inter/Cinzel required");
  await page.locator("main img").evaluateAll(async images => Promise.all(images.map(async element => {
    const image = element as HTMLImageElement; image.loading = "eager"; try { await image.decode(); } catch { /* existing fallback */ }
  })));
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth), 0);
  assert((await page.locator("main").innerText()).includes(detail.prefab!));
}
async function capture(page: Page, name: string) {
  await page.screenshot({ path: path.join(output, phase, `${name}.png`), fullPage: true, animations: "disabled" });
}
try {
  for (const theme of ["dark", "light"] as const) for (const width of [320, 390, 639, 640, 1280]) {
    const context = await browser.newContext({ viewport: { width, height: 960 }, colorScheme: theme });
    await context.addInitScript(value => localStorage.setItem("vrising-theme", value), theme);
    const page = await context.newPage(), errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    try {
      for (const book of books) {
        await ready(page, "items", book);
        const group = page.locator("#item-book-blueprints"), search = group.getByRole("searchbox");
        const recovered = pins.filter(pin => pin.book === book.prefab);
        for (const pin of recovered) {
          await search.fill(pin.target);
          const cards = group.locator("#book-blueprint-targets [data-db-reference]");
          await page.waitForFunction(count => document.querySelectorAll("#book-blueprint-targets [data-db-reference]").length === count, phase === "after" ? 1 : 0);
          if (phase === "after") {
            assert.equal(await cards.getAttribute("data-db-reference"), pin.target);
            assert.equal(await cards.locator("[data-db-reference-prefab]").textContent(), pin.target);
            assert.equal(await cards.locator("[data-db-reference-guid]").textContent(), String(pin.guid));
            assert.equal(await cards.locator("[data-db-reference-amount]").count(), 0);
            const target = blueprints.find(row => row.prefab === pin.target)!;
            assert.equal(await cards.locator("xpath=..").getAttribute("href"), `/db/blueprints/${target.slug}`);
          }
        }
        await group.getByRole("button", { name: "Clear search", exact: true }).click();
        assert.equal(await group.locator("[data-db-reference-amount]").count(), 1, "Source requirement appears once");
        assert.match(await group.locator("[data-db-reference-amount]").innerText(), /Book requirement: 1/i);
        assert(await group.locator("#book-blueprint-targets [data-db-reference]").evaluateAll(cards => cards.every(card =>
          [...card.querySelectorAll<HTMLElement>("[data-db-reference-title], [data-db-reference-prefab], [data-db-reference-guid]")].every(element => {
            const box = card.getBoundingClientRect(), rect = element.getBoundingClientRect();
            return rect.left >= box.left - 1 && rect.right <= box.right + 1 && element.scrollWidth <= element.clientWidth;
          }))), "Complete names and identifiers stay contained");
        await capture(page, `${book.slug}-${theme}-${width}`);
        receipts.push({ book: book.prefab, theme, width, recovered: recovered.length, fonts: "loaded" });
      }
      const targetPins = width === 320 ? pins : representativePins;
      for (const pin of targetPins) {
        const target = blueprints.find(row => row.prefab === pin.target)!;
        assert(target && target.guid === pin.guid);
        await ready(page, "blueprints", target);
        const group = page.locator("#relation-unlock-source-records"), route = blueprintUnlockSourcePath(`content/prefabs/${pin.source}.md`);
        if (phase === "after") {
          assert((await group.innerText()).includes(pin.source));
          const sourceLink = group.locator(`a[href='${route}']`); assert.equal(await sourceLink.count(), 1);
          const book = pin.book ? items.find(row => row.prefab === pin.book)! : undefined;
          assert.equal(await group.getByRole("heading", { name: "Book requirements", exact: true }).count(), book ? 1 : 0);
          if (book) {
            await group.locator(`a[href='/db/items/${book.slug}']`).click();
            await page.getByRole("heading", { level: 1, name: book.title, exact: true }).waitFor();
            await page.locator("#item-book-blueprints").getByRole("searchbox").fill(pin.target);
            const link = page.locator("#book-blueprint-targets a"); await link.waitFor();
            const returnUrl = page.url();
            await link.focus(); await page.keyboard.press("Enter");
            await page.waitForURL(`${base}/db/blueprints/${target.slug}`);
            await page.goBack(); await link.waitFor(); assert.equal(page.url(), returnUrl);
            await page.goForward(); await page.waitForURL(`${base}/db/blueprints/${target.slug}`);
            await page.getByRole("heading", { level: 1, name: target.title, exact: true }).waitFor();
          }
        } else assert.match(await group.innerText(), /No unlock source is linked/);
        if (representativePins.includes(pin)) {
          await capture(page, `${target.slug}-${theme}-${width}`);
          if (phase === "after" && [320, 1280].includes(width)) {
            await group.locator(`a[href='${route}']`).click();
            await page.locator(".reader-document").waitFor();
            for (const name of ["ProjectM.TechUnlockBlueprintBuffer", ...(pin.book ? ["ProjectM.TechItemRequirementBuffer"] : [])]) {
              const heading = page.getByRole("heading", { name, exact: true }), buffer = heading.locator("xpath=ancestor::details[1]");
              if (await buffer.getAttribute("open") === null) await heading.click();
              const text = await buffer.innerText();
              assert(text.includes(name.endsWith("TechUnlockBlueprintBuffer") ? `${pin.target} PrefabGuid(${pin.guid})` : pin.book!));
              if (name.endsWith("TechItemRequirementBuffer")) assert(text.includes("Stacks: 1"));
            }
          }
        }
        receipts.push({ target: pin.target, theme, width, bookRequirement: Boolean(pin.book), expectedSourceLinked: phase === "after" });
      }
      assert.deepEqual(errors, []);
    } finally { await context.close(); }
  }
} finally { await browser.close(); }
await writeFile(path.join(output, `${phase}-checks.json`), JSON.stringify(receipts, null, 2));
console.log(`Hyphenated Blueprint ${phase} review passed: ${receipts.length} checks, 60 captures, fonts loaded`);
