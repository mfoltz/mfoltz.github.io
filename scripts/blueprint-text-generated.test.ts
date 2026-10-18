import assert from "node:assert/strict";
import test from "node:test";
import { validateGeneratedBlueprintText } from "./blueprint-text-generated";
test("538 owned Blueprint descriptions and all 761 related labels propagate to exact destinations", async () => {
  assert.deepEqual(await validateGeneratedBlueprintText(process.cwd()),
    { names: 538, descriptions: 538, materialReferences: 546, bookReferences: 215, itemOwners: 91, newMaterialReferences: 66, newBookReferences: 32, newItemOwners: 43,
      remainingMaterialReferences: 461, remainingBookReferences: 182, remainingItemOwners: 54 });
});
