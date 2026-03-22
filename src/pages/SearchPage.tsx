import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SearchInput } from "../components/common/SearchInput";
import { EmptyState, ErrorState, LoadingState, SectionHeader } from "../components/common/States";
import { ReferenceBadge } from "../components/reference/ReferenceUi";
import { dbSections, getDbSectionLabel, getReferenceSectionLabel, isDbSection, isReferenceSection, referenceSections } from "../config/sections";
import { fetchJson } from "../lib/fetch";
import { SearchEntry } from "../types/content";

const sectionOrder: string[] = [...referenceSections, ...dbSections];
const perSectionLimit = 24;

function getSectionLabel(section: string): string {
  if (isReferenceSection(section)) {
    return getReferenceSectionLabel(section);
  }

  if (isDbSection(section)) {
    return getDbSectionLabel(section);
  }

  return section;
}

function normalizeSearchValue(value: string): string {
  return value.toLowerCase().trim();
}

function isVisibleBadge(value: string): boolean {
  return value.length > 0 && !/^-?\d+$/.test(value) && !/^\d+\s+(prefabs?|components?|systems?|queries?)$/i.test(value);
}

function scoreEntry(entry: SearchEntry, query: string): number {
  const normalizedQuery = normalizeSearchValue(query);
  if (!normalizedQuery) {
    return 0;
  }

  const title = normalizeSearchValue(entry.title);
  const slug = normalizeSearchValue(entry.slug);
  const excerpt = normalizeSearchValue(entry.excerpt);
  const tags = (entry.tags ?? []).map(normalizeSearchValue);

  let score = 0;

  if (title === normalizedQuery) score += 220;
  if (slug === normalizedQuery) score += 200;
  if (title.startsWith(normalizedQuery)) score += 160;
  if (slug.startsWith(normalizedQuery)) score += 145;
  if (title.includes(normalizedQuery)) score += 120;
  if (slug.includes(normalizedQuery)) score += 110;
  if (tags.some((tag) => tag === normalizedQuery)) score += 105;
  if (tags.some((tag) => tag.startsWith(normalizedQuery))) score += 85;
  if (tags.some((tag) => tag.includes(normalizedQuery))) score += 60;
  if (excerpt.includes(normalizedQuery)) score += 30;

  return score;
}

function matchesScope(entry: SearchEntry, scope: string): boolean {
  if (scope === "all") {
    return true;
  }

  if (scope === "reference") {
    return isReferenceSection(entry.section);
  }

  if (scope === "db") {
    return isDbSection(entry.section);
  }

  return entry.section === scope;
}

function ScopeChip({ active, label, count, onClick }: { active: boolean; label: string; count?: number; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition ${
        active ? "border-emerald-400/40 bg-emerald-400/12 text-emerald-100" : "border-slate-800 bg-slate-950/50 text-slate-400 hover:border-slate-700 hover:text-slate-200"
      }`}
    >
      {count !== undefined ? `${label} (${count})` : label}
    </button>
  );
}

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [entries, setEntries] = useState<SearchEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const query = searchParams.get("q") ?? "";
  const scopeParam = searchParams.get("scope") ?? "all";
  const scope = scopeParam === "all" || scopeParam === "reference" || scopeParam === "db" || sectionOrder.includes(scopeParam) ? scopeParam : "all";

  useEffect(() => {
    fetchJson<SearchEntry[]>("/data/search.index.json")
      .then((data) => setEntries(data))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (scope === scopeParam) {
      return;
    }

    const nextParams = new URLSearchParams(searchParams);
    if (scope === "all") {
      nextParams.delete("scope");
    } else {
      nextParams.set("scope", scope);
    }
    setSearchParams(nextParams, { replace: true });
  }, [scope, scopeParam, searchParams, setSearchParams]);

  const hasQuery = query.trim().length > 0;

  const matched = useMemo(() => {
    if (!hasQuery) {
      return [];
    }

    return entries
      .map((entry) => ({ entry, score: scoreEntry(entry, query) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title));
  }, [entries, hasQuery, query]);

  const scored = useMemo(() => {
    return matched
      .filter(({ entry }) => matchesScope(entry, scope))
      .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title));
  }, [matched, scope]);

  const scopeCounts = useMemo(() => {
    if (!hasQuery) {
      return new Map<string, number>();
    }

    const counts = new Map<string, number>();
    counts.set("all", matched.length);
    counts.set("reference", matched.filter(({ entry }) => isReferenceSection(entry.section)).length);
    counts.set("db", matched.filter(({ entry }) => isDbSection(entry.section)).length);

    for (const { entry } of matched) {
      counts.set(entry.section, (counts.get(entry.section) ?? 0) + 1);
    }

    return counts;
  }, [hasQuery, matched]);

  const grouped = useMemo(() => {
    const bySection = scored.reduce<Record<string, { items: SearchEntry[]; total: number }>>((acc, result) => {
      const existing = acc[result.entry.section] ?? { items: [], total: 0 };
      existing.total += 1;
      if (existing.items.length < perSectionLimit) {
        existing.items.push(result.entry);
      }
      acc[result.entry.section] = existing;
      return acc;
    }, {});

    const orderedKeys = [...sectionOrder.filter((section) => section in bySection), ...Object.keys(bySection).filter((section) => !sectionOrder.includes(section))];
    return orderedKeys.map((section) => ({ section, items: bySection[section].items, total: bySection[section].total }));
  }, [scored]);

  const scopeOptions = [
    { value: "all", label: "All Results" },
    { value: "reference", label: "Reference" },
    { value: "db", label: "Database" },
    ...referenceSections.map((section) => ({ value: section, label: getReferenceSectionLabel(section) })),
    ...dbSections.map((section) => ({ value: section, label: getDbSectionLabel(section) }))
  ];

  function updateSearchParams(nextQuery: string, nextScope: string) {
    const nextParams = new URLSearchParams(searchParams);

    if (nextQuery.trim()) {
      nextParams.set("q", nextQuery);
    } else {
      nextParams.delete("q");
    }

    if (nextScope !== "all") {
      nextParams.set("scope", nextScope);
    } else {
      nextParams.delete("scope");
    }

    setSearchParams(nextParams, { replace: true });
  }

  return (
    <div>
      <SectionHeader title="Search" subtitle="Unified search across reference sections and DB records" />
      <section className="mb-6 overflow-hidden rounded-[2rem] border border-slate-800/90 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.14),_transparent_30%),linear-gradient(135deg,_rgba(15,23,42,0.98),_rgba(2,6,23,0.96))] p-5 shadow-2xl shadow-slate-950/20">
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(20rem,24rem)] xl:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/80">Cross-Section Retrieval</p>
            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              Search titles, identifiers, relation tags, and summaries across prefabs, components, systems, queries, and structured DB entries. Results stay grouped so technical context survives the search.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-400">
              {loading ? (
                <span className="rounded-full border border-slate-800 bg-slate-950/45 px-3 py-1">Loading search index</span>
              ) : hasQuery ? (
                <>
                  <span className="rounded-full border border-slate-800 bg-slate-950/45 px-3 py-1">{`${scored.length} ranked results`}</span>
                  <span className="rounded-full border border-slate-800 bg-slate-950/45 px-3 py-1">{`${grouped.length} populated sections`}</span>
                </>
              ) : (
                <span className="rounded-full border border-slate-800 bg-slate-950/45 px-3 py-1">{`${entries.length} indexed entries`}</span>
              )}
            </div>
          </div>
          <div>
            <SearchInput value={query} onChange={(value) => updateSearchParams(value, scope)} placeholder="Search by title, GUID, component, system, or summary..." />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {scopeOptions.map((option) => (
            <ScopeChip
              key={option.value}
              active={scope === option.value}
              label={option.label}
              count={!loading && hasQuery ? scopeCounts.get(option.value) ?? 0 : undefined}
              onClick={() => updateSearchParams(query, option.value)}
            />
          ))}
        </div>
      </section>
      {loading ? <LoadingState label="Loading search index..." /> : null}
      {error ? <ErrorState message={error} /> : null}
      {!loading && !error && !hasQuery ? <EmptyState label="Start typing to search the structured reference graph." /> : null}
      {!loading && !error && hasQuery && scored.length === 0 ? <EmptyState label="No search results." /> : null}
      <div className="space-y-4">
        {grouped.map(({ section, items, total }) => (
          <section key={section} className="rounded-[1.6rem] border border-slate-800/90 bg-slate-900/75 p-4 shadow-lg shadow-slate-950/10">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">{getSectionLabel(section)}</h2>
              <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                {total > items.length ? `Showing ${items.length} of ${total}` : `${total} result${total === 1 ? "" : "s"}`}
              </span>
            </div>
            <ul className="space-y-3">
              {items.map((entry) => (
                <li key={`${entry.section}:${entry.slug}`}>
                  <Link to={entry.path} className="group block rounded-2xl border border-slate-800 bg-slate-950/45 p-3 transition hover:border-emerald-500/40 hover:bg-slate-950/65">
                    <div className="flex flex-wrap gap-2">
                      <ReferenceBadge tone="accent">{getSectionLabel(entry.section)}</ReferenceBadge>
                      {entry.kind ? <ReferenceBadge tone="muted">{entry.kind}</ReferenceBadge> : null}
                      {(entry.badges ?? []).filter(isVisibleBadge).slice(0, 2).map((badge) => (
                        <ReferenceBadge key={badge} tone="muted">
                          {badge}
                        </ReferenceBadge>
                      ))}
                    </div>
                    <div className="mt-3 text-base font-medium text-slate-100">{entry.title}</div>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{entry.excerpt}</p>
                    <div className="mt-3 text-xs uppercase tracking-[0.16em] text-slate-500">{entry.path}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
