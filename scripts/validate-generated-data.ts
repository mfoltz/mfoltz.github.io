import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildablePortraitCandidatesSourceKind, buildablePortraitMapSourceKind } from "./buildable-portraits";
import { bloodHuntsSourceKind, nameKeyToLocalizationGuid } from "./blood-hunts";
import { npcPortraitCandidatesSourceKind, npcPortraitMapSourceKind, unsafeNpcPortraitPrefabPattern } from "./npc-portraits";
import { isSafeSlug } from "../src/lib/slug";
import {
  extractTextVariables,
  hasTextVariables,
  isTextVariableSourceKind,
  normalizeTextVariableName,
  type TextVariableResolutionMap
} from "../src/lib/textVariables";

type IndexEntry = {
  slug: string;
  path: string;
  section?: string;
  kind?: string;
  title?: string;
  icon?: string;
  categories?: string[];
  tags?: string[];
  badges?: string[];
  school?: string;
  catalogStatus?: string;
  description?: string;
  excerpt?: string;
  textVariableValues?: TextVariableResolutionMap;
};

type RelatedEntityRef = {
  icon?: string;
};

type DetailEntry = {
  slug: string;
  icon?: string;
  iconAssetPath?: string;
  portraitAssetPath?: string;
  description?: string;
  summary?: string;
  tooltipTextEn?: string;
  localizedDescriptionTextEn?: string;
  textVariableValues?: TextVariableResolutionMap;
  repairRecipes?: RelatedEntityRef[];
  relatedRecipes?: RelatedEntityRef[];
  outputs?: RelatedEntityRef[];
  requirements?: RelatedEntityRef[];
  repairCosts?: RelatedEntityRef[];
  spellJewels?: RelatedEntityRef[];
  workstationOutputs?: RelatedEntityRef[];
  inventoryPrefabs?: RelatedEntityRef[];
};

type RelatedEntityGroupKey = keyof Pick<
  DetailEntry,
  "repairRecipes" | "relatedRecipes" | "outputs" | "requirements" | "repairCosts" | "spellJewels" | "workstationOutputs" | "inventoryPrefabs"
>;

type EnrichmentTextEntry = {
  tooltipTextEn?: string;
  descriptionTextEn?: string;
  textVariableValues?: TextVariableResolutionMap;
};

type BloodHuntsNameKey = {
  _a: number;
  _b: number;
  _c: number;
  _d: number;
};

type BloodHuntsMapEntry = {
  prefab: string;
  guid: number;
  bloodHuntLevel: number;
  bloodHuntHideLevel: boolean;
  nameKey: BloodHuntsNameKey;
  nameLocalizationGuid: string;
  provenance: {
    sourceKind: string;
    sourceRef: string;
    prefabSourceRef: string;
    localizedNameSourceRef: string;
    localizedTextSourceRef: string;
    npcDisplaySourceRef: string;
    hideLevelSourceValue: number;
  };
};

type BloodHuntsMapSnapshot = {
  schemaVersion: number;
  sourceKind: string;
  sourceRef: string;
  sourceRowCount: number;
  entriesByGuid: Record<string, BloodHuntsMapEntry>;
};

type PrefabDisplayMapEntry = {
  displayNameEn?: string;
};

type NpcClassificationMapEntry = {
  guid?: number;
  isVBlood?: boolean;
  bloodType?: string;
};

type NpcPortraitCandidateEntry = {
  assetName: string;
  assetFamily: string;
  assetSourceRefs: string[];
  joinStatus: string;
  approvalStatus?: string;
  approvalNote?: string;
  candidatePrefab?: string;
  candidateGuid?: number;
  displayNameEn?: string;
  evidenceRefs: string[];
  reason: string;
};

type NpcPortraitCandidatesSnapshot = {
  schemaVersion: number;
  sourceKind: string;
  sourceRefs: string[];
  totalAssets: number;
  currentVbloodRows: number;
  entriesByAssetName: Record<string, NpcPortraitCandidateEntry>;
};

type NpcPortraitMapEntry = {
  prefab: string;
  guid: number;
  displayNameEn: string;
  portraitAssetName: string;
  portraitAssetFamily: string;
  portraitAssetPath?: string;
  joinStatus: string;
  approvalStatus?: string;
  approvalNote?: string;
  evidenceRefs: string[];
};

type NpcPortraitMapSnapshot = {
  schemaVersion: number;
  sourceKind: string;
  sourceRef: string;
  totalCurrentVbloodRows: number;
  entriesByPrefab: Record<string, NpcPortraitMapEntry>;
};

type BuildablePortraitCandidateRow = {
  prefab: string;
  guid: number;
  displayNameEn?: string;
};

type BuildablePortraitCandidateEntry = {
  assetName: string;
  assetFamily: string;
  assetSourceRefs: string[];
  joinStatus: string;
  approvalStatus?: string;
  approvalNote?: string;
  candidatePrefab?: string;
  candidateGuid?: number;
  displayNameEn?: string;
  candidatePrefabs?: BuildablePortraitCandidateRow[];
  evidenceRefs: string[];
  reason: string;
};

type BuildablePortraitCandidatesSnapshot = {
  schemaVersion: number;
  sourceKind: string;
  sourceRefs: string[];
  totalAssets: number;
  currentBuildableRows: number;
  entriesByAssetName: Record<string, BuildablePortraitCandidateEntry>;
};

type BuildablePortraitMapEntry = {
  prefab: string;
  guid: number;
  displayNameEn?: string;
  portraitAssetName: string;
  portraitAssetFamily: string;
  portraitAssetPath?: string;
  joinStatus: string;
  approvalStatus?: string;
  approvalNote?: string;
  evidenceRefs: string[];
};

type BuildablePortraitMapSnapshot = {
  schemaVersion: number;
  sourceKind: string;
  sourceRef: string;
  totalCurrentBuildableRows: number;
  entriesByPrefab: Record<string, BuildablePortraitMapEntry>;
};

const prefabCategoryParityTargets = [
  ["AB", 8255],
  ["Ability", 13],
  ["AI", 121],
  ["Aim", 39],
  ["Ascendancy", 18],
  ["Base", 44],
  ["BEH", 374],
  ["Biome", 12],
  ["Blood", 36],
  ["BP", 150],
  ["Braziers", 11],
  ["Buff", 578],
  ["Castle", 33],
  ["Chain", 1456],
  ["CHAR", 533],
  ["CO", 314],
  ["Copper", 10],
  ["Creature", 87],
  ["Critter", 27],
  ["Curtains", 11],
  ["Curve", 18],
  ["DG", 387],
  ["Door", 13],
  ["DT", 526],
  ["Dye", 77],
  ["Dynamic", 520],
  ["Dynamics", 101],
  ["Ease", 17],
  ["EH", 27],
  ["Elris", 21],
  ["Equip", 68],
  ["Faction", 36],
  ["Fake", 22],
  ["Garden", 36],
  ["Gloom", 42],
  ["Gravestone", 12],
  ["Graveyard", 38],
  ["Ground", 929],
  ["Illusion", 10],
  ["Iron", 10],
  ["Item", 1174],
  ["Journal", 163],
  ["Map", 145],
  ["Micro", 85],
  ["Milo", 21],
  ["Music", 23],
  ["NPCDeadeye", 11],
  ["PVP", 10],
  ["Quarry", 21],
  ["Random", 55],
  ["Recipe", 667],
  ["Resource", 139],
  ["Rock", 11],
  ["SCT", 40],
  ["Servant", 76],
  ["Set", 76],
  ["Snapping", 38],
  ["Snow", 21],
  ["Spell", 346],
  ["Stash", 17],
  ["Stat", 41],
  ["Station", 23],
  ["Storm", 11],
  ["Sun", 12],
  ["Tech", 377],
  ["TM", 3778],
  ["Transmog", 33],
  ["Trees", 385],
  ["UC", 397],
  ["Undead", 15],
  ["Unholy", 15],
  ["Vampire", 186],
  ["VIB", 98],
  ["VM", 316],
  ["Water", 108],
  ["Weapon", 46],
  ["Wild", 21],
  ["ZM", 10]
] as const;

async function readJson<T>(filePath: string): Promise<T> {
  return JSON.parse(await readFile(filePath, "utf8")) as T;
}

function assert(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(message);
  }
}

function validateEntry(entry: IndexEntry, source: string): void {
  assert(isSafeSlug(entry.slug), `${source}: invalid slug '${entry.slug}'`);
  assert(entry.path.endsWith(`/${entry.slug}`), `${source}: path '${entry.path}' does not end with '/${entry.slug}'`);
}

function normalizeCollectionKey(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function countPrefabMapEntries(raw: unknown): number {
  if (Array.isArray(raw)) {
    return raw.length;
  }

  if (raw && typeof raw === "object") {
    return Object.keys(raw).length;
  }

  return 0;
}

function parsePrefabCountBadge(entry: IndexEntry | undefined, source: string): number {
  const badge = entry?.badges?.[0] ?? "";
  const match = badge.match(/^(\d+)\s+prefabs?$/);
  assert(Boolean(match), `${source}: collection '${entry?.title ?? "missing"}' is missing a '<count> prefab(s)' badge`);
  return Number(match?.[1]);
}

async function validatePrefabCategoryParity(repoRoot: string, entries: IndexEntry[]): Promise<void> {
  const collectionsByKey = new Map(
    entries.filter((entry) => entry.kind === "collection" && entry.title).map((entry) => [normalizeCollectionKey(entry.title ?? ""), entry])
  );

  for (const [name, expectedCount] of prefabCategoryParityTargets) {
    const sourcePath = path.join(repoRoot, "data", "prefabs", `${name}.json`);
    const sourceCount = countPrefabMapEntries(await readJson<unknown>(sourcePath));
    assert(sourceCount === expectedCount, `${sourcePath}: expected ${expectedCount} source prefabs for wiki category parity, found ${sourceCount}`);

    const collection = collectionsByKey.get(normalizeCollectionKey(name));
    assert(Boolean(collection), `${sourcePath}: generated prefab reference index is missing collection '${name}'`);
    const generatedCount = parsePrefabCountBadge(collection, sourcePath);
    assert(generatedCount === expectedCount, `${sourcePath}: generated collection '${name}' has ${generatedCount} prefabs, expected ${expectedCount}`);
  }

  const allSourcePath = path.join(repoRoot, "data", "prefabs", "All.json");
  const allSourceCount = countPrefabMapEntries(await readJson<unknown>(allSourcePath));
  const allCollection = collectionsByKey.get("all");
  assert(Boolean(allCollection), `${allSourcePath}: generated prefab reference index is missing collection 'All'`);
  const allGeneratedCount = parsePrefabCountBadge(allCollection, allSourcePath);
  assert(allGeneratedCount === allSourceCount, `${allSourcePath}: generated All collection has ${allGeneratedCount} prefabs, expected ${allSourceCount}`);
}

function assertBloodHuntsNameKey(value: BloodHuntsNameKey | undefined, source: string): void {
  assert(Boolean(value), `${source}: missing nameKey`);
  for (const key of ["_a", "_b", "_c", "_d"] as const) {
    assert(typeof value?.[key] === "number" && Number.isFinite(value[key]), `${source}.nameKey.${key}: missing numeric localization key part`);
  }
}

function assertNoForbiddenBloodHuntsKeys(value: unknown, source: string): void {
  if (Array.isArray(value)) {
    value.forEach((entry, index) => assertNoForbiddenBloodHuntsKeys(entry, `${source}[${index}]`));
    return;
  }
  if (!value || typeof value !== "object") {
    return;
  }

  for (const [key, nested] of Object.entries(value)) {
    assert(!/assetguid/i.test(key), `${source}: forbidden Unity AssetGuid field '${key}'`);
    assert(!/^m_pathid$/i.test(key), `${source}: forbidden Unity path ID field '${key}'`);
    assert(!/sprite/i.test(key), `${source}: forbidden sprite field '${key}'`);
    assert(!/portrait/i.test(key), `${source}: forbidden portrait field '${key}'`);
    assert(!/tiny/i.test(key), `${source}: forbidden tiny icon field '${key}'`);
    assert(!/menu/i.test(key), `${source}: forbidden menu UI field '${key}'`);
    assert(!/icon/i.test(key), `${source}: forbidden icon field '${key}'`);
    assertNoForbiddenBloodHuntsKeys(nested, `${source}.${key}`);
  }
}

async function validateBloodHuntsMap(repoRoot: string): Promise<void> {
  const bloodHuntsMapPath = path.join(repoRoot, "data", "enrichment", "blood-hunts-map.json");
  const allPrefabsPath = path.join(repoRoot, "data", "prefabs", "All.json");
  const localizedNamesPath = path.join(repoRoot, "data", "enrichment", "prefab-localization.json");
  const npcDisplayPath = path.join(repoRoot, "data", "enrichment", "npc-display-map.json");

  const [bloodHuntsMap, allPrefabs, localizedNames, npcDisplay] = await Promise.all([
    readJson<BloodHuntsMapSnapshot>(bloodHuntsMapPath),
    readJson<Record<string, number>>(allPrefabsPath),
    readJson<{ namesByGuid?: Record<string, string> }>(localizedNamesPath),
    readJson<Record<string, PrefabDisplayMapEntry>>(npcDisplayPath)
  ]);

  assert(bloodHuntsMap.schemaVersion === 1, `${bloodHuntsMapPath}: expected schemaVersion 1`);
  assert(bloodHuntsMap.sourceKind === bloodHuntsSourceKind, `${bloodHuntsMapPath}: unexpected sourceKind '${bloodHuntsMap.sourceKind}'`);
  assert(bloodHuntsMap.sourceRef === "MonoBehaviour/BloodHuntsDataAuthoring.json", `${bloodHuntsMapPath}: unexpected sourceRef '${bloodHuntsMap.sourceRef}'`);
  assert(bloodHuntsMap.sourceRowCount === 61, `${bloodHuntsMapPath}: expected sourceRowCount 61, found ${bloodHuntsMap.sourceRowCount}`);
  assertNoForbiddenBloodHuntsKeys(bloodHuntsMap, bloodHuntsMapPath);

  const entries = Object.entries(bloodHuntsMap.entriesByGuid ?? {});
  assert(entries.length === 61, `${bloodHuntsMapPath}: expected 61 Blood Hunts entries, found ${entries.length}`);

  for (const [guidKey, entry] of entries) {
    const source = `${bloodHuntsMapPath}:${guidKey}`;
    assert(guidKey === String(entry.guid), `${source}: map key must match entry guid`);
    assert(typeof entry.prefab === "string" && entry.prefab.trim().length > 0, `${source}: missing prefab`);
    assert(allPrefabs[entry.prefab] === entry.guid, `${source}: prefab '${entry.prefab}' does not join through ${allPrefabsPath}`);
    const localizedName = localizedNames.namesByGuid?.[guidKey];
    const npcDisplayName = npcDisplay[entry.prefab]?.displayNameEn;
    assert(typeof localizedName === "string" && localizedName.trim().length > 0, `${source}: missing localized name join`);
    assert(typeof npcDisplayName === "string" && npcDisplayName.trim().length > 0, `${source}: missing NPC display name join`);
    assert(typeof entry.bloodHuntLevel === "number" && entry.bloodHuntLevel > 0, `${source}: missing positive bloodHuntLevel`);
    assert(typeof entry.bloodHuntHideLevel === "boolean", `${source}: bloodHuntHideLevel must be boolean`);
    assertBloodHuntsNameKey(entry.nameKey, source);
    assert(entry.nameLocalizationGuid === nameKeyToLocalizationGuid(entry.nameKey), `${source}: nameLocalizationGuid must be derived from nameKey`);
    assert(entry.provenance?.sourceKind === bloodHuntsSourceKind, `${source}: missing Blood Hunts source provenance`);
    assert(entry.provenance.sourceRef === bloodHuntsMap.sourceRef, `${source}: entry sourceRef must match map sourceRef`);
    assert(entry.provenance.prefabSourceRef === "data/prefabs/All.json", `${source}: unexpected prefabSourceRef`);
    assert(entry.provenance.localizedNameSourceRef === "data/enrichment/prefab-localization.json:namesByGuid", `${source}: unexpected localizedNameSourceRef`);
    assert(entry.provenance.localizedTextSourceRef === "Resources/Localization/English.json:Nodes", `${source}: unexpected localizedTextSourceRef`);
    assert(entry.provenance.npcDisplaySourceRef === "data/enrichment/npc-display-map.json", `${source}: unexpected npcDisplaySourceRef`);
    assert(
      Number(entry.provenance.hideLevelSourceValue) === (entry.bloodHuntHideLevel ? 1 : 0),
      `${source}: hideLevelSourceValue must match bloodHuntHideLevel`
    );
  }
}

async function validateNpcPortraitMaps(repoRoot: string): Promise<void> {
  const candidatesPath = path.join(repoRoot, "data", "enrichment", "npc-portrait-candidates.json");
  const portraitMapPath = path.join(repoRoot, "data", "enrichment", "npc-portrait-map.json");
  const allPrefabsPath = path.join(repoRoot, "data", "prefabs", "All.json");
  const npcDisplayPath = path.join(repoRoot, "data", "enrichment", "npc-display-map.json");
  const npcClassificationPath = path.join(repoRoot, "data", "enrichment", "npc-classification-map.json");
  const bloodHuntsMapPath = path.join(repoRoot, "data", "enrichment", "blood-hunts-map.json");

  const [candidates, portraitMap, allPrefabs, npcDisplay, npcClassification, bloodHuntsMap] = await Promise.all([
    readJson<NpcPortraitCandidatesSnapshot>(candidatesPath),
    readJson<NpcPortraitMapSnapshot>(portraitMapPath),
    readJson<Record<string, number>>(allPrefabsPath),
    readJson<Record<string, PrefabDisplayMapEntry>>(npcDisplayPath),
    readJson<Record<string, NpcClassificationMapEntry>>(npcClassificationPath),
    readJson<BloodHuntsMapSnapshot>(bloodHuntsMapPath)
  ]);
  const bloodHuntsPrefabs = new Set(Object.values(bloodHuntsMap.entriesByGuid ?? {}).map((entry) => entry.prefab));

  assert(candidates.schemaVersion === 1, `${candidatesPath}: expected schemaVersion 1`);
  assert(candidates.sourceKind === npcPortraitCandidatesSourceKind, `${candidatesPath}: unexpected sourceKind '${candidates.sourceKind}'`);
  assert(candidates.totalAssets === Object.keys(candidates.entriesByAssetName ?? {}).length, `${candidatesPath}: totalAssets must match entriesByAssetName count`);
  assert(portraitMap.schemaVersion === 1, `${portraitMapPath}: expected schemaVersion 1`);
  assert(portraitMap.sourceKind === npcPortraitMapSourceKind, `${portraitMapPath}: unexpected sourceKind '${portraitMap.sourceKind}'`);
  assert(portraitMap.sourceRef === "data/enrichment/npc-portrait-candidates.json", `${portraitMapPath}: unexpected sourceRef`);

  const validJoinStatuses = new Set(["source-backed", "user-attested", "circumstantial", "unsafe"]);
  const validApprovalStatuses = new Set(["pending", "approved", "rejected"]);
  for (const [assetName, entry] of Object.entries(candidates.entriesByAssetName ?? {})) {
    const source = `${candidatesPath}:${assetName}`;
    assert(entry.assetName === assetName, `${source}: assetName must match map key`);
    assert(validJoinStatuses.has(entry.joinStatus), `${source}: invalid joinStatus '${entry.joinStatus}'`);
    assert(Array.isArray(entry.assetSourceRefs) && entry.assetSourceRefs.length > 0, `${source}: missing assetSourceRefs`);
    assert(Array.isArray(entry.evidenceRefs) && entry.evidenceRefs.length > 0, `${source}: missing evidenceRefs`);
    assert(typeof entry.reason === "string" && entry.reason.trim().length > 0, `${source}: missing reason`);
    if (entry.joinStatus !== "source-backed") {
      assert(Boolean(entry.approvalStatus), `${source}: non-source-backed row must carry approvalStatus`);
      assert(validApprovalStatuses.has(entry.approvalStatus ?? ""), `${source}: invalid approvalStatus '${entry.approvalStatus}'`);
    }
  }

  for (const [prefab, entry] of Object.entries(portraitMap.entriesByPrefab ?? {})) {
    const source = `${portraitMapPath}:${prefab}`;
    assert(entry.prefab === prefab, `${source}: prefab must match map key`);
    assert(entry.joinStatus === "source-backed" || entry.joinStatus === "user-attested", `${source}: unusable joinStatus '${entry.joinStatus}' promoted into portrait map`);
    assert(entry.joinStatus !== "user-attested" || entry.approvalStatus === "approved", `${source}: user-attested row must be approved before promotion`);
    assert(!unsafeNpcPortraitPrefabPattern.test(prefab), `${source}: unsafe prefab variant promoted into portrait map`);
    assert(allPrefabs[prefab] === entry.guid, `${source}: prefab '${prefab}' does not join through ${allPrefabsPath}`);
    assert(npcDisplay[prefab]?.displayNameEn === entry.displayNameEn, `${source}: displayNameEn does not match ${npcDisplayPath}`);
    const classificationEntry = npcClassification[prefab];
    assert(
      classificationEntry?.isVBlood === true || classificationEntry?.bloodType === "V Blood" || bloodHuntsPrefabs.has(prefab),
      `${source}: portrait map row must join a current V Blood NPC classification or Blood Hunts row`
    );
    const candidate = candidates.entriesByAssetName?.[entry.portraitAssetName];
    assert(Boolean(candidate), `${source}: portraitAssetName '${entry.portraitAssetName}' missing from ${candidatesPath}`);
    assert(candidate?.candidatePrefab === prefab, `${source}: candidate prefab does not match promoted prefab`);
    assert(candidate?.candidateGuid === entry.guid, `${source}: candidate guid does not match promoted guid`);
    assert(candidate?.joinStatus === entry.joinStatus, `${source}: candidate joinStatus does not match promoted joinStatus`);
    assert(Array.isArray(entry.evidenceRefs) && entry.evidenceRefs.length > 0, `${source}: missing evidenceRefs`);
    if (entry.portraitAssetPath) {
      assert(entry.joinStatus === "source-backed" || entry.approvalStatus === "approved", `${source}: portraitAssetPath requires source-backed or approved user-attested evidence`);
      assertNpcPortraitPath(entry.portraitAssetPath, source);
      assert(path.posix.basename(entry.portraitAssetPath) === entry.portraitAssetName, `${source}: portraitAssetPath basename must match portraitAssetName`);
      assert(
        entry.evidenceRefs.includes(`Texture2D/${entry.portraitAssetName}`) || entry.evidenceRefs.includes(`Sprite/${entry.portraitAssetName}`),
        `${source}: portraitAssetPath must be backed by a Texture2D or Sprite evidence ref`
      );
      await assertPublicIconExists(repoRoot, entry.portraitAssetPath, source);
    }
  }
}

async function validateBuildablePortraitMaps(repoRoot: string): Promise<void> {
  const candidatesPath = path.join(repoRoot, "data", "enrichment", "buildable-portrait-candidates.json");
  const portraitMapPath = path.join(repoRoot, "data", "enrichment", "buildable-portrait-map.json");
  const allPrefabsPath = path.join(repoRoot, "data", "prefabs", "All.json");
  const workstationDisplayPath = path.join(repoRoot, "data", "enrichment", "workstation-display-map.json");
  const blueprintDisplayPath = path.join(repoRoot, "data", "enrichment", "blueprint-display-map.json");

  const [candidates, portraitMap, allPrefabs, workstationDisplay, blueprintDisplay] = await Promise.all([
    readJson<BuildablePortraitCandidatesSnapshot>(candidatesPath),
    readJson<BuildablePortraitMapSnapshot>(portraitMapPath),
    readJson<Record<string, number>>(allPrefabsPath),
    readJson<Record<string, PrefabDisplayMapEntry>>(workstationDisplayPath),
    readJson<Record<string, PrefabDisplayMapEntry>>(blueprintDisplayPath)
  ]);
  const currentBuildableRows = Object.keys(allPrefabs).filter((prefab) => /^(TM|BP)_/i.test(prefab)).length;

  assert(candidates.schemaVersion === 1, `${candidatesPath}: expected schemaVersion 1`);
  assert(candidates.sourceKind === buildablePortraitCandidatesSourceKind, `${candidatesPath}: unexpected sourceKind '${candidates.sourceKind}'`);
  assert(candidates.totalAssets === Object.keys(candidates.entriesByAssetName ?? {}).length, `${candidatesPath}: totalAssets must match entriesByAssetName count`);
  assert(candidates.currentBuildableRows === currentBuildableRows, `${candidatesPath}: currentBuildableRows must match TM/BP prefab count`);
  assert(portraitMap.schemaVersion === 1, `${portraitMapPath}: expected schemaVersion 1`);
  assert(portraitMap.sourceKind === buildablePortraitMapSourceKind, `${portraitMapPath}: unexpected sourceKind '${portraitMap.sourceKind}'`);
  assert(portraitMap.sourceRef === "data/enrichment/buildable-portrait-candidates.json", `${portraitMapPath}: unexpected sourceRef`);
  assert(portraitMap.totalCurrentBuildableRows === currentBuildableRows, `${portraitMapPath}: totalCurrentBuildableRows must match TM/BP prefab count`);

  const validJoinStatuses = new Set(["source-backed", "user-attested", "circumstantial", "unsafe"]);
  const validApprovalStatuses = new Set(["pending", "approved", "rejected"]);
  for (const [assetName, entry] of Object.entries(candidates.entriesByAssetName ?? {})) {
    const source = `${candidatesPath}:${assetName}`;
    assert(entry.assetName === assetName, `${source}: assetName must match map key`);
    assert(validJoinStatuses.has(entry.joinStatus), `${source}: invalid joinStatus '${entry.joinStatus}'`);
    assert(Array.isArray(entry.assetSourceRefs) && entry.assetSourceRefs.length > 0, `${source}: missing assetSourceRefs`);
    assert(Array.isArray(entry.evidenceRefs) && entry.evidenceRefs.length > 0, `${source}: missing evidenceRefs`);
    assert(typeof entry.reason === "string" && entry.reason.trim().length > 0, `${source}: missing reason`);
    if (entry.joinStatus !== "source-backed") {
      assert(Boolean(entry.approvalStatus), `${source}: non-source-backed row must carry approvalStatus`);
      assert(validApprovalStatuses.has(entry.approvalStatus ?? ""), `${source}: invalid approvalStatus '${entry.approvalStatus}'`);
    }
    for (const row of entry.candidatePrefabs ?? []) {
      assert(allPrefabs[row.prefab] === row.guid, `${source}: candidate prefab '${row.prefab}' does not join through ${allPrefabsPath}`);
    }
  }

  for (const [prefab, entry] of Object.entries(portraitMap.entriesByPrefab ?? {})) {
    const source = `${portraitMapPath}:${prefab}`;
    assert(entry.prefab === prefab, `${source}: prefab must match map key`);
    assert(/^(TM|BP)_/i.test(prefab), `${source}: buildable portrait map row must target a TM/BP prefab`);
    assert(entry.joinStatus === "source-backed" || entry.joinStatus === "user-attested", `${source}: unusable joinStatus '${entry.joinStatus}' promoted into portrait map`);
    assert(entry.joinStatus !== "user-attested" || entry.approvalStatus === "approved", `${source}: user-attested row must be approved before promotion`);
    assert(allPrefabs[prefab] === entry.guid, `${source}: prefab '${prefab}' does not join through ${allPrefabsPath}`);

    const candidate = candidates.entriesByAssetName?.[entry.portraitAssetName];
    assert(Boolean(candidate), `${source}: portraitAssetName '${entry.portraitAssetName}' missing from ${candidatesPath}`);
    assert(candidate?.joinStatus === entry.joinStatus, `${source}: candidate joinStatus does not match promoted joinStatus`);
    assert(candidate?.assetFamily === entry.portraitAssetFamily, `${source}: candidate assetFamily does not match promoted portraitAssetFamily`);
    assert(Array.isArray(entry.evidenceRefs) && entry.evidenceRefs.length > 0, `${source}: missing evidenceRefs`);

    const candidateRows = candidate?.candidatePrefabs ?? [];
    assert(candidateRows.some((row) => row.prefab === prefab && row.guid === entry.guid), `${source}: promoted prefab is missing from candidatePrefabs`);
    const displayEntry = workstationDisplay[prefab] ?? blueprintDisplay[prefab];
    if (displayEntry?.displayNameEn) {
      assert(entry.displayNameEn === displayEntry.displayNameEn, `${source}: displayNameEn does not match display map`);
    }

    if (entry.portraitAssetPath) {
      assert(Boolean(workstationDisplay[prefab]), `${source}: portraitAssetPath is only approved for workstation rows`);
      assert(entry.joinStatus === "source-backed", `${source}: portraitAssetPath requires a source-backed join`);
      assertBuildablePortraitPath(entry.portraitAssetPath, source);
      assert(
        entry.evidenceRefs.includes(`Texture2D/${entry.portraitAssetName}`) || entry.evidenceRefs.includes(`Sprite/${entry.portraitAssetName}`),
        `${source}: portraitAssetPath must be backed by a Texture2D or Sprite evidence ref`
      );
      await assertPublicIconExists(repoRoot, entry.portraitAssetPath, source);
    }
  }

  const publicPortraitPaths = Object.values(portraitMap.entriesByPrefab ?? {}).filter((entry) => entry.portraitAssetPath).map((entry) => entry.portraitAssetPath as string);
  assert(publicPortraitPaths.length <= 25, `${portraitMapPath}: expected at most 25 materialized buildable portrait paths, found ${publicPortraitPaths.length}`);
  assert(
    portraitMap.entriesByPrefab.TM_CraftingStation_JewelcraftingTable?.portraitAssetPath === "/icons/buildables/Stunlock_Icon_Structure_JewelcraftingTable.png",
    `${portraitMapPath}: Jewelcrafting Table must keep the approved source-backed portrait path`
  );
}

function assertNoTextVariables(values: string[] | undefined, source: string, field: string): void {
  for (const value of values ?? []) {
    assert(!hasTextVariables(value), `${source}: ${field} '${value}' must not contain unresolved text-variable tokens`);
  }
}

function assertTextVariableValues(
  values: TextVariableResolutionMap | undefined,
  textFields: Array<string | undefined>,
  source: string
): void {
  if (!values) {
    return;
  }

  const sourceTokens = new Set(textFields.flatMap((value) => extractTextVariables(value)).map(normalizeTextVariableName));
  for (const [token, resolution] of Object.entries(values)) {
    assert(/^[A-Za-z0-9_]+$/.test(token), `${source}: textVariableValues key '${token}' is not a valid token name`);
    assert(sourceTokens.has(normalizeTextVariableName(token)), `${source}: textVariableValues.{${token}} does not appear in raw player copy`);
    assert(typeof resolution.value === "string" && resolution.value.trim().length > 0, `${source}: textVariableValues.{${token}} is missing value`);
    assert(!hasTextVariables(resolution.value), `${source}: textVariableValues.{${token}} value must not contain another unresolved token`);
    assert(
      isTextVariableSourceKind(resolution.sourceKind),
      `${source}: textVariableValues.{${token}} has unsupported sourceKind '${resolution.sourceKind}'`
    );
    assert(
      typeof resolution.sourceRef === "string" && resolution.sourceRef.trim().length > 0,
      `${source}: textVariableValues.{${token}} is missing sourceRef`
    );
  }
}

function isUnknownBadge(value: string | undefined): boolean {
  return value?.trim().toLowerCase() === "unknown";
}

function validateAbilityCatalog(entries: IndexEntry[], source: string): void {
  const expectedSchoolCounts = new Map([
    ["Blood", 9],
    ["Chaos", 9],
    ["Frost", 9],
    ["Illusion", 9],
    ["Storm", 9],
    ["Unholy", 9]
  ]);
  const actualSchoolCounts = new Map<string, number>();
  const catalogEntries = entries.filter((entry) => entry.catalogStatus === "catalog");

  assert(catalogEntries.length === 54, `${source}: expected 54 catalog ability entries, found ${catalogEntries.length}`);

  for (const entry of catalogEntries) {
    const school = entry.school ?? "";
    assert(school.trim().length > 0, `${source}:${entry.slug}: catalog ability is missing school`);
    assert(!isUnknownBadge(school), `${source}:${entry.slug}: catalog ability resolved to Unknown school`);
    assert(expectedSchoolCounts.has(school), `${source}:${entry.slug}: unexpected catalog school '${school}'`);
    assert(!(entry.categories ?? []).some(isUnknownBadge), `${source}:${entry.slug}: catalog ability categories must not include Unknown`);
    actualSchoolCounts.set(school, (actualSchoolCounts.get(school) ?? 0) + 1);
  }

  for (const [school, expectedCount] of expectedSchoolCounts) {
    const actualCount = actualSchoolCounts.get(school) ?? 0;
    assert(actualCount === expectedCount, `${source}: expected ${expectedCount} ${school} catalog abilities, found ${actualCount}`);
  }
}

function assertItemIconPath(icon: string | undefined, source: string): void {
  if (!icon) {
    return;
  }

  assert(icon.startsWith("/icons/items/"), `${source}: icon '${icon}' is not an approved item icon path`);
  assert(!icon.includes(".."), `${source}: icon '${icon}' must not contain parent traversal`);
}

function assertBuildablePortraitPath(icon: string | undefined, source: string): void {
  if (!icon) {
    return;
  }

  assert(icon.startsWith("/icons/buildables/"), `${source}: icon '${icon}' is not an approved buildable portrait path`);
  assert(!icon.includes(".."), `${source}: icon '${icon}' must not contain parent traversal`);
}

function assertNpcPortraitPath(icon: string | undefined, source: string): void {
  if (!icon) {
    return;
  }

  assert(icon.startsWith("/icons/npcs/"), `${source}: icon '${icon}' is not an approved NPC portrait path`);
  assert(icon.endsWith(".png"), `${source}: icon '${icon}' must be a PNG asset`);
  assert(!icon.includes(".."), `${source}: icon '${icon}' must not contain parent traversal`);
}

function collectRelatedIcons(detail: DetailEntry): Array<[string, string]> {
  const relationGroups: RelatedEntityGroupKey[] = ["repairRecipes", "relatedRecipes", "outputs", "requirements", "repairCosts", "spellJewels", "workstationOutputs", "inventoryPrefabs"];

  const icons: Array<[string, string]> = [];
  for (const key of relationGroups) {
    const refs = detail[key] ?? [];
    refs.forEach((ref, index) => {
      if (ref.icon) {
        icons.push([ref.icon, `${detail.slug}.${key}[${index}].icon`]);
      }
    });
  }
  return icons;
}

async function assertPublicIconExists(repoRoot: string, icon: string, source: string): Promise<void> {
  const iconPath = path.join(repoRoot, "public", icon.slice(1));
  try {
    await access(iconPath);
  } catch {
    throw new Error(
      `${source}: icon file '${icon}' does not exist at ${iconPath}. Run npm run refresh:db-assets from an approved asset source and commit the generated public/icons/items/ asset.`
    );
  }
}

async function main() {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

  const referenceSections = ["prefabs", "components", "systems", "queries"];
  let prefabReferenceEntries: IndexEntry[] = [];
  for (const section of referenceSections) {
    const filePath = path.join(repoRoot, "public", "data", "reference", section, "index.json");
    const entries = await readJson<IndexEntry[]>(filePath);
    if (section === "prefabs") {
      prefabReferenceEntries = entries;
    }
    for (const entry of entries) {
      assert(entry.path.startsWith(`/${section}/`), `${filePath}: path '${entry.path}' does not start with '/${section}/'`);
      validateEntry(entry, filePath);
    }
  }
  await validatePrefabCategoryParity(repoRoot, prefabReferenceEntries);
  await validateBloodHuntsMap(repoRoot);
  await validateNpcPortraitMaps(repoRoot);
  await validateBuildablePortraitMaps(repoRoot);

  const dbSections = ["items", "recipes", "npcs", "abilities", "workstations", "blueprints", "quests", "buffs", "itemsets"];
  const itemIndexBySlug = new Map<string, IndexEntry>();
  const itemIconSources = new Map<string, string>();

  const abilityTooltipMapPath = path.join(repoRoot, "data", "enrichment", "ability-tooltip-map.json");
  const abilityTooltipMap = await readJson<Record<string, EnrichmentTextEntry>>(abilityTooltipMapPath);
  for (const [prefab, entry] of Object.entries(abilityTooltipMap)) {
    assertTextVariableValues(entry.textVariableValues, [entry.tooltipTextEn], `${abilityTooltipMapPath}:${prefab}`);
  }

  const itemDescriptionMapPath = path.join(repoRoot, "data", "enrichment", "item-description-map.json");
  const itemDescriptionMap = await readJson<Record<string, EnrichmentTextEntry>>(itemDescriptionMapPath);
  for (const [prefab, entry] of Object.entries(itemDescriptionMap)) {
    assertTextVariableValues(entry.textVariableValues, [entry.descriptionTextEn], `${itemDescriptionMapPath}:${prefab}`);
  }

  for (const section of dbSections) {
    const filePath = path.join(repoRoot, "public", "data", "db", section, "index.json");
    const entries = await readJson<IndexEntry[]>(filePath);
    for (const entry of entries) {
      assert(entry.path.startsWith(`/db/${section}/`), `${filePath}: path '${entry.path}' does not start with '/db/${section}/'`);
      validateEntry(entry, filePath);
      assertNoTextVariables(entry.tags, `${filePath}:${entry.slug}`, "tag");
      assertNoTextVariables(entry.categories, `${filePath}:${entry.slug}`, "category");
      assertTextVariableValues(entry.textVariableValues, [entry.description, entry.excerpt], `${filePath}:${entry.slug}`);
      if (section === "items") {
        itemIndexBySlug.set(entry.slug, entry);
        assertItemIconPath(entry.icon, `${filePath}:${entry.slug}`);
        if (entry.icon) {
          itemIconSources.set(entry.icon, `${filePath}:${entry.slug}.icon`);
        }
      }
    }
    if (section === "abilities") {
      validateAbilityCatalog(entries, filePath);
    }
  }

  for (const section of dbSections) {
    const detailPath = path.join(repoRoot, "public", "data", "db", section, "by-slug");
    const detailFiles = (await readdir(detailPath)).filter((fileName) => fileName.endsWith(".json"));
    for (const fileName of detailFiles) {
      const filePath = path.join(detailPath, fileName);
      const detail = await readJson<DetailEntry>(filePath);
      assertTextVariableValues(
        detail.textVariableValues,
        [detail.description, detail.summary, detail.tooltipTextEn, detail.localizedDescriptionTextEn],
        `${filePath}:${detail.slug}`
      );
      if (section === "workstations" && detail.portraitAssetPath) {
        assertBuildablePortraitPath(detail.portraitAssetPath, `${filePath}:${detail.slug}.portraitAssetPath`);
        await assertPublicIconExists(repoRoot, detail.portraitAssetPath, `${filePath}:${detail.slug}.portraitAssetPath`);
      }
      if (section === "npcs" && detail.portraitAssetPath) {
        assertNpcPortraitPath(detail.portraitAssetPath, `${filePath}:${detail.slug}.portraitAssetPath`);
        await assertPublicIconExists(repoRoot, detail.portraitAssetPath, `${filePath}:${detail.slug}.portraitAssetPath`);
      }
    }
  }

  const itemDetailsPath = path.join(repoRoot, "public", "data", "db", "items", "by-slug");
  const itemDetailFiles = (await readdir(itemDetailsPath)).filter((fileName) => fileName.endsWith(".json"));
  for (const fileName of itemDetailFiles) {
    const filePath = path.join(itemDetailsPath, fileName);
    const detail = await readJson<DetailEntry>(filePath);
    const source = `${filePath}:${detail.slug}`;
    const itemIndex = itemIndexBySlug.get(detail.slug);

    if (!itemIndex) {
      throw new Error(`${source}: missing matching item index entry`);
    }
    assertItemIconPath(detail.icon, `${source}.icon`);
    assertItemIconPath(detail.iconAssetPath, `${source}.iconAssetPath`);

    if (detail.iconAssetPath) {
      assert(detail.icon === detail.iconAssetPath, `${source}: detail icon does not match iconAssetPath`);
      assert(itemIndex.icon === detail.iconAssetPath, `${source}: index icon does not match iconAssetPath`);
    }

    for (const [icon, iconSource] of collectRelatedIcons(detail)) {
      assertItemIconPath(icon, `${filePath}:${iconSource}`);
      itemIconSources.set(icon, `${filePath}:${iconSource}`);
    }

    if (detail.icon) {
      itemIconSources.set(detail.icon, `${source}.icon`);
    }
    if (detail.iconAssetPath) {
      itemIconSources.set(detail.iconAssetPath, `${source}.iconAssetPath`);
    }
  }

  for (const section of ["abilities", "recipes", "workstations"]) {
    const detailPath = path.join(repoRoot, "public", "data", "db", section, "by-slug");
    const detailFiles = (await readdir(detailPath)).filter((fileName) => fileName.endsWith(".json"));
    for (const fileName of detailFiles) {
      const filePath = path.join(detailPath, fileName);
      const detail = await readJson<DetailEntry>(filePath);
      for (const [icon, iconSource] of collectRelatedIcons(detail)) {
        assertItemIconPath(icon, `${filePath}:${iconSource}`);
        itemIconSources.set(icon, `${filePath}:${iconSource}`);
      }
    }
  }

  for (const [icon, source] of itemIconSources) {
    await assertPublicIconExists(repoRoot, icon, source);
  }

  const searchPath = path.join(repoRoot, "public", "data", "search.index.json");
  const searchEntries = await readJson<IndexEntry[]>(searchPath);
  for (const entry of searchEntries) {
    assert(entry.path.includes(`/${entry.slug}`), `${searchPath}: path '${entry.path}' does not include slug '${entry.slug}'`);
    assertTextVariableValues(entry.textVariableValues, [entry.description, entry.excerpt], `${searchPath}:${entry.slug}`);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
