import assert from "node:assert/strict";
import test from "node:test";
import { validateGeneratedBlueprintText } from "./blueprint-text-generated";
test("138 owned Blueprint descriptions and all 118 related labels propagate to exact destinations", async () => {
  assert.deepEqual(await validateGeneratedBlueprintText(process.cwd()),
    { names: 138, descriptions: 138, materialReferences: 85, bookReferences: 33, itemOwners: 51, newMaterialReferences: 66, newBookReferences: 32, newItemOwners: 43 });
});
