import assert from "node:assert/strict";
import test from "node:test";
import { validateGeneratedBlueprintText } from "./blueprint-text-generated";
test("338 owned Blueprint descriptions and all 452 related labels propagate to exact destinations", async () => {
  assert.deepEqual(await validateGeneratedBlueprintText(process.cwd()),
    { names: 338, descriptions: 338, materialReferences: 308, bookReferences: 144, itemOwners: 74, newMaterialReferences: 66, newBookReferences: 32, newItemOwners: 43,
      remainingMaterialReferences: 223, remainingBookReferences: 111, remainingItemOwners: 36 });
});
