import { DetailJumpItem, DetailJumpStrip } from "../common/DetailJumpStrip";
import { CollapsibleTextBlock } from "../common/CollapsibleTextBlock";
import { CopyValueButton } from "../common/CopyValueButton";
import { headingId } from "../../lib/text";
import { ReferenceDetail, ReferenceRelationGroup } from "../../types/reference";
import { ReferenceBadge, ReferenceFieldGrid, ReferenceRelationList, ReferenceStatGrid, ReferenceSurface } from "./ReferenceUi";

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

export function ReferenceDetailView({ detail }: { detail: ReferenceDetail }) {
  const stats = detail.stats ?? [];
  const detailSections = detail.detailSections ?? [];
  const relationGroups = sortRelationGroups(detail.relationGroups ?? []);
  const codeBlocks = detail.codeBlocks ?? [];
  const legacyPaths = detail.legacyPaths ?? [];
  const jumpItems = buildJumpItems(detail, relationGroups);

  return (
    <div className="space-y-6">
      <section className="database-hero-panel overflow-hidden rounded-[2rem] p-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
          <div className="max-w-4xl">
            {detail.eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--database-accent-soft)]">{detail.eyebrow}</p> : null}
            {detail.summary ? <p className="mt-4 text-sm leading-7 text-[var(--database-muted)] sm:text-base">{detail.summary}</p> : null}
            <div className="mt-5 flex flex-wrap gap-2">
              <ReferenceBadge tone="accent">{detail.kind}</ReferenceBadge>
              {(detail.badges ?? []).map((badge) => (
                <ReferenceBadge key={badge} tone="muted">
                  {badge}
                </ReferenceBadge>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <CopyValueButton value={detail.path} label="Copy route" />
              <CopyValueButton value={detail.sourcePath} label="Copy source" />
            </div>
          </div>
          <div className="database-avatar-well flex h-20 w-20 items-center justify-center rounded-[1.8rem] text-xl font-semibold tracking-[0.2em] text-[var(--database-accent-soft)]">
            {getMonogram(detail.title)}
          </div>
        </div>
        {stats.length > 0 ? (
          <div className="mt-6">
            <ReferenceStatGrid rows={stats} />
          </div>
        ) : null}
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
