import assert from "node:assert/strict";
import { PNG } from "pngjs";
import type { ReviewedBuildablePortraitPublicAsset } from "./buildable-portrait-review";

/** Require one exact visible RGBA crop; transparent RGB is not rendered. */
export function findSpriteTextureCrop(spriteBytes: Buffer, textureBytes: Buffer): { x: number; y: number } {
  const sprite = PNG.sync.read(spriteBytes), texture = PNG.sync.read(textureBytes);
  const anchor = sprite.data.findIndex((value, index) => index % 4 === 3 && value > 0) - 3;
  assert(anchor >= 0, "Empty Sprite export");
  const ax = (anchor / 4) % sprite.width, ay = Math.floor(anchor / 4 / sprite.width);
  const matches: { x: number; y: number }[] = [];
  for (let y = 0; y <= texture.height - sprite.height; y++) {
    for (let x = 0; x <= texture.width - sprite.width; x++) {
      const first = ((y + ay) * texture.width + x + ax) * 4;
      if (!sprite.data.subarray(anchor, anchor + 4).equals(texture.data.subarray(first, first + 4))) continue;
      let equal = true;
      for (let sy = 0; sy < sprite.height && equal; sy++) {
        for (let sx = 0; sx < sprite.width; sx++) {
          const s = (sy * sprite.width + sx) * 4, t = ((y + sy) * texture.width + x + sx) * 4;
          if (sprite.data[s + 3] === 0 && texture.data[t + 3] === 0) continue;
          if (!sprite.data.subarray(s, s + 4).equals(texture.data.subarray(t, t + 4))) { equal = false; break; }
        }
      }
      if (equal) matches.push({ x, y });
    }
  }
  assert.equal(matches.length, 1, `Expected one Sprite-to-texture crop, found ${matches.length}`);
  return matches[0];
}

// Retire only these three superseded, byte-pinned images after native replacement.
export const retiredBuildableImages: Record<string, { prefab: string; sha256: string }> = {
  "Stunlock_Icon_Structure_CastleWallTier02StonePillar.png": {
    prefab: "TM_Castle_Wall_Tier02_Stone_Pillar", sha256: "f31d42890365ac1afbb2d9f63c7e1b8182e83361aa107cf65451069f458ed7ec" },
  "Stunlock_Icon_Structure_SimpleCraftingBench.png": {
    prefab: "TM_CraftingStation_SimpleCraftingBench", sha256: "9badb6102e15c59b86f0bcffd4dc687ecac6ebf721b9605b61d2840ea13eebdd" },
  "StructureIcon_SawmillSmall_Normal.png": {
    prefab: "TM_RefinementStation_Sawmill_Small", sha256: "bee03860a3515b3aec9d5878166fe8301ce899c82b4cdb5d6133c0c8921d5c0e" }
};

export function assertBuildableFileRetirement(fileName: string, sha256: string, assets: ReviewedBuildablePortraitPublicAsset[]): void {
  const retired = retiredBuildableImages[fileName];
  assert(retired && retired.sha256 === sha256, `Unreviewed or changed existing buildable file: ${fileName}`);
  assert(assets.some(asset => asset.prefab === retired.prefab && asset.evidenceKind === "runtime-sprite-name" && asset.fileName !== fileName),
    `Missing native replacement for ${fileName}`);
}
