import assert from "node:assert/strict";
import test from "node:test";
import { PNG } from "pngjs";
import { assertBuildableFileRetirement, findSpriteTextureCrop, retiredBuildableImages } from "./buildable-sprite-proof";
import type { ReviewedBuildablePortraitPublicAsset } from "./buildable-portrait-review";

const png = (width: number, height: number, pixels: number[]) => PNG.sync.write(Object.assign(new PNG({ width, height }), { data: Buffer.from(pixels) }));
const clear = [0, 0, 0, 0], red = [255, 0, 0, 255], blue = [0, 0, 255, 128];
test("Sprite proof requires one exact crop, including partially transparent pixels", () => {
  const sprite = png(2, 1, [...red, ...blue]);
  assert.deepEqual(findSpriteTextureCrop(sprite, png(3, 2, [...clear, ...clear, ...clear, ...clear, ...red, ...blue])), { x: 1, y: 1 });
  assert.throws(() => findSpriteTextureCrop(sprite, png(2, 1, [...red, ...red])), /found 0/);
  assert.throws(() => findSpriteTextureCrop(sprite, png(4, 1, [...red, ...blue, ...red, ...blue])), /found 2/);
  assert.throws(() => findSpriteTextureCrop(png(1, 1, clear), png(1, 1, clear)), /Empty/);
  assert.throws(() => findSpriteTextureCrop(sprite, png(1, 1, red)), /found 0/);
  assert.deepEqual(findSpriteTextureCrop(png(2, 1, [...red, 99, 88, 77, 0]), png(2, 1, [...red, ...clear])), { x: 0, y: 0 });
});

test("retirement requires a pinned old file and an approved native replacement", () => {
  for (const [file, old] of Object.entries(retiredBuildableImages)) {
    const asset = { prefab: old.prefab, fileName: "Replacement.png", evidenceKind: "runtime-sprite-name" } as ReviewedBuildablePortraitPublicAsset;
    assertBuildableFileRetirement(file, old.sha256, [asset]);
    assert.throws(() => assertBuildableFileRetirement(file, "0".repeat(64), [asset]), /changed/);
    assert.throws(() => assertBuildableFileRetirement(file, old.sha256, []), /Missing/);
    assert.throws(() => assertBuildableFileRetirement(file, old.sha256, [{ ...asset, fileName: file }]), /Missing/);
    assert.throws(() => assertBuildableFileRetirement(file, old.sha256, [{ ...asset, evidenceKind: "existing-curated" }]), /Missing/);
    assert.throws(() => assertBuildableFileRetirement("Unrelated.png", old.sha256, [asset]), /Unreviewed/);
  }
});
