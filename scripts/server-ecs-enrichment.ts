import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

type JsonRecord = Record<string, unknown>;

interface CountEntry {
  name: string;
  count: number;
}

interface FieldSummary {
  present: number;
  nonDefault: number;
  distinct: number;
  topValues: CountEntry[];
}

interface ServerComponentSpotCheckEvidence {
  key: string;
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
    sameRunIndexMatch: string;
    prefabPrefix: string;
    prefabFamily: string;
  };
  quality: {
    captureStatus: string;
    projectionMode: string;
    interpretationStatus: string;
  };
}

interface ServerComponentSpotCheckSummary {
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

export interface ServerEcsComponentEvidenceEntry {
  key: string;
  identity: {
    entityIndex: number | null;
    prefabGuid: number | null;
    prefabName?: string;
    prefabPrefix: string;
    prefabFamily: string;
  };
  patterns: {
    sameRunIndexMatch: string;
    prefabPrefix: string;
    prefabFamily: string;
  };
  quality: {
    captureStatus: string;
    projectionMode: string;
    interpretationStatus: "raw-unverified";
  };
  rawFields: unknown;
}

export interface ServerEcsComponentEvidence {
  schemaVersion: 1;
  source: {
    sourceKind: "extractor-server-ecs-spotcheck";
    componentName: string;
    artifactPath: string;
    snapshotRoot?: string;
  };
  coverage: {
    rowCount: number;
    capturedRowCount: number;
    missingComponentRowCount: number;
    captureStatuses: Record<string, number>;
    matchedComponentTypes: CountEntry[];
  };
  fieldCoverage: Record<string, FieldSummary>;
  parameterFieldCoverage: Record<string, FieldSummary>;
  materialModifierCoverage: Record<string, FieldSummary>;
  prefabPrefixes: CountEntry[];
  prefabFamilies: CountEntry[];
  sameRunMatches: ServerComponentSpotCheckSummary["sameRunMatches"];
  rawProjectionNotes: string[];
  entries: ServerEcsComponentEvidenceEntry[];
}

export interface WriteServerEcsComponentEvidenceOptions {
  summaryPath: string;
  outPath: string;
  allowAnyCount?: boolean;
}

const expectedComponentName = "DealDamageOnGameplayEvent";
const blockedEvidencePattern = /textVariableValues|tooltipTextEn|tooltip|lore|tutorial|journal|client-connect|tooltipprobe|client-only/i;

function isRecord(value: unknown): value is JsonRecord {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function readString(record: JsonRecord, key: string): string | undefined {
  const value = record[key];
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function assert(condition: boolean, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

async function readJson<T>(filePath: string): Promise<T> {
  return JSON.parse(await readFile(filePath, "utf8")) as T;
}

function sortEntries(left: ServerEcsComponentEvidenceEntry, right: ServerEcsComponentEvidenceEntry): number {
  const leftName = left.identity.prefabName ?? "";
  const rightName = right.identity.prefabName ?? "";
  return leftName.localeCompare(rightName) || (left.identity.prefabGuid ?? 0) - (right.identity.prefabGuid ?? 0);
}

function normalizeEntry(entry: ServerComponentSpotCheckEvidence): ServerEcsComponentEvidenceEntry {
  return {
    key: entry.key,
    identity: {
      entityIndex: entry.entity.entityIndex,
      prefabGuid: entry.entity.prefabGuid,
      ...(entry.entity.prefabName ? { prefabName: entry.entity.prefabName } : {}),
      prefabPrefix: entry.entity.prefabPrefix,
      prefabFamily: entry.entity.prefabFamily
    },
    patterns: {
      sameRunIndexMatch: entry.patterns.sameRunIndexMatch,
      prefabPrefix: entry.patterns.prefabPrefix,
      prefabFamily: entry.patterns.prefabFamily
    },
    quality: {
      captureStatus: entry.quality.captureStatus,
      projectionMode: entry.quality.projectionMode,
      interpretationStatus: "raw-unverified"
    },
    rawFields: entry.rawFields
  };
}

export function buildServerEcsComponentEvidence(summary: ServerComponentSpotCheckSummary): ServerEcsComponentEvidence {
  assert(summary.componentName === expectedComponentName, `Expected ${expectedComponentName}, found ${summary.componentName}`);

  const entries = summary.evidence.map(normalizeEntry).sort(sortEntries);
  const evidence: ServerEcsComponentEvidence = {
    schemaVersion: 1,
    source: {
      sourceKind: "extractor-server-ecs-spotcheck",
      componentName: summary.componentName,
      artifactPath: summary.source.artifactPath,
      ...(summary.source.snapshotRoot ? { snapshotRoot: summary.source.snapshotRoot } : {})
    },
    coverage: {
      rowCount: summary.rowCount,
      capturedRowCount: summary.capturedRowCount,
      missingComponentRowCount: summary.missingComponentRowCount,
      captureStatuses: summary.captureStatuses,
      matchedComponentTypes: summary.matchedComponentTypes
    },
    fieldCoverage: summary.fieldCoverage,
    parameterFieldCoverage: summary.parameterFieldCoverage,
    materialModifierCoverage: summary.materialModifierCoverage,
    prefabPrefixes: summary.prefabPrefixes,
    prefabFamilies: summary.prefabFamilies,
    sameRunMatches: summary.sameRunMatches,
    rawProjectionNotes: summary.rawProjectionNotes,
    entries
  };

  validateServerEcsComponentEvidence(evidence, { allowAnyCount: true });
  return evidence;
}

function inspectForBlockedEvidence(value: unknown, pathLabel = "$"): string | undefined {
  if (blockedEvidencePattern.test(pathLabel)) {
    return pathLabel;
  }

  if (typeof value === "string") {
    return blockedEvidencePattern.test(value) ? pathLabel : undefined;
  }

  if (Array.isArray(value)) {
    for (let index = 0; index < value.length; index += 1) {
      const blocked = inspectForBlockedEvidence(value[index], `${pathLabel}[${index}]`);
      if (blocked) {
        return blocked;
      }
    }
    return undefined;
  }

  if (isRecord(value)) {
    for (const [key, nested] of Object.entries(value)) {
      const blocked = inspectForBlockedEvidence(nested, `${pathLabel}.${key}`);
      if (blocked) {
        return blocked;
      }
    }
  }

  return undefined;
}

function rawDamageValueNonDefault(evidence: ServerEcsComponentEvidence): number {
  const rawDamageValue = evidence.parameterFieldCoverage.RawDamageValue;
  return rawDamageValue?.nonDefault ?? 0;
}

function rawDamagePercentNonDefault(evidence: ServerEcsComponentEvidence): number {
  const rawDamagePercent = evidence.parameterFieldCoverage.RawDamagePercent;
  return rawDamagePercent?.nonDefault ?? 0;
}

export function validateServerEcsComponentEvidence(
  evidence: unknown,
  options: { allowAnyCount?: boolean } = {}
): asserts evidence is ServerEcsComponentEvidence {
  assert(isRecord(evidence), "Server ECS evidence must be an object");
  assert(evidence.schemaVersion === 1, "Server ECS evidence schemaVersion must be 1");
  assert(isRecord(evidence.source), "Server ECS evidence is missing source");
  assert(evidence.source.sourceKind === "extractor-server-ecs-spotcheck", "Server ECS evidence sourceKind must be extractor-server-ecs-spotcheck");
  assert(readString(evidence.source, "componentName") === expectedComponentName, `Server ECS evidence component must be ${expectedComponentName}`);
  assert(isRecord(evidence.coverage), "Server ECS evidence is missing coverage");
  assert(Array.isArray(evidence.entries), "Server ECS evidence entries must be an array");

  const typedEvidence = evidence as unknown as ServerEcsComponentEvidence;
  if (!options.allowAnyCount) {
    assert(typedEvidence.coverage.rowCount === 1683, `Server ECS row count drifted: ${typedEvidence.coverage.rowCount}`);
    assert(typedEvidence.coverage.capturedRowCount === 1683, `Server ECS captured count drifted: ${typedEvidence.coverage.capturedRowCount}`);
    assert(typedEvidence.coverage.missingComponentRowCount === 0, `Server ECS missing component rows must be 0`);
    assert(typedEvidence.entries.length === 1683, `Server ECS entries length drifted: ${typedEvidence.entries.length}`);
  }

  assert(rawDamageValueNonDefault(typedEvidence) === 0, "RawDamageValue must remain all zero in this draft proof");
  assert(rawDamagePercentNonDefault(typedEvidence) > 0, "RawDamagePercent must have non-zero coverage in this draft proof");

  for (const entry of typedEvidence.entries) {
    assert(entry.quality?.interpretationStatus === "raw-unverified", `${entry.key}: interpretationStatus must be raw-unverified`);
  }

  const blockedPath = inspectForBlockedEvidence(typedEvidence);
  assert(!blockedPath, `Server ECS evidence contains client-gated or fabricated field at ${blockedPath}`);
}

export async function writeServerEcsComponentEvidence(options: WriteServerEcsComponentEvidenceOptions): Promise<ServerEcsComponentEvidence> {
  const summary = await readJson<ServerComponentSpotCheckSummary>(options.summaryPath);
  const evidence = buildServerEcsComponentEvidence(summary);
  validateServerEcsComponentEvidence(evidence, { allowAnyCount: options.allowAnyCount });
  await mkdir(path.dirname(options.outPath), { recursive: true });
  await writeFile(options.outPath, `${JSON.stringify(evidence, null, 2)}\n`, "utf8");
  return evidence;
}

function parseArgs(argv: string[]): WriteServerEcsComponentEvidenceOptions {
  const values = new Map<string, string>();
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (!arg.startsWith("-")) {
      continue;
    }

    const value = argv[index + 1];
    if (!value || value.startsWith("-")) {
      throw new Error(`Missing value for ${arg}`);
    }

    values.set(arg.replace(/^-+/, "").toLowerCase(), value);
    index += 1;
  }

  const summaryPath = values.get("summarypath");
  const outPath = values.get("outpath");
  if (!summaryPath) {
    throw new Error("Missing required -SummaryPath");
  }
  if (!outPath) {
    throw new Error("Missing required -OutPath");
  }

  return { summaryPath, outPath };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const evidence = await writeServerEcsComponentEvidence(options);
  console.log(`[server-ecs-enrichment] wrote ${options.outPath}`);
  console.log(`[server-ecs-enrichment] ${evidence.source.componentName}: ${evidence.coverage.capturedRowCount}/${evidence.coverage.rowCount} rows captured`);
}

const invokedPath = process.argv[1] ? path.resolve(process.argv[1]) : "";
if (invokedPath === fileURLToPath(import.meta.url)) {
  void main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
