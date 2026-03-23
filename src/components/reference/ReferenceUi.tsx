import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ReferenceFieldRow, ReferenceIndexEntry, ReferenceRelation } from "../../types/reference";

function joinClasses(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

function getMonogram(value: string): string {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("") || "RF";
}

export function ReferenceBadge({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "muted" | "accent" }) {
  const toneClass =
    tone === "accent"
      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
      : tone === "muted"
        ? "border-slate-700 bg-slate-900 text-slate-300"
        : "border-cyan-400/20 bg-cyan-400/10 text-cyan-100";

  return <span className={joinClasses("rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em]", toneClass)}>{children}</span>;
}

export function ReferenceFilterButton({
  children,
  active,
  count,
  onClick
}: {
  children: ReactNode;
  active: boolean;
  count?: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={joinClasses(
        "rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition",
        active ? "border-emerald-400/40 bg-emerald-400/12 text-emerald-100" : "border-slate-800 bg-slate-950/45 text-slate-400 hover:border-slate-700 hover:text-slate-200"
      )}
    >
      {typeof count === "number" ? `${children} (${count})` : children}
    </button>
  );
}

export function ReferenceSurface({ title, children, className }: { title?: string; children: ReactNode; className?: string }) {
  return (
    <section className={joinClasses("rounded-[1.6rem] border border-slate-800/90 bg-slate-900/80 shadow-xl shadow-slate-950/20", className)}>
      {title ? <h2 className="border-b border-slate-800/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{title}</h2> : null}
      <div className="p-4">{children}</div>
    </section>
  );
}

export function ReferenceStatGrid({ rows }: { rows: ReferenceFieldRow[] }) {
  return (
    <dl className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {rows.map((row) => (
        <div key={row.label} className="rounded-2xl border border-slate-800/80 bg-slate-950/55 p-3">
          <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{row.label}</dt>
          <dd className={joinClasses("mt-2 text-sm text-slate-100", row.monospace && "font-mono text-xs text-emerald-200")}>
            {row.path ? <Link to={row.path}>{row.value}</Link> : row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ReferenceFieldGrid({ rows }: { rows: ReferenceFieldRow[] }) {
  return (
    <dl className="grid gap-3 sm:grid-cols-2">
      {rows.map((row) => (
        <div key={`${row.label}:${row.value}`} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-3">
          <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{row.label}</dt>
          <dd className={joinClasses("mt-2 text-sm leading-6 text-slate-200", row.monospace && "font-mono text-xs text-emerald-200")}>
            {row.path ? <Link to={row.path}>{row.value}</Link> : row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ReferenceRelationList({ items, emptyLabel, totalCount }: { items: ReferenceRelation[]; emptyLabel?: string; totalCount?: number }) {
  if (items.length === 0) {
    return <p className="text-sm text-slate-400">{emptyLabel ?? "No related records."}</p>;
  }

  return (
    <div className="space-y-3">
      {typeof totalCount === "number" && totalCount > items.length ? <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{`Showing ${items.length} of ${totalCount}`}</p> : null}
      <ul className="space-y-3">
        {items.map((item) => {
          const content = (
            <div className="flex items-start justify-between gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/45 p-3 transition group-hover:border-emerald-500/40 group-hover:bg-slate-950/65">
              <div className="min-w-0">
                <div className="font-medium text-slate-100">{item.title}</div>
                {item.description ? <div className="mt-1 text-xs text-slate-500">{item.description}</div> : null}
              </div>
              {item.badges && item.badges.length > 0 ? (
                <div className="flex shrink-0 flex-wrap justify-end gap-2">
                  {item.badges.slice(0, 2).map((badge) => (
                    <ReferenceBadge key={badge} tone="muted">
                      {badge}
                    </ReferenceBadge>
                  ))}
                </div>
              ) : null}
            </div>
          );

          return <li key={`${item.title}:${item.path ?? item.description ?? ""}`}>{item.path ? <Link to={item.path} className="group block">{content}</Link> : content}</li>;
        })}
      </ul>
    </div>
  );
}

export function ReferenceIndexRow({ entry }: { entry: ReferenceIndexEntry }) {
  const badges = (entry.badges ?? []).slice(0, 3);
  return (
    <li className="list-none">
      <Link
        to={entry.path}
        className="group grid gap-4 rounded-[1.7rem] border border-slate-800/90 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950/90 p-4 transition hover:-translate-y-0.5 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/10 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-start"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-[1.4rem] border border-emerald-400/20 bg-emerald-400/10 text-sm font-semibold tracking-[0.18em] text-emerald-200">
          {getMonogram(entry.title)}
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap gap-2">
            <ReferenceBadge tone="accent">{entry.kind}</ReferenceBadge>
            {badges.map((badge) => (
              <ReferenceBadge key={badge} tone="muted">
                {badge}
              </ReferenceBadge>
            ))}
          </div>
          <h2 className="mt-3 text-lg font-semibold leading-tight text-slate-100">{entry.title}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">{entry.excerpt || "No summary available yet."}</p>
          <div className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-500">{entry.path}</div>
        </div>
        <div className="flex items-center text-xs font-medium uppercase tracking-[0.18em] text-emerald-300 transition group-hover:text-emerald-200">Open</div>
      </Link>
    </li>
  );
}
