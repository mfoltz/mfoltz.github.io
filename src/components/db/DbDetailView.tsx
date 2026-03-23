import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { DetailJumpItem, DetailJumpStrip } from "../common/DetailJumpStrip";
import { CollapsibleTextBlock } from "../common/CollapsibleTextBlock";
import { CopyValueButton } from "../common/CopyValueButton";
import { headingId } from "../../lib/text";
import { DbSection } from "../../config/sections";
import { DbEntityDetail, DbRelatedEntityRef } from "../../types/db";
import { DbBadge, DbDisplayRow, DbFieldGrid, DbIconAvatar, DbReferenceList, DbStatGrid, DbSurface } from "./DbCards";
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

function buildRowsFromSpecs(detail: DbEntityDetail, specs: DbFieldSpec[]): DbDisplayRow[] {
  const rows: DbDisplayRow[] = [];

  for (const spec of specs) {
    const value = detail[spec.key];
    if (value === null || value === undefined || value === "") {
      continue;
    }

    rows.push({
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
      label: humanizeKey(key),
      value: formatUnknownValue(value),
      monospace: typeof value === "string" && copyKeyPattern.test(key),
      copyValue: getCopyValue(key, value)
    }));
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

function renderHero(section: DbSection, detail: DbEntityDetail, factRows: DbDisplayRow[]) {
  const categories = Array.isArray(detail.categories) ? detail.categories.filter((value): value is string => typeof value === "string" && value.length > 0) : [];
  const eyebrow = hasDbSchema(section) ? dbSchemas[section].eyebrow : `${humanizeKey(section)} Archive`;
  const subtitle = typeof detail.subtitle === "string" ? detail.subtitle : typeof detail.prefab === "string" ? detail.prefab : undefined;
  const bodyCopy = typeof detail.description === "string" && detail.description.trim().length > 0 ? detail.description : detail.summary;

  return (
    <section className="overflow-hidden rounded-[1.75rem] border border-[rgba(223,223,214,0.08)] bg-[radial-gradient(circle_at_top_left,rgba(130,201,217,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(197,36,67,0.14),transparent_28%),linear-gradient(180deg,rgba(32,33,39,0.98),rgba(22,22,24,0.98))] p-5 shadow-[0_34px_90px_rgba(0,0,0,0.3)]">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--database-accent-soft)]">{eyebrow}</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-[var(--database-ink)] sm:text-[2.5rem]">{detail.title}</h1>
          {subtitle ? <p className="mt-2 break-all font-mono text-[11px] text-[var(--database-dim)] sm:text-xs">{subtitle}</p> : null}
          {bodyCopy ? <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--database-muted)] sm:text-base">{String(bodyCopy)}</p> : null}
          <div className="mt-5 flex flex-wrap gap-2">
            {detail.tier ? <DbBadge tone="accent">{detail.tier}</DbBadge> : null}
            {categories.map((category) => (
              <DbBadge key={category} tone="muted">
                {category}
              </DbBadge>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {typeof detail.prefab === "string" ? <CopyValueButton value={detail.prefab} label="Copy prefab" /> : null}
            {detail.guid !== null && detail.guid !== undefined ? <CopyValueButton value={String(detail.guid)} label="Copy GUID" /> : null}
            {typeof detail.sourcePath === "string" ? <CopyValueButton value={detail.sourcePath} label="Copy source" /> : null}
          </div>
          {detail.prefabPath && typeof detail.prefabPath === "string" ? (
            <Link
              to={detail.prefabPath}
              className="mt-4 inline-flex rounded-full border border-[rgba(130,201,217,0.18)] bg-[rgba(7,8,12,0.28)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--database-accent-soft)]"
            >
              Open Prefab Source
            </Link>
          ) : null}
        </div>
        <DbIconAvatar
          title={detail.title}
          icon={typeof detail.icon === "string" ? detail.icon : undefined}
          className="h-24 w-24 rounded-[1.35rem] lg:h-28 lg:w-28"
          monogramClassName="text-xl"
        />
      </div>
      {factRows.length > 0 ? (
        <div className="mt-6">
          <DbStatGrid rows={factRows} />
        </div>
      ) : null}
    </section>
  );
}

function buildSchemaJumpItems(
  schemaRelationSections: Array<{ key: string; title: string }>,
  detail: DbEntityDetail,
  detailRows: DbDisplayRow[],
  genericFieldRows: DbDisplayRow[],
  genericSections: Array<{ title: string; rows: Record<string, unknown> }>,
  technicalRows: DbDisplayRow[],
  additionalRows: DbDisplayRow[],
  complexRows: Array<[string, unknown]>
): DetailJumpItem[] {
  const items: DetailJumpItem[] = [];

  for (const relation of schemaRelationSections) {
    const value = detail[relation.key];
    if (isRelatedEntityList(value) && value.length > 0) {
      items.push({ id: `relation-${headingId(relation.title)}`, label: relation.title, meta: `${value.length}` });
    }
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
  if (technicalRows.length > 0) {
    items.push({ id: "source-data", label: "Source Data" });
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
  const detailRows = buildRowsFromSpecs(detail, schema.detailFields);
  const technicalRows = buildRowsFromSpecs(detail, schema.technicalFields);
  const usedKeys = new Set<string>([
    ...hiddenKeys,
    ...schema.factFields.map((field) => field.key),
    ...schema.detailFields.map((field) => field.key),
    ...schema.technicalFields.map((field) => field.key),
    ...schema.relationSections.map((relation) => relation.key),
    "fields",
    "sections"
  ]);
  const genericRows = buildGenericRows(detail, usedKeys);
  const genericFieldRows = detail.fields && isRecord(detail.fields) ? buildRowsFromRecord(detail.fields) : [];
  const genericSections = Array.isArray(detail.sections) ? detail.sections.filter((entry) => entry && typeof entry.title === "string" && isRecord(entry.rows)) : [];
  const jumpItems = buildSchemaJumpItems(schema.relationSections, detail, detailRows, genericFieldRows, genericSections, technicalRows, genericRows.simpleRows, genericRows.complexRows);

  return (
    <div className="space-y-5">
      {renderHero(section, detail, factRows)}
      <DetailJumpStrip items={jumpItems} />

      <div className="space-y-5">
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

        {detailRows.length > 0 ? (
          <DbSurface title="Record Details" anchorId="record-details">
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

        {technicalRows.length > 0 ? (
          <DbSurface title="Source Data" anchorId="source-data">
            <DbFieldGrid rows={technicalRows} />
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
