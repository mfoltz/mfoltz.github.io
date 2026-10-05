import type { DbBookBlueprintRef, DbBookBlueprintSource } from "../types/db";

export const bookBlueprintPageSize = 12;
export function filterBookBlueprints(items: DbBookBlueprintRef[], query: string): DbBookBlueprintRef[] {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return items.filter(item => {
    const text = [item.title, item.prefab, item.guid ?? "", ...item.declaringSources.flatMap(owner =>
      [owner.title, owner.prefab, owner.guid ?? ""])].join("\n").toLowerCase();
    return terms.every(term => text.includes(term));
  });
}
export function bookDeclaringSources(items: DbBookBlueprintRef[]): DbBookBlueprintSource[] {
  const sources = new Map<string, DbBookBlueprintSource>();
  for (const item of items) for (const owner of item.declaringSources) sources.set(`${owner.prefab}|${owner.guid}`, owner);
  return [...sources.values()].sort((a,b) => a.title.localeCompare(b.title, "en", { sensitivity: "base" })
    || (a.prefab < b.prefab ? -1 : a.prefab > b.prefab ? 1 : 0) || (a.guid ?? 0) - (b.guid ?? 0));
}
export function resolveBookBlueprintsShown(value: string | null, count: number): number {
  const parsed = value && /^\d+$/.test(value) ? Number(value) : NaN;
  return Math.min(count, Number.isSafeInteger(parsed) && parsed >= bookBlueprintPageSize ? parsed : bookBlueprintPageSize);
}
export function bookBlueprintParams(params: URLSearchParams, query: string, shown = bookBlueprintPageSize): URLSearchParams {
  const next = new URLSearchParams(params);
  if (query.trim()) next.set("bookQ", query); else next.delete("bookQ");
  if (shown > bookBlueprintPageSize) next.set("bookShown", String(shown)); else next.delete("bookShown");
  return next;
}
