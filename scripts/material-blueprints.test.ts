import assert from "node:assert/strict";
import test from "node:test";
import { buildMaterialBlueprints, indexMaterialDestinations, readMaterialBlueprintDocument,
  validateMaterialBlueprints, type MaterialBlueprintDocument, type MaterialDestination } from "./material-blueprints";
const item: MaterialDestination = { title: "Brick", prefab: "Item_Brick", guid: 0, slug: "brick", path: "/db/items/brick" };
const targets: MaterialDestination[] = [
  { title: "Same title", prefab: "BP_Z-Cross", guid: -1, slug: "z-cross", path: "/db/blueprints/z-cross", icon: "/icons/buildables/old.png" },
  { title: "same Title", prefab: "BP_A", guid: 2, slug: "a", path: "/db/blueprints/a" },
  { title: "Alpha", prefab: "BP_First", guid: 3, slug: "first", path: "/db/blueprints/first" }
];
const all = Object.fromEntries([item, ...targets].map(row => [row.prefab, row.guid!])), items = indexMaterialDestinations([item]);
const blueprintLookup = indexMaterialDestinations(targets);
function doc(target = targets[0]): MaterialBlueprintDocument {
  const sourcePath = `content/prefabs/${target.prefab}.md`;
  return { prefab: target.prefab, guid: target.guid, sourcePath, status: "recorded", materials: [{ title: item.title,
    prefab: item.prefab, guid: item.guid, path: item.path, icon: item.icon, amount: 12, sourcePath, sourceComponent: "ProjectM.BlueprintRequirementBuffer" }] };
}
const build = (docs = [doc()]) => buildMaterialBlueprints(docs, items, blueprintLookup, all);
test("deterministic complete target identity, quantities, source paths and optional artwork", () => {
  const docs = targets.map(target => doc(target)), result = build(docs);
  assert.deepEqual(build([...docs].reverse()), result);
  const refs = result.get(item.prefab)!;
  assert.deepEqual(refs.map(row => row.prefab), ["BP_First", "BP_A", "BP_Z-Cross"]);
  assert.equal(refs[2].guid, -1); assert.equal(refs[2].path, targets[0].path); assert.equal(refs[2].icon, targets[0].icon);
  assert.equal(refs[0].icon, undefined); assert.equal(refs[2].amount, 12);
  assert.equal(refs[2].sourcePath, doc().sourcePath); assert.equal(refs[2].sourceComponent, "ProjectM.BlueprintRequirementBuffer");
  validateMaterialBlueprints([{ slug: "brick", title: "Brick", prefab: item.prefab,
    materialBlueprints: JSON.parse(JSON.stringify(refs)) }], result);
  assert.throws(() => validateMaterialBlueprints([{ slug: "brick", title: "Brick", prefab: item.prefab }], result));
  assert.throws(() => validateMaterialBlueprints([], result));
});
test("invalid quantities, identities, provenance and duplicate pairs stop generation", () => {
  for (const amount of [0, -1, NaN, Infinity, undefined]) {
    const row = doc(); row.materials[0].amount = amount; assert.throws(() => build([row]));
  }
  for (const change of [{ guid: -7 }, { path: "/db/items/wrong" }, { sourcePath: "content/prefabs/Other.md" },
    { sourceComponent: "Other" }, { title: "Wrong" }]) {
    const row = doc(); Object.assign(row.materials[0], change); assert.throws(() => build([row]));
  }
  const repeated = doc(); repeated.materials.push({ ...repeated.materials[0] }); assert.throws(() => build([repeated]));
  assert.throws(() => build([doc(), doc()]));
  assert.throws(() => buildMaterialBlueprints([doc()], indexMaterialDestinations([item, item]), blueprintLookup, all));
  assert.throws(() => buildMaterialBlueprints([doc()], items, indexMaterialDestinations([targets[0], targets[0]]), all));
  assert.throws(() => buildMaterialBlueprints([doc()], items, new Map(), all));
  assert.throws(() => buildMaterialBlueprints([doc()], items, indexMaterialDestinations([{ ...targets[0], path: "/bad" }]), all));
  assert.throws(() => build([{ ...doc(), guid: 9007199254740992 }]));
  assert.throws(() => build([{ ...doc(), sourcePath: "../Other.md" }]));
});
function markdown(rows = "- **[0]**\n  - `PrefabGUID: Item_Brick PrefabGuid(0)`\n  - `Amount: 12`") {
  return `---\ntitle: BP_Z-Cross\nguid: -1\n---\n- [ProjectM.BlueprintData](x)\n- [ProjectM.BlueprintRequirementBuffer](x)\n${rows}\n`;
}
test("retained Markdown preserves zero holds and rejects duplicate/malformed source rows", () => {
  const read = (text: string) => readMaterialBlueprintDocument(doc().sourcePath, text, items, all);
  assert.deepEqual(read(markdown()), doc());
  assert.equal(read(markdown("")).status, "empty");
  const zero = read(markdown().replace("Amount: 12", "Amount: 0"));
  assert.equal(zero.status, "zero-valued"); assert.deepEqual(build([zero]), new Map());
  assert.deepEqual(build([{ ...doc(), status: "empty", materials: [] }]), new Map());
  for (const text of [markdown().replace("Amount: 12", "Amount: -1"), markdown().replace("PrefabGuid(0)", "PrefabGuid(3)"),
    markdown().replace("guid: -1", "guid: 1"), markdown().replace("[ProjectM.BlueprintData]", "[Other]"),
    markdown() + "- [ProjectM.BlueprintRequirementBuffer](x)\n", markdown() + "  - `Amount: 12`\n",
    markdown() + "- **[1]**\n  - `PrefabGUID: Item_Brick PrefabGuid(0)`\n  - `Amount: 2`\n"]) assert.throws(() => read(text));
});
