import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { DbSection } from "../../config/sections";
import { DbEntityDetail, DbRelatedEntityRef } from "../../types/db";
import { DbBadge, DbDisplayRow, DbFieldGrid, DbReferenceList, DbStatGrid, DbSurface } from "./DbCards";
import { DbFieldSpec, dbSchemas, hasDbSchema } from "./dbSchemas";

const hiddenKeys = new Set(["slug", "title", "summary", "categories", "tier", "tags", "prefabPath"]);

function joinClasses(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

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

function getMonogram(value: string): string {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
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
      monospace: spec.format === "code" ? true : undefined
    });
  }

  return rows;
}

function buildRowsFromRecord(record: Record<string, unknown>): DbDisplayRow[] {
  return Object.entries(record)
    .filter(([, value]) => value !== null && value !== undefined && value !== "")
    .map(([key, value]) => ({
      label: humanizeKey(key),
      value: formatUnknownValue(value)
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
      simpleRows.push({ label: humanizeKey(key), value: formatUnknownValue(value) });
      continue;
    }

    if (!Array.isArray(value) && typeof value !== "object") {
      simpleRows.push({ label: humanizeKey(key), value: formatUnknownValue(value) });
      continue;
    }

    complexRows.push([key, value]);
  }

  return { simpleRows, complexRows };
}

function renderComplexBlocks(rows: Array<[string, unknown]>) {
  return rows.map(([key, value]) => (
    <DbSurface key={key} title={humanizeKey(key)}>
      <pre className="overflow-auto rounded-xl bg-slate-950/70 p-3 text-xs text-slate-200">{JSON.stringify(value, null, 2)}</pre>
    </DbSurface>
  ));
}

function renderHero(section: DbSection, detail: DbEntityDetail, factRows: DbDisplayRow[]) {
  const categories = Array.isArray(detail.categories) ? detail.categories.filter((value): value is string => typeof value === "string" && value.length > 0) : [];
  const iconToken = detail.icon && typeof detail.icon === "string" ? detail.icon.slice(0, 2).toUpperCase() : getMonogram(detail.title);
  const eyebrow = hasDbSchema(section) ? dbSchemas[section].eyebrow : `${humanizeKey(section)} Archive`;

  return (
    <section className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 p-5 shadow-xl shadow-emerald-950/10">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/80">{eyebrow}</p>
          {detail.summary ? <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{String(detail.summary)}</p> : null}
          <div className="mt-4 flex flex-wrap gap-2">
            {detail.tier ? <DbBadge tone="accent">{detail.tier}</DbBadge> : null}
            {categories.map((category) => (
              <DbBadge key={category} tone="muted">
                {category}
              </DbBadge>
            ))}
          </div>
          {detail.prefabPath && typeof detail.prefabPath === "string" ? (
            <Link
              to={detail.prefabPath}
              className="mt-4 inline-flex rounded-full border border-emerald-400/20 bg-slate-950/50 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-emerald-200"
            >
              Open Prefab Source
            </Link>
          ) : null}
        </div>
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-emerald-400/20 bg-slate-950/60 text-xl font-semibold tracking-[0.2em] text-emerald-200">
          {iconToken}
        </div>
      </div>
      {factRows.length > 0 ? <div className="mt-6"><DbStatGrid rows={factRows} /></div> : null}
    </section>
  );
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

  return (
    <div className="space-y-5">
      {renderHero(section, detail, factRows)}
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
        <div className="space-y-5">
          {schema.relationSections.map((relation) => {
            const value = detail[relation.key];
            if (!isRelatedEntityList(value) || value.length === 0) {
              return null;
            }

            return (
              <DbSurface key={relation.key} title={relation.title}>
                <DbReferenceList items={value} emptyLabel={relation.emptyLabel} />
              </DbSurface>
            );
          })}
          {detailRows.length > 0 ? (
            <DbSurface title="Record Details">
              <DbFieldGrid rows={detailRows} />
            </DbSurface>
          ) : null}
          {genericFieldRows.length > 0 ? (
            <DbSurface title="Mapped Fields">
              <DbFieldGrid rows={genericFieldRows} />
            </DbSurface>
          ) : null}
          {genericSections.map((entry) => (
            <DbSurface key={entry.title} title={entry.title}>
              <DbFieldGrid rows={buildRowsFromRecord(entry.rows)} />
            </DbSurface>
          ))}
        </div>
        <div className="space-y-5">
          {technicalRows.length > 0 ? (
            <DbSurface title="Source Data">
              <DbFieldGrid rows={technicalRows} />
            </DbSurface>
          ) : null}
          {genericRows.simpleRows.length > 0 ? (
            <DbSurface title="Additional Fields">
              <DbFieldGrid rows={genericRows.simpleRows} />
            </DbSurface>
          ) : null}
          {renderComplexBlocks(genericRows.complexRows)}
        </div>
      </div>
    </div>
  );
}

function renderGenericDetail(detail: DbEntityDetail, section: DbSection) {
  const fieldsRows = detail.fields && isRecord(detail.fields) ? buildRowsFromRecord(detail.fields) : [];
  const sections = Array.isArray(detail.sections) ? detail.sections.filter((entry) => entry && typeof entry.title === "string" && isRecord(entry.rows)) : [];
  const usedKeys = new Set<string>([...hiddenKeys, "fields", "sections"]);
  const genericRows = buildGenericRows(detail, usedKeys);

  return (
    <div className="space-y-5">
      {renderHero(section, detail, [])}
      {fieldsRows.length > 0 ? (
        <DbSurface title="Details">
          <DbFieldGrid rows={fieldsRows} />
        </DbSurface>
      ) : null}
      {sections.map((entry) => (
        <DbSurface key={entry.title} title={entry.title}>
          <DbFieldGrid rows={buildRowsFromRecord(entry.rows)} />
        </DbSurface>
      ))}
      {genericRows.simpleRows.length > 0 ? (
        <DbSurface title="Additional Fields">
          <DbFieldGrid rows={genericRows.simpleRows} />
        </DbSurface>
      ) : null}
      {renderComplexBlocks(genericRows.complexRows)}
    </div>
  );
}

export function DbDetailView({ detail, section }: { detail: DbEntityDetail; section: DbSection }) {
  return hasDbSchema(section) ? renderSchemaDetail(section, detail) : renderGenericDetail(detail, section);
}
