import { ReactNode, useId, useState } from "react";

function joinClasses(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

export interface BrowseMetric {
  label: string;
  tone?: "default" | "muted" | "accent";
}

function BrowseMetricPill({ label, tone = "default" }: BrowseMetric) {
  const toneClass =
    tone === "accent"
      ? "database-metric-chip-accent"
      : tone === "muted"
        ? "database-metric-chip-muted"
        : "database-metric-chip";

  return <span className={joinClasses("rounded-full px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em]", toneClass)}>{label}</span>;
}

export function BrowseControlStrip({
  searchSlot,
  metrics,
  primaryControls,
  filterSlot,
  discloseOnDesktop = false,
  compact = false,
  activeFilters = [],
  helperText,
  onClear,
  clearLabel = "Clear filters"
}: {
  searchSlot?: ReactNode;
  metrics: BrowseMetric[];
  primaryControls?: ReactNode;
  filterSlot?: ReactNode;
  discloseOnDesktop?: boolean;
  compact?: boolean;
  activeFilters?: string[];
  helperText?: string;
  onClear?: () => void;
  clearLabel?: string;
}) {
  const hasFooter = activeFilters.length > 0 || Boolean(helperText) || Boolean(onClear);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const filtersId = useId();

  return (
    <section className="database-sticky-panel mb-6 min-w-0 rounded-xl">
      <div className={compact ? "space-y-2.5 p-3 sm:p-4" : "space-y-3.5 p-4"}>
        <div className={joinClasses(compact ? "grid gap-2" : "grid gap-3.5", searchSlot ? "xl:grid-cols-[minmax(0,1fr)_auto] xl:items-center" : undefined)}>
          {searchSlot ? <div className="min-w-0">{searchSlot}</div> : null}
          <div className={joinClasses("flex flex-wrap gap-2", searchSlot ? "xl:justify-end" : undefined)}>
            {metrics.map((metric) => (
              compact ? <span key={metric.label} className="text-xs text-[var(--database-muted)]">{metric.label}</span> : <BrowseMetricPill key={`${metric.label}:${metric.tone ?? "default"}`} {...metric} />
            ))}
          </div>
        </div>

        {discloseOnDesktop && (primaryControls || filterSlot) ? (
          <div className="flex flex-wrap items-center gap-2">
            {primaryControls}
            {filterSlot && !compact ? (
              <button type="button" aria-expanded={filtersOpen} aria-controls={filtersId} onClick={() => setFiltersOpen(!filtersOpen)} className="database-action-quiet rounded-lg px-3 py-2 text-sm sm:ml-auto">
                {filtersOpen ? "Hide filters" : "Show filters"}
              </button>
            ) : null}
          </div>
        ) : primaryControls ? <div className="flex flex-wrap gap-2">{primaryControls}</div> : null}

        {compact && (hasFooter || (discloseOnDesktop && filterSlot)) ? (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-[var(--database-divider)] pt-2 text-xs">
            {activeFilters.map((filter) => <span key={filter} className="min-w-0 break-words text-[var(--database-muted)]">{filter}</span>)}
            {discloseOnDesktop && filterSlot ? (
              <button type="button" aria-expanded={filtersOpen} aria-controls={filtersId} onClick={() => setFiltersOpen(!filtersOpen)} className="database-action-quiet shrink-0 rounded-lg px-2.5 py-2 font-medium">
                {filtersOpen ? "Hide filters" : "Show filters"}
              </button>
            ) : null}
            {onClear ? <button type="button" onClick={onClear} className="database-action-quiet shrink-0 rounded-lg px-2.5 py-2 font-medium">{clearLabel}</button> : null}
            {helperText ? <p className="w-full text-[var(--database-muted)]">{helperText}</p> : null}
          </div>
        ) : null}

        {filterSlot ? (
          <div hidden={discloseOnDesktop && !filtersOpen} className="space-y-2 border-t border-[var(--database-divider)] pt-3">
            {!discloseOnDesktop ? <button type="button" aria-expanded={filtersOpen} aria-controls={filtersId} onClick={() => setFiltersOpen(!filtersOpen)} className="database-action-quiet rounded-lg px-3 py-2 text-sm lg:hidden">
              {filtersOpen ? "Hide filters" : "Show filters"}
            </button> : null}
            {!discloseOnDesktop ? <div className="hidden text-xs font-medium text-[var(--database-muted)] lg:block">Filters</div> : null}
            <div id={filtersId} className={joinClasses("flex-wrap gap-2", filtersOpen ? "flex" : discloseOnDesktop ? "hidden" : "hidden lg:flex")}>{filterSlot}</div>
          </div>
        ) : null}

        {!compact && hasFooter ? (
          <div className="flex flex-col gap-3 border-t border-[var(--database-divider)] pt-3 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0 space-y-2">
              {activeFilters.length > 0 ? (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--database-dim)]">Active</span>
                  {activeFilters.map((filter) => (
                    <BrowseMetricPill key={filter} label={filter} tone="muted" />
                  ))}
                </div>
              ) : null}
              {helperText ? <p className="text-sm leading-6 text-[var(--database-muted)]">{helperText}</p> : null}
            </div>
            {onClear ? (
              <button
                type="button"
                onClick={onClear}
                className="database-action-quiet shrink-0 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em]"
              >
                {clearLabel}
              </button>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
