import assert from "node:assert/strict";
import test from "node:test";
import type { DbEntityDetail, DbIndexEntry } from "../src/types/db";
import { assertRemainingReviewItem, readRemainingReviewItems, remainingItemReviewPins } from "./blueprint-text-remaining-fixtures";
const pin = remainingItemReviewPins[2];
function fixture() {
  const entry = { slug: pin.slug, title: "Iron Ingot", path: "/db/items/" + pin.slug,
    tags: [pin.prefab, String(pin.guid)] } as DbIndexEntry;
  const detail = { slug: pin.slug, title: "Iron Ingot", prefab: pin.prefab, guid: pin.guid,
    sourcePath: "content/prefabs/" + pin.prefab + ".md" } as DbEntityDetail;
  return { entries: [entry], detail, canonical: { [pin.prefab]: pin.guid } as Record<string, number> };
}
test("Iron Ingot uses its exact recorded prefab, signed GUID and mineral-iron-bar route", () => {
  const f = fixture(); assert.equal(assertRemainingReviewItem(pin, f.entries, f.detail, f.canonical).path,
    "/db/items/item-ingredient-mineral-iron-bar");
});
for (const [label, change] of Object.entries({
  "missing record": (f: ReturnType<typeof fixture>) => { f.entries = []; },
  "ambiguous record": (f: ReturnType<typeof fixture>) => { f.entries.push({ ...f.entries[0] }); },
  "guessed route": (f: ReturnType<typeof fixture>) => { f.entries[0].path = "/db/items/item-ingredient-iron-ingot"; },
  "guessed slug": (f: ReturnType<typeof fixture>) => { f.detail.slug = "item-ingredient-iron-ingot"; },
  "GUID sign": (f: ReturnType<typeof fixture>) => { f.detail.guid = -pin.guid; },
  "GUID tag": (f: ReturnType<typeof fixture>) => { f.entries[0].tags = [pin.prefab, String(-pin.guid)]; },
  "canonical identity": (f: ReturnType<typeof fixture>) => { f.canonical[pin.prefab] = 0; },
  "source ownership": (f: ReturnType<typeof fixture>) => { f.detail.sourcePath += ".other"; }
})) test("rejects " + label + " before browser launch", () => {
  const f = fixture(); change(f); assert.throws(() => assertRemainingReviewItem(pin, f.entries, f.detail, f.canonical));
});
test("missing artwork and duplicate display names retain exact distinct identities", () => {
  const f = fixture(); f.entries.push({ ...f.entries[0], slug: "other", path: "/db/items/other", tags: ["Item_Other", "1"] });
  assert.equal(assertRemainingReviewItem(pin, f.entries, f.detail, f.canonical).slug, pin.slug);
  assert.equal(f.detail.portraitAssetPath, undefined);
});
test("all four real review items join without private-path dependencies", async () => {
  const rows = await readRemainingReviewItems(process.cwd());
  assert.equal(rows.length, 4);
  assert.deepEqual(rows.map(row => [row.detail.prefab, row.detail.guid, row.route]),
    remainingItemReviewPins.map(pin => [pin.prefab, pin.guid, "/db/items/" + pin.slug]));
});
