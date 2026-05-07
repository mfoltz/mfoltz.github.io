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

const userApprovedPortraitCandidates: Record<string, { prefab: string; approvalNote: string }> = {
  "Portrait_Large_Normal_AlphaWolf.png": {
    prefab: "CHAR_Forest_Wolf_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_AlphaWolf.png is Alpha the White Wolf."
  },
  "Portrait_Large_Normal_ArenaChampion.png": {
    prefab: "CHAR_Undead_ArenaChampion_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_ArenaChampion.png is Gaius the Cursed Champion."
  },
  "Portrait_Large_Normal_AzarielSunbringer.png": {
    prefab: "CHAR_ChurchOfLight_Cardinal_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_AzarielSunbringer.png is Azariel the Sunbringer."
  },
  "Portrait_Large_Normal_BeatriceTailor.png": {
    prefab: "CHAR_Villager_Tailor_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_BeatriceTailor.png is Beatrice the Tailor."
  },
  "Portrait_Large_Normal_CursedSmith.png": {
    prefab: "CHAR_Undead_CursedSmith_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_CursedSmith.png is Cyril the Cursed Smith."
  },
  "Portrait_Large_Normal_CursedWanderer.png": {
    prefab: "CHAR_Villager_CursedWanderer_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_CursedWanderer.png is Ben the Old Wanderer."
  },
  "Portrait_Large_Normal_Dracula.png": {
    prefab: "CHAR_Vampire_Dracula_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_Dracula.png is Dracula the Immortal King."
  },
  "Portrait_Large_Normal_DukeBalaton.png": {
    prefab: "CHAR_Cursed_ToadKing_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_DukeBalaton.png is Albert the Duke of Balaton."
  },
  "Portrait_Large_Normal_ErrolStonebreaker.png": {
    prefab: "CHAR_Bandit_StoneBreaker_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_ErrolStonebreaker.png is Errol the Stonebreaker."
  },
  "Portrait_Large_Normal_FerociousBear.png": {
    prefab: "CHAR_Forest_Bear_Dire_Vblood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_FerociousBear.png is Kodia the Ferocious Bear."
  },
  "Portrait_Large_Normal_Fisherman.png": {
    prefab: "CHAR_Bandit_Fisherman_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_Fisherman.png is Finn the Fisherman."
  },
  "Portrait_Large_Normal_ForgeBinder.png": {
    prefab: "CHAR_Blackfang_Valyr_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_ForgeBinder.png is Dantos the Forgebinder."
  },
  "Portrait_Large_Normal_FoulrotSoultaker.png": {
    prefab: "CHAR_Undead_ZealousCultist_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_FoulrotSoultaker.png is Foulrot the Soultaker."
  },
  "Portrait_Large_Normal_FrostmawMountainTerror.png": {
    prefab: "CHAR_Wendigo_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_FrostmawMountainTerror.png is Frostmaw the Mountain Terror."
  },
  "Portrait_Large_Normal_Glassblower.png": {
    prefab: "CHAR_Militia_Glassblower_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_Glassblower.png is Grethel the Glassblower."
  },
  "Portrait_Large_Normal_GorecrusherBehemoth.png": {
    prefab: "CHAR_Cursed_MountainBeast_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_GorecrusherBehemoth.png is Gorecrusher the Behemoth."
  },
  "Portrait_Large_Normal_GoreswineRavager.png": {
    prefab: "CHAR_Undead_BishopOfDeath_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_GoreswineRavager.png is Goreswine the Ravager."
  },
  "Portrait_Large_Normal_JadeVampireHunter.png": {
    prefab: "CHAR_VHunter_Jade_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_JadeVampireHunter.png is Jade the Vampire Hunter."
  },
  "Portrait_Large_Normal_KeelyFrostArcher.png": {
    prefab: "CHAR_Bandit_Frostarrow_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_KeelyFrostArcher.png is Keely the Frost Archer."
  },
  "Portrait_Large_Normal_LeandraShadowPriestess.png": {
    prefab: "CHAR_Undead_BishopOfShadows_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_LeandraShadowPriestess.png is Leandra the Shadow Priestess."
  },
  "Portrait_Large_Normal_LidiaChaosArcher.png": {
    prefab: "CHAR_Bandit_Chaosarrow_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_LidiaChaosArcher.png is Lidia the Chaos Archer."
  },
  "Portrait_Large_Normal_MatkaCurseWeaver.png": {
    prefab: "CHAR_Cursed_Witch_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_MatkaCurseWeaver.png is Matka the Curse Weaver."
  },
  "Portrait_Large_Normal_MeredithBrightArcher.png": {
    prefab: "CHAR_Militia_Longbowman_LightArrow_Vblood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_MeredithBrightArcher.png is Meredith the Bright Archer."
  },
  "Portrait_Large_Normal_MorianStormwingMatriarch.png": {
    prefab: "CHAR_Harpy_Matriarch_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_MorianStormwingMatriarch.png is Morian the Stormwing Matriarch."
  },
  "Portrait_Large_Normal_NicholausFallen.png": {
    prefab: "CHAR_Undead_Priest_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_NicholausFallen.png is Nicholaus the Fallen."
  },
  "Portrait_Large_Normal_Overseer.png": {
    prefab: "CHAR_ChurchOfLight_Overseer_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_Overseer.png is Sir Magnus the Overseer."
  },
  "Portrait_Large_Normal_PoloraFeywalker.png": {
    prefab: "CHAR_Poloma_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_PoloraFeywalker.png is Polora the Feywalker."
  },
  "Portrait_Large_Normal_Professor.png": {
    prefab: "CHAR_Gloomrot_TheProfessor_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_Professor.png is Henry Blackbrew the Doctor."
  },
  "Portrait_Large_Normal_Purifier.png": {
    prefab: "CHAR_Gloomrot_Purifier_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_Purifier.png is Angram the Purifier."
  },
  "Portrait_Large_Normal_RazielShepherd.png": {
    prefab: "CHAR_Militia_BishopOfDunley_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_RazielShepherd.png is Raziel the Shepherd."
  },
  "Portrait_Large_Normal_SolarusImmaculate.png": {
    prefab: "CHAR_ChurchOfLight_Paladin_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_SolarusImmaculate.png is Solarus the Immaculate."
  },
  "Portrait_Large_Normal_Sommelier.png": {
    prefab: "CHAR_ChurchOfLight_Sommelier_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_Sommelier.png is Baron du Bouchon the Sommelier."
  },
  "Portrait_Large_Normal_ChristinaSunPriestess.png": {
    prefab: "CHAR_Militia_Nun_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_ChristinaSunPriestess.png is Christina the Sun Priestess."
  },
  "Portrait_Large_Normal_TerahGeomancer.png": {
    prefab: "CHAR_Geomancer_Human_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_TerahGeomancer.png is Terah the Geomancer."
  },
  "Portrait_Large_Normal_TerrorclawOgre.png": {
    prefab: "CHAR_Winter_Yeti_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_TerrorclawOgre.png is Terrorclaw the Ogre."
  },
  "Portrait_Large_Normal_TristanVampireHunter.png": {
    prefab: "CHAR_VHunter_Leader_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_TristanVampireHunter.png is Tristan the Vampire Hunter."
  },
  "Portrait_Large_Normal_UndeadGeneral.png": {
    prefab: "CHAR_Undead_Leader_Vblood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_UndeadGeneral.png is Kriig the Undead General."
  },
  "Portrait_Large_Normal_UngoraSpiderQueen.png": {
    prefab: "CHAR_Spider_Queen_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_UngoraSpiderQueen.png is Ungora the Spider Queen."
  },
  "Portrait_Large_Normal_WingedHorror.png": {
    prefab: "CHAR_Manticore_VBlood",
    approvalNote: "User-attested approved match: Portrait_Large_Normal_WingedHorror.png is Talzur the Winged Horror."
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
  const fuzzyMatches = matches.length === 0 ? rowsEligibleForMatching.filter((row) => row.fuzzyAliases.has(normalizedSubject)) : [];

  const approved = userApprovedPortraitCandidates[asset.assetName];
  if (approved) {
    const row = currentRows.get(approved.prefab);
    const matchedRow = matches.length === 1 ? matches[0] : fuzzyMatches.length === 1 ? fuzzyMatches[0] : undefined;
    const unsafeReason = unsafeReasonForPrefab(approved.prefab);
    if (row && matchedRow?.prefab === row.prefab && !unsafeReason) {
      return {
        assetName: asset.assetName,
        assetFamily: asset.assetFamily,
        assetSourceRefs: asset.sourceRefs,
        joinStatus: "user-attested",
        approvalStatus: "approved",
        approvalNote: approved.approvalNote,
        candidatePrefab: row.prefab,
        candidateGuid: row.guid,
        displayNameEn: row.displayNameEn,
        evidenceRefs: [...evidenceRefs, "data/prefabs/VBloodNames.json"],
        reason: "approved user-attested portrait candidate"
      };
    }
  }

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
