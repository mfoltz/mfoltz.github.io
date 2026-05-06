import { readFile } from "node:fs/promises";

export const bloodHuntsSourceKind = "assetripper-monobehaviour-blood-hunts" as const;

export interface BloodHuntsNameKey {
  _a: number;
  _b: number;
  _c: number;
  _d: number;
}

export interface BloodHuntsJoinProvenance {
  sourceKind: typeof bloodHuntsSourceKind;
  sourceRef: string;
  prefabSourceRef: string;
  localizedNameSourceRef: string;
  localizedTextSourceRef: string;
  npcDisplaySourceRef: string;
  hideLevelSourceValue: number;
}

export interface BloodHuntsMapEntry {
  prefab: string;
  guid: number;
  bloodHuntLevel: number;
  bloodHuntHideLevel: boolean;
  nameKey: BloodHuntsNameKey;
  nameLocalizationGuid: string;
  provenance: BloodHuntsJoinProvenance;
}

export interface BloodHuntsMapSnapshot {
  schemaVersion: 1;
  sourceKind: typeof bloodHuntsSourceKind;
  sourceRef: string;
  sourceRowCount: number;
  entriesByGuid: Record<string, BloodHuntsMapEntry>;
}

export interface BloodHuntsBuildOptions {
  sourceFile: string;
  sourceRef: string;
  prefabByGuid: Map<number, string>;
  localizedNamesByGuid: Record<string, string>;
  localizedTextByGuid: Record<string, string> | Map<string, string>;
  npcDisplayByPrefab: Record<string, { displayNameEn?: string } | undefined>;
  prefabSourceRef: string;
  localizedNameSourceRef: string;
  localizedTextSourceRef: string;
  npcDisplaySourceRef: string;
}

type JsonRecord = Record<string, unknown>;

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readNumber(record: JsonRecord, key: string, source: string): number {
  const value = record[key];
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new Error(`${source}: missing numeric ${key}`);
  }
  return value;
}

function readNameKey(value: unknown, source: string): BloodHuntsNameKey {
  if (!isRecord(value)) {
    throw new Error(`${source}: missing Name.Key`);
  }
  return {
    _a: readNumber(value, "_a", source),
    _b: readNumber(value, "_b", source),
    _c: readNumber(value, "_c", source),
    _d: readNumber(value, "_d", source)
  };
}

export function nameKeyToLocalizationGuid(key: BloodHuntsNameKey): string {
  const bytes = Buffer.alloc(16);
  bytes.writeInt32LE(key._a, 0);
  bytes.writeInt32LE(key._b, 4);
  bytes.writeInt32LE(key._c, 8);
  bytes.writeInt32LE(key._d, 12);
  const hex = bytes.toString("hex");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

function readLocalizedText(localizedTextByGuid: BloodHuntsBuildOptions["localizedTextByGuid"], guid: string): string | undefined {
  return localizedTextByGuid instanceof Map ? localizedTextByGuid.get(guid.toLowerCase()) : localizedTextByGuid[guid.toLowerCase()];
}

function parseBloodHuntsRows(raw: unknown, sourceRef: string): BloodHuntsMapEntry[] {
  if (!isRecord(raw) || !Array.isArray(raw.VBloodDatas)) {
    throw new Error(`${sourceRef}: expected VBloodDatas array`);
  }

  return raw.VBloodDatas.map((row, index) => {
    const source = `${sourceRef}:VBloodDatas[${index}]`;
    if (!isRecord(row)) {
      throw new Error(`${source}: expected object row`);
    }
    const prefabGuid = isRecord(row.PrefabGUID) ? readNumber(row.PrefabGUID, "_Value", source) : undefined;
    if (prefabGuid === undefined) {
      throw new Error(`${source}: missing PrefabGUID._Value`);
    }
    const hideLevelSourceValue = readNumber(row, "HideLevel", source);
    const nameKey = readNameKey(isRecord(row.Name) ? row.Name.Key : undefined, source);
    return {
      prefab: "",
      guid: prefabGuid,
      bloodHuntLevel: readNumber(row, "Level", source),
      bloodHuntHideLevel: hideLevelSourceValue !== 0,
      nameKey,
      nameLocalizationGuid: nameKeyToLocalizationGuid(nameKey),
      provenance: {
        sourceKind: bloodHuntsSourceKind,
        sourceRef,
        prefabSourceRef: "",
        localizedNameSourceRef: "",
        localizedTextSourceRef: "",
        npcDisplaySourceRef: "",
        hideLevelSourceValue
      }
    };
  });
}

export async function buildBloodHuntsMapSnapshot(options: BloodHuntsBuildOptions): Promise<BloodHuntsMapSnapshot> {
  const raw = JSON.parse(await readFile(options.sourceFile, "utf8")) as unknown;
  const rows = parseBloodHuntsRows(raw, options.sourceRef);
  const entriesByGuid = new Map<string, BloodHuntsMapEntry>();

  for (const row of rows) {
    const guidKey = String(row.guid);
    if (entriesByGuid.has(guidKey)) {
      throw new Error(`${options.sourceRef}: duplicate VBlood PrefabGUID ${guidKey}`);
    }

    const prefab = options.prefabByGuid.get(row.guid);
    if (!prefab) {
      throw new Error(`${options.sourceRef}:${guidKey}: missing prefab join in ${options.prefabSourceRef}`);
    }

    const localizedName = options.localizedNamesByGuid[guidKey]?.trim();
    if (!localizedName) {
      throw new Error(`${options.sourceRef}:${guidKey}: missing localized name join in ${options.localizedNameSourceRef}`);
    }

    const localizedText = readLocalizedText(options.localizedTextByGuid, row.nameLocalizationGuid)?.trim();
    if (!localizedText) {
      throw new Error(`${options.sourceRef}:${guidKey}: missing localized text join for ${row.nameLocalizationGuid} in ${options.localizedTextSourceRef}`);
    }
    if (localizedText !== localizedName) {
      throw new Error(`${options.sourceRef}:${guidKey}: localized text mismatch for ${row.nameLocalizationGuid} between ${options.localizedTextSourceRef} and ${options.localizedNameSourceRef}`);
    }

    const displayName = options.npcDisplayByPrefab[prefab]?.displayNameEn?.trim();
    if (!displayName) {
      throw new Error(`${options.sourceRef}:${guidKey}: missing NPC display join in ${options.npcDisplaySourceRef}`);
    }

    entriesByGuid.set(guidKey, {
      ...row,
      prefab,
      provenance: {
        ...row.provenance,
        prefabSourceRef: options.prefabSourceRef,
        localizedNameSourceRef: options.localizedNameSourceRef,
        localizedTextSourceRef: options.localizedTextSourceRef,
        npcDisplaySourceRef: options.npcDisplaySourceRef
      }
    });
  }

  return {
    schemaVersion: 1,
    sourceKind: bloodHuntsSourceKind,
    sourceRef: options.sourceRef,
    sourceRowCount: rows.length,
    entriesByGuid: Object.fromEntries([...entriesByGuid.entries()].sort(([left], [right]) => Number(left) - Number(right)))
  };
}
