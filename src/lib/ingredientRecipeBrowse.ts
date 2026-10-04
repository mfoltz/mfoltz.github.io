import type { DbRelatedEntityRef } from "../types/db";

export const ingredientRecipePageSize = 12;

export function filterIngredientRecipes(items: DbRelatedEntityRef[], query: string): DbRelatedEntityRef[] {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return items.filter(item => {
    const text = `${item.title}\n${item.prefab}\n${item.guid ?? ""}`.toLowerCase();
    return terms.every(term => text.includes(term));
  });
}

export function resolveIngredientRecipesShown(value: string | null, count: number): number {
  const parsed = value && /^\d+$/.test(value) ? Number(value) : NaN;
  return Math.min(count, Number.isSafeInteger(parsed) && parsed >= ingredientRecipePageSize ? parsed : ingredientRecipePageSize);
}

export function ingredientRecipeParams(params: URLSearchParams, query: string, shown = ingredientRecipePageSize): URLSearchParams {
  const next = new URLSearchParams(params);
  if (query.trim()) next.set("usesQ", query);
  else next.delete("usesQ");
  if (shown > ingredientRecipePageSize) next.set("usesShown", String(shown));
  else next.delete("usesShown");
  return next;
}
