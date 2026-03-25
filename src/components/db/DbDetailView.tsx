import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { DetailJumpItem, DetailJumpStrip } from "../common/DetailJumpStrip";
import { CollapsibleTextBlock } from "../common/CollapsibleTextBlock";
import { CopyValueButton } from "../common/CopyValueButton";
import { headingId } from "../../lib/text";
import { DbSection } from "../../config/sections";
import { DbEntityDetail, DbRelatedEntityRef } from "../../types/db";
import { DbBadge, DbDisplayRow, DbFieldGrid, DbIconAvatar, DbReferenceList, DbSurface } from "./DbCards";
import { DbFieldSpec, dbSchemas, hasDbSchema } from "./dbSchemas";

const hiddenKeys = new Set(["slug", "title", "subtitle", "description", "summary", "categories", "tier", "tags", "prefabPath", "icon"]);
const copyKeyPattern = /(guid|path|prefab|route|source)/i;

function humanizeKey(value: string): string {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatUnknownValue(value: unknown): string {
  if (value === null || value === undefined) {
    return "-";
  }

  if (Array.isArray(value)) {
    if (value.every((item) => typeof item === "string" || typeof item === "number" || typeof item === "boolean")) {
      return value.join(", ");
    }

    return JSON.stringify(value);
  }

  if (typeof value === "object") {
    return JSON.stringify(value);
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  return String(value);
}

function formatNumber(value: number): string {
  if (Number.isInteger(value)) {
    return value.toString();
  }

  return value.toFixed(2).replace(/\.?0+$/, "");
}

function formatDuration(seconds: number): string {
  if (seconds < 60) {
    return `${formatNumber(seconds)}s`;
  }

  const minutes = Math.floor(seconds / 60);
  const remaining = seconds % 60;
  return remaining === 0 ? `${minutes}m` : `${minutes}m ${formatNumber(remaining)}s`;
}

function formatFieldValue(value: unknown, format: DbFieldSpec["format"]): ReactNode {
  if (value === null || value === undefined) {
    return "-";
  }

  if (format === "boolean" && typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  if (format === "duration" && typeof value === "number") {
    return formatDuration(value);
  }

  if (format === "number" && typeof value === "number") {
    return formatNumber(value);
  }

  if (Array.isArray(value)) {
    return value.join(", ");
  }

  return String(value);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isRelatedEntityRef(value: unknown): value is DbRelatedEntityRef {
  return isRecord(value) && typeof value.title === "string" && typeof value.prefab === "string";
}

function isRelatedEntityList(value: unknown): value is DbRelatedEntityRef[] {
  return Array.isArray(value) && value.every((item) => isRelatedEntityRef(item));
}

function getCopyValue(key: string, value: unknown, format?: DbFieldSpec["format"]): string | undefined {
  if (value === null || value === undefined) {
    return undefined;
  }

  if (format === "code") {
    return String(value);
  }

  if (typeof value === "string" && copyKeyPattern.test(key)) {
    return value;
  }

  if (typeof value === "number" && /(guid|id)/i.test(key)) {
    return String(value);
  }

  return undefined;
}

function isRedundantFieldValue(detail: DbEntityDetail, spec: DbFieldSpec, value: unknown): boolean {
  if (typeof value !== "string") {
    return false;
  }

  const normalized = value.trim();
  if (!normalized) {
    return false;
  }

  if (spec.key === "localizedDisplayNameEn" && normalized === detail.title) {
    return true;
  }

  return false;
}

function buildRowsFromSpecs(detail: DbEntityDetail, specs: DbFieldSpec[]): DbDisplayRow[] {
  const rows: DbDisplayRow[] = [];

  for (const spec of specs) {
    const value = detail[spec.key];
    if (value === null || value === undefined || value === "") {
      continue;
    }
    if (isRedundantFieldValue(detail, spec, value)) {
      continue;
    }

    rows.push({
      key: spec.key,
      label: spec.label,
      value: formatFieldValue(value, spec.format),
      monospace: spec.format === "code" ? true : undefined,
      copyValue: getCopyValue(spec.key, value, spec.format)
    });
  }

  return rows;
}

function buildRowsFromRecord(record: Record<string, unknown>): DbDisplayRow[] {
  return Object.entries(record)
    .filter(([, value]) => value !== null && value !== undefined && value !== "")
    .map(([key, value]) => ({
      key,
      label: humanizeKey(key),
      value: formatUnknownValue(value),
      monospace: typeof value === "string" && copyKeyPattern.test(key),
      copyValue: getCopyValue(key, value)
    }));
}

function getHeroBodyCopy(section: DbSection, detail: DbEntityDetail): { key?: string; text?: string } {
  const candidateKeys =
    section === "abilities"
      ? ["tooltipTextEn", "description", "summary"]
      : section === "items"
        ? ["localizedDescriptionTextEn", "description", "summary"]
        : section === "recipes"
          ? ["description", "summary"]
          : ["description", "localizedSummaryEn", "localizedDescriptionTextEn", "summary"];

  for (const key of candidateKeys) {
    const value = detail[key];
    if (typeof value === "string" && value.trim().length > 0) {
      return { key, text: value.trim() };
    }
  }

  return {};
}

function buildGenericRows(detail: DbEntityDetail, usedKeys: Set<string>): { simpleRows: DbDisplayRow[]; complexRows: Array<[string, unknown]> } {
  const entries = Object.entries(detail).filter(([key]) => !usedKeys.has(key));
  const simpleRows: DbDisplayRow[] = [];
  const complexRows: Array<[string, unknown]> = [];

  for (const [key, value] of entries) {
    if (value === null || value === undefined) {
      continue;
    }

    if (Array.isArray(value) && value.every((item) => typeof item !== "object")) {
      simpleRows.push({ label: humanizeKey(key), value: formatUnknownValue(value), copyValue: getCopyValue(key, value) });
      continue;
    }

    if (!Array.isArray(value) && typeof value !== "object") {
      simpleRows.push({
        label: humanizeKey(key),
        value: formatUnknownValue(value),
        monospace: typeof value === "string" && copyKeyPattern.test(key),
        copyValue: getCopyValue(key, value)
      });
      continue;
    }

    complexRows.push([key, value]);
  }

  return { simpleRows, complexRows };
}

function renderRawBlocks(rows: Array<[string, unknown]>) {
  if (rows.length === 0) {
    return null;
  }

  return (
    <DbSurface title="Raw Blocks" anchorId="raw-blocks" meta={`${rows.length} blocks`}>
      <div className="space-y-5">
        {rows.map(([key, value]) => (
          <CollapsibleTextBlock
            key={key}
            title={`${humanizeKey(key)} (Raw/source content)`}
            value={JSON.stringify(value, null, 2)}
            language="json"
            copyValue={JSON.stringify(value, null, 2)}
          />
        ))}
      </div>
    </DbSurface>
  );
}

function renderSummaryRows(rows: DbDisplayRow[]) {
  if (rows.length === 0) {
    return null;
  }

  return (
    <dl className="database-summary-list mt-5">
      {rows.map((row) => (
        <div key={row.label} className="space-y-1.5 py-2.5 first:pt-0 last:pb-0">
          <div className="flex items-start justify-between gap-3">
            <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--database-dim)]">{row.label}</dt>
            {row.copyValue ? <CopyValueButton value={row.copyValue} className="shrink-0" /> : null}
          </div>
          <dd className={row.monospace ? "break-all font-mono text-xs text-[var(--database-accent-soft)]" : "text-sm leading-5 text-[var(--database-ink)]"}>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function renderInlineFacts(rows: DbDisplayRow[]) {
  if (rows.length === 0) {
    return null;
  }

  return (
    <dl className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
      {rows.map((row) => (
        <div key={row.label} className="database-inline-fact rounded-[1rem] px-3 py-3">
          <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--database-dim)]">{row.label}</dt>
          <dd className={row.monospace ? "mt-1.5 break-all font-mono text-xs text-[var(--database-accent-soft)]" : "mt-1.5 text-sm leading-5 text-[var(--database-ink)]"}>
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function renderSourceActions(detail: DbEntityDetail) {
  const hasActions =
    typeof detail.prefab === "string" ||
    (detail.guid !== null && detail.guid !== undefined) ||
    typeof detail.sourcePath === "string" ||
    (detail.prefabPath && typeof detail.prefabPath === "string");

  if (!hasActions) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {typeof detail.prefab === "string" ? <CopyValueButton value={detail.prefab} label="Copy prefab" /> : null}
      {detail.guid !== null && detail.guid !== undefined ? <CopyValueButton value={String(detail.guid)} label="Copy GUID" /> : null}
      {typeof detail.sourcePath === "string" ? <CopyValueButton value={detail.sourcePath} label="Copy source" /> : null}
      {detail.prefabPath && typeof detail.prefabPath === "string" ? (
        <Link
          to={detail.prefabPath}
          className="database-action-quiet inline-flex rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em]"
        >
          Open Prefab Source
        </Link>
      ) : null}
    </div>
  );
}

function renderHero(section: DbSection, detail: DbEntityDetail, factRows: DbDisplayRow[]) {
  const categories = Array.isArray(detail.categories) ? detail.categories.filter((value): value is string => typeof value === "string" && value.length > 0) : [];
  const eyebrow = hasDbSchema(section) ? dbSchemas[section].eyebrow : `${humanizeKey(section)} Archive`;
  const subtitle = typeof detail.subtitle === "string" ? detail.subtitle : typeof detail.prefab === "string" ? detail.prefab : undefined;
  const { text: bodyCopy } = getHeroBodyCopy(section, detail);
  const detailIcon = typeof detail.icon === "string" ? detail.icon : undefined;
  const inlineFactRows = factRows.slice(0, 4);
  const summaryFactRows = factRows.slice(4);
  const showSummaryRail = summaryFactRows.length > 0;
  const visibleCategories = categories.slice(0, 3);
  const extraCategoryCount = Math.max(0, categories.length - visibleCategories.length);

  return (
    <section className="database-panel overflow-hidden rounded-[1.35rem] p-5 sm:p-6">
      <div className={`grid gap-5 ${showSummaryRail ? "xl:grid-cols-[minmax(0,1fr)_minmax(17rem,19rem)] xl:items-start" : ""}`}>
        <div className="min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--database-ember)]">{eyebrow}</p>
              <h1 className="mt-3 text-[2rem] font-semibold leading-tight text-[var(--database-ink)] sm:text-[2.45rem]">{detail.title}</h1>
              {subtitle ? <p className="mt-2 break-all font-mono text-[11px] text-[var(--database-dim)] sm:text-xs">{subtitle}</p> : null}
              {bodyCopy ? <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--database-muted)] sm:text-[0.98rem]">{String(bodyCopy)}</p> : null}
            </div>
            {detailIcon && !showSummaryRail ? (
              <DbIconAvatar
                title={detail.title}
                icon={detailIcon}
                className="hidden h-16 w-16 rounded-[1.15rem] xl:flex"
                monogramClassName="text-base"
              />
            ) : null}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {detail.tier ? <DbBadge tone="accent">{detail.tier}</DbBadge> : null}
            {visibleCategories.map((category) => (
              <DbBadge key={category} tone="muted">
                {category}
              </DbBadge>
            ))}
            {extraCategoryCount > 0 ? <DbBadge tone="muted">{`+${extraCategoryCount}`}</DbBadge> : null}
          </div>

          {renderInlineFacts(inlineFactRows)}
        </div>
        {showSummaryRail ? (
          <aside className="database-summary-capsule rounded-[1.35rem] p-4 sm:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--database-dim)]">Quick Facts</div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--database-accent-soft)]">{humanizeKey(section)}</div>
              </div>
              {detailIcon ? (
                <DbIconAvatar
                  title={detail.title}
                  icon={detailIcon}
                  className="h-14 w-14 rounded-[1rem]"
                  monogramClassName="text-sm"
                />
              ) : null}
            </div>

            {renderSummaryRows(summaryFactRows)}
          </aside>
        ) : null}
      </div>
    </section>
  );
}

function buildSchemaJumpItems(
  schemaRelationSections: Array<{ key: string; title: string }>,
  detail: DbEntityDetail,
  playerRows: DbDisplayRow[],
  detailRows: DbDisplayRow[],
  usageRows: DbDisplayRow[],
  genericFieldRows: DbDisplayRow[],
  genericSections: Array<{ title: string; rows: Record<string, unknown> }>,
  sourceRows: DbDisplayRow[],
  additionalRows: DbDisplayRow[],
  complexRows: Array<[string, unknown]>
): DetailJumpItem[] {
  const items: DetailJumpItem[] = [];

  if (playerRows.length > 0) {
    items.push({ id: "player-context", label: "Player Context" });
  }

  for (const relation of schemaRelationSections) {
    const value = detail[relation.key];
    if (isRelatedEntityList(value) && value.length > 0) {
      items.push({ id: `relation-${headingId(relation.title)}`, label: relation.title, meta: `${value.length}` });
    }
  }

  if (usageRows.length > 0) {
    items.push({ id: "usage-links", label: "Usage & Links" });
  }
  if (detailRows.length > 0) {
    items.push({ id: "record-details", label: "Record Details" });
  }
  if (genericFieldRows.length > 0) {
    items.push({ id: "mapped-fields", label: "Mapped Fields" });
  }
  for (const section of genericSections) {
    items.push({ id: `section-${headingId(section.title)}`, label: section.title });
  }
  if (sourceRows.length > 0) {
    items.push({ id: "source-provenance", label: "Source & Provenance" });
  }
  if (additionalRows.length > 0) {
    items.push({ id: "additional-fields", label: "Additional Fields" });
  }
  if (complexRows.length > 0) {
    items.push({ id: "raw-blocks", label: "Raw Blocks", meta: `${complexRows.length}` });
  }

  return items;
}

function renderSchemaDetail(section: DbSection, detail: DbEntityDetail) {
  if (!hasDbSchema(section)) {
    return null;
  }

  const schema = dbSchemas[section];
  const factRows = buildRowsFromSpecs(detail, schema.factFields);
  const { key: heroBodyKey } = getHeroBodyCopy(section, detail);
  const playerRows = buildRowsFromSpecs(detail, schema.playerFields ?? []).filter((row) => row.key !== heroBodyKey);
  const detailRows = buildRowsFromSpecs(detail, schema.detailFields ?? []).filter((row) => row.key !== heroBodyKey);
  const usageRows = buildRowsFromSpecs(detail, schema.usageFields ?? []);
  const provenanceRows = buildRowsFromSpecs(detail, schema.provenanceFields ?? []);
  const technicalRows = buildRowsFromSpecs(detail, schema.technicalFields);
  const usedKeys = new Set<string>([
    ...hiddenKeys,
    ...schema.factFields.map((field) => field.key),
    ...(schema.detailFields ?? []).map((field) => field.key),
    ...(schema.playerFields ?? []).map((field) => field.key),
    ...(schema.usageFields ?? []).map((field) => field.key),
    ...(schema.provenanceFields ?? []).map((field) => field.key),
    ...schema.technicalFields.map((field) => field.key),
    ...schema.relationSections.map((relation) => relation.key),
    "fields",
    "sections"
  ]);
  const genericRows = buildGenericRows(detail, usedKeys);
  const genericFieldRows = detail.fields && isRecord(detail.fields) ? buildRowsFromRecord(detail.fields) : [];
  const genericSections = Array.isArray(detail.sections) ? detail.sections.filter((entry) => entry && typeof entry.title === "string" && isRecord(entry.rows)) : [];
  const sourceRows = [...provenanceRows, ...technicalRows];
  const jumpItems = buildSchemaJumpItems(
    schema.relationSections,
    detail,
    playerRows,
    detailRows,
    usageRows,
    genericFieldRows,
    genericSections,
    sourceRows,
    genericRows.simpleRows,
    genericRows.complexRows
  );

  return (
    <div className="space-y-5">
      {renderHero(section, detail, factRows)}
      <DetailJumpStrip items={jumpItems} />

      <div className="space-y-5">
        {playerRows.length > 0 ? (
          <DbSurface title={schema.playerSectionTitle ?? "Player Context"} anchorId="player-context">
            <DbFieldGrid rows={playerRows} />
          </DbSurface>
        ) : null}

        {schema.relationSections.map((relation) => {
          const value = detail[relation.key];
          if (!isRelatedEntityList(value) || value.length === 0) {
            return null;
          }

          return (
            <DbSurface key={relation.key} title={relation.title} anchorId={`relation-${headingId(relation.title)}`} meta={`${value.length} linked`}>
              <DbReferenceList items={value} emptyLabel={relation.emptyLabel} />
            </DbSurface>
          );
        })}

        {usageRows.length > 0 ? (
          <DbSurface title={schema.usageSectionTitle ?? "Usage & Links"} anchorId="usage-links">
            <DbFieldGrid rows={usageRows} />
          </DbSurface>
        ) : null}

        {detailRows.length > 0 ? (
          <DbSurface title={schema.detailSectionTitle ?? "Record Details"} anchorId="record-details">
            <DbFieldGrid rows={detailRows} />
          </DbSurface>
        ) : null}

        {genericFieldRows.length > 0 ? (
          <DbSurface title="Mapped Fields" anchorId="mapped-fields">
            <DbFieldGrid rows={genericFieldRows} />
          </DbSurface>
        ) : null}

        {genericSections.map((entry) => (
          <DbSurface key={entry.title} title={entry.title} anchorId={`section-${headingId(entry.title)}`}>
            <DbFieldGrid rows={buildRowsFromRecord(entry.rows)} />
          </DbSurface>
        ))}

        {sourceRows.length > 0 ? (
          <DbSurface title={schema.provenanceSectionTitle ?? "Source & Provenance"} anchorId="source-provenance">
            <div className="space-y-4">
              {renderSourceActions(detail)}
              <DbFieldGrid rows={sourceRows} />
            </div>
          </DbSurface>
        ) : null}

        {genericRows.simpleRows.length > 0 ? (
          <DbSurface title="Additional Fields" anchorId="additional-fields">
            <DbFieldGrid rows={genericRows.simpleRows} />
          </DbSurface>
        ) : null}

        {renderRawBlocks(genericRows.complexRows)}
      </div>
    </div>
  );
}

function renderGenericDetail(detail: DbEntityDetail, section: DbSection) {
  const fieldsRows = detail.fields && isRecord(detail.fields) ? buildRowsFromRecord(detail.fields) : [];
  const sections = Array.isArray(detail.sections) ? detail.sections.filter((entry) => entry && typeof entry.title === "string" && isRecord(entry.rows)) : [];
  const usedKeys = new Set<string>([...hiddenKeys, "fields", "sections"]);
  const genericRows = buildGenericRows(detail, usedKeys);
  const jumpItems: DetailJumpItem[] = [];

  if (fieldsRows.length > 0) {
    jumpItems.push({ id: "details", label: "Details" });
  }
  for (const entry of sections) {
    jumpItems.push({ id: `section-${headingId(entry.title)}`, label: entry.title });
  }
  if (genericRows.simpleRows.length > 0) {
    jumpItems.push({ id: "additional-fields", label: "Additional Fields" });
  }
  if (genericRows.complexRows.length > 0) {
    jumpItems.push({ id: "raw-blocks", label: "Raw Blocks", meta: `${genericRows.complexRows.length}` });
  }

  return (
    <div className="space-y-5">
      {renderHero(section, detail, [])}
      <DetailJumpStrip items={jumpItems} />
      {fieldsRows.length > 0 ? (
        <DbSurface title="Details" anchorId="details">
          <DbFieldGrid rows={fieldsRows} />
        </DbSurface>
      ) : null}
      {sections.map((entry) => (
        <DbSurface key={entry.title} title={entry.title} anchorId={`section-${headingId(entry.title)}`}>
          <DbFieldGrid rows={buildRowsFromRecord(entry.rows)} />
        </DbSurface>
      ))}
      {genericRows.simpleRows.length > 0 ? (
        <DbSurface title="Additional Fields" anchorId="additional-fields">
          <DbFieldGrid rows={genericRows.simpleRows} />
        </DbSurface>
      ) : null}
      {renderRawBlocks(genericRows.complexRows)}
    </div>
  );
}

export function DbDetailView({ detail, section }: { detail: DbEntityDetail; section: DbSection }) {
  return hasDbSchema(section) ? renderSchemaDetail(section, detail) : renderGenericDetail(detail, section);
}
