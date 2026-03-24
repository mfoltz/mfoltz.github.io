import { ReactNode } from "react";

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
      ? "database-pill-accent"
      : tone === "muted"
        ? "database-pill-muted"
        : "database-pill-brand";

  return <span className={joinClasses("rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em]", toneClass)}>{label}</span>;
}

export function BrowseControlStrip({
  searchSlot,
  metrics,
  filterSlot,
  activeFilters = [],
  helperText,
  onClear,
  clearLabel = "Clear filters"
}: {
  searchSlot?: ReactNode;
  metrics: BrowseMetric[];
  filterSlot?: ReactNode;
  activeFilters?: string[];
  helperText?: string;
  onClear?: () => void;
  clearLabel?: string;
}) {
  const hasFooter = activeFilters.length > 0 || Boolean(helperText);

  return (
    <section className="database-sticky-panel sticky top-[4.35rem] z-[12] mb-6 rounded-[1.35rem] lg:top-[4.8rem]">
      <div className="space-y-4 p-4">
        <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] xl:items-center">
          <div className="flex flex-wrap gap-2">
            {metrics.map((metric) => (
              <BrowseMetricPill key={`${metric.label}:${metric.tone ?? "default"}`} {...metric} />
            ))}
          </div>
          {searchSlot ? <div className="w-full xl:justify-self-end">{searchSlot}</div> : null}
        </div>

        {filterSlot ? <div className="flex flex-wrap gap-2">{filterSlot}</div> : null}

        {hasFooter ? (
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
            {onClear && activeFilters.length > 0 ? (
              <button
                type="button"
                onClick={onClear}
                className="database-button shrink-0 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em]"
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
