import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { buildAssetDumpCandidates, formatAssetDumpSetupHint } from "./asset-dump-resolver";
import { loadTextVariableValuesFromFiles } from "./text-variable-sources";
import { isTextVariableSourceKind } from "../src/lib/textVariables";

type TestCase = {
  name: string;
  run: () => void | Promise<void>;
};

const tests: TestCase[] = [];

function test(name: string, run: TestCase["run"]) {
  tests.push({ name, run });
}

test("text variable source kinds include extractor event buffers", () => {
  assert.equal(isTextVariableSourceKind("extractor-event-buffer"), true);
});

test("external text variable source files are keyed by prefab and token", async () => {
  const tempDir = await mkdtemp(path.join(tmpdir(), "text-variable-source-"));
  const sourcePath = path.join(tempDir, "event-buffer-values.json");

  try {
    await writeFile(
      sourcePath,
      JSON.stringify({
        entries: [
          {
            abilityPrefab: "AB_Bandit_StickyBomb_AbilityGroup",
            token: "damage",
            value: "125%",
            sourceKind: "extractor-event-buffer",
            sourceRef: "VRising.DataExtractor/DealDamageOnGameplayEvent.json",
            sourcePrefab: "AB_Bandit_StickyBomb_AbilityGroup"
          }
        ]
      }),
      "utf8"
    );

    const context = await loadTextVariableValuesFromFiles([sourcePath]);

    assert.deepEqual(context.byPrefab.get("AB_Bandit_StickyBomb_AbilityGroup"), {
      damage: {
        value: "125%",
        sourceKind: "extractor-event-buffer",
        sourceRef: "VRising.DataExtractor/DealDamageOnGameplayEvent.json",
        sourcePrefab: "AB_Bandit_StickyBomb_AbilityGroup"
      }
    });
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

test("asset dump discovery is env-driven and reports setup guidance without personal defaults", () => {
  const candidates = buildAssetDumpCandidates({
    VRISING_ASSET_DUMP_DIR: "",
    VRISING_ASSET_DUMP_DIRS: ""
  });

  assert.deepEqual(candidates, []);
  assert.match(formatAssetDumpSetupHint(), /VRISING_ASSET_DUMP_DIR/);
  assert.doesNotMatch(formatAssetDumpSetupHint(), /C:\/Users\/mitch/);
});

test("site CSS does not import remote fonts at runtime", async () => {
  const css = await readFile(path.join(process.cwd(), "src", "styles", "index.css"), "utf8");

  assert.doesNotMatch(css, /fonts\.googleapis\.com/);
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
  console.log(`[text-variable-pipeline-selftest] ${passed}/${tests.length} passed`);
  if (failed > 0) {
    process.exitCode = 1;
  }
}

void runSelftest();
