import { Link } from "react-router-dom";
import type { DbRelatedEntityRef } from "../../types/db";
import { DbBadge, DbSurface } from "./DbCards";

export function BlueprintUnlockSources({ items }: { items: DbRelatedEntityRef[] }) {
  return (
    <DbSurface title="Unlock source records" anchorId="relation-unlock-source-records" meta={`${items.length} linked`}>
      <p className="mb-4 text-sm leading-6 text-[var(--database-muted)]">
        {items.length ? "Recorded unlock links and book requirements. Acquisition routes are not established by these records alone." : "No unlock source is linked in this snapshot. Availability is not established."}
      </p>
      <ul className="divide-y divide-[var(--database-divider)]">
        {items.map((source) => (
          <li key={`${source.prefab}:${source.sourceComponent}`} className="py-4 first:pt-0 last:pb-0">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0 flex-1 basis-52">
                {source.path ? <Link className="break-words font-semibold text-[var(--database-ink)] underline decoration-[var(--database-divider)] underline-offset-4 transition hover:text-[var(--database-accent-soft)]" to={source.path}>{source.title}</Link> : <span>{source.title}</span>}
                <p className="mt-2 break-all font-mono text-xs text-[var(--database-dim)]">{source.prefab}</p>
                <p className="mt-1 break-all font-mono text-xs text-[var(--database-muted)]">{source.sourceComponent}</p>
              </div>
              {source.sourceTypeLabel ? <DbBadge tone="muted">{source.sourceTypeLabel}</DbBadge> : null}
            </div>
            {source.requiredBooks?.length ? (
              <div className="mt-4 border-l-2 border-[var(--database-divider)] pl-4">
                <h3 className="mb-2 text-xs font-semibold text-[var(--database-muted)]">Book requirements</h3>
                <ul className="space-y-2">
                  {source.requiredBooks.map((book) => (
                    <li key={`${book.prefab}:${book.amount}`} className="flex min-w-0 items-center gap-3">
                      {book.icon ? <img src={book.icon} alt="" loading="lazy" className="h-10 w-10 shrink-0 object-contain" /> : null}
                      <div className="min-w-0 text-sm">
                        {book.path ? <Link className="break-words text-[var(--database-accent-soft)] underline underline-offset-4" to={book.path}>{book.title}</Link> : book.title}
                        <span className="ml-2 text-[var(--database-muted)]">{book.amount === undefined ? "Quantity unrecorded" : `x${book.amount}`}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </DbSurface>
  );
}
