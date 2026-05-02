import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { BrowseControlStrip, type BrowseMetric } from "../components/common/BrowseControlStrip";
import { HighlightedText } from "../components/common/HighlightedText";
import { SearchInput } from "../components/common/SearchInput";
import { EmptyState, ErrorState, LoadingState, SectionHeader } from "../components/common/States";
import { VariableText } from "../components/common/VariableText";
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

function getSectionFamily(section: string): string {
  if (isReferenceSection(section)) {
    return "Reference";
  }

  if (isDbSection(section)) {
    return "Database";
  }

  return "Section";
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
      className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition ${active ? "database-segment database-segment-active" : "database-segment"}`}
    >
      {count !== undefined ? `${label} (${count})` : label}
    </button>
  );
}

function SearchResultRow({ entry, query }: { entry: SearchEntry; query: string }) {
  const visibleBadges = (entry.badges ?? []).filter(isVisibleBadge).slice(0, 1);

  return (
    <li className="list-none">
      <Link
        to={entry.path}
        className="database-ledger-row group grid gap-3.5 px-4 py-3.5 lg:grid-cols-[minmax(0,1fr)_minmax(12rem,0.4fr)] lg:items-start"
      >
        <div className="min-w-0">
          <div className="flex flex-wrap gap-2">
            <ReferenceBadge tone="accent">{getSectionFamily(entry.section)}</ReferenceBadge>
            <ReferenceBadge tone="muted">{getSectionLabel(entry.section)}</ReferenceBadge>
            {entry.kind ? <ReferenceBadge tone="muted">{entry.kind}</ReferenceBadge> : null}
            {visibleBadges.map((badge) => (
              <ReferenceBadge key={badge} tone="muted">
                {badge}
              </ReferenceBadge>
            ))}
          </div>
          <div className="mt-2.5 text-base font-semibold text-[var(--database-ink)]">
            <HighlightedText text={entry.title} query={query} />
          </div>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--database-muted)]">
            <VariableText text={entry.excerpt} query={query} variableValues={entry.textVariableValues} />
          </p>
        </div>
        <div className="flex items-center justify-between gap-3 lg:block lg:text-right">
          <div className="break-all font-mono text-[11px] text-[var(--database-dim)]">{entry.path}</div>
          <div className="database-row-action mt-2 text-[11px] font-semibold uppercase tracking-[0.18em]">
            Open Record
          </div>
        </div>
      </Link>
    </li>
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
  const trimmedQuery = query.trim();
  const hasQuery = trimmedQuery.length > 0;

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

  const matched = useMemo(() => {
    if (!hasQuery) {
      return [];
    }

    return entries
      .map((entry) => ({ entry, score: scoreEntry(entry, query) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title));
  }, [entries, hasQuery, query]);

  const scored = useMemo(
    () =>
      matched
        .filter(({ entry }) => matchesScope(entry, scope))
        .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title)),
    [matched, scope]
  );

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

  function clearSearch() {
    setSearchParams(new URLSearchParams(), { replace: true });
  }

  const activeFilters = [trimmedQuery ? `Query: ${trimmedQuery}` : null, scope !== "all" ? `Scope: ${getSectionLabel(scope)}` : null].filter(
    (value): value is string => Boolean(value)
  );

  const metrics: BrowseMetric[] = loading
    ? [{ label: "Loading search index", tone: "muted" }]
    : hasQuery
      ? [
          { label: `${scored.length} ranked results` },
          { label: `${grouped.length} populated sections`, tone: "muted" }
      ]
      : [{ label: `${entries.length} indexed entries`, tone: "muted" }];

  const hasCappedSections = grouped.some(({ items, total }) => total > items.length);
  const helperText =
    !loading && hasQuery && scored.length > 0
      ? `${scored.length} result${scored.length === 1 ? "" : "s"} for "${trimmedQuery}" across ${grouped.length} section${grouped.length === 1 ? "" : "s"}${
          hasCappedSections ? `. Showing up to ${perSectionLimit} per section.` : "."
        }`
      : undefined;

  let emptyLabel: string | null = null;
  if (!loading && !error) {
    if (!hasQuery && scope === "all") {
      emptyLabel = "Start typing to search V Rising Data Base records and their reference layer.";
    } else if (!hasQuery) {
      emptyLabel = "Add a query or clear filters to search across all sections.";
    } else if (matched.length === 0) {
      emptyLabel = `No search results for "${trimmedQuery}".`;
    } else if (scored.length === 0) {
      emptyLabel = "No search results match the current scope. Clear filters to search all sections.";
    }
  }

  return (
    <div>
      <SectionHeader title="Search" subtitle="Search across generated data and reference records." />

      <BrowseControlStrip
        searchSlot={
          <SearchInput
            value={query}
            onChange={(value) => updateSearchParams(value, scope)}
            placeholder="Search by title, GUID, component, system, or summary..."
            className="rounded-[0.95rem] px-4 py-3.5 text-sm"
          />
        }
        metrics={metrics}
        filterSlot={
          <>
            {scopeOptions.map((option) => (
              <ScopeChip
                key={option.value}
                active={scope === option.value}
                label={option.label}
                count={!loading && hasQuery ? scopeCounts.get(option.value) ?? 0 : undefined}
                onClick={() => updateSearchParams(query, option.value)}
              />
            ))}
          </>
        }
        activeFilters={activeFilters}
        helperText={helperText}
        onClear={activeFilters.length > 0 ? clearSearch : undefined}
        clearLabel="Clear search"
      />

      {loading ? <LoadingState label="Loading search index..." /> : null}
      {error ? <ErrorState message={error} /> : null}
      {emptyLabel ? <EmptyState label={emptyLabel} /> : null}

      <div className="space-y-5">
        {grouped.map(({ section, items, total }) => (
          <section key={section} className="database-ledger-surface overflow-hidden rounded-[1.7rem]">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--database-divider)] px-5 py-4">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--database-dim)]">{getSectionFamily(section)}</div>
                <h2 className="mt-2 text-lg font-semibold text-[var(--database-ink)]">{getSectionLabel(section)}</h2>
              </div>
              <span className="text-xs uppercase tracking-[0.18em] text-[var(--database-dim)]">
                {total > items.length ? `Showing ${items.length} of ${total}` : `${total} result${total === 1 ? "" : "s"}`}
              </span>
            </div>
            <ul className="database-ledger">
              {items.map((entry) => (
                <SearchResultRow key={`${entry.section}:${entry.slug}`} entry={entry} query={query} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
