import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { BrowseControlStrip, type BrowseMetric } from "../components/common/BrowseControlStrip";
import { SearchInput } from "../components/common/SearchInput";
import { EmptyState, ErrorState, LoadingState, SectionHeader } from "../components/common/States";
import { DbIndexCard } from "../components/db/DbCards";
import { getDbSectionLabel, isDbSection } from "../config/sections";
import { fetchJson } from "../lib/fetch";
import { includesQuery } from "../lib/text";
import { DbIndexEntry } from "../types/db";

const visibleLimit = 144;

function FilterChip({ active, label, count, onClick }: { active: boolean; label: string; count?: number; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition ${
        active ? "border-emerald-400/40 bg-emerald-400/12 text-emerald-100" : "border-slate-800 bg-slate-950/50 text-slate-400 hover:border-slate-700 hover:text-slate-200"
      }`}
    >
      {typeof count === "number" ? `${label} (${count})` : label}
    </button>
  );
}

export function DbListPage({ section: sectionProp }: { section?: string }) {
  const params = useParams();
  const section = sectionProp ?? params.section ?? "";
  const [entries, setEntries] = useState<DbIndexEntry[]>([]);
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isDbSection(section)) {
      setError("Unknown db section.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    fetchJson<DbIndexEntry[]>(`/data/db/${section}/index.json`)
      .then((data) => setEntries(data))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [section]);

  useEffect(() => {
    setQuery("");
    setCategoryFilter("all");
  }, [section]);

  const queryFiltered = useMemo(
    () => entries.filter((entry) => includesQuery([entry.title, entry.slug, entry.categories.join(" "), entry.excerpt], query)),
    [entries, query]
  );

  const categoryOptions = useMemo(() => {
    const counts = new Map<string, number>();
    for (const entry of queryFiltered) {
      for (const category of entry.categories) {
        counts.set(category, (counts.get(category) ?? 0) + 1);
      }
    }

    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 10);
  }, [queryFiltered]);

  const filtered = useMemo(
    () => queryFiltered.filter((entry) => categoryFilter === "all" || entry.categories.includes(categoryFilter)),
    [categoryFilter, queryFiltered]
  );

  const visibleEntries = filtered.slice(0, visibleLimit);
  const hasActiveFilters = query.trim().length > 0 || categoryFilter !== "all";
  const activeFilters = [query.trim() ? `Search: ${query.trim()}` : null, categoryFilter !== "all" ? `Facet: ${categoryFilter}` : null].filter(
    (value): value is string => Boolean(value)
  );
  const metrics: BrowseMetric[] = loading
    ? [{ label: "Loading db index", tone: "muted" }]
    : [
        { label: `${filtered.length} results` },
        { label: `${entries.length} total indexed`, tone: "muted" },
        ...(filtered.length > visibleEntries.length ? [{ label: `Showing first ${visibleEntries.length}`, tone: "accent" as const }] : [])
      ];

  const helperText =
    !loading && filtered.length > visibleEntries.length
      ? `Showing first ${visibleEntries.length}. Narrow with search or filters.`
      : !loading && entries.length > 0 && categoryOptions.length === 0
        ? "No facet categories are available for this section yet."
        : undefined;

  let emptyLabel: string | null = null;
  if (!loading && !error) {
    if (entries.length === 0) {
      emptyLabel = "No generated records are available for this DB section yet.";
    } else if (query.trim().length > 0 && queryFiltered.length === 0) {
      emptyLabel = `No generated data matched "${query.trim()}".`;
    } else if (filtered.length === 0 && hasActiveFilters) {
      emptyLabel = "No generated data matches the current filters. Clear filters to widen this view.";
    }
  }

  function clearFilters() {
    setQuery("");
    setCategoryFilter("all");
  }

  return (
    <div>
      <SectionHeader title={isDbSection(section) ? `DB: ${getDbSectionLabel(section)}` : `DB: ${section}`} subtitle="Static JSON database browser" />
      <section className="mb-5 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-4 shadow-lg shadow-slate-950/20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">Catalog View</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Search the generated {section} data by title, slug, category, or summary. Known item and recipe records now use schema-aware cards and detail views
            while the rest of the DB stays safely generic.
          </p>
        </div>
      </section>

      <BrowseControlStrip
        searchSlot={<SearchInput value={query} onChange={setQuery} placeholder={`Search ${section}...`} />}
        metrics={metrics}
        filterSlot={
          <>
            <FilterChip active={categoryFilter === "all"} count={queryFiltered.length} label="All Facets" onClick={() => setCategoryFilter("all")} />
            {categoryOptions.map(([category, count]) => (
              <FilterChip key={category} active={categoryFilter === category} count={count} label={category} onClick={() => setCategoryFilter(category)} />
            ))}
          </>
        }
        activeFilters={activeFilters}
        helperText={helperText}
        onClear={hasActiveFilters ? clearFilters : undefined}
      />

      {loading ? <LoadingState label="Loading db index..." /> : null}
      {error ? <ErrorState message={error} /> : null}
      {emptyLabel ? <EmptyState label={emptyLabel} /> : null}
      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleEntries.map((entry) => (
          <DbIndexCard key={entry.slug} entry={entry} section={section} />
        ))}
      </ul>
    </div>
  );
}
