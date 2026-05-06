import { readdir } from "node:fs/promises";
import path from "node:path";

export const npcPortraitCandidatesSourceKind = "provisional-vblood-portrait-candidates" as const;
export const npcPortraitMapSourceKind = "provisional-vblood-portrait-map" as const;

export type NpcPortraitJoinStatus = "source-backed" | "user-attested" | "circumstantial" | "unsafe";
export type NpcPortraitApprovalStatus = "pending" | "approved" | "rejected";

export interface NpcPortraitCandidateEntry {
  assetName: string;
  assetFamily: string;
  assetSourceRefs: string[];
  joinStatus: NpcPortraitJoinStatus;
  approvalStatus?: NpcPortraitApprovalStatus;
  approvalNote?: string;
  candidatePrefab?: string;
  candidateGuid?: number;
  displayNameEn?: string;
  evidenceRefs: string[];
  reason: string;
}

export interface NpcPortraitCandidatesSnapshot {
  schemaVersion: 1;
  sourceKind: typeof npcPortraitCandidatesSourceKind;
  sourceRefs: string[];
  totalAssets: number;
  currentVbloodRows: number;
  entriesByAssetName: Record<string, NpcPortraitCandidateEntry>;
}

export interface NpcPortraitMapEntry {
  prefab: string;
  guid: number;
  displayNameEn: string;
  portraitAssetName: string;
  portraitAssetFamily: string;
  joinStatus: Extract<NpcPortraitJoinStatus, "source-backed" | "user-attested">;
  approvalStatus?: Extract<NpcPortraitApprovalStatus, "approved">;
  approvalNote?: string;
  evidenceRefs: string[];
}

export interface NpcPortraitMapSnapshot {
  schemaVersion: 1;
  sourceKind: typeof npcPortraitMapSourceKind;
  sourceRef: "data/enrichment/npc-portrait-candidates.json";
  totalCurrentVbloodRows: number;
  entriesByPrefab: Record<string, NpcPortraitMapEntry>;
}

export interface NpcPortraitBuildOptions {
  assetDumpDir: string;
  allPrefabs: Record<string, number>;
  npcDisplayByPrefab: Record<string, { displayNameEn?: string } | undefined>;
  npcClassificationByPrefab: Record<string, { guid?: number; isVBlood?: boolean; bloodType?: string } | undefined>;
  bloodHuntsByGuid: Record<string, { prefab?: string; guid?: number } | undefined>;
  vbloodNamesRows: Array<[string, string, string]>;
}

type AssetRecord = {
  assetName: string;
  assetFamily: string;
  sourceRefs: string[];
};

type CurrentNpcRow = {
  prefab: string;
  guid: number;
  displayNameEn: string;
  aliases: Set<string>;
  fuzzyAliases: Set<string>;
};

const manualAttestedPortraits: Record<string, { prefab: string; approvalNote: string }> = {
  bloodcommander: {
    prefab: "CHAR_Vampire_BloodKnight_VBlood",
    approvalNote: "User-attested approved match: BloodCommander is General Valencia the Depraved."
  },
  frostcommander: {
    prefab: "CHAR_Vampire_IceRanger_VBlood",
    approvalNote: "User-attested approved match: FrostCommander is General Elena the Hollow."
  }
};

export const unsafeNpcPortraitPrefabPattern = /(?:GateBoss|Primal|Minion|(?:^|_)Tail(?:_|$)|ShadowClone|_UNUSED)/i;
const stopWords = new Set(["the", "of"]);

function normalizeAlias(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function normalizeWithoutStopWords(value: string): string {
  return value
    .split(/[^A-Za-z0-9]+/g)
    .filter((part) => part && !stopWords.has(part.toLowerCase()))
    .join("")
    .toLowerCase();
}

function aliasTokens(value: string): string[] {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .split(/[^A-Za-z0-9]+/g)
    .map((part) => part.toLowerCase())
    .filter(Boolean);
}

function addAlias(aliases: Set<string>, value: string | undefined): void {
  if (!value) {
    return;
  }
  const normalized = normalizeAlias(value);
  if (normalized) {
    aliases.add(normalized);
  }
  const withoutStopWords = normalizeWithoutStopWords(value);
  if (withoutStopWords) {
    aliases.add(withoutStopWords);
  }
}

function addFuzzyAliases(aliases: Set<string>, value: string | undefined): void {
  if (!value) {
    return;
  }
  const tokens = aliasTokens(value).filter((part) => !stopWords.has(part));
  for (let index = 1; index < tokens.length; index++) {
    const suffix = tokens.slice(index).join("");
    if (suffix.length >= 8) {
      aliases.add(suffix);
    }
  }
}

function prefabStem(prefab: string): string {
  return prefab.replace(/^CHAR_/i, "").replace(/_VBlood(?:_.*)?$/i, "").replace(/_Vblood(?:_.*)?$/i, "");
}

function sortSourceRefs(sourceRefs: string[]): string[] {
  const rank = (sourceRef: string) => (sourceRef.startsWith("Texture2D/") ? 0 : sourceRef.startsWith("Sprite/") ? 1 : 2);
  return [...sourceRefs].sort((left, right) => rank(left) - rank(right) || left.localeCompare(right));
}

function assetFamily(assetName: string): string | undefined {
  if (/^CHAR_.*_VBlood_HeadPortrait\.png$/i.test(assetName)) {
    return "char-vblood-headportrait";
  }
  const match = assetName.match(/^Portrait_(Large|Small)_(Normal|Smoke)_.+\.png$/i);
  if (match) {
    return `portrait-${match[1].toLowerCase()}-${match[2].toLowerCase()}`;
  }
  return undefined;
}

function portraitSubject(assetName: string): string {
  return assetName
    .replace(/\.png$/i, "")
    .replace(/^Portrait_(?:Large|Small)_(?:Normal|Smoke)_/i, "")
    .replace(/^CHAR_/i, "CHAR_")
    .replace(/_HeadPortrait$/i, "");
}

async function readPortraitAssets(assetDumpDir: string): Promise<AssetRecord[]> {
  const assets = new Map<string, AssetRecord>();
  for (const directoryName of ["Sprite", "Texture2D"]) {
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
      const existing = assets.get(fileName);
      const sourceRef = `${directoryName}/${fileName}`;
      if (existing) {
        existing.sourceRefs.push(sourceRef);
      } else {
        assets.set(fileName, { assetName: fileName, assetFamily: family, sourceRefs: [sourceRef] });
      }
    }
  }
  return [...assets.values()].map((asset) => ({ ...asset, sourceRefs: sortSourceRefs(asset.sourceRefs) })).sort((left, right) => left.assetName.localeCompare(right.assetName));
}

function buildCurrentRows(options: NpcPortraitBuildOptions): Map<string, CurrentNpcRow> {
  const rows = new Map<string, CurrentNpcRow>();
  const bloodHuntsPrefabs = new Set(Object.values(options.bloodHuntsByGuid).map((entry) => entry?.prefab).filter((value): value is string => Boolean(value)));
  const aliasesByPrefab = new Map<string, string[]>();
  for (const [name, prefab, type] of options.vbloodNamesRows) {
    if (type !== "VBlood") {
      continue;
    }
    const aliases = aliasesByPrefab.get(prefab) ?? [];
    aliases.push(name);
    aliasesByPrefab.set(prefab, aliases);
  }

  for (const [prefab, classification] of Object.entries(options.npcClassificationByPrefab)) {
    const guid = options.allPrefabs[prefab] ?? classification?.guid;
    const displayNameEn = options.npcDisplayByPrefab[prefab]?.displayNameEn?.trim();
    const isCurrentVblood = classification?.isVBlood === true || classification?.bloodType === "V Blood" || bloodHuntsPrefabs.has(prefab);
    if (!isCurrentVblood || typeof guid !== "number" || !displayNameEn) {
      continue;
    }

    const aliases = new Set<string>();
    const fuzzyAliases = new Set<string>();
    addAlias(aliases, prefab);
    addAlias(aliases, prefabStem(prefab));
    addAlias(aliases, displayNameEn);
    addFuzzyAliases(fuzzyAliases, prefabStem(prefab));
    addFuzzyAliases(fuzzyAliases, displayNameEn);
    for (const alias of aliasesByPrefab.get(prefab) ?? []) {
      addAlias(aliases, alias);
      addFuzzyAliases(fuzzyAliases, alias);
    }

    rows.set(prefab, { prefab, guid, displayNameEn, aliases, fuzzyAliases });
  }
  return rows;
}

function unsafeReasonForPrefab(prefab: string | undefined): string | undefined {
  if (!prefab) {
    return undefined;
  }
  return unsafeNpcPortraitPrefabPattern.test(prefab) ? "candidate points at a Primal, GateBoss, minion, tail, shadow clone, or unused prefab" : undefined;
}

function classifyAsset(asset: AssetRecord, currentRows: Map<string, CurrentNpcRow>): NpcPortraitCandidateEntry {
  const subject = portraitSubject(asset.assetName);
  const evidenceRefs = [...asset.sourceRefs, "data/enrichment/npc-display-map.json", "data/enrichment/npc-classification-map.json"];

  if (asset.assetFamily === "char-vblood-headportrait") {
    const prefab = subject.replace(/_VBlood$/i, "_VBlood");
    const row = currentRows.get(prefab);
    const unsafeReason = unsafeReasonForPrefab(prefab);
    if (row && !unsafeReason) {
      return {
        assetName: asset.assetName,
        assetFamily: asset.assetFamily,
        assetSourceRefs: asset.sourceRefs,
        joinStatus: "source-backed",
        candidatePrefab: row.prefab,
        candidateGuid: row.guid,
        displayNameEn: row.displayNameEn,
        evidenceRefs: [...evidenceRefs, "data/prefabs/All.json"],
        reason: "asset basename exactly matches a current V Blood prefab plus HeadPortrait suffix"
      };
    }
    return {
      assetName: asset.assetName,
      assetFamily: asset.assetFamily,
      assetSourceRefs: asset.sourceRefs,
      joinStatus: "unsafe",
      approvalStatus: "rejected",
      ...(row ? { candidatePrefab: row.prefab, candidateGuid: row.guid, displayNameEn: row.displayNameEn } : {}),
      evidenceRefs,
      reason: unsafeReason ?? "asset basename does not join to a current V Blood NPC row"
    };
  }

  const normalizedSubject = normalizeAlias(subject);
  const manual = manualAttestedPortraits[normalizedSubject];
  if (manual) {
    const row = currentRows.get(manual.prefab);
    const unsafeReason = unsafeReasonForPrefab(manual.prefab);
    if (row && !unsafeReason) {
      return {
        assetName: asset.assetName,
        assetFamily: asset.assetFamily,
        assetSourceRefs: asset.sourceRefs,
        joinStatus: "user-attested",
        approvalStatus: "approved",
        approvalNote: manual.approvalNote,
        candidatePrefab: row.prefab,
        candidateGuid: row.guid,
        displayNameEn: row.displayNameEn,
        evidenceRefs: [...evidenceRefs, "data/prefabs/VBloodNames.json"],
        reason: "approved user-attested portrait alias"
      };
    }
  }

  const rowsEligibleForMatching = [...currentRows.values()].filter((row) => !unsafeReasonForPrefab(row.prefab));
  const matches = rowsEligibleForMatching.filter((row) => row.aliases.has(normalizedSubject));
  if (matches.length === 1) {
    const row = matches[0];
    return {
      assetName: asset.assetName,
      assetFamily: asset.assetFamily,
      assetSourceRefs: asset.sourceRefs,
      joinStatus: "circumstantial",
      approvalStatus: "pending",
      candidatePrefab: row.prefab,
      candidateGuid: row.guid,
      displayNameEn: row.displayNameEn,
      evidenceRefs: [...evidenceRefs, "data/prefabs/VBloodNames.json"],
      reason: "single best-fit portrait alias matched current NPC display, prefab, or VBloodNames row"
    };
  }

  const fuzzyMatches = matches.length === 0 ? rowsEligibleForMatching.filter((row) => row.fuzzyAliases.has(normalizedSubject)) : [];
  if (fuzzyMatches.length === 1) {
    const row = fuzzyMatches[0];
    return {
      assetName: asset.assetName,
      assetFamily: asset.assetFamily,
      assetSourceRefs: asset.sourceRefs,
      joinStatus: "circumstantial",
      approvalStatus: "pending",
      candidatePrefab: row.prefab,
      candidateGuid: row.guid,
      displayNameEn: row.displayNameEn,
      evidenceRefs: [...evidenceRefs, "data/prefabs/VBloodNames.json"],
      reason: "single best-fit fuzzy title-fragment portrait alias matched current NPC display, prefab, or VBloodNames row"
    };
  }

  return {
    assetName: asset.assetName,
    assetFamily: asset.assetFamily,
    assetSourceRefs: asset.sourceRefs,
    joinStatus: "unsafe",
    approvalStatus: "rejected",
    evidenceRefs,
    reason:
      matches.length > 1 || fuzzyMatches.length > 1
        ? "portrait alias matched multiple current NPC rows"
        : "portrait alias did not match a current V Blood NPC row"
  };
}

function toPortraitMap(candidates: NpcPortraitCandidateEntry[], totalCurrentVbloodRows: number): NpcPortraitMapSnapshot {
  const usable = candidates.filter(
    (entry) => entry.joinStatus === "source-backed" || (entry.joinStatus === "user-attested" && entry.approvalStatus === "approved")
  );
  const rank = (entry: NpcPortraitCandidateEntry) => (entry.joinStatus === "source-backed" ? 2 : 1);
  const entriesByPrefab = new Map<string, NpcPortraitMapEntry>();

  for (const candidate of usable.sort((left, right) => rank(right) - rank(left) || left.assetName.localeCompare(right.assetName))) {
    if (!candidate.candidatePrefab || typeof candidate.candidateGuid !== "number" || !candidate.displayNameEn) {
      continue;
    }
    if (entriesByPrefab.has(candidate.candidatePrefab)) {
      continue;
    }
    entriesByPrefab.set(candidate.candidatePrefab, {
      prefab: candidate.candidatePrefab,
      guid: candidate.candidateGuid,
      displayNameEn: candidate.displayNameEn,
      portraitAssetName: candidate.assetName,
      portraitAssetFamily: candidate.assetFamily,
      joinStatus: candidate.joinStatus === "source-backed" ? "source-backed" : "user-attested",
      ...(candidate.joinStatus === "user-attested" ? { approvalStatus: "approved" as const } : {}),
      ...(candidate.approvalNote ? { approvalNote: candidate.approvalNote } : {}),
      evidenceRefs: candidate.evidenceRefs
    });
  }

  return {
    schemaVersion: 1,
    sourceKind: npcPortraitMapSourceKind,
    sourceRef: "data/enrichment/npc-portrait-candidates.json",
    totalCurrentVbloodRows,
    entriesByPrefab: Object.fromEntries([...entriesByPrefab.entries()].sort(([left], [right]) => left.localeCompare(right)))
  };
}

export async function buildNpcPortraitSnapshots(options: NpcPortraitBuildOptions): Promise<{
  candidates: NpcPortraitCandidatesSnapshot;
  portraitMap: NpcPortraitMapSnapshot;
}> {
  const assets = await readPortraitAssets(options.assetDumpDir);
  const currentRows = buildCurrentRows(options);
  const candidateEntries = assets.map((asset) => classifyAsset(asset, currentRows));
  const candidates: NpcPortraitCandidatesSnapshot = {
    schemaVersion: 1,
    sourceKind: npcPortraitCandidatesSourceKind,
    sourceRefs: ["Texture2D", "Sprite", "data/enrichment/npc-display-map.json", "data/enrichment/npc-classification-map.json", "data/prefabs/VBloodNames.json"],
    totalAssets: assets.length,
    currentVbloodRows: currentRows.size,
    entriesByAssetName: Object.fromEntries(candidateEntries.map((entry) => [entry.assetName, entry] as const).sort((left, right) => left[0].localeCompare(right[0])))
  };

  return {
    candidates,
    portraitMap: toPortraitMap(candidateEntries, currentRows.size)
  };
}
