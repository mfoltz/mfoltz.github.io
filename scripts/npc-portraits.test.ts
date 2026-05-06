import assert from "node:assert/strict";
import { mkdtemp, mkdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { buildNpcPortraitSnapshots } from "./npc-portraits";

type TestCase = {
  name: string;
  run: () => void | Promise<void>;
};

const tests: TestCase[] = [];

function test(name: string, run: TestCase["run"]) {
  tests.push({ name, run });
}

async function withAssetDump(fileNames: string[], run: (assetDumpDir: string) => Promise<void>): Promise<void> {
  const tmp = await mkdtemp(path.join(tmpdir(), "npc-portraits-"));
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
  CHAR_Bandit_Bomber_VBlood: 1896428751,
  CHAR_Villager_Tailor_VBlood: -1942352521,
  CHAR_Vampire_BloodKnight_VBlood: -100,
  CHAR_Vampire_IceRanger_VBlood: -200,
  CHAR_Bandit_Frostarrow_VBlood: 1124739990,
  CHAR_Forest_Bear_Dire_Vblood: -1391546313,
  CHAR_Gloomrot_Purifier_VBlood: 1891432250,
  CHAR_Cursed_ToadKing_VBlood: 712813874,
  CHAR_Villager_CursedWanderer_VBlood: 109969450
};

const npcDisplayByPrefab = {
  CHAR_Bandit_Bomber_VBlood: { displayNameEn: "Clive the Firestarter" },
  CHAR_Villager_Tailor_VBlood: { displayNameEn: "Beatrice the Tailor" },
  CHAR_Vampire_BloodKnight_VBlood: { displayNameEn: "General Valencia the Depraved" },
  CHAR_Vampire_IceRanger_VBlood: { displayNameEn: "General Elena the Hollow" },
  CHAR_Bandit_Frostarrow_VBlood: { displayNameEn: "Keely the Frost Archer" },
  CHAR_Forest_Bear_Dire_Vblood: { displayNameEn: "Kodia the Ferocious Bear" },
  CHAR_Gloomrot_Purifier_VBlood: { displayNameEn: "Angram the Purifier" },
  CHAR_Cursed_ToadKing_VBlood: { displayNameEn: "Albert the Duke of Balaton" },
  CHAR_Villager_CursedWanderer_VBlood: { displayNameEn: "Ben the Old Wanderer" }
};

const npcClassificationByPrefab = {
  CHAR_Bandit_Bomber_VBlood: { prefab: "CHAR_Bandit_Bomber_VBlood", guid: 1896428751, isVBlood: true, bloodType: "V Blood" },
  CHAR_Villager_Tailor_VBlood: { prefab: "CHAR_Villager_Tailor_VBlood", guid: -1942352521, isVBlood: true, bloodType: "V Blood" },
  CHAR_Vampire_BloodKnight_VBlood: { prefab: "CHAR_Vampire_BloodKnight_VBlood", guid: -100, isVBlood: true, bloodType: "V Blood" },
  CHAR_Vampire_IceRanger_VBlood: { prefab: "CHAR_Vampire_IceRanger_VBlood", guid: -200, isVBlood: true, bloodType: "V Blood" },
  CHAR_Bandit_Frostarrow_VBlood: { prefab: "CHAR_Bandit_Frostarrow_VBlood", guid: 1124739990, isVBlood: true, bloodType: "V Blood" },
  CHAR_Forest_Bear_Dire_Vblood: { prefab: "CHAR_Forest_Bear_Dire_Vblood", guid: -1391546313, isVBlood: true, bloodType: "V Blood" },
  CHAR_Gloomrot_Purifier_VBlood: { prefab: "CHAR_Gloomrot_Purifier_VBlood", guid: 1891432250, isVBlood: true, bloodType: "V Blood" },
  CHAR_Cursed_ToadKing_VBlood: { prefab: "CHAR_Cursed_ToadKing_VBlood", guid: 712813874, isVBlood: true, bloodType: "V Blood" },
  CHAR_Villager_CursedWanderer_VBlood: { prefab: "CHAR_Villager_CursedWanderer_VBlood", guid: 109969450, isVBlood: true, bloodType: "V Blood" }
};

const bloodHuntsByGuid = {
  "1896428751": { prefab: "CHAR_Bandit_Bomber_VBlood", guid: 1896428751 },
  "-1942352521": { prefab: "CHAR_Villager_Tailor_VBlood", guid: -1942352521 },
  "-100": { prefab: "CHAR_Vampire_BloodKnight_VBlood", guid: -100 },
  "-200": { prefab: "CHAR_Vampire_IceRanger_VBlood", guid: -200 },
  "1124739990": { prefab: "CHAR_Bandit_Frostarrow_VBlood", guid: 1124739990 },
  "-1391546313": { prefab: "CHAR_Forest_Bear_Dire_Vblood", guid: -1391546313 },
  "1891432250": { prefab: "CHAR_Gloomrot_Purifier_VBlood", guid: 1891432250 },
  "712813874": { prefab: "CHAR_Cursed_ToadKing_VBlood", guid: 712813874 },
  "109969450": { prefab: "CHAR_Villager_CursedWanderer_VBlood", guid: 109969450 }
};

const vbloodNamesRows = [
  ["Clive", "CHAR_Bandit_Bomber_VBlood", "VBlood"],
  ["Beatrice the Tailor", "CHAR_Villager_Tailor_VBlood", "VBlood"],
  ["General Valencia the Depraved", "CHAR_Vampire_BloodKnight_VBlood", "VBlood"],
  ["General Elena the Hollow", "CHAR_Vampire_IceRanger_VBlood", "VBlood"],
  ["Keely", "CHAR_Bandit_Frostarrow_VBlood", "VBlood"],
  ["Kodia the Ferocious Bear", "CHAR_Forest_Bear_Dire_Vblood", "VBlood"],
  ["Angram the Purifier", "CHAR_Gloomrot_Purifier_VBlood", "VBlood"],
  ["Albert The Duke of Balaton", "CHAR_Cursed_ToadKing_VBlood", "VBlood"],
  ["Ben The Old Wanderer", "CHAR_Villager_CursedWanderer_VBlood", "VBlood"]
] as Array<[string, string, string]>;

async function buildFixture(assetDumpDir: string) {
  return await buildNpcPortraitSnapshots({
    assetDumpDir,
    allPrefabs,
    npcDisplayByPrefab,
    npcClassificationByPrefab,
    bloodHuntsByGuid,
    vbloodNamesRows
  });
}

test("buildNpcPortraitSnapshots promotes exact and approved user-attested rows only", async () => {
  await withAssetDump(
    [
      "CHAR_Bandit_Bomber_VBlood_HeadPortrait.png",
      "Portrait_Large_Normal_BeatriceTailor.png",
      "Portrait_Large_Normal_BloodCommander.png",
      "Portrait_Large_Normal_FrostCommander.png",
      "Portrait_Large_Normal_KeelyFrostArcher.png"
    ],
    async (assetDumpDir) => {
      const { candidates, portraitMap } = await buildFixture(assetDumpDir);

      assert.equal(candidates.entriesByAssetName["CHAR_Bandit_Bomber_VBlood_HeadPortrait.png"].joinStatus, "source-backed");
      assert.equal(candidates.entriesByAssetName["Portrait_Large_Normal_BeatriceTailor.png"].joinStatus, "user-attested");
      assert.equal(candidates.entriesByAssetName["Portrait_Large_Normal_BeatriceTailor.png"].approvalStatus, "approved");
      assert.equal(candidates.entriesByAssetName["Portrait_Large_Normal_BeatriceTailor.png"].candidatePrefab, "CHAR_Villager_Tailor_VBlood");
      assert.equal(candidates.entriesByAssetName["Portrait_Large_Normal_BloodCommander.png"].joinStatus, "user-attested");
      assert.equal(candidates.entriesByAssetName["Portrait_Large_Normal_BloodCommander.png"].approvalStatus, "approved");
      assert.equal(candidates.entriesByAssetName["Portrait_Large_Normal_FrostCommander.png"].candidatePrefab, "CHAR_Vampire_IceRanger_VBlood");
      assert.equal(candidates.entriesByAssetName["Portrait_Large_Normal_KeelyFrostArcher.png"].joinStatus, "user-attested");
      assert.equal(candidates.entriesByAssetName["Portrait_Large_Normal_KeelyFrostArcher.png"].approvalStatus, "approved");

      assert.equal(portraitMap.entriesByPrefab.CHAR_Bandit_Bomber_VBlood.portraitAssetName, "CHAR_Bandit_Bomber_VBlood_HeadPortrait.png");
      assert.equal(portraitMap.entriesByPrefab.CHAR_Vampire_BloodKnight_VBlood.joinStatus, "user-attested");
      assert.equal(portraitMap.entriesByPrefab.CHAR_Vampire_IceRanger_VBlood.approvalStatus, "approved");
      assert.equal(portraitMap.entriesByPrefab.CHAR_Villager_Tailor_VBlood.approvalStatus, "approved");
      assert.equal(portraitMap.entriesByPrefab.CHAR_Bandit_Frostarrow_VBlood.portraitAssetName, "Portrait_Large_Normal_KeelyFrostArcher.png");
    }
  );
});

test("buildNpcPortraitSnapshots keeps title-fragment fuzzy matches candidate-only", async () => {
  await withAssetDump(
    [
      "Portrait_Large_Normal_FerociousBear.png",
      "Portrait_Large_Normal_Purifier.png",
      "Portrait_Small_Normal_DukeBalaton.png",
      "Portrait_Small_Smoke_CursedWanderer.png"
    ],
    async (assetDumpDir) => {
      const { candidates, portraitMap } = await buildFixture(assetDumpDir);
      const approvedExpected = [
        ["Portrait_Large_Normal_FerociousBear.png", "CHAR_Forest_Bear_Dire_Vblood", "Kodia the Ferocious Bear"],
        ["Portrait_Large_Normal_Purifier.png", "CHAR_Gloomrot_Purifier_VBlood", "Angram the Purifier"]
      ] as const;
      const pendingExpected = [
        ["Portrait_Small_Normal_DukeBalaton.png", "CHAR_Cursed_ToadKing_VBlood", "Albert the Duke of Balaton"],
        ["Portrait_Small_Smoke_CursedWanderer.png", "CHAR_Villager_CursedWanderer_VBlood", "Ben the Old Wanderer"]
      ] as const;

      for (const [assetName, prefab, displayNameEn] of approvedExpected) {
        const candidate = candidates.entriesByAssetName[assetName];
        assert.equal(candidate.joinStatus, "user-attested");
        assert.equal(candidate.approvalStatus, "approved");
        assert.equal(candidate.candidatePrefab, prefab);
        assert.equal(candidate.displayNameEn, displayNameEn);
        assert.equal(portraitMap.entriesByPrefab[prefab].portraitAssetName, assetName);
      }

      for (const [assetName, prefab, displayNameEn] of pendingExpected) {
        const candidate = candidates.entriesByAssetName[assetName];
        assert.equal(candidate.joinStatus, "circumstantial");
        assert.equal(candidate.approvalStatus, "pending");
        assert.equal(candidate.candidatePrefab, prefab);
        assert.equal(candidate.displayNameEn, displayNameEn);
        assert.equal(portraitMap.entriesByPrefab[prefab], undefined);
      }
    }
  );
});

test("buildNpcPortraitSnapshots marks fuzzy matches unsafe when ambiguous", async () => {
  await withAssetDump(["Portrait_Large_Normal_Purifier.png"], async (assetDumpDir) => {
    const { candidates } = await buildNpcPortraitSnapshots({
      assetDumpDir,
      allPrefabs: {
        CHAR_Gloomrot_Purifier_VBlood: 1891432250,
        CHAR_Test_Purifier_VBlood: 42
      },
      npcDisplayByPrefab: {
        CHAR_Gloomrot_Purifier_VBlood: { displayNameEn: "Angram the Purifier" },
        CHAR_Test_Purifier_VBlood: { displayNameEn: "Example the Purifier" }
      },
      npcClassificationByPrefab: {
        CHAR_Gloomrot_Purifier_VBlood: { guid: 1891432250, isVBlood: true, bloodType: "V Blood" },
        CHAR_Test_Purifier_VBlood: { guid: 42, isVBlood: true, bloodType: "V Blood" }
      },
      bloodHuntsByGuid: {
        "1891432250": { prefab: "CHAR_Gloomrot_Purifier_VBlood", guid: 1891432250 },
        "42": { prefab: "CHAR_Test_Purifier_VBlood", guid: 42 }
      },
      vbloodNamesRows: [
        ["Angram the Purifier", "CHAR_Gloomrot_Purifier_VBlood", "VBlood"],
        ["Example the Purifier", "CHAR_Test_Purifier_VBlood", "VBlood"]
      ]
    });

    const candidate = candidates.entriesByAssetName["Portrait_Large_Normal_Purifier.png"];
    assert.equal(candidate.joinStatus, "unsafe");
    assert.equal(candidate.approvalStatus, "rejected");
    assert.match(candidate.reason, /multiple current NPC rows/);
  });
});

async function main() {
  for (const { name, run } of tests) {
    await run();
    console.log(`ok - ${name}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
