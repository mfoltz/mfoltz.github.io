import assert from "node:assert/strict";
import test from "node:test";
import { validateGeneratedBlueprintText } from "./blueprint-text-generated";
test("ten owned Blueprint descriptions and all twenty related labels propagate to exact destinations", async () => {
  assert.deepEqual(await validateGeneratedBlueprintText(process.cwd()),
    { names: 10, descriptions: 10, materialReferences: 19, bookReferences: 1, itemOwners: 15 });
});
