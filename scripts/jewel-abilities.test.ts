import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import type { DbEntityDetail, DbIndexEntry, DbRelatedEntityRef } from "../src/types/db";
import { buildJewelAbility, indexJewelAbilityDestinations, readJewelAbilityDocument, validateJewelAbility,
  type JewelAbilityDocument, type JewelAbilityDestination } from "./jewel-abilities";

const target: JewelAbilityDestination = { title: "Test Spell", prefab: "AB_Test", guid: -12, slug: "ab-test",
  path: "/db/abilities/ab-test", icon: "/icons/abilities/test.png" };
const catalog = { Item_Jewel_Test: 45, AB_Test: -12 };
const destinations = indexJewelAbilityDestinations([target]);
const doc: JewelAbilityDocument = { prefabName: "Item_Jewel_Test", guid: 45,
  sourcePath: "content/prefabs/Item_Jewel_Test.md", overrideAbilityType: "AB_Test PrefabGuid(-12)" };
const detail = (): DbEntityDetail => ({ slug: "item-jewel-test", title: "Test Jewel", prefab: doc.prefabName, guid: doc.guid,
  overrideAbilityPrefab: target.prefab, ...buildJewelAbility(doc, destinations, catalog) });

test("only an exact recorded identity becomes a current ability route", () => {
  const association = buildJewelAbility(doc, destinations, catalog);
  assert.equal(association.jewelAbilityStatus, "recorded");
  assert.equal(association.associatedAbilities[0].guid, -12);
  assert.equal(association.associatedAbilities[0].path, target.path);
  assert.equal(association.associatedAbilities[0].sourcePath, doc.sourcePath);
  validateJewelAbility(detail(), doc, destinations, catalog);
});

test("missing, blank and GUID Not Found overrides remain unrecorded", () => {
  for (const overrideAbilityType of [undefined, "", "GUID Not Found"]) {
    const association = buildJewelAbility({ ...doc, overrideAbilityType }, destinations, catalog);
    assert.equal(association.jewelAbilityStatus, "unrecorded");
    assert.deepEqual(association.associatedAbilities, []);
  }
});

test("malformed or conflicting identities cannot become associations", () => {
  for (const overrideAbilityType of ["AB_Test", "prefix AB_Test PrefabGuid(-12)", "AB_Test PrefabGuid(-12) trailing",
    "AB_Test PrefabGuid(13)", "AB_Test PrefabGuid(99999999999999999)"]) {
    assert.throws(() => buildJewelAbility({ ...doc, overrideAbilityType }, destinations, catalog));
  }
  assert.throws(() => buildJewelAbility({ ...doc, guid: 99 }, destinations, catalog), /jewel identity/);
  assert.throws(() => buildJewelAbility({ ...doc, sourcePath: "content/prefabs/Other.md" }, destinations, catalog), /source path/);
  assert.throws(() => buildJewelAbility(doc, destinations, { ...catalog, AB_Test: 13 }), /ability identity/);
});

test("missing, ambiguous, mismatched and unsafe ability destinations stop promotion", () => {
  assert.throws(() => buildJewelAbility(doc, indexJewelAbilityDestinations([]), catalog), /missing or ambiguous/);
  assert.throws(() => buildJewelAbility(doc, indexJewelAbilityDestinations([target, { ...target }]), catalog), /ambiguous/);
  for (const patch of [{ guid: 13 }, { path: "/prefabs/ab-test" }, { path: "/db/abilities/wrong" },
    { slug: "../ab-test", path: "/db/abilities/../ab-test" }]) {
    assert.throws(() => buildJewelAbility(doc, indexJewelAbilityDestinations([{ ...target, ...patch }]), catalog));
  }
});

test("validation rejects forged links, lost provenance and fabricated unknown-state links", () => {
  for (const patch of [{ guid: 13 }, { path: "/db/abilities/wrong" }, { title: "Invented" }, { icon: "/wrong.png" },
    { sourceComponent: "Other" }, { sourcePath: "content/prefabs/Other.md" }]) {
    const broken = detail();
    broken.associatedAbilities![0] = { ...broken.associatedAbilities![0], ...patch };
    assert.throws(() => validateJewelAbility(broken, doc, destinations, catalog));
  }
  assert.throws(() => validateJewelAbility({ ...detail(), associatedAbilities: [] }, doc, destinations, catalog), /count/);
  assert.throws(() => validateJewelAbility({ ...detail(), jewelAbilityStatus: "unrecorded" }, doc, destinations, catalog), /jewelAbilityStatus/);
  assert.throws(() => validateJewelAbility(detail(), { ...doc, overrideAbilityType: "GUID Not Found" }, destinations, catalog));
});

test("independent reader confines overrides to JewelInstance and rejects duplicate fields", () => {
  const markdown = `---\r\ntitle: Item_Jewel_Test\r\nguid: 45\r\n---\r\n- [ProjectM.Shared.JewelInstance](source)\r\n` +
    "  - `OverrideAbilityType: AB_Test PrefabGuid(-12)`\r\n- [ProjectM.Other](source)\r\n  - `OverrideAbilityType: AB_Wrong PrefabGuid(99)`";
  assert.deepEqual(readJewelAbilityDocument(doc.sourcePath, markdown), doc);
  assert.equal(readJewelAbilityDocument(doc.sourcePath, markdown.replace("ProjectM.Shared.JewelInstance", "ProjectM.Other")).overrideAbilityType, undefined);
  assert.throws(() => readJewelAbilityDocument(doc.sourcePath, markdown.replace("- [ProjectM.Other]", "  - `OverrideAbilityType: AB_Test PrefabGuid(-12)`\n- [ProjectM.Other]")), /duplicate/);
});

const read = async <T,>(file: string): Promise<T> => JSON.parse(await readFile(file, "utf8"));
test("generated census preserves all 129 exact associations, 43 abilities and 25 unknowns", async () => {
  const items = await read<DbIndexEntry[]>("public/data/db/items/index.json");
  const index = await read<DbIndexEntry[]>("public/data/db/abilities/index.json");
  const targets: JewelAbilityDestination[] = [];
  const abilities = new Map<string, DbEntityDetail>();
  for (const row of index) {
    const ability = await read<DbEntityDetail>(`public/data/db/abilities/by-slug/${row.slug}.json`);
    targets.push({ title: ability.title, prefab: ability.prefab!, guid: ability.guid ?? null, slug: row.slug, path: row.path, icon: row.icon });
    abilities.set(row.path, ability);
  }
  const lookup = indexJewelAbilityDestinations(targets);
  const all = await read<Record<string, number>>("data/prefabs/All.json");
  const counts = { jewels: 0, recorded: 0, unrecorded: 0 };
  const linkedAbilities = new Set<string>();
  for (const row of items.filter((item) => item.itemType === "Jewel" || item.categories.includes("Jewel"))) {
    const jewel = await read<DbEntityDetail>(`public/data/db/items/by-slug/${row.slug}.json`);
    const source = readJewelAbilityDocument(jewel.sourcePath!, await readFile(jewel.sourcePath!, "utf8"));
    validateJewelAbility(jewel, source, lookup, all);
    counts.jewels++;
    counts[jewel.jewelAbilityStatus!]++;
    assert.equal(jewel.localizedDescriptionTextEn, undefined);
    for (const ability of jewel.associatedAbilities!) {
      linkedAbilities.add(ability.prefab);
      const reverse = abilities.get(ability.path!)!.spellJewels as DbRelatedEntityRef[];
      assert.equal(reverse.filter((ref) => ref.prefab === jewel.prefab && ref.guid === jewel.guid && ref.path === row.path).length, 1);
    }
  }
  assert.deepEqual(counts, { jewels: 154, recorded: 129, unrecorded: 25 });
  assert.equal(linkedAbilities.size, 43);
});
