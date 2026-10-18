import assert from "node:assert/strict";
import test from "node:test";
import { validateGeneratedBlueprintText } from "./blueprint-text-generated";
test("838 owned Blueprint descriptions and all 1225 related labels propagate to exact destinations", async () => {
  assert.deepEqual(await validateGeneratedBlueprintText(process.cwd()),
    { names: 838, descriptions: 838, materialReferences: 909, bookReferences: 316, itemOwners: 104, newMaterialReferences: 66, newBookReferences: 32, newItemOwners: 43,
      remainingMaterialReferences: 824, remainingBookReferences: 283, remainingItemOwners: 67 });
});
