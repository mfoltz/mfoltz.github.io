import { readFile } from "node:fs/promises";
import {
  isTextVariableSourceKind,
  normalizeTextVariableName,
  type TextVariableResolution,
  type TextVariableResolutionMap,
  type TextVariableSourceKind
} from "../src/lib/textVariables";

type JsonRecord = Record<string, unknown>;

export interface TextVariableValueContext {
  byLocalizationGuid: Map<string, TextVariableResolutionMap>;
  byPrefab: Map<string, TextVariableResolutionMap>;
}

function emptyTextVariableValueContext(): TextVariableValueContext {
  return {
    byLocalizationGuid: new Map<string, TextVariableResolutionMap>(),
    byPrefab: new Map<string, TextVariableResolutionMap>()
  };
}

function isRecord(value: unknown): value is JsonRecord {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function readString(record: JsonRecord, keys: string[]): string | undefined {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
    if (typeof value === "number" && Number.isFinite(value)) {
      return String(value);
    }
  }
  return undefined;
}

function readRecord(record: JsonRecord, keys: string[]): JsonRecord | undefined {
  for (const key of keys) {
    const value = record[key];
    if (isRecord(value)) {
      return value;
    }
  }
  return undefined;
}

function normalizeText(value: string | undefined): string | undefined {
  const normalized = value?.trim();
  return normalized ? normalized : undefined;
}

function normalizeGuid(value: string | undefined): string | undefined {
  const normalized = normalizeText(value);
  return normalized && /^[0-9a-f-]{8,}$/i.test(normalized) ? normalized : undefined;
}

function normalizeSourceRef(value: string | undefined): string | undefined {
  return normalizeText(value)?.replace(/\\/g, "/");
}

function isTextVariableName(value: string): boolean {
  return /^[A-Za-z0-9_]+$/.test(value);
}

function readTextVariableValue(raw: unknown): string | undefined {
  if (typeof raw === "string" || typeof raw === "number") {
    return normalizeText(String(raw));
  }

  if (!isRecord(raw)) {
    return undefined;
  }

  return readTextVariableValue(raw.value ?? raw.displayValue ?? raw.text ?? raw.Text ?? raw.Value ?? raw.DisplayValue);
}

function getTextVariableSourceKind(raw: unknown, fallbackSourceKind: TextVariableSourceKind): TextVariableSourceKind | undefined {
  if (!isRecord(raw)) {
    return fallbackSourceKind;
  }

  const sourceKind = readString(raw, ["sourceKind", "SourceKind"]);
  if (!sourceKind) {
    return fallbackSourceKind;
  }

  return isTextVariableSourceKind(sourceKind) ? sourceKind : undefined;
}

function readTextVariableSourceRef(raw: unknown, fallbackSourceRef: string): string | undefined {
  if (!isRecord(raw)) {
    return fallbackSourceRef;
  }

  return normalizeSourceRef(readString(raw, ["sourceRef", "SourceRef", "source", "Source"]) ?? fallbackSourceRef);
}

function readTextVariableSourceGuid(raw: unknown, fallbackSourceGuid?: string): string | undefined {
  if (!isRecord(raw)) {
    return fallbackSourceGuid;
  }

  return normalizeGuid(readString(raw, ["sourceGuid", "SourceGuid", "localizationGuid", "LocalizationGuid", "guid", "Guid"])) ?? fallbackSourceGuid;
}

function readTextVariableSourcePrefab(raw: unknown, fallbackSourcePrefab?: string): string | undefined {
  if (!isRecord(raw)) {
    return fallbackSourcePrefab;
  }

  return normalizeText(readString(raw, ["sourcePrefab", "SourcePrefab", "prefab", "Prefab", "abilityPrefab", "AbilityPrefab", "itemPrefab", "ItemPrefab"])) ?? fallbackSourcePrefab;
}

function readTextVariableValuesContainer(raw: JsonRecord): unknown {
  return (
    raw.textVariableValues ??
    raw.TextVariableValues ??
    raw.variableValues ??
    raw.VariableValues ??
    raw.parameters ??
    raw.Parameters ??
    raw.params ??
    raw.Params ??
    raw.tokens ??
    raw.Tokens
  );
}

function normalizeTextVariableResolution(
  token: string,
  raw: unknown,
  fallbackSourceKind: TextVariableSourceKind,
  fallbackSourceRef: string,
  fallbackSourceGuid?: string,
  fallbackSourcePrefab?: string
): TextVariableResolution | undefined {
  if (!isTextVariableName(token)) {
    return undefined;
  }

  const value = readTextVariableValue(raw);
  const sourceKind = getTextVariableSourceKind(raw, fallbackSourceKind);
  const sourceRef = readTextVariableSourceRef(raw, fallbackSourceRef);
  if (!value || !sourceKind || !sourceRef) {
    return undefined;
  }

  return {
    value,
    sourceKind,
    sourceRef,
    ...(readTextVariableSourceGuid(raw, fallbackSourceGuid) ? { sourceGuid: readTextVariableSourceGuid(raw, fallbackSourceGuid) } : {}),
    ...(readTextVariableSourcePrefab(raw, fallbackSourcePrefab) ? { sourcePrefab: readTextVariableSourcePrefab(raw, fallbackSourcePrefab) } : {})
  };
}

function normalizeRawTextVariableValues(
  raw: unknown,
  fallbackSourceKind: TextVariableSourceKind,
  fallbackSourceRef: string,
  fallbackSourceGuid?: string,
  fallbackSourcePrefab?: string
): TextVariableResolutionMap | undefined {
  if (!isRecord(raw)) {
    return undefined;
  }

  const explicitContainer = readTextVariableValuesContainer(raw);
  const valueRecord = isRecord(explicitContainer) ? explicitContainer : raw;
  const values: TextVariableResolutionMap = {};
  for (const [token, rawValue] of Object.entries(valueRecord)) {
    if (!isTextVariableName(token)) {
      continue;
    }

    const resolution = normalizeTextVariableResolution(token, rawValue, fallbackSourceKind, fallbackSourceRef, fallbackSourceGuid, fallbackSourcePrefab);
    if (resolution) {
      values[token] = resolution;
    }
  }

  return Object.keys(values).length > 0
    ? Object.fromEntries(Object.entries(values).sort(([left], [right]) => normalizeTextVariableName(left).localeCompare(normalizeTextVariableName(right))))
    : undefined;
}

function mergeTextVariableValues(
  left: TextVariableResolutionMap | undefined,
  right: TextVariableResolutionMap | undefined,
  sourcePath: string
): TextVariableResolutionMap | undefined {
  const merged = { ...(left ?? {}) };
  for (const [token, incoming] of Object.entries(right ?? {})) {
    const existing = Object.entries(merged).find(([key]) => normalizeTextVariableName(key) === normalizeTextVariableName(token))?.[1];
    if (existing && existing.value !== incoming.value) {
      throw new Error(`Conflicting text-variable value for {${token}} (source: ${sourcePath})`);
    }
    merged[token] = incoming;
  }

  return Object.keys(merged).length > 0
    ? Object.fromEntries(Object.entries(merged).sort(([left], [right]) => normalizeTextVariableName(left).localeCompare(normalizeTextVariableName(right))))
    : undefined;
}

function addTextVariableValues(target: Map<string, TextVariableResolutionMap>, key: string | undefined, values: TextVariableResolutionMap | undefined, sourcePath: string): void {
  if (!key || !values) {
    return;
  }

  target.set(key, mergeTextVariableValues(target.get(key), values, sourcePath) ?? {});
}

function addTextVariableEntriesFromRecord(
  context: TextVariableValueContext,
  record: JsonRecord,
  fallbackSourceKind: TextVariableSourceKind,
  fallbackSourceRef: string
): void {
  const byLocalizationGuid = readRecord(record, ["byLocalizationGuid", "ByLocalizationGuid", "localizationGuidValues", "LocalizationGuidValues"]);
  if (byLocalizationGuid) {
    for (const [rawGuid, rawValues] of Object.entries(byLocalizationGuid)) {
      const guid = normalizeGuid(rawGuid);
      addTextVariableValues(context.byLocalizationGuid, guid, normalizeRawTextVariableValues(rawValues, fallbackSourceKind, fallbackSourceRef, guid), fallbackSourceRef);
    }
  }

  const byPrefab = readRecord(record, ["byPrefab", "ByPrefab", "prefabValues", "PrefabValues"]);
  if (byPrefab) {
    for (const [prefab, rawValues] of Object.entries(byPrefab)) {
      const normalizedPrefab = normalizeText(prefab);
      addTextVariableValues(context.byPrefab, normalizedPrefab, normalizeRawTextVariableValues(rawValues, fallbackSourceKind, fallbackSourceRef, undefined, normalizedPrefab), fallbackSourceRef);
    }
  }

  const entries = Array.isArray(record.entries) ? record.entries : Array.isArray(record.Entries) ? record.Entries : [];
  for (const rawEntry of entries) {
    if (!isRecord(rawEntry)) {
      continue;
    }

    const sourceKind = getTextVariableSourceKind(rawEntry, fallbackSourceKind);
    if (!sourceKind) {
      continue;
    }
    const sourceRef = readTextVariableSourceRef(rawEntry, fallbackSourceRef);
    if (!sourceRef) {
      continue;
    }

    const localizationGuid = normalizeGuid(readString(rawEntry, ["localizationGuid", "LocalizationGuid", "tooltipLocalizationGuid", "descriptionLocalizationGuid"]));
    const prefab = normalizeText(readString(rawEntry, ["prefab", "Prefab", "abilityPrefab", "AbilityPrefab", "itemPrefab", "ItemPrefab"]));
    const token = normalizeText(readString(rawEntry, ["token", "Token", "name", "Name", "parameter", "Parameter"]));
    const rawValues = token && readTextVariableValue(rawEntry) ? { [token]: rawEntry } : readTextVariableValuesContainer(rawEntry) ?? rawEntry;
    const values = normalizeRawTextVariableValues(rawValues, sourceKind, sourceRef, localizationGuid, prefab);

    addTextVariableValues(context.byLocalizationGuid, localizationGuid, values, sourceRef);
    addTextVariableValues(context.byPrefab, prefab, values, sourceRef);
  }
}

export async function loadTextVariableValuesFromFiles(
  filePaths: string[],
  fallbackSourceKind: TextVariableSourceKind = "extractor-event-buffer"
): Promise<TextVariableValueContext> {
  const context = emptyTextVariableValueContext();

  for (const filePath of filePaths) {
    const source = await readFile(filePath, "utf8");
    const parsed = JSON.parse(source.charCodeAt(0) === 0xfeff ? source.slice(1) : source) as unknown;
    const record = Array.isArray(parsed) ? { entries: parsed } : parsed;
    if (!isRecord(record)) {
      throw new Error(`Text-variable source '${filePath}' must be a JSON object or entries array.`);
    }
    addTextVariableEntriesFromRecord(context, record, fallbackSourceKind, filePath.replace(/\\/g, "/"));
  }

  return context;
}
