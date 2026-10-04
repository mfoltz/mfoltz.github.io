import assert from "node:assert/strict";
import test from "node:test";
import { filterIngredientRecipes, ingredientRecipeParams, resolveIngredientRecipesShown } from "./ingredientRecipeBrowse";

const rows = [
  { title: "Alpha Sword Recipe", prefab: "Recipe_Sword", guid: -7 },
  { title: "Alpha Bow Recipe", prefab: "Recipe_Bow", guid: 0 },
  { title: "Beta Sword Recipe", prefab: "Recipe_Other", guid: 17 }
];
test("ingredient-use search combines case-insensitive terms across complete titles, prefabs and GUIDs", () => {
  assert.deepEqual(filterIngredientRecipes(rows, "  ALPHA   -7 "), [rows[0]]);
  assert.deepEqual(filterIngredientRecipes(rows, "recipe_bow 0"), [rows[1]]);
  assert.deepEqual(filterIngredientRecipes(rows, "Sword 17"), [rows[2]]);
  assert.deepEqual(filterIngredientRecipes(rows, "absent"), []);
  assert.deepEqual(filterIngredientRecipes(rows, " \t "), rows);
});
test("expansion defaults safely and clamps to the matching count", () => {
  for (const value of [null, "", "garbage", "0", "-12", "2.5", "Infinity", "9999999999999999999999"]) {
    assert.equal(resolveIngredientRecipesShown(value, 88), 12);
  }
  assert.equal(resolveIngredientRecipesShown("24", 88), 24);
  assert.equal(resolveIngredientRecipesShown("1200", 88), 88);
  assert.equal(resolveIngredientRecipesShown("24", 5), 5);
  assert.equal(resolveIngredientRecipesShown(null, 0), 0);
});
test("parameter updates retain unrelated state, omit defaults and reset expansion on search", () => {
  const params = new URLSearchParams("keep=a&keep=b&usesQ=old&usesShown=24");
  assert.equal(ingredientRecipeParams(params, "Sword", 36).toString(), "keep=a&keep=b&usesQ=Sword&usesShown=36");
  assert.equal(ingredientRecipeParams(params, "new query").toString(), "keep=a&keep=b&usesQ=new+query");
  assert.equal(ingredientRecipeParams(params, " ").toString(), "keep=a&keep=b");
  assert.equal(params.get("usesShown"), "24");
});
