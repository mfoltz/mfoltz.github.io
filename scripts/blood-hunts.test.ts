import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { buildBloodHuntsMapSnapshot } from "./blood-hunts";

type TestCase = {
  name: string;
  run: () => void | Promise<void>;
};

const tests: TestCase[] = [];

function test(name: string, run: TestCase["run"]) {
  tests.push({ name, run });
}

async function withSourceFile(raw: unknown, run: (sourceFile: string) => Promise<void>): Promise<void> {
  const tmp = await mkdtemp(path.join(tmpdir(), "blood-hunts-"));
  try {
    const sourceFile = path.join(tmp, "BloodHuntsDataAuthoring.json");
    await writeFile(sourceFile, `${JSON.stringify(raw, null, 2)}\n`);
    await run(sourceFile);
  } finally {
    await rm(tmp, { recursive: true, force: true });
  }
}

function validSource(overrides: Record<string, unknown> = {}) {
  return {
    m_GameObject: { m_PathID: 123 },
    VBloodDatas: [
      {
        Level: 53,
        HideLevel: 1,
        PrefabGUID: { _Value: 795262842 },
        Name: { Key: { _a: 1, _b: 2, _c: 3, _d: 4 } },
        AssetGuid: "must-not-be-promoted",
        SpritePathID: 987
      }
    ],
    ...overrides
  };
}

async function buildFixture(sourceFile: string, overrides: Partial<Parameters<typeof buildBloodHuntsMapSnapshot>[0]> = {}) {
  return await buildBloodHuntsMapSnapshot({
    sourceFile,
    sourceRef: "MonoBehaviour/BloodHuntsDataAuthoring.json",
    prefabByGuid: new Map([[795262842, "CHAR_Vampire_IceRanger_VBlood"]]),
    localizedNamesByGuid: { "795262842": "General Elena the Hollow" },
    npcDisplayByPrefab: { CHAR_Vampire_IceRanger_VBlood: { displayNameEn: "General Elena the Hollow" } },
    prefabSourceRef: "data/prefabs/All.json",
    localizedNameSourceRef: "data/enrichment/prefab-localization.json:namesByGuid",
    npcDisplaySourceRef: "data/enrichment/npc-display-map.json",
    ...overrides
  });
}

test("buildBloodHuntsMapSnapshot keys rows only by PrefabGUID._Value", async () => {
  await withSourceFile(validSource(), async (sourceFile) => {
    const snapshot = await buildFixture(sourceFile);
    assert.deepEqual(Object.keys(snapshot.entriesByGuid), ["795262842"]);
    assert.equal(snapshot.entriesByGuid["795262842"].guid, 795262842);
    assert.equal(snapshot.entriesByGuid["795262842"].prefab, "CHAR_Vampire_IceRanger_VBlood");
  });
});

test("buildBloodHuntsMapSnapshot converts HideLevel to boolean and records source value", async () => {
  await withSourceFile(validSource(), async (sourceFile) => {
    const snapshot = await buildFixture(sourceFile);
    const entry = snapshot.entriesByGuid["795262842"];
    assert.equal(entry.bloodHuntHideLevel, true);
    assert.equal(entry.provenance.hideLevelSourceValue, 1);
  });
});

test("buildBloodHuntsMapSnapshot requires source-backed prefab, localization, and NPC display joins", async () => {
  await withSourceFile(validSource(), async (sourceFile) => {
    await assert.rejects(
      () => buildFixture(sourceFile, { prefabByGuid: new Map() }),
      /missing prefab join/
    );
    await assert.rejects(
      () => buildFixture(sourceFile, { localizedNamesByGuid: {} }),
      /missing localized name join/
    );
    await assert.rejects(
      () => buildFixture(sourceFile, { npcDisplayByPrefab: {} }),
      /missing NPC display join/
    );
  });
});

test("buildBloodHuntsMapSnapshot does not promote Unity asset or UI fields", async () => {
  await withSourceFile(validSource(), async (sourceFile) => {
    const snapshot = await buildFixture(sourceFile);
    const serialized = JSON.stringify(snapshot);
    assert.equal(serialized.includes("AssetGuid"), false);
    assert.equal(serialized.includes("m_PathID"), false);
    assert.equal(serialized.includes("SpritePathID"), false);
    assert.equal(serialized.includes("Portrait"), false);
    assert.equal(serialized.includes("Icon"), false);
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
