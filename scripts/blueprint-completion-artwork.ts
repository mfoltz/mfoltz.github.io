import assert from "node:assert/strict";
import type { DbEntityDetail } from "../src/types/db";
/** Pin an existing portrait so failure cannot silently become missing-artwork coverage. */
export function completionArtworkPath(detail: DbEntityDetail): string {
  assert.equal(detail.prefab, "BP_Castle_Stairs_Double_Stone02");
  assert.equal(detail.guid, -887317616);
  assert.equal(detail.slug, "bp-castle-stairs-double-stone02");
  assert.equal(detail.sourcePath, "content/prefabs/BP_Castle_Stairs_Double_Stone02.md");
  const asset = detail.portraitAssetPath || detail.iconAssetPath;
  assert(typeof asset === "string" && asset.startsWith("/icons/buildables/"), "Existing buildable portrait required");
  return asset;
}
