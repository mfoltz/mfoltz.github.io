import { PrefabReader } from "./PrefabReader";
import { DetailJumpItem, DetailJumpStrip } from "../common/DetailJumpStrip";
import { CollapsibleTextBlock } from "../common/CollapsibleTextBlock";
import { CopyValueButton } from "../common/CopyValueButton";
import { headingId } from "../../lib/text";
import { ReferenceDetail, ReferenceRelation, ReferenceRelationGroup } from "../../types/reference";
import { ReferenceFieldGrid, ReferenceRelationList, ReferenceSurface } from "./ReferenceUi";

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
      label: "Raw data & code",
      meta: `${detail.codeBlocks?.length ?? 0}`
    });
  }

  return items;
}

function isPrefabComponentsGroup(detail: ReferenceDetail, group: ReferenceRelationGroup): boolean {
  return detail.section === "prefabs" && group.title === "Components";
}

function getRelationMeta(detail: ReferenceDetail, group: ReferenceRelationGroup): string {
  const count = group.totalCount ?? group.items.length;
  return isPrefabComponentsGroup(detail, group) ? `${count} components` : `${count} linked`;
}

function getRelationItems(detail: ReferenceDetail, group: ReferenceRelationGroup): ReferenceRelation[] {
  if (!isPrefabComponentsGroup(detail, group)) {
    return group.items;
  }

  return group.items.map((item) =>
    item.path
      ? item
      : {
          ...item,
          badges: item.badges?.includes("No component doc") ? item.badges : [...(item.badges ?? []), "No component doc"]
        }
  );
}

function renderPrefabComponentNote(detail: ReferenceDetail, group: ReferenceRelationGroup) {
  if (!isPrefabComponentsGroup(detail, group)) {
    return null;
  }

  return (
    <p className="database-panel-subtle rounded-[1rem] px-4 py-3 text-xs leading-6 text-[var(--database-muted)]">
      Component rows come from an extracted prefab component snapshot. Linked rows open generated component docs; unlinked rows are still attached components without a matching component doc page.
    </p>
  );
}

export function ReferenceDetailView({ detail }: { detail: ReferenceDetail }) {
  if (detail.kind === "prefab" && detail.readerSources?.length) return <PrefabReader detail={detail} />;
  const detailSections = detail.detailSections ?? [];
  const relationGroups = sortRelationGroups(detail.relationGroups ?? []);
  const codeBlocks = detail.codeBlocks ?? [];
  const legacyPaths = detail.legacyPaths ?? [];
  const jumpItems = buildJumpItems(detail, relationGroups);

  return (
    <div className="space-y-6">
      <header className="reference-header">
        {detail.eyebrow ? <p className="text-sm text-[var(--database-accent-soft)]">{detail.eyebrow}</p> : null}
        <h1 className="mt-2 text-2xl font-semibold leading-tight sm:text-3xl">{detail.title}</h1>
        {detail.summary ? <p className="mt-3 max-w-4xl text-sm leading-6 text-[var(--database-muted)]">{detail.summary}</p> : null}
        <dl>{(detail.stats ?? []).map(row => <div key={row.label}><dt>{row.label}</dt><dd>{row.value}</dd></div>)}</dl>
        <div className="mt-3 flex flex-wrap gap-2"><CopyValueButton value={detail.title} label="Copy name" /><CopyValueButton value={detail.path} label="Copy route" /></div>
      </header>

      <DetailJumpStrip items={jumpItems} />

      <div className="space-y-6">
        {relationGroups.map((group) => (
          <ReferenceSurface
            key={group.title}
            title={group.title}
            anchorId={`relation-${headingId(group.title)}`}
            meta={getRelationMeta(detail, group)}
          >
            <div className="space-y-4">
              {renderPrefabComponentNote(detail, group)}
              <ReferenceRelationList items={getRelationItems(detail, group)} emptyLabel={group.emptyLabel} totalCount={group.totalCount} />
            </div>
          </ReferenceSurface>
        ))}

        {detailSections.map((section) => (
          <ReferenceSurface key={section.title} title={section.title} anchorId={`detail-${headingId(section.title)}`}>
            <ReferenceFieldGrid rows={section.rows} />
          </ReferenceSurface>
        ))}

        <ReferenceSurface title="Source & routes" anchorId="source-compatibility">
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
          <ReferenceSurface title="Raw data & code" anchorId="raw-and-code" meta={`${codeBlocks.length} blocks`}>
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
