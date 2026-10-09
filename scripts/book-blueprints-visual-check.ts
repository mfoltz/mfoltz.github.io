import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium, type Page, type Locator } from "playwright";
import type { DbItemDetail, DbBookBlueprintRef } from "../src/types/db";
import { filterBookBlueprints, bookDeclaringSources } from "../src/lib/bookBlueprintBrowse";
import { assertFocusedReferenceVisible } from "./reference-focus";
import { nativeZoomRecorder, openNativeZoomController } from "./blueprint-text-zoom";

const baseUrl = process.env.BOOK_BLUEPRINTS_REVIEW_URL ?? "http://127.0.0.1:5191";
assert(["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname));
const output = path.resolve(process.env.BOOK_BLUEPRINTS_REVIEW_OUTPUT ?? ".codex-tmp/visual-review/book-blueprints");
const zoomProbe = process.argv.includes("--native-zoom-probe");
const captures = path.join(output, "after");
const slugs = ["item-ingredient-book-structure-paintings-t01", "item-ingredient-book-structure-carpets-t01",
  "item-ingredient-book-structure-storage-armor-t02", "item-ingredient-book-structure-storage-blood-case-t02", "item-vampire-coating-blood"];
const json = async <T,>(file: string): Promise<T> => JSON.parse(await readFile(file, "utf8"));
const cases = await Promise.all(slugs.map(async slug => {
  const detail = await json<DbItemDetail>(`public/data/db/items/by-slug/${slug}.json`);
  return { slug, detail, path: `/db/items/${slug}`, refs: detail.bookBlueprints ?? [] };
}));
const receipts: unknown[] = [], measurements: unknown[] = [];
await mkdir(captures, { recursive: true });
const browser = await chromium.launch({ headless: true });
const targetSelector = "#book-blueprint-targets [data-db-reference]";
const sourceSelector = "#book-declaring-technologies [data-db-reference]";
async function ready(page: Page, fixture: typeof cases[number], query = "") {
  await page.goto(baseUrl + fixture.path + query, { waitUntil: "domcontentloaded", timeout: 90000 });
  await page.getByRole("heading", { level: 1, name: fixture.detail.title, exact: true }).waitFor();
  assert(await page.evaluate(async () => {
    await document.fonts.ready;
    const families = await Promise.all(["400 16px Inter", "500 16px Cinzel"].map(font => document.fonts.load(font)));
    return families.every(family => family.some(face => face.status === "loaded"));
  }), "Loaded Inter/Cinzel required");
  await page.locator("main img").evaluateAll(async images => Promise.all(images.map(async image => {
    (image as HTMLImageElement).loading = "eager"; try { await (image as HTMLImageElement).decode(); } catch { /* fallback */ }
  })));
}
async function capture(page: Page, name: string) {
  assert(await page.evaluate(async () => {
    await document.fonts.ready;
    const faces = await Promise.all(["400 16px Inter", "500 16px Cinzel"].map(font => document.fonts.load(font)));
    return faces.every(family => family.some(face => face.status === "loaded"));
  }), "Loaded fonts required for each inspected capture");
  await page.screenshot({ path: path.join(captures, `${name}.png`), fullPage: true, animations: "disabled" });
}
async function measure(page: Page, fixture: typeof cases[number], expected: DbBookBlueprintRef[]) {
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth), 0, "Page containment");
  const cards = await page.locator(targetSelector).evaluateAll(elements => elements.map(card => ({
    title: card.querySelector("[data-db-reference-title]")?.textContent,
    prefab: card.querySelector("[data-db-reference-prefab]")?.textContent,
    guid: card.querySelector("[data-db-reference-guid]")?.textContent,
    amount: card.querySelector("[data-db-reference-amount]")?.textContent,
    path: card.closest("a")?.getAttribute("href")
  })));
  assert.deepEqual(cards, expected.map(row => ({ title: row.title, prefab: row.prefab, guid: String(row.guid), amount: undefined, path: row.path })), "Exact complete target identities, order and destinations; no book amounts");
  const owners = bookDeclaringSources(fixture.refs);
  const sources = await page.locator(sourceSelector).evaluateAll(elements => elements.map(card => ({
    title: card.querySelector("[data-db-reference-title]")?.textContent,
    prefab: card.querySelector("[data-db-reference-prefab]")?.textContent,
    guid: card.querySelector("[data-db-reference-guid]")?.textContent,
    amount: card.querySelector("[data-db-reference-amount]")?.textContent,
    path: card.closest("a")?.getAttribute("href")
  })));
  assert.deepEqual(sources, owners.map(row => ({ title: row.title, prefab: row.prefab, guid: String(row.guid),
    amount: row.amount === undefined ? undefined : `Book requirement: ${row.amount}`, path: row.path })), "Source requirements displayed once per owner");
  assert.equal(await page.locator("#item-book-blueprints a a").count(), 0, "No nested anchors");
  for (const row of expected) {
    const footer = page.locator(`${targetSelector}[data-db-reference="${row.prefab}"]`).locator("xpath=../..").locator("[data-book-blueprint-source]");
    assert.deepEqual(await footer.evaluateAll(elements => elements.map(element => element.getAttribute("href"))),
      owners.length > 1 ? row.declaringSources.map(owner => owner.path) : [], "Each multiple-source target identifies its declaring technologies");
  }
  const bounds = await page.locator("#item-book-blueprints [data-db-reference]").evaluateAll(elements => elements.map(card => {
    const box = card.getBoundingClientRect();
    const title = card.querySelector<HTMLElement>("[data-db-reference-title]")!, prefab = card.querySelector<HTMLElement>("[data-db-reference-prefab]")!;
    const metadata = card.querySelector<HTMLElement>("[data-db-reference-metadata]")!;
    return { prefab: prefab.textContent, width: innerWidth,
      contained: [title, prefab, metadata, ...metadata.children].every(element => {
        const rect = element.getBoundingClientRect();
        return rect.x >= box.x - 1 && rect.right <= box.right + 1 && rect.y >= box.y - 1 && rect.bottom <= box.bottom + 1;
      }), wraps: title.scrollWidth <= title.clientWidth && prefab.scrollWidth <= prefab.clientWidth,
      below: metadata.getBoundingClientRect().y >= prefab.getBoundingClientRect().bottom - 1,
      beside: metadata.getBoundingClientRect().x >= card.firstElementChild!.getBoundingClientRect().right + 15 };
  }));
  assert(bounds.every(row => row.contained && row.wraps && (row.width >= 640 ? row.beside : row.below)), "Contained complete names/metadata without overlap; mobile metadata below names");
  const footerContained = await page.locator("[data-book-blueprint-source]").evaluateAll(elements => elements.every(element => {
    const box = element.getBoundingClientRect(), parent = element.parentElement!.getBoundingClientRect();
    return box.left >= parent.left - 1 && box.right <= parent.right + 1 && element.scrollWidth <= element.clientWidth;
  }));
  assert(footerContained, "Source footer wrapping/containment");
  measurements.push({ url: page.url(), cards, sources, bounds });
}
async function keyboardFocus(page: Page, link: Locator) {
  for (let i = 0; i < 220; i++) {
    await page.keyboard.press("Tab");
    if (await link.evaluate(element => element === document.activeElement)) {
      measurements.push({ focus: await assertFocusedReferenceVisible(page, link) });
      return;
    }
  }
  assert.fail("Blueprint link unreachable by keyboard");
}
async function interactions(page: Page, key: string) {
  const fixture = cases[0], group = page.locator("#item-book-blueprints"), search = group.getByRole("searchbox");
  const more = group.getByRole("button", { name: "Show more", exact: true });
  await ready(page, fixture);
  assert.equal(fixture.refs.length, 49);
  let shown = 12;
  while (shown < 49) {
    const previous = shown;
    const first = fixture.refs[shown];
    await more.click(); shown = Math.min(shown + 12, 49);
    await page.waitForFunction(count => document.querySelectorAll("#book-blueprint-targets [data-db-reference]").length === count, shown);
    assert.equal(await page.evaluate(() => document.activeElement?.querySelector<HTMLElement>("[data-db-reference]")?.dataset.dbReference), first.prefab);
    measurements.push({ expansionFocus: await assertFocusedReferenceVisible(page, page.locator(targetSelector).nth(previous).locator("xpath=.."), false) });
  }
  await measure(page, fixture, fixture.refs); await capture(page, `${key}-all49`);
  await ready(page, fixture, "?keep=review&usesQ=iron&usesShown=36&bookShown=24#linked-records");
  const target = fixture.refs[20], query = `${target.prefab.toUpperCase()} ${target.guid}`;
  await search.fill(query);
  await page.waitForFunction(() => document.querySelectorAll("#book-blueprint-targets [data-db-reference]").length === 1);
  const params = new URL(page.url()).searchParams;
  assert.equal(params.get("bookQ"), query); assert.equal(params.get("bookShown"), null);
  assert.equal(params.get("keep"), "review"); assert.equal(params.get("usesQ"), "iron"); assert.equal(params.get("usesShown"), "36");
  assert.equal(new URL(page.url()).hash, "#linked-records");
  await measure(page, fixture, [target]); await capture(page, `${key}-identifier-search`);
  const owner = target.declaringSources[0];
  await search.fill(`${owner.prefab.toUpperCase()} ${owner.guid}`);
  await page.waitForFunction(() => document.querySelectorAll("#book-blueprint-targets [data-db-reference]").length === 12);
  await measure(page, fixture, filterBookBlueprints(fixture.refs, `${owner.prefab} ${owner.guid}`).slice(0,12));
  await search.fill("no-recorded-blueprint-matches-this");
  await page.getByText("No recorded Blueprint links match this search.", { exact: true }).waitFor();
  await measure(page, fixture, []); await capture(page, `${key}-unmatched`);
  await group.getByRole("button", { name: "Clear search", exact: true }).click();
  assert(await search.evaluate(element => element === document.activeElement));
  await measure(page, fixture, fixture.refs.slice(0,12));
  await more.click();
  await page.waitForFunction(() => document.querySelectorAll("#book-blueprint-targets [data-db-reference]").length === 24);
  const returnUrl = page.url(); await page.keyboard.press("Enter");
  await page.waitForURL(baseUrl + fixture.refs[12].path);
  await page.goBack(); await search.waitFor(); assert.equal(page.url(), returnUrl);
  await measure(page, fixture, fixture.refs.slice(0,24));
  await page.reload({ waitUntil: "domcontentloaded" }); await search.waitFor();
  await measure(page, fixture, fixture.refs.slice(0,24)); await capture(page, `${key}-restored`);
  const ownerLink = page.locator(sourceSelector).first().locator("xpath=..");
  await ownerLink.click(); await page.waitForURL(baseUrl + owner.path);
  for (const component of [owner.sourceComponent, owner.unlockSourceComponent]) {
    const heading = page.getByRole("heading", { name: component, exact: true }); await heading.waitFor();
    const buffer = heading.locator("xpath=ancestor::details[1]");
    if (await buffer.getAttribute("open") === null) await heading.click();
    const text = await buffer.innerText();
    assert(text.includes(component === owner.sourceComponent ? fixture.detail.prefab! : target.prefab));
    assert(text.includes(String(component === owner.sourceComponent ? fixture.detail.guid : target.guid)));
    if (component === owner.sourceComponent) assert(text.includes(`Stacks: ${owner.amount}`));
  }
  await capture(page, `${key}-technology-source`);
  await page.goBack(); await search.waitFor(); assert.equal(page.url(), returnUrl);
  for (const value of ["garbage", "-12", "2.5", "9999"]) {
    await ready(page, fixture, `?bookShown=${value}`);
    await measure(page, fixture, fixture.refs.slice(0, value === "9999" ? 49 : 12));
  }
  await ready(page, fixture);
  const link = page.locator(targetSelector).first().locator("xpath=..");
  await keyboardFocus(page, link); await capture(page, `${key}-focus`);
  await page.keyboard.press("Enter"); await page.waitForURL(baseUrl + fixture.refs[0].path);
  const blueprint = await json<{ title: string }>(`public/data/db/blueprints/by-slug/${fixture.refs[0].slug}.json`);
  await page.getByRole("heading", { level: 1, name: blueprint.title, exact: true }).waitFor();
  await page.locator(`a[href="${fixture.path}"]`).first().waitFor();
  assert(await page.locator(`a[href="${fixture.path}"]`).count() > 0, "Blueprint forward book link survives");
  receipts.push({ key, all49: "passed", search: "target/source/combined terms", returnState: "passed", sourceBuffers: "passed", keyboard: "passed" });
}
async function zoom() {
  const record = nativeZoomRecorder(output);
  for(const theme of ["dark","light"] as const){
    const controller = await openNativeZoomController(baseUrl, theme, record);
    const { context, page } = controller;
    try{
      for(const fixture of cases.slice(0,2)){
        await ready(page,fixture);
        const factor=await controller.setZoom();
        assert.equal(factor,2);await page.waitForFunction(()=>devicePixelRatio===2&&innerWidth===640&&innerHeight===480);
        await measure(page,fixture,fixture.refs.slice(0,12));
        await keyboardFocus(page,page.locator(targetSelector).first().locator("xpath=.."));
        const session=await context.newCDPSession(page);
        try{const shot=await session.send("Page.captureScreenshot",{format:"png",captureBeyondViewport:false,fromSurface:true});
          await writeFile(path.join(captures,`zoom200-${fixture.slug}-${theme}.png`),Buffer.from(shot.data,"base64"));
        }finally{await session.detach()}
        await page.keyboard.press("Enter");await page.waitForURL(baseUrl+fixture.refs[0].path);
        receipts.push({theme,fixture:fixture.slug,nativeZoom:factor,keyboard:"passed"});
      }
    }finally{await controller.close()}
  }
}
try{
  if (!zoomProbe) {
  for(const theme of ["dark","light"] as const) for(const width of [320,390,639,640,1280]){
    const context=await browser.newContext({viewport:{width,height:960},colorScheme:theme});
    await context.addInitScript(value=>localStorage.setItem("vrising-theme",value),theme);
    const page=await context.newPage(),errors:string[]=[];page.on("pageerror",error=>errors.push(error.message));
    try{
      for(const fixture of cases){
        await ready(page,fixture);await measure(page,fixture,fixture.refs.slice(0,12));
        assert.equal(await page.locator("#item-book-blueprints").count(),fixture.refs.length?1:0);
        await capture(page,`${fixture.slug}-${theme}-${width}`);receipts.push({fixture:fixture.slug,theme,width,fonts:"loaded"});
      }
      if([320,1280].includes(width))await interactions(page,`${theme}-${width}`);
      if(width===320){
        const index=await json<Array<{slug:string}>>("public/data/db/items/index.json");
        let art:typeof cases[number]|undefined;
        for(const row of index){const detail=await json<DbItemDetail>(`public/data/db/items/by-slug/${row.slug}.json`);
          if(detail.bookBlueprints?.some(ref=>ref.icon)){art={slug:row.slug,detail,path:`/db/items/${row.slug}`,refs:detail.bookBlueprints};break}}
        assert(art,"Existing Blueprint artwork fixture required");
        const icon=art.refs.find(row=>row.icon)!.icon!;let failures=0;
        await page.route(`**${icon}`,route=>{failures++;return route.abort()});
        await ready(page,art,"?bookShown=9999");await measure(page,art,art.refs);assert(failures>0);
        await keyboardFocus(page,page.locator(targetSelector).first().locator("xpath=.."));
        await capture(page,`failed-artwork-${theme}`);receipts.push({theme,failedArtwork:"passed",fixture:art.slug});
      }
      assert.deepEqual(errors,[]);
    }finally{await context.close()}
  }
  }
}finally{await browser.close()}
await zoom();
await writeFile(path.join(output,"measurements.json"),JSON.stringify(measurements,null,2));
await writeFile(path.join(output,zoomProbe ? "native-zoom-probe-receipt.json" : "receipt.json"),JSON.stringify(receipts,null,2));
console.log(`Book Blueprint ${zoomProbe ? "native zoom diagnostic" : "acceptance"}: ${receipts.length} checks, fonts loaded`);
