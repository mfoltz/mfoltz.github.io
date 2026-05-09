import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { attachBuildablePortraitAssetPaths, buildBuildablePortraitSnapshots, selectBuildablePortraitPublicAssets } from "./buildable-portraits";

async function withAssetDump(fileNames: string[], run: (assetDumpDir: string) => Promise<void>): Promise<void> {
  const tmp = await mkdtemp(path.join(tmpdir(), "buildable-portraits-"));
  try {
    await mkdir(path.join(tmp, "Sprite"));
    await mkdir(path.join(tmp, "Texture2D"));
    for (const fileName of fileNames) {
      await writeFile(path.join(tmp, "Sprite", fileName), "");
      await writeFile(path.join(tmp, "Texture2D", fileName), "");
    }
    await run(tmp);
  } finally {
    await rm(tmp, { recursive: true, force: true });
  }
}

const allPrefabs = {
  TM_CraftingStation_JewelcraftingTable: 123,
  TM_RefinementStation_Sawmill_Small: 234,
  BP_Castle_Wall_Tier01_Wood_Entrance: 345,
  TM_Castle_Wall_Tier01_Wood_Entrance: 456,
  TM_Castle_Decor_BloodPress: 567,
  BP_Castle_Decor_BloodPress: 678
};

const workstationDisplayByPrefab = {
  TM_CraftingStation_JewelcraftingTable: {
    prefab: "TM_CraftingStation_JewelcraftingTable",
    guid: 123,
    displayNameEn: "Crafting Station Jewelcrafting Table"
  },
  TM_RefinementStation_Sawmill_Small: {
    prefab: "TM_RefinementStation_Sawmill_Small",
    guid: 234,
    displayNameEn: "Sawmill"
  }
};

const blueprintDisplayByPrefab = {
  BP_Castle_Wall_Tier01_Wood_Entrance: {
    prefab: "BP_Castle_Wall_Tier01_Wood_Entrance",
    guid: 345,
    displayNameEn: "Wooden Wall Entrance",
    iconAssetName: "Stunlock_Icon_Structure_CastleWallTier01WoodEntrance.png"
  },
  TM_Castle_Wall_Tier01_Wood_Entrance: {
    prefab: "TM_Castle_Wall_Tier01_Wood_Entrance",
    guid: 456,
    displayNameEn: "Wooden Wall Entrance",
    iconAssetName: "Stunlock_Icon_Structure_CastleWallTier01WoodEntrance.png"
  },
  TM_Castle_Decor_BloodPress: {
    prefab: "TM_Castle_Decor_BloodPress",
    guid: 567,
    displayNameEn: "Blood Press"
  },
  BP_Castle_Decor_BloodPress: {
    prefab: "BP_Castle_Decor_BloodPress",
    guid: 678,
    displayNameEn: "Blood Press"
  }
};

async function buildFixture(assetDumpDir: string) {
  return await buildBuildablePortraitSnapshots({
    assetDumpDir,
    allPrefabs,
    workstationDisplayByPrefab,
    blueprintDisplayByPrefab
  });
}

async function main() {
  await withAssetDump(
    [
      "Stunlock_Icon_Structure_JewelcraftingTable.png",
      "Stunlock_Icon_BuildGroup_MiscWorkshop.png",
      "BuildMenuFrameBackground.png",
      "Stunlock_Icon_Structure_CastleWallTier01WoodEntrance.png"
    ],
    async (assetDumpDir) => {
      const { candidates, portraitMap } = await buildFixture(assetDumpDir);

      assert.equal(candidates.entriesByAssetName["BuildMenuFrameBackground.png"], undefined);
      assert.equal(candidates.entriesByAssetName["Stunlock_Icon_Structure_JewelcraftingTable.png"].joinStatus, "source-backed");
      assert.equal(candidates.entriesByAssetName["Stunlock_Icon_Structure_JewelcraftingTable.png"].candidatePrefab, "TM_CraftingStation_JewelcraftingTable");
      assert.equal(portraitMap.entriesByPrefab.TM_CraftingStation_JewelcraftingTable.portraitAssetName, "Stunlock_Icon_Structure_JewelcraftingTable.png");
      const publicAssets = selectBuildablePortraitPublicAssets(portraitMap, {
        workstationPrefabs: ["TM_CraftingStation_JewelcraftingTable"],
        availableSourceRefs: ["Texture2D/Stunlock_Icon_Structure_JewelcraftingTable.png"],
        maxPublicAssets: 25
      });
      const portraitMapWithPaths = attachBuildablePortraitAssetPaths(portraitMap, publicAssets);
      assert.deepEqual(publicAssets, [
        {
          prefab: "TM_CraftingStation_JewelcraftingTable",
          fileName: "Stunlock_Icon_Structure_JewelcraftingTable.png",
          sourceRef: "Texture2D/Stunlock_Icon_Structure_JewelcraftingTable.png",
          publicPath: "/icons/buildables/Stunlock_Icon_Structure_JewelcraftingTable.png"
        }
      ]);
      assert.equal(
        portraitMapWithPaths.entriesByPrefab.TM_CraftingStation_JewelcraftingTable.portraitAssetPath,
        "/icons/buildables/Stunlock_Icon_Structure_JewelcraftingTable.png"
      );

      assert.equal(candidates.entriesByAssetName["Stunlock_Icon_BuildGroup_MiscWorkshop.png"].joinStatus, "circumstantial");
      assert.equal(candidates.entriesByAssetName["Stunlock_Icon_BuildGroup_MiscWorkshop.png"].approvalStatus, "pending");
      assert.equal(portraitMap.entriesByPrefab.TM_Castle_Wall_Tier01_Wood_Entrance.portraitAssetName, "Stunlock_Icon_Structure_CastleWallTier01WoodEntrance.png");
      assert.equal(portraitMap.entriesByPrefab.BP_Castle_Wall_Tier01_Wood_Entrance.portraitAssetName, "Stunlock_Icon_Structure_CastleWallTier01WoodEntrance.png");
      assert.equal(Object.values(portraitMap.entriesByPrefab).some((entry) => entry.portraitAssetName === "Stunlock_Icon_BuildGroup_MiscWorkshop.png"), false);
      assert.equal(Object.values(portraitMapWithPaths.entriesByPrefab).some((entry) => entry.portraitAssetPath?.includes("BuildGroup")), false);
    }
  );

  await withAssetDump(["Stunlock_Icon_Structure_BloodPress.png"], async (assetDumpDir) => {
    const { candidates, portraitMap } = await buildFixture(assetDumpDir);
    const candidate = candidates.entriesByAssetName["Stunlock_Icon_Structure_BloodPress.png"];
    assert.equal(candidate.joinStatus, "unsafe");
    assert.equal(candidate.approvalStatus, "rejected");
    assert.match(candidate.reason, /multiple buildable rows/);
    assert.equal(portraitMap.entriesByPrefab.TM_Castle_Decor_BloodPress, undefined);
    assert.equal(portraitMap.entriesByPrefab.BP_Castle_Decor_BloodPress, undefined);
  });

  await withAssetDump(["Stunlock_Icon_Structure_JewelcraftingTable.png"], async (assetDumpDir) => {
    const { portraitMap } = await buildFixture(assetDumpDir);
    const publicAssets = selectBuildablePortraitPublicAssets(portraitMap, {
      workstationPrefabs: ["TM_CraftingStation_JewelcraftingTable"],
      availableSourceRefs: [],
      maxPublicAssets: 25
    });
    const portraitMapWithPaths = attachBuildablePortraitAssetPaths(portraitMap, publicAssets);
    assert.equal(publicAssets.length, 0);
    assert.equal(portraitMapWithPaths.entriesByPrefab.TM_CraftingStation_JewelcraftingTable.portraitAssetPath, undefined);
  });

  console.log("ok - buildable portrait candidates and map");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
