import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import {
  buildServerEcsComponentEvidence,
  validateServerEcsComponentEvidence,
  writeServerEcsComponentEvidence
} from "./server-ecs-enrichment";

type TestCase = {
  name: string;
  run: () => void | Promise<void>;
};

const tests: TestCase[] = [];

function test(name: string, run: TestCase["run"]) {
  tests.push({ name, run });
}

function fixtureSummary() {
  return {
    componentName: "DealDamageOnGameplayEvent",
    source: {
      artifactPath: "VRising.DataExtractor/.codex/runs/example/ServerComponentSpotChecksServer.json",
      snapshotRoot: "VRising.DataExtractor/.codex/runs/example"
    },
    rowCount: 3,
    capturedRowCount: 3,
    missingComponentRowCount: 0,
    captureStatuses: {
      captured: 3
    },
    matchedComponentTypes: [{ name: "ProjectM.DealDamageOnGameplayEvent", count: 3 }],
    fieldCoverage: {
      Parameters: { present: 3, nonDefault: 3, distinct: 3, topValues: [] },
      DamageModifierPerHit: { present: 3, nonDefault: 1, distinct: 2, topValues: [] },
      MultiplyMainFactorWithStacks: { present: 3, nonDefault: 1, distinct: 2, topValues: [] }
    },
    parameterFieldCoverage: {
      RawDamageValue: { present: 3, nonDefault: 0, distinct: 1, topValues: [{ name: "0", count: 3 }] },
      RawDamagePercent: { present: 3, nonDefault: 2, distinct: 3, topValues: [] }
    },
    materialModifierCoverage: {
      Human: { present: 3, nonDefault: 1, distinct: 2, topValues: [] }
    },
    prefabPrefixes: [
      { name: "AB", count: 2 },
      { name: "CHAR", count: 1 }
    ],
    prefabFamilies: [
      { name: "AB_Bandit", count: 1 },
      { name: "AB_Vampire", count: 1 },
      { name: "CHAR_Wolf", count: 1 }
    ],
    sameRunMatches: {
      abilityGroup: 0,
      item: 0,
      npc: 1,
      unmatched: 2
    },
    rawProjectionNotes: ["MainType has encoded-looking numeric values."],
    evidence: [
      {
        key: "DealDamageOnGameplayEvent:202",
        source: { artifactPath: "source-b" },
        entity: {
          entityIndex: 2,
          prefabGuid: 202,
          prefabName: "CHAR_Wolf_Test",
          prefabPrefix: "CHAR",
          prefabFamily: "CHAR_Wolf"
        },
        component: {
          name: "DealDamageOnGameplayEvent",
          matchedTypes: ["ProjectM.DealDamageOnGameplayEvent"]
        },
        rawFields: {
          Parameters: {
            RawDamageValue: 0,
            RawDamagePercent: 0.5,
            MainType: "Physical"
          },
          DamageModifierPerHit: 0,
          MultiplyMainFactorWithStacks: false
        },
        patterns: {
          sameRunIndexMatch: "npc",
          prefabPrefix: "CHAR",
          prefabFamily: "CHAR_Wolf"
        },
        quality: {
          captureStatus: "captured",
          projectionMode: "raw-json",
          interpretationStatus: "raw-unverified"
        }
      },
      {
        key: "DealDamageOnGameplayEvent:101",
        source: { artifactPath: "source-a" },
        entity: {
          entityIndex: 1,
          prefabGuid: 101,
          prefabName: "AB_Bandit_Test",
          prefabPrefix: "AB",
          prefabFamily: "AB_Bandit"
        },
        component: {
          name: "DealDamageOnGameplayEvent",
          matchedTypes: ["ProjectM.DealDamageOnGameplayEvent"]
        },
        rawFields: {
          Parameters: {
            RawDamageValue: 0,
            RawDamagePercent: 1.25,
            MainType: "1065353216"
          },
          DamageModifierPerHit: 1,
          MultiplyMainFactorWithStacks: true
        },
        patterns: {
          sameRunIndexMatch: "unmatched",
          prefabPrefix: "AB",
          prefabFamily: "AB_Bandit"
        },
        quality: {
          captureStatus: "captured",
          projectionMode: "raw-json",
          interpretationStatus: "raw-unverified"
        }
      },
      {
        key: "DealDamageOnGameplayEvent:303",
        source: { artifactPath: "source-c" },
        entity: {
          entityIndex: 3,
          prefabGuid: 303,
          prefabName: "AB_Vampire_Test",
          prefabPrefix: "AB",
          prefabFamily: "AB_Vampire"
        },
        component: {
          name: "DealDamageOnGameplayEvent",
          matchedTypes: ["ProjectM.DealDamageOnGameplayEvent"]
        },
        rawFields: {
          Parameters: {
            RawDamageValue: 0,
            RawDamagePercent: 0,
            MainType: "1065353216"
          },
          DamageModifierPerHit: 0,
          MultiplyMainFactorWithStacks: false
        },
        patterns: {
          sameRunIndexMatch: "unmatched",
          prefabPrefix: "AB",
          prefabFamily: "AB_Vampire"
        },
        quality: {
          captureStatus: "captured",
          projectionMode: "raw-json",
          interpretationStatus: "raw-unverified"
        }
      }
    ]
  };
}

test("normalizes server ECS proof summary into deterministic draft evidence", () => {
  const evidence = buildServerEcsComponentEvidence(fixtureSummary());

  assert.equal(evidence.schemaVersion, 1);
  assert.deepEqual(evidence.source, {
    sourceKind: "extractor-server-ecs-spotcheck",
    componentName: "DealDamageOnGameplayEvent",
    artifactPath: "VRising.DataExtractor/.codex/runs/example/ServerComponentSpotChecksServer.json",
    snapshotRoot: "VRising.DataExtractor/.codex/runs/example"
  });
  assert.deepEqual(
    evidence.entries.map((entry) => entry.key),
    ["DealDamageOnGameplayEvent:101", "DealDamageOnGameplayEvent:303", "DealDamageOnGameplayEvent:202"]
  );
  assert.deepEqual(evidence.coverage, {
    rowCount: 3,
    capturedRowCount: 3,
    missingComponentRowCount: 0,
    captureStatuses: { captured: 3 },
    matchedComponentTypes: [{ name: "ProjectM.DealDamageOnGameplayEvent", count: 3 }]
  });
  assert.equal(evidence.entries[0].identity.prefabName, "AB_Bandit_Test");
  assert.equal(evidence.entries[0].quality.interpretationStatus, "raw-unverified");
  assert.deepEqual(evidence.entries[0].rawFields, fixtureSummary().evidence[1].rawFields);
  assert.equal(JSON.stringify(evidence).includes("generatedAt"), false);
  validateServerEcsComponentEvidence(evidence, { allowAnyCount: true });
});

test("rejects client-gated and fabricated tooltip variable evidence", () => {
  const evidence = buildServerEcsComponentEvidence(fixtureSummary());
  assert.equal(typeof evidence.entries[0].rawFields, "object");
  assert.notEqual(evidence.entries[0].rawFields, null);
  const poisoned = {
    ...evidence,
    entries: [
      {
        ...evidence.entries[0],
        rawFields: {
          ...(evidence.entries[0].rawFields as Record<string, unknown>),
          textVariableValues: {
            damage: {
              value: "125%",
              sourceRef: "client-connect-tooltipprobe"
            }
          }
        }
      }
    ]
  };

  assert.throws(() => validateServerEcsComponentEvidence(poisoned, { allowAnyCount: true }), /client-gated or fabricated field/i);
});

test("writes draft evidence JSON", async () => {
  const tempDir = await mkdtemp(path.join(tmpdir(), "server-ecs-enrichment-"));
  const summaryPath = path.join(tempDir, "summary.json");
  const outPath = path.join(tempDir, "server-ecs-component-evidence.json");

  try {
    await writeFile(summaryPath, JSON.stringify(fixtureSummary()), "utf8");
    await writeServerEcsComponentEvidence({ summaryPath, outPath, allowAnyCount: true });

    const written = JSON.parse(await readFile(outPath, "utf8"));
    assert.equal(written.schemaVersion, 1);
    assert.equal(written.entries.length, 3);
    assert.equal(written.entries[0].key, "DealDamageOnGameplayEvent:101");
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
  console.log(`[server-ecs-enrichment-selftest] ${passed}/${tests.length} passed`);
  if (failed > 0) {
    process.exitCode = 1;
  }
}

void runSelftest();
