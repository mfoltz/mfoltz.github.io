import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
  return value.length > 0 && !/^\d+$/.test(value);
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
    for (const entry of queryFiltered) {
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

  return (
    <div>
      <SectionHeader title={isReferenceSection(section) ? getReferenceSectionLabel(section) : section} subtitle="Structured reference index" />
      <section className="mb-6 overflow-hidden rounded-[2rem] border border-slate-800/90 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.14),_transparent_28%),linear-gradient(135deg,_rgba(15,23,42,0.98),_rgba(2,6,23,0.96))] p-5 shadow-2xl shadow-slate-950/20">
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(20rem,24rem)] xl:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/80">Technical Atlas</p>
            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              Browse generated {section} records as linked reference data instead of raw markdown dumps. Search across titles, identifiers, relation tags, and structured summaries.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-400">
              <span className="rounded-full border border-slate-800 bg-slate-950/45 px-3 py-1">{filtered.length} matches</span>
              <span className="rounded-full border border-slate-800 bg-slate-950/45 px-3 py-1">{entries.length} total records</span>
              {rows.length > visibleRows.length ? <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-emerald-200">{`Showing first ${visibleRows.length}`}</span> : null}
            </div>
          </div>
          <div>
            <SearchInput value={query} onChange={setQuery} placeholder={`Search ${section}...`} />
          </div>
        </div>
        <div className="mt-4 space-y-3">
          <div className="flex flex-wrap gap-2">
            <ReferenceFilterButton active={kindFilter === "all"} count={queryFiltered.length} onClick={() => setKindFilter("all")}>
              All Kinds
            </ReferenceFilterButton>
            {kindOptions.map(([kind, count]) => (
              <ReferenceFilterButton key={kind} active={kindFilter === kind} count={count} onClick={() => setKindFilter(kind)}>
                {kind}
              </ReferenceFilterButton>
            ))}
          </div>
          {badgeOptions.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              <ReferenceFilterButton active={badgeFilter === "all"} onClick={() => setBadgeFilter("all")}>
                All Facets
              </ReferenceFilterButton>
              {badgeOptions.map(([badge, count]) => (
                <ReferenceFilterButton key={badge} active={badgeFilter === badge} count={count} onClick={() => setBadgeFilter(badge)}>
                  {badge}
                </ReferenceFilterButton>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {section === "prefabs" && collections.length > 0 ? (
        <section className="mb-6 rounded-[1.8rem] border border-slate-800/90 bg-slate-900/70 p-4 shadow-xl shadow-slate-950/10">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Collections</h2>
              <p className="mt-1 text-sm text-slate-400">Jump into the curated category and utility views carried over from the source corpus.</p>
            </div>
            <ReferenceBadge tone="accent">prefab collections</ReferenceBadge>
          </div>
          <div className="flex flex-wrap gap-3">
            {collections.map((entry) => (
              <Link
                key={entry.slug}
                to={entry.path}
                className="rounded-full border border-slate-700 bg-slate-950/55 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-500/50 hover:text-emerald-200"
              >
                {entry.title}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {loading ? <LoadingState label="Loading reference index..." /> : null}
      {error ? <ErrorState message={error} /> : null}
      {!loading && !error && filtered.length === 0 ? <EmptyState label="No reference records matched your search." /> : null}
      <ul className="space-y-4">
        {visibleRows.map((entry) => (
          <ReferenceIndexRow key={entry.slug} entry={entry} />
        ))}
      </ul>
    </div>
  );
}
