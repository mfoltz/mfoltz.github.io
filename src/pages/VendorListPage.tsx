import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { BrowseControlStrip } from "../components/common/BrowseControlStrip";
import { SearchInput } from "../components/common/SearchInput";
import { EmptyState, ErrorState, LoadingState, SectionHeader } from "../components/common/States";
import { getDbBrowseSourceSection } from "../config/dbCategories";
import { getVendorBrowseModel } from "../lib/vendorBrowse";
import { slugifyDbBrowseValue, type DbBrowseOption } from "../config/dbBrowse";
import { fetchJson } from "../lib/fetch";
import type { DbIndexEntry } from "../types/db";
import { WorkstationIndexRow } from "./DbListPage";

export function VendorListPage() {
  const [params, setParams] = useSearchParams();
  const [entries, setEntries] = useState<DbIndexEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let active = true;
    setLoading(true); setError(undefined);
    fetchJson<DbIndexEntry[]>(`/data/db/${getDbBrowseSourceSection("vendors")}/index.json`)
      .then(data => { if (active) setEntries(data); })
      .catch((err: Error) => { if (active) setError(err.message); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [attempt]);
  const queryString = params.toString();
  const model = useMemo(() => getVendorBrowseModel(entries, new URLSearchParams(queryString)), [entries, queryString]);
  const normalized = model.normalized.toString();
  useEffect(() => {
    if (!loading && !error && normalized !== queryString) setParams(new URLSearchParams(normalized), { replace: true });
  }, [loading, error, normalized, queryString, setParams]);
  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (!value.trim() || value === "all") next.delete(key); else next.set(key, value);
    if (key === "region") next.delete("inventory");
    setParams(next, { replace: key === "q" });
  };
  const facet = (label: string, key: string, value: string, options: DbBrowseOption[]) => (
    <label className="min-w-0 text-sm text-[var(--database-muted)]">
      {label}
      <select aria-label={label} value={value === "all" ? "all" : slugifyDbBrowseValue(value)}
        onChange={event => update(key, event.target.value)} className="database-input mt-1.5 block w-full min-w-0 rounded-lg px-3 py-2.5">
        <option value="all">All {label === "Region" ? "regions" : "inventory types"}</option>
        {options.map(option => <option key={option.slug} value={option.slug}>{option.value} ({option.count})</option>)}
      </select>
    </label>
  );
  const active = [model.query.trim() ? `Search: ${model.query.trim()}` : null,
    model.region !== "all" ? `Region: ${model.region}` : null,
    model.inventory !== "all" ? `Inventory: ${model.inventory}` : null].filter((value): value is string => Boolean(value));
  return <div>
    <SectionHeader title="Database: Vendors" subtitle="Traders by region and recorded inventory type, with source references." />
    <BrowseControlStrip discloseOnDesktop searchSlot={<SearchInput label="Search vendors" value={model.query}
      onChange={value => update("q", value)} placeholder="Search by vendor name, region, inventory, or prefab..." />}
      metrics={loading ? [{ label: "Loading vendors" }] : [{ label: `${model.filtered.length} result${model.filtered.length === 1 ? "" : "s"}` }]}
      primaryControls={<Link to="/db/workstations" className="database-action-quiet rounded-lg px-3 py-2 text-sm">Browse workstations</Link>}
      filterSlot={<div className="grid gap-3 sm:grid-cols-2">{facet("Region", "region", model.region, model.regionOptions)}
        {facet("Inventory", "inventory", model.inventory, model.inventoryOptions)}</div>}
      activeFilters={active} onClear={active.length ? () => setParams({}) : undefined} />
    {loading ? <LoadingState label="Loading vendors..." /> : error ? <div><ErrorState message={error} />
      <button type="button" className="database-action-quiet rounded-lg px-3 py-2" onClick={() => setAttempt(value => value + 1)}>Retry</button></div>
      : model.filtered.length ? <section className="database-ledger-surface overflow-hidden rounded-[1.7rem]">
        <div className="flex items-center justify-between gap-3 border-b border-[var(--database-divider)] px-5 py-4">
          <h2 className="text-lg font-semibold">Vendor Records</h2><span className="text-xs text-[var(--database-muted)]">{model.filtered.length} record{model.filtered.length === 1 ? "" : "s"}</span>
        </div><ul className="database-ledger">{model.filtered.map(entry => <WorkstationIndexRow key={entry.slug} entry={entry} />)}</ul>
      </section> : <EmptyState label="No vendors match these filters. Clear filters to widen this catalog." />}
  </div>;
}
