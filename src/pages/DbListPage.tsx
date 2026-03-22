import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchInput } from "../components/common/SearchInput";
import { EmptyState, ErrorState, LoadingState, SectionHeader } from "../components/common/States";
import { DbBadge, DbIndexCard } from "../components/db/DbCards";
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

  return (
    <div>
      <SectionHeader title={isDbSection(section) ? `DB: ${getDbSectionLabel(section)}` : `DB: ${section}`} subtitle="Static JSON database browser" />
      <section className="mb-5 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-4 shadow-lg shadow-slate-950/20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">Catalog View</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Search the generated {section} data by title, slug, category, or summary. Known item and recipe records now use schema-aware cards and detail
              views while the rest of the DB stays safely generic.
            </p>
          </div>
          <div className="w-full max-w-xl">
            <SearchInput value={query} onChange={setQuery} placeholder={`Search ${section}...`} />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <span className="rounded-full border border-slate-800 bg-slate-950/50 px-3 py-1">{filtered.length} results</span>
          <span className="rounded-full border border-slate-800 bg-slate-950/50 px-3 py-1">{entries.length} total indexed</span>
          {filtered.length > visibleEntries.length ? (
            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-emerald-200">{`Showing first ${visibleEntries.length}`}</span>
          ) : null}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <FilterChip active={categoryFilter === "all"} count={queryFiltered.length} label="All Facets" onClick={() => setCategoryFilter("all")} />
          {categoryOptions.map(([category, count]) => (
            <FilterChip key={category} active={categoryFilter === category} count={count} label={category} onClick={() => setCategoryFilter(category)} />
          ))}
        </div>
      </section>
      {loading ? <LoadingState label="Loading db index..." /> : null}
      {error ? <ErrorState message={error} /> : null}
      {!loading && !error && filtered.length === 0 ? <EmptyState label="No generated data matched this view." /> : null}
      {!loading && !error && entries.length > 0 && categoryOptions.length === 0 ? (
        <div className="mb-4">
          <DbBadge tone="muted">No facet categories available for this section yet</DbBadge>
        </div>
      ) : null}
      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleEntries.map((entry) => (
          <DbIndexCard key={entry.slug} entry={entry} section={section} />
        ))}
      </ul>
    </div>
  );
}
