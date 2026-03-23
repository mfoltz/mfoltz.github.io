import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { DbIndexEntry, DbRelatedEntityRef } from "../../types/db";

export interface DbDisplayRow {
  label: string;
  value: ReactNode;
  monospace?: boolean;
}

function getMonogram(value: string): string {
  const parts = value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "");

  return parts.join("") || "DB";
}

function joinClasses(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

export function DbBadge({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "accent" | "muted" }) {
  const toneClass =
    tone === "accent"
      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
      : tone === "muted"
        ? "border-slate-700 bg-slate-800/80 text-slate-300"
        : "border-cyan-400/20 bg-cyan-400/10 text-cyan-100";

  return <span className={joinClasses("rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em]", toneClass)}>{children}</span>;
}

export function DbSurface({ title, children, className }: { title?: string; children: ReactNode; className?: string }) {
  return (
    <section className={joinClasses("rounded-2xl border border-slate-800 bg-slate-900/80 shadow-lg shadow-slate-950/20", className)}>
      {title ? <h2 className="border-b border-slate-800 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">{title}</h2> : null}
      <div className="p-4">{children}</div>
    </section>
  );
}

export function DbStatGrid({ rows }: { rows: DbDisplayRow[] }) {
  return (
    <dl className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {rows.map((row) => (
        <div key={row.label} className="rounded-2xl border border-slate-800/80 bg-slate-950/50 p-3">
          <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">{row.label}</dt>
          <dd className={joinClasses("mt-2 text-sm text-slate-100", row.monospace && "font-mono text-xs text-emerald-200")}>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function DbFieldGrid({ rows }: { rows: DbDisplayRow[] }) {
  return (
    <dl className="grid gap-3 sm:grid-cols-2">
      {rows.map((row) => (
        <div key={row.label} className="rounded-xl border border-slate-800 bg-slate-950/40 p-3">
          <dt className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">{row.label}</dt>
          <dd className={joinClasses("mt-2 text-sm leading-6 text-slate-200", row.monospace && "font-mono text-xs text-emerald-200")}>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function DbReferenceList({ items, emptyLabel }: { items: DbRelatedEntityRef[]; emptyLabel: string }) {
  if (items.length === 0) {
    return <p className="text-sm text-slate-400">{emptyLabel}</p>;
  }

  return (
    <ul className="space-y-3">
      {items.map((item) => {
        const content = (
          <div className="flex items-start justify-between gap-4 rounded-xl border border-slate-800 bg-slate-950/40 p-3 transition group-hover:border-emerald-500/40">
            <div className="min-w-0">
              <div className="font-medium text-slate-100">{item.title}</div>
              <div className="mt-1 text-xs text-slate-500">{item.prefab}</div>
            </div>
            <div className="shrink-0 text-right">
              {typeof item.amount === "number" ? <DbBadge tone="accent">{`${item.amount}x`}</DbBadge> : null}
              {item.guid !== null ? <div className="mt-2 text-[11px] text-slate-500">{item.guid}</div> : null}
            </div>
          </div>
        );

        return (
          <li key={`${item.prefab}:${item.guid ?? "unknown"}`}>
            {item.path ? (
              <Link to={item.path} className="group block">
                {content}
              </Link>
            ) : (
              content
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function DbIndexCard({ entry, section }: { entry: DbIndexEntry; section: string }) {
  const chips = entry.categories.slice(0, 3);
  const extraCount = Math.max(0, entry.categories.length - chips.length);
  const iconLabel = entry.icon ? entry.icon.slice(0, 2).toUpperCase() : getMonogram(entry.title);
  const eyebrow = section === "items" ? "Item" : section === "recipes" ? "Recipe" : section;

  return (
    <li className="list-none">
      <Link
        to={entry.path}
        className="group block h-full rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-4 transition hover:-translate-y-0.5 hover:border-emerald-500/60 hover:shadow-lg hover:shadow-emerald-950/20"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-sm font-semibold tracking-[0.18em] text-emerald-200">
            {iconLabel}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap gap-2">
              <DbBadge tone="accent">{entry.tier ?? eyebrow}</DbBadge>
              {chips.map((category) => (
                <DbBadge key={category} tone="muted">
                  {category}
                </DbBadge>
              ))}
              {extraCount > 0 ? <DbBadge tone="muted">{`+${extraCount}`}</DbBadge> : null}
            </div>
            <h2 className="mt-3 text-lg font-semibold leading-tight text-slate-100">{entry.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">{entry.excerpt || "No summary available yet."}</p>
            <div className="mt-4 flex items-center justify-between gap-3 text-xs text-slate-500">
              <span className="truncate">{entry.slug}</span>
              <span className="shrink-0 text-emerald-300 transition group-hover:text-emerald-200">Open record</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
