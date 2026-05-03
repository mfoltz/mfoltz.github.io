import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import {
  summarizeServerComponentSpotCheck,
  writeServerComponentSpotCheckSummary
} from "./server-component-spotcheck-summary";

type TestCase = {
  name: string;
  run: () => void | Promise<void>;
};

const tests: TestCase[] = [];

function test(name: string, run: TestCase["run"]) {
  tests.push({ name, run });
}

test("summarizes captured component rows and same-run prefab evidence", async () => {
  const tempDir = await mkdtemp(path.join(tmpdir(), "server-component-spotcheck-"));
  const artifactPath = path.join(tempDir, "ServerComponentSpotChecksServer.json");
  const abilityGroupsPath = path.join(tempDir, "AbilityGroupsServer.json");
  const itemsPath = path.join(tempDir, "ItemsServer.json");
  const npcsPath = path.join(tempDir, "NpcsServer.json");

  try {
    await writeFile(
      artifactPath,
      JSON.stringify([
        {
          EntityIndex: 5,
          PrefabGuid: 101,
          PrefabName: "AB_Bandit_Test_Hit",
          MatchedComponentTypes: ["ProjectM.DealDamageOnGameplayEvent"],
          CaptureStatus: "captured",
          CapturedComponents: {
            DealDamageOnGameplayEvent: {
              Parameters: {
                MaterialModifiers: { Human: 1, Undead: 0 },
                MainFactor: 1,
                ResourceModifier: 1,
                StaggerFactor: 0,
                RawDamageValue: 0,
                RawDamagePercent: 1.25,
                DealDamageFlags: "1065353216",
                MainType: "1065353216"
              },
              DamageModifierPerHit: 0,
              MultiplyMainFactorWithStacks: false
            }
          }
        },
        {
          EntityIndex: 6,
          PrefabGuid: 202,
          PrefabName: "CHAR_Test_Wolf",
          MatchedComponentTypes: ["ProjectM.DealDamageOnGameplayEvent"],
          CaptureStatus: "captured",
          CapturedComponents: {
            DealDamageOnGameplayEvent: {
              Parameters: {
                MaterialModifiers: { Human: 0, Undead: 1 },
                MainFactor: 0,
                ResourceModifier: 0,
                StaggerFactor: 3,
                RawDamageValue: 0,
                RawDamagePercent: 0,
                DealDamageFlags: "0",
                MainType: "Physical"
              },
              DamageModifierPerHit: 2,
              MultiplyMainFactorWithStacks: true
            }
          }
        },
        {
          EntityIndex: 7,
          PrefabGuid: 303,
          PrefabName: "Buff_Test_Missing",
          MatchedComponentTypes: ["ProjectM.DealDamageOnGameplayEvent"],
          CaptureStatus: "matched-no-readable-data",
          CapturedComponents: {
            DealDamageOnGameplayEventCaptureStatus: "matched-no-readable-data"
          }
        }
      ]),
      "utf8"
    );
    await writeFile(abilityGroupsPath, JSON.stringify([{ PrefabName: "AB_Bandit_Test_Hit", AbilityGroupId: 101 }]), "utf8");
    await writeFile(itemsPath, JSON.stringify([{ PrefabName: "FakeItem_Test", ItemId: 909, ItemType: "Consumable" }]), "utf8");
    await writeFile(npcsPath, JSON.stringify([{ PrefabName: "CHAR_Test_Wolf", NpcId: 202, UnitCategory: "Beast" }]), "utf8");

    const summary = await summarizeServerComponentSpotCheck({
      artifactPath,
      snapshotRoot: tempDir,
      componentName: "DealDamageOnGameplayEvent"
    });

    assert.equal(summary.rowCount, 3);
    assert.equal(summary.capturedRowCount, 2);
    assert.equal(summary.missingComponentRowCount, 1);
    assert.deepEqual(summary.captureStatuses, {
      captured: 2,
      "matched-no-readable-data": 1
    });
    assert.deepEqual(summary.prefabPrefixes.slice(0, 3).map((entry) => [entry.name, entry.count]), [
      ["AB", 1],
      ["Buff", 1],
      ["CHAR", 1]
    ]);
    assert.deepEqual(summary.sameRunMatches, {
      abilityGroup: 1,
      item: 0,
      npc: 1,
      unmatched: 1
    });
    assert.equal(summary.fieldCoverage.Parameters.present, 2);
    assert.equal(summary.parameterFieldCoverage.RawDamagePercent.nonDefault, 1);
    assert.equal(summary.parameterFieldCoverage.RawDamageValue.nonDefault, 0);
    assert.equal(summary.materialModifierCoverage.Human.nonDefault, 1);
    assert.equal(summary.evidence.length, 2);
    assert.equal(summary.evidence[0].key, "DealDamageOnGameplayEvent:101");
    assert.equal(summary.evidence[0].quality.interpretationStatus, "raw-unverified");
    assert.match(summary.rawProjectionNotes.join("\n"), /encoded-looking/);
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

test("writes parked markdown and JSON summaries without public DB output", async () => {
  const tempDir = await mkdtemp(path.join(tmpdir(), "server-component-spotcheck-write-"));
  const artifactPath = path.join(tempDir, "ServerComponentSpotChecksServer.json");
  const outDir = path.join(tempDir, "analysis");

  try {
    await writeFile(
      artifactPath,
      JSON.stringify([
        {
          EntityIndex: 1,
          PrefabGuid: 404,
          PrefabName: "AB_Test_Output",
          MatchedComponentTypes: ["ProjectM.DealDamageOnGameplayEvent"],
          CaptureStatus: "captured",
          CapturedComponents: {
            DealDamageOnGameplayEvent: {
              Parameters: {
                MaterialModifiers: {},
                MainFactor: 1,
                ResourceModifier: 1,
                StaggerFactor: 0,
                RawDamageValue: 0,
                RawDamagePercent: 0.5,
                DealDamageFlags: "1065353216",
                MainType: "1065353216"
              },
              DamageModifierPerHit: 0,
              MultiplyMainFactorWithStacks: false
            }
          }
        }
      ]),
      "utf8"
    );

    const outputs = await writeServerComponentSpotCheckSummary({
      artifactPath,
      snapshotRoot: tempDir,
      componentName: "DealDamageOnGameplayEvent",
      outDir
    });

    assert.equal(path.basename(outputs.jsonPath), "DealDamageOnGameplayEvent.summary.json");
    assert.equal(path.basename(outputs.markdownPath), "DealDamageOnGameplayEvent.summary.md");

    const json = JSON.parse(await readFile(outputs.jsonPath, "utf8"));
    const markdown = await readFile(outputs.markdownPath, "utf8");
    assert.equal(json.componentName, "DealDamageOnGameplayEvent");
    assert.match(markdown, /# DealDamageOnGameplayEvent Server Component Spot-Check/);
    assert.doesNotMatch(markdown, /textVariableValues/);
    assert.doesNotMatch(markdown, /tooltip/i);
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

async function runSelftest() {
  let failed = 0;

  for (const entry of tests) {
    try {
      await entry.run();
      console.log(`[pass] ${entry.name}`);
    } catch (error) {
      failed += 1;
      console.error(`[fail] ${entry.name}`);
      console.error(error instanceof Error ? error.stack ?? error.message : error);
    }
  }

  const passed = tests.length - failed;
  console.log(`[server-component-spotcheck-summary-selftest] ${passed}/${tests.length} passed`);
  if (failed > 0) {
    process.exitCode = 1;
  }
}

void runSelftest();
