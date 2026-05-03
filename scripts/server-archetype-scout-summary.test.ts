import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import {
  summarizeServerArchetypeScout,
  writeServerArchetypeScoutSummary
} from "./server-archetype-scout-summary";

type TestCase = {
  name: string;
  run: () => void | Promise<void>;
};

const tests: TestCase[] = [];

function test(name: string, run: TestCase["run"]) {
  tests.push({ name, run });
}

const candidates = [
  "GameplayEventIdMapping",
  "ApplyBuffOnGameplayEvent",
  "SpawnPrefabOnGameplayEvent",
  "RunScriptOnGameplayEvent",
  "DealDamageOnGameplayEvent"
];

test("summarizes scout component coverage, pairs, neighbors, and prefab evidence", async () => {
  const tempDir = await mkdtemp(path.join(tmpdir(), "server-archetype-scout-"));
  const artifactPath = path.join(tempDir, "ServerComponentArchetypeScoutServer.json");

  try {
    await writeFile(
      artifactPath,
      JSON.stringify([
        {
          EntityIndex: 10,
          PrefabGuid: 101,
          PrefabName: "AB_Bandit_Test_Hit",
          CaptureStatus: "captured",
          MatchedScoutComponentTypes: ["ProjectM.GameplayEventIdMapping", "ProjectM.ApplyBuffOnGameplayEvent"],
          AllComponentTypes: [
            "ProjectM.PrefabGUID",
            "ProjectM.GameplayEventIdMapping",
            "ProjectM.ApplyBuffOnGameplayEvent",
            "ProjectM.AbilityState"
          ],
          CapturedScoutComponents: {
            GameplayEventIdMapping: { EventId: 1 },
            ApplyBuffOnGameplayEvent: { Stacks: 1 }
          }
        },
        {
          EntityIndex: 11,
          PrefabGuid: 202,
          PrefabName: "CHAR_Test_Wolf",
          CaptureStatus: "captured",
          MatchedScoutComponentTypes: ["ProjectM.SpawnPrefabOnGameplayEvent", "ProjectM.RunScriptOnGameplayEvent"],
          AllComponentTypes: [
            "ProjectM.PrefabGUID",
            "ProjectM.SpawnPrefabOnGameplayEvent",
            "ProjectM.RunScriptOnGameplayEvent",
            "ProjectM.AbilityState",
            "ProjectM.Buff"
          ],
          CapturedScoutComponents: {
            SpawnPrefabOnGameplayEvent: { Prefab: 303 },
            RunScriptOnGameplayEvent: { ScriptType: "Example" }
          }
        },
        {
          EntityIndex: 12,
          PrefabGuid: 303,
          PrefabName: "Buff_Test_Missing",
          CaptureStatus: "matched-no-readable-data",
          MatchedScoutComponentTypes: ["ProjectM.DealDamageOnGameplayEvent"],
          AllComponentTypes: ["ProjectM.PrefabGUID", "ProjectM.DealDamageOnGameplayEvent"],
          CapturedScoutComponents: {
            DealDamageOnGameplayEventCaptureStatus: "matched-no-readable-data"
          }
        }
      ]),
      "utf8"
    );
    await writeFile(path.join(tempDir, "AbilityGroupsServer.json"), JSON.stringify([{ AbilityGroupId: 101 }]), "utf8");
    await writeFile(path.join(tempDir, "ItemsServer.json"), JSON.stringify([]), "utf8");
    await writeFile(path.join(tempDir, "NpcsServer.json"), JSON.stringify([{ NpcId: 202, UnitCategory: "Beast" }]), "utf8");

    const summary = await summarizeServerArchetypeScout({
      artifactPath,
      snapshotRoot: tempDir,
      candidateComponents: candidates
    });

    assert.equal(summary.rowCount, 3);
    assert.equal(summary.quality.interpretationStatus, "raw-unverified");
    assert.equal(summary.candidateCoverage.GameplayEventIdMapping.entities, 1);
    assert.equal(summary.candidateCoverage.DealDamageOnGameplayEvent.readablePayloads, 0);
    assert.deepEqual(summary.sameRunMatches, {
      abilityGroup: 1,
      item: 0,
      npc: 1,
      unmatched: 1
    });
    assert.equal(summary.coOccurrencePairs[0].pair, "ApplyBuffOnGameplayEvent + GameplayEventIdMapping");
    assert.equal(summary.coOccurrencePairs[0].entities, 1);
    assert.equal(summary.neighborComponents.ApplyBuffOnGameplayEvent[0].name, "AbilityState");
    assert.equal(summary.prefabPatterns.prefixes[0].name, "AB");
    assert.equal(summary.recommendations[0].component, "GameplayEventIdMapping");
    assert.match(summary.recommendations[0].reason, /co-occurs/);
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

test("writes parked archetype scout summaries without public DB output", async () => {
  const tempDir = await mkdtemp(path.join(tmpdir(), "server-archetype-scout-write-"));
  const artifactPath = path.join(tempDir, "ServerComponentArchetypeScoutServer.json");
  const outDir = path.join(tempDir, "analysis");

  try {
    await writeFile(
      artifactPath,
      JSON.stringify([
        {
          EntityIndex: 1,
          PrefabGuid: 404,
          PrefabName: "AB_Test_Output",
          CaptureStatus: "captured",
          MatchedScoutComponentTypes: ["ProjectM.GameplayEventIdMapping"],
          AllComponentTypes: ["ProjectM.GameplayEventIdMapping", "ProjectM.AbilityState"],
          CapturedScoutComponents: {
            GameplayEventIdMapping: { EventId: 1 }
          }
        }
      ]),
      "utf8"
    );

    const outputs = await writeServerArchetypeScoutSummary({
      artifactPath,
      snapshotRoot: tempDir,
      candidateComponents: candidates,
      outDir
    });

    assert.equal(path.basename(outputs.jsonPath), "ServerArchetypeScout.summary.json");
    assert.equal(path.basename(outputs.markdownPath), "ServerArchetypeScout.summary.md");

    const json = JSON.parse(await readFile(outputs.jsonPath, "utf8"));
    const markdown = await readFile(outputs.markdownPath, "utf8");
    assert.equal(json.rowCount, 1);
    assert.match(markdown, /# Server Archetype Scout Summary/);
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
  console.log(`[server-archetype-scout-summary-selftest] ${passed}/${tests.length} passed`);
  if (failed > 0) {
    process.exitCode = 1;
  }
}

void runSelftest();
