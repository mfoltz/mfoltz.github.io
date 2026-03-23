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
      className="sticky top-[7.35rem] z-20 -mx-1 overflow-x-auto rounded-[1.4rem] border border-slate-800/90 bg-slate-950/90 px-2 py-2 shadow-lg shadow-slate-950/20 backdrop-blur sm:top-[7.85rem] lg:top-[4.9rem]"
    >
      <div className="flex min-w-max gap-2">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={joinClasses(
              "inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 transition hover:border-emerald-500/40 hover:text-emerald-200"
            )}
          >
            <span>{item.label}</span>
            {item.meta ? <span className="text-[10px] text-slate-500">{item.meta}</span> : null}
          </a>
        ))}
      </div>
    </nav>
  );
}
