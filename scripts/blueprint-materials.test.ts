import assert from "node:assert/strict";
import test from "node:test";
import { blueprintMaterialComponent, buildBlueprintMaterials, readBlueprintMaterialDocument, validateBlueprintMaterials,
  type BlueprintMaterialDocument, type BlueprintMaterialItem } from "./blueprint-materials";
import type { DbEntityDetail } from "../src/types/db";

const item = { prefab: "Item_Stone", guid: -12, title: "Stone", path: "/db/items/item-stone", icon: "/icons/items/stone.png" };
const items = new Map<string, BlueprintMaterialItem>([[item.prefab, item]]);
const catalog = { Item_Stone: -12 };
const row = { PrefabGUID: "Item_Stone PrefabGuid(-12)", Amount: "10" };
function doc(entries?: Array<Record<string, string>>): BlueprintMaterialDocument {
  return { prefabName: "BP_Wall", sourcePath: "content/prefabs/BP_Wall.md",
    components: new Map(entries ? [[blueprintMaterialComponent, { entries }]] : []) };
}
function detail(): DbEntityDetail {
  return { slug: "bp-wall", title: "Wall", prefab: "BP_Wall", ...buildBlueprintMaterials(doc([row]), items) };
}

test("materials keep exact item identity, quantity and document provenance", () => {
  const built = buildBlueprintMaterials(doc([row]), items);
  assert.equal(built.buildMaterialStatus, "recorded");
  assert.deepEqual(built.buildMaterials, [{ ...item, amount: 10, sourceComponent: blueprintMaterialComponent, sourcePath: doc().sourcePath }]);
  validateBlueprintMaterials(detail(), built, items, catalog);
});

test("missing and empty buffers remain distinct from recorded requirements", () => {
  assert.deepEqual(buildBlueprintMaterials(doc(), items), { buildMaterialStatus: "missing", buildMaterials: [] });
  assert.deepEqual(buildBlueprintMaterials(doc([]), items), { buildMaterialStatus: "empty", buildMaterials: [] });
});

test("a zero quantity holds the complete buffer without discarding source values", () => {
  const another = { ...item, prefab: "Item_Plank", guid: 45, path: "/db/items/item-plank" };
  const lookup = new Map([...items, [another.prefab, another] as const]);
  const built = buildBlueprintMaterials(doc([row, { PrefabGUID: "Item_Plank PrefabGuid(45)", Amount: "0" }]), lookup);
  assert.equal(built.buildMaterialStatus, "zero-valued");
  assert.deepEqual(built.buildMaterials, []);
  assert.deepEqual(built.heldBuildMaterialRows?.map((entry) => entry.amount), [10, 0]);
  validateBlueprintMaterials({ ...detail(), ...built }, built, lookup, { ...catalog, Item_Plank: 45 });
});

test("malformed, negative, nonfinite and missing quantities are rejected", () => {
  for (const Amount of ["", "-1", "NaN", "Infinity", "0x10", "ten"]) {
    assert.throws(() => buildBlueprintMaterials(doc([{ ...row, Amount }]), items), /invalid recorded/);
  }
  assert.throws(() => buildBlueprintMaterials(doc([{ ...row, PrefabGUID: "Item_Stone" }]), items), /invalid recorded/);
});

test("mismatched GUIDs, missing items and duplicate materials cannot become links", () => {
  assert.throws(() => buildBlueprintMaterials(doc([{ ...row, PrefabGUID: "Item_Stone PrefabGuid(13)" }]), items), /identity\/destination/);
  assert.throws(() => buildBlueprintMaterials(doc([row]), new Map()), /identity\/destination/);
  assert.throws(() => buildBlueprintMaterials(doc([row, row]), items), /duplicate/);
  assert.throws(() => buildBlueprintMaterials(doc([row]), new Map([[item.prefab, { ...item, path: "/prefabs/item-stone" }]])), /identity\/destination/);
});

test("validation rejects changed identities, destinations, counts, quantities and provenance", () => {
  const expected = buildBlueprintMaterials(doc([row]), items);
  for (const patch of [{ guid: 99 }, { path: "/db/items/wrong" }, { amount: 1 }, { amount: 0 },
    { amount: NaN }, { sourcePath: "content/prefabs/Other.md" }, { sourceComponent: "Other" }, { icon: "/wrong.png" }]) {
    const broken = detail();
    broken.buildMaterials![0] = { ...broken.buildMaterials![0], ...patch };
    assert.throws(() => validateBlueprintMaterials(broken, expected, items, catalog));
  }
  assert.throws(() => validateBlueprintMaterials({ ...detail(), buildMaterials: [] }, expected, items, catalog), /count/);
  assert.throws(() => validateBlueprintMaterials({ ...detail(), buildMaterialStatus: "empty" }, expected, items, catalog), /status/);
  assert.throws(() => validateBlueprintMaterials(detail(), expected, items, { Item_Stone: 13 }), /identity/);
});

test("independent source reader confines fields to the requirement buffer and preserves empty/missing states", () => {
  const markdown = `- [ProjectM.BlueprintRequirementBuffer](source)\r\n\r\n- **[0]**\r\n  - \`PrefabGUID: ${row.PrefabGUID}\`\r\n  - \`Amount: 10\`\r\n- [ProjectM.Other](source)\r\n- **[0]**\r\n  - \`Amount: 99\``;
  const parsed = readBlueprintMaterialDocument("BP_Wall", doc().sourcePath, markdown);
  assert.deepEqual(buildBlueprintMaterials(parsed, items), buildBlueprintMaterials(doc([row]), items));
  assert.equal(buildBlueprintMaterials(readBlueprintMaterialDocument("BP", "path", "- [ProjectM.BlueprintRequirementBuffer](source)"), items).buildMaterialStatus, "empty");
  assert.equal(buildBlueprintMaterials(readBlueprintMaterialDocument("BP", "path", "no buffer"), items).buildMaterialStatus, "missing");
});
