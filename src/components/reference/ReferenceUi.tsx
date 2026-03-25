import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { CopyValueButton } from "../common/CopyValueButton";
import { ReferenceFieldRow, ReferenceIndexEntry, ReferenceRelation } from "../../types/reference";

function joinClasses(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

function renderFieldValue(row: ReferenceFieldRow) {
  if (row.path) {
    return <Link to={row.path}>{row.value}</Link>;
  }

  return row.value;
}

export function ReferenceBadge({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "muted" | "accent" }) {
  const toneClass =
    tone === "accent"
      ? "database-pill-accent"
      : tone === "muted"
        ? "database-pill-muted"
        : "database-pill-brand";

  return <span className={joinClasses("rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em]", toneClass)}>{children}</span>;
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
        "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition",
        active ? "database-segment database-segment-active" : "database-segment"
      )}
    >
      {typeof count === "number" ? `${children} (${count})` : children}
    </button>
  );
}

export function ReferenceSurface({
  title,
  meta,
  anchorId,
  children,
  className
}: {
  title?: string;
  meta?: ReactNode;
  anchorId?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={anchorId}
      className={joinClasses(
        "database-ledger-surface scroll-mt-44 rounded-[1.6rem] lg:scroll-mt-36",
        className
      )}
    >
      {title ? (
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--database-divider)] px-5 py-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--database-muted)]">{title}</h2>
          {meta ? <div className="text-[11px] uppercase tracking-[0.16em] text-[var(--database-dim)]">{meta}</div> : null}
        </div>
      ) : null}
      <div className="p-5">{children}</div>
    </section>
  );
}

export function ReferenceStatGrid({ rows }: { rows: ReferenceFieldRow[] }) {
  return (
    <dl className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {rows.map((row) => (
        <div key={row.label} className="database-panel-subtle rounded-2xl p-3">
          <div className="flex items-start justify-between gap-3">
            <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--database-dim)]">{row.label}</dt>
            {row.copyValue ? <CopyValueButton value={row.copyValue} className="shrink-0" /> : null}
          </div>
          <dd className={joinClasses("mt-2 text-sm text-[var(--database-ink)]", row.monospace && "font-mono text-xs text-[var(--database-accent-soft)]")}>
            {renderFieldValue(row)}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ReferenceFieldGrid({ rows }: { rows: ReferenceFieldRow[] }) {
  return (
    <dl className="database-list-surface divide-y divide-[var(--database-divider)] rounded-[1.2rem]">
      {rows.map((row) => (
        <div key={`${row.label}:${row.value}`} className="grid gap-2 px-4 py-3 sm:grid-cols-[minmax(9rem,0.7fr)_minmax(0,1fr)_auto] sm:items-start sm:gap-4">
          <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--database-dim)]">{row.label}</dt>
          <dd className={joinClasses("min-w-0 text-sm leading-6 text-[var(--database-ink)]", row.monospace && "break-all font-mono text-xs text-[var(--database-accent-soft)]")}>
            {renderFieldValue(row)}
          </dd>
          {row.copyValue ? <CopyValueButton value={row.copyValue} className="justify-self-start sm:justify-self-end" /> : null}
        </div>
      ))}
    </dl>
  );
}

export function ReferenceRelationList({ items, emptyLabel, totalCount }: { items: ReferenceRelation[]; emptyLabel?: string; totalCount?: number }) {
  if (items.length === 0) {
    return <p className="text-sm text-[var(--database-muted)]">{emptyLabel ?? "No related records."}</p>;
  }

  return (
    <div className="space-y-3">
      {typeof totalCount === "number" && totalCount > items.length ? <p className="text-xs uppercase tracking-[0.18em] text-[var(--database-dim)]">{`Showing ${items.length} of ${totalCount}`}</p> : null}
      <ul className="database-list-surface divide-y divide-[var(--database-divider)] rounded-[1.2rem]">
        {items.map((item) => {
          const content = (
            <div className="flex items-start justify-between gap-4 px-4 py-3 transition group-hover:bg-[rgba(168,121,230,0.06)]">
              <div className="min-w-0">
                <div className="font-medium text-[var(--database-ink)]">{item.title}</div>
                {item.description ? <div className="mt-1 text-xs leading-5 text-[var(--database-dim)]">{item.description}</div> : null}
                {item.path ? <div className="mt-1.5 break-all font-mono text-[11px] text-[var(--database-accent-soft)]">{item.path}</div> : null}
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
  const badges = (entry.badges ?? []).slice(0, 2);
  return (
    <li className="list-none">
      <Link
        to={entry.path}
        className="database-ledger-row group grid gap-3.5 px-4 py-3.5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start"
      >
        <div className="min-w-0">
          <div className="flex flex-wrap gap-2">
            <ReferenceBadge tone="accent">{entry.kind}</ReferenceBadge>
            {badges.map((badge) => (
              <ReferenceBadge key={badge} tone="muted">
                {badge}
              </ReferenceBadge>
            ))}
          </div>
          <h2 className="mt-2.5 text-base font-semibold leading-tight text-[var(--database-ink)] sm:text-[1.05rem]">{entry.title}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--database-muted)]">{entry.excerpt || "No summary available yet."}</p>
          <div className="mt-3 break-all font-mono text-[11px] text-[var(--database-dim)]">{entry.path}</div>
        </div>
        <div className="database-row-action flex items-center text-[11px] font-medium uppercase tracking-[0.18em]">
          Open Record
        </div>
      </Link>
    </li>
  );
}
