import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchInput } from "../components/common/SearchInput";
import { EmptyState, ErrorState, LoadingState, SectionHeader } from "../components/common/States";
import { DbIndexCard } from "../components/db/DbCards";
import { getDbSectionLabel, isDbSection } from "../config/sections";
import { fetchJson } from "../lib/fetch";
import { includesQuery } from "../lib/text";
import { DbIndexEntry } from "../types/db";

export function DbListPage({ section: sectionProp }: { section?: string }) {
  const params = useParams();
  const section = sectionProp ?? params.section ?? "";
  const [entries, setEntries] = useState<DbIndexEntry[]>([]);
  const [query, setQuery] = useState("");
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

  const filtered = useMemo(
    () => entries.filter((entry) => includesQuery([entry.title, entry.slug, entry.categories.join(" "), entry.excerpt], query)),
    [entries, query]
  );

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
        </div>
      </section>
      {loading ? <LoadingState label="Loading db index..." /> : null}
      {error ? <ErrorState message={error} /> : null}
      {!loading && !error && filtered.length === 0 ? <EmptyState label="No data yet for this section." /> : null}
      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((entry) => (
          <DbIndexCard key={entry.slug} entry={entry} section={section} />
        ))}
      </ul>
    </div>
  );
}
