import type { DbRelatedEntityRef } from "../types/db";
export const materialBlueprintPageSize = 12;
export function filterMaterialBlueprints(items: DbRelatedEntityRef[], query: string): DbRelatedEntityRef[] {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return items.filter(item => {
    const text = `${item.title}\n${item.prefab}\n${item.guid ?? ""}`.toLowerCase();
    return terms.every(term => text.includes(term));
  });
}
export function resolveMaterialBlueprintsShown(value: string | null, count: number): number {
  const parsed = value && /^\d+$/.test(value) ? Number(value) : NaN;
  return Math.min(count, Number.isSafeInteger(parsed) && parsed >= materialBlueprintPageSize ? parsed : materialBlueprintPageSize);
}
export function materialBlueprintParams(params: URLSearchParams, query: string, shown = materialBlueprintPageSize): URLSearchParams {
  const next = new URLSearchParams(params);
  if (query.trim()) next.set("buildQ", query); else next.delete("buildQ");
  if (shown > materialBlueprintPageSize) next.set("buildShown", String(shown)); else next.delete("buildShown");
  return next;
}
