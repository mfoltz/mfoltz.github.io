import assert from "node:assert/strict";
import test from "node:test";
import { validateGeneratedBlueprintText } from "./blueprint-text-generated";
test("638 owned Blueprint descriptions and all 902 related labels propagate to exact destinations", async () => {
  assert.deepEqual(await validateGeneratedBlueprintText(process.cwd()),
    { names: 638, descriptions: 638, materialReferences: 662, bookReferences: 240, itemOwners: 98, newMaterialReferences: 66, newBookReferences: 32, newItemOwners: 43,
      remainingMaterialReferences: 577, remainingBookReferences: 207, remainingItemOwners: 61 });
});
