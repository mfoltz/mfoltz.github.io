import assert from "node:assert/strict";
import { buildBlueprintUnlockMapSnapshot, type BlueprintUnlockDocument } from "./blueprint-unlocks";

function component(entries: Array<Record<string, string>>) {
  return { entries };
}

const blueprintPrefabs = new Map([
  ["TM_BloodAltar_T01", 1819321433],
  ["TM_Castle_Throne_01", 440710465],
  ["TM_DLC_Structure_01", 12345],
  ["TM_Unknown_01", 67890]
]);

const docs = [
  {
    prefabName: "Tech_Collection_Structures_T01",
    guid: -998624122,
    sourcePath: "content/prefabs/Tech_Collection_Structures_T01.md",
    components: new Map([
      [
        "ProjectM.TechUnlockBlueprintBuffer",
        component([
          { Guid: "TM_BloodAltar_T01 PrefabGuid(1819321433)" },
          { Guid: "Recipe_Weapon_Spear_T01_Bone PrefabGuid(1394854694)" }
        ])
      ]
    ])
  },
  {
    prefabName: "Journal_Reward_Tech_BloodAltar",
    guid: -1471814629,
    sourcePath: "content/prefabs/Journal_Reward_Tech_BloodAltar.md",
    components: new Map([
      [
        "ProjectM.ProgressionBookBlueprintElement",
        component([{ Blueprint: "TM_BloodAltar_T01 PrefabGuid(1819321433)" }])
      ]
    ])
  },
  {
    prefabName: "Journal_Reward_Tech_BatThrone",
    guid: 13579,
    sourcePath: "content/prefabs/Journal_Reward_Tech_BatThrone.md",
    components: new Map([
      [
        "ProjectM.ProgressionBookBlueprintElement",
        component([{ Blueprint: "TM_Castle_Throne_01 PrefabGuid(440710465)" }])
      ],
      [
        "ProjectM.SomeOtherComponent",
        component([{ Blueprint: "TM_BloodAltar_T01 PrefabGuid(1819321433)" }])
      ]
    ])
  },
  {
    prefabName: "Tech_Collection_VBlood_T04_Quincey_Decoration",
    guid: -1204804925,
    sourcePath: "content/prefabs/Tech_Collection_VBlood_T04_Quincey_Decoration.md",
    components: new Map([
      [
        "ProjectM.TechUnlockBlueprintBuffer",
        component([{ Guid: "TM_Castle_Throne_01 PrefabGuid(440710465)" }])
      ]
    ])
  },
  {
    prefabName: "Tech_Collection_Framework_T02_Stone_DLC_Gloomrot",
    guid: -1485413430,
    sourcePath: "content/prefabs/Tech_Collection_Framework_T02_Stone_DLC_Gloomrot.md",
    components: new Map([
      [
        "ProjectM.TechUnlockBlueprintBuffer",
        component([{ Guid: "TM_DLC_Structure_01 PrefabGuid(12345)" }])
      ]
    ])
  },
  {
    prefabName: "Strange_Source_Shape",
    guid: 24680,
    sourcePath: "content/prefabs/Strange_Source_Shape.md",
    components: new Map([
      [
        "ProjectM.TechUnlockBlueprintBuffer",
        component([{ Guid: "TM_Unknown_01 PrefabGuid(67890)" }])
      ]
    ])
  }
];

async function main() {
  const snapshot = buildBlueprintUnlockMapSnapshot({ docs, blueprintPrefabs });

  assert.equal(snapshot.schemaVersion, 1);
  assert.equal(snapshot.sourceKind, "prefab-blueprint-unlock-map");
  assert.equal(snapshot.targetRowCount, 4);
  assert.deepEqual(Object.keys(snapshot.entriesByPrefab), ["TM_BloodAltar_T01", "TM_Castle_Throne_01", "TM_DLC_Structure_01", "TM_Unknown_01"]);
  assert.deepEqual(snapshot.unlockSourceTypeCounts, {
    dlcTech: 1,
    journalReward: 2,
    techCollection: 1,
    unknownSourceShape: 1,
    vBloodTech: 1
  });

  assert.deepEqual(snapshot.entriesByPrefab.TM_BloodAltar_T01.unlockSources, [
    {
      sourcePrefab: "Journal_Reward_Tech_BloodAltar",
      sourceGuid: -1471814629,
      sourcePath: "content/prefabs/Journal_Reward_Tech_BloodAltar.md",
      sourceComponent: "ProjectM.ProgressionBookBlueprintElement",
      sourceType: "journalReward",
      sourceTypeLabel: "Journal reward",
      targetBlueprintPrefab: "TM_BloodAltar_T01",
      targetBlueprintGuid: 1819321433
    },
    {
      sourcePrefab: "Tech_Collection_Structures_T01",
      sourceGuid: -998624122,
      sourcePath: "content/prefabs/Tech_Collection_Structures_T01.md",
      sourceComponent: "ProjectM.TechUnlockBlueprintBuffer",
      sourceType: "techCollection",
      sourceTypeLabel: "Tech collection",
      targetBlueprintPrefab: "TM_BloodAltar_T01",
      targetBlueprintGuid: 1819321433
    }
  ]);

  assert.deepEqual(snapshot.entriesByPrefab.TM_BloodAltar_T01.unlockSourceTypes, ["journalReward", "techCollection"]);
  assert.deepEqual(snapshot.entriesByPrefab.TM_BloodAltar_T01.unlockSourceTypeLabels, ["Journal reward", "Tech collection"]);
  assert.deepEqual(snapshot.entriesByPrefab.TM_BloodAltar_T01.unlockSourceTypeCounts, {
    journalReward: 1,
    techCollection: 1
  });

  assert.deepEqual(snapshot.entriesByPrefab.TM_Castle_Throne_01.unlockSources, [
    {
      sourcePrefab: "Journal_Reward_Tech_BatThrone",
      sourceGuid: 13579,
      sourcePath: "content/prefabs/Journal_Reward_Tech_BatThrone.md",
      sourceComponent: "ProjectM.ProgressionBookBlueprintElement",
      sourceType: "journalReward",
      sourceTypeLabel: "Journal reward",
      targetBlueprintPrefab: "TM_Castle_Throne_01",
      targetBlueprintGuid: 440710465
    },
    {
      sourcePrefab: "Tech_Collection_VBlood_T04_Quincey_Decoration",
      sourceGuid: -1204804925,
      sourcePath: "content/prefabs/Tech_Collection_VBlood_T04_Quincey_Decoration.md",
      sourceComponent: "ProjectM.TechUnlockBlueprintBuffer",
      sourceType: "vBloodTech",
      sourceTypeLabel: "V Blood tech",
      targetBlueprintPrefab: "TM_Castle_Throne_01",
      targetBlueprintGuid: 440710465
    }
  ]);

  assert.deepEqual(snapshot.entriesByPrefab.TM_DLC_Structure_01.unlockSources, [
    {
      sourcePrefab: "Tech_Collection_Framework_T02_Stone_DLC_Gloomrot",
      sourceGuid: -1485413430,
      sourcePath: "content/prefabs/Tech_Collection_Framework_T02_Stone_DLC_Gloomrot.md",
      sourceComponent: "ProjectM.TechUnlockBlueprintBuffer",
      sourceType: "dlcTech",
      sourceTypeLabel: "DLC tech",
      targetBlueprintPrefab: "TM_DLC_Structure_01",
      targetBlueprintGuid: 12345
    }
  ]);

  assert.deepEqual(snapshot.entriesByPrefab.TM_Unknown_01.unlockSources, [
    {
      sourcePrefab: "Strange_Source_Shape",
      sourceGuid: 24680,
      sourcePath: "content/prefabs/Strange_Source_Shape.md",
      sourceComponent: "ProjectM.TechUnlockBlueprintBuffer",
      sourceType: "unknownSourceShape",
      sourceTypeLabel: "Unknown source shape",
      targetBlueprintPrefab: "TM_Unknown_01",
      targetBlueprintGuid: 67890
    }
  ]);

  const serialized = JSON.stringify(snapshot);
  assert.equal(serialized.includes("Recipe_Weapon_Spear_T01_Bone"), false);
  assert.equal(serialized.includes("ProjectM.SomeOtherComponent"), false);

  const book: BlueprintUnlockDocument = { prefabName: "Item_Ingredient_Book_Floor_AlchemyLab", guid: 50,
    sourcePath: "content/prefabs/Item_Ingredient_Book_Floor_AlchemyLab.md", components: new Map([["ProjectM.ItemData", component([])]]) };
  const tech: BlueprintUnlockDocument = { prefabName: "Tech_Floor_AlchemyLab", guid: 51,
    sourcePath: "content/prefabs/Tech_Floor_AlchemyLab.md", components: new Map([
      ["ProjectM.TechData", component([])],
      ["ProjectM.TechUnlockBlueprintBuffer", component([{ Guid: "TM_Unknown_01 PrefabGuid(67890)" }, { Guid: "TM_Unknown_01 PrefabGuid(67890)" }, { Guid: "TM_BloodAltar_T01 PrefabGuid(999)" }])],
      ["ProjectM.TechItemRequirementBuffer", component([{ Guid: `${book.prefabName} PrefabGuid(50)`, Stacks: "1" }])]
    ]) };
  const linked = buildBlueprintUnlockMapSnapshot({ docs: [tech, book], blueprintPrefabs });
  const link = linked.entriesByPrefab.TM_Unknown_01.unlockSources[0];
  assert.equal(linked.entriesByPrefab.TM_Unknown_01.unlockSources.length, 1, "deduplicate repeated blueprint edges");
  assert.equal(linked.entriesByPrefab.TM_BloodAltar_T01, undefined, "reject target GUID mismatch");
  assert.equal(link.sourceType, "technology");
  assert.deepEqual(link.requiredBooks, [{ prefab: book.prefabName, guid: 50, amount: 1, sourceComponent: "ProjectM.TechItemRequirementBuffer" }]);
  assert.deepEqual(buildBlueprintUnlockMapSnapshot({ docs: [book, tech], blueprintPrefabs }), linked, "source order must not change output");
  for (const itemDocs of [[], [{ ...book, guid: 99 }], [{ ...book, components: new Map() }]]) {
    const result = buildBlueprintUnlockMapSnapshot({ docs: [tech, ...itemDocs], blueprintPrefabs });
    assert.equal(result.entriesByPrefab.TM_Unknown_01.unlockSources[0].requiredBooks, undefined, "no fabricated book join");
  }
  const emptyTech = { ...tech, components: new Map(tech.components) };
  emptyTech.components.set("ProjectM.TechItemRequirementBuffer", component([]));
  assert.equal(buildBlueprintUnlockMapSnapshot({ docs: [emptyTech, book], blueprintPrefabs }).entriesByPrefab.TM_Unknown_01.unlockSources[0].requiredBooks, undefined);
  const unsupported = { ...emptyTech, prefabName: "Default_Starter_Source", components: new Map(emptyTech.components) };
  unsupported.components.delete("ProjectM.TechData");
  assert.equal(buildBlueprintUnlockMapSnapshot({ docs: [unsupported], blueprintPrefabs }).entriesByPrefab.TM_Unknown_01.unlockSources[0].sourceType, "unknownSourceShape", "names alone do not establish starter status");
  const progression = { ...unsupported, components: new Map([["ProjectM.ProgressionBookBlueprintElement", component([{ Blueprint: "TM_Unknown_01 PrefabGuid(67890)" }])]]) };
  assert.equal(buildBlueprintUnlockMapSnapshot({ docs: [progression], blueprintPrefabs }).entriesByPrefab.TM_Unknown_01.unlockSources[0].sourceType, "unknownSourceShape", "not every progression buffer is a journal reward");

  console.log("ok - blueprint unlock map");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
