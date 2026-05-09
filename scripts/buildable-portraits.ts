import { readdir } from "node:fs/promises";
import path from "node:path";

export const buildablePortraitCandidatesSourceKind = "provisional-buildable-portrait-candidates" as const;
export const buildablePortraitMapSourceKind = "provisional-buildable-portrait-map" as const;

export type BuildablePortraitJoinStatus = "source-backed" | "user-attested" | "circumstantial" | "unsafe";
export type BuildablePortraitApprovalStatus = "pending" | "approved" | "rejected";

export interface BuildablePortraitCandidateRow {
  prefab: string;
  guid: number;
  displayNameEn?: string;
}

export interface BuildablePortraitCandidateEntry {
  assetName: string;
  assetFamily: string;
  assetSourceRefs: string[];
  joinStatus: BuildablePortraitJoinStatus;
  approvalStatus?: BuildablePortraitApprovalStatus;
  approvalNote?: string;
  candidatePrefab?: string;
  candidateGuid?: number;
  displayNameEn?: string;
  candidatePrefabs?: BuildablePortraitCandidateRow[];
  evidenceRefs: string[];
  reason: string;
}

export interface BuildablePortraitCandidatesSnapshot {
  schemaVersion: 1;
  sourceKind: typeof buildablePortraitCandidatesSourceKind;
  sourceRefs: string[];
  totalAssets: number;
  currentBuildableRows: number;
  entriesByAssetName: Record<string, BuildablePortraitCandidateEntry>;
}

export interface BuildablePortraitMapEntry {
  prefab: string;
  guid: number;
  displayNameEn?: string;
  portraitAssetName: string;
  portraitAssetFamily: string;
  portraitAssetPath?: string;
  joinStatus: Extract<BuildablePortraitJoinStatus, "source-backed" | "user-attested">;
  approvalStatus?: Extract<BuildablePortraitApprovalStatus, "approved">;
  approvalNote?: string;
  evidenceRefs: string[];
}

export interface BuildablePortraitMapSnapshot {
  schemaVersion: 1;
  sourceKind: typeof buildablePortraitMapSourceKind;
  sourceRef: "data/enrichment/buildable-portrait-candidates.json";
  totalCurrentBuildableRows: number;
  entriesByPrefab: Record<string, BuildablePortraitMapEntry>;
}

export interface BuildablePortraitBuildOptions {
  assetDumpDir: string;
  allPrefabs: Record<string, number>;
  workstationDisplayByPrefab?: Record<string, BuildableDisplayEntry | undefined>;
  blueprintDisplayByPrefab?: Record<string, BuildableDisplayEntry | undefined>;
  userApprovedPortraitCandidates?: Record<string, { prefab: string; approvalNote: string }>;
}

export interface BuildablePortraitPublicAsset {
  prefab: string;
  fileName: string;
  sourceRef: string;
  publicPath: string;
}

export interface SelectBuildablePortraitPublicAssetOptions {
  workstationPrefabs: Iterable<string>;
  maxPublicAssets?: number;
  availableSourceRefs?: Iterable<string>;
}

interface BuildableDisplayEntry {
  prefab?: string;
  guid?: number;
  displayNameEn?: string;
  iconAssetName?: string;
}

type AssetRecord = {
  assetName: string;
  assetFamily: string;
  sourceRefs: string[];
};

type CurrentBuildableRow = BuildablePortraitCandidateRow & {
  aliases: Set<string>;
  iconAssetNames: Set<string>;
};

const assetDirectories = ["Sprite", "Texture2D"] as const;

function normalizeAlias(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function stripDuplicateSuffix(assetName: string): string {
  return assetName.replace(/\s+#\d+(?=\.png$)/i, "");
}

function addAlias(aliases: Set<string>, value: string | undefined): void {
  if (!value) {
    return;
  }
  const normalized = normalizeAlias(value);
  if (normalized) {
    aliases.add(normalized);
  }
}

function sortSourceRefs(sourceRefs: string[]): string[] {
  const rank = (sourceRef: string) => (sourceRef.startsWith("Texture2D/") ? 0 : sourceRef.startsWith("Sprite/") ? 1 : 2);
  return [...sourceRefs].sort((left, right) => rank(left) - rank(right) || left.localeCompare(right));
}

function preferredPublicSourceRef(entry: BuildablePortraitMapEntry, availableSourceRefs?: Set<string>): string | undefined {
  const textureRef = `Texture2D/${entry.portraitAssetName}`;
  const spriteRef = `Sprite/${entry.portraitAssetName}`;
  const candidates = [textureRef, spriteRef];

  for (const sourceRef of candidates) {
    if (!entry.evidenceRefs.includes(sourceRef)) {
      continue;
    }
    if (availableSourceRefs && !availableSourceRefs.has(sourceRef)) {
      continue;
    }
    return sourceRef;
  }

  return undefined;
}

export function selectBuildablePortraitPublicAssets(
  portraitMap: BuildablePortraitMapSnapshot,
  options: SelectBuildablePortraitPublicAssetOptions
): BuildablePortraitPublicAsset[] {
  const workstationPrefabs = new Set(options.workstationPrefabs);
  const availableSourceRefs = options.availableSourceRefs ? new Set(options.availableSourceRefs) : undefined;
  const maxPublicAssets = options.maxPublicAssets ?? 25;
  const assets: BuildablePortraitPublicAsset[] = [];

  for (const entry of Object.values(portraitMap.entriesByPrefab)) {
    if (!workstationPrefabs.has(entry.prefab) || entry.joinStatus !== "source-backed") {
      continue;
    }

    const sourceRef = preferredPublicSourceRef(entry, availableSourceRefs);
    if (!sourceRef) {
      continue;
    }

    assets.push({
      prefab: entry.prefab,
      fileName: entry.portraitAssetName,
      sourceRef,
      publicPath: `/icons/buildables/${entry.portraitAssetName}`
    });
  }

  const uniqueAssets = new Map<string, BuildablePortraitPublicAsset>();
  for (const asset of assets.sort((left, right) => left.prefab.localeCompare(right.prefab) || left.fileName.localeCompare(right.fileName))) {
    uniqueAssets.set(asset.prefab, asset);
  }

  if (uniqueAssets.size > maxPublicAssets) {
    throw new Error(`Refusing to materialize ${uniqueAssets.size} buildable portrait assets; expected at most ${maxPublicAssets}.`);
  }

  return [...uniqueAssets.values()];
}

export function attachBuildablePortraitAssetPaths(
  portraitMap: BuildablePortraitMapSnapshot,
  publicAssets: BuildablePortraitPublicAsset[]
): BuildablePortraitMapSnapshot {
  const publicPathByPrefab = new Map(publicAssets.map((asset) => [asset.prefab, asset.publicPath]));
  return {
    ...portraitMap,
    entriesByPrefab: Object.fromEntries(
      Object.entries(portraitMap.entriesByPrefab).map(([prefab, entry]) => [
        prefab,
        {
          ...entry,
          ...(publicPathByPrefab.has(prefab) ? { portraitAssetPath: publicPathByPrefab.get(prefab) } : {})
        }
      ])
    )
  };
}

function assetFamily(assetName: string): string | undefined {
  const canonicalName = stripDuplicateSuffix(assetName);
  if (/^Stunlock_Icon_Structure_.+\.png$/i.test(canonicalName)) {
    return "stunlock-structure-icon";
  }
  if (/^StructureIcon_.+_Normal\.png$/i.test(canonicalName)) {
    return "structureicon-normal";
  }
  if (/^Stunlock_Icon_BuildGroup_.+\.png$/i.test(canonicalName)) {
    return "buildgroup-icon";
  }
  return undefined;
}

function portraitSubject(assetName: string): string {
  return stripDuplicateSuffix(assetName)
    .replace(/\.png$/i, "")
    .replace(/^Stunlock_Icon_Structure_/i, "")
    .replace(/^StructureIcon_/i, "")
    .replace(/^Stunlock_Icon_BuildGroup_/i, "")
    .replace(/_Normal$/i, "");
}

async function readBuildablePortraitAssets(assetDumpDir: string): Promise<AssetRecord[]> {
  const assets = new Map<string, AssetRecord>();
  for (const directoryName of assetDirectories) {
    const directoryPath = path.join(assetDumpDir, directoryName);
    let fileNames: string[] = [];
    try {
      fileNames = await readdir(directoryPath);
    } catch (error) {
      if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
        continue;
      }
      throw error;
    }

    for (const fileName of fileNames) {
      const family = assetFamily(fileName);
      if (!family) {
        continue;
      }
      const sourceRef = `${directoryName}/${fileName}`;
      const existing = assets.get(fileName);
      if (existing) {
        existing.sourceRefs.push(sourceRef);
      } else {
        assets.set(fileName, { assetName: fileName, assetFamily: family, sourceRefs: [sourceRef] });
      }
    }
  }

  return [...assets.values()].map((asset) => ({ ...asset, sourceRefs: sortSourceRefs(asset.sourceRefs) })).sort((left, right) => left.assetName.localeCompare(right.assetName));
}

function displayEntryForPrefab(options: BuildablePortraitBuildOptions, prefab: string): BuildableDisplayEntry | undefined {
  return options.workstationDisplayByPrefab?.[prefab] ?? options.blueprintDisplayByPrefab?.[prefab];
}

function addPrefabStemAliases(aliases: Set<string>, prefab: string): void {
  const stem = prefab.replace(/^(TM|BP)_/i, "");
  addAlias(aliases, stem);
  const prefixes = [
    "Castle_Container_Specialized_",
    "Castle_ObjectDecor_",
    "Castle_FloorDecor_",
    "Castle_WallDecor_",
    "Castle_PillarDecor_",
    "RefinementStation_",
    "CraftingStation_",
    "UnitStation_",
    "Castle_Decor_",
    "Castle_Floor_",
    "Castle_"
  ];

  for (const prefix of prefixes) {
    if (stem.toLowerCase().startsWith(prefix.toLowerCase())) {
      addAlias(aliases, stem.slice(prefix.length));
    }
  }
}

function buildCurrentRows(options: BuildablePortraitBuildOptions): Map<string, CurrentBuildableRow> {
  const rows = new Map<string, CurrentBuildableRow>();
  for (const [prefab, guid] of Object.entries(options.allPrefabs)) {
    if (!/^(TM|BP)_/i.test(prefab)) {
      continue;
    }
    const displayEntry = displayEntryForPrefab(options, prefab);
    const displayGuid = typeof displayEntry?.guid === "number" ? displayEntry.guid : undefined;
    if (displayGuid !== undefined && displayGuid !== guid) {
      continue;
    }

    const aliases = new Set<string>();
    addAlias(aliases, prefab);
    addPrefabStemAliases(aliases, prefab);
    addAlias(aliases, displayEntry?.displayNameEn);

    const iconAssetNames = new Set<string>();
    if (displayEntry?.iconAssetName) {
      iconAssetNames.add(displayEntry.iconAssetName);
      iconAssetNames.add(stripDuplicateSuffix(displayEntry.iconAssetName));
    }

    rows.set(prefab, {
      prefab,
      guid,
      ...(displayEntry?.displayNameEn ? { displayNameEn: displayEntry.displayNameEn } : {}),
      aliases,
      iconAssetNames
    });
  }
  return rows;
}

function toCandidateRows(rows: CurrentBuildableRow[]): BuildablePortraitCandidateRow[] {
  return rows
    .map((row) => ({
      prefab: row.prefab,
      guid: row.guid,
      ...(row.displayNameEn ? { displayNameEn: row.displayNameEn } : {})
    }))
    .sort((left, right) => left.prefab.localeCompare(right.prefab));
}

function entryWithRows(
  asset: AssetRecord,
  joinStatus: BuildablePortraitJoinStatus,
  rows: CurrentBuildableRow[],
  evidenceRefs: string[],
  reason: string,
  approvalStatus?: BuildablePortraitApprovalStatus,
  approvalNote?: string
): BuildablePortraitCandidateEntry {
  const candidateRows = toCandidateRows(rows);
  const first = candidateRows[0];
  return {
    assetName: asset.assetName,
    assetFamily: asset.assetFamily,
    assetSourceRefs: asset.sourceRefs,
    joinStatus,
    ...(approvalStatus ? { approvalStatus } : {}),
    ...(approvalNote ? { approvalNote } : {}),
    ...(first ? { candidatePrefab: first.prefab, candidateGuid: first.guid } : {}),
    ...(first?.displayNameEn ? { displayNameEn: first.displayNameEn } : {}),
    ...(candidateRows.length > 0 ? { candidatePrefabs: candidateRows } : {}),
    evidenceRefs,
    reason
  };
}

function classifyAsset(asset: AssetRecord, currentRows: Map<string, CurrentBuildableRow>, approvals: BuildablePortraitBuildOptions["userApprovedPortraitCandidates"]): BuildablePortraitCandidateEntry {
  const evidenceRefs = [...asset.sourceRefs, "data/prefabs/All.json", "data/enrichment/workstation-display-map.json", "data/enrichment/blueprint-display-map.json"];
  const canonicalAssetName = stripDuplicateSuffix(asset.assetName);
  const displayMatches = [...currentRows.values()].filter((row) => row.iconAssetNames.has(asset.assetName) || row.iconAssetNames.has(canonicalAssetName));

  if (displayMatches.length > 0) {
    return entryWithRows(asset, "source-backed", displayMatches, evidenceRefs, "existing workstation or blueprint display map references this exact structure asset name");
  }

  const approved = approvals?.[asset.assetName] ?? approvals?.[canonicalAssetName];
  if (approved) {
    const row = currentRows.get(approved.prefab);
    if (row) {
      return entryWithRows(asset, "user-attested", [row], evidenceRefs, "approved user-attested buildable portrait candidate", "approved", approved.approvalNote);
    }
  }

  if (asset.assetFamily === "buildgroup-icon") {
    return entryWithRows(asset, "circumstantial", [], evidenceRefs, "build group art is category-level and is not promoted without explicit attestation", "pending");
  }

  const subject = normalizeAlias(portraitSubject(asset.assetName));
  const aliasMatches = [...currentRows.values()].filter((row) => row.aliases.has(subject));
  if (aliasMatches.length === 1) {
    return entryWithRows(asset, "source-backed", aliasMatches, evidenceRefs, "asset basename exactly matches a unique workstation or blueprint prefab/display alias");
  }
  if (aliasMatches.length > 1) {
    return entryWithRows(asset, "unsafe", aliasMatches, evidenceRefs, "asset basename matched multiple buildable rows", "rejected");
  }

  return entryWithRows(asset, "unsafe", [], evidenceRefs, "asset basename did not match a known workstation or blueprint row", "rejected");
}

function candidateRank(entry: BuildablePortraitCandidateEntry): number {
  const canonicalBonus = /\s+#\d+(?=\.png$)/i.test(entry.assetName) ? 0 : 1;
  const displayMapBonus = entry.reason.includes("display map") ? 2 : 0;
  return displayMapBonus + canonicalBonus;
}

function toPortraitMap(candidates: BuildablePortraitCandidateEntry[], totalCurrentBuildableRows: number): BuildablePortraitMapSnapshot {
  const usable = candidates.filter(
    (entry) => entry.joinStatus === "source-backed" || (entry.joinStatus === "user-attested" && entry.approvalStatus === "approved")
  );
  const entriesByPrefab = new Map<string, BuildablePortraitMapEntry>();

  for (const candidate of usable.sort((left, right) => candidateRank(right) - candidateRank(left) || left.assetName.localeCompare(right.assetName))) {
    const rows = candidate.candidatePrefabs ?? [];
    for (const row of rows) {
      if (entriesByPrefab.has(row.prefab)) {
        continue;
      }
      entriesByPrefab.set(row.prefab, {
        prefab: row.prefab,
        guid: row.guid,
        ...(row.displayNameEn ? { displayNameEn: row.displayNameEn } : {}),
        portraitAssetName: candidate.assetName,
        portraitAssetFamily: candidate.assetFamily,
        joinStatus: candidate.joinStatus === "source-backed" ? "source-backed" : "user-attested",
        ...(candidate.joinStatus === "user-attested" ? { approvalStatus: "approved" as const } : {}),
        ...(candidate.approvalNote ? { approvalNote: candidate.approvalNote } : {}),
        evidenceRefs: candidate.evidenceRefs
      });
    }
  }

  return {
    schemaVersion: 1,
    sourceKind: buildablePortraitMapSourceKind,
    sourceRef: "data/enrichment/buildable-portrait-candidates.json",
    totalCurrentBuildableRows,
    entriesByPrefab: Object.fromEntries([...entriesByPrefab.entries()].sort(([left], [right]) => left.localeCompare(right)))
  };
}

export async function buildBuildablePortraitSnapshots(options: BuildablePortraitBuildOptions): Promise<{
  candidates: BuildablePortraitCandidatesSnapshot;
  portraitMap: BuildablePortraitMapSnapshot;
}> {
  const assets = await readBuildablePortraitAssets(options.assetDumpDir);
  const currentRows = buildCurrentRows(options);
  const candidateEntries = assets.map((asset) => classifyAsset(asset, currentRows, options.userApprovedPortraitCandidates));
  const candidates: BuildablePortraitCandidatesSnapshot = {
    schemaVersion: 1,
    sourceKind: buildablePortraitCandidatesSourceKind,
    sourceRefs: ["Texture2D", "Sprite", "data/prefabs/All.json", "data/enrichment/workstation-display-map.json", "data/enrichment/blueprint-display-map.json"],
    totalAssets: assets.length,
    currentBuildableRows: currentRows.size,
    entriesByAssetName: Object.fromEntries(candidateEntries.map((entry) => [entry.assetName, entry] as const).sort((left, right) => left[0].localeCompare(right[0])))
  };

  return {
    candidates,
    portraitMap: toPortraitMap(candidateEntries, currentRows.size)
  };
}
