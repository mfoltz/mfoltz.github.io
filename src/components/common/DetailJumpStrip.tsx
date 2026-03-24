export interface DetailJumpItem {
  id: string;
  label: string;
  meta?: string;
}

function joinClasses(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

export function DetailJumpStrip({ items }: { items: DetailJumpItem[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Detail sections"
      className="database-sticky-panel sticky top-[7.35rem] z-20 -mx-1 overflow-x-auto rounded-[1.15rem] px-2 py-2 sm:top-[7.85rem] lg:top-[4.9rem]"
    >
      <div className="flex min-w-max gap-2">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={joinClasses("database-chip inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em]")}
          >
            <span>{item.label}</span>
            {item.meta ? <span className="text-[10px] text-[var(--database-dim)]">{item.meta}</span> : null}
          </a>
        ))}
      </div>
    </nav>
  );
}
