import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { CopyValueButton } from "../common/CopyValueButton";
import { DbIndexEntry, DbRelatedEntityRef } from "../../types/db";

export interface DbDisplayRow {
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
        "flex shrink-0 items-center justify-center overflow-hidden rounded-[1.15rem] border border-[rgba(217,200,130,0.18)] bg-[linear-gradient(180deg,rgba(35,37,44,0.98),rgba(20,21,26,0.96))] shadow-[0_18px_44px_rgba(0,0,0,0.26)]",
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
      ? "border-[rgba(197,36,67,0.38)] bg-[rgba(197,36,67,0.14)] text-[var(--database-ink)]"
      : tone === "muted"
        ? "border-[rgba(223,223,214,0.08)] bg-[rgba(255,255,255,0.03)] text-[var(--database-muted)]"
        : "border-[rgba(130,201,217,0.26)] bg-[rgba(130,201,217,0.1)] text-[var(--database-accent-soft)]";

  return <span className={joinClasses("rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]", toneClass)}>{children}</span>;
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
        "scroll-mt-44 overflow-hidden rounded-[1.4rem] border border-[rgba(223,223,214,0.08)] bg-[linear-gradient(180deg,rgba(32,33,39,0.95),rgba(22,22,24,0.96))] shadow-[0_24px_64px_rgba(0,0,0,0.22)] lg:scroll-mt-36",
        className
      )}
    >
      {title ? (
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(223,223,214,0.07)] px-4 py-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--database-muted)]">{title}</h2>
          {meta ? <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--database-dim)]">{meta}</div> : null}
        </div>
      ) : null}
      <div className="p-4">{children}</div>
    </section>
  );
}

export function DbStatGrid({ rows }: { rows: DbDisplayRow[] }) {
  return (
    <dl className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {rows.map((row) => (
        <div
          key={row.label}
          className="rounded-[1.05rem] border border-[rgba(223,223,214,0.07)] bg-[rgba(7,8,12,0.28)] p-3"
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

export function DbFieldGrid({ rows }: { rows: DbDisplayRow[] }) {
  return (
    <dl className="divide-y divide-[rgba(223,223,214,0.07)] rounded-[1.15rem] border border-[rgba(223,223,214,0.08)] bg-[rgba(7,8,12,0.24)]">
      {rows.map((row) => (
        <div key={row.label} className="grid gap-2 px-4 py-3 sm:grid-cols-[minmax(9rem,0.7fr)_minmax(0,1fr)_auto] sm:items-start sm:gap-4">
          <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--database-dim)]">{row.label}</dt>
          <dd className={joinClasses("min-w-0 text-sm leading-6 text-[var(--database-ink)]", row.monospace && "break-all font-mono text-xs text-[var(--database-accent-soft)]")}>
            {row.value}
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
    <ul className="divide-y divide-[rgba(223,223,214,0.07)] rounded-[1.15rem] border border-[rgba(223,223,214,0.08)] bg-[rgba(7,8,12,0.24)]">
      {items.map((item) => {
        const content = (
          <div className="flex items-start justify-between gap-4 px-4 py-3 transition group-hover:bg-[rgba(255,255,255,0.02)]">
            <div className="min-w-0">
              <div className="font-medium text-[var(--database-ink)]">{item.title}</div>
              <div className="mt-1 break-all font-mono text-[11px] text-[var(--database-dim)]">{item.prefab}</div>
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
        className="group grid h-full gap-4 rounded-[1.45rem] border border-[rgba(223,223,214,0.08)] bg-[linear-gradient(180deg,rgba(32,33,39,0.96),rgba(22,22,24,0.98))] p-4 transition hover:-translate-y-0.5 hover:border-[rgba(130,201,217,0.28)] hover:shadow-[0_26px_72px_rgba(0,0,0,0.28)]"
      >
        <div className="flex items-start gap-4">
          <DbIconAvatar
            title={entry.title}
            icon={entry.icon}
            className="h-14 w-14"
            monogramClassName="text-[13px]"
          />
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
            <h2 className="mt-3 text-lg font-semibold leading-tight text-[var(--database-ink)]">{entry.title}</h2>
            {entry.subtitle ? <p className="mt-1 break-all font-mono text-[11px] text-[var(--database-dim)]">{entry.subtitle}</p> : null}
            <p className="mt-3 text-sm leading-6 text-[var(--database-muted)]">{entry.description ?? entry.excerpt ?? "No summary available yet."}</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 text-xs">
          <span className="truncate font-mono text-[11px] text-[var(--database-dim)]">{entry.slug}</span>
          <span className="shrink-0 font-semibold uppercase tracking-[0.18em] text-[var(--database-accent-soft)] transition group-hover:text-[var(--database-ink)]">
            Open Record
          </span>
        </div>
      </Link>
    </li>
  );
}
