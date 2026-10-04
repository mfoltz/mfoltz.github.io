import { useEffect, useMemo, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { DbRelatedEntityRef } from "../../types/db";
import { filterIngredientRecipes, ingredientRecipePageSize, ingredientRecipeParams, resolveIngredientRecipesShown } from "../../lib/ingredientRecipeBrowse";
import { DbReferenceList } from "./DbCards";

export function IngredientRecipeUses({ items }: { items: DbRelatedEntityRef[] }) {
  const location = useLocation(), navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const query = params.get("usesQ") ?? "";
  const matches = useMemo(() => filterIngredientRecipes(items, query), [items, query]);
  const shown = resolveIngredientRecipesShown(params.get("usesShown"), matches.length);
  const container = useRef<HTMLDivElement>(null);
  const pendingFocus = useRef<string | null>(null);
  useEffect(() => {
    if (!pendingFocus.current) return;
    const card = [...(container.current?.querySelectorAll<HTMLElement>("[data-db-reference]") ?? [])]
      .find(element => element.dataset.dbReference === pendingFocus.current);
    card?.closest<HTMLAnchorElement>("a")?.focus();
    pendingFocus.current = null;
  }, [location.search]);

  if (!items.length) return null;
  function update(nextQuery: string, nextShown = ingredientRecipePageSize) {
    navigate({ pathname: location.pathname, search: ingredientRecipeParams(params, nextQuery, nextShown).toString(), hash: location.hash }, { replace: true });
  }

  return (
    <div id="item-recipe-uses" ref={container} className="min-w-0 space-y-3">
      <div className="flex min-w-0 flex-wrap items-end gap-2">
        <label className="min-w-0 flex-1 text-xs text-[var(--database-muted)]">
          <span className="mb-1.5 block">Search used-in recipes</span>
          <input type="search" value={query} onChange={event => update(event.target.value)}
            aria-describedby="item-recipe-uses-count" placeholder="Recipe name, prefab or GUID"
            className="database-input w-full min-w-0 rounded-lg px-3 py-2 text-sm text-[var(--database-ink)]" />
        </label>
        {query ? <button type="button" onClick={() => update("")} className="database-action-quiet rounded-lg px-3 py-2 text-sm">Clear search</button> : null}
      </div>
      <p id="item-recipe-uses-count" aria-live="polite" className="text-xs text-[var(--database-muted)]">
        Showing {shown} of {matches.length} {query.trim() ? `matches (${items.length} recorded recipes)` : "recorded recipes"}
      </p>
      <DbReferenceList items={matches.slice(0, shown)} emptyLabel="No recorded recipes match this search." formatAmount={amount => `${amount} required`} />
      {shown < matches.length ? (
        <button type="button" className="database-action-quiet rounded-lg px-3 py-2 text-sm" onClick={() => {
          pendingFocus.current = matches[shown].prefab;
          update(query, Math.min(matches.length, shown + ingredientRecipePageSize));
        }}>Show more</button>
      ) : null}
    </div>
  );
}
