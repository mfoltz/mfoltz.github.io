import assert from "node:assert/strict";
import test from "node:test";
import { validateGeneratedBlueprintText } from "./blueprint-text-generated";
test("738 owned Blueprint descriptions and all 1062 related labels propagate to exact destinations", async () => {
  assert.deepEqual(await validateGeneratedBlueprintText(process.cwd()),
    { names: 738, descriptions: 738, materialReferences: 781, bookReferences: 281, itemOwners: 103, newMaterialReferences: 66, newBookReferences: 32, newItemOwners: 43,
      remainingMaterialReferences: 696, remainingBookReferences: 248, remainingItemOwners: 66 });
});
