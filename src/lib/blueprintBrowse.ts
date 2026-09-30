import type { DbIndexEntry } from "../types/db";
import { includesQuery } from "./text";

export function getBlueprintBrowseModel(entries: DbIndexEntry[], params: URLSearchParams) {
  const types = new Map<string, { value: string; label: string; count: number }>();
  for (const entry of entries) {
    for (const [index, type] of (entry.unlockSourceTypes ?? []).entries()) {
      const option = types.get(type) ?? { value: type, label: entry.unlockSourceTypeLabels?.[index] ?? type, count: 0 };
      option.count += 1;
      types.set(type, option);
    }
  }
  const query = params.get("q") ?? "";
  const source = types.has(params.get("source") ?? "") ? params.get("source")! : "all";
  const coverage = ["linked", "unlinked"].includes(params.get("coverage") ?? "") ? params.get("coverage")! : "all";
  const books = ["linked", "unlinked"].includes(params.get("books") ?? "") ? params.get("books")! : "all";
  const sort = params.get("sort") === "sources" ? "sources" : "name";
  const filtered = entries.filter((entry) => {
    const hasSource = (entry.unlockSourceCount ?? 0) > 0;
    const hasBook = (entry.linkedBookCount ?? 0) > 0;
    return includesQuery([entry.title, entry.subtitle, entry.slug, ...entry.tags ?? [], ...entry.blueprintSearchTerms ?? []], query)
      && (source === "all" || entry.unlockSourceTypes?.includes(source))
      && (coverage === "all" || hasSource === (coverage === "linked"))
      && (books === "all" || hasBook === (books === "linked"));
  }).sort((a, b) => (sort === "sources" ? (b.unlockSourceCount ?? 0) - (a.unlockSourceCount ?? 0) : 0)
    || a.title.localeCompare(b.title) || a.slug.localeCompare(b.slug));
  return { filtered, query, source, coverage, books, sort, sourceOptions: [...types.values()].sort((a, b) => a.label.localeCompare(b.label)) };
}
