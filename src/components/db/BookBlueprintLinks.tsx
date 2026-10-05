import { useEffect, useMemo, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import type { DbBookBlueprintRef } from "../../types/db";
import { bookBlueprintPageSize, filterBookBlueprints, bookDeclaringSources, resolveBookBlueprintsShown, bookBlueprintParams } from "../../lib/bookBlueprintBrowse";
import { DbReferenceList } from "./DbCards";

export function BookBlueprintLinks({ items }: { items: DbBookBlueprintRef[] }) {
  const location = useLocation(), navigate = useNavigate();
  const params = new URLSearchParams(location.search), query = params.get("bookQ") ?? "";
  const matches = useMemo(() => filterBookBlueprints(items, query), [items, query]);
  const sources = useMemo(() => bookDeclaringSources(items), [items]);
  const byPrefab = useMemo(() => new Map(items.map(item => [item.prefab, item])), [items]);
  const shown = resolveBookBlueprintsShown(params.get("bookShown"), matches.length);
  const targets = useRef<HTMLDivElement>(null), input = useRef<HTMLInputElement>(null);
  const pendingFocus = useRef<string | null>(null);
  useEffect(() => {
    if (!pendingFocus.current) return;
    const card = [...(targets.current?.querySelectorAll<HTMLElement>("[data-db-reference]") ?? [])]
      .find(element => element.dataset.dbReference === pendingFocus.current);
    card?.closest<HTMLAnchorElement>("a")?.focus(); pendingFocus.current = null;
  }, [location.search]);
  if (!items.length) return null;
  function update(nextQuery: string, nextShown = bookBlueprintPageSize) {
    navigate({ pathname: location.pathname, search: bookBlueprintParams(params, nextQuery, nextShown).toString(), hash: location.hash }, { replace: true });
  }
  return (
    <div id="item-book-blueprints" className="min-w-0 space-y-4">
      <div id="book-declaring-technologies" className="min-w-0 space-y-2">
        <h4 className="text-xs font-semibold text-[var(--database-muted)]">Declaring technologies</h4>
        <DbReferenceList items={sources} emptyLabel="" formatAmount={amount => `Book requirement: ${amount}`}
          renderAfterCard={owner => owner.amount === undefined ? <p className="px-4 pb-3 text-xs text-[var(--database-muted)]">Book quantity unrecorded</p> : null} />
      </div>
      <div className="flex min-w-0 flex-wrap items-end gap-2">
        <label className="min-w-0 flex-1 text-xs text-[var(--database-muted)]">
          <span className="mb-1.5 block">Search linked Blueprints</span>
          <input ref={input} type="search" value={query} onChange={event => update(event.target.value)}
            aria-describedby="item-book-blueprints-count" placeholder="Blueprint or technology name, prefab or GUID"
            className="database-input w-full min-w-0 rounded-lg px-3 py-2 text-sm text-[var(--database-ink)]" />
        </label>
        {query ? <button type="button" className="database-action-quiet rounded-lg px-3 py-2 text-sm"
          onClick={() => { update(""); input.current?.focus(); }}>Clear search</button> : null}
      </div>
      <p id="item-book-blueprints-count" aria-live="polite" className="text-xs text-[var(--database-muted)]">
        Showing {shown} of {matches.length} {query.trim() ? `matches (${items.length} linked Blueprints)` : "linked Blueprints"}
        {` · ${sources.length} declaring ${sources.length === 1 ? "technology" : "technologies"}`}
      </p>
      <div id="book-blueprint-targets" ref={targets} className="min-w-0">
        <DbReferenceList items={matches.slice(0, shown)} emptyLabel="No recorded Blueprint links match this search."
          renderAfterCard={sources.length > 1 ? item => (
            <div className="min-w-0 space-y-1 px-4 pb-3 text-xs text-[var(--database-muted)]">
              <span>Declared by</span>
              {byPrefab.get(item.prefab)!.declaringSources.map(owner => (
                <Link key={`${owner.prefab}:${owner.guid}`} data-book-blueprint-source="" to={owner.path}
                  className="block min-w-0 break-words text-[var(--database-accent-soft)] underline underline-offset-4">
                  {owner.title}<span className="block break-words font-mono">{owner.prefab}</span><span className="block">{owner.guid}</span>
                </Link>
              ))}
            </div>
          ) : undefined} />
      </div>
      {shown < matches.length ? <button type="button" className="database-action-quiet rounded-lg px-3 py-2 text-sm" onClick={() => {
        pendingFocus.current = matches[shown].prefab; update(query, Math.min(matches.length, shown + bookBlueprintPageSize));
      }}>Show more</button> : null}
    </div>
  );
}
