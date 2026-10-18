import assert from "node:assert/strict";
import test from "node:test";
import { validateGeneratedBlueprintText } from "./blueprint-text-generated";
test("928 owned Blueprint descriptions and all 1418 related labels propagate to exact destinations", async () => {
  assert.deepEqual(await validateGeneratedBlueprintText(process.cwd()),
    { names: 928, descriptions: 928, materialReferences: 1098, bookReferences: 320, itemOwners: 121, newMaterialReferences: 66, newBookReferences: 32, newItemOwners: 43,
      remainingMaterialReferences: 1013, remainingBookReferences: 287, remainingItemOwners: 87 });
});
