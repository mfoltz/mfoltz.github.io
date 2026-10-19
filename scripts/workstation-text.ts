import assert from "node:assert/strict";
import type { BlueprintTextBuildRow } from "./approved-blueprint-text";

/** Reuse only independently approved fields for the very same prefab record. */
export function resolveWorkstationText(
  identity: { prefabName: string; guid: number | null; sourcePath: string },
  owned: BlueprintTextBuildRow | undefined
) {
  if (!owned) return undefined;
  assert.equal(owned.prefab, identity.prefabName, "Workstation text prefab mismatch");
  assert.equal(owned.guid, identity.guid, "Workstation text GUID mismatch");
  assert.equal(owned.sourcePath, identity.sourcePath, "Workstation text source mismatch");
  return owned.fields;
}
