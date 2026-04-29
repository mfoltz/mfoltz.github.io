import { copyFile, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const defaultBloodcraftResourcesDir = "C:/Users/mitch/source/Repos/Bloodcraft/Resources";
const defaultEclipseResourcesDir = "C:/Users/mitch/source/Repos/Eclipse/Resources";
const defaultAssetDumpDir = "C:/Users/mitch/OneDrive/Documents/Assets";
const defaultLegacyExtractorDataDir = "C:/Users/mitch/source/Repos/VRising.DataExtractor/Data";
const defaultExtractorRunsDir = "C:/Users/mitch/source/Repos/VRising.DataExtractor/.codex/runs";
const defaultExtractorSnapshotDirName = "VRising.DataExtractor";
const ignoredCatalogAssets = new Set(["Shadow"]);
const npcCategories = new Set(["CHAR", "Creature", "Servant", "Vampire", "Critter"]);

const manualAbilityIconAliases: Record<string, string[]> = {
  AB_Blood_BloodFountain_AbilityGroup: ["BloodFontain"],
  AB_Chaos_MercilessCharge_AbilityGroup: ["ChaosCharge"],
  AB_Illusion_Curse_Group: ["Illusion_Curse"],
  AB_Illusion_WispDance_AbilityGroup: ["WhispDance"],
  AB_Storm_BallLightning_AbilityGroup: ["Lightning_Ball"],
  AB_Unholy_CorpseExplosion_AbilityGroup: ["Baneling"],
  AB_Unholy_CorruptedSkull_AbilityGroup: ["Pestilence"],
  AB_Unholy_UnstableArachnid_AbilityGroup: ["Unholy_Mosquito"],
  AB_Vampire_VeilOfBones_AbilityGroup: ["VeilOfUnholy"]
};

type EnrichmentSourceKind =
  | "catalog-seed"
  | "localized-resource"
  | "extractor-raw"
  | "extractor-model"
  | "legacy-extractor"
  | "legacy-canonical"
  | "alias-match"
  | "generated-fallback"
  | "manual-curated";

interface ResolvedSourceFile {
  filePath: string;
  sourceKind: EnrichmentSourceKind;
  sourceRef: string;
}

interface ProvenanceFields {
  sourceKind?: EnrichmentSourceKind;
  sourceRef?: string;
}

interface LocalizedNameSnapshot {
  namesByGuid: Record<string, string>;
}

interface LocalizedNameContext {
  namesByGuid: Record<string, string>;
  nameSourceRefByGuid: Record<string, string>;
  englishTextByGuid: Map<string, string>;
  englishSourceRefByGuid: Map<string, string>;
}

interface AbilityCatalogEntry {
  prefab: string;
  guid: number;
  school: string;
  tier: string;
  displayName: string;
  icon?: string;
}

interface AbilityCatalogSnapshot {
  entries: AbilityCatalogEntry[];
}

interface AbilityIconManifestSnapshot {
  iconsByPrefab: Record<string, string>;
  missingPrefabs: string[];
}

interface AbilityTooltipMapEntry {
  abilityPrefab: string;
  abilityGuid: number;
  tooltipEntryId?: string;
  tooltipLocalizationGuid?: string;
  tooltipTextEn?: string;
}

type AbilityTooltipEnrichedEntry = AbilityTooltipMapEntry & ProvenanceFields;

type AbilityTooltipMapSnapshot = Record<string, AbilityTooltipEnrichedEntry>;

interface ItemIconMapEntry {
  itemPrefab: string;
  itemGuid: number;
  iconAssetName?: string;
  iconAssetPath?: string;
}

type ItemIconEnrichedEntry = ItemIconMapEntry & ProvenanceFields;

type ItemIconMapSnapshot = Record<string, ItemIconEnrichedEntry>;

interface ItemIconManifestSnapshot {
  iconsByPrefab: Record<string, string>;
  missingPrefabs: string[];
}

interface ItemDescriptionMapEntry {
  itemPrefab: string;
  itemGuid: number;
  displayNameEn?: string;
  descriptionLocalizationGuid?: string;
  descriptionTextEn?: string;
}

type ItemDescriptionEnrichedEntry = ItemDescriptionMapEntry & ProvenanceFields;

type ItemDescriptionMapSnapshot = Record<string, ItemDescriptionEnrichedEntry>;

interface RecipeLinkRef {
  prefab: string;
  guid: number;
  amount?: number;
}

interface RecipeLinkMapEntry {
  recipePrefab: string;
  recipeGuid: number;
  outputs: RecipeLinkRef[];
  requirements: RecipeLinkRef[];
  repairCosts: RecipeLinkRef[];
}

type RecipeLinkEnrichedEntry = RecipeLinkMapEntry & ProvenanceFields;

type RecipeLinkMapSnapshot = Record<string, RecipeLinkEnrichedEntry>;

interface PrefabDisplayMapEntry {
  prefab: string;
  guid: number;
  displayNameEn?: string;
  displayLocalizationGuid?: string;
  summaryEn?: string;
  iconAssetName?: string;
  iconAssetPath?: string;
}

type PrefabDisplayEnrichedEntry = PrefabDisplayMapEntry & ProvenanceFields;

type PrefabDisplayMapSnapshot = Record<string, PrefabDisplayEnrichedEntry>;
type JsonRecord = Record<string, unknown>;

interface PrefabDocument {
  filePath: string;
  prefabName: string;
  guid: number | null;
  categories: string[];
  body: string;
}

interface ParsedComponent {
  name: string;
  fields: Record<string, string>;
  entries: Array<Record<string, string>>;
}

interface PrefabReference {
  prefab: string;
  guid: number;
}

interface CoverageMetric {
  total: number;
  matched: number;
  coveragePct: number;
  signal: "high-signal";
  lowSignalExcluded: number;
}

interface ItemIconUnresolvedEntry {
  itemPrefab: string;
  itemGuid: number;
  sourceKind?: EnrichmentSourceKind;
  sourceRef?: string;
}

interface ItemIconUnresolvedSnapshot {
  totalItems: number;
  extractorResolved: number;
  aliasResolved: number;
  unresolved: number;
  unresolvedEntries: ItemIconUnresolvedEntry[];
}

interface DisplayDomainConfig {
  domainName: string;
  fileName: string;
  envSingle: string;
  envMany: string;
  defaults: string[];
  extractorModelFiles?: string[];
  prefabPattern: RegExp;
  iconPattern: RegExp;
  docFilter: (doc: PrefabDocument) => boolean;
}

const extractorArtifactSignalCountCache = new Map<string, number>();

function normalizeValue(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function normalizeText(value: string | undefined): string | undefined {
  if (!value) {
    return undefined;
  }

  const normalized = value
    .replace(/\r?\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return normalized ? normalized : undefined;
}

function normalizeId(value: string | undefined): string | undefined {
  const normalized = value?.trim();
  return normalized ? normalized : undefined;
}

function normalizeGuid(value: string | undefined): string | undefined {
  if (!value) {
    return undefined;
  }

  const trimmed = value.trim().replace(/^\{/, "").replace(/\}$/, "");
  if (!trimmed) {
    return undefined;
  }

  const guidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return guidPattern.test(trimmed) ? trimmed.toLowerCase() : undefined;
}

function normalizeAssetFileName(value: string | undefined): string | undefined {
  const normalized = normalizeId(value)?.replace(/\\/g, "/");
  if (!normalized) {
    return undefined;
  }

  const fileName = path.posix.basename(normalized);
  return fileName.toLowerCase().endsWith(".png") ? fileName : `${fileName}.png`;
}

function normalizeAssetPath(value: string | undefined): string | undefined {
  const normalized = normalizeId(value)?.replace(/\\/g, "/");
  if (!normalized) {
    return undefined;
  }

  return normalized.startsWith("/") ? normalized : `/${normalized}`;
}

function normalizeSourceRef(value: string | undefined): string | undefined {
  const normalized = normalizeId(value)?.replace(/\\/g, "/");
  return normalized ? normalized : undefined;
}

function sourceKindRank(sourceKind: EnrichmentSourceKind | undefined): number {
  switch (sourceKind) {
    case "catalog-seed":
      return 0;
    case "generated-fallback":
      return 1;
    case "alias-match":
      return 2;
    case "localized-resource":
      return 3;
    case "legacy-canonical":
      return 4;
    case "legacy-extractor":
      return 5;
    case "extractor-raw":
      return 6;
    case "extractor-model":
      return 7;
    case "manual-curated":
      return 8;
    default:
      return -1;
  }
}

function mergeProvenance(
  left: ProvenanceFields,
  right: ProvenanceFields,
  fallbackSourceRef: string | undefined
): Required<Pick<ProvenanceFields, "sourceKind">> & ProvenanceFields {
  const leftKind = left.sourceKind;
  const rightKind = right.sourceKind;
  const winnerKind = sourceKindRank(rightKind) > sourceKindRank(leftKind) ? rightKind : leftKind;
  const sourceKind = winnerKind ?? rightKind ?? leftKind ?? "generated-fallback";
  const sourceRef = normalizeSourceRef(
    sourceKind === rightKind ? right.sourceRef ?? left.sourceRef : left.sourceRef ?? right.sourceRef ?? fallbackSourceRef
  );
  return {
    sourceKind,
    ...(sourceRef ? { sourceRef } : {})
  };
}

function inferLegacySourceKind(sourcePath: string): EnrichmentSourceKind {
  const normalizedPath = sourcePath.toLowerCase().replace(/\\/g, "/");
  if (normalizedPath.includes("/data/enrichment/")) {
    return "legacy-canonical";
  }
  if (normalizedPath.includes("/vrising.dataextractor/") || normalizedPath.includes("/assets/legacy/")) {
    return "legacy-extractor";
  }
  return "legacy-canonical";
}

function canonicalSourceRef(sourcePath: string): string {
  const normalizedPath = sourcePath.replace(/\\/g, "/");
  const lowerPath = normalizedPath.toLowerCase();
  const fileName = path.posix.basename(normalizedPath);

  const extractorRunIndex = lowerPath.indexOf("/vrising.dataextractor/.codex/runs/");
  if (extractorRunIndex !== -1) {
    return normalizedPath.slice(extractorRunIndex + 1);
  }
  if (lowerPath.includes("/data/enrichment/")) {
    return `data/enrichment/${fileName}`;
  }
  if (lowerPath.includes("/vrising.dataextractor/data/")) {
    return `VRising.DataExtractor/Data/${fileName}`;
  }
  if (lowerPath.includes("/assets/legacy/")) {
    return `Assets/legacy/${fileName}`;
  }
  return fileName;
}

function toNumber(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  if (typeof value === "string") {
    const parsed = Number(value.trim());
    return Number.isFinite(parsed) ? parsed : undefined;
  }
  return undefined;
}

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readString(record: JsonRecord, keys: string[]): string | undefined {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" && value.trim().length > 0) {
      return value.trim();
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

function readGuidFromUnknown(value: unknown): string | undefined {
  if (typeof value === "string") {
    return normalizeGuid(value);
  }
  if (!isRecord(value)) {
    return undefined;
  }

  return normalizeGuid(readString(value, ["guid", "Guid", "key", "Key", "localizationGuid", "LocalizationGuid"]));
}

function readTextFromUnknown(value: unknown): string | undefined {
  if (typeof value === "string") {
    return normalizeText(value);
  }

  if (!isRecord(value)) {
    return undefined;
  }

  const directText = normalizeText(readString(value, ["Text", "text", "value", "Value", "descriptionText", "DescriptionText"]));
  if (directText) {
    return directText;
  }

  const nestedCandidates = [
    value.Description,
    value.description,
    value.LocalizedDescription,
    value.localizedDescription,
    value.Key,
    value.key
  ];
  for (const nested of nestedCandidates) {
    const nestedText = readTextFromUnknown(nested);
    if (nestedText) {
      return nestedText;
    }
  }

  return undefined;
}

function readGuidDeep(value: unknown): string | undefined {
  const direct = readGuidFromUnknown(value);
  if (direct) {
    return direct;
  }

  if (!isRecord(value)) {
    return undefined;
  }

  const nestedCandidates = [
    value.Key,
    value.key,
    value.Guid,
    value.guid,
    value.LocalizationGuid,
    value.localizationGuid,
    value.Description,
    value.description,
    value.LocalizedDescription,
    value.localizedDescription
  ];
  for (const nested of nestedCandidates) {
    const nestedGuid = readGuidDeep(nested);
    if (nestedGuid) {
      return nestedGuid;
    }
  }

  return undefined;
}

function readTooltipEntryIdFromUnknown(value: unknown): string | undefined {
  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value);
  }
  if (typeof value === "string" && value.trim().length > 0) {
    return value.trim();
  }
  if (!isRecord(value)) {
    return undefined;
  }

  return (
    normalizeId(readString(value, ["pathID", "PathID", "pathId", "PathId", "id", "Id", "entityId", "EntityId"])) ??
    readTooltipEntryIdFromUnknown(value.Entity_Self) ??
    readTooltipEntryIdFromUnknown(value.entitySelf)
  );
}

function parseStringList(raw: string | undefined): string[] {
  if (!raw) {
    return [];
  }
  return raw
    .replace(/[\[\]']/g, "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

function parseFrontMatter(markdown: string): { body: string; frontMatter: Record<string, string> } {
  if (!markdown.startsWith("---")) {
    return { body: markdown, frontMatter: {} };
  }

  const end = markdown.indexOf("\n---", 3);
  if (end === -1) {
    return { body: markdown, frontMatter: {} };
  }

  const raw = markdown.slice(3, end).trim();
  const frontMatter: Record<string, string> = {};
  for (const line of raw.split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) {
      continue;
    }
    frontMatter[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }

  return { body: markdown.slice(end + 4), frontMatter };
}

function parseComponentHeading(line: string): string | null {
  const linkMatch = line.match(/^- \[(.+?)\]\(/);
  if (linkMatch) {
    return linkMatch[1];
  }

  const boldMatch = line.match(/^- \*\*(.+?)\*\*$/);
  if (!boldMatch) {
    return null;
  }

  const label = boldMatch[1];
  if (/^\[\d+\]$/.test(label) || /^[01]+$/.test(label)) {
    return null;
  }

  return label;
}

function parseNestedKeyValue(line: string): { key: string; value: string } | null {
  const match = line.match(/^- `([^:]+):\s*(.*)`$/);
  if (!match) {
    return null;
  }

  return { key: match[1].trim(), value: match[2].trim() };
}

function parseComponents(body: string): Map<string, ParsedComponent> {
  const components = new Map<string, ParsedComponent>();
  const lines = body.split(/\r?\n/);
  let current: ParsedComponent | null = null;
  let currentEntry: Record<string, string> | null = null;

  const commitCurrent = () => {
    if (current) {
      components.set(current.name, current);
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line === "## Components") {
      continue;
    }

    const componentName = parseComponentHeading(line);
    if (componentName) {
      commitCurrent();
      current = { name: componentName, fields: {}, entries: [] };
      currentEntry = null;
      continue;
    }

    if (!current) {
      continue;
    }

    if (/^- \*\*\[\d+\]\*\*$/.test(line)) {
      currentEntry = {};
      current.entries.push(currentEntry);
      continue;
    }

    const field = parseNestedKeyValue(line);
    if (!field) {
      continue;
    }

    if (currentEntry) {
      currentEntry[field.key] = field.value;
    } else {
      current.fields[field.key] = field.value;
    }
  }

  commitCurrent();
  return components;
}

function parsePrefabReference(value: string | undefined): PrefabReference | null {
  if (!value) {
    return null;
  }

  const match = value.match(/([A-Za-z0-9_]+)\s+PrefabGuid\((-?\d+)\)/);
  if (!match) {
    return null;
  }

  return { prefab: match[1], guid: Number(match[2]) };
}

function humanizeWords(value: string): string {
  return value
    .replace(/_/g, " ")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim();
}

function buildPrefabAliases(prefab: string, displayName?: string): string[] {
  const tail = prefab
    .replace(/^(AB|Ability|Item|Recipe|CHAR|TM|BP|Buff|ItemSet|Journal)_/i, "")
    .replace(/_(AbilityGroup|Group)$/i, "");
  const cleanedDisplay = normalizeText(displayName);
  return [cleanedDisplay, cleanedDisplay?.replace(/\s+/g, ""), tail, tail.replace(/_/g, ""), prefab, prefab.replace(/_/g, "")].filter(
    (value): value is string => Boolean(value && value.trim())
  );
}

function pickIconFromAliases(aliases: string[], iconFiles: string[], stripPattern?: RegExp): string | undefined {
  const normalizedIcons = iconFiles.map((fileName) => ({
    fileName,
    normalized: normalizeValue((stripPattern ? fileName.replace(stripPattern, "") : fileName.replace(/^Stunlock_Icon_/, "")).replace(/\.png$/i, ""))
  }));

  for (const alias of aliases) {
    const normalized = normalizeValue(alias);
    if (!normalized) {
      continue;
    }
    const match = normalizedIcons.find((item) => item.normalized.endsWith(normalized) || normalized.endsWith(item.normalized));
    if (match) {
      return match.fileName;
    }
  }

  for (const alias of aliases) {
    const normalized = normalizeValue(alias);
    if (!normalized) {
      continue;
    }
    const match = normalizedIcons.find((item) => item.normalized.includes(normalized) || normalized.includes(item.normalized));
    if (match) {
      return match.fileName;
    }
  }

  return undefined;
}

function parseSpellSchoolCatalog(markdown: string, localizedNames: LocalizedNameSnapshot): AbilityCatalogEntry[] {
  const titleMatch = markdown.match(/^title:\s*([^\r\n]+)$/m);
  const assetTitle = titleMatch?.[1]?.replace(/^"|"$/g, "").trim() ?? "UnknownSpellSchoolAsset";
  const school = assetTitle.replace(/SpellSchoolAsset$/, "");
  if (ignoredCatalogAssets.has(school)) {
    return [];
  }

  const entries: AbilityCatalogEntry[] = [];
  for (const match of markdown.matchAll(
    /AbilityGroup:\s+([A-Za-z0-9_]+)\s+PrefabGuid\((-?\d+)\)[\s\S]*?Tier:\s+ProjectM\.SpellSchoolProgressionTier\s+(Tier\d)/g
  )) {
    const prefab = match[1];
    const guid = Number(match[2]);
    const tier = match[3];
    const displayName = localizedNames.namesByGuid[String(guid)] ?? prefab;
    entries.push({ prefab, guid, school, tier, displayName });
  }
  return entries;
}

function pickAbilityIcon(entry: AbilityCatalogEntry, iconFiles: string[]): string | undefined {
  const manualAliases = manualAbilityIconAliases[entry.prefab] ?? [];
  const prefabTail = entry.prefab
    .replace(/^AB_/, "")
    .replace(/^Ability_/, "")
    .replace(/_(AbilityGroup|Group)$/i, "")
    .replace(/^[A-Za-z]+_/, "");
  return pickIconFromAliases([entry.displayName, entry.displayName.replace(/\s+/g, ""), prefabTail, ...manualAliases], iconFiles, /^Stunlock_Icon_Ability_/);
}

function mergeOptionalField(prefab: string, field: string, left: string | undefined, right: string | undefined, sourcePath: string): string | undefined {
  if (left && right && left !== right) {
    if (field.toLowerCase().includes("guid") && normalizeGuid(left) === normalizeGuid(right)) {
      return left;
    }
    throw new Error(`Conflicting ${field} mapping for ${prefab} (source: ${sourcePath})`);
  }
  return left ?? right;
}

function mergeRankedOptionalField(
  prefab: string,
  field: string,
  left: string | undefined,
  leftKind: EnrichmentSourceKind | undefined,
  right: string | undefined,
  rightKind: EnrichmentSourceKind | undefined,
  sourcePath: string
): string | undefined {
  if (!left || !right || left === right) {
    return left ?? right;
  }

  const leftRank = sourceKindRank(leftKind);
  const rightRank = sourceKindRank(rightKind);
  if (leftRank === rightRank) {
    throw new Error(`Conflicting ${field} mapping for ${prefab} (source: ${sourcePath})`);
  }

  return rightRank > leftRank ? right : left;
}

function extractRows(raw: unknown, mapKeys: string[], arrayKeys: string[], prefabPattern: RegExp): Array<{ value: unknown; fallbackPrefab?: string }> {
  if (Array.isArray(raw)) {
    return raw.map((value) => ({ value }));
  }
  if (!isRecord(raw)) {
    return [];
  }

  for (const key of mapKeys) {
    const container = raw[key];
    if (!isRecord(container)) {
      continue;
    }
    return Object.entries(container).map(([prefab, value]) => ({ value, fallbackPrefab: prefab }));
  }

  for (const key of arrayKeys) {
    const container = raw[key];
    if (Array.isArray(container)) {
      return container.map((value) => ({ value }));
    }
  }

  const entries = Object.entries(raw);
  if (entries.length > 0 && entries.every(([key, value]) => prefabPattern.test(key) && isRecord(value))) {
    return entries.map(([prefab, value]) => ({ value, fallbackPrefab: prefab }));
  }

  return [{ value: raw }];
}

async function findExistingFiles(candidates: string[]): Promise<string[]> {
  const existing: string[] = [];
  for (const candidate of candidates) {
    try {
      const fileStat = await stat(candidate);
      if (fileStat.isFile()) {
        existing.push(candidate);
      }
    } catch (error) {
      if (!(error && typeof error === "object" && "code" in error && error.code === "ENOENT")) {
        throw error;
      }
    }
  }
  return existing.sort((left, right) => left.localeCompare(right));
}

function buildLegacySourceCandidates(repoRoot: string, assetDumpDir: string, envSingle: string, envMany: string, defaults: string[]): string[] {
  const singleValue = process.env[envSingle];
  const manyValue = process.env[envMany];
  const singles = singleValue ? [singleValue] : [];
  const many = (manyValue ?? "")
    .split(/[;,]/g)
    .map((value) => value.trim())
    .filter(Boolean);

  const resolvedDefaults = defaults.map((value) => value.replace("$ASSET_DUMP_DIR", assetDumpDir).replace("$REPO_ROOT", repoRoot));
  return [...new Set([...singles, ...many, ...resolvedDefaults].map((value) => path.resolve(value)))];
}

function buildExplicitSourceCandidates(repoRoot: string, assetDumpDir: string, envSingle: string, envMany: string): string[] {
  return buildLegacySourceCandidates(repoRoot, assetDumpDir, envSingle, envMany, []);
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    return (await stat(filePath)).isFile();
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

async function directoryExists(directoryPath: string): Promise<boolean> {
  try {
    return (await stat(directoryPath)).isDirectory();
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

async function readDirectoryIfExists(directoryPath: string): Promise<string[]> {
  try {
    return (await readdir(directoryPath)).sort((left, right) => left.localeCompare(right));
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

async function resolveExtractorSnapshotDirFromReceipt(receiptPath: string): Promise<string | null> {
  const runDirectory = path.dirname(receiptPath);
  const directPath = path.join(runDirectory, "snapshots", defaultExtractorSnapshotDirName);
  if (await directoryExists(directPath)) {
    return directPath;
  }

  const snapshotRoot = path.join(runDirectory, "snapshots");
  const entries = await readDirectoryIfExists(snapshotRoot);
  const matchingEntry = entries.find((entry) => entry.toLowerCase() === defaultExtractorSnapshotDirName.toLowerCase());
  return matchingEntry ? path.join(snapshotRoot, matchingEntry) : null;
}

async function getExtractorArtifactSignalCount(filePath: string): Promise<number> {
  const cachedCount = extractorArtifactSignalCountCache.get(filePath);
  if (cachedCount !== undefined) {
    return cachedCount;
  }

  const source: ResolvedSourceFile = {
    filePath,
    sourceKind: "extractor-model",
    sourceRef: canonicalSourceRef(filePath)
  };
  const fileName = path.basename(filePath).toLowerCase();

  let signalCount = 0;
  if (fileName.startsWith("abilitygroups")) {
    signalCount = (await loadTooltipEntriesFromSource(source)).length;
  } else if (fileName.startsWith("items")) {
    signalCount = Math.max((await loadItemIconEntriesFromSource(source)).length, (await loadItemDescriptionEntriesFromSource(source)).length);
  } else if (fileName.startsWith("recipes")) {
    signalCount = (await loadRecipeLinkEntriesFromSource(source)).length;
  } else if (fileName.startsWith("npcs")) {
    signalCount = (await loadDisplayEntriesFromSource(source, /^CHAR_[A-Za-z0-9_]+$/)).length;
  } else {
    const parsed = parseJsonText<unknown>(await readFile(filePath, "utf8"));
    signalCount = Array.isArray(parsed) ? parsed.length : Object.keys(isRecord(parsed) ? parsed : {}).length;
  }

  extractorArtifactSignalCountCache.set(filePath, signalCount);
  return signalCount;
}

async function countMeaningfulRequestedFiles(snapshotDir: string, requestedFiles: string[]): Promise<number> {
  let meaningfulMatches = 0;
  for (const requestedFile of requestedFiles) {
    const filePath = path.join(snapshotDir, requestedFile);
    if (!(await fileExists(filePath))) {
      continue;
    }

    if ((await getExtractorArtifactSignalCount(filePath)) > 0) {
      meaningfulMatches += 1;
    }
  }

  return meaningfulMatches;
}

async function rankExtractorReceipt(receiptPath: string, requestedFiles: string[] = []): Promise<number> {
  const fileName = path.basename(path.dirname(receiptPath)).toLowerCase();
  const snapshotDir = await resolveExtractorSnapshotDirFromReceipt(receiptPath);
  let rank = 0;

  if (fileName.includes("client")) {
    rank += 20;
  }

  if (snapshotDir) {
    const clientDomainFiles = ["AbilityGroupsClient.json", "ItemsClient.json", "RecipesClient.json"];
    const serverDomainFiles = ["AbilityGroupsServer.json", "ItemsServer.json", "RecipesServer.json"];
    if ((await Promise.all(clientDomainFiles.map((fileName) => fileExists(path.join(snapshotDir, fileName))))).some(Boolean)) {
      rank += 10;
    } else if ((await Promise.all(serverDomainFiles.map((fileName) => fileExists(path.join(snapshotDir, fileName))))).some(Boolean)) {
      rank += 5;
    }

    if (requestedFiles.length > 0) {
      const requestedMatchCount = await countMeaningfulRequestedFiles(snapshotDir, requestedFiles);
      if (requestedMatchCount > 0) {
        rank += 50 + requestedMatchCount;
      }
    }
  }

  return rank;
}

async function findLatestSuccessfulExtractorReceipt(runsRoot: string, requestedFiles: string[] = []): Promise<string | null> {
  const timestampDirs = await readDirectoryIfExists(runsRoot);
  const candidates: Array<{ receiptPath: string; timestamp: string; rank: number }> = [];

  for (const timestamp of timestampDirs) {
    const timestampPath = path.join(runsRoot, timestamp);
    if (!(await directoryExists(timestampPath))) {
      continue;
    }

    const profileDirs = await readDirectoryIfExists(timestampPath);
    for (const profile of profileDirs) {
      const receiptPath = path.join(timestampPath, profile, "receipt.json");
      const receiptSource = await readIfExists(receiptPath);
      if (!receiptSource) {
        continue;
      }

      const receipt = parseJsonText<{ status?: string }>(receiptSource);
      if (receipt.status !== "success") {
        continue;
      }

      const snapshotDir = await resolveExtractorSnapshotDirFromReceipt(receiptPath);
      if (requestedFiles.length > 0) {
        if (!snapshotDir) {
          continue;
        }

        const requestedMatchCount = await countMeaningfulRequestedFiles(snapshotDir, requestedFiles);
        if (requestedMatchCount === 0) {
          continue;
        }
      }

      candidates.push({
        receiptPath,
        timestamp,
        rank: await rankExtractorReceipt(receiptPath, requestedFiles)
      });
    }
  }

  candidates.sort((left, right) => right.rank - left.rank || right.timestamp.localeCompare(left.timestamp) || right.receiptPath.localeCompare(left.receiptPath));
  return candidates[0]?.receiptPath ?? null;
}

async function resolveFirstExistingExtractorDataDir(...candidates: Array<string | undefined>): Promise<string | null> {
  for (const candidate of candidates) {
    if (!candidate) {
      continue;
    }

    const resolvedCandidate = path.resolve(candidate);
    if (await directoryExists(resolvedCandidate)) {
      return resolvedCandidate;
    }
  }

  return null;
}

async function resolveExtractorSources(
  fileNames: string[],
  sourceKind: EnrichmentSourceKind,
  dataDirs: string[]
): Promise<ResolvedSourceFile[]> {
  const resolvedSources: ResolvedSourceFile[] = [];
  for (const dataDir of dataDirs) {
    for (const fileName of fileNames) {
      const filePath = path.join(dataDir, fileName);
      if (await fileExists(filePath)) {
        resolvedSources.push({
          filePath,
          sourceKind,
          sourceRef: canonicalSourceRef(filePath)
        });
      }
    }
  }

  return resolvedSources;
}

async function resolveDomainSources(
  repoRoot: string,
  assetDumpDir: string,
  envSingle: string,
  envMany: string,
  legacyDefaults: string[],
  extractorModelFiles: string[],
  extractorRawFiles: string[] = []
): Promise<ResolvedSourceFile[]> {
  const explicitSources = await findExistingFiles(buildExplicitSourceCandidates(repoRoot, assetDumpDir, envSingle, envMany));
  if (explicitSources.length > 0) {
    return explicitSources.map((filePath) => ({
      filePath,
      sourceKind: inferLegacySourceKind(filePath),
      sourceRef: canonicalSourceRef(filePath)
    }));
  }

  const extractorDataDir = await resolveFirstExistingExtractorDataDir(process.env.VRISING_EXTRACTOR_DATA_DIR);
  const extractorReceiptPath = process.env.VRISING_EXTRACTOR_RECEIPT ? path.resolve(process.env.VRISING_EXTRACTOR_RECEIPT) : null;
  const extractorReceiptDataDir =
    extractorReceiptPath && (await fileExists(extractorReceiptPath)) ? await resolveExtractorSnapshotDirFromReceipt(extractorReceiptPath) : null;
  const requestedFiles = [...extractorModelFiles, ...extractorRawFiles];
  const latestExtractorReceiptPath = await findLatestSuccessfulExtractorReceipt(defaultExtractorRunsDir, requestedFiles);
  const latestExtractorReceiptDataDir = latestExtractorReceiptPath ? await resolveExtractorSnapshotDirFromReceipt(latestExtractorReceiptPath) : null;

  const extractorDataDirs = [extractorDataDir, extractorReceiptDataDir, latestExtractorReceiptDataDir].filter(
    (directoryPath): directoryPath is string => Boolean(directoryPath)
  );
  const dedupedExtractorDataDirs = [...new Set(extractorDataDirs)];

  const sources: ResolvedSourceFile[] = [
    ...(await resolveExtractorSources(extractorModelFiles, "extractor-model", dedupedExtractorDataDirs)),
    ...(await resolveExtractorSources(extractorRawFiles, "extractor-raw", dedupedExtractorDataDirs))
  ];

  const legacySources = await findExistingFiles(buildLegacySourceCandidates(repoRoot, assetDumpDir, envSingle, envMany, legacyDefaults));
  for (const filePath of legacySources) {
    sources.push({
      filePath,
      sourceKind: inferLegacySourceKind(filePath),
      sourceRef: canonicalSourceRef(filePath)
    });
  }

  const dedupedSources = new Map<string, ResolvedSourceFile>();
  for (const source of sources) {
    dedupedSources.set(source.filePath.toLowerCase(), source);
  }

  return [...dedupedSources.values()].sort((left, right) => left.filePath.localeCompare(right.filePath));
}

async function readIfExists(filePath: string): Promise<string | null> {
  try {
    return await readFile(filePath, "utf8");
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return null;
    }
    throw error;
  }
}

function stripUtf8Bom(source: string): string {
  return source.charCodeAt(0) === 0xfeff ? source.slice(1) : source;
}

function parseJsonText<T>(source: string): T {
  return JSON.parse(stripUtf8Bom(source)) as T;
}

async function assertExists(filePath: string, label: string): Promise<void> {
  try {
    await stat(filePath);
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      throw new Error(`${label} not found at ${filePath}`);
    }
    throw error;
  }
}

function resolveLocalizedResourceDirs(): string[] {
  const configuredDirs = (process.env.VRISING_RESOURCES_DIRS ?? "")
    .split(/[;\r\n]+/)
    .map((value) => value.trim())
    .filter(Boolean);

  return [...new Set([process.env.BLOODCRAFT_RESOURCES_DIR ?? defaultBloodcraftResourcesDir, process.env.ECLIPSE_RESOURCES_DIR ?? defaultEclipseResourcesDir, ...configuredDirs])];
}

function buildResourcesSourceRef(resourcesDir: string, relativePath: string): string {
  const repoName = path.basename(path.dirname(resourcesDir));
  return `${repoName}/Resources/${relativePath}`.replace(/\\/g, "/");
}

async function loadLocalizedNames(resourcesDirs: string[]): Promise<LocalizedNameContext> {
  const namesByGuid: Record<string, string> = {};
  const nameSourceRefByGuid: Record<string, string> = {};
  const englishTextByGuid = new Map<string, string>();
  const englishSourceRefByGuid = new Map<string, string>();

  for (const resourcesDir of resourcesDirs) {
    const prefabNamesCandidates = [path.join(resourcesDir, "PrefabNames.cs"), path.join(resourcesDir, "Localization", "PrefabNames.cs")];
    const englishPath = path.join(resourcesDir, "Localization", "English.json");
    await assertExists(englishPath, `${resourcesDir} English localization`);

    let resolvedPrefabNamesPath: string | null = null;
    let prefabNamesSource: string | null = null;
    for (const candidatePath of prefabNamesCandidates) {
      const candidateSource = await readIfExists(candidatePath);
      if (!candidateSource) {
        continue;
      }

      resolvedPrefabNamesPath = candidatePath;
      prefabNamesSource = candidateSource;
      break;
    }

    if (!resolvedPrefabNamesPath || !prefabNamesSource) {
      throw new Error(`${resourcesDir} prefab name map not found at ${prefabNamesCandidates.join(" or ")}`);
    }

    const prefabNamesSourceRef = buildResourcesSourceRef(resourcesDir, path.relative(resourcesDir, resolvedPrefabNamesPath));
    const englishSourceRef = buildResourcesSourceRef(resourcesDir, "Localization/English.json");
    const englishSource = await readFile(englishPath, "utf8");
    const english = parseJsonText<{ Nodes?: Array<{ Guid?: string; Text?: string }> }>(englishSource);

    for (const node of english.Nodes ?? []) {
      if (typeof node.Guid !== "string" || typeof node.Text !== "string") {
        continue;
      }

      const guid = node.Guid.toLowerCase();
      if (!englishTextByGuid.has(guid) && node.Text.trim()) {
        englishTextByGuid.set(guid, node.Text);
        englishSourceRefByGuid.set(guid, englishSourceRef);
      }
    }

    for (const match of prefabNamesSource.matchAll(/\{\s*new\((-?\d+)\),\s*"([^"]+)"\s*\}/g)) {
      const guid = match[1];
      const localizationKey = match[2].toLowerCase();
      const localizedText = englishTextByGuid.get(localizationKey);
      if (!localizedText || !localizedText.trim() || namesByGuid[guid]) {
        continue;
      }

      namesByGuid[guid] = localizedText.trim();
      nameSourceRefByGuid[guid] = prefabNamesSourceRef;
    }
  }

  return { namesByGuid, nameSourceRefByGuid, englishTextByGuid, englishSourceRefByGuid };
}

async function loadPrefabDocuments(contentPrefabsDir: string): Promise<PrefabDocument[]> {
  const fileNames = (await readdir(contentPrefabsDir))
    .filter((fileName) => fileName.toLowerCase().endsWith(".md"))
    .sort((left, right) => left.localeCompare(right));
  const docs: PrefabDocument[] = [];

  for (const fileName of fileNames) {
    const filePath = path.join(contentPrefabsDir, fileName);
    const markdown = await readIfExists(filePath);
    if (!markdown) {
      continue;
    }

    const { body, frontMatter } = parseFrontMatter(markdown);
    const prefabName = (frontMatter.title ?? path.basename(fileName, ".md")).replace(/^"|"$/g, "");
    const guid = frontMatter.guid && /^-?\d+$/.test(frontMatter.guid) ? Number(frontMatter.guid) : null;
    const categories = parseStringList(frontMatter.categories);
    docs.push({ filePath, prefabName, guid, categories, body });
  }

  return docs;
}

function normalizeTooltipEntry(
  raw: unknown,
  fallbackPrefab: string | undefined,
  sourceKind: EnrichmentSourceKind,
  sourceRef: string
): AbilityTooltipEnrichedEntry | null {
  if (!isRecord(raw)) {
    return null;
  }

  const abilityPrefab =
    normalizeText(fallbackPrefab) ??
    normalizeText(readString(raw, ["abilityPrefab", "AbilityPrefab", "prefab", "Prefab", "prefabName", "PrefabName"]));
  const abilityGuid = toNumber(raw.abilityGuid ?? raw.AbilityGuid ?? raw.guid ?? raw.Guid ?? raw.AbilityGroupId ?? raw.abilityGroupId);
  if (!abilityPrefab || abilityGuid === undefined) {
    return null;
  }

  const localizedDescription = readRecord(raw, ["localizedDescription", "LocalizedDescription", "description", "Description"]);
  const tooltipLocalizationGuid = normalizeGuid(
    readString(raw, ["tooltipLocalizationGuid", "TooltipLocalizationGuid", "localizationGuid", "LocalizationGuid"]) ??
      readGuidFromUnknown(raw.tooltipLocalizationGuid) ??
      readGuidFromUnknown(raw.TooltipLocalizationGuid) ??
      readGuidDeep(localizedDescription)
  );
  const tooltipTextEn = normalizeText(
    readString(raw, ["tooltipTextEn", "TooltipTextEn", "tooltipText", "TooltipText", "localizedDescriptionText", "LocalizedDescriptionText"]) ??
      readTextFromUnknown(localizedDescription)
  );
  const tooltipEntryId = normalizeId(
    readString(raw, ["tooltipEntryId", "TooltipEntryId", "tooltipEntryPathId", "TooltipEntryPathId", "tooltipAssetPath", "TooltipAssetPath"]) ??
      readTooltipEntryIdFromUnknown(raw)
  );

  return {
    abilityPrefab,
    abilityGuid,
    ...(tooltipEntryId ? { tooltipEntryId } : {}),
    ...(tooltipLocalizationGuid ? { tooltipLocalizationGuid } : {}),
    ...(tooltipTextEn ? { tooltipTextEn } : {}),
    sourceKind,
    sourceRef
  };
}

function stableTooltipEntry(entry: AbilityTooltipEnrichedEntry): AbilityTooltipEnrichedEntry {
  const normalizedSourceRef = normalizeSourceRef(entry.sourceRef);
  return {
    abilityPrefab: entry.abilityPrefab,
    abilityGuid: entry.abilityGuid,
    ...(normalizeId(entry.tooltipEntryId) ? { tooltipEntryId: normalizeId(entry.tooltipEntryId) } : {}),
    ...(normalizeGuid(entry.tooltipLocalizationGuid) ? { tooltipLocalizationGuid: normalizeGuid(entry.tooltipLocalizationGuid) } : {}),
    ...(normalizeText(entry.tooltipTextEn) ? { tooltipTextEn: normalizeText(entry.tooltipTextEn) } : {}),
    sourceKind: entry.sourceKind ?? "generated-fallback",
    ...(normalizedSourceRef ? { sourceRef: normalizedSourceRef } : {})
  };
}

function normalizeDataExtractorTooltipEntry(
  raw: unknown,
  fallbackPrefab: string | undefined,
  sourceKind: EnrichmentSourceKind,
  sourceRef: string
): AbilityTooltipEnrichedEntry | null {
  if (!isRecord(raw)) {
    return null;
  }

  const abilityPrefab =
    normalizeText(fallbackPrefab) ??
    normalizeText(readString(raw, ["PrefabName", "prefabName", "AbilityPrefab", "abilityPrefab", "prefab", "Prefab"]));
  const abilityGuid = toNumber(
    raw.AbilityGroupId ??
      raw.abilityGroupId ??
      raw.PrefabGuid ??
      raw.prefabGuid ??
      raw.AbilityGuid ??
      raw.abilityGuid ??
      raw.Guid ??
      raw.guid
  );
  if (!abilityPrefab || abilityGuid === undefined) {
    return null;
  }

  const abilityTooltipData = readRecord(raw, ["AbilityTooltipData", "abilityTooltipData"]);
  const tooltipDescription = readRecord(abilityTooltipData ?? {}, ["Description", "description"]);
  const localizedDescription = readRecord(raw, ["LocalizedDescription", "localizedDescription"]);

  const tooltipLocalizationGuid = normalizeGuid(
    readGuidDeep(raw.tooltipLocalizationGuid) ??
      readGuidDeep(abilityTooltipData?.Description) ??
      readGuidDeep(tooltipDescription) ??
      readGuidDeep(localizedDescription)
  );
  const tooltipTextEn = normalizeText(
    readString(raw, ["TooltipTextEn", "tooltipTextEn", "TooltipText", "tooltipText", "LocalizedDescriptionText", "localizedDescriptionText"]) ??
      readTextFromUnknown(tooltipDescription) ??
      readTextFromUnknown(localizedDescription)
  );
  const tooltipEntryId = normalizeId(
    readString(raw, ["TooltipEntryId", "tooltipEntryId", "tooltipEntryPathId", "TooltipEntryPathId", "EntityId", "entityId"]) ??
      readTooltipEntryIdFromUnknown(raw)
  );

  if (!tooltipEntryId && !tooltipLocalizationGuid && !tooltipTextEn) {
    return null;
  }

  return stableTooltipEntry({
    abilityPrefab,
    abilityGuid,
    ...(tooltipEntryId ? { tooltipEntryId } : {}),
    ...(tooltipLocalizationGuid ? { tooltipLocalizationGuid } : {}),
    ...(tooltipTextEn ? { tooltipTextEn } : {}),
    sourceKind,
    sourceRef
  });
}

async function loadTooltipEntriesFromSource(source: ResolvedSourceFile): Promise<AbilityTooltipEnrichedEntry[]> {
  const parsed = parseJsonText<unknown>(await readFile(source.filePath, "utf8"));
  return extractRows(
    parsed,
    ["tooltipsByPrefab", "abilityTooltipsByPrefab", "AbilityTooltipsByPrefab", "abilityTooltipMap", "AbilityTooltipMap"],
    ["entries", "Entries", "abilityGroups", "AbilityGroups", "abilities", "Abilities", "rows", "Rows", "data", "Data", "entities", "Entities"],
    /^(AB|Ability)_[A-Za-z0-9_]+$/
  )
    .map(({ value, fallbackPrefab }) =>
      normalizeDataExtractorTooltipEntry(value, fallbackPrefab, source.sourceKind, source.sourceRef) ??
      normalizeTooltipEntry(value, fallbackPrefab, source.sourceKind, source.sourceRef)
    )
    .filter((entry): entry is AbilityTooltipEnrichedEntry => Boolean(entry && hasTooltipSignal(entry)));
}

function mergeTooltipEntries(
  existing: AbilityTooltipEnrichedEntry,
  incoming: AbilityTooltipEnrichedEntry,
  sourcePath: string
): AbilityTooltipEnrichedEntry {
  if (existing.abilityGuid !== incoming.abilityGuid) {
    throw new Error(
      `Conflicting tooltip mapping for ${existing.abilityPrefab}: abilityGuid ${existing.abilityGuid} vs ${incoming.abilityGuid} (source: ${sourcePath})`
    );
  }

  return stableTooltipEntry({
    abilityPrefab: existing.abilityPrefab,
    abilityGuid: existing.abilityGuid,
    tooltipEntryId: mergeOptionalField(existing.abilityPrefab, "tooltipEntryId", existing.tooltipEntryId, incoming.tooltipEntryId, sourcePath),
    tooltipLocalizationGuid: mergeOptionalField(
      existing.abilityPrefab,
      "tooltipLocalizationGuid",
      existing.tooltipLocalizationGuid,
      incoming.tooltipLocalizationGuid,
      sourcePath
    ),
    tooltipTextEn: mergeOptionalField(existing.abilityPrefab, "tooltipTextEn", existing.tooltipTextEn, incoming.tooltipTextEn, sourcePath),
    ...mergeProvenance(existing, incoming, sourcePath)
  });
}

function normalizeItemIconEntry(
  raw: unknown,
  fallbackPrefab: string | undefined,
  sourceKind: EnrichmentSourceKind,
  sourceRef: string
): ItemIconEnrichedEntry | null {
  if (!isRecord(raw)) {
    return null;
  }

  const itemPrefab = normalizeText(fallbackPrefab) ?? normalizeText(readString(raw, ["itemPrefab", "ItemPrefab", "prefab", "Prefab", "prefabName", "PrefabName"]));
  const itemGuid = toNumber(raw.itemGuid ?? raw.ItemGuid ?? raw.guid ?? raw.Guid ?? raw.itemId ?? raw.ItemId);
  if (!itemPrefab || itemGuid === undefined) {
    return null;
  }

  const managedItemData = readRecord(raw, ["ManagedItemData", "managedItemData"]);
  const iconAssetName = normalizeAssetFileName(
    readString(raw, ["iconAssetName", "IconAssetName", "iconName", "IconName", "icon", "Icon", "iconFile", "IconFile"]) ??
      readString(managedItemData ?? {}, ["Icon", "icon"])
  );
  const iconAssetPath = normalizeAssetPath(readString(raw, ["iconAssetPath", "IconAssetPath", "iconPath", "IconPath"]));
  return {
    itemPrefab,
    itemGuid,
    ...(iconAssetName ? { iconAssetName } : {}),
    ...(iconAssetPath ? { iconAssetPath } : {}),
    sourceKind,
    sourceRef
  };
}

function stableItemIconEntry(entry: ItemIconEnrichedEntry): ItemIconEnrichedEntry {
  const normalizedSourceRef = normalizeSourceRef(entry.sourceRef);
  return {
    itemPrefab: entry.itemPrefab,
    itemGuid: entry.itemGuid,
    ...(normalizeAssetFileName(entry.iconAssetName) ? { iconAssetName: normalizeAssetFileName(entry.iconAssetName) } : {}),
    ...(normalizeAssetPath(entry.iconAssetPath) ? { iconAssetPath: normalizeAssetPath(entry.iconAssetPath) } : {}),
    sourceKind: entry.sourceKind ?? "generated-fallback",
    ...(normalizedSourceRef ? { sourceRef: normalizedSourceRef } : {})
  };
}

function buildBuffGuidToItemPrefabsIndex(itemDocs: PrefabDocument[]): Map<string, string[]> {
  const index = new Map<string, Set<string>>();
  for (const doc of itemDocs) {
    for (const match of doc.body.matchAll(/BuffGuid:\s+([A-Za-z0-9_]+)\s+PrefabGuid\(-?\d+\)/g)) {
      const buffPrefab = normalizeText(match[1]);
      if (!buffPrefab) {
        continue;
      }

      const prefabs = index.get(buffPrefab) ?? new Set<string>();
      prefabs.add(doc.prefabName);
      index.set(buffPrefab, prefabs);
    }
  }

  return new Map(
    [...index.entries()]
      .map(([buffPrefab, prefabs]) => [buffPrefab, [...prefabs].sort((left, right) => left.localeCompare(right))] as const)
      .sort(([left], [right]) => left.localeCompare(right))
  );
}

function pickUniqueResolvedItemIconSource(
  prefabs: string[],
  itemIconMapByPrefab: Map<string, ItemIconEnrichedEntry>
): { sourcePrefab: string; entry: ItemIconEnrichedEntry } | null {
  const grouped = new Map<string, Array<{ sourcePrefab: string; entry: ItemIconEnrichedEntry }>>();

  for (const prefab of prefabs) {
    const entry = itemIconMapByPrefab.get(prefab);
    if (!entry || !hasItemIconSignal(entry)) {
      continue;
    }

    const iconKey = `${normalizeAssetFileName(entry.iconAssetName) ?? ""}|${normalizeAssetPath(entry.iconAssetPath) ?? ""}`;
    const matches = grouped.get(iconKey) ?? [];
    matches.push({ sourcePrefab: prefab, entry });
    grouped.set(iconKey, matches);
  }

  if (grouped.size !== 1) {
    return null;
  }

  const onlyGroup = [...grouped.values()][0];
  onlyGroup.sort(
    (left, right) =>
      sourceKindRank(right.entry.sourceKind) - sourceKindRank(left.entry.sourceKind) ||
      (left.entry.sourceRef ?? "").localeCompare(right.entry.sourceRef ?? "") ||
      left.sourcePrefab.localeCompare(right.sourcePrefab)
  );
  return onlyGroup[0] ?? null;
}

function deriveLegendaryNameGeneratorSourcePrefab(prefab: string): string | null {
  const match = prefab.match(/^(Item_Weapon_[A-Za-z0-9]+_Legendary)_NameGenerator_(T\d+)$/);
  if (!match) {
    return null;
  }

  return `${match[1]}_${match[2]}`;
}

function deriveSourceRef(baseSourceRef: string | undefined, relation: string, relatedPrefab: string): string | undefined {
  const normalizedBase = normalizeSourceRef(baseSourceRef);
  const normalizedRelation = normalizeId(relation);
  const normalizedPrefab = normalizeId(relatedPrefab);
  if (!normalizedBase || !normalizedRelation || !normalizedPrefab) {
    return normalizedBase;
  }

  return `${normalizedBase}#${normalizedRelation}:${normalizedPrefab}`;
}

function mergeItemIconEntries(existing: ItemIconEnrichedEntry, incoming: ItemIconEnrichedEntry, sourcePath: string): ItemIconEnrichedEntry {
  if (existing.itemGuid !== incoming.itemGuid) {
    throw new Error(`Conflicting item icon mapping for ${existing.itemPrefab}: guid mismatch (source: ${sourcePath})`);
  }

  return stableItemIconEntry({
    itemPrefab: existing.itemPrefab,
    itemGuid: existing.itemGuid,
    iconAssetName: mergeRankedOptionalField(
      existing.itemPrefab,
      "iconAssetName",
      existing.iconAssetName,
      existing.sourceKind,
      incoming.iconAssetName,
      incoming.sourceKind,
      sourcePath
    ),
    iconAssetPath: mergeRankedOptionalField(
      existing.itemPrefab,
      "iconAssetPath",
      existing.iconAssetPath,
      existing.sourceKind,
      incoming.iconAssetPath,
      incoming.sourceKind,
      sourcePath
    ),
    ...mergeProvenance(existing, incoming, sourcePath)
  });
}

async function loadItemIconEntriesFromSource(source: ResolvedSourceFile): Promise<ItemIconEnrichedEntry[]> {
  const parsed = parseJsonText<unknown>(await readFile(source.filePath, "utf8"));
  return extractRows(
    parsed,
    ["itemIconsByPrefab", "ItemIconsByPrefab", "itemIconMap", "ItemIconMap", "iconsByPrefab"],
    ["entries", "Entries", "items", "Items", "rows", "Rows", "data", "Data"],
    /^Item_[A-Za-z0-9_]+$/
  )
    .map(({ value, fallbackPrefab }) => normalizeItemIconEntry(value, fallbackPrefab, source.sourceKind, source.sourceRef))
    .filter((entry): entry is ItemIconEnrichedEntry => Boolean(entry));
}

function deriveItemIconEntryFromResolvedSource(
  targetEntry: ItemIconEnrichedEntry,
  sourcePrefab: string,
  sourceEntry: ItemIconEnrichedEntry
): ItemIconEnrichedEntry {
  return stableItemIconEntry({
    itemPrefab: targetEntry.itemPrefab,
    itemGuid: targetEntry.itemGuid,
    ...(normalizeAssetFileName(sourceEntry.iconAssetName) ? { iconAssetName: normalizeAssetFileName(sourceEntry.iconAssetName) } : {}),
    ...(normalizeAssetPath(sourceEntry.iconAssetPath) ? { iconAssetPath: normalizeAssetPath(sourceEntry.iconAssetPath) } : {}),
    sourceKind: sourceEntry.sourceKind,
    sourceRef: deriveSourceRef(sourceEntry.sourceRef, "derived-from", sourcePrefab)
  });
}

function normalizeItemDescriptionEntry(
  raw: unknown,
  fallbackPrefab: string | undefined,
  sourceKind: EnrichmentSourceKind,
  sourceRef: string
): ItemDescriptionEnrichedEntry | null {
  if (!isRecord(raw)) {
    return null;
  }

  const itemPrefab = normalizeText(fallbackPrefab) ?? normalizeText(readString(raw, ["itemPrefab", "ItemPrefab", "prefab", "Prefab", "prefabName", "PrefabName"]));
  const itemGuid = toNumber(raw.itemGuid ?? raw.ItemGuid ?? raw.guid ?? raw.Guid ?? raw.itemId ?? raw.ItemId);
  if (!itemPrefab || itemGuid === undefined) {
    return null;
  }

  const managedItemData = readRecord(raw, ["ManagedItemData", "managedItemData"]);
  const descriptionRecord = readRecord(raw, ["description", "Description", "localizedDescription", "LocalizedDescription"]);
  const displayNameEn = normalizeText(
    readString(raw, ["displayNameEn", "DisplayNameEn", "displayName", "DisplayName", "name", "Name", "title", "Title"]) ??
      readTextFromUnknown(managedItemData?.Name)
  );
  const descriptionLocalizationGuid = normalizeGuid(
    readString(raw, ["descriptionLocalizationGuid", "DescriptionLocalizationGuid", "localizationGuid", "LocalizationGuid"]) ??
      readGuidDeep(managedItemData?.Description) ??
      readGuidDeep(descriptionRecord)
  );
  const descriptionTextEn = normalizeText(
    readString(raw, ["descriptionTextEn", "DescriptionTextEn", "descriptionText", "DescriptionText", "tooltipText", "TooltipText"]) ??
      readTextFromUnknown(managedItemData?.Description) ??
      readTextFromUnknown(descriptionRecord)
  );

  return {
    itemPrefab,
    itemGuid,
    ...(displayNameEn ? { displayNameEn } : {}),
    ...(descriptionLocalizationGuid ? { descriptionLocalizationGuid } : {}),
    ...(descriptionTextEn ? { descriptionTextEn } : {}),
    sourceKind,
    sourceRef
  };
}

function stableItemDescriptionEntry(entry: ItemDescriptionEnrichedEntry): ItemDescriptionEnrichedEntry {
  const normalizedSourceRef = normalizeSourceRef(entry.sourceRef);
  return {
    itemPrefab: entry.itemPrefab,
    itemGuid: entry.itemGuid,
    ...(normalizeText(entry.displayNameEn) ? { displayNameEn: normalizeText(entry.displayNameEn) } : {}),
    ...(normalizeGuid(entry.descriptionLocalizationGuid) ? { descriptionLocalizationGuid: normalizeGuid(entry.descriptionLocalizationGuid) } : {}),
    ...(normalizeText(entry.descriptionTextEn) ? { descriptionTextEn: normalizeText(entry.descriptionTextEn) } : {}),
    sourceKind: entry.sourceKind ?? "generated-fallback",
    ...(normalizedSourceRef ? { sourceRef: normalizedSourceRef } : {})
  };
}

function mergeItemDescriptionEntries(
  existing: ItemDescriptionEnrichedEntry,
  incoming: ItemDescriptionEnrichedEntry,
  sourcePath: string
): ItemDescriptionEnrichedEntry {
  if (existing.itemGuid !== incoming.itemGuid) {
    throw new Error(`Conflicting item description mapping for ${existing.itemPrefab}: guid mismatch (source: ${sourcePath})`);
  }

  return stableItemDescriptionEntry({
    itemPrefab: existing.itemPrefab,
    itemGuid: existing.itemGuid,
    displayNameEn: mergeOptionalField(existing.itemPrefab, "displayNameEn", existing.displayNameEn, incoming.displayNameEn, sourcePath),
    descriptionLocalizationGuid: mergeOptionalField(
      existing.itemPrefab,
      "descriptionLocalizationGuid",
      existing.descriptionLocalizationGuid,
      incoming.descriptionLocalizationGuid,
      sourcePath
    ),
    descriptionTextEn: mergeOptionalField(existing.itemPrefab, "descriptionTextEn", existing.descriptionTextEn, incoming.descriptionTextEn, sourcePath),
    ...mergeProvenance(existing, incoming, sourcePath)
  });
}

async function loadItemDescriptionEntriesFromSource(source: ResolvedSourceFile): Promise<ItemDescriptionEnrichedEntry[]> {
  const parsed = parseJsonText<unknown>(await readFile(source.filePath, "utf8"));
  return extractRows(
    parsed,
    ["itemDescriptionsByPrefab", "ItemDescriptionsByPrefab", "itemDescriptionMap", "ItemDescriptionMap", "descriptionsByPrefab"],
    ["entries", "Entries", "items", "Items", "rows", "Rows", "data", "Data"],
    /^Item_[A-Za-z0-9_]+$/
  )
    .map(({ value, fallbackPrefab }) => normalizeItemDescriptionEntry(value, fallbackPrefab, source.sourceKind, source.sourceRef))
    .filter((entry): entry is ItemDescriptionEnrichedEntry => Boolean(entry));
}

function normalizeRecipeLinkRef(raw: unknown): RecipeLinkRef | null {
  if (!isRecord(raw)) {
    return null;
  }

  const prefabRef =
    parsePrefabReference(readString(raw, ["prefabRef", "PrefabRef", "Guid", "GUID", "guidRef", "GuidRef"])) ??
    parsePrefabReference(readString(raw, ["prefab", "Prefab", "itemPrefab", "ItemPrefab"]));
  const prefab = normalizeText(prefabRef?.prefab ?? readString(raw, ["prefab", "Prefab", "itemPrefab", "ItemPrefab"]));
  const guid = toNumber(prefabRef?.guid ?? raw.guid ?? raw.Guid ?? raw.itemGuid ?? raw.ItemGuid);
  if (!prefab || guid === undefined) {
    return null;
  }

  const amount = toNumber(raw.amount ?? raw.Amount ?? raw.stacks ?? raw.Stacks ?? raw.count ?? raw.Count);
  return { prefab, guid, ...(amount !== undefined ? { amount } : {}) };
}

function parseRecipeRefs(entries: Array<Record<string, string>>, prefabField: string, amountField: string): RecipeLinkRef[] {
  return entries
    .map((entry) => {
      const prefabRef = parsePrefabReference(entry[prefabField]);
      if (!prefabRef) {
        return null;
      }
      const amount = toNumber(entry[amountField]);
      return {
        prefab: prefabRef.prefab,
        guid: prefabRef.guid,
        ...(amount !== undefined ? { amount } : {})
      };
    })
    .filter((entry): entry is RecipeLinkRef => Boolean(entry))
    .sort((left, right) => left.prefab.localeCompare(right.prefab) || left.guid - right.guid || (left.amount ?? 0) - (right.amount ?? 0));
}

function normalizeRecipeLinkEntry(
  raw: unknown,
  fallbackPrefab: string | undefined,
  sourceKind: EnrichmentSourceKind,
  sourceRef: string
): RecipeLinkEnrichedEntry | null {
  if (!isRecord(raw)) {
    return null;
  }

  const recipePrefab =
    normalizeText(fallbackPrefab) ?? normalizeText(readString(raw, ["recipePrefab", "RecipePrefab", "prefab", "Prefab", "prefabName", "PrefabName"]));
  const recipeGuid = toNumber(raw.recipeGuid ?? raw.RecipeGuid ?? raw.guid ?? raw.Guid);
  if (!recipePrefab || recipeGuid === undefined) {
    return null;
  }

  const parseArray = (value: unknown): RecipeLinkRef[] => {
    if (!Array.isArray(value)) {
      return [];
    }
    return value
      .map((entry) => normalizeRecipeLinkRef(entry))
      .filter((entry): entry is RecipeLinkRef => Boolean(entry))
      .sort((left, right) => left.prefab.localeCompare(right.prefab) || left.guid - right.guid || (left.amount ?? 0) - (right.amount ?? 0));
  };

  const outputs = parseArray(raw.outputs ?? raw.Outputs ?? raw.output ?? raw.Output);
  const requirements = parseArray(raw.requirements ?? raw.Requirements ?? raw.ingredients ?? raw.Ingredients);
  const repairCosts = parseArray(raw.repairCosts ?? raw.RepairCosts ?? raw.repairs ?? raw.Repairs);
  return { recipePrefab, recipeGuid, outputs, requirements, repairCosts, sourceKind, sourceRef };
}

function stableRecipeLinkEntry(entry: RecipeLinkEnrichedEntry): RecipeLinkEnrichedEntry {
  const sortRefs = (values: RecipeLinkRef[]) =>
    [...values].sort((left, right) => left.prefab.localeCompare(right.prefab) || left.guid - right.guid || (left.amount ?? 0) - (right.amount ?? 0));
  const normalizedSourceRef = normalizeSourceRef(entry.sourceRef);

  return {
    recipePrefab: entry.recipePrefab,
    recipeGuid: entry.recipeGuid,
    outputs: sortRefs(entry.outputs),
    requirements: sortRefs(entry.requirements),
    repairCosts: sortRefs(entry.repairCosts),
    sourceKind: entry.sourceKind ?? "generated-fallback",
    ...(normalizedSourceRef ? { sourceRef: normalizedSourceRef } : {})
  };
}

function mergeRecipeRefs(prefab: string, left: RecipeLinkRef[], right: RecipeLinkRef[], sourcePath: string): RecipeLinkRef[] {
  const map = new Map<string, RecipeLinkRef>();
  const apply = (entry: RecipeLinkRef) => {
    const existing = map.get(entry.prefab);
    if (!existing) {
      map.set(entry.prefab, entry);
      return;
    }

    if (existing.guid !== entry.guid) {
      throw new Error(`Conflicting recipe link guid for ${prefab} -> ${entry.prefab} (source: ${sourcePath})`);
    }
    if (existing.amount !== undefined && entry.amount !== undefined && existing.amount !== entry.amount) {
      throw new Error(`Conflicting recipe link amount for ${prefab} -> ${entry.prefab} (source: ${sourcePath})`);
    }

    map.set(entry.prefab, { ...existing, amount: existing.amount ?? entry.amount });
  };

  left.forEach(apply);
  right.forEach(apply);
  return [...map.values()].sort((a, b) => a.prefab.localeCompare(b.prefab) || a.guid - b.guid || (a.amount ?? 0) - (b.amount ?? 0));
}

function mergeRecipeLinkEntries(existing: RecipeLinkEnrichedEntry, incoming: RecipeLinkEnrichedEntry, sourcePath: string): RecipeLinkEnrichedEntry {
  if (existing.recipeGuid !== incoming.recipeGuid) {
    throw new Error(`Conflicting recipe link mapping for ${existing.recipePrefab}: guid mismatch (source: ${sourcePath})`);
  }
  return stableRecipeLinkEntry({
    recipePrefab: existing.recipePrefab,
    recipeGuid: existing.recipeGuid,
    outputs: mergeRecipeRefs(existing.recipePrefab, existing.outputs, incoming.outputs, sourcePath),
    requirements: mergeRecipeRefs(existing.recipePrefab, existing.requirements, incoming.requirements, sourcePath),
    repairCosts: mergeRecipeRefs(existing.recipePrefab, existing.repairCosts, incoming.repairCosts, sourcePath),
    ...mergeProvenance(existing, incoming, sourcePath)
  });
}

async function loadRecipeLinkEntriesFromSource(source: ResolvedSourceFile): Promise<RecipeLinkEnrichedEntry[]> {
  const parsed = parseJsonText<unknown>(await readFile(source.filePath, "utf8"));
  return extractRows(
    parsed,
    ["recipeLinksByPrefab", "RecipeLinksByPrefab", "recipeLinkMap", "RecipeLinkMap", "recipesByPrefab"],
    ["entries", "Entries", "recipes", "Recipes", "rows", "Rows", "data", "Data"],
    /^Recipe_[A-Za-z0-9_]+$/
  )
    .map(({ value, fallbackPrefab }) => normalizeRecipeLinkEntry(value, fallbackPrefab, source.sourceKind, source.sourceRef))
    .filter((entry): entry is RecipeLinkEnrichedEntry => Boolean(entry));
}

function normalizeDisplayEntry(
  raw: unknown,
  fallbackPrefab: string | undefined,
  sourceKind: EnrichmentSourceKind,
  sourceRef: string
): PrefabDisplayEnrichedEntry | null {
  if (!isRecord(raw)) {
    return null;
  }

  const prefab = normalizeText(fallbackPrefab) ?? normalizeText(readString(raw, ["prefab", "Prefab", "entityPrefab", "EntityPrefab", "prefabName", "PrefabName"]));
  const guid = toNumber(raw.guid ?? raw.Guid ?? raw.entityGuid ?? raw.EntityGuid);
  if (!prefab || guid === undefined) {
    return null;
  }

  const displayRecord = readRecord(raw, ["displayName", "DisplayName", "localizedName", "LocalizedName"]);
  const summaryRecord = readRecord(raw, ["summary", "Summary", "description", "Description"]);
  const displayNameEn = normalizeText(
    readString(raw, ["displayNameEn", "DisplayNameEn", "displayName", "DisplayName", "name", "Name", "title", "Title"]) ??
      readString(displayRecord ?? {}, ["Text", "text"])
  );
  const displayLocalizationGuid = normalizeGuid(
    readString(raw, ["displayLocalizationGuid", "DisplayLocalizationGuid", "localizationGuid", "LocalizationGuid"]) ??
      readGuidFromUnknown(displayRecord?.Key) ??
      readGuidFromUnknown(displayRecord?.key) ??
      readGuidFromUnknown(displayRecord?.Guid) ??
      readGuidFromUnknown(displayRecord?.guid)
  );
  const summaryEn = normalizeText(readString(raw, ["summaryEn", "SummaryEn", "descriptionTextEn", "DescriptionTextEn"]) ?? readString(summaryRecord ?? {}, ["Text", "text"]));
  const iconAssetName = normalizeAssetFileName(
    readString(raw, ["iconAssetName", "IconAssetName", "iconName", "IconName", "icon", "Icon", "iconFile", "IconFile"])
  );
  const iconAssetPath = normalizeAssetPath(readString(raw, ["iconAssetPath", "IconAssetPath", "iconPath", "IconPath"]));

  return {
    prefab,
    guid,
    ...(displayNameEn ? { displayNameEn } : {}),
    ...(displayLocalizationGuid ? { displayLocalizationGuid } : {}),
    ...(summaryEn ? { summaryEn } : {}),
    ...(iconAssetName ? { iconAssetName } : {}),
    ...(iconAssetPath ? { iconAssetPath } : {}),
    sourceKind,
    sourceRef
  };
}

function normalizeDataExtractorNpcDisplayEntry(
  raw: unknown,
  fallbackPrefab: string | undefined,
  sourceKind: EnrichmentSourceKind,
  sourceRef: string,
  requireCanonicalJoin = false
): PrefabDisplayEnrichedEntry | null {
  if (!isRecord(raw)) {
    return null;
  }

  const observedPrefab =
    normalizeText(fallbackPrefab) ??
    normalizeText(readString(raw, ["PrefabName", "prefabName", "prefab", "Prefab"]));
  const observedGuid = toNumber(raw.NpcId ?? raw.npcId ?? raw.Guid ?? raw.guid ?? raw.PrefabGuid ?? raw.prefabGuid);
  const canonicalPrefab =
    normalizeText(
      readString(raw, [
        "CanonicalPrefabName",
        "canonicalPrefabName",
        "canonicalPrefab",
        "CanonicalPrefab",
        "BasePrefabName",
        "basePrefabName"
      ])
    ) ?? observedPrefab;
  const canonicalGuid =
    toNumber(
      raw.CanonicalNpcId ??
        raw.canonicalNpcId ??
        raw.CanonicalGuid ??
        raw.canonicalGuid ??
        raw.CanonicalPrefabGuid ??
        raw.canonicalPrefabGuid
    ) ?? observedGuid;

  const prefab = requireCanonicalJoin ? canonicalPrefab : canonicalPrefab ?? observedPrefab;
  const guid = requireCanonicalJoin ? canonicalGuid : canonicalGuid ?? observedGuid;
  if (!prefab || guid === undefined) {
    return null;
  }

  if (requireCanonicalJoin && (!canonicalPrefab || canonicalGuid === undefined)) {
    return null;
  }

  const localizedName = raw.LocalizedName ?? raw.localizedName;
  const localizedDescription = raw.LocalizedDescription ?? raw.localizedDescription;
  const displayNameEn = normalizeText(readTextFromUnknown(localizedName));
  const displayLocalizationGuid = normalizeGuid(readGuidDeep(localizedName));
  const summaryEn = normalizeText(readTextFromUnknown(localizedDescription));
  const iconAssetName = normalizeAssetFileName(readString(raw, ["Icon", "icon", "iconAssetName", "IconAssetName"]));

  return {
    prefab,
    guid,
    ...(displayNameEn ? { displayNameEn } : {}),
    ...(displayLocalizationGuid ? { displayLocalizationGuid } : {}),
    ...(summaryEn ? { summaryEn } : {}),
    ...(iconAssetName ? { iconAssetName } : {}),
    sourceKind,
    sourceRef
  };
}

function stableDisplayEntry(entry: PrefabDisplayEnrichedEntry): PrefabDisplayEnrichedEntry {
  const normalizedSourceRef = normalizeSourceRef(entry.sourceRef);
  return {
    prefab: entry.prefab,
    guid: entry.guid,
    ...(normalizeText(entry.displayNameEn) ? { displayNameEn: normalizeText(entry.displayNameEn) } : {}),
    ...(normalizeGuid(entry.displayLocalizationGuid) ? { displayLocalizationGuid: normalizeGuid(entry.displayLocalizationGuid) } : {}),
    ...(normalizeText(entry.summaryEn) ? { summaryEn: normalizeText(entry.summaryEn) } : {}),
    ...(normalizeAssetFileName(entry.iconAssetName) ? { iconAssetName: normalizeAssetFileName(entry.iconAssetName) } : {}),
    ...(normalizeAssetPath(entry.iconAssetPath) ? { iconAssetPath: normalizeAssetPath(entry.iconAssetPath) } : {}),
    sourceKind: entry.sourceKind ?? "generated-fallback",
    ...(normalizedSourceRef ? { sourceRef: normalizedSourceRef } : {})
  };
}

function mergeDisplayEntries(existing: PrefabDisplayEnrichedEntry, incoming: PrefabDisplayEnrichedEntry, sourcePath: string): PrefabDisplayEnrichedEntry {
  if (existing.guid !== incoming.guid) {
    throw new Error(`Conflicting display mapping for ${existing.prefab}: guid mismatch (source: ${sourcePath})`);
  }

  return stableDisplayEntry({
    prefab: existing.prefab,
    guid: existing.guid,
    displayNameEn: mergeRankedOptionalField(
      existing.prefab,
      "displayNameEn",
      existing.displayNameEn,
      existing.sourceKind,
      incoming.displayNameEn,
      incoming.sourceKind,
      sourcePath
    ),
    displayLocalizationGuid: mergeRankedOptionalField(
      existing.prefab,
      "displayLocalizationGuid",
      existing.displayLocalizationGuid,
      existing.sourceKind,
      incoming.displayLocalizationGuid,
      incoming.sourceKind,
      sourcePath
    ),
    summaryEn: mergeRankedOptionalField(
      existing.prefab,
      "summaryEn",
      existing.summaryEn,
      existing.sourceKind,
      incoming.summaryEn,
      incoming.sourceKind,
      sourcePath
    ),
    iconAssetName: mergeRankedOptionalField(
      existing.prefab,
      "iconAssetName",
      existing.iconAssetName,
      existing.sourceKind,
      incoming.iconAssetName,
      incoming.sourceKind,
      sourcePath
    ),
    iconAssetPath: mergeRankedOptionalField(
      existing.prefab,
      "iconAssetPath",
      existing.iconAssetPath,
      existing.sourceKind,
      incoming.iconAssetPath,
      incoming.sourceKind,
      sourcePath
    ),
    ...mergeProvenance(existing, incoming, sourcePath)
  });
}

async function loadLegacyDisplayEntries(filePath: string, prefabPattern: RegExp): Promise<PrefabDisplayEnrichedEntry[]> {
  const parsed = parseJsonText<unknown>(await readFile(filePath, "utf8"));
  const sourceKind = inferLegacySourceKind(filePath);
  const sourceRef = canonicalSourceRef(filePath);
  return extractRows(parsed, ["displayByPrefab", "DisplayByPrefab", "displayMap", "DisplayMap", "entitiesByPrefab"], ["entries", "Entries", "rows", "Rows", "data", "Data", "entities", "Entities"], prefabPattern)
    .map(({ value, fallbackPrefab }) => normalizeDisplayEntry(value, fallbackPrefab, sourceKind, sourceRef))
    .filter((entry): entry is PrefabDisplayEnrichedEntry => Boolean(entry));
}

async function loadDisplayEntriesFromSource(source: ResolvedSourceFile, prefabPattern: RegExp): Promise<PrefabDisplayEnrichedEntry[]> {
  const parsed = parseJsonText<unknown>(await readFile(source.filePath, "utf8"));
  const requireCanonicalJoin = /NpcsClient\.json$/i.test(source.filePath);
  return extractRows(
    parsed,
    ["displayByPrefab", "DisplayByPrefab", "displayMap", "DisplayMap", "entitiesByPrefab"],
    ["entries", "Entries", "rows", "Rows", "data", "Data", "entities", "Entities", "npcs", "Npcs", "units", "Units"],
    prefabPattern
  )
    .map(({ value, fallbackPrefab }) =>
      normalizeDataExtractorNpcDisplayEntry(value, fallbackPrefab, source.sourceKind, source.sourceRef, requireCanonicalJoin) ??
      normalizeDisplayEntry(value, fallbackPrefab, source.sourceKind, source.sourceRef)
    )
    .filter((entry): entry is PrefabDisplayEnrichedEntry => Boolean(entry && hasDisplaySignal(entry)));
}

function mapToStableObject<T>(value: Map<string, T>): Record<string, T> {
  return Object.fromEntries([...value.entries()].sort(([left], [right]) => left.localeCompare(right)));
}

function toCoverage(total: number, matched: number, lowSignalExcluded = 0): CoverageMetric {
  const coveragePct = total > 0 ? Number((matched / total).toFixed(4)) : 0;
  return {
    total,
    matched,
    coveragePct,
    signal: "high-signal",
    lowSignalExcluded: Math.max(0, lowSignalExcluded)
  };
}

function isLowSignalSource(sourceKind: EnrichmentSourceKind | undefined): boolean {
  return sourceKind === "catalog-seed" || sourceKind === "generated-fallback" || sourceKind === "alias-match";
}

function hasTooltipSignal(entry: AbilityTooltipEnrichedEntry): boolean {
  return Boolean(entry.tooltipEntryId || entry.tooltipLocalizationGuid || entry.tooltipTextEn);
}

function hasItemIconSignal(entry: ItemIconEnrichedEntry): boolean {
  return Boolean(entry.iconAssetName || entry.iconAssetPath);
}

function hasItemDescriptionSignal(entry: ItemDescriptionEnrichedEntry): boolean {
  return Boolean(entry.descriptionLocalizationGuid || entry.descriptionTextEn);
}

function hasDisplaySignal(entry: PrefabDisplayEnrichedEntry): boolean {
  return Boolean(entry.displayNameEn || entry.displayLocalizationGuid || entry.summaryEn || entry.iconAssetName || entry.iconAssetPath);
}

function assertConflictDetectionFixtures(): void {
  const tooltipBase: AbilityTooltipEnrichedEntry = stableTooltipEntry({
    abilityPrefab: "AB_Test_Conflict_AbilityGroup",
    abilityGuid: 123,
    tooltipTextEn: "alpha",
    sourceKind: "legacy-extractor",
    sourceRef: "fixture/base"
  });
  const tooltipSame: AbilityTooltipEnrichedEntry = stableTooltipEntry({
    abilityPrefab: "AB_Test_Conflict_AbilityGroup",
    abilityGuid: 123,
    tooltipTextEn: "alpha",
    sourceKind: "legacy-canonical",
    sourceRef: "fixture/same"
  });
  const tooltipDifferentGuid: AbilityTooltipEnrichedEntry = stableTooltipEntry({
    abilityPrefab: "AB_Test_Conflict_AbilityGroup",
    abilityGuid: 456,
    tooltipTextEn: "alpha",
    sourceKind: "legacy-extractor",
    sourceRef: "fixture/conflict-guid"
  });

  mergeTooltipEntries(tooltipBase, tooltipSame, "fixture/same");

  let conflictTriggered = false;
  try {
    mergeTooltipEntries(tooltipBase, tooltipDifferentGuid, "fixture/conflict-guid");
  } catch {
    conflictTriggered = true;
  }
  if (!conflictTriggered) {
    throw new Error("Tooltip conflict fixture failed: expected GUID mismatch to throw.");
  }
}

function resolveDisplaySummary(domainName: string, doc: PrefabDocument): string {
  if (domainName === "npc") {
    return doc.prefabName.includes("VBlood") ? "V Blood NPC record." : "NPC record.";
  }
  if (domainName === "workstation") {
    return doc.prefabName.startsWith("CHAR_Trader_") ? "Vendor or workstation record." : "Workstation record.";
  }
  if (domainName === "blueprint") {
    return "Blueprint record.";
  }
  if (domainName === "quest") {
    return "Journal or quest record.";
  }
  if (domainName === "buff") {
    return "Buff record.";
  }
  return "Item set record.";
}

async function maybeReadDirectoryFiles(directory: string): Promise<string[]> {
  try {
    const directoryStat = await stat(directory);
    if (!directoryStat.isDirectory()) {
      return [];
    }
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return [];
    }
    throw error;
  }

  return (await readdir(directory)).sort((left, right) => left.localeCompare(right));
}

function logResolvedSources(label: string, sources: string[], envSingle: string, envMany: string): void {
  if (sources.length === 0) {
    console.log(`${label}: no legacy source files found (checked ${envSingle}, ${envMany}, and defaults).`);
    return;
  }

  console.log(`${label}: using ${sources.length} source file(s).`);
  for (const source of sources) {
    console.log(`- ${label} source: ${source}`);
  }
}

function logResolvedSourceFiles(label: string, sources: ResolvedSourceFile[], envSingle: string, envMany: string): void {
  if (sources.length === 0) {
    console.log(`${label}: no source files found (checked ${envSingle}, ${envMany}, extractor env overrides, receipts, and defaults).`);
    return;
  }

  console.log(`${label}: using ${sources.length} source file(s).`);
  for (const source of sources) {
    console.log(`- ${label} source: ${source.filePath} [${source.sourceKind}]`);
  }
}

async function main() {
  assertConflictDetectionFixtures();

  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const resourcesDirs = resolveLocalizedResourceDirs();
  const assetDumpDir = process.env.VRISING_ASSET_DUMP_DIR ?? defaultAssetDumpDir;
  const iconSourceDir = path.join(assetDumpDir, "Texture2D");
  const contentPrefabsDir = path.join(repoRoot, "content", "prefabs");
  const enrichmentDir = path.join(repoRoot, "data", "enrichment");
  const publicAbilityIconsDir = path.join(repoRoot, "public", "icons", "abilities");
  const publicItemIconsDir = path.join(repoRoot, "public", "icons", "items");

  await Promise.all([
    ...resourcesDirs.map((resourcesDir, index) => assertExists(resourcesDir, `Localized resources directory #${index + 1}`)),
    assertExists(iconSourceDir, "Asset dump Texture2D directory"),
    assertExists(contentPrefabsDir, "Prefab content directory")
  ]);

  const localizedNames = await loadLocalizedNames(resourcesDirs);
  const docs = await loadPrefabDocuments(contentPrefabsDir);
  const texturePngFiles = (await readdir(iconSourceDir)).filter((fileName) => /\.png$/i.test(fileName));
  const availableIconFiles = new Set(texturePngFiles);
  const iconFiles = texturePngFiles.filter((fileName) => /^Stunlock_Icon_.*\.png$/i.test(fileName));
  const abilityIconFiles = iconFiles.filter((fileName) => /^Stunlock_Icon_Ability_.*\.png$/i.test(fileName));

  const spellSchoolDocs = docs.filter((doc) => /SpellSchoolAsset$/i.test(doc.prefabName));
  const catalogEntries: AbilityCatalogEntry[] = [];
  for (const doc of spellSchoolDocs) {
    catalogEntries.push(...parseSpellSchoolCatalog(doc.body, localizedNames));
  }
  catalogEntries.sort(
    (left, right) =>
      left.school.localeCompare(right.school) ||
      left.tier.localeCompare(right.tier) ||
      left.displayName.localeCompare(right.displayName) ||
      left.prefab.localeCompare(right.prefab)
  );

  for (const entry of catalogEntries) {
    const pickedIcon = pickAbilityIcon(entry, abilityIconFiles);
    if (pickedIcon) {
      entry.icon = `/icons/abilities/${pickedIcon}`;
    }
  }

  const tooltipMapByPrefab = new Map<string, AbilityTooltipEnrichedEntry>(
    catalogEntries.map((entry) => [
      entry.prefab,
      stableTooltipEntry({
        abilityPrefab: entry.prefab,
        abilityGuid: entry.guid,
        sourceKind: "catalog-seed",
        sourceRef: "ability-catalog"
      })
    ])
  );

  await mkdir(enrichmentDir, { recursive: true });
  await rm(publicAbilityIconsDir, { force: true, recursive: true });
  await mkdir(publicAbilityIconsDir, { recursive: true });
  for (const entry of catalogEntries) {
    if (!entry.icon) {
      continue;
    }

    const iconFileName = path.basename(entry.icon);
    await copyFile(path.join(iconSourceDir, iconFileName), path.join(publicAbilityIconsDir, iconFileName));
  }

  const tooltipSources = await resolveDomainSources(
    repoRoot,
    assetDumpDir,
    "VRISING_TOOLTIP_LEGACY_SOURCE",
    "VRISING_TOOLTIP_LEGACY_SOURCES",
    [
      "$REPO_ROOT/data/enrichment/legacy-ability-tooltips.json",
      "$REPO_ROOT/data/enrichment/ability-tooltip-map.json",
      `${defaultLegacyExtractorDataDir}/AbilityGroups.json`,
      `${defaultLegacyExtractorDataDir}/ability-groups.json`,
      `${defaultLegacyExtractorDataDir}/abilities.json`,
      `${defaultLegacyExtractorDataDir}/Entities.json`,
      `${defaultLegacyExtractorDataDir}/entities.json`,
      `${defaultLegacyExtractorDataDir}/Everything.json`,
      `${defaultLegacyExtractorDataDir}/everything.json`,
      "$ASSET_DUMP_DIR/legacy/ability-tooltips.json"
    ],
    ["AbilityGroupsClient.json", "AbilityGroupsServer.json", "AbilityGroups.json"],
    ["EntitiesClient.json", "EntitiesServer.json", "Entities.json", "EverythingClient.json", "EverythingServer.json", "Everything.json"]
  );
  logResolvedSourceFiles("ability-tooltip-map", tooltipSources, "VRISING_TOOLTIP_LEGACY_SOURCE", "VRISING_TOOLTIP_LEGACY_SOURCES");
  let importedLegacyTooltipRows = 0;
  for (const source of tooltipSources) {
    const entries = await loadTooltipEntriesFromSource(source);
    importedLegacyTooltipRows += entries.length;
    for (const entry of entries) {
      const existing = tooltipMapByPrefab.get(entry.abilityPrefab);
      if (!existing) {
        tooltipMapByPrefab.set(entry.abilityPrefab, stableTooltipEntry(entry));
        continue;
      }
      tooltipMapByPrefab.set(entry.abilityPrefab, mergeTooltipEntries(existing, stableTooltipEntry(entry), source.filePath));
    }
  }

  for (const [prefab, entry] of tooltipMapByPrefab.entries()) {
    const resolvedGuid = normalizeGuid(entry.tooltipLocalizationGuid);
    const resolvedText = resolvedGuid ? normalizeText(localizedNames.englishTextByGuid.get(resolvedGuid)) : undefined;
    const localizationSourceRef = resolvedGuid ? localizedNames.englishSourceRefByGuid.get(resolvedGuid) ?? "Resources/Localization/English.json" : entry.sourceRef;
    const resolvedFromLocalization = Boolean(resolvedText && !normalizeText(entry.tooltipTextEn));
    const resolvedProvenance = resolvedFromLocalization
      ? mergeProvenance(
          entry,
          {
            sourceKind: "localized-resource",
            sourceRef: localizationSourceRef
          },
          localizationSourceRef
        )
      : mergeProvenance(entry, {}, entry.sourceRef);
    tooltipMapByPrefab.set(
      prefab,
      stableTooltipEntry({
        ...entry,
        tooltipLocalizationGuid: resolvedGuid,
        tooltipTextEn: normalizeText(entry.tooltipTextEn) ?? resolvedText,
        ...resolvedProvenance
      })
    );
  }

  const itemDocs = docs.filter((doc) => doc.prefabName.startsWith("Item_") && doc.guid !== null);
  const itemIconCandidates = iconFiles.filter(
    (fileName) => /^Stunlock_Icon_(Item|Ingredient|Armor|Weapon|Consumable|Jewel|Gem|Knowledge|Resource|Blood|Magic|Tech|Book|Potion)_/i.test(fileName)
  );
  const itemIconMapByPrefab = new Map<string, ItemIconEnrichedEntry>();
  for (const doc of itemDocs) {
    itemIconMapByPrefab.set(
      doc.prefabName,
      stableItemIconEntry({
        itemPrefab: doc.prefabName,
        itemGuid: doc.guid as number,
        sourceKind: "catalog-seed",
        sourceRef: "content/prefabs"
      })
    );
  }

  const itemIconSources = await resolveDomainSources(
    repoRoot,
    assetDumpDir,
    "VRISING_ITEM_ICON_LEGACY_SOURCE",
    "VRISING_ITEM_ICON_LEGACY_SOURCES",
    [
      "$REPO_ROOT/data/enrichment/legacy-item-icons.json",
      "$REPO_ROOT/data/enrichment/item-icon-map.json",
      `${defaultLegacyExtractorDataDir}/ItemIcons.json`,
      `${defaultLegacyExtractorDataDir}/item-icons.json`,
      `${defaultLegacyExtractorDataDir}/Items.json`,
      `${defaultLegacyExtractorDataDir}/items.json`,
      "$ASSET_DUMP_DIR/legacy/item-icons.json"
    ],
    ["ItemsClient.json", "ItemsServer.json", "Items.json"]
  );
  logResolvedSourceFiles("item-icon-map", itemIconSources, "VRISING_ITEM_ICON_LEGACY_SOURCE", "VRISING_ITEM_ICON_LEGACY_SOURCES");
  let importedLegacyItemIconRows = 0;
  for (const source of itemIconSources) {
    const entries = await loadItemIconEntriesFromSource(source);
    importedLegacyItemIconRows += entries.length;
    for (const entry of entries) {
      const existing = itemIconMapByPrefab.get(entry.itemPrefab);
      if (!existing) {
        itemIconMapByPrefab.set(entry.itemPrefab, stableItemIconEntry(entry));
        continue;
      }
      itemIconMapByPrefab.set(entry.itemPrefab, mergeItemIconEntries(existing, stableItemIconEntry(entry), source.filePath));
    }
  }

  const buffGuidToItemPrefabsIndex = buildBuffGuidToItemPrefabsIndex(itemDocs);
  let relatedPrefabResolvedItemIcons = 0;
  for (const doc of itemDocs) {
    const existing = itemIconMapByPrefab.get(doc.prefabName);
    if (!existing || existing.iconAssetName || existing.iconAssetPath) {
      continue;
    }

    const relatedPrefabs = buffGuidToItemPrefabsIndex.get(doc.prefabName);
    if (!relatedPrefabs || relatedPrefabs.length === 0) {
      continue;
    }

    const relatedSource = pickUniqueResolvedItemIconSource(relatedPrefabs, itemIconMapByPrefab);
    if (!relatedSource) {
      continue;
    }

    relatedPrefabResolvedItemIcons += 1;
    itemIconMapByPrefab.set(
      doc.prefabName,
      deriveItemIconEntryFromResolvedSource(existing, relatedSource.sourcePrefab, relatedSource.entry)
    );
  }

  let nameGeneratorResolvedItemIcons = 0;
  for (const doc of itemDocs) {
    const existing = itemIconMapByPrefab.get(doc.prefabName);
    if (!existing || existing.iconAssetName || existing.iconAssetPath) {
      continue;
    }

    const sourcePrefab = deriveLegendaryNameGeneratorSourcePrefab(doc.prefabName);
    if (!sourcePrefab) {
      continue;
    }

    const sourceEntry = itemIconMapByPrefab.get(sourcePrefab);
    if (!sourceEntry || !hasItemIconSignal(sourceEntry)) {
      continue;
    }

    nameGeneratorResolvedItemIcons += 1;
    itemIconMapByPrefab.set(doc.prefabName, deriveItemIconEntryFromResolvedSource(existing, sourcePrefab, sourceEntry));
  }

  let aliasResolvedItemIcons = 0;
  for (const doc of itemDocs) {
    const existing = itemIconMapByPrefab.get(doc.prefabName);
    if (!existing || existing.iconAssetName || existing.iconAssetPath) {
      continue;
    }

    const displayName = localizedNames.namesByGuid[String(doc.guid)];
    const pickedIcon = pickIconFromAliases(buildPrefabAliases(doc.prefabName, displayName), itemIconCandidates);
    if (!pickedIcon) {
      continue;
    }

    aliasResolvedItemIcons += 1;
    const merged = mergeItemIconEntries(
      existing,
      stableItemIconEntry({
        itemPrefab: doc.prefabName,
        itemGuid: doc.guid as number,
        iconAssetName: pickedIcon,
        ...(availableIconFiles.has(pickedIcon) ? { iconAssetPath: `/icons/items/${pickedIcon}` } : {}),
        sourceKind: "alias-match",
        sourceRef: "Texture2D alias matcher"
      }),
      "alias-match"
    );
    itemIconMapByPrefab.set(doc.prefabName, merged);
  }

  for (const [prefab, entry] of itemIconMapByPrefab.entries()) {
    if (!entry.iconAssetName || entry.iconAssetPath || !availableIconFiles.has(entry.iconAssetName)) {
      continue;
    }

    itemIconMapByPrefab.set(
      prefab,
      stableItemIconEntry({
        ...entry,
        iconAssetPath: `/icons/items/${entry.iconAssetName}`
      })
    );
  }

  const itemDescriptionMapByPrefab = new Map<string, ItemDescriptionEnrichedEntry>();
  for (const doc of itemDocs) {
    const localizedNameSourceRef = localizedNames.nameSourceRefByGuid[String(doc.guid)] ?? "Resources/PrefabNames.cs";
    itemDescriptionMapByPrefab.set(
      doc.prefabName,
      stableItemDescriptionEntry({
        itemPrefab: doc.prefabName,
        itemGuid: doc.guid as number,
        ...(normalizeText(localizedNames.namesByGuid[String(doc.guid)]) ? { displayNameEn: normalizeText(localizedNames.namesByGuid[String(doc.guid)]) } : {}),
        sourceKind: "localized-resource",
        sourceRef: localizedNameSourceRef
      })
    );
  }

  const itemDescriptionSources = await resolveDomainSources(
    repoRoot,
    assetDumpDir,
    "VRISING_ITEM_DESCRIPTION_LEGACY_SOURCE",
    "VRISING_ITEM_DESCRIPTION_LEGACY_SOURCES",
    [
      "$REPO_ROOT/data/enrichment/legacy-item-descriptions.json",
      "$REPO_ROOT/data/enrichment/item-description-map.json",
      `${defaultLegacyExtractorDataDir}/ItemDescriptions.json`,
      `${defaultLegacyExtractorDataDir}/item-descriptions.json`,
      `${defaultLegacyExtractorDataDir}/Items.json`,
      `${defaultLegacyExtractorDataDir}/items.json`,
      "$ASSET_DUMP_DIR/legacy/item-descriptions.json"
    ],
    ["ItemsClient.json", "ItemsServer.json", "Items.json"]
  );
  logResolvedSourceFiles(
    "item-description-map",
    itemDescriptionSources,
    "VRISING_ITEM_DESCRIPTION_LEGACY_SOURCE",
    "VRISING_ITEM_DESCRIPTION_LEGACY_SOURCES"
  );
  let importedLegacyItemDescriptionRows = 0;
  for (const source of itemDescriptionSources) {
    const entries = await loadItemDescriptionEntriesFromSource(source);
    importedLegacyItemDescriptionRows += entries.length;
    for (const entry of entries) {
      const existing = itemDescriptionMapByPrefab.get(entry.itemPrefab);
      if (!existing) {
        itemDescriptionMapByPrefab.set(entry.itemPrefab, stableItemDescriptionEntry(entry));
        continue;
      }
      itemDescriptionMapByPrefab.set(entry.itemPrefab, mergeItemDescriptionEntries(existing, stableItemDescriptionEntry(entry), source.filePath));
    }
  }

  for (const [prefab, entry] of itemDescriptionMapByPrefab.entries()) {
    const resolvedGuid = normalizeGuid(entry.descriptionLocalizationGuid);
    const resolvedText = resolvedGuid ? normalizeText(localizedNames.englishTextByGuid.get(resolvedGuid)) : undefined;
    const localizationSourceRef = resolvedGuid ? localizedNames.englishSourceRefByGuid.get(resolvedGuid) ?? "Resources/Localization/English.json" : entry.sourceRef;
    const resolvedFromLocalization = Boolean(resolvedText && !normalizeText(entry.descriptionTextEn));
    const resolvedProvenance = resolvedFromLocalization
      ? mergeProvenance(
          entry,
          {
            sourceKind: "localized-resource",
            sourceRef: localizationSourceRef
          },
          localizationSourceRef
        )
      : mergeProvenance(entry, {}, entry.sourceRef);
    itemDescriptionMapByPrefab.set(
      prefab,
      stableItemDescriptionEntry({
        ...entry,
        descriptionLocalizationGuid: resolvedGuid,
        descriptionTextEn: normalizeText(entry.descriptionTextEn) ?? resolvedText,
        ...resolvedProvenance
      })
    );
  }

  const recipeDocs = docs.filter((doc) => doc.prefabName.startsWith("Recipe_") && doc.guid !== null);
  const recipeLinkMapByPrefab = new Map<string, RecipeLinkEnrichedEntry>();
  for (const doc of recipeDocs) {
    const components = parseComponents(doc.body);
    recipeLinkMapByPrefab.set(
      doc.prefabName,
      stableRecipeLinkEntry({
        recipePrefab: doc.prefabName,
        recipeGuid: doc.guid as number,
        outputs: parseRecipeRefs(components.get("ProjectM.RecipeOutputBuffer")?.entries ?? [], "Guid", "Amount"),
        requirements: parseRecipeRefs(components.get("ProjectM.RecipeRequirementBuffer")?.entries ?? [], "Guid", "Amount"),
        repairCosts: parseRecipeRefs(components.get("ProjectM.ItemRepairBuffer")?.entries ?? [], "Guid", "Stacks"),
        sourceKind: "legacy-canonical",
        sourceRef: "content/prefabs"
      })
    );
  }

  const recipeLinkSources = await resolveDomainSources(
    repoRoot,
    assetDumpDir,
    "VRISING_RECIPE_LINK_LEGACY_SOURCE",
    "VRISING_RECIPE_LINK_LEGACY_SOURCES",
    [
      "$REPO_ROOT/data/enrichment/legacy-recipe-links.json",
      "$REPO_ROOT/data/enrichment/recipe-link-map.json",
      `${defaultLegacyExtractorDataDir}/Recipes.json`,
      `${defaultLegacyExtractorDataDir}/recipes.json`,
      "$ASSET_DUMP_DIR/legacy/recipe-links.json"
    ],
    ["RecipesClient.json", "RecipesServer.json", "Recipes.json"]
  );
  logResolvedSourceFiles("recipe-link-map", recipeLinkSources, "VRISING_RECIPE_LINK_LEGACY_SOURCE", "VRISING_RECIPE_LINK_LEGACY_SOURCES");
  let importedLegacyRecipeRows = 0;
  for (const source of recipeLinkSources) {
    const entries = await loadRecipeLinkEntriesFromSource(source);
    importedLegacyRecipeRows += entries.length;
    for (const entry of entries) {
      const existing = recipeLinkMapByPrefab.get(entry.recipePrefab);
      if (!existing) {
        recipeLinkMapByPrefab.set(entry.recipePrefab, stableRecipeLinkEntry(entry));
        continue;
      }
      recipeLinkMapByPrefab.set(entry.recipePrefab, mergeRecipeLinkEntries(existing, stableRecipeLinkEntry(entry), source.filePath));
    }
  }

  const displayDomains: DisplayDomainConfig[] = [
    {
      domainName: "npc",
      fileName: "npc-display-map.json",
      envSingle: "VRISING_NPC_DISPLAY_LEGACY_SOURCE",
      envMany: "VRISING_NPC_DISPLAY_LEGACY_SOURCES",
      defaults: ["$REPO_ROOT/data/enrichment/legacy-npc-display.json", "$REPO_ROOT/data/enrichment/npc-display-map.json", "$ASSET_DUMP_DIR/legacy/npc-display.json"],
      extractorModelFiles: ["NpcsClient.json", "NpcsServer.json", "Npcs.json"],
      prefabPattern: /^CHAR_[A-Za-z0-9_]+$/,
      iconPattern: /^Stunlock_Icon_(Unit|Character|NPC|Boss|VBlood)_/i,
      docFilter: (doc) => doc.prefabName.startsWith("CHAR_") || doc.categories.some((category) => npcCategories.has(category))
    },
    {
      domainName: "workstation",
      fileName: "workstation-display-map.json",
      envSingle: "VRISING_WORKSTATION_DISPLAY_LEGACY_SOURCE",
      envMany: "VRISING_WORKSTATION_DISPLAY_LEGACY_SOURCES",
      defaults: [
        "$REPO_ROOT/data/enrichment/legacy-workstation-display.json",
        "$REPO_ROOT/data/enrichment/workstation-display-map.json",
        "$ASSET_DUMP_DIR/legacy/workstation-display.json"
      ],
      prefabPattern: /^(TM|CHAR_Trader)_[A-Za-z0-9_]+$/,
      iconPattern: /^Stunlock_Icon_(Building|Castle|Station|Refinement|Research|Trader)_/i,
      docFilter: (doc) => doc.body.includes("ProjectM.CastleWorkstation") || doc.body.includes("ProjectM.Refinementstation")
    },
    {
      domainName: "blueprint",
      fileName: "blueprint-display-map.json",
      envSingle: "VRISING_BLUEPRINT_DISPLAY_LEGACY_SOURCE",
      envMany: "VRISING_BLUEPRINT_DISPLAY_LEGACY_SOURCES",
      defaults: [
        "$REPO_ROOT/data/enrichment/legacy-blueprint-display.json",
        "$REPO_ROOT/data/enrichment/blueprint-display-map.json",
        "$ASSET_DUMP_DIR/legacy/blueprint-display.json"
      ],
      prefabPattern: /^(BP|TM)_[A-Za-z0-9_]+$/,
      iconPattern: /^Stunlock_Icon_(Building|Castle|Station|Structure)_/i,
      docFilter: (doc) => doc.body.includes("ProjectM.BlueprintData")
    },
    {
      domainName: "quest",
      fileName: "quest-display-map.json",
      envSingle: "VRISING_QUEST_DISPLAY_LEGACY_SOURCE",
      envMany: "VRISING_QUEST_DISPLAY_LEGACY_SOURCES",
      defaults: ["$REPO_ROOT/data/enrichment/legacy-quest-display.json", "$REPO_ROOT/data/enrichment/quest-display-map.json", "$ASSET_DUMP_DIR/legacy/quest-display.json"],
      prefabPattern: /^Journal_[A-Za-z0-9_]+$/,
      iconPattern: /^Stunlock_Icon_(Journal|Quest)_/i,
      docFilter: (doc) => doc.prefabName.startsWith("Journal_") || doc.categories.includes("Journal") || doc.body.includes("ProjectM.AchievementData")
    },
    {
      domainName: "buff",
      fileName: "buff-display-map.json",
      envSingle: "VRISING_BUFF_DISPLAY_LEGACY_SOURCE",
      envMany: "VRISING_BUFF_DISPLAY_LEGACY_SOURCES",
      defaults: ["$REPO_ROOT/data/enrichment/legacy-buff-display.json", "$REPO_ROOT/data/enrichment/buff-display-map.json", "$ASSET_DUMP_DIR/legacy/buff-display.json"],
      prefabPattern: /^Buff_[A-Za-z0-9_]+$/,
      iconPattern: /^Stunlock_Icon_Buff_/i,
      docFilter: (doc) => doc.prefabName.startsWith("Buff_") || doc.categories.includes("Buff") || doc.body.includes("ProjectM.Buff]")
    },
    {
      domainName: "itemset",
      fileName: "itemset-display-map.json",
      envSingle: "VRISING_ITEMSET_DISPLAY_LEGACY_SOURCE",
      envMany: "VRISING_ITEMSET_DISPLAY_LEGACY_SOURCES",
      defaults: [
        "$REPO_ROOT/data/enrichment/legacy-itemset-display.json",
        "$REPO_ROOT/data/enrichment/itemset-display-map.json",
        "$ASSET_DUMP_DIR/legacy/itemset-display.json"
      ],
      prefabPattern: /^ItemSet_[A-Za-z0-9_]+$/,
      iconPattern: /^Stunlock_Icon_(Item|Set|Weapon|Armor|Book)_/i,
      docFilter: (doc) => doc.prefabName.startsWith("ItemSet_") || doc.categories.includes("Set") || doc.body.includes("ProjectM.ItemSet")
    }
  ];

  const displayMapsByDomain = new Map<string, Map<string, PrefabDisplayEnrichedEntry>>();
  const importedLegacyDisplayRowsByDomain: Record<string, number> = {};
  for (const domain of displayDomains) {
    const map = new Map<string, PrefabDisplayEnrichedEntry>();
    const iconCandidates = iconFiles.filter((fileName) => domain.iconPattern.test(fileName));
    for (const doc of docs.filter(domain.docFilter)) {
      if (doc.guid === null) {
        continue;
      }

      const displayNameEn = normalizeText(localizedNames.namesByGuid[String(doc.guid)]);
      const iconAssetName = pickIconFromAliases(buildPrefabAliases(doc.prefabName, displayNameEn), iconCandidates);
      map.set(
        doc.prefabName,
        stableDisplayEntry({
          prefab: doc.prefabName,
          guid: doc.guid,
          ...(displayNameEn ? { displayNameEn } : {}),
          summaryEn: resolveDisplaySummary(domain.domainName, doc),
          ...(iconAssetName ? { iconAssetName } : {}),
          sourceKind: displayNameEn || iconAssetName ? "localized-resource" : "generated-fallback",
          sourceRef: displayNameEn ? localizedNames.nameSourceRefByGuid[String(doc.guid)] ?? "Resources/PrefabNames.cs" : "content/prefabs"
        })
      );
    }

    const displaySources = domain.extractorModelFiles
      ? await resolveDomainSources(repoRoot, assetDumpDir, domain.envSingle, domain.envMany, domain.defaults, domain.extractorModelFiles)
      : (await findExistingFiles(buildLegacySourceCandidates(repoRoot, assetDumpDir, domain.envSingle, domain.envMany, domain.defaults))).map(
          (filePath) =>
            ({
              filePath,
              sourceKind: inferLegacySourceKind(filePath),
              sourceRef: canonicalSourceRef(filePath)
            }) satisfies ResolvedSourceFile
        );
    logResolvedSourceFiles(`${domain.domainName}-display-map`, displaySources, domain.envSingle, domain.envMany);
    let importedRows = 0;
    for (const source of displaySources) {
      const entries = domain.extractorModelFiles
        ? await loadDisplayEntriesFromSource(source, domain.prefabPattern)
        : await loadLegacyDisplayEntries(source.filePath, domain.prefabPattern);
      importedRows += entries.length;
      for (const entry of entries) {
        const existing = map.get(entry.prefab);
        if (!existing) {
          map.set(entry.prefab, stableDisplayEntry(entry));
          continue;
        }
        map.set(entry.prefab, mergeDisplayEntries(existing, stableDisplayEntry(entry), source.filePath));
      }
    }

    importedLegacyDisplayRowsByDomain[domain.domainName] = importedRows;
    displayMapsByDomain.set(domain.domainName, map);
  }

  const stableLocalizedSnapshot: LocalizedNameSnapshot = {
    namesByGuid: Object.fromEntries(Object.keys(localizedNames.namesByGuid).sort((a, b) => Number(a) - Number(b)).map((key) => [key, localizedNames.namesByGuid[key]]))
  };

  const stableCatalogSnapshot: AbilityCatalogSnapshot = { entries: catalogEntries };
  const abilityIconsByPrefab = Object.fromEntries(
    catalogEntries
      .filter((entry) => entry.icon)
      .map((entry) => [entry.prefab, entry.icon as string])
      .sort(([left], [right]) => left.localeCompare(right))
  );
  const stableAbilityIconManifest: AbilityIconManifestSnapshot = {
    iconsByPrefab: abilityIconsByPrefab,
    missingPrefabs: catalogEntries.filter((entry) => !entry.icon).map((entry) => entry.prefab).sort((left, right) => left.localeCompare(right))
  };

  const stableTooltipSnapshot: AbilityTooltipMapSnapshot = Object.fromEntries(
    [...tooltipMapByPrefab.entries()].sort(([left], [right]) => left.localeCompare(right)).map(([prefab, entry]) => [prefab, stableTooltipEntry(entry)])
  );
  const stableItemIconSnapshot: ItemIconMapSnapshot = mapToStableObject(
    new Map([...itemIconMapByPrefab.entries()].map(([prefab, entry]) => [prefab, stableItemIconEntry(entry)]))
  );
  const stableItemDescriptionSnapshot: ItemDescriptionMapSnapshot = mapToStableObject(
    new Map([...itemDescriptionMapByPrefab.entries()].map(([prefab, entry]) => [prefab, stableItemDescriptionEntry(entry)]))
  );
  const stableRecipeLinkSnapshot: RecipeLinkMapSnapshot = mapToStableObject(
    new Map([...recipeLinkMapByPrefab.entries()].map(([prefab, entry]) => [prefab, stableRecipeLinkEntry(entry)]))
  );

  const repoOwnedItemIconNames = [...new Set(Object.values(stableItemIconSnapshot).map((entry) => entry.iconAssetName).filter((value): value is string => Boolean(value)))]
    .filter((iconAssetName) => availableIconFiles.has(iconAssetName))
    .sort((left, right) => left.localeCompare(right));

  await rm(publicItemIconsDir, { force: true, recursive: true });
  await mkdir(publicItemIconsDir, { recursive: true });
  await Promise.all(
    repoOwnedItemIconNames.map((iconAssetName) =>
      copyFile(path.join(iconSourceDir, iconAssetName), path.join(publicItemIconsDir, iconAssetName))
    )
  );

  const stableItemIconManifest: ItemIconManifestSnapshot = {
    iconsByPrefab: Object.fromEntries(
      Object.entries(stableItemIconSnapshot)
        .filter(([, entry]) => entry.iconAssetPath)
        .map(([prefab, entry]) => [prefab, entry.iconAssetPath as string])
        .sort(([left], [right]) => left.localeCompare(right))
    ),
    missingPrefabs: Object.entries(stableItemIconSnapshot)
      .filter(([, entry]) => !entry.iconAssetName && !entry.iconAssetPath)
      .map(([prefab]) => prefab)
      .sort((left, right) => left.localeCompare(right))
  };

  const itemIconValues = Object.values(stableItemIconSnapshot);
  const itemIconUnresolvedSnapshot: ItemIconUnresolvedSnapshot = {
    totalItems: itemIconValues.length,
    extractorResolved: itemIconValues.filter((entry) => hasItemIconSignal(entry) && !isLowSignalSource(entry.sourceKind)).length,
    aliasResolved: itemIconValues.filter((entry) => hasItemIconSignal(entry) && entry.sourceKind === "alias-match").length,
    unresolved: itemIconValues.filter((entry) => !hasItemIconSignal(entry)).length,
    unresolvedEntries: Object.values(stableItemIconSnapshot)
      .filter((entry) => !hasItemIconSignal(entry))
      .map((entry) => ({
        itemPrefab: entry.itemPrefab,
        itemGuid: entry.itemGuid,
        ...(entry.sourceKind ? { sourceKind: entry.sourceKind } : {}),
        ...(entry.sourceRef ? { sourceRef: entry.sourceRef } : {})
      }))
      .sort((left, right) => left.itemPrefab.localeCompare(right.itemPrefab))
  };

  const displaySnapshotsByDomain = new Map<string, PrefabDisplayMapSnapshot>();
  for (const [domainName, domainMap] of displayMapsByDomain.entries()) {
    displaySnapshotsByDomain.set(
      domainName,
      mapToStableObject(new Map([...domainMap.entries()].map(([prefab, entry]) => [prefab, stableDisplayEntry(entry)])))
    );
  }

  const abilityTooltipEntries = stableCatalogSnapshot.entries
    .map((entry) => stableTooltipSnapshot[entry.prefab])
    .filter((entry): entry is AbilityTooltipEnrichedEntry => Boolean(entry));
  const abilityTooltipMatched = abilityTooltipEntries.filter((entry) => hasTooltipSignal(entry) && !isLowSignalSource(entry.sourceKind)).length;
  const abilityTooltipLowSignal = abilityTooltipEntries.filter((entry) => hasTooltipSignal(entry) && isLowSignalSource(entry.sourceKind)).length;

  const itemIconMatched = itemIconValues.filter((entry) => hasItemIconSignal(entry) && !isLowSignalSource(entry.sourceKind)).length;
  const itemIconLowSignal = itemIconValues.filter((entry) => hasItemIconSignal(entry) && isLowSignalSource(entry.sourceKind)).length;

  const itemDescriptionValues = Object.values(stableItemDescriptionSnapshot);
  const itemDescriptionMatched = itemDescriptionValues.filter((entry) => hasItemDescriptionSignal(entry) && !isLowSignalSource(entry.sourceKind)).length;
  const itemDescriptionLowSignal = itemDescriptionValues.filter((entry) => hasItemDescriptionSignal(entry) && isLowSignalSource(entry.sourceKind)).length;

  const recipeLinkValues = Object.values(stableRecipeLinkSnapshot);
  const recipeLinkMatched = recipeLinkValues.filter(
    (entry) => (entry.outputs.length > 0 || entry.requirements.length > 0 || entry.repairCosts.length > 0) && !isLowSignalSource(entry.sourceKind)
  ).length;
  const recipeLinkLowSignal = recipeLinkValues.filter(
    (entry) => (entry.outputs.length > 0 || entry.requirements.length > 0 || entry.repairCosts.length > 0) && isLowSignalSource(entry.sourceKind)
  ).length;

  const coverage: Record<string, CoverageMetric> = {
    "ability-tooltip-map": toCoverage(stableCatalogSnapshot.entries.length, abilityTooltipMatched, abilityTooltipLowSignal),
    "item-icon-map": toCoverage(Object.keys(stableItemIconSnapshot).length, itemIconMatched, itemIconLowSignal),
    "item-description-map": toCoverage(Object.keys(stableItemDescriptionSnapshot).length, itemDescriptionMatched, itemDescriptionLowSignal),
    "recipe-link-map": toCoverage(Object.keys(stableRecipeLinkSnapshot).length, recipeLinkMatched, recipeLinkLowSignal)
  };

  for (const domain of displayDomains) {
    const snapshot = displaySnapshotsByDomain.get(domain.domainName) ?? {};
    const snapshotValues = Object.values(snapshot);
    coverage[`${domain.domainName}-display-map`] = toCoverage(
      Object.keys(snapshot).length,
      snapshotValues.filter((entry) => hasDisplaySignal(entry) && !isLowSignalSource(entry.sourceKind)).length,
      snapshotValues.filter((entry) => hasDisplaySignal(entry) && isLowSignalSource(entry.sourceKind)).length
    );
  }

  const filesToWrite: Array<{ fileName: string; data: unknown }> = [
    { fileName: "prefab-localization.json", data: stableLocalizedSnapshot },
    { fileName: "ability-catalog.json", data: stableCatalogSnapshot },
    { fileName: "ability-icon-manifest.json", data: stableAbilityIconManifest },
    { fileName: "ability-tooltip-map.json", data: stableTooltipSnapshot },
    { fileName: "item-icon-map.json", data: stableItemIconSnapshot },
    { fileName: "item-icon-manifest.json", data: stableItemIconManifest },
    { fileName: "item-icon-unresolved.json", data: itemIconUnresolvedSnapshot },
    { fileName: "item-description-map.json", data: stableItemDescriptionSnapshot },
    { fileName: "recipe-link-map.json", data: stableRecipeLinkSnapshot },
    { fileName: "enrichment-coverage.json", data: Object.fromEntries(Object.entries(coverage).sort(([left], [right]) => left.localeCompare(right))) }
  ];
  for (const domain of displayDomains) {
    filesToWrite.push({ fileName: domain.fileName, data: displaySnapshotsByDomain.get(domain.domainName) ?? {} });
  }

  await Promise.all(filesToWrite.map(({ fileName, data }) => writeFile(path.join(enrichmentDir, fileName), `${JSON.stringify(data, null, 2)}\n`)));

  console.log(
    `Refreshed ${Object.keys(stableLocalizedSnapshot.namesByGuid).length} localized names, ${stableCatalogSnapshot.entries.length} ability catalog rows, ${Object.keys(
      stableTooltipSnapshot
    ).length} tooltip rows, ${Object.keys(stableItemIconSnapshot).length} item icon rows, ${Object.keys(stableItemDescriptionSnapshot).length} item description rows, and ${Object.keys(
      stableRecipeLinkSnapshot
    ).length} recipe link rows.`
  );
  console.log(`Imported ${importedLegacyTooltipRows} tooltip rows from ${tooltipSources.length} source file(s).`);
  console.log(`Imported ${importedLegacyItemIconRows} item icon rows from ${itemIconSources.length} source file(s).`);
  console.log(`Resolved ${relatedPrefabResolvedItemIcons} item icons from related item prefabs.`);
  console.log(`Resolved ${nameGeneratorResolvedItemIcons} item icons from legendary item siblings.`);
  console.log(`Resolved ${aliasResolvedItemIcons} additional item icons through alias fallback.`);
  console.log(`Imported ${importedLegacyItemDescriptionRows} item description rows from ${itemDescriptionSources.length} source file(s).`);
  console.log(`Imported ${importedLegacyRecipeRows} recipe link rows from ${recipeLinkSources.length} source file(s).`);
  console.log(`Materialized ${repoOwnedItemIconNames.length} repo-owned item icon assets.`);
  for (const domain of displayDomains) {
    console.log(`Imported ${importedLegacyDisplayRowsByDomain[domain.domainName] ?? 0} legacy ${domain.domainName} display rows.`);
  }

  const abilityCoverage = coverage["ability-tooltip-map"];
  const itemIconCoverage = coverage["item-icon-map"];
  console.log(
    `ability-tooltip-map high-signal coverage: ${abilityCoverage.matched}/${abilityCoverage.total} (${(abilityCoverage.coveragePct * 100).toFixed(
      2
    )}%), missing ${abilityCoverage.total - abilityCoverage.matched}.`
  );
  console.log(
    `item-icon-map high-signal coverage: ${itemIconCoverage.matched}/${itemIconCoverage.total} (${(itemIconCoverage.coveragePct * 100).toFixed(
      2
    )}%), missing ${itemIconCoverage.total - itemIconCoverage.matched}.`
  );
  console.log(
    `item-icon unresolved report: ${itemIconUnresolvedSnapshot.unresolved} unresolved of ${itemIconUnresolvedSnapshot.totalItems} total items.`
  );
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
