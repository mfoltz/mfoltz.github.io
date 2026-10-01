import { Link } from "react-router-dom";
import type { DbBlueprintBuildMaterialStatus, DbRelatedEntityRef } from "../../types/db";
import { DbArtwork } from "./DbArtwork";
import { DbSurface } from "./DbCards";

export function BlueprintBuildMaterials({ status, items }: { status?: DbBlueprintBuildMaterialStatus; items: DbRelatedEntityRef[] }) {
  const recorded = status === "recorded" && items.length > 0;
  const description = recorded
    ? "Recorded material requirements from the source snapshot."
    : status === "zero-valued"
      ? "This snapshot records zero-valued material rows. Build cost is unknown."
      : "No material quantities are recorded in this snapshot. Build cost is unknown.";
  return (
    <DbSurface title="Build materials" anchorId="relation-build-materials" meta={recorded ? `${items.length} material type${items.length === 1 ? "" : "s"}` : undefined}>
      <p className="mb-4 text-sm leading-6 text-[var(--database-muted)]">{description}</p>
      {recorded ? (
        <ul className="flex min-w-0 flex-wrap gap-2">
          {items.map((item) => (
            <li key={`${item.prefab}:${item.guid}`} className="min-w-0 max-w-full">
              <Link to={item.path!} className="database-chip inline-flex max-w-full items-center gap-2 rounded-full px-2.5 py-1.5 text-xs text-[var(--database-ink)]">
                <DbArtwork icon={item.icon} size="ingredient" />
                <span className="shrink-0 font-semibold text-[var(--database-accent-soft)]">{item.amount}x</span>
                <span className="min-w-0 whitespace-normal">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </DbSurface>
  );
}
