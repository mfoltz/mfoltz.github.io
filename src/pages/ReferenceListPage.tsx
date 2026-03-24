import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BrowseControlStrip, type BrowseMetric } from "../components/common/BrowseControlStrip";
import { SearchInput } from "../components/common/SearchInput";
import { EmptyState, ErrorState, LoadingState, SectionHeader } from "../components/common/States";
import { ReferenceBadge, ReferenceFilterButton, ReferenceIndexRow } from "../components/reference/ReferenceUi";
import { getReferenceSectionLabel, isReferenceSection } from "../config/sections";
import { fetchJson } from "../lib/fetch";
import { includesQuery } from "../lib/text";
import { ReferenceIndexEntry } from "../types/reference";

const visibleLimit = 144;
const suppressedPrefabCollectionKeys = new Set(["all", "ab", "tm", "chain", "dt", "dg", "uc", "beh", "co", "vm", "dynamic", "dynamics", "remainders", "sct", "vib"]);

function normalizeValue(value: string): string {
  return value.toLowerCase().trim();
}

function isFilterBadge(value: string): boolean {
  return value.length > 0 && !/^-?\d+$/.test(value) && !/^\d+\s+(prefabs?|components?|systems?|queries?)$/i.test(value);
}

function isPromotedPrefabCollection(entry: ReferenceIndexEntry): boolean {
  return !suppressedPrefabCollectionKeys.has(normalizeValue(entry.title));
}

export function ReferenceListPage({ section: sectionProp }: { section?: string }) {
  const params = useParams();
  const section = sectionProp ?? params.section ?? "";
  const [entries, setEntries] = useState<ReferenceIndexEntry[]>([]);
  const [query, setQuery] = useState("");
  const [kindFilter, setKindFilter] = useState("all");
  const [badgeFilter, setBadgeFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isReferenceSection(section)) {
      setError("Unknown reference section.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    fetchJson<ReferenceIndexEntry[]>(`/data/reference/${section}/index.json`)
      .then((data) => setEntries(data))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [section]);

  useEffect(() => {
    setQuery("");
    setKindFilter("all");
    setBadgeFilter("all");
  }, [section]);

  const queryFiltered = useMemo(
    () => entries.filter((entry) => includesQuery([entry.title, entry.slug, entry.kind, entry.tags.join(" "), entry.excerpt, (entry.badges ?? []).join(" ")], query)),
    [entries, query]
  );

  const kindOptions = useMemo(() => {
    const counts = new Map<string, number>();
    for (const entry of queryFiltered) {
      counts.set(entry.kind, (counts.get(entry.kind) ?? 0) + 1);
    }

    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [queryFiltered]);

  const badgeOptions = useMemo(() => {
    const counts = new Map<string, number>();
    for (const entry of queryFiltered.filter((item) => item.kind !== "collection")) {
      for (const badge of entry.badges ?? []) {
        if (!isFilterBadge(badge)) {
          continue;
        }
        counts.set(badge, (counts.get(badge) ?? 0) + 1);
      }
    }

    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 10);
  }, [queryFiltered]);

  const filtered = useMemo(
    () =>
      queryFiltered.filter((entry) => {
        if (kindFilter !== "all" && entry.kind !== kindFilter) {
          return false;
        }

        if (badgeFilter !== "all" && !(entry.badges ?? []).includes(badgeFilter)) {
          return false;
        }

        return true;
      }),
    [badgeFilter, kindFilter, queryFiltered]
  );

  const collections = useMemo(
    () => (section === "prefabs" ? filtered.filter((entry) => entry.kind === "collection" && isPromotedPrefabCollection(entry)).slice(0, 18) : []),
    [filtered, section]
  );
  const rows = useMemo(() => filtered.filter((entry) => entry.kind !== "collection"), [filtered]);
  const visibleRows = rows.slice(0, visibleLimit);
  const hasActiveFilters = query.trim().length > 0 || kindFilter !== "all" || badgeFilter !== "all";
  const activeFilters = [
    query.trim() ? `Search: ${query.trim()}` : null,
    kindFilter !== "all" ? `Kind: ${kindFilter}` : null,
    badgeFilter !== "all" ? `Facet: ${badgeFilter}` : null
  ].filter((value): value is string => Boolean(value));
  const metrics: BrowseMetric[] = loading
    ? [{ label: "Loading reference index", tone: "muted" }]
    : [
        { label: `${filtered.length} matches` },
        { label: `${entries.length} total records`, tone: "muted" },
        ...(rows.length > visibleRows.length ? [{ label: `Showing first ${visibleRows.length}`, tone: "accent" as const }] : [])
      ];

  const helperText = !loading && rows.length > visibleRows.length ? `Showing first ${visibleRows.length}. Narrow with search or filters.` : undefined;

  let emptyLabel: string | null = null;
  if (!loading && !error) {
    if (entries.length === 0) {
      emptyLabel = "No reference records are available for this section yet.";
    } else if (query.trim().length > 0 && queryFiltered.length === 0) {
      emptyLabel = `No reference records matched "${query.trim()}".`;
    } else if (filtered.length === 0 && hasActiveFilters) {
      emptyLabel = "No reference records match the current filters. Clear filters to widen this view.";
    }
  }

  function clearFilters() {
    setQuery("");
    setKindFilter("all");
    setBadgeFilter("all");
  }

  return (
    <div>
      <SectionHeader title={isReferenceSection(section) ? getReferenceSectionLabel(section) : section} subtitle="Structured reference atlas" />
      <section className="database-hero-panel mb-6 overflow-hidden rounded-[2rem] p-5">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--database-accent-soft)]">Technical Atlas</p>
          <p className="mt-3 text-sm leading-7 text-[var(--database-muted)] sm:text-base">
            Browse generated {section} records as linked reference data instead of raw markdown dumps. Search across titles, identifiers, relation tags, and structured summaries.
          </p>
        </div>
      </section>

      <BrowseControlStrip
        searchSlot={<SearchInput value={query} onChange={setQuery} placeholder={`Search ${section}...`} />}
        metrics={metrics}
        filterSlot={
          <>
            <ReferenceFilterButton active={kindFilter === "all"} count={queryFiltered.length} onClick={() => setKindFilter("all")}>
              All Kinds
            </ReferenceFilterButton>
            {kindOptions.map(([kind, count]) => (
              <ReferenceFilterButton key={kind} active={kindFilter === kind} count={count} onClick={() => setKindFilter(kind)}>
                {kind}
              </ReferenceFilterButton>
            ))}
            {badgeOptions.length > 0 ? (
              <>
                <ReferenceFilterButton active={badgeFilter === "all"} onClick={() => setBadgeFilter("all")}>
                  All Facets
                </ReferenceFilterButton>
                {badgeOptions.map(([badge, count]) => (
                  <ReferenceFilterButton key={badge} active={badgeFilter === badge} count={count} onClick={() => setBadgeFilter(badge)}>
                    {badge}
                  </ReferenceFilterButton>
                ))}
              </>
            ) : null}
          </>
        }
        activeFilters={activeFilters}
        helperText={helperText}
        onClear={hasActiveFilters ? clearFilters : undefined}
      />

      {section === "prefabs" && collections.length > 0 ? (
        <section className="database-panel mb-6 rounded-[1.8rem] p-4">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--database-ink)]">Collections</h2>
              <p className="mt-1 text-sm text-[var(--database-muted)]">Jump into the curated category and utility views carried over from the source corpus.</p>
            </div>
            <ReferenceBadge tone="accent">prefab collections</ReferenceBadge>
          </div>
          <div className="flex flex-wrap gap-3">
            {collections.map((entry) => (
              <Link
                key={entry.slug}
                to={entry.path}
                className="database-button rounded-full px-4 py-2 text-sm"
              >
                {entry.title}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {loading ? <LoadingState label="Loading reference index..." /> : null}
      {error ? <ErrorState message={error} /> : null}
      {emptyLabel ? <EmptyState label={emptyLabel} /> : null}
      <ul className="space-y-4">
        {visibleRows.map((entry) => (
          <ReferenceIndexRow key={entry.slug} entry={entry} />
        ))}
      </ul>
    </div>
  );
}
