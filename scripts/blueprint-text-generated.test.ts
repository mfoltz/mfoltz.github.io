import assert from "node:assert/strict";
import test from "node:test";
import { validateGeneratedBlueprintText } from "./blueprint-text-generated";
test("238 owned Blueprint descriptions and all 286 related labels propagate to exact destinations", async () => {
  assert.deepEqual(await validateGeneratedBlueprintText(process.cwd()),
    { names: 238, descriptions: 238, materialReferences: 205, bookReferences: 81, itemOwners: 63, newMaterialReferences: 66, newBookReferences: 32, newItemOwners: 43,
      remainingMaterialReferences: 120, remainingBookReferences: 48, remainingItemOwners: 24 });
});
