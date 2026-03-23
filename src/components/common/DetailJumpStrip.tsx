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
      className="sticky top-[7.35rem] z-20 -mx-1 overflow-x-auto rounded-[1.15rem] border border-[rgba(223,223,214,0.08)] bg-[rgba(16,17,20,0.92)] px-2 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur sm:top-[7.85rem] lg:top-[4.9rem]"
    >
      <div className="flex min-w-max gap-2">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={joinClasses(
              "inline-flex items-center gap-2 rounded-full border border-[rgba(223,223,214,0.08)] bg-[rgba(32,33,39,0.88)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--database-muted)] transition hover:border-[rgba(130,201,217,0.26)] hover:text-[var(--database-accent-soft)]"
            )}
          >
            <span>{item.label}</span>
            {item.meta ? <span className="text-[10px] text-[var(--database-dim)]">{item.meta}</span> : null}
          </a>
        ))}
      </div>
    </nav>
  );
}
