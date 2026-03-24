import { DetailJumpItem, DetailJumpStrip } from "../common/DetailJumpStrip";
import { CollapsibleTextBlock } from "../common/CollapsibleTextBlock";
import { CopyValueButton } from "../common/CopyValueButton";
import { headingId } from "../../lib/text";
import { ReferenceDetail, ReferenceRelationGroup } from "../../types/reference";
import { ReferenceBadge, ReferenceFieldGrid, ReferenceRelationList, ReferenceSurface } from "./ReferenceUi";

function getMonogram(value: string): string {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("") || "RF";
}

function getRelationPriority(title: string): number {
  const normalized = title.trim().toLowerCase();
  if (normalized === "queries") {
    return 0;
  }
  if (normalized === "components") {
    return 1;
  }
  if (normalized === "prefabs") {
    return 2;
  }
  if (/(item|recipe|npc|ability|workstation|blueprint|quest|buff|itemset|database|db)/.test(normalized)) {
    return 3;
  }
  return 4;
}

function sortRelationGroups(groups: ReferenceRelationGroup[]): ReferenceRelationGroup[] {
  return [...groups].sort((left, right) => {
    const priorityDiff = getRelationPriority(left.title) - getRelationPriority(right.title);
    if (priorityDiff !== 0) {
      return priorityDiff;
    }

    return left.title.localeCompare(right.title);
  });
}

function buildJumpItems(detail: ReferenceDetail, relationGroups: ReferenceRelationGroup[]): DetailJumpItem[] {
  const items: DetailJumpItem[] = [];

  for (const group of relationGroups) {
    items.push({
      id: `relation-${headingId(group.title)}`,
      label: group.title,
      meta: `${group.totalCount ?? group.items.length}`
    });
  }

  for (const section of detail.detailSections ?? []) {
    items.push({
      id: `detail-${headingId(section.title)}`,
      label: section.title
    });
  }

  items.push({
    id: "source-compatibility",
    label: "Source"
  });

  if ((detail.codeBlocks ?? []).length > 0) {
    items.push({
      id: "raw-and-code",
      label: "Raw & Code",
      meta: `${detail.codeBlocks?.length ?? 0}`
    });
  }

  return items;
}

function renderSummaryRows(detail: ReferenceDetail) {
  const stats = detail.stats ?? [];
  if (stats.length === 0) {
    return null;
  }

  return (
    <dl className="database-summary-list mt-5">
      {stats.map((row) => (
        <div key={row.label} className="space-y-2 py-3 first:pt-0 last:pb-0">
          <div className="flex items-start justify-between gap-3">
            <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--database-dim)]">{row.label}</dt>
            {row.copyValue ? <CopyValueButton value={row.copyValue} className="shrink-0" /> : null}
          </div>
          <dd className={row.monospace ? "break-all font-mono text-xs text-[var(--database-accent-soft)]" : "text-sm leading-6 text-[var(--database-ink)]"}>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ReferenceDetailView({ detail }: { detail: ReferenceDetail }) {
  const detailSections = detail.detailSections ?? [];
  const relationGroups = sortRelationGroups(detail.relationGroups ?? []);
  const codeBlocks = detail.codeBlocks ?? [];
  const legacyPaths = detail.legacyPaths ?? [];
  const jumpItems = buildJumpItems(detail, relationGroups);

  return (
    <div className="space-y-6">
      <section className="database-panel overflow-hidden rounded-[1.5rem] p-5 sm:p-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)] lg:items-start">
          <div className="max-w-4xl">
            {detail.eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--database-accent-soft)]">{detail.eyebrow}</p> : null}
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-[var(--database-ink)] sm:text-[2.8rem]">{detail.title}</h1>
            <p className="mt-2 break-all font-mono text-[11px] text-[var(--database-dim)] sm:text-xs">{detail.path}</p>
            {detail.summary ? <p className="mt-4 text-sm leading-7 text-[var(--database-muted)] sm:text-base">{detail.summary}</p> : null}
            <div className="mt-5 flex flex-wrap gap-2">
              <ReferenceBadge tone="accent">{detail.kind}</ReferenceBadge>
              {(detail.badges ?? []).map((badge) => (
                <ReferenceBadge key={badge} tone="muted">
                  {badge}
                </ReferenceBadge>
              ))}
            </div>
          </div>
          <aside className="database-summary-capsule rounded-[1.6rem] p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="database-avatar-well flex h-20 w-20 items-center justify-center rounded-[1.6rem] text-xl font-semibold tracking-[0.2em] text-[var(--database-accent-soft)]">
                {getMonogram(detail.title)}
              </div>
              <div className="text-right">
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--database-dim)]">Summary Rail</div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--database-accent-soft)]">{detail.kind}</div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <CopyValueButton value={detail.path} label="Copy route" />
              <CopyValueButton value={detail.sourcePath} label="Copy source" />
            </div>

            {renderSummaryRows(detail)}
          </aside>
        </div>
      </section>

      <DetailJumpStrip items={jumpItems} />

      <div className="space-y-6">
        {relationGroups.map((group) => (
          <ReferenceSurface
            key={group.title}
            title={group.title}
            anchorId={`relation-${headingId(group.title)}`}
            meta={`${group.totalCount ?? group.items.length} linked`}
          >
            <ReferenceRelationList items={group.items} emptyLabel={group.emptyLabel} totalCount={group.totalCount} />
          </ReferenceSurface>
        ))}

        {detailSections.map((section) => (
          <ReferenceSurface key={section.title} title={section.title} anchorId={`detail-${headingId(section.title)}`}>
            <ReferenceFieldGrid rows={section.rows} />
          </ReferenceSurface>
        ))}

        <ReferenceSurface title="Source & Compatibility" anchorId="source-compatibility">
          <div className="space-y-4">
            <ReferenceFieldGrid
              rows={[
                { label: "Path", value: detail.sourcePath, monospace: true, copyValue: detail.sourcePath },
                { label: "Route", value: detail.path, monospace: true, copyValue: detail.path }
              ]}
            />
            {legacyPaths.length > 0 ? (
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--database-dim)]">Legacy Paths</p>
                <ReferenceFieldGrid
                  rows={legacyPaths.slice(0, 8).map((legacyPath) => ({
                    label: "Alias",
                    value: legacyPath,
                    monospace: true,
                    copyValue: legacyPath
                  }))}
                />
              </div>
            ) : null}
          </div>
        </ReferenceSurface>

        {codeBlocks.length > 0 ? (
          <ReferenceSurface title="Raw & Code" anchorId="raw-and-code" meta={`${codeBlocks.length} blocks`}>
            <div className="space-y-5">
              {codeBlocks.map((block) => (
                <CollapsibleTextBlock key={block.title} title={block.title} value={block.value} language={block.language} copyValue={block.value} />
              ))}
            </div>
          </ReferenceSurface>
        ) : null}
      </div>
    </div>
  );
}
