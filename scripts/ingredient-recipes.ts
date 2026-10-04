import assert from "node:assert/strict";
import type { DbEntityDetail, DbRelatedEntityRef } from "../src/types/db";
import { isSafeSlug } from "../src/lib/slug";

export const ingredientRecipeComponent = "ProjectM.RecipeRequirementBuffer";
export interface IngredientRecipeDocument {
  prefabName: string;
  guid: number | null;
  sourcePath: string;
  entries: Array<Record<string, string>>;
}
export interface IngredientDestination {
  title: string;
  prefab: string;
  guid: number | null;
  slug: string;
  path: string;
  icon?: string;
}
export type IngredientDestinationLookup = ReadonlyMap<string, readonly IngredientDestination[]>;

/** Preserve duplicate identities so they cannot silently become destinations. */
export function indexIngredientDestinations(rows: IngredientDestination[]): IngredientDestinationLookup {
  const result = new Map<string, IngredientDestination[]>();
  for (const row of rows) result.set(row.prefab, [...(result.get(row.prefab) ?? []), row]);
  return result;
}

export function compareIngredientRecipes(left: DbRelatedEntityRef, right: DbRelatedEntityRef): number {
  return left.title.localeCompare(right.title, "en", { sensitivity: "base" })
    || (left.prefab < right.prefab ? -1 : left.prefab > right.prefab ? 1 : 0)
    || (left.guid ?? 0) - (right.guid ?? 0);
}

function destination(lookup: IngredientDestinationLookup, prefab: string, guid: number | null,
  section: "items" | "recipes", allPrefabs: Record<string, number>): IngredientDestination {
  const rows = lookup.get(prefab) ?? [];
  assert.equal(rows.length, 1, `${prefab}: missing or ambiguous ${section} destination`);
  const row = rows[0];
  assert(Number.isSafeInteger(guid) && guid === allPrefabs[prefab] && guid === row.guid,
    `${prefab}: ${section} identity mismatch`);
  assert(row.prefab === prefab && isSafeSlug(row.slug) && row.path === `/db/${section}/${row.slug}`,
    `${prefab}: ${section} route mismatch`);
  return row;
}

/** Amount is the selected item's recorded requirement, never recipe output quantity. */
export function buildIngredientRecipes(docs: IngredientRecipeDocument[], items: IngredientDestinationLookup,
  recipes: IngredientDestinationLookup, allPrefabs: Record<string, number>): Map<string, DbRelatedEntityRef[]> {
  const result = new Map<string, DbRelatedEntityRef[]>();
  const seenRecipes = new Set<string>();
  for (const doc of docs) {
    assert(!seenRecipes.has(doc.prefabName), `${doc.prefabName}: duplicate recipe document`);
    seenRecipes.add(doc.prefabName);
    assert.equal(doc.sourcePath, `content/prefabs/${doc.prefabName}.md`, `${doc.prefabName}: recipe source path mismatch`);
    const recipe = destination(recipes, doc.prefabName, doc.guid, "recipes", allPrefabs);
    const seenItems = new Set<string>();
    for (const entry of doc.entries) {
      const match = entry.Guid?.trim().match(/^([A-Za-z0-9_]+)\s+PrefabGuid\((-?\d+)\)$/);
      assert(match, `${doc.prefabName}: malformed ingredient identity`);
      const amount = /^\d+(?:\.\d+)?$/.test(entry.Amount?.trim() ?? "") ? Number(entry.Amount) : NaN;
      assert(Number.isFinite(amount) && amount > 0, `${doc.prefabName}: invalid ingredient quantity`);
      const prefab = match[1], guid = Number(match[2]);
      destination(items, prefab, guid, "items", allPrefabs);
      assert(!seenItems.has(prefab), `${doc.prefabName}: duplicate item/recipe pair: ${prefab}`);
      seenItems.add(prefab);
      const rows = result.get(prefab) ?? [];
      rows.push({ title: recipe.title, prefab: recipe.prefab, guid: recipe.guid, amount,
        slug: recipe.slug, path: recipe.path, icon: recipe.icon,
        sourceComponent: ingredientRecipeComponent, sourcePath: doc.sourcePath });
      result.set(prefab, rows);
    }
  }
  for (const rows of result.values()) rows.sort(compareIngredientRecipes);
  return result;
}

/** Reconstruct only the named buffer, independently of the generator's component parser. */
export function readIngredientRecipeDocument(sourcePath: string, markdown: string): IngredientRecipeDocument {
  const body = markdown.replace(/\r\n?/g, "\n");
  const blocks = [...body.matchAll(/^- \[ProjectM\.RecipeRequirementBuffer\].*?(?=^- \[|(?![\s\S]))/gms)];
  assert(blocks.length <= 1, `${sourcePath}: duplicate ingredient buffers`);
  const block = blocks[0]?.[0] ?? "";
  const entries = block.split(/^- \*\*\[\d+\]\*\*/m).slice(1).map(row => {
    const fields: Record<string, string> = {};
    for (const match of row.matchAll(/`([^:`]+):\s*([^`]+)`/g)) {
      assert(!(match[1] in fields), `${sourcePath}: duplicate ingredient field: ${match[1]}`);
      fields[match[1]] = match[2].trim();
    }
    return fields;
  });
  const prefabName = body.match(/^title:\s*([^\n]+)$/m)?.[1].trim() ?? "";
  const guid = body.match(/^guid:\s*(-?\d+)\s*$/m)?.[1];
  return { prefabName, guid: guid ? Number(guid) : null, sourcePath, entries };
}

export function validateIngredientRecipes(details: DbEntityDetail[], expected: ReadonlyMap<string, DbRelatedEntityRef[]>): void {
  const seen = new Set<string>();
  for (const detail of details) {
    assert(typeof detail.prefab === "string" && !seen.has(detail.prefab), `${detail.slug}: missing or duplicate item identity`);
    seen.add(detail.prefab);
    const rows = expected.get(detail.prefab);
    if (!rows) assert.equal(detail.ingredientRecipes, undefined, `${detail.prefab}: unexpected ingredient recipes`);
    else assert.deepEqual(detail.ingredientRecipes, JSON.parse(JSON.stringify(rows)),
      `${detail.prefab}: ingredient recipes differ from independent source/destinations`);
  }
  for (const prefab of expected.keys()) assert(seen.has(prefab), `${prefab}: missing ingredient item detail`);
}
