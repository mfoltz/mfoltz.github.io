import assert from "node:assert/strict";
import test from "node:test";
import { validateGeneratedBlueprintText } from "./blueprint-text-generated";
test("438 owned Blueprint descriptions and all 620 related labels propagate to exact destinations", async () => {
  assert.deepEqual(await validateGeneratedBlueprintText(process.cwd()),
    { names: 438, descriptions: 438, materialReferences: 430, bookReferences: 190, itemOwners: 89, newMaterialReferences: 66, newBookReferences: 32, newItemOwners: 43,
      remainingMaterialReferences: 345, remainingBookReferences: 157, remainingItemOwners: 51 });
});
