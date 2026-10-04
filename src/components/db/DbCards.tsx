import { hasUsefulDescription } from "../../lib/text";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { VariableText } from "../common/VariableText";
import { CopyValueButton } from "../common/CopyValueButton";
import { DbIndexEntry, DbRelatedEntityRef } from "../../types/db";
import { DbArtwork } from "./DbArtwork";

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

export function DbReferenceList({ items, emptyLabel, formatAmount = amount => `${amount}x` }: {
  items: DbRelatedEntityRef[]; emptyLabel: string; formatAmount?: (amount: number) => string;
}) {
  if (items.length === 0) {
    return <p className="text-sm text-[var(--database-muted)]">{emptyLabel}</p>;
  }

  return (
    <ul className="database-list-surface divide-y divide-[var(--database-divider)] rounded-[1.15rem]">
      {items.map((item) => {
        const hasMetadata = typeof item.amount === "number" || item.guid !== null;
        const content = (
          <div data-db-reference={item.prefab} className="flex flex-col gap-2 px-4 py-3 transition group-hover:bg-[rgba(168,121,230,0.06)] sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <div className="flex min-w-0 items-start gap-3">
              {item.icon ? <DbIconAvatar title={item.title} icon={item.icon} className="h-11 w-11 rounded-[0.85rem]" monogramClassName="text-xs" /> : null}
              <div className="min-w-0">
                <div data-db-reference-title="" className="break-words font-medium text-[var(--database-ink)] sm:break-normal">{item.title}</div>
                <div data-db-reference-prefab="" className="mt-1 break-words font-mono text-xs text-[var(--database-muted)] sm:break-all">{item.prefab}</div>
              </div>
            </div>
            {hasMetadata ? (
              <div data-db-reference-metadata="" className={joinClasses("flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2 sm:block sm:shrink-0 sm:text-right", item.icon && "pl-14 sm:pl-0")}>
                {typeof item.amount === "number" ? <span data-db-reference-amount=""><DbBadge tone="accent">{formatAmount(item.amount)}</DbBadge></span> : null}
                {item.guid !== null ? <div data-db-reference-guid="" className="text-xs text-[var(--database-muted)] sm:mt-2">{item.guid}</div> : null}
              </div>
            ) : null}
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
  const description = entry.description ?? entry.excerpt;
  const kind = entry.recordKind ?? (section === "items" ? "Item" : section === "recipes" ? "Recipe" : undefined);
  const badges = [...new Set([entry.tier, kind, ...entry.categories].filter(
    (value): value is string => Boolean(value?.trim()) && value!.toLowerCase().replace(/\s/g, "") !== section.toLowerCase()
  ))];
  const chips = badges.slice(0, 3);
  const extraCount = Math.max(0, badges.length - chips.length);

  return (
    <li className="list-none">
      <Link
        to={entry.path}
        className="database-ledger-row block px-4 py-3.5"
      >
        <div className="flex min-w-0 items-start gap-3">
          <div className="min-w-0 flex-1">
            <h2 className="text-base font-semibold leading-tight text-[var(--database-ink)] sm:text-[1.05rem]">{entry.title}</h2>
            {chips.length > 0 ? <div className="mt-2 flex flex-wrap gap-2">
              {chips.map((category, index) => (
                <DbBadge key={category} tone={index === 0 ? "accent" : "muted"}>
                  {category}
                </DbBadge>
              ))}
              {extraCount > 0 ? <DbBadge tone="muted">{`+${extraCount}`}</DbBadge> : null}
            </div> : null}
            {entry.subtitle ? <p className="mt-2 break-all font-mono text-xs text-[var(--database-muted)]">{entry.subtitle}</p> : null}
            {hasUsefulDescription(description) ? <p className="mt-2.5 max-w-3xl text-sm leading-6 text-[var(--database-muted)]">
              <VariableText text={description} variableValues={entry.textVariableValues} />
            </p> : null}

          </div>
          <DbArtwork icon={entry.icon} portraitAssetPath={entry.portraitAssetPath} />
        </div>
      </Link>
    </li>
  );
}
