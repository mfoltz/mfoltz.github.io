import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { VariableText } from "../common/VariableText";
import { CopyValueButton } from "../common/CopyValueButton";
import { DbIndexEntry, DbRelatedEntityRef } from "../../types/db";

export interface DbDisplayRow {
  key?: string;
  label: string;
  value: ReactNode;
  monospace?: boolean;
  copyValue?: string;
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

export function DbIconAvatar({
  title,
  icon,
  className,
  imageClassName,
  monogramClassName
}: {
  title: string;
  icon?: string;
  className?: string;
  imageClassName?: string;
  monogramClassName?: string;
}) {
  return (
    <div
      className={joinClasses(
        "database-avatar-well flex shrink-0 items-center justify-center overflow-hidden rounded-[1.15rem]",
        className
      )}
    >
      {icon ? (
        <img src={icon} alt="" loading="lazy" className={joinClasses("h-full w-full object-cover", imageClassName)} />
      ) : (
        <span className={joinClasses("text-sm font-semibold uppercase tracking-[0.22em] text-[var(--database-accent-soft)]", monogramClassName)}>
          {getMonogram(title)}
        </span>
      )}
    </div>
  );
}

export function DbBadge({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "accent" | "muted" }) {
  const toneClass =
    tone === "accent"
      ? "database-pill-accent"
      : tone === "muted"
        ? "database-pill-muted"
        : "database-pill-brand";

  return <span className={joinClasses("rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]", toneClass)}>{children}</span>;
}

export function DbSurface({
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
        "database-ledger-surface scroll-mt-44 overflow-hidden rounded-[1.5rem] lg:scroll-mt-36",
        className
      )}
    >
      {title ? (
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--database-divider)] px-5 py-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--database-muted)]">{title}</h2>
          {meta ? <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--database-dim)]">{meta}</div> : null}
        </div>
      ) : null}
      <div className="p-5">{children}</div>
    </section>
  );
}

export function DbStatGrid({ rows }: { rows: DbDisplayRow[] }) {
  return (
    <dl className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {rows.map((row) => (
        <div
          key={row.label}
          className="database-panel-subtle rounded-[1.05rem] p-3"
        >
          <div className="flex items-start justify-between gap-3">
            <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--database-dim)]">{row.label}</dt>
            {row.copyValue ? <CopyValueButton value={row.copyValue} className="shrink-0" /> : null}
          </div>
          <dd className={joinClasses("mt-2 text-sm text-[var(--database-ink)]", row.monospace && "font-mono text-xs text-[var(--database-accent-soft)]")}>
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function DbFieldGrid({
  rows,
  renderVariables = false,
  variableValues
}: {
  rows: DbDisplayRow[];
  renderVariables?: boolean;
  variableValues?: DbIndexEntry["textVariableValues"];
}) {
  return (
    <dl className="database-list-surface divide-y divide-[var(--database-divider)] rounded-[1.15rem]">
      {rows.map((row) => (
        <div key={row.label} className="grid gap-2 px-4 py-3 sm:grid-cols-[minmax(9rem,0.7fr)_minmax(0,1fr)_auto] sm:items-start sm:gap-4">
          <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--database-dim)]">{row.label}</dt>
          <dd className={joinClasses("min-w-0 text-sm leading-6 text-[var(--database-ink)]", row.monospace && "break-all font-mono text-xs text-[var(--database-accent-soft)]")}>
            {renderVariables && typeof row.value === "string" && !row.monospace ? (
              <VariableText text={row.value} variableValues={variableValues} />
            ) : (
              row.value
            )}
          </dd>
          {row.copyValue ? <CopyValueButton value={row.copyValue} className="justify-self-start sm:justify-self-end" /> : null}
        </div>
      ))}
    </dl>
  );
}

export function DbReferenceList({ items, emptyLabel }: { items: DbRelatedEntityRef[]; emptyLabel: string }) {
  if (items.length === 0) {
    return <p className="text-sm text-[var(--database-muted)]">{emptyLabel}</p>;
  }

  return (
    <ul className="database-list-surface divide-y divide-[var(--database-divider)] rounded-[1.15rem]">
      {items.map((item) => {
        const content = (
          <div className="flex items-start justify-between gap-4 px-4 py-3 transition group-hover:bg-[rgba(168,121,230,0.06)]">
            <div className="flex min-w-0 items-start gap-3">
              {item.icon ? <DbIconAvatar title={item.title} icon={item.icon} className="h-11 w-11 rounded-[0.85rem]" monogramClassName="text-xs" /> : null}
              <div className="min-w-0">
                <div className="font-medium text-[var(--database-ink)]">{item.title}</div>
                <div className="mt-1 break-all font-mono text-[11px] text-[var(--database-dim)]">{item.prefab}</div>
              </div>
            </div>
            <div className="shrink-0 text-right">
              {typeof item.amount === "number" ? <DbBadge tone="accent">{`${item.amount}x`}</DbBadge> : null}
              {item.guid !== null ? <div className="mt-2 text-[11px] text-[var(--database-dim)]">{item.guid}</div> : null}
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
  const chips = entry.categories.slice(0, 2);
  const extraCount = Math.max(0, entry.categories.length - chips.length);
  const eyebrow = entry.recordKind ?? (section === "items" ? "Item" : section === "recipes" ? "Recipe" : section);

  return (
    <li className="list-none">
      <Link
        to={entry.path}
        className="database-ledger-row group grid gap-4 px-4 py-3.5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start"
      >
        <div className="flex min-w-0 items-start gap-3">
          {entry.icon ? (
            <DbIconAvatar
              title={entry.title}
              icon={entry.icon}
              className="mt-0.5 h-12 w-12 rounded-[0.9rem]"
              imageClassName="p-1"
              monogramClassName="text-xs"
            />
          ) : null}
          <div className="min-w-0">
            <div className="flex flex-wrap gap-2">
              <DbBadge tone="accent">{entry.tier ?? eyebrow}</DbBadge>
              {chips.map((category) => (
                <DbBadge key={category} tone="muted">
                  {category}
                </DbBadge>
              ))}
              {extraCount > 0 ? <DbBadge tone="muted">{`+${extraCount}`}</DbBadge> : null}
            </div>
            <h2 className="mt-2.5 text-base font-semibold leading-tight text-[var(--database-ink)] sm:text-[1.05rem]">{entry.title}</h2>
            {entry.subtitle ? <p className="mt-1 break-all font-mono text-[11px] text-[var(--database-dim)]">{entry.subtitle}</p> : null}
            <p className="mt-2.5 max-w-3xl text-sm leading-6 text-[var(--database-muted)]">
              <VariableText text={entry.description ?? entry.excerpt ?? "No summary available yet."} variableValues={entry.textVariableValues} />
            </p>
            <div className="mt-3 truncate font-mono text-[11px] text-[var(--database-dim)]">{entry.slug}</div>
          </div>
        </div>
        <div className="database-row-action flex items-center text-[11px] font-semibold uppercase tracking-[0.18em]">
          Open Record
        </div>
      </Link>
    </li>
  );
}
