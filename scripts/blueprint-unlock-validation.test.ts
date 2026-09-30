import assert from "node:assert/strict";
import { blueprintUnlockSourcePath, buildBlueprintUnlockMapSnapshot } from "./blueprint-unlocks";
import { validateBlueprintUnlockSnapshot, type BlueprintValidationInput } from "./blueprint-unlock-validation";

const source = { prefabName: "Journal_Reward_Tech_BloodAltar", guid: 2,
  sourcePath: "content/prefabs/Journal_Reward_Tech_BloodAltar.md",
  components: new Map([["ProjectM.ProgressionBookBlueprintElement", { entries: [{ Blueprint: "TM_Target PrefabGuid(1)" }] }]]) };
const snapshot = buildBlueprintUnlockMapSnapshot({ docs: [source], blueprintPrefabs: new Map([["TM_Target", 1], ["TM_Unlinked", 3]]) });
const sourcePath = blueprintUnlockSourcePath(source.sourcePath);
assert.equal(sourcePath, "/prefabs/journal-reward-tech-bloodaltar");
assert.equal(blueprintUnlockSourcePath("content/prefabs/nested/Some_Thing.md"), "/prefabs/nested--some-thing");
assert.throws(() => blueprintUnlockSourcePath("content/prefabs/../secret.md"));
const fixture: BlueprintValidationInput = {
  snapshot,
  allPrefabs: { TM_Target: 1, TM_Unlinked: 3, [source.prefabName]: 2 },
  index: [{ slug: "target", path: "/db/blueprints/target" }, { slug: "unlinked", path: "/db/blueprints/unlinked" }],
  details: [
    { slug: "target", title: "Target", ...snapshot.entriesByPrefab.TM_Target,
      unlockSourceCount: 1, unlockSourceTypeSummary: "Journal reward",
      unlockSources: [{ title: "Source", prefab: source.prefabName, guid: 2, path: sourcePath,
        sourcePath: source.sourcePath, sourceComponent: "ProjectM.ProgressionBookBlueprintElement", sourceType: "journalReward", sourceTypeLabel: "Journal reward" }] },
    { slug: "unlinked", title: "Unlinked", prefab: "TM_Unlinked", guid: 3, unlockSources: [],
      unlockSourceCount: 0, unlockSourceTypes: [], unlockSourceTypeLabels: [], unlockSourceTypeCounts: {}, unlockSourceTypeSummary: "" }
  ],
  references: [{ title: source.prefabName, sourcePath: source.sourcePath, path: sourcePath }],
  items: []
};
for (const detail of fixture.details) {
  detail.linkedBookCount = 0;
  const row = fixture.index.find((entry) => entry.slug === detail.slug)!;
  for (const field of ["unlockSourceCount", "unlockSourceTypes", "unlockSourceTypeLabels", "unlockSourceTypeSummary", "linkedBookCount"] as const) {
    Object.assign(row, { [field]: detail[field] });
  }
}
validateBlueprintUnlockSnapshot(fixture);
const mutations: Array<[string, (input: BlueprintValidationInput) => void]> = [
  ["missing map", (input) => { delete (input.snapshot as Partial<typeof snapshot>).entriesByPrefab; }],
  ["missing row", (input) => { delete input.snapshot.entriesByPrefab.TM_Target; }],
  ["bad aggregate", (input) => { input.snapshot.unlockSourceTypeCounts.journalReward = 999; }],
  ["bad entry count", (input) => { input.snapshot.entriesByPrefab.TM_Target.unlockSourceTypeCounts.journalReward = 999; }],
  ["bad label", (input) => { input.snapshot.entriesByPrefab.TM_Target.unlockSources[0].sourceTypeLabel = "Invented"; }],
  ["bad source GUID", (input) => { input.snapshot.entriesByPrefab.TM_Target.unlockSources[0].sourceGuid = 9; }],
  ["bad route", (input) => { (input.details[0].unlockSources as Array<{ path: string }>)[0].path = "/prefabs/missing"; }],
  ["missing destination", (input) => { input.references = []; }],
  ["missing detail", (input) => { input.details.pop(); }],
  ["bad unlinked count", (input) => { input.details[1].unlockSourceCount = 1; }],
  ["bad index count", (input) => { input.index[0].unlockSourceCount = 99; }],
  ["bad index types", (input) => { input.index[0].unlockSourceTypes = []; }],
  ["invented book count", (input) => { input.details[0].linkedBookCount = 1; }],
  ["duplicate source", (input) => {
    input.snapshot.entriesByPrefab.TM_Target.unlockSources.push(input.snapshot.entriesByPrefab.TM_Target.unlockSources[0]);
    const refs = input.details[0].unlockSources as unknown[];
    refs.push(refs[0]);
    input.details[0].unlockSourceCount = 2;
  }]
];
for (const [name, mutate] of mutations) {
  const input = structuredClone(fixture);
  mutate(input);
  assert.throws(() => validateBlueprintUnlockSnapshot(input), name);
}
console.log(`ok - blueprint routes and validation (${mutations.length} corruption cases)`);

const withBook = structuredClone(fixture);
const book = { prefab: "Item_Ingredient_Book_Floor_AlchemyLab", guid: 4, amount: 1, sourceComponent: "ProjectM.TechItemRequirementBuffer" as const };
const bookSource = withBook.snapshot.entriesByPrefab.TM_Target.unlockSources[0];
bookSource.sourceComponent = "ProjectM.TechUnlockBlueprintBuffer";
bookSource.sourceType = "technology";
bookSource.sourceTypeLabel = "Technology";
bookSource.requiredBooks = [book];
const bookRefs = withBook.details[0].unlockSources as Array<Record<string, unknown>>;
bookRefs[0].sourceComponent = bookSource.sourceComponent;
bookRefs[0].sourceType = bookSource.sourceType;
bookRefs[0].sourceTypeLabel = bookSource.sourceTypeLabel;
const technologyFields = { unlockSourceTypes: ["technology" as const], unlockSourceTypeLabels: ["Technology"], unlockSourceTypeCounts: { technology: 1 } };
Object.assign(withBook.snapshot.entriesByPrefab.TM_Target, technologyFields);
Object.assign(withBook.details[0], technologyFields, { unlockSourceTypeSummary: "Technology" });
Object.assign(withBook.index[0], technologyFields, { unlockSourceTypeSummary: "Technology" });
withBook.snapshot.unlockSourceTypeCounts = { technology: 1 };
bookRefs[0].requiredBooks = [{ ...book, title: "Alchemy Lab Flooring", slug: "book", path: "/db/items/book", sourcePath: source.sourcePath }];
withBook.allPrefabs[book.prefab] = 4;
withBook.items = [{ ...book, slug: "book", path: "/db/items/book" }];
withBook.details[0].linkedBookCount = withBook.index[0].linkedBookCount = 1;
validateBlueprintUnlockSnapshot(withBook);
for (const mutate of [
  (input: BlueprintValidationInput) => { input.items = []; },
  (input: BlueprintValidationInput) => { input.items[0].guid = 99; },
  (input: BlueprintValidationInput) => { input.items[0].path = "/db/items/wrong"; },
  (input: BlueprintValidationInput) => { input.snapshot.entriesByPrefab.TM_Target.unlockSources[0].requiredBooks = []; }
]) {
  const input = structuredClone(withBook);
  mutate(input);
  assert.throws(() => validateBlueprintUnlockSnapshot(input));
}
console.log("ok - blueprint book validation (4 corruption cases)");
