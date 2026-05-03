import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

type JsonRecord = Record<string, unknown>;

export interface SummarizeServerComponentSpotCheckOptions {
  artifactPath: string;
  snapshotRoot?: string;
  componentName?: string;
}

export interface WriteServerComponentSpotCheckSummaryOptions extends SummarizeServerComponentSpotCheckOptions {
  outDir: string;
}

export interface CountEntry {
  name: string;
  count: number;
}

export interface FieldSummary {
  present: number;
  nonDefault: number;
  distinct: number;
  topValues: CountEntry[];
}

export interface ServerComponentSpotCheckEvidence {
  key: string;
  source: {
    artifactPath: string;
    snapshotRoot?: string;
  };
  entity: {
    entityIndex: number | null;
    prefabGuid: number | null;
    prefabName?: string;
    prefabPrefix: string;
    prefabFamily: string;
  };
  component: {
    name: string;
    matchedTypes: string[];
  };
  rawFields: unknown;
  patterns: {
    sameRunIndexMatch: "abilityGroup" | "item" | "npc" | "unmatched";
    prefabPrefix: string;
    prefabFamily: string;
  };
  quality: {
    captureStatus: string;
    projectionMode: "raw-json";
    interpretationStatus: "raw-unverified";
  };
}

export interface ServerComponentSpotCheckSummary {
  componentName: string;
  source: {
    artifactPath: string;
    snapshotRoot?: string;
  };
  rowCount: number;
  capturedRowCount: number;
  missingComponentRowCount: number;
  captureStatuses: Record<string, number>;
  matchedComponentTypes: CountEntry[];
  fieldCoverage: Record<string, FieldSummary>;
  parameterFieldCoverage: Record<string, FieldSummary>;
  materialModifierCoverage: Record<string, FieldSummary>;
  prefabPrefixes: CountEntry[];
  prefabFamilies: CountEntry[];
  sameRunMatches: {
    abilityGroup: number;
    item: number;
    npc: number;
    unmatched: number;
  };
  rawProjectionNotes: string[];
  evidence: ServerComponentSpotCheckEvidence[];
}

interface SpotCheckRow {
  EntityIndex?: unknown;
  PrefabGuid?: unknown;
  PrefabName?: unknown;
  MatchedComponentTypes?: unknown;
  CaptureStatus?: unknown;
  CapturedComponents?: unknown;
}

interface SameRunIndexes {
  abilityGroupIds: Set<string>;
  itemIds: Set<string>;
  npcIds: Set<string>;
}

const defaultComponentName = "DealDamageOnGameplayEvent";
const encodedCandidateFields = new Set(["DealDamageFlags", "MainType"]);

function isRecord(value: unknown): value is JsonRecord {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function toStringValue(value: unknown): string | undefined {
  if (typeof value === "string" && value.trim()) {
    return value.trim();
  }
  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value);
  }
  return undefined;
}

function toNumberValue(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  if (typeof value === "string" && /^-?\d+$/.test(value.trim())) {
    return Number(value);
  }
  return null;
}

function readArray(value: unknown, label: string): JsonRecord[] {
  if (!Array.isArray(value)) {
    throw new Error(`${label} must be a JSON array`);
  }

  return value.filter(isRecord);
}

async function readJsonArray(filePath: string, label: string): Promise<JsonRecord[]> {
  const raw = await readFile(filePath, "utf8");
  return readArray(JSON.parse(raw), label);
}

async function tryReadJsonArray(filePath: string): Promise<JsonRecord[]> {
  try {
    return await readJsonArray(filePath, filePath);
  } catch {
    return [];
  }
}

function increment(counts: Map<string, number>, rawName: unknown, fallback = "<missing>") {
  const name = toStringValue(rawName) ?? fallback;
  counts.set(name, (counts.get(name) ?? 0) + 1);
}

function sortedCounts(counts: Map<string, number>, limit?: number): CountEntry[] {
  const entries = [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((left, right) => right.count - left.count || left.name.localeCompare(right.name));

  return typeof limit === "number" ? entries.slice(0, limit) : entries;
}

function prefabPrefix(prefabName: string | undefined): string {
  return prefabName?.match(/^([^_]+)/)?.[1] ?? "<missing>";
}

function prefabFamily(prefabName: string | undefined): string {
  const parts = prefabName?.split("_").filter(Boolean) ?? [];
  if (parts.length >= 2) {
    return `${parts[0]}_${parts[1]}`;
  }
  return parts[0] ?? "<missing>";
}

function isDefaultValue(value: unknown): boolean {
  return (
    value === undefined ||
    value === null ||
    value === false ||
    value === 0 ||
    value === "0" ||
    value === "" ||
    value === "False"
  );
}

function valueLabel(value: unknown): string {
  if (value === undefined) {
    return "<missing>";
  }
  if (value === null) {
    return "<null>";
  }
  if (isRecord(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  return String(value);
}

function summarizeFieldValues(values: unknown[]): FieldSummary {
  const counts = new Map<string, number>();
  let present = 0;
  let nonDefault = 0;

  for (const value of values) {
    if (value !== undefined) {
      present += 1;
    }
    if (!isDefaultValue(value)) {
      nonDefault += 1;
    }
    increment(counts, valueLabel(value));
  }

  return {
    present,
    nonDefault,
    distinct: counts.size,
    topValues: sortedCounts(counts, 8)
  };
}

function readComponentPayload(row: SpotCheckRow, componentName: string): JsonRecord | undefined {
  if (!isRecord(row.CapturedComponents)) {
    return undefined;
  }

  const direct = row.CapturedComponents[componentName];
  return isRecord(direct) ? direct : undefined;
}

function readParameters(payload: JsonRecord | undefined): JsonRecord | undefined {
  return isRecord(payload?.Parameters) ? payload.Parameters : undefined;
}

function readMatchedTypes(row: SpotCheckRow): string[] {
  return Array.isArray(row.MatchedComponentTypes)
    ? row.MatchedComponentTypes.map(toStringValue).filter((value): value is string => Boolean(value))
    : [];
}

function getSameRunMatch(prefabGuid: number | null, indexes: SameRunIndexes): "abilityGroup" | "item" | "npc" | "unmatched" {
  const key = prefabGuid === null ? "" : String(prefabGuid);
  if (indexes.abilityGroupIds.has(key)) {
    return "abilityGroup";
  }
  if (indexes.itemIds.has(key)) {
    return "item";
  }
  if (indexes.npcIds.has(key)) {
    return "npc";
  }
  return "unmatched";
}

function buildIndexes(abilityGroups: JsonRecord[], items: JsonRecord[], npcs: JsonRecord[]): SameRunIndexes {
  return {
    abilityGroupIds: new Set(abilityGroups.map((row) => toStringValue(row.AbilityGroupId)).filter((value): value is string => Boolean(value))),
    itemIds: new Set(items.map((row) => toStringValue(row.ItemId)).filter((value): value is string => Boolean(value))),
    npcIds: new Set(npcs.map((row) => toStringValue(row.NpcId)).filter((value): value is string => Boolean(value)))
  };
}

function findRawProjectionNotes(
  parameterValuesByField: Map<string, unknown[]>,
  materialValuesByField: Map<string, unknown[]>
): string[] {
  const notes = new Set<string>();

  for (const fieldName of encodedCandidateFields) {
    const values = parameterValuesByField.get(fieldName) ?? [];
    const encodedCount = values.filter((value) => {
      const text = toStringValue(value);
      return Boolean(text && /^-?\d{7,}$/.test(text));
    }).length;
    if (encodedCount > 0) {
      notes.add(`${fieldName} has ${encodedCount} encoded-looking numeric values; preserve raw values until enum/bitfield interpretation is verified.`);
    }
  }

  for (const [fieldName, values] of materialValuesByField.entries()) {
    const oddCount = values.filter((value) => {
      const numeric = typeof value === "number" ? value : Number(toStringValue(value));
      return Number.isFinite(numeric) && (Math.abs(numeric) > 1000000 || (numeric > 0 && numeric < 0.000001));
    }).length;
    if (oddCount > 0) {
      notes.add(`${fieldName} material modifiers include ${oddCount} odd raw numeric values; treat material data as raw-unverified.`);
    }
  }

  return [...notes].sort((left, right) => left.localeCompare(right));
}

async function loadSameRunIndexes(snapshotRoot: string | undefined): Promise<SameRunIndexes> {
  if (!snapshotRoot) {
    return buildIndexes([], [], []);
  }

  const [abilityGroups, items, npcs] = await Promise.all([
    tryReadJsonArray(path.join(snapshotRoot, "AbilityGroupsServer.json")),
    tryReadJsonArray(path.join(snapshotRoot, "ItemsServer.json")),
    tryReadJsonArray(path.join(snapshotRoot, "NpcsServer.json"))
  ]);

  return buildIndexes(abilityGroups, items, npcs);
}

export async function summarizeServerComponentSpotCheck(
  options: SummarizeServerComponentSpotCheckOptions
): Promise<ServerComponentSpotCheckSummary> {
  const componentName = options.componentName ?? defaultComponentName;
  const rows = (await readJsonArray(options.artifactPath, options.artifactPath)) as SpotCheckRow[];
  const indexes = await loadSameRunIndexes(options.snapshotRoot);
  const captureStatusCounts = new Map<string, number>();
  const matchedTypeCounts = new Map<string, number>();
  const prefixCounts = new Map<string, number>();
  const familyCounts = new Map<string, number>();
  const fieldValues = new Map<string, unknown[]>();
  const parameterValues = new Map<string, unknown[]>();
  const materialValues = new Map<string, unknown[]>();
  const sameRunMatches = {
    abilityGroup: 0,
    item: 0,
    npc: 0,
    unmatched: 0
  };
  const evidence: ServerComponentSpotCheckEvidence[] = [];
  let capturedRowCount = 0;
  let missingComponentRowCount = 0;

  for (const row of rows) {
    const captureStatus = toStringValue(row.CaptureStatus) ?? "<missing>";
    increment(captureStatusCounts, captureStatus);

    for (const matchedType of readMatchedTypes(row)) {
      increment(matchedTypeCounts, matchedType);
    }

    const prefabName = toStringValue(row.PrefabName);
    const prefix = prefabPrefix(prefabName);
    const family = prefabFamily(prefabName);
    increment(prefixCounts, prefix);
    increment(familyCounts, family);

    const prefabGuid = toNumberValue(row.PrefabGuid);
    const sameRunMatch = getSameRunMatch(prefabGuid, indexes);
    sameRunMatches[sameRunMatch] += 1;

    const payload = readComponentPayload(row, componentName);
    if (!payload) {
      missingComponentRowCount += 1;
      continue;
    }

    capturedRowCount += 1;
    for (const [fieldName, fieldValue] of Object.entries(payload)) {
      if (!fieldValues.has(fieldName)) {
        fieldValues.set(fieldName, []);
      }
      fieldValues.get(fieldName)?.push(fieldValue);
    }

    const parameters = readParameters(payload);
    if (parameters) {
      for (const [fieldName, fieldValue] of Object.entries(parameters)) {
        if (!parameterValues.has(fieldName)) {
          parameterValues.set(fieldName, []);
        }
        parameterValues.get(fieldName)?.push(fieldValue);
      }

      if (isRecord(parameters.MaterialModifiers)) {
        for (const [fieldName, fieldValue] of Object.entries(parameters.MaterialModifiers)) {
          if (!materialValues.has(fieldName)) {
            materialValues.set(fieldName, []);
          }
          materialValues.get(fieldName)?.push(fieldValue);
        }
      }
    }

    evidence.push({
      key: `${componentName}:${prefabGuid ?? "unknown"}`,
      source: {
        artifactPath: options.artifactPath,
        ...(options.snapshotRoot ? { snapshotRoot: options.snapshotRoot } : {})
      },
      entity: {
        entityIndex: toNumberValue(row.EntityIndex),
        prefabGuid,
        ...(prefabName ? { prefabName } : {}),
        prefabPrefix: prefix,
        prefabFamily: family
      },
      component: {
        name: componentName,
        matchedTypes: readMatchedTypes(row)
      },
      rawFields: payload,
      patterns: {
        sameRunIndexMatch: sameRunMatch,
        prefabPrefix: prefix,
        prefabFamily: family
      },
      quality: {
        captureStatus,
        projectionMode: "raw-json",
        interpretationStatus: "raw-unverified"
      }
    });
  }

  return {
    componentName,
    source: {
      artifactPath: options.artifactPath,
      ...(options.snapshotRoot ? { snapshotRoot: options.snapshotRoot } : {})
    },
    rowCount: rows.length,
    capturedRowCount,
    missingComponentRowCount,
    captureStatuses: Object.fromEntries(sortedCounts(captureStatusCounts).map((entry) => [entry.name, entry.count])),
    matchedComponentTypes: sortedCounts(matchedTypeCounts),
    fieldCoverage: Object.fromEntries([...fieldValues.entries()].map(([name, values]) => [name, summarizeFieldValues(values)])),
    parameterFieldCoverage: Object.fromEntries([...parameterValues.entries()].map(([name, values]) => [name, summarizeFieldValues(values)])),
    materialModifierCoverage: Object.fromEntries([...materialValues.entries()].map(([name, values]) => [name, summarizeFieldValues(values)])),
    prefabPrefixes: sortedCounts(prefixCounts),
    prefabFamilies: sortedCounts(familyCounts, 50),
    sameRunMatches,
    rawProjectionNotes: findRawProjectionNotes(parameterValues, materialValues),
    evidence
  };
}

function formatCounts(entries: CountEntry[], limit = 12): string {
  return entries
    .slice(0, limit)
    .map((entry) => `- ${entry.name}: ${entry.count}`)
    .join("\n");
}

function formatFieldSummary(fields: Record<string, FieldSummary>, limit = 20): string {
  return Object.entries(fields)
    .sort(([left], [right]) => left.localeCompare(right))
    .slice(0, limit)
    .map(([name, summary]) => {
      const topValues = summary.topValues
        .slice(0, 5)
        .map((entry) => `${entry.name}=${entry.count}`)
        .join("; ");
      return `- ${name}: present ${summary.present}, non-default ${summary.nonDefault}, distinct ${summary.distinct}${topValues ? ` (${topValues})` : ""}`;
    })
    .join("\n");
}

function renderMarkdown(summary: ServerComponentSpotCheckSummary): string {
  const notes = summary.rawProjectionNotes.length > 0 ? summary.rawProjectionNotes.map((note) => `- ${note}`).join("\n") : "- None";

  return `# ${summary.componentName} Server Component Spot-Check

## Source

- Artifact: ${summary.source.artifactPath}
${summary.source.snapshotRoot ? `- Snapshot root: ${summary.source.snapshotRoot}\n` : ""}
## Coverage

- Rows: ${summary.rowCount}
- Captured rows: ${summary.capturedRowCount}
- Missing component rows: ${summary.missingComponentRowCount}

## Capture Statuses

${formatCounts(Object.entries(summary.captureStatuses).map(([name, count]) => ({ name, count })))}

## Component Fields

${formatFieldSummary(summary.fieldCoverage)}

## Parameter Fields

${formatFieldSummary(summary.parameterFieldCoverage)}

## Material Modifiers

${formatFieldSummary(summary.materialModifierCoverage)}

## Prefab Prefixes

${formatCounts(summary.prefabPrefixes)}

## Prefab Families

${formatCounts(summary.prefabFamilies)}

## Same-Run Index Matches

- Ability groups: ${summary.sameRunMatches.abilityGroup}
- Items: ${summary.sameRunMatches.item}
- NPCs: ${summary.sameRunMatches.npc}
- Unmatched: ${summary.sameRunMatches.unmatched}

## Raw Projection Notes

${notes}

## Downstream Shape

Keep this as an internal evidence sidecar keyed by \`${summary.componentName}:<prefabGuid>\`. Values are preserved as raw server ECS evidence with \`interpretationStatus: "raw-unverified"\`; no public DB fields are populated from this proof pass.
`;
}

export async function writeServerComponentSpotCheckSummary(
  options: WriteServerComponentSpotCheckSummaryOptions
): Promise<{ jsonPath: string; markdownPath: string; summary: ServerComponentSpotCheckSummary }> {
  const componentName = options.componentName ?? defaultComponentName;
  const summary = await summarizeServerComponentSpotCheck(options);
  await mkdir(options.outDir, { recursive: true });

  const jsonPath = path.join(options.outDir, `${componentName}.summary.json`);
  const markdownPath = path.join(options.outDir, `${componentName}.summary.md`);
  await Promise.all([
    writeFile(jsonPath, `${JSON.stringify(summary, null, 2)}\n`, "utf8"),
    writeFile(markdownPath, renderMarkdown(summary), "utf8")
  ]);

  return { jsonPath, markdownPath, summary };
}

function parseArgs(argv: string[]): WriteServerComponentSpotCheckSummaryOptions {
  const values = new Map<string, string>();
  for (let index = 0; index < argv.length; index += 1) {
    const raw = argv[index];
    if (!raw.startsWith("-")) {
      continue;
    }

    const key = raw.replace(/^-+/, "").toLowerCase();
    const value = argv[index + 1];
    if (!value || value.startsWith("-")) {
      throw new Error(`Missing value for ${raw}`);
    }
    values.set(key, value);
    index += 1;
  }

  const artifactPath = values.get("artifactpath");
  if (!artifactPath) {
    throw new Error("Missing required -ArtifactPath");
  }

  return {
    artifactPath,
    snapshotRoot: values.get("snapshotroot"),
    componentName: values.get("componentname") ?? defaultComponentName,
    outDir: values.get("outdir") ?? path.join(process.cwd(), ".codex-tmp", "server-component-spotcheck-summary")
  };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const outputs = await writeServerComponentSpotCheckSummary(options);
  console.log(`[server-component-spotcheck-summary] wrote ${outputs.jsonPath}`);
  console.log(`[server-component-spotcheck-summary] wrote ${outputs.markdownPath}`);
  console.log(
    `[server-component-spotcheck-summary] ${outputs.summary.componentName}: ${outputs.summary.capturedRowCount}/${outputs.summary.rowCount} rows captured`
  );
}

const invokedPath = process.argv[1] ? path.resolve(process.argv[1]) : "";
const currentPath = fileURLToPath(import.meta.url);
if (invokedPath === currentPath) {
  void main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
