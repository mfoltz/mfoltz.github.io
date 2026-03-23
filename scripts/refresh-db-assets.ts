import { copyFile, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const defaultBloodcraftResourcesDir = "C:/Users/mitch/source/Repos/Bloodcraft/Resources";
const defaultAssetDumpDir = "C:/Users/mitch/OneDrive/Documents/Assets";
const defaultLegacyExtractorDataDir = "C:/Users/mitch/source/Repos/VRising.DataExtractor/Data";
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

interface LocalizedNameSnapshot {
  namesByGuid: Record<string, string>;
}

interface LocalizedNameContext {
  namesByGuid: Record<string, string>;
  englishTextByGuid: Map<string, string>;
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

type AbilityTooltipMapSnapshot = Record<string, AbilityTooltipMapEntry>;

interface ItemIconMapEntry {
  itemPrefab: string;
  itemGuid: number;
  iconAssetName?: string;
  iconAssetPath?: string;
}

type ItemIconMapSnapshot = Record<string, ItemIconMapEntry>;

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

type ItemDescriptionMapSnapshot = Record<string, ItemDescriptionMapEntry>;

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

type RecipeLinkMapSnapshot = Record<string, RecipeLinkMapEntry>;

interface PrefabDisplayMapEntry {
  prefab: string;
  guid: number;
  displayNameEn?: string;
  displayLocalizationGuid?: string;
  summaryEn?: string;
  iconAssetName?: string;
  iconAssetPath?: string;
}

type PrefabDisplayMapSnapshot = Record<string, PrefabDisplayMapEntry>;
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
}

interface DisplayDomainConfig {
  domainName: string;
  fileName: string;
  envSingle: string;
  envMany: string;
  defaults: string[];
  prefabPattern: RegExp;
  iconPattern: RegExp;
  docFilter: (doc: PrefabDocument) => boolean;
}

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

async function loadLocalizedNames(resourcesDir: string): Promise<LocalizedNameContext> {
  const prefabNamesPath = path.join(resourcesDir, "PrefabNames.cs");
  const englishPath = path.join(resourcesDir, "Localization", "English.json");
  await Promise.all([assertExists(prefabNamesPath, "Bloodcraft prefab name map"), assertExists(englishPath, "Bloodcraft English localization")]);

  const [prefabNamesSource, englishSource] = await Promise.all([readFile(prefabNamesPath, "utf8"), readFile(englishPath, "utf8")]);
  const english = JSON.parse(englishSource) as { Nodes?: Array<{ Guid?: string; Text?: string }> };
  const englishTextByGuid = new Map(
    (english.Nodes ?? [])
      .filter((node): node is { Guid: string; Text: string } => typeof node.Guid === "string" && typeof node.Text === "string")
      .map((node) => [node.Guid.toLowerCase(), node.Text])
  );

  const namesByGuid: Record<string, string> = {};
  for (const match of prefabNamesSource.matchAll(/\{\s*new\((-?\d+)\),\s*"([^"]+)"\s*\}/g)) {
    const guid = match[1];
    const localizationKey = match[2];
    const localizedText = englishTextByGuid.get(localizationKey.toLowerCase());
    if (localizedText && localizedText.trim()) {
      namesByGuid[guid] = localizedText.trim();
    }
  }

  return { namesByGuid, englishTextByGuid };
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

function normalizeTooltipEntry(raw: unknown, fallbackPrefab?: string): AbilityTooltipMapEntry | null {
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
      readGuidFromUnknown(localizedDescription?.Key) ??
      readGuidFromUnknown(localizedDescription?.key) ??
      readGuidFromUnknown(localizedDescription?.Guid) ??
      readGuidFromUnknown(localizedDescription?.guid)
  );
  const tooltipTextEn = normalizeText(
    readString(raw, ["tooltipTextEn", "TooltipTextEn", "tooltipText", "TooltipText", "localizedDescriptionText", "LocalizedDescriptionText"]) ??
      readString(localizedDescription ?? {}, ["Text", "text"])
  );
  const tooltipEntryId = normalizeId(
    readString(raw, ["tooltipEntryId", "TooltipEntryId", "tooltipEntryPathId", "TooltipEntryPathId", "tooltipAssetPath", "TooltipAssetPath"])
  );

  return {
    abilityPrefab,
    abilityGuid,
    ...(tooltipEntryId ? { tooltipEntryId } : {}),
    ...(tooltipLocalizationGuid ? { tooltipLocalizationGuid } : {}),
    ...(tooltipTextEn ? { tooltipTextEn } : {})
  };
}

function stableTooltipEntry(entry: AbilityTooltipMapEntry): AbilityTooltipMapEntry {
  return {
    abilityPrefab: entry.abilityPrefab,
    abilityGuid: entry.abilityGuid,
    ...(normalizeId(entry.tooltipEntryId) ? { tooltipEntryId: normalizeId(entry.tooltipEntryId) } : {}),
    ...(normalizeGuid(entry.tooltipLocalizationGuid) ? { tooltipLocalizationGuid: normalizeGuid(entry.tooltipLocalizationGuid) } : {}),
    ...(normalizeText(entry.tooltipTextEn) ? { tooltipTextEn: normalizeText(entry.tooltipTextEn) } : {})
  };
}

async function loadLegacyTooltipEntries(filePath: string): Promise<AbilityTooltipMapEntry[]> {
  const parsed = JSON.parse(await readFile(filePath, "utf8")) as unknown;
  return extractRows(
    parsed,
    ["tooltipsByPrefab", "abilityTooltipsByPrefab", "AbilityTooltipsByPrefab", "abilityTooltipMap", "AbilityTooltipMap"],
    ["entries", "Entries", "abilityGroups", "AbilityGroups", "abilities", "Abilities", "rows", "Rows", "data", "Data"],
    /^(AB|Ability)_[A-Za-z0-9_]+$/
  )
    .map(({ value, fallbackPrefab }) => normalizeTooltipEntry(value, fallbackPrefab))
    .filter((entry): entry is AbilityTooltipMapEntry => Boolean(entry));
}

function mergeTooltipEntries(existing: AbilityTooltipMapEntry, incoming: AbilityTooltipMapEntry, sourcePath: string): AbilityTooltipMapEntry {
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
    tooltipTextEn: mergeOptionalField(existing.abilityPrefab, "tooltipTextEn", existing.tooltipTextEn, incoming.tooltipTextEn, sourcePath)
  });
}

function normalizeItemIconEntry(raw: unknown, fallbackPrefab?: string): ItemIconMapEntry | null {
  if (!isRecord(raw)) {
    return null;
  }

  const itemPrefab = normalizeText(fallbackPrefab) ?? normalizeText(readString(raw, ["itemPrefab", "ItemPrefab", "prefab", "Prefab", "prefabName", "PrefabName"]));
  const itemGuid = toNumber(raw.itemGuid ?? raw.ItemGuid ?? raw.guid ?? raw.Guid);
  if (!itemPrefab || itemGuid === undefined) {
    return null;
  }

  const iconAssetName = normalizeAssetFileName(
    readString(raw, ["iconAssetName", "IconAssetName", "iconName", "IconName", "icon", "Icon", "iconFile", "IconFile"])
  );
  const iconAssetPath = normalizeAssetPath(readString(raw, ["iconAssetPath", "IconAssetPath", "iconPath", "IconPath"]));
  return {
    itemPrefab,
    itemGuid,
    ...(iconAssetName ? { iconAssetName } : {}),
    ...(iconAssetPath ? { iconAssetPath } : {})
  };
}

function stableItemIconEntry(entry: ItemIconMapEntry): ItemIconMapEntry {
  return {
    itemPrefab: entry.itemPrefab,
    itemGuid: entry.itemGuid,
    ...(normalizeAssetFileName(entry.iconAssetName) ? { iconAssetName: normalizeAssetFileName(entry.iconAssetName) } : {}),
    ...(normalizeAssetPath(entry.iconAssetPath) ? { iconAssetPath: normalizeAssetPath(entry.iconAssetPath) } : {})
  };
}

function mergeItemIconEntries(existing: ItemIconMapEntry, incoming: ItemIconMapEntry, sourcePath: string): ItemIconMapEntry {
  if (existing.itemGuid !== incoming.itemGuid) {
    throw new Error(`Conflicting item icon mapping for ${existing.itemPrefab}: guid mismatch (source: ${sourcePath})`);
  }

  return stableItemIconEntry({
    itemPrefab: existing.itemPrefab,
    itemGuid: existing.itemGuid,
    iconAssetName: mergeOptionalField(existing.itemPrefab, "iconAssetName", existing.iconAssetName, incoming.iconAssetName, sourcePath),
    iconAssetPath: mergeOptionalField(existing.itemPrefab, "iconAssetPath", existing.iconAssetPath, incoming.iconAssetPath, sourcePath)
  });
}

async function loadLegacyItemIconEntries(filePath: string): Promise<ItemIconMapEntry[]> {
  const parsed = JSON.parse(await readFile(filePath, "utf8")) as unknown;
  return extractRows(
    parsed,
    ["itemIconsByPrefab", "ItemIconsByPrefab", "itemIconMap", "ItemIconMap", "iconsByPrefab"],
    ["entries", "Entries", "items", "Items", "rows", "Rows", "data", "Data"],
    /^Item_[A-Za-z0-9_]+$/
  )
    .map(({ value, fallbackPrefab }) => normalizeItemIconEntry(value, fallbackPrefab))
    .filter((entry): entry is ItemIconMapEntry => Boolean(entry));
}

function normalizeItemDescriptionEntry(raw: unknown, fallbackPrefab?: string): ItemDescriptionMapEntry | null {
  if (!isRecord(raw)) {
    return null;
  }

  const itemPrefab = normalizeText(fallbackPrefab) ?? normalizeText(readString(raw, ["itemPrefab", "ItemPrefab", "prefab", "Prefab", "prefabName", "PrefabName"]));
  const itemGuid = toNumber(raw.itemGuid ?? raw.ItemGuid ?? raw.guid ?? raw.Guid);
  if (!itemPrefab || itemGuid === undefined) {
    return null;
  }

  const descriptionRecord = readRecord(raw, ["description", "Description", "localizedDescription", "LocalizedDescription"]);
  const displayNameEn = normalizeText(readString(raw, ["displayNameEn", "DisplayNameEn", "displayName", "DisplayName", "name", "Name", "title", "Title"]));
  const descriptionLocalizationGuid = normalizeGuid(
    readString(raw, ["descriptionLocalizationGuid", "DescriptionLocalizationGuid", "localizationGuid", "LocalizationGuid"]) ??
      readGuidFromUnknown(descriptionRecord?.Key) ??
      readGuidFromUnknown(descriptionRecord?.key) ??
      readGuidFromUnknown(descriptionRecord?.Guid) ??
      readGuidFromUnknown(descriptionRecord?.guid)
  );
  const descriptionTextEn = normalizeText(
    readString(raw, ["descriptionTextEn", "DescriptionTextEn", "descriptionText", "DescriptionText", "tooltipText", "TooltipText"]) ??
      readString(descriptionRecord ?? {}, ["Text", "text"])
  );

  return {
    itemPrefab,
    itemGuid,
    ...(displayNameEn ? { displayNameEn } : {}),
    ...(descriptionLocalizationGuid ? { descriptionLocalizationGuid } : {}),
    ...(descriptionTextEn ? { descriptionTextEn } : {})
  };
}

function stableItemDescriptionEntry(entry: ItemDescriptionMapEntry): ItemDescriptionMapEntry {
  return {
    itemPrefab: entry.itemPrefab,
    itemGuid: entry.itemGuid,
    ...(normalizeText(entry.displayNameEn) ? { displayNameEn: normalizeText(entry.displayNameEn) } : {}),
    ...(normalizeGuid(entry.descriptionLocalizationGuid) ? { descriptionLocalizationGuid: normalizeGuid(entry.descriptionLocalizationGuid) } : {}),
    ...(normalizeText(entry.descriptionTextEn) ? { descriptionTextEn: normalizeText(entry.descriptionTextEn) } : {})
  };
}

function mergeItemDescriptionEntries(existing: ItemDescriptionMapEntry, incoming: ItemDescriptionMapEntry, sourcePath: string): ItemDescriptionMapEntry {
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
    descriptionTextEn: mergeOptionalField(existing.itemPrefab, "descriptionTextEn", existing.descriptionTextEn, incoming.descriptionTextEn, sourcePath)
  });
}

async function loadLegacyItemDescriptionEntries(filePath: string): Promise<ItemDescriptionMapEntry[]> {
  const parsed = JSON.parse(await readFile(filePath, "utf8")) as unknown;
  return extractRows(
    parsed,
    ["itemDescriptionsByPrefab", "ItemDescriptionsByPrefab", "itemDescriptionMap", "ItemDescriptionMap", "descriptionsByPrefab"],
    ["entries", "Entries", "items", "Items", "rows", "Rows", "data", "Data"],
    /^Item_[A-Za-z0-9_]+$/
  )
    .map(({ value, fallbackPrefab }) => normalizeItemDescriptionEntry(value, fallbackPrefab))
    .filter((entry): entry is ItemDescriptionMapEntry => Boolean(entry));
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

function normalizeRecipeLinkEntry(raw: unknown, fallbackPrefab?: string): RecipeLinkMapEntry | null {
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
  return { recipePrefab, recipeGuid, outputs, requirements, repairCosts };
}

function stableRecipeLinkEntry(entry: RecipeLinkMapEntry): RecipeLinkMapEntry {
  const sortRefs = (values: RecipeLinkRef[]) =>
    [...values].sort((left, right) => left.prefab.localeCompare(right.prefab) || left.guid - right.guid || (left.amount ?? 0) - (right.amount ?? 0));

  return {
    recipePrefab: entry.recipePrefab,
    recipeGuid: entry.recipeGuid,
    outputs: sortRefs(entry.outputs),
    requirements: sortRefs(entry.requirements),
    repairCosts: sortRefs(entry.repairCosts)
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

function mergeRecipeLinkEntries(existing: RecipeLinkMapEntry, incoming: RecipeLinkMapEntry, sourcePath: string): RecipeLinkMapEntry {
  if (existing.recipeGuid !== incoming.recipeGuid) {
    throw new Error(`Conflicting recipe link mapping for ${existing.recipePrefab}: guid mismatch (source: ${sourcePath})`);
  }
  return stableRecipeLinkEntry({
    recipePrefab: existing.recipePrefab,
    recipeGuid: existing.recipeGuid,
    outputs: mergeRecipeRefs(existing.recipePrefab, existing.outputs, incoming.outputs, sourcePath),
    requirements: mergeRecipeRefs(existing.recipePrefab, existing.requirements, incoming.requirements, sourcePath),
    repairCosts: mergeRecipeRefs(existing.recipePrefab, existing.repairCosts, incoming.repairCosts, sourcePath)
  });
}

async function loadLegacyRecipeLinkEntries(filePath: string): Promise<RecipeLinkMapEntry[]> {
  const parsed = JSON.parse(await readFile(filePath, "utf8")) as unknown;
  return extractRows(
    parsed,
    ["recipeLinksByPrefab", "RecipeLinksByPrefab", "recipeLinkMap", "RecipeLinkMap", "recipesByPrefab"],
    ["entries", "Entries", "recipes", "Recipes", "rows", "Rows", "data", "Data"],
    /^Recipe_[A-Za-z0-9_]+$/
  )
    .map(({ value, fallbackPrefab }) => normalizeRecipeLinkEntry(value, fallbackPrefab))
    .filter((entry): entry is RecipeLinkMapEntry => Boolean(entry));
}

function normalizeDisplayEntry(raw: unknown, fallbackPrefab?: string): PrefabDisplayMapEntry | null {
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
    ...(iconAssetPath ? { iconAssetPath } : {})
  };
}

function stableDisplayEntry(entry: PrefabDisplayMapEntry): PrefabDisplayMapEntry {
  return {
    prefab: entry.prefab,
    guid: entry.guid,
    ...(normalizeText(entry.displayNameEn) ? { displayNameEn: normalizeText(entry.displayNameEn) } : {}),
    ...(normalizeGuid(entry.displayLocalizationGuid) ? { displayLocalizationGuid: normalizeGuid(entry.displayLocalizationGuid) } : {}),
    ...(normalizeText(entry.summaryEn) ? { summaryEn: normalizeText(entry.summaryEn) } : {}),
    ...(normalizeAssetFileName(entry.iconAssetName) ? { iconAssetName: normalizeAssetFileName(entry.iconAssetName) } : {}),
    ...(normalizeAssetPath(entry.iconAssetPath) ? { iconAssetPath: normalizeAssetPath(entry.iconAssetPath) } : {})
  };
}

function mergeDisplayEntries(existing: PrefabDisplayMapEntry, incoming: PrefabDisplayMapEntry, sourcePath: string): PrefabDisplayMapEntry {
  if (existing.guid !== incoming.guid) {
    throw new Error(`Conflicting display mapping for ${existing.prefab}: guid mismatch (source: ${sourcePath})`);
  }

  return stableDisplayEntry({
    prefab: existing.prefab,
    guid: existing.guid,
    displayNameEn: mergeOptionalField(existing.prefab, "displayNameEn", existing.displayNameEn, incoming.displayNameEn, sourcePath),
    displayLocalizationGuid: mergeOptionalField(
      existing.prefab,
      "displayLocalizationGuid",
      existing.displayLocalizationGuid,
      incoming.displayLocalizationGuid,
      sourcePath
    ),
    summaryEn: mergeOptionalField(existing.prefab, "summaryEn", existing.summaryEn, incoming.summaryEn, sourcePath),
    iconAssetName: mergeOptionalField(existing.prefab, "iconAssetName", existing.iconAssetName, incoming.iconAssetName, sourcePath),
    iconAssetPath: mergeOptionalField(existing.prefab, "iconAssetPath", existing.iconAssetPath, incoming.iconAssetPath, sourcePath)
  });
}

async function loadLegacyDisplayEntries(filePath: string, prefabPattern: RegExp): Promise<PrefabDisplayMapEntry[]> {
  const parsed = JSON.parse(await readFile(filePath, "utf8")) as unknown;
  return extractRows(parsed, ["displayByPrefab", "DisplayByPrefab", "displayMap", "DisplayMap", "entitiesByPrefab"], ["entries", "Entries", "rows", "Rows", "data", "Data", "entities", "Entities"], prefabPattern)
    .map(({ value, fallbackPrefab }) => normalizeDisplayEntry(value, fallbackPrefab))
    .filter((entry): entry is PrefabDisplayMapEntry => Boolean(entry));
}

function mapToStableObject<T>(value: Map<string, T>): Record<string, T> {
  return Object.fromEntries([...value.entries()].sort(([left], [right]) => left.localeCompare(right)));
}

function toCoverage(total: number, matched: number): CoverageMetric {
  const coveragePct = total > 0 ? Number((matched / total).toFixed(4)) : 0;
  return { total, matched, coveragePct };
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

async function main() {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const resourcesDir = process.env.BLOODCRAFT_RESOURCES_DIR ?? defaultBloodcraftResourcesDir;
  const assetDumpDir = process.env.VRISING_ASSET_DUMP_DIR ?? defaultAssetDumpDir;
  const iconSourceDir = path.join(assetDumpDir, "Texture2D");
  const contentPrefabsDir = path.join(repoRoot, "content", "prefabs");
  const enrichmentDir = path.join(repoRoot, "data", "enrichment");
  const publicAbilityIconsDir = path.join(repoRoot, "public", "icons", "abilities");
  const publicItemIconsDir = path.join(repoRoot, "public", "icons", "items");

  await Promise.all([
    assertExists(resourcesDir, "Bloodcraft resources directory"),
    assertExists(iconSourceDir, "Asset dump Texture2D directory"),
    assertExists(contentPrefabsDir, "Prefab content directory")
  ]);

  const localizedNames = await loadLocalizedNames(resourcesDir);
  const docs = await loadPrefabDocuments(contentPrefabsDir);
  const iconFiles = (await readdir(iconSourceDir)).filter((fileName) => /^Stunlock_Icon_.*\.png$/i.test(fileName));
  const abilityIconFiles = iconFiles.filter((fileName) => /^Stunlock_Icon_Ability_.*\.png$/i.test(fileName));
  const existingRepoItemIcons = new Set(await maybeReadDirectoryFiles(publicItemIconsDir));

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

  const tooltipMapByPrefab = new Map<string, AbilityTooltipMapEntry>(
    catalogEntries.map((entry) => [
      entry.prefab,
      {
        abilityPrefab: entry.prefab,
        abilityGuid: entry.guid
      }
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

  const legacyTooltipSources = await findExistingFiles(
    buildLegacySourceCandidates(repoRoot, assetDumpDir, "VRISING_TOOLTIP_LEGACY_SOURCE", "VRISING_TOOLTIP_LEGACY_SOURCES", [
      "$REPO_ROOT/data/enrichment/legacy-ability-tooltips.json",
      "$REPO_ROOT/data/enrichment/ability-tooltip-map.json",
      `${defaultLegacyExtractorDataDir}/AbilityGroups.json`,
      `${defaultLegacyExtractorDataDir}/ability-groups.json`,
      `${defaultLegacyExtractorDataDir}/abilities.json`,
      "$ASSET_DUMP_DIR/legacy/ability-tooltips.json"
    ])
  );
  let importedLegacyTooltipRows = 0;
  for (const sourcePath of legacyTooltipSources) {
    const entries = await loadLegacyTooltipEntries(sourcePath);
    importedLegacyTooltipRows += entries.length;
    for (const entry of entries) {
      const existing = tooltipMapByPrefab.get(entry.abilityPrefab);
      if (!existing) {
        tooltipMapByPrefab.set(entry.abilityPrefab, stableTooltipEntry(entry));
        continue;
      }
      tooltipMapByPrefab.set(entry.abilityPrefab, mergeTooltipEntries(existing, stableTooltipEntry(entry), sourcePath));
    }
  }

  for (const [prefab, entry] of tooltipMapByPrefab.entries()) {
    const resolvedGuid = normalizeGuid(entry.tooltipLocalizationGuid);
    const resolvedText = resolvedGuid ? normalizeText(localizedNames.englishTextByGuid.get(resolvedGuid)) : undefined;
    tooltipMapByPrefab.set(
      prefab,
      stableTooltipEntry({
        ...entry,
        tooltipLocalizationGuid: resolvedGuid,
        tooltipTextEn: normalizeText(entry.tooltipTextEn) ?? resolvedText
      })
    );
  }

  const itemDocs = docs.filter((doc) => doc.prefabName.startsWith("Item_") && doc.guid !== null);
  const itemIconCandidates = iconFiles.filter(
    (fileName) => /^Stunlock_Icon_(Item|Ingredient|Armor|Weapon|Consumable|Jewel|Gem|Knowledge|Resource|Blood|Magic|Tech|Book|Potion)_/i.test(fileName)
  );
  const itemIconMapByPrefab = new Map<string, ItemIconMapEntry>();
  for (const doc of itemDocs) {
    const displayName = localizedNames.namesByGuid[String(doc.guid)];
    const pickedIcon = pickIconFromAliases(buildPrefabAliases(doc.prefabName, displayName), itemIconCandidates);
    itemIconMapByPrefab.set(
      doc.prefabName,
      stableItemIconEntry({
        itemPrefab: doc.prefabName,
        itemGuid: doc.guid as number,
        ...(pickedIcon ? { iconAssetName: pickedIcon } : {}),
        ...(pickedIcon && existingRepoItemIcons.has(pickedIcon) ? { iconAssetPath: `/icons/items/${pickedIcon}` } : {})
      })
    );
  }

  const legacyItemIconSources = await findExistingFiles(
    buildLegacySourceCandidates(repoRoot, assetDumpDir, "VRISING_ITEM_ICON_LEGACY_SOURCE", "VRISING_ITEM_ICON_LEGACY_SOURCES", [
      "$REPO_ROOT/data/enrichment/legacy-item-icons.json",
      "$REPO_ROOT/data/enrichment/item-icon-map.json",
      `${defaultLegacyExtractorDataDir}/ItemIcons.json`,
      `${defaultLegacyExtractorDataDir}/item-icons.json`,
      "$ASSET_DUMP_DIR/legacy/item-icons.json"
    ])
  );
  let importedLegacyItemIconRows = 0;
  for (const sourcePath of legacyItemIconSources) {
    const entries = await loadLegacyItemIconEntries(sourcePath);
    importedLegacyItemIconRows += entries.length;
    for (const entry of entries) {
      const existing = itemIconMapByPrefab.get(entry.itemPrefab);
      if (!existing) {
        itemIconMapByPrefab.set(entry.itemPrefab, stableItemIconEntry(entry));
        continue;
      }
      itemIconMapByPrefab.set(entry.itemPrefab, mergeItemIconEntries(existing, stableItemIconEntry(entry), sourcePath));
    }
  }

  const itemDescriptionMapByPrefab = new Map<string, ItemDescriptionMapEntry>();
  for (const doc of itemDocs) {
    itemDescriptionMapByPrefab.set(
      doc.prefabName,
      stableItemDescriptionEntry({
        itemPrefab: doc.prefabName,
        itemGuid: doc.guid as number,
        ...(normalizeText(localizedNames.namesByGuid[String(doc.guid)]) ? { displayNameEn: normalizeText(localizedNames.namesByGuid[String(doc.guid)]) } : {})
      })
    );
  }

  const legacyItemDescriptionSources = await findExistingFiles(
    buildLegacySourceCandidates(repoRoot, assetDumpDir, "VRISING_ITEM_DESCRIPTION_LEGACY_SOURCE", "VRISING_ITEM_DESCRIPTION_LEGACY_SOURCES", [
      "$REPO_ROOT/data/enrichment/legacy-item-descriptions.json",
      "$REPO_ROOT/data/enrichment/item-description-map.json",
      `${defaultLegacyExtractorDataDir}/ItemDescriptions.json`,
      `${defaultLegacyExtractorDataDir}/item-descriptions.json`,
      `${defaultLegacyExtractorDataDir}/Items.json`,
      `${defaultLegacyExtractorDataDir}/items.json`,
      "$ASSET_DUMP_DIR/legacy/item-descriptions.json"
    ])
  );
  let importedLegacyItemDescriptionRows = 0;
  for (const sourcePath of legacyItemDescriptionSources) {
    const entries = await loadLegacyItemDescriptionEntries(sourcePath);
    importedLegacyItemDescriptionRows += entries.length;
    for (const entry of entries) {
      const existing = itemDescriptionMapByPrefab.get(entry.itemPrefab);
      if (!existing) {
        itemDescriptionMapByPrefab.set(entry.itemPrefab, stableItemDescriptionEntry(entry));
        continue;
      }
      itemDescriptionMapByPrefab.set(entry.itemPrefab, mergeItemDescriptionEntries(existing, stableItemDescriptionEntry(entry), sourcePath));
    }
  }

  for (const [prefab, entry] of itemDescriptionMapByPrefab.entries()) {
    const resolvedGuid = normalizeGuid(entry.descriptionLocalizationGuid);
    const resolvedText = resolvedGuid ? normalizeText(localizedNames.englishTextByGuid.get(resolvedGuid)) : undefined;
    itemDescriptionMapByPrefab.set(
      prefab,
      stableItemDescriptionEntry({
        ...entry,
        descriptionLocalizationGuid: resolvedGuid,
        descriptionTextEn: normalizeText(entry.descriptionTextEn) ?? resolvedText
      })
    );
  }

  const recipeDocs = docs.filter((doc) => doc.prefabName.startsWith("Recipe_") && doc.guid !== null);
  const recipeLinkMapByPrefab = new Map<string, RecipeLinkMapEntry>();
  for (const doc of recipeDocs) {
    const components = parseComponents(doc.body);
    recipeLinkMapByPrefab.set(
      doc.prefabName,
      stableRecipeLinkEntry({
        recipePrefab: doc.prefabName,
        recipeGuid: doc.guid as number,
        outputs: parseRecipeRefs(components.get("ProjectM.RecipeOutputBuffer")?.entries ?? [], "Guid", "Amount"),
        requirements: parseRecipeRefs(components.get("ProjectM.RecipeRequirementBuffer")?.entries ?? [], "Guid", "Amount"),
        repairCosts: parseRecipeRefs(components.get("ProjectM.ItemRepairBuffer")?.entries ?? [], "Guid", "Stacks")
      })
    );
  }

  const legacyRecipeLinkSources = await findExistingFiles(
    buildLegacySourceCandidates(repoRoot, assetDumpDir, "VRISING_RECIPE_LINK_LEGACY_SOURCE", "VRISING_RECIPE_LINK_LEGACY_SOURCES", [
      "$REPO_ROOT/data/enrichment/legacy-recipe-links.json",
      "$REPO_ROOT/data/enrichment/recipe-link-map.json",
      `${defaultLegacyExtractorDataDir}/Recipes.json`,
      `${defaultLegacyExtractorDataDir}/recipes.json`,
      "$ASSET_DUMP_DIR/legacy/recipe-links.json"
    ])
  );
  let importedLegacyRecipeRows = 0;
  for (const sourcePath of legacyRecipeLinkSources) {
    const entries = await loadLegacyRecipeLinkEntries(sourcePath);
    importedLegacyRecipeRows += entries.length;
    for (const entry of entries) {
      const existing = recipeLinkMapByPrefab.get(entry.recipePrefab);
      if (!existing) {
        recipeLinkMapByPrefab.set(entry.recipePrefab, stableRecipeLinkEntry(entry));
        continue;
      }
      recipeLinkMapByPrefab.set(entry.recipePrefab, mergeRecipeLinkEntries(existing, stableRecipeLinkEntry(entry), sourcePath));
    }
  }

  const displayDomains: DisplayDomainConfig[] = [
    {
      domainName: "npc",
      fileName: "npc-display-map.json",
      envSingle: "VRISING_NPC_DISPLAY_LEGACY_SOURCE",
      envMany: "VRISING_NPC_DISPLAY_LEGACY_SOURCES",
      defaults: ["$REPO_ROOT/data/enrichment/legacy-npc-display.json", "$REPO_ROOT/data/enrichment/npc-display-map.json", "$ASSET_DUMP_DIR/legacy/npc-display.json"],
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

  const displayMapsByDomain = new Map<string, Map<string, PrefabDisplayMapEntry>>();
  const importedLegacyDisplayRowsByDomain: Record<string, number> = {};
  for (const domain of displayDomains) {
    const map = new Map<string, PrefabDisplayMapEntry>();
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
          ...(iconAssetName ? { iconAssetName } : {})
        })
      );
    }

    const legacySources = await findExistingFiles(
      buildLegacySourceCandidates(repoRoot, assetDumpDir, domain.envSingle, domain.envMany, domain.defaults)
    );
    let importedRows = 0;
    for (const sourcePath of legacySources) {
      const entries = await loadLegacyDisplayEntries(sourcePath, domain.prefabPattern);
      importedRows += entries.length;
      for (const entry of entries) {
        const existing = map.get(entry.prefab);
        if (!existing) {
          map.set(entry.prefab, stableDisplayEntry(entry));
          continue;
        }
        map.set(entry.prefab, mergeDisplayEntries(existing, stableDisplayEntry(entry), sourcePath));
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

  const displaySnapshotsByDomain = new Map<string, PrefabDisplayMapSnapshot>();
  for (const [domainName, domainMap] of displayMapsByDomain.entries()) {
    displaySnapshotsByDomain.set(
      domainName,
      mapToStableObject(new Map([...domainMap.entries()].map(([prefab, entry]) => [prefab, stableDisplayEntry(entry)])))
    );
  }

  const coverage: Record<string, CoverageMetric> = {
    "ability-tooltip-map": toCoverage(
      stableCatalogSnapshot.entries.length,
      stableCatalogSnapshot.entries.filter((entry) => {
        const tooltip = stableTooltipSnapshot[entry.prefab];
        return Boolean(tooltip?.tooltipEntryId || tooltip?.tooltipLocalizationGuid || tooltip?.tooltipTextEn);
      }).length
    ),
    "item-icon-map": toCoverage(
      Object.keys(stableItemIconSnapshot).length,
      Object.values(stableItemIconSnapshot).filter((entry) => Boolean(entry.iconAssetName || entry.iconAssetPath)).length
    ),
    "item-description-map": toCoverage(
      Object.keys(stableItemDescriptionSnapshot).length,
      Object.values(stableItemDescriptionSnapshot).filter((entry) => Boolean(entry.displayNameEn || entry.descriptionLocalizationGuid || entry.descriptionTextEn)).length
    ),
    "recipe-link-map": toCoverage(
      Object.keys(stableRecipeLinkSnapshot).length,
      Object.values(stableRecipeLinkSnapshot).filter((entry) => entry.outputs.length > 0 || entry.requirements.length > 0 || entry.repairCosts.length > 0).length
    )
  };

  for (const domain of displayDomains) {
    const snapshot = displaySnapshotsByDomain.get(domain.domainName) ?? {};
    coverage[`${domain.domainName}-display-map`] = toCoverage(
      Object.keys(snapshot).length,
      Object.values(snapshot).filter((entry) => Boolean(entry.displayNameEn || entry.displayLocalizationGuid || entry.summaryEn || entry.iconAssetName || entry.iconAssetPath))
        .length
    );
  }

  const filesToWrite: Array<{ fileName: string; data: unknown }> = [
    { fileName: "prefab-localization.json", data: stableLocalizedSnapshot },
    { fileName: "ability-catalog.json", data: stableCatalogSnapshot },
    { fileName: "ability-icon-manifest.json", data: stableAbilityIconManifest },
    { fileName: "ability-tooltip-map.json", data: stableTooltipSnapshot },
    { fileName: "item-icon-map.json", data: stableItemIconSnapshot },
    { fileName: "item-icon-manifest.json", data: stableItemIconManifest },
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
  console.log(`Imported ${importedLegacyTooltipRows} legacy tooltip rows from ${legacyTooltipSources.length} file(s).`);
  console.log(`Imported ${importedLegacyItemIconRows} legacy item icon rows from ${legacyItemIconSources.length} file(s).`);
  console.log(`Imported ${importedLegacyItemDescriptionRows} legacy item description rows from ${legacyItemDescriptionSources.length} file(s).`);
  console.log(`Imported ${importedLegacyRecipeRows} legacy recipe link rows from ${legacyRecipeLinkSources.length} file(s).`);
  for (const domain of displayDomains) {
    console.log(`Imported ${importedLegacyDisplayRowsByDomain[domain.domainName] ?? 0} legacy ${domain.domainName} display rows.`);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
