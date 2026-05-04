import {
  extractTextVariables,
  getTextVariableResolution,
  normalizeTextVariableName,
  type TextVariableResolution,
  type TextVariableResolutionMap
} from "../src/lib/textVariables";

export interface AbilityDamageParsedComponent {
  name: string;
  fields: Record<string, string>;
  entries: Array<Record<string, string>>;
}

export interface AbilityDamagePrefabNode {
  prefabName: string;
  guid: number | null;
  components: Map<string, AbilityDamageParsedComponent>;
}

export interface AbilityPrefabGraphEntry {
  prefab: string;
  guid: number | null;
  depth: number;
}

export interface RuntimeDamageEvidence {
  sourceKind: "server-damage-evidence";
  sourceRef: string;
  sourcePrefab: string;
  sourceGuid: number | null;
  graphDepth: number;
  interpretationStatus?: string;
  RawDamagePercent?: number;
  RawDamageValue?: number;
  MainFactor?: number;
  ResourceModifier?: number;
  StaggerFactor?: number;
  DamageModifierPerHit?: number;
  MultiplyMainFactorWithStacks?: boolean;
  DealDamageFlags?: number;
  MainType?: string;
}

export interface ServerDamageEvidence {
  key: string;
  prefabName: string;
  prefabGuid: number | null;
  interpretationStatus?: string;
  rawFields: Record<string, unknown>;
}

export interface AbilityPrefabGraphWalker {
  walk(startPrefab: string): AbilityPrefabGraphEntry[];
}

export interface AbilityDamageBuildOptions {
  abilityPrefab: string;
  abilityCategories: string[];
  description: string;
  existingTextVariableValues?: TextVariableResolutionMap;
  walker: AbilityPrefabGraphWalker;
  damageEvidence: Map<string, ServerDamageEvidence[]>;
}

const allowedGraphPrefabPattern = /^(AB_|Buff_|Frost_|Illusion_|Unholy_|Storm_|Chaos_|SpellMod_)/;

function toRecord(value: unknown): Record<string, unknown> | undefined {
  return typeof value === "object" && value !== null && !Array.isArray(value) ? (value as Record<string, unknown>) : undefined;
}

function toStringValue(value: unknown): string | undefined {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : undefined;
}

function toNumberValue(value: unknown): number | undefined {
  return typeof value === "number" && Number.isFinite(value) ? value : undefined;
}

function formatNumber(value: number): string {
  return Number.isInteger(value) ? value.toString() : value.toFixed(2).replace(/\.?0+$/, "");
}

function formatRawDamagePercent(value: number): string {
  return `${formatNumber(value * 100)}%`;
}

function parsePrefabReference(value: string | undefined): { prefab: string; guid: number | null } | null {
  if (!value) {
    return null;
  }

  const match = value.match(/([A-Za-z0-9_]+)\s+PrefabGuid\((-?\d+)\)/);
  if (!match) {
    return null;
  }

  return {
    prefab: match[1],
    guid: Number(match[2])
  };
}

function getComponentPrefabReferences(component: AbilityDamageParsedComponent): Array<{ prefab: string; guid: number | null }> {
  const refs: Array<{ prefab: string; guid: number | null }> = [];
  const values = [...Object.values(component.fields), ...component.entries.flatMap((entry) => Object.values(entry))];

  for (const value of values) {
    const ref = parsePrefabReference(value);
    if (ref && allowedGraphPrefabPattern.test(ref.prefab)) {
      refs.push(ref);
    }
  }

  return refs;
}

export function createAbilityPrefabGraphWalker(options: {
  prefabs: Map<string, AbilityDamagePrefabNode>;
  maxDepth?: number;
  maxNodes?: number;
}): AbilityPrefabGraphWalker {
  const maxDepth = options.maxDepth ?? 5;
  const maxNodes = options.maxNodes ?? 80;
  const refCache = new Map<string, Array<{ prefab: string; guid: number | null }>>();

  const refsForPrefab = (prefabName: string): Array<{ prefab: string; guid: number | null }> => {
    const cached = refCache.get(prefabName);
    if (cached) {
      return cached;
    }

    const node = options.prefabs.get(prefabName);
    if (!node) {
      refCache.set(prefabName, []);
      return [];
    }

    const refs = new Map<string, { prefab: string; guid: number | null }>();
    for (const component of node.components.values()) {
      for (const ref of getComponentPrefabReferences(component)) {
        if (options.prefabs.has(ref.prefab) && !refs.has(ref.prefab)) {
          refs.set(ref.prefab, ref);
        }
      }
    }

    const values = [...refs.values()];
    refCache.set(prefabName, values);
    return values;
  };

  return {
    walk(startPrefab: string): AbilityPrefabGraphEntry[] {
      const seen = new Map<string, AbilityPrefabGraphEntry>();
      const queue: AbilityPrefabGraphEntry[] = [{ prefab: startPrefab, guid: options.prefabs.get(startPrefab)?.guid ?? null, depth: 0 }];

      for (let index = 0; index < queue.length && seen.size < maxNodes; index += 1) {
        const current = queue[index];
        const node = options.prefabs.get(current.prefab);
        if (!node || seen.has(current.prefab)) {
          continue;
        }

        seen.set(current.prefab, { prefab: current.prefab, guid: node.guid, depth: current.depth });
        if (current.depth >= maxDepth) {
          continue;
        }

        for (const ref of refsForPrefab(current.prefab)) {
          if (!seen.has(ref.prefab)) {
            queue.push({ prefab: ref.prefab, guid: ref.guid, depth: current.depth + 1 });
          }
        }
      }

      return [...seen.values()];
    }
  };
}

export function parseServerDamageEvidence(snapshot: unknown): Map<string, ServerDamageEvidence[]> {
  const entries = Array.isArray(toRecord(snapshot)?.entries) ? (toRecord(snapshot)?.entries as unknown[]) : [];
  const byPrefab = new Map<string, ServerDamageEvidence[]>();

  for (const value of entries) {
    const entry = toRecord(value);
    const identity = toRecord(entry?.identity);
    const rawFields = toRecord(entry?.rawFields);
    const quality = toRecord(entry?.quality);
    const prefabName = toStringValue(identity?.prefabName);
    const key = toStringValue(entry?.key);
    if (!entry || !rawFields || !prefabName || !key || !key.startsWith("DealDamageOnGameplayEvent:")) {
      continue;
    }

    const prefabEntries = byPrefab.get(prefabName) ?? [];
    prefabEntries.push({
      key,
      prefabName,
      prefabGuid: toNumberValue(identity?.prefabGuid) ?? null,
      interpretationStatus: toStringValue(quality?.interpretationStatus),
      rawFields
    });
    byPrefab.set(prefabName, prefabEntries);
  }

  return byPrefab;
}

function toRuntimeDamageEvidence(walked: AbilityPrefabGraphEntry, evidence: ServerDamageEvidence): RuntimeDamageEvidence {
  const parameters = toRecord(evidence.rawFields.Parameters);
  return {
    sourceKind: "server-damage-evidence",
    sourceRef: `data/enrichment/server-ecs-component-evidence.json#${evidence.key}`,
    sourcePrefab: evidence.prefabName,
    sourceGuid: evidence.prefabGuid,
    graphDepth: walked.depth,
    ...(evidence.interpretationStatus ? { interpretationStatus: evidence.interpretationStatus } : {}),
    ...(toNumberValue(parameters?.RawDamagePercent) !== undefined ? { RawDamagePercent: toNumberValue(parameters?.RawDamagePercent) } : {}),
    ...(toNumberValue(parameters?.RawDamageValue) !== undefined ? { RawDamageValue: toNumberValue(parameters?.RawDamageValue) } : {}),
    ...(toNumberValue(parameters?.MainFactor) !== undefined ? { MainFactor: toNumberValue(parameters?.MainFactor) } : {}),
    ...(toNumberValue(parameters?.ResourceModifier) !== undefined ? { ResourceModifier: toNumberValue(parameters?.ResourceModifier) } : {}),
    ...(toNumberValue(parameters?.StaggerFactor) !== undefined ? { StaggerFactor: toNumberValue(parameters?.StaggerFactor) } : {}),
    ...(toNumberValue(evidence.rawFields.DamageModifierPerHit) !== undefined ? { DamageModifierPerHit: toNumberValue(evidence.rawFields.DamageModifierPerHit) } : {}),
    ...(typeof evidence.rawFields.MultiplyMainFactorWithStacks === "boolean"
      ? { MultiplyMainFactorWithStacks: evidence.rawFields.MultiplyMainFactorWithStacks }
      : {}),
    ...(toNumberValue(parameters?.DealDamageFlags) !== undefined ? { DealDamageFlags: toNumberValue(parameters?.DealDamageFlags) } : {}),
    ...(toStringValue(parameters?.MainType) ? { MainType: toStringValue(parameters?.MainType) } : {})
  };
}

function isDamageOutputToken(token: string): boolean {
  const normalized = normalizeTextVariableName(token);
  const looksLikeOutputDamage = /(^damage\d*$|damage\d*$)/.test(normalized);
  const looksLikeMitigation = /(absorb|absorbed|reduction|reduce|reduced|mitigation|resist|resistance|factor|modifier|taken|received)/.test(normalized);
  return looksLikeOutputDamage && !looksLikeMitigation;
}

function getDamageTokens(description: string): string[] {
  return extractTextVariables(description).filter(isDamageOutputToken);
}

function resolveSingletonDamageToken(options: {
  abilityCategories: string[];
  description: string;
  existingTextVariableValues?: TextVariableResolutionMap;
  runtimeDamageEvidence: RuntimeDamageEvidence[];
}): TextVariableResolutionMap | undefined {
  if (!options.abilityCategories.includes("Player Usable")) {
    return undefined;
  }

  const damageTokens = getDamageTokens(options.description);
  if (damageTokens.length !== 1 || getTextVariableResolution(options.existingTextVariableValues, damageTokens[0])) {
    return undefined;
  }

  const rawPercents = options.runtimeDamageEvidence.map((entry) => entry.RawDamagePercent).filter((value): value is number => typeof value === "number");
  const uniquePercents = [...new Set(rawPercents)];
  if (
    options.runtimeDamageEvidence.length === 0 ||
    rawPercents.length !== options.runtimeDamageEvidence.length ||
    uniquePercents.length !== 1 ||
    uniquePercents[0] <= 0
  ) {
    return undefined;
  }

  const representativeEvidence = options.runtimeDamageEvidence.find((entry) => entry.RawDamagePercent === uniquePercents[0]);
  if (!representativeEvidence) {
    return undefined;
  }

  const resolution: TextVariableResolution = {
    value: formatRawDamagePercent(uniquePercents[0]),
    sourceKind: "server-damage-evidence",
    sourceRef: representativeEvidence.sourceRef,
    ...(representativeEvidence.sourceGuid !== null ? { sourceGuid: String(representativeEvidence.sourceGuid) } : {}),
    sourcePrefab: representativeEvidence.sourcePrefab
  };

  return { [damageTokens[0]]: resolution };
}

export function buildAbilityDamageEvidence(options: AbilityDamageBuildOptions): {
  runtimeDamageEvidence: RuntimeDamageEvidence[];
  textVariableValues?: TextVariableResolutionMap;
} {
  const runtimeDamageEvidence = options.walker
    .walk(options.abilityPrefab)
    .flatMap((walked) => (options.damageEvidence.get(walked.prefab) ?? []).map((evidence) => toRuntimeDamageEvidence(walked, evidence)));
  const singletonTextVariableValues = resolveSingletonDamageToken({
    abilityCategories: options.abilityCategories,
    description: options.description,
    existingTextVariableValues: options.existingTextVariableValues,
    runtimeDamageEvidence
  });
  const textVariableValues =
    singletonTextVariableValues && options.existingTextVariableValues
      ? { ...options.existingTextVariableValues, ...singletonTextVariableValues }
      : singletonTextVariableValues ?? options.existingTextVariableValues;

  return {
    runtimeDamageEvidence,
    ...(textVariableValues ? { textVariableValues } : {})
  };
}
