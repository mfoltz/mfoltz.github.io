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
      ? "border-emerald-400/30 bg-emerald-400/12 text-emerald-100"
      : tone === "muted"
        ? "border-slate-800/90 bg-slate-950/50 text-slate-400"
        : "border-cyan-400/20 bg-cyan-400/10 text-cyan-100";

  return <span className={joinClasses("rounded-full border px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em]", toneClass)}>{label}</span>;
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
    <section className="sticky top-[4.35rem] z-[12] mb-6 rounded-[1.6rem] border border-slate-800/90 bg-slate-950/90 shadow-xl shadow-slate-950/25 backdrop-blur-xl lg:top-[4.8rem]">
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
          <div className="flex flex-col gap-3 border-t border-slate-800/80 pt-3 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0 space-y-2">
              {activeFilters.length > 0 ? (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Active</span>
                  {activeFilters.map((filter) => (
                    <BrowseMetricPill key={filter} label={filter} tone="muted" />
                  ))}
                </div>
              ) : null}
              {helperText ? <p className="text-sm leading-6 text-slate-400">{helperText}</p> : null}
            </div>
            {onClear && activeFilters.length > 0 ? (
              <button
                type="button"
                onClick={onClear}
                className="shrink-0 rounded-full border border-slate-700/90 bg-slate-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 transition hover:border-emerald-500/40 hover:text-emerald-100"
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
