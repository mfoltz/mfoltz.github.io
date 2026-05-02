export type TextVariableSegment =
  | {
      type: "text";
      value: string;
    }
  | {
      type: "variable";
      value: string;
      name: string;
      resolution?: TextVariableResolution;
    };

const textVariablePattern = /\{[A-Za-z0-9_]+\}/g;

export type TextVariableSourceKind = "localized-resource" | "bloodcraft-resource";

export interface TextVariableResolution {
  value: string;
  sourceKind: TextVariableSourceKind;
  sourceRef: string;
  sourceGuid?: string;
  sourcePrefab?: string;
}

export type TextVariableResolutionMap = Record<string, TextVariableResolution>;

const textVariableSourceKinds = new Set<string>(["localized-resource", "bloodcraft-resource"]);

export function isTextVariableSourceKind(value: string | undefined | null): value is TextVariableSourceKind {
  return Boolean(value && textVariableSourceKinds.has(value));
}

export function normalizeTextVariableName(value: string): string {
  return value.trim().toLowerCase();
}

export function getTextVariableResolution(
  values: TextVariableResolutionMap | undefined | null,
  name: string
): TextVariableResolution | undefined {
  if (!values) {
    return undefined;
  }

  const direct = values[name];
  if (direct) {
    return direct;
  }

  const normalizedName = normalizeTextVariableName(name);
  return Object.entries(values).find(([key]) => normalizeTextVariableName(key) === normalizedName)?.[1];
}

export function filterTextVariableResolutionsForText(
  text: string | undefined | null,
  values: TextVariableResolutionMap | undefined | null
): TextVariableResolutionMap | undefined {
  const tokens = extractTextVariables(text);
  if (tokens.length === 0 || !values) {
    return undefined;
  }

  const filtered: TextVariableResolutionMap = {};
  for (const token of tokens) {
    const resolution = getTextVariableResolution(values, token);
    if (resolution) {
      filtered[token] = resolution;
    }
  }

  return Object.keys(filtered).length > 0 ? filtered : undefined;
}

export function parseTextVariables(value: string, values?: TextVariableResolutionMap | null): TextVariableSegment[] {
  const segments: TextVariableSegment[] = [];
  let cursor = 0;

  for (const match of value.matchAll(textVariablePattern)) {
    const raw = match[0];
    const index = match.index ?? 0;
    if (index > cursor) {
      segments.push({ type: "text", value: value.slice(cursor, index) });
    }
    const name = raw.slice(1, -1);
    segments.push({ type: "variable", value: raw, name, resolution: getTextVariableResolution(values, name) });
    cursor = index + raw.length;
  }

  if (cursor < value.length) {
    segments.push({ type: "text", value: value.slice(cursor) });
  }

  return segments.length > 0 ? segments : [{ type: "text", value }];
}

export function extractTextVariables(value: string | undefined | null): string[] {
  if (!value) {
    return [];
  }

  const names = new Map<string, string>();
  for (const match of value.matchAll(textVariablePattern)) {
    const rawName = match[0].slice(1, -1);
    const key = rawName.toLowerCase();
    if (!names.has(key)) {
      names.set(key, rawName);
    }
  }

  return [...names.values()];
}

export function hasTextVariables(value: string | undefined | null): boolean {
  return extractTextVariables(value).length > 0;
}
