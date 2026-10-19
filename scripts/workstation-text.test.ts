import assert from "node:assert/strict";
import test from "node:test";
import { resolveWorkstationText } from "./workstation-text";
import type { BlueprintTextBuildRow } from "./approved-blueprint-text";

const identity = { prefabName: "TM_Example", guid: -123, sourcePath: "content/prefabs/TM_Example.md" };
const owned: BlueprintTextBuildRow = { prefab: identity.prefabName, guid: -123,
  sourcePath: identity.sourcePath, fields: { displayNameEn: "Owned Name", summaryEn: "Exact description. ",
    sourceKind: "extractor-raw", sourceRef: "data/enrichment/blueprint-text-completion.json#TM_Example" } };

test("approved workstation text preserves exact independently eligible values", () => {
  assert.equal(resolveWorkstationText(identity, owned), owned.fields);
  for (const fields of [{ displayNameEn: "Only a name" }, { summaryEn: "Only a description. " }]) {
    assert.deepEqual(resolveWorkstationText(identity, { ...owned, fields }), fields);
  }
  assert.equal(resolveWorkstationText(identity, undefined), undefined);
});

test("shared names, missing GUIDs and source mismatches cannot qualify a workstation join", () => {
  for (const changed of [{ prefabName: "TM_Other" }, { guid: 123 }, { guid: null }, { sourcePath: "other.md" }]) {
    assert.throws(() => resolveWorkstationText({ ...identity, ...changed }, owned), /Workstation text .* mismatch/);
  }
});
