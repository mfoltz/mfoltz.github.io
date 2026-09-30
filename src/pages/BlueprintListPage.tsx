import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { BrowseControlStrip } from "../components/common/BrowseControlStrip";
import { SearchInput } from "../components/common/SearchInput";
import { EmptyState, ErrorState, LoadingState, SectionHeader } from "../components/common/States";
import { DbBadge } from "../components/db/DbCards";
import { DbArtwork } from "../components/db/DbArtwork";
import { getBlueprintBrowseModel } from "../lib/blueprintBrowse";
import { fetchJson } from "../lib/fetch";
import type { DbIndexEntry } from "../types/db";

const pageSize = 120;

function BlueprintFilter({ label, value, options, onChange, wideOnNarrow = false }: {
  label: string; value: string; options: Array<{ value: string; label: string }>; onChange: (value: string) => void; wideOnNarrow?: boolean;
}) {
  const id = `blueprint-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div className={`min-w-0 text-xs text-[var(--database-muted)] ${wideOnNarrow ? "col-span-2 min-[380px]:col-span-1" : ""}`}>
      <label htmlFor={id} className="mb-1.5 block">{label}</label>
      <select id={id} value={value} onChange={(event) => onChange(event.target.value)} className="database-input w-full min-w-0 rounded-lg px-2 py-2.5 text-sm text-[var(--database-ink)]">
        {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </div>
  );
}

export function BlueprintListPage() {
  const [params, setParams] = useSearchParams();
  const queryString = params.toString();
  const [entries, setEntries] = useState<DbIndexEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  const [visibleCount, setVisibleCount] = useState(pageSize);
  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);
    fetchJson<DbIndexEntry[]>("/data/db/blueprints/index.json")
      .then((data) => { if (active) setEntries(data); })
      .catch((err: Error) => { if (active) setError(err.message); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [attempt]);
  useEffect(() => { setVisibleCount(pageSize); }, [queryString]);
  const model = useMemo(() => getBlueprintBrowseModel(entries, new URLSearchParams(queryString)), [entries, queryString]);
  function update(key: string, value: string) {
    const next = new URLSearchParams(params);
    if (!value || value === "all" || (key === "sort" && value === "name")) next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: key === "q" });
  }
  const hasFilters = Boolean(model.query || model.source !== "all" || model.coverage !== "all" || model.books !== "all" || model.sort !== "name");
  const activeFilters = [
    model.query ? `Search: ${model.query}` : "",
    model.source !== "all" ? `Source type: ${model.sourceOptions.find((option) => option.value === model.source)?.label}` : "",
    model.coverage !== "all" ? `Sources: ${model.coverage}` : "",
    model.books !== "all" ? `Books: ${model.books}` : "",
    model.sort !== "name" ? "Sort: Most sources" : ""
  ].filter(Boolean);
  return (
    <div>
      <SectionHeader title="Blueprints" subtitle="Build rules and recorded unlock sources. Missing links do not establish availability." />
      <BrowseControlStrip
        discloseOnDesktop
        activeFilters={activeFilters}
        onClear={hasFilters ? () => setParams({}) : undefined}
        searchSlot={<SearchInput label="Search blueprints" value={model.query} onChange={(value) => update("q", value)} placeholder="Search blueprints or linked books..." />}
        metrics={loading || error ? [] : [{ label: `${model.filtered.length} records` }, { label: `${model.filtered.filter((entry) => (entry.unlockSourceCount ?? 0) > 0).length} linked`, tone: "muted" }]}
        filterSlot={
          <div className="w-full space-y-3">
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              <BlueprintFilter label="Source type" wideOnNarrow value={model.source} onChange={(value) => update("source", value)} options={[{ value: "all", label: "All types" }, ...model.sourceOptions]} />
              <BlueprintFilter label="Source linkage" value={model.coverage} onChange={(value) => update("coverage", value)} options={[{ value: "all", label: "All records" }, { value: "linked", label: "Linked" }, { value: "unlinked", label: "Unlinked" }]} />
              <BlueprintFilter label="Book linkage" value={model.books} onChange={(value) => update("books", value)} options={[{ value: "all", label: "All records" }, { value: "linked", label: "Linked" }, { value: "unlinked", label: "Unlinked" }]} />
              <BlueprintFilter label="Sort" value={model.sort} onChange={(value) => update("sort", value)} options={[{ value: "name", label: "Name" }, { value: "sources", label: "Most sources" }]} />
            </div>
          </div>
        }
      />
      {loading ? <LoadingState label="Loading blueprints..." /> : error ? (
        <div className="space-y-3"><ErrorState message={error} /><button type="button" className="database-action-quiet rounded-lg px-4 py-2" onClick={() => setAttempt((value) => value + 1)}>Retry</button></div>
      ) : model.filtered.length === 0 ? <EmptyState label="No blueprints match these filters." /> : (
        <section aria-label="Blueprint records" className="border-y border-[var(--database-divider)]">
          <p role="status" className="px-4 py-3 text-sm text-[var(--database-muted)]">Showing {Math.min(visibleCount, model.filtered.length)} of {model.filtered.length}</p>
          <ul className="database-ledger">
            {model.filtered.slice(0, visibleCount).map((entry) => (
              <li key={entry.slug}>
                <Link to={entry.path} className="database-ledger-row group block px-4 py-3.5">
                  <div className="grid min-w-0 gap-2 md:grid-cols-[minmax(0,1fr)_auto]">
                    <div className="flex min-w-0 items-start gap-3">
                      <DbArtwork icon={entry.icon} portraitAssetPath={entry.portraitAssetPath} />
                      <div className="min-w-0 flex-1">
                      <h2 className="break-words text-base font-semibold leading-tight text-[var(--database-ink)] transition group-hover:text-[var(--database-accent-soft)]">{entry.title}</h2>
                      <p className="mt-1 break-words font-mono text-xs text-[var(--database-dim)] [overflow-wrap:anywhere]">{entry.subtitle ?? entry.slug}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {entry.unlockSourceTypeLabels?.map((label) => <DbBadge key={label} tone="muted">{label}</DbBadge>)}
                        {entry.isStartBlueprint ? <DbBadge tone="accent">Starter build</DbBadge> : null}
                        {!entry.unlockSourceCount ? <span className="text-sm text-[var(--database-muted)]">No source linked</span> : null}
                      </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--database-muted)] md:block md:space-y-2 md:text-right">
                      <p>{entry.unlockSourceCount ?? 0} source record{entry.unlockSourceCount === 1 ? "" : "s"}</p>
                      {(entry.linkedBookCount ?? 0) > 0 ? <p className="text-[var(--database-accent-soft)]">{entry.linkedBookCount} linked book{entry.linkedBookCount === 1 ? "" : "s"}</p> : null}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          {visibleCount < model.filtered.length ? <div className="py-5 text-center"><button type="button" className="database-action-quiet rounded-lg px-5 py-3 text-sm" onClick={() => setVisibleCount((count) => count + pageSize)}>Show more blueprints</button></div> : null}
        </section>
      )}
    </div>
  );
}
