import assert from "node:assert/strict";
import { existsSync, realpathSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import type { Page } from "playwright";
import type { DbEntityDetail, DbIndexEntry, DbItemDetail, DbRelatedEntityRef } from "../src/types/db";
import { blueprintVisualIdentityPins } from "./blueprint-visual-fixtures";
import { readRemainingReviewItems } from "./blueprint-text-remaining-fixtures";
import { measureReferenceSource, type ExpansionPageMeasurement } from "./blueprint-expansion-browser-evaluation";

export const releaseBlueprintPins = [
  { prefab: "TM_UnitStation_NetherGate", guid: -218354895 },
  { prefab: "TM_Castle_FloorDecor_Carpet01_Cross-Section_Black", guid: 2126004642 },
  { prefab: blueprintVisualIdentityPins.unlinked[0], guid: blueprintVisualIdentityPins.unlinked[1] },
  { prefab: "TM_CraftingStation_AncestralForge", guid: 48521126 },
  { prefab: "TM_Stash_Chest_SafetyBox", guid: 1842080060 },
  { prefab: "TM_CraftingStation_Stables", guid: 472278220 },
  { prefab: "TM_Castle_Floor_AlchemyLabBase", guid: 1049312363 },
  { prefab: "TM_CastleOuterWalls_Towerl01", guid: 754211521 }
] as const;

/** Resolve existing ancestors too, so an output symlink cannot put captures inside Git. */
export function externalOutputDirectory(value: string): string {
  let ancestor = path.resolve(value);
  const suffix: string[] = [];
  while (!existsSync(ancestor)) {
    suffix.unshift(path.basename(ancestor));
    const parent = path.dirname(ancestor);
    assert(parent !== ancestor, "Output needs an existing ancestor"); ancestor = parent;
  }
  const resolved = path.join(realpathSync(ancestor), ...suffix);
  for (let directory = resolved; ; directory = path.dirname(directory)) {
    assert(!existsSync(path.join(directory, ".git")), "Smoke output must be outside every Git checkout");
    if (directory === path.dirname(directory)) break;
  }
  return resolved;
}

export function smokeOptions(args: string[]) {
  let url: string | undefined, output = path.join(tmpdir(), "vrising-release-smoke"), preflight = false;
  for (let i = 0; i < args.length; i++) {
    const flag = args[i];
    if (flag === "--preflight") preflight = true;
    else {
      assert(flag === "--url" || flag === "--output", "Unknown option: " + flag);
      const value = args[++i]; assert(value && !value.startsWith("--"), "Missing value for " + flag);
      if (flag === "--url") { assert(url === undefined, "Duplicate --url"); url = value; }
      else output = value;
    }
  }
  assert(url, "Supply --url for the already-deployed site or an existing preview");
  const site = new URL(url);
  assert(["http:", "https:"].includes(site.protocol) && !site.username && !site.password
    && site.pathname === "/" && !site.search && !site.hash, "Expected an HTTP(S) site origin without credentials, path, query or fragment");
  return { base: site.origin, output: externalOutputDirectory(output), preflight };
}

type Pin = { prefab: string; guid: number };
export function exactBlueprint(pin: Pin, entries: DbIndexEntry[], detail: DbEntityDetail,
  canonical: Record<string, number>) {
  const matches = entries.filter(entry => entry.tags?.includes(pin.prefab));
  assert.equal(matches.length, 1, "Missing/ambiguous Blueprint: " + pin.prefab);
  const entry = matches[0];
  assert(/^[a-z0-9-]+$/.test(entry.slug), "Invalid fixture slug");
  assert.equal(entry.path, "/db/blueprints/" + entry.slug);
  assert(entry.tags?.includes(String(pin.guid)), "Blueprint GUID tag mismatch");
  assert.equal(detail.slug, entry.slug); assert.equal(detail.title, entry.title);
  assert.equal(detail.prefab, pin.prefab); assert.equal(detail.guid, pin.guid);
  assert.equal(canonical[pin.prefab], pin.guid);
  assert.equal(detail.sourcePath, "content/prefabs/" + pin.prefab + ".md");
  assert(typeof detail.prefabPath === "string" && /^\/prefabs\/[a-z0-9-]+$/.test(detail.prefabPath));
  return { entry, detail };
}

export async function readReleaseFixtures(root: string) {
  const json = async <T,>(relative: string): Promise<T> => JSON.parse(await readFile(path.join(root, relative), "utf8"));
  const entries = await json<DbIndexEntry[]>("public/data/db/blueprints/index.json");
  const canonical = await json<Record<string, number>>("data/prefabs/All.json");
  const readDetail = (slug: string) => json<DbEntityDetail>("public/data/db/blueprints/by-slug/" + slug + ".json");
  const blueprints = await Promise.all(releaseBlueprintPins.map(async pin => {
    const matches = entries.filter(entry => entry.tags?.includes(pin.prefab));
    assert.equal(matches.length, 1, "Missing/ambiguous Blueprint: " + pin.prefab);
    assert(/^[a-z0-9-]+$/.test(matches[0].slug));
    return exactBlueprint(pin, entries, await readDetail(matches[0].slug), canonical);
  }));
  const stone = (await readRemainingReviewItems(root))[0].detail as DbItemDetail;
  assert(stone.materialBlueprints && stone.materialBlueprints.length >= 24, "Stone Brick must exercise expansion");
  const target = stone.materialBlueprints.find(ref => blueprints.some(f => f.detail.prefab === ref.prefab));
  assert(target?.slug && target.path && typeof target.guid === "number", "Missing linked Blueprint fixture");
  assert.equal(stone.materialBlueprints.filter(ref => ref.prefab === target.prefab).length, 1);
  const linked = exactBlueprint({ prefab: target.prefab, guid: target.guid }, entries, await readDetail(target.slug), canonical);
  assert.equal(target.path, linked.entry.path); assert.equal(target.title, linked.detail.title);
  assert(typeof target.amount === "number" && Number.isFinite(target.amount) && target.amount > 0);
  return { blueprints, stone, target, linked };
}

// Strings keep browser evaluation independent of tsx's Node-side __name helper.
export const loadedFontsSource = String.raw`(async () => {
  await document.fonts.ready;
  const groups = await Promise.all(["400 16px Inter", "500 16px Cinzel"].map(font => document.fonts.load(font)));
  return groups.every(faces => faces.some(face => face.status === "loaded"));
})()`;
// waitForFunction must poll a synchronous Boolean; an async Promise is truthy before it resolves.
export const visibleImagesReadySource = String.raw`(() => {
  const images = [...document.images].filter(image => {
    const box = image.getBoundingClientRect();
    return box.width > 0 && box.height > 0 && box.bottom > 0 && box.top < innerHeight
      && box.right > 0 && box.left < innerWidth;
  });
  return images.every(image => image.complete && image.naturalWidth > 0);
})()`;
export const decodeVisibleImagesSource = String.raw`(async () => {
  const images = [...document.images].filter(image => {
    const box = image.getBoundingClientRect();
    return box.width > 0 && box.height > 0 && box.bottom > 0 && box.top < innerHeight
      && box.right > 0 && box.left < innerWidth;
  });
  await Promise.all(images.map(image => image.decode()));
  return images.every(image => image.complete && image.naturalWidth > 0);
})()`;
export async function requireVisibleImages(page: Page) {
  const deadline = Date.now() + 15000;
  const ready = await page.waitForFunction(visibleImagesReadySource, undefined, { timeout: 15000 });
  try { assert.equal(await ready.jsonValue(), true, "Image polling must return exactly true"); }
  finally { await ready.dispose(); }
  const remaining = deadline - Date.now();
  assert(remaining > 0, "Visible-image readiness exceeded 15 seconds");
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    const decoded = await Promise.race([
      page.evaluate<boolean>(decodeVisibleImagesSource),
      new Promise<never>((_, reject) => {
        timer = setTimeout(() => reject(new Error("Visible-image decoding exceeded 15 seconds")), remaining);
      })
    ]);
    assert.equal(decoded, true, "Visible images must remain loaded after decoding");
  } finally { if (timer !== undefined) clearTimeout(timer); }
}
export async function requireFonts(page: Page) {
  assert(await page.evaluate<boolean>(loadedFontsSource), "Loaded Inter/Cinzel required; inspect request failures in receipt.json");
}

export interface DisclosureAccess {
  isOpen(): Promise<boolean>; toggle(): Promise<void>;
  position(): Promise<{ x: number; y: number }>; restore(position: { x: number; y: number }): Promise<void>;
}
export async function withinSourceDisclosure(access: DisclosureAccess, check: () => Promise<void>) {
  const view = await access.position(), wasOpen = await access.isOpen();
  try { if (!wasOpen) await access.toggle(); await check(); }
  finally {
    try { if (await access.isOpen() !== wasOpen) await access.toggle(); }
    finally { await access.restore(view); }
  }
}
export async function checkDetail(page: Page, detail: DbEntityDetail) {
  await page.getByRole("heading", { level: 1, name: detail.title, exact: true }).waitFor();
  assert.equal(await page.locator("main h1").first().textContent(), detail.title);
  const disclosure = page.locator("#source-provenance");
  assert.equal(await disclosure.count(), 1, "Exact source disclosure required");
  await withinSourceDisclosure({
    isOpen: () => disclosure.evaluate(element => (element as HTMLDetailsElement).open),
    toggle: () => disclosure.locator(":scope > summary").click(),
    position: () => page.evaluate(() => ({ x: scrollX, y: scrollY })),
    restore: view => page.evaluate(position => window.scrollTo({ left: position.x, top: position.y, behavior: "instant" }), view)
  }, async () => {
    assert((await page.locator("main").innerText()).includes(detail.prefab!), "Complete prefab required");
    await disclosure.getByText(String(detail.guid), { exact: true }).first().waitFor();
  });
  if (detail.description && detail.descriptionSourceRef?.startsWith("data/enrichment/blueprint-text-")) {
    const description = page.getByText(detail.description.trim(), { exact: true });
    assert.equal(await description.count(), 1, "Owned description displayed once");
    assert(await description.isVisible(), "Owned description visible");
  }
}

export async function checkContainment(page: Page) {
  const result = await page.evaluate<ExpansionPageMeasurement>(measureReferenceSource);
  assert(result.overflow <= 1, "Page containment");
  for (const card of result.cards) for (const field of card.fields) {
    assert(field.overflow <= 1, "Complete reference text");
    assert(field.box.x >= card.card.x - 1 && field.box.right <= card.card.right + 1
      && field.box.y >= card.card.y - 1 && field.box.bottom <= card.card.bottom + 1, "Card content containment");
  }
}

export async function checkReference(page: Page, target: DbRelatedEntityRef) {
  const links = page.locator('#item-blueprint-uses a[href^="/db/blueprints/"]');
  assert.equal(await links.count(), 1);
  assert.equal(await links.first().getAttribute("href"), target.path);
  for (const [field, text] of [["title", target.title], ["prefab", target.prefab],
    ["guid", String(target.guid)], ["amount", target.amount + " required"]]) {
    assert.equal(await links.first().locator("[data-db-reference-" + field + "]").textContent(), text);
  }
  await checkContainment(page);
  return links.first();
}
