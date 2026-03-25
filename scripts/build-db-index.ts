import { mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { slugFromRelativePath } from "../src/lib/slug";

const sections = ["items", "recipes", "npcs", "abilities", "workstations", "blueprints", "quests", "buffs", "itemsets"] as const;
const removableNamePrefixes = new Set(["Armor", "Building", "Consumable", "Ingredient", "MagicSource", "Misc", "Recipe", "UnitSpawn", "Weapon"]);
const ignoredDbCategories = new Set(["All"]);
const npcCategories = new Set(["CHAR", "Creature", "Servant", "Vampire", "Critter"]);
const armorSlotTypes = new Set(["Chest", "Legs", "Headgear", "Gloves", "Footgear", "Cloak"]);
const itemResourceCategories = new Set(["Alchemy", "BloodEssence", "Gem", "Herb", "MagicSource", "Mineral", "Stackable"]);
const playerAbilityRootPrefixes = [
  "AB_ApplyWeaponCoating_",
  "AB_Axe_",
  "AB_BarrelDisguise_",
  "AB_Bear_",
  "AB_Claws_",
  "AB_Consumable_",
  "AB_Crossbow_",
  "AB_Daggers_",
  "AB_Fishing_",
  "AB_GreatSword_",
  "AB_Longbow_",
  "AB_Lucie_PlayerAbility_",
  "AB_Mace_",
  "AB_Pistols_",
  "AB_Slashers_",
  "AB_Spear_",
  "AB_Subdue_",
  "AB_Sword_",
  "AB_TwinBlades_",
  "AB_Unarmed_",
  "AB_Whip_"
] as const;
const playerVampireAbilityFamilies = new Set([
  "Axe",
  "Claws",
  "Crossbow",
  "Daggers",
  "GreatSword",
  "Longbow",
  "Mace",
  "Pistols",
  "Slashers",
  "Spear",
  "Sword",
  "TwinBlades",
  "Unarmed",
  "Whip"
]);
const npcAbilityRootPrefixes = [
  "AB_ArchMage_",
  "AB_Bandit_",
  "AB_BatVampire_",
  "AB_Blackfang_",
  "AB_CarverBoss_",
  "AB_CastleMan_",
  "AB_ChurchOfLight_",
  "AB_Cursed_",
  "AB_Emery",
  "AB_Gloomrot_",
  "AB_GoldGolem_",
  "AB_Harpy_",
  "AB_HighLord_",
  "AB_Legion_",
  "AB_Militia_",
  "AB_Mutant_",
  "AB_Nun_",
  "AB_Paladin_",
  "AB_RockElemental_",
  "AB_Spider_",
  "AB_StoneGolem_",
  "AB_SUMMON_",
  "AB_Trader_",
  "AB_Undead_",
  "AB_Voltage_",
  "AB_VHunter_",
  "AB_Wendigo_",
  "AB_Werewolf",
  "AB_Winter_"
] as const;
const genericPlayerCopyPattern =
  /(?:record with crafting and repair links|record preserved with runtime|player spell catalog|^Game item\.?$|^Ability prefab\.?$|^[A-Za-z ,]+ ability(?: • .+)?$)/i;

type Section = (typeof sections)[number];

interface IndexEntry {
  slug: string;
  title: string;
  categories: string[];
  icon?: string;
  tier?: string;
  subtitle?: string;
  description?: string;
  itemGroup?: string;
  itemFamily?: string;
  itemType?: string;
  equipmentType?: string;
  weaponType?: string;
  level?: number;
  maxAmount?: number;
  school?: string;
  recordKind?: string;
  catalogStatus?: string;
  castTime?: number;
  cooldown?: number;
  inputType?: string;
  behaviorType?: string;
  craftDuration?: number;
  outputCount?: number;
  requirementCount?: number;
  repairCostCount?: number;
  recipeGroup?: string;
  recipeFamily?: string;
  workstationRole?: string;
  stationKind?: string;
  matchingFloorType?: string;
  bonusServantType?: string;
  status?: string;
  merchantRegion?: string;
  merchantInventory?: string;
  excerpt: string;
  path: string;
  tags?: string[];
}

interface RawEntity {
  slug?: string;
  name?: string;
  title?: string;
  category?: string;
  categories?: string[];
  icon?: string;
  rarity?: string;
  tier?: string;
  subtitle?: string;
  description?: string;
  itemGroup?: string;
  itemFamily?: string;
  itemType?: string;
  equipmentType?: string;
  weaponType?: string;
  level?: number;
  maxAmount?: number;
  school?: string;
  recordKind?: string;
  catalogStatus?: string;
  castTime?: number;
  cooldown?: number;
  inputType?: string;
  behaviorType?: string;
  craftDuration?: number;
  outputCount?: number;
  requirementCount?: number;
  repairCostCount?: number;
  recipeGroup?: string;
  recipeFamily?: string;
  workstationRole?: string;
  stationKind?: string;
  matchingFloorType?: string;
  bonusServantType?: string;
  status?: string;
  merchantRegion?: string;
  merchantInventory?: string;
  excerpt?: string;
  summary?: string;
  tags?: string[];
  [key: string]: unknown;
}

interface PrefabDocument {
  filePath: string;
  relativePath: string;
  sourcePath: string;
  prefabPath: string;
  frontMatter: Record<string, string>;
  body: string;
  prefabName: string;
  guid: number | null;
}

interface ParsedComponent {
  name: string;
  fields: Record<string, string>;
  entries: Array<Record<string, string>>;
}

interface PrefabReference {
  prefab: string;
  guid: number | null;
}

interface RelatedEntityRef {
  title: string;
  prefab: string;
  guid: number | null;
  amount?: number;
  slug?: string;
  path?: string;
}

interface EntityBundle {
  index: IndexEntry;
  detail: RawEntity;
}

interface BuiltItemEntity extends EntityBundle {
  prefabName: string;
  recipePrefabs: string[];
  overrideAbilityPrefab?: string;
}

interface BuiltRecipeEntity extends EntityBundle {
  prefabName: string;
  outputPrefabs: string[];
}

interface GenericEntityOptions {
  title: string;
  subtitle?: string;
  description?: string;
  categories?: Array<string | undefined>;
  summary: string;
  excerpt?: string;
  tier?: string;
  icon?: string;
  tags?: Array<string | undefined>;
  indexFields?: Partial<IndexEntry>;
  detail?: Record<string, unknown>;
}

interface LocalizedNameSnapshot {
  namesByGuid?: Record<string, string>;
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
  entries?: AbilityCatalogEntry[];
}

interface AbilityTooltipMapEntry {
  abilityPrefab: string;
  abilityGuid: number;
  tooltipEntryId?: string;
  tooltipLocalizationGuid?: string;
  tooltipTextEn?: string;
  sourceKind?: string;
  sourceRef?: string;
}

type AbilityTooltipMapSnapshot = Record<string, AbilityTooltipMapEntry>;

interface ItemIconMapEntry {
  itemPrefab: string;
  itemGuid: number;
  iconAssetName?: string;
  iconAssetPath?: string;
  sourceKind?: string;
  sourceRef?: string;
}

type ItemIconMapSnapshot = Record<string, ItemIconMapEntry>;

interface ItemDescriptionMapEntry {
  itemPrefab: string;
  itemGuid: number;
  displayNameEn?: string;
  descriptionLocalizationGuid?: string;
  descriptionTextEn?: string;
  sourceKind?: string;
  sourceRef?: string;
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
  sourceKind?: string;
  sourceRef?: string;
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
  sourceKind?: string;
  sourceRef?: string;
}

type PrefabDisplayMapSnapshot = Record<string, PrefabDisplayMapEntry>;

interface BuildContext {
  localizedNamesByGuid: Map<number, string>;
  abilityCatalogByPrefab: Map<string, AbilityCatalogEntry>;
  abilityTooltipByPrefab: Map<string, AbilityTooltipMapEntry>;
  itemIconByPrefab: Map<string, ItemIconMapEntry>;
  itemDescriptionByPrefab: Map<string, ItemDescriptionMapEntry>;
  recipeLinkByPrefab: Map<string, RecipeLinkMapEntry>;
  npcDisplayByPrefab: Map<string, PrefabDisplayMapEntry>;
  workstationDisplayByPrefab: Map<string, PrefabDisplayMapEntry>;
  blueprintDisplayByPrefab: Map<string, PrefabDisplayMapEntry>;
  questDisplayByPrefab: Map<string, PrefabDisplayMapEntry>;
  buffDisplayByPrefab: Map<string, PrefabDisplayMapEntry>;
  itemsetDisplayByPrefab: Map<string, PrefabDisplayMapEntry>;
}

const ignoredLocalizedNames = new Set(["No Name", "Primary Attack", "Dash", "Rat"]);

function slugify(input: string): string {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function slugifyPrefabName(prefabName: string): string {
  return slugify(humanizeWords(prefabName.replace(/_/g, " ")));
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

    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    frontMatter[key] = value;
  }

  return { body: markdown.slice(end + 4), frontMatter };
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

function humanizeWords(value: string): string {
  return value
    .replace(/_/g, " ")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDisplayName(prefabName: string, section: "items" | "recipes"): string {
  const tokens = prefabName.split("_").filter(Boolean);
  if (section === "items" && tokens[0] === "Item") {
    tokens.shift();
  }
  if (section === "recipes" && tokens[0] === "Recipe") {
    tokens.shift();
  }
  if (tokens.length > 1 && removableNamePrefixes.has(tokens[0])) {
    tokens.shift();
  }

  const formatted = tokens.map((token) => humanizeWords(token)).join(" ").trim();
  return formatted || humanizeWords(prefabName);
}

function formatPrefabDisplayName(prefabName: string, removablePrefixes: string[] = []): string {
  const prefixSet = new Set(removablePrefixes);
  const tokens = prefabName.split("_").filter(Boolean);

  while (tokens.length > 1 && prefixSet.has(tokens[0])) {
    tokens.shift();
  }

  const formatted = tokens.map((token) => humanizeWords(token)).join(" ").trim();
  return formatted || humanizeWords(prefabName);
}

function extractTier(prefabName: string): string | undefined {
  return prefabName.split("_").find((token) => /^T\d{2}|T0X$/i.test(token));
}

function formatCatalogTier(tier: string | undefined): string | undefined {
  if (!tier) {
    return undefined;
  }

  const match = tier.match(/^Tier(\d)$/i);
  return match ? `Tier ${match[1]}` : tier;
}

function cleanDisplayText(value: string | undefined): string | undefined {
  if (!value) {
    return undefined;
  }

  const cleaned = value.replace(/<[^>]+>/g, "").replace(/\\n/g, " ").replace(/\s+/g, " ").trim();
  return cleaned || undefined;
}

function hasUsefulPlayerCopy(value: string | undefined): value is string {
  if (!value) {
    return false;
  }

  const cleaned = cleanDisplayText(value);
  return Boolean(cleaned && !genericPlayerCopyPattern.test(cleaned));
}

function getMeaningfulValue(value: string | undefined, ignored: string[] = ["None"]): string | undefined {
  if (!value) {
    return undefined;
  }

  const trimmed = value.trim();
  if (!trimmed || ignored.includes(trimmed)) {
    return undefined;
  }

  return trimmed;
}

function resolveItemGroup(itemCategories: string[], itemType: string | undefined, equipmentType: string | undefined, weaponType: string | undefined): string {
  if (getMeaningfulValue(weaponType)) {
    return "Weapons";
  }

  if (itemCategories.includes("Armor") || armorSlotTypes.has(equipmentType ?? "")) {
    return "Armor";
  }

  if (itemCategories.includes("Jewel") || itemType === "Jewel") {
    return "Jewels";
  }

  if (itemCategories.includes("Knowledge") || itemCategories.includes("Tech")) {
    return "Knowledge";
  }

  if (itemCategories.includes("Consumable")) {
    return "Consumables";
  }

  if (itemCategories.includes("ItemBuilding")) {
    return "Siege";
  }

  if (itemCategories.some((category) => itemResourceCategories.has(category))) {
    return itemCategories.includes("MagicSource") ? "Magic" : itemCategories.includes("BloodEssence") ? "Blood" : "Resources";
  }

  if (itemType === "Equippable") {
    return "Equipment";
  }

  return humanizeWords(itemType ?? itemCategories[0] ?? "Item");
}

function resolveItemFamily(itemType: string | undefined, equipmentType: string | undefined, weaponType: string | undefined): string | undefined {
  const normalizedWeaponType = getMeaningfulValue(weaponType);
  if (normalizedWeaponType) {
    return normalizedWeaponType;
  }

  const normalizedEquipmentType = getMeaningfulValue(equipmentType, ["None", "Weapon"]);
  if (normalizedEquipmentType) {
    return normalizedEquipmentType;
  }

  if (itemType === "Jewel") {
    return "Jewels";
  }

  return undefined;
}

function resolveRecipeGroup(
  recipePrefabName: string,
  outputCategories: string[],
  outputItemType: string | undefined,
  outputEquipmentType: string | undefined,
  outputWeaponType: string | undefined
): string {
  if (recipePrefabName.includes("_Trader")) {
    return "Vendor Stock";
  }

  return resolveItemGroup(outputCategories, outputItemType, outputEquipmentType, outputWeaponType);
}

function resolveWorkstationRole(prefabName: string, stationKind: string): string {
  if (prefabName.startsWith("CHAR_Trader_")) {
    return "Vendor";
  }

  if (prefabName.includes("ResearchStation")) {
    return "Research";
  }

  if (stationKind === "Refinement Station") {
    return "Refinement";
  }

  if (prefabName.includes("Altar") || prefabName.includes("BloodFountain") || prefabName.includes("Summoning")) {
    return "Utility";
  }

  return "Station";
}

function resolveTraderMetadata(prefabName: string): { merchantRegion?: string; merchantInventory?: string } {
  if (!prefabName.startsWith("CHAR_Trader_")) {
    return {};
  }

  const tokens = prefabName.split("_").filter(Boolean);
  return {
    merchantRegion: tokens[2] ? humanizeWords(tokens[2]) : undefined,
    merchantInventory: tokens[3] ? humanizeWords(tokens[3]) : undefined
  };
}

function getMeaningfulLocalizedName(localizedName: string | undefined): string | undefined {
  const trimmed = localizedName
    ?.replace(/<[^>]+>/g, "")
    .replace(/\\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!trimmed || ignoredLocalizedNames.has(trimmed)) {
    return undefined;
  }

  return trimmed;
}

function resolveLocalizedName(buildContext: BuildContext, guid: number | null): string | undefined {
  if (guid === null) {
    return undefined;
  }

  return getMeaningfulLocalizedName(buildContext.localizedNamesByGuid.get(guid));
}

function resolveTitle(buildContext: BuildContext, doc: PrefabDocument, fallbackTitle: string): { title: string; subtitle?: string } {
  const localizedTitle = resolveLocalizedName(buildContext, doc.guid);
  if (localizedTitle && localizedTitle !== fallbackTitle) {
    return {
      title: localizedTitle,
      subtitle: doc.prefabName
    };
  }

  return { title: fallbackTitle };
}

function getAbilityRecordKind(catalogEntry: AbilityCatalogEntry | undefined): string {
  if (!catalogEntry) {
    return "Technical";
  }

  return catalogEntry.tier === "Tier4" ? "Veil" : "Spell";
}

function isPlayerVampireAbilityPrefab(prefabName: string): boolean {
  const tokens = prefabName.split("_").filter(Boolean);
  return tokens[0] === "AB" && tokens[1] === "Vampire" && playerVampireAbilityFamilies.has(tokens[2] ?? "");
}

function isPlayerAbilityPrefab(prefabName: string): boolean {
  return playerAbilityRootPrefixes.some((prefix) => prefabName.startsWith(prefix)) || isPlayerVampireAbilityPrefab(prefabName);
}

function isInteractionAbilityPrefab(prefabName: string, behaviorType: string | undefined, inputType: string | undefined): boolean {
  return (
    prefabName.startsWith("AB_Interact_") ||
    prefabName.startsWith("Ability_Interact_") ||
    Boolean(behaviorType?.includes("Interact")) ||
    Boolean(inputType?.includes("Interact"))
  );
}

function isCastVariantAbilityPrefab(prefabName: string): boolean {
  return /(?:^|_)(Activate|Cast\d*|Channel\d*|Dash(?:Cast)?|Phase|Recast|Throw|Travel(?:_End|End)?)(?:_|$)/.test(prefabName);
}

function isNpcAbilityPrefab(prefabName: string): boolean {
  if (isPlayerAbilityPrefab(prefabName) || prefabName.startsWith("Ability_")) {
    return false;
  }

  if (prefabName.startsWith("AB_Vampire_")) {
    return !isPlayerVampireAbilityPrefab(prefabName);
  }

  return npcAbilityRootPrefixes.some((prefix) => prefabName.startsWith(prefix));
}

function getAbilityRuntimeKind(
  prefabName: string,
  catalogEntry: AbilityCatalogEntry | undefined,
  behaviorType: string | undefined,
  inputType: string | undefined
): string {
  if (isInteractionAbilityPrefab(prefabName, behaviorType, inputType)) {
    return "Interaction";
  }

  if (catalogEntry || isPlayerAbilityPrefab(prefabName)) {
    return "Player Usable";
  }

  if (isCastVariantAbilityPrefab(prefabName)) {
    return "Cast Variant";
  }

  if (isNpcAbilityPrefab(prefabName)) {
    return "NPC";
  }

  return "Technical";
}

function getAbilityForm(prefabName: string, catalogEntry: AbilityCatalogEntry | undefined): string | undefined {
  if (catalogEntry) {
    return getAbilityRecordKind(catalogEntry);
  }

  if (prefabName.startsWith("AB_Fishing_")) {
    return "Fishing";
  }

  if (prefabName.startsWith("AB_Subdue_")) {
    return "Companion";
  }

  if (prefabName.startsWith("AB_Consumable_") || prefabName.startsWith("AB_Lucie_PlayerAbility_")) {
    return "Consumable";
  }

  if (isPlayerAbilityPrefab(prefabName)) {
    return "Weapon Skill";
  }

  return undefined;
}

function buildAbilityDescription(
  title: string,
  runtimeKind: string,
  tooltipText: string | undefined,
  abilityForm: string | undefined
): string | undefined {
  const playerCopy = cleanDisplayText(tooltipText);
  if (hasUsefulPlayerCopy(playerCopy)) {
    return playerCopy;
  }

  if (runtimeKind === "Interaction") {
    return `${title} is an interaction ability preserved from runtime data so world-object and station behavior stays traceable.`;
  }

  if (runtimeKind === "Cast Variant") {
    return `${title} is a cast-phase runtime variant kept alongside its parent ability for regression tracking and source traceability.`;
  }

  if (runtimeKind === "NPC") {
    return `${title} is an NPC ability record preserved from the broad runtime lane with behavior and source context.`;
  }

  if (runtimeKind === "Player Usable") {
    return abilityForm
      ? `${title} is a player-usable ${abilityForm.toLowerCase()} preserved with runtime and tooltip context.`
      : `${title} is a player-usable ability preserved with runtime and tooltip context.`;
  }

  return undefined;
}

function isFakeItemPrefab(prefabName: string): boolean {
  return (
    prefabName.startsWith("FakeItem_") ||
    prefabName.startsWith("Item_EquipBuff_") ||
    prefabName.includes("_NameGenerator") ||
    prefabName === "LegendaryItem_Template"
  );
}

function isCoatingItemPrefab(prefabName: string, castAbility: PrefabReference | null): boolean {
  return prefabName.includes("_Coating_") || Boolean(castAbility?.prefab?.startsWith("AB_ApplyWeaponCoating_"));
}

function getItemRuntimeKind(prefabName: string, castAbility: PrefabReference | null): string {
  if (isFakeItemPrefab(prefabName)) {
    return "Fake Item";
  }

  if (isCoatingItemPrefab(prefabName, castAbility)) {
    return "Coating";
  }

  return "Player Usable";
}

function buildItemDescription(
  title: string,
  runtimeKind: string,
  itemGroup: string,
  itemFamily: string | undefined,
  castAbility: PrefabReference | null,
  localizedDescription: string | undefined
): string | undefined {
  const playerCopy = cleanDisplayText(localizedDescription);
  if (hasUsefulPlayerCopy(playerCopy)) {
    return playerCopy;
  }

  if (runtimeKind === "Coating") {
    return `${title} is a weapon coating consumable that applies a temporary combat buff when used.`;
  }

  if (runtimeKind === "Fake Item") {
    return `${title} is a runtime-only placeholder item kept in the broad lane for recipe, progression, and control-set traceability.`;
  }

  if (castAbility) {
    return `${title} is a usable ${itemGroup.toLowerCase()} item that triggers ${humanizeWords(castAbility.prefab)} when consumed.`;
  }

  if (itemGroup === "Weapons" && itemFamily) {
    return `${title} is a ${itemFamily.toLowerCase()} weapon with crafting and repair links.`;
  }

  if (itemGroup === "Armor" && itemFamily) {
    return `${title} is ${itemFamily.toLowerCase()} armor with crafting and repair links.`;
  }

  if (itemGroup === "Knowledge") {
    return `${title} is a knowledge unlock item preserved with crafting and source links.`;
  }

  return `${title} is a ${itemGroup.toLowerCase()} item with crafting and usage links.`;
}

function runtimeTag(value: string): string {
  return `runtime:${value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}

function resolveKnownWorkstationTitle(prefabName: string, fallbackTitle: string): string {
  const knownTitles: Record<string, string> = {
    TM_RefinementStation_Sawmill_Small: "Sawmill",
    TM_RefinementStation_Sawmill_Large: "Advanced Sawmill",
    TM_ResearchStation_T01: "Research Desk",
    TM_ResearchStation_T02: "Study",
    TM_ResearchStation_T03: "Athenaeum"
  };

  return knownTitles[prefabName] ?? fallbackTitle;
}

function coerceScalar(value: string): string | number | boolean {
  const trimmed = value.trim();
  if (trimmed === "True") {
    return true;
  }
  if (trimmed === "False") {
    return false;
  }
  if (/^-?\d+(?:\.\d+)?$/.test(trimmed)) {
    return Number(trimmed);
  }
  return trimmed;
}

function formatNumber(value: number): string {
  if (Number.isInteger(value)) {
    return value.toString();
  }

  return value.toFixed(2).replace(/\.?0+$/, "");
}

function stripQualifiedPrefix(value: string | undefined): string | undefined {
  if (!value) {
    return undefined;
  }

  const trimmed = value.trim();
  const match = trimmed.match(/^[A-Za-z0-9_.]+\s+(.+)$/);
  return match ? match[1].trim() : trimmed;
}

function uniqueStrings(values: Array<string | undefined | null>): string[] {
  return [...new Set(values.map((value) => value?.trim()).filter((value): value is string => Boolean(value)))];
}

function dedupeRelatedRefs(items: Array<RelatedEntityRef | null | undefined>): RelatedEntityRef[] {
  const map = new Map<string, RelatedEntityRef>();

  for (const item of items) {
    if (!item) {
      continue;
    }

    const key = `${item.prefab}:${item.path ?? ""}:${item.amount ?? ""}`;
    if (!map.has(key)) {
      map.set(key, item);
    }
  }

  return [...map.values()];
}

function summarizeRefs(items: RelatedEntityRef[], fallback: string): string {
  if (items.length === 0) {
    return fallback;
  }

  return items
    .map((item) => `${item.amount ?? 1} x ${item.title}`)
    .join(", ");
}

function summarizeRecipeLinkRefs(items: RecipeLinkRef[], fallback: string): string {
  if (items.length === 0) {
    return fallback;
  }

  return items
    .map((item) => `${item.amount ?? 1} x ${item.prefab}`)
    .join(", ");
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
    if (!current) {
      return;
    }
    components.set(current.name, current);
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

  return {
    prefab: match[1],
    guid: Number(match[2])
  };
}

function toRelatedEntityRef(ref: PrefabReference | null, itemLookup: Map<string, EntityBundle>, amount?: number): RelatedEntityRef | null {
  if (!ref) {
    return null;
  }

  const match = itemLookup.get(ref.prefab);
  return {
    title: match?.detail.title ? String(match.detail.title) : formatDisplayName(ref.prefab, "items"),
    prefab: ref.prefab,
    guid: ref.guid,
    amount,
    slug: match?.index.slug,
    path: match?.index.path
  };
}

function toPrefabEntityRef(ref: PrefabReference | null, amount?: number): RelatedEntityRef | null {
  if (!ref) {
    return null;
  }

  return {
    title: humanizeWords(ref.prefab),
    prefab: ref.prefab,
    guid: ref.guid,
    amount,
    path: `/prefabs/${slugifyPrefabName(ref.prefab)}`
  };
}

function getFirstField(component: ParsedComponent | undefined, keys: string[]): string | undefined {
  if (!component) {
    return undefined;
  }

  for (const key of keys) {
    if (component.fields[key] !== undefined) {
      return component.fields[key];
    }
  }

  return undefined;
}

function findFieldAcrossComponents(components: Map<string, ParsedComponent>, fieldName: string): string | undefined {
  for (const component of components.values()) {
    if (component.fields[fieldName] !== undefined) {
      return component.fields[fieldName];
    }
  }

  return undefined;
}

function toNumber(value: string | undefined): number | undefined {
  if (!value) {
    return undefined;
  }

  const coerced = coerceScalar(value);
  return typeof coerced === "number" ? coerced : undefined;
}

function toBoolean(value: string | undefined): boolean | undefined {
  if (!value) {
    return undefined;
  }

  const coerced = coerceScalar(value);
  return typeof coerced === "boolean" ? coerced : undefined;
}

function createGenericEntity(section: Section, doc: PrefabDocument, options: GenericEntityOptions): EntityBundle {
  const slug = slugifyPrefabName(doc.prefabName);
  const categories = uniqueStrings(options.categories ?? []).filter((category) => !ignoredDbCategories.has(category));
  const tags = uniqueStrings([doc.prefabName, doc.guid !== null ? String(doc.guid) : undefined, ...(options.tags ?? []), ...categories]);
  const summary = options.summary || `${options.title} record.`;
  const excerpt = (options.excerpt ?? options.description ?? summary).slice(0, 220);

  return {
    index: {
      slug,
      title: options.title,
      categories,
      icon: options.icon,
      tier: options.tier,
      subtitle: options.subtitle,
      description: options.description,
      excerpt,
      path: `/db/${section}/${slug}`,
      tags,
      ...(options.indexFields ?? {})
    },
    detail: {
      slug,
      title: options.title,
      subtitle: options.subtitle,
      description: options.description,
      summary,
      prefab: doc.prefabName,
      guid: doc.guid,
      sourcePath: doc.sourcePath,
      prefabPath: doc.prefabPath,
      categories,
      icon: options.icon,
      tier: options.tier,
      tags,
      ...(options.detail ?? {})
    }
  };
}

function normalizeEntity(section: Section, raw: RawEntity): { index: IndexEntry; detail: RawEntity } {
  const title = String(raw.title ?? raw.name ?? "Untitled");
  const slug = raw.slug ? String(raw.slug) : slugify(title);
  const categories = (raw.categories ?? (raw.category ? [String(raw.category)] : [])) as string[];
  const excerpt = String(raw.excerpt ?? raw.summary ?? "").slice(0, 220);

  return {
    index: {
      slug,
      title,
      categories,
      icon: raw.icon ? String(raw.icon) : undefined,
      tier: raw.tier ? String(raw.tier) : raw.rarity ? String(raw.rarity) : undefined,
      subtitle: raw.subtitle ? String(raw.subtitle) : undefined,
      description: raw.description ? String(raw.description) : undefined,
      itemGroup: raw.itemGroup ? String(raw.itemGroup) : undefined,
      itemFamily: raw.itemFamily ? String(raw.itemFamily) : undefined,
      itemType: raw.itemType ? String(raw.itemType) : undefined,
      equipmentType: raw.equipmentType ? String(raw.equipmentType) : undefined,
      weaponType: raw.weaponType ? String(raw.weaponType) : undefined,
      level: typeof raw.level === "number" ? raw.level : undefined,
      maxAmount: typeof raw.maxAmount === "number" ? raw.maxAmount : undefined,
      school: raw.school ? String(raw.school) : undefined,
      recordKind: raw.recordKind ? String(raw.recordKind) : undefined,
      catalogStatus: raw.catalogStatus ? String(raw.catalogStatus) : undefined,
      castTime: typeof raw.castTime === "number" ? raw.castTime : undefined,
      cooldown: typeof raw.cooldown === "number" ? raw.cooldown : undefined,
      inputType: raw.inputType ? String(raw.inputType) : undefined,
      behaviorType: raw.behaviorType ? String(raw.behaviorType) : undefined,
      craftDuration: typeof raw.craftDuration === "number" ? raw.craftDuration : undefined,
      outputCount: typeof raw.outputCount === "number" ? raw.outputCount : undefined,
      requirementCount: typeof raw.requirementCount === "number" ? raw.requirementCount : undefined,
      repairCostCount: typeof raw.repairCostCount === "number" ? raw.repairCostCount : undefined,
      recipeGroup: raw.recipeGroup ? String(raw.recipeGroup) : undefined,
      recipeFamily: raw.recipeFamily ? String(raw.recipeFamily) : undefined,
      workstationRole: raw.workstationRole ? String(raw.workstationRole) : undefined,
      stationKind: raw.stationKind ? String(raw.stationKind) : undefined,
      matchingFloorType: raw.matchingFloorType ? String(raw.matchingFloorType) : undefined,
      bonusServantType: raw.bonusServantType ? String(raw.bonusServantType) : undefined,
      status: raw.status ? String(raw.status) : undefined,
      merchantRegion: raw.merchantRegion ? String(raw.merchantRegion) : undefined,
      merchantInventory: raw.merchantInventory ? String(raw.merchantInventory) : undefined,
      excerpt,
      path: `/db/${section}/${slug}`,
      tags: raw.tags?.map((tag) => String(tag))
    },
    detail: {
      ...raw,
      slug,
      title,
      summary: raw.summary ?? excerpt
    }
  };
}

function getDocCategories(doc: PrefabDocument): string[] {
  return parseStringList(doc.frontMatter.categories).filter((category) => !ignoredDbCategories.has(category));
}

async function walkMarkdownFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkMarkdownFiles(fullPath)));
      continue;
    }

    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

async function loadPrefabDocuments(repoRoot: string): Promise<PrefabDocument[]> {
  const prefabsDir = path.join(repoRoot, "content", "prefabs");

  try {
    await stat(prefabsDir);
  } catch {
    return [];
  }

  const files = await walkMarkdownFiles(prefabsDir);
  const documents: PrefabDocument[] = [];

  for (const filePath of files) {
    const relativePath = path.relative(prefabsDir, filePath);
    const raw = await readFile(filePath, "utf8");
    const parsed = parseFrontMatter(raw);
    const prefabName = (parsed.frontMatter.title ?? path.basename(relativePath, ".md")).replace(/^"|"$/g, "");
    const guid = parsed.frontMatter.guid && /^-?\d+$/.test(parsed.frontMatter.guid) ? Number(parsed.frontMatter.guid) : null;

    documents.push({
      filePath,
      relativePath,
      sourcePath: path.posix.join("content", "prefabs", relativePath.replace(/\\/g, "/")),
      prefabPath: `/prefabs/${slugFromRelativePath(relativePath)}`,
      frontMatter: parsed.frontMatter,
      body: parsed.body,
      prefabName,
      guid
    });
  }

  return documents;
}

async function loadRawSection(repoRoot: string, section: Section): Promise<RawEntity[]> {
  const candidates = [
    path.join(repoRoot, "data", "db-raw", `${section}.json`),
    path.join(repoRoot, "data", "db-raw", section, "index.json"),
    path.join(repoRoot, "data", `${section}.json`)
  ];

  for (const candidate of candidates) {
    try {
      await stat(candidate);
      const content = JSON.parse(await readFile(candidate, "utf8")) as unknown;
      if (Array.isArray(content)) {
        return content as RawEntity[];
      }
    } catch {
      // keep checking candidates
    }
  }

  return [];
}

function toUnknownNumber(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string" && value.trim().length > 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : undefined;
  }

  return undefined;
}

function toUnknownString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : undefined;
}

function parseRecipeLinkRefs(raw: unknown): RecipeLinkRef[] {
  if (!Array.isArray(raw)) {
    return [];
  }

  return raw
    .map((value) => {
      if (!value || typeof value !== "object") {
        return null;
      }

      const entry = value as Record<string, unknown>;
      const prefab = toUnknownString(entry.prefab);
      const guid = toUnknownNumber(entry.guid);
      if (!prefab || guid === undefined) {
        return null;
      }

      const amount = toUnknownNumber(entry.amount);
      return {
        prefab,
        guid,
        ...(amount !== undefined ? { amount } : {})
      };
    })
    .filter((entry): entry is RecipeLinkRef => Boolean(entry))
    .sort((left, right) => left.prefab.localeCompare(right.prefab) || left.guid - right.guid || (left.amount ?? 0) - (right.amount ?? 0));
}

function parsePrefabDisplayMap(snapshot: Record<string, unknown> | null): Map<string, PrefabDisplayMapEntry> {
  return new Map(
    Object.entries(snapshot ?? {})
      .map(([, value]) => {
        if (!value || typeof value !== "object") {
          return null;
        }

        const entry = value as Record<string, unknown>;
        const prefab = toUnknownString(entry.prefab);
        const guid = toUnknownNumber(entry.guid);
        if (!prefab || guid === undefined) {
          return null;
        }

        const displayNameEn = toUnknownString(entry.displayNameEn);
        const displayLocalizationGuid = toUnknownString(entry.displayLocalizationGuid);
        const summaryEn = toUnknownString(entry.summaryEn);
        const iconAssetName = toUnknownString(entry.iconAssetName);
        const iconAssetPath = toUnknownString(entry.iconAssetPath);
        const sourceKind = toUnknownString(entry.sourceKind);
        const sourceRef = toUnknownString(entry.sourceRef);

        return [
          prefab,
          {
            prefab,
            guid,
            ...(displayNameEn ? { displayNameEn } : {}),
            ...(displayLocalizationGuid ? { displayLocalizationGuid } : {}),
            ...(summaryEn ? { summaryEn } : {}),
            ...(iconAssetName ? { iconAssetName } : {}),
            ...(iconAssetPath ? { iconAssetPath } : {}),
            ...(sourceKind ? { sourceKind } : {}),
            ...(sourceRef ? { sourceRef } : {})
          }
        ] as const;
      })
      .filter((entry): entry is readonly [string, PrefabDisplayMapEntry] => Boolean(entry))
  );
}

async function loadBuildContext(repoRoot: string): Promise<BuildContext> {
  const enrichmentDir = path.join(repoRoot, "data", "enrichment");
  const [localizedSnapshot, abilityCatalogSnapshot, abilityTooltipSnapshot, itemIconSnapshot, itemDescriptionSnapshot, recipeLinkSnapshot, npcDisplaySnapshot, workstationDisplaySnapshot, blueprintDisplaySnapshot, questDisplaySnapshot, buffDisplaySnapshot, itemsetDisplaySnapshot] =
    await Promise.all([
      readJsonIfExists<LocalizedNameSnapshot>(path.join(enrichmentDir, "prefab-localization.json")),
      readJsonIfExists<AbilityCatalogSnapshot>(path.join(enrichmentDir, "ability-catalog.json")),
      readJsonIfExists<Record<string, unknown>>(path.join(enrichmentDir, "ability-tooltip-map.json")),
      readJsonIfExists<Record<string, unknown>>(path.join(enrichmentDir, "item-icon-map.json")),
      readJsonIfExists<Record<string, unknown>>(path.join(enrichmentDir, "item-description-map.json")),
      readJsonIfExists<Record<string, unknown>>(path.join(enrichmentDir, "recipe-link-map.json")),
      readJsonIfExists<Record<string, unknown>>(path.join(enrichmentDir, "npc-display-map.json")),
      readJsonIfExists<Record<string, unknown>>(path.join(enrichmentDir, "workstation-display-map.json")),
      readJsonIfExists<Record<string, unknown>>(path.join(enrichmentDir, "blueprint-display-map.json")),
      readJsonIfExists<Record<string, unknown>>(path.join(enrichmentDir, "quest-display-map.json")),
      readJsonIfExists<Record<string, unknown>>(path.join(enrichmentDir, "buff-display-map.json")),
      readJsonIfExists<Record<string, unknown>>(path.join(enrichmentDir, "itemset-display-map.json"))
    ]);

  const localizedNamesByGuid = new Map<number, string>(
    Object.entries(localizedSnapshot?.namesByGuid ?? {})
      .filter(([, value]) => typeof value === "string" && value.trim().length > 0)
      .map(([guid, value]) => [Number(guid), value.trim()])
  );

  const abilityCatalogByPrefab = new Map<string, AbilityCatalogEntry>(
    (abilityCatalogSnapshot?.entries ?? [])
      .filter((entry): entry is AbilityCatalogEntry => Boolean(entry && typeof entry.prefab === "string" && typeof entry.displayName === "string"))
      .map((entry) => [entry.prefab, entry])
  );

  const abilityTooltipByPrefab = new Map<string, AbilityTooltipMapEntry>(
    Object.entries(abilityTooltipSnapshot ?? {})
      .map(([, rawEntry]) => {
        if (!rawEntry || typeof rawEntry !== "object") {
          return null;
        }

        const entry = rawEntry as Record<string, unknown>;
        const abilityPrefab = toUnknownString(entry.abilityPrefab);
        const abilityGuid = toUnknownNumber(entry.abilityGuid);
        if (!abilityPrefab || abilityGuid === undefined) {
          return null;
        }

        const tooltipEntryId = toUnknownString(entry.tooltipEntryId);
        const tooltipLocalizationGuid = toUnknownString(entry.tooltipLocalizationGuid);
        const tooltipTextEn = toUnknownString(entry.tooltipTextEn);
        const sourceKind = toUnknownString(entry.sourceKind);
        const sourceRef = toUnknownString(entry.sourceRef);
        return [
          abilityPrefab,
          {
            abilityPrefab,
            abilityGuid,
            ...(tooltipEntryId ? { tooltipEntryId } : {}),
            ...(tooltipLocalizationGuid ? { tooltipLocalizationGuid } : {}),
            ...(tooltipTextEn ? { tooltipTextEn } : {}),
            ...(sourceKind ? { sourceKind } : {}),
            ...(sourceRef ? { sourceRef } : {})
          }
        ] as const;
      })
      .filter((entry): entry is readonly [string, AbilityTooltipMapEntry] => Boolean(entry))
  );

  const itemIconByPrefab = new Map<string, ItemIconMapEntry>(
    Object.entries(itemIconSnapshot ?? {})
      .map(([, rawEntry]) => {
        if (!rawEntry || typeof rawEntry !== "object") {
          return null;
        }

        const entry = rawEntry as Record<string, unknown>;
        const itemPrefab = toUnknownString(entry.itemPrefab);
        const itemGuid = toUnknownNumber(entry.itemGuid);
        if (!itemPrefab || itemGuid === undefined) {
          return null;
        }

        return [
          itemPrefab,
          {
            itemPrefab,
            itemGuid,
            ...(toUnknownString(entry.iconAssetName) ? { iconAssetName: toUnknownString(entry.iconAssetName) } : {}),
            ...(toUnknownString(entry.iconAssetPath) ? { iconAssetPath: toUnknownString(entry.iconAssetPath) } : {}),
            ...(toUnknownString(entry.sourceKind) ? { sourceKind: toUnknownString(entry.sourceKind) } : {}),
            ...(toUnknownString(entry.sourceRef) ? { sourceRef: toUnknownString(entry.sourceRef) } : {})
          }
        ] as const;
      })
      .filter((entry): entry is readonly [string, ItemIconMapEntry] => Boolean(entry))
  );

  const itemDescriptionByPrefab = new Map<string, ItemDescriptionMapEntry>(
    Object.entries(itemDescriptionSnapshot ?? {})
      .map(([, rawEntry]) => {
        if (!rawEntry || typeof rawEntry !== "object") {
          return null;
        }

        const entry = rawEntry as Record<string, unknown>;
        const itemPrefab = toUnknownString(entry.itemPrefab);
        const itemGuid = toUnknownNumber(entry.itemGuid);
        if (!itemPrefab || itemGuid === undefined) {
          return null;
        }

        return [
          itemPrefab,
          {
            itemPrefab,
            itemGuid,
            ...(toUnknownString(entry.displayNameEn) ? { displayNameEn: toUnknownString(entry.displayNameEn) } : {}),
            ...(toUnknownString(entry.descriptionLocalizationGuid)
              ? { descriptionLocalizationGuid: toUnknownString(entry.descriptionLocalizationGuid) }
              : {}),
            ...(toUnknownString(entry.descriptionTextEn) ? { descriptionTextEn: toUnknownString(entry.descriptionTextEn) } : {}),
            ...(toUnknownString(entry.sourceKind) ? { sourceKind: toUnknownString(entry.sourceKind) } : {}),
            ...(toUnknownString(entry.sourceRef) ? { sourceRef: toUnknownString(entry.sourceRef) } : {})
          }
        ] as const;
      })
      .filter((entry): entry is readonly [string, ItemDescriptionMapEntry] => Boolean(entry))
  );

  const recipeLinkByPrefab = new Map<string, RecipeLinkMapEntry>(
    Object.entries(recipeLinkSnapshot ?? {})
      .map(([, rawEntry]) => {
        if (!rawEntry || typeof rawEntry !== "object") {
          return null;
        }

        const entry = rawEntry as Record<string, unknown>;
        const recipePrefab = toUnknownString(entry.recipePrefab);
        const recipeGuid = toUnknownNumber(entry.recipeGuid);
        if (!recipePrefab || recipeGuid === undefined) {
          return null;
        }

        return [
          recipePrefab,
          {
            recipePrefab,
            recipeGuid,
            outputs: parseRecipeLinkRefs(entry.outputs),
            requirements: parseRecipeLinkRefs(entry.requirements),
            repairCosts: parseRecipeLinkRefs(entry.repairCosts),
            ...(toUnknownString(entry.sourceKind) ? { sourceKind: toUnknownString(entry.sourceKind) } : {}),
            ...(toUnknownString(entry.sourceRef) ? { sourceRef: toUnknownString(entry.sourceRef) } : {})
          }
        ] as const;
      })
      .filter((entry): entry is readonly [string, RecipeLinkMapEntry] => Boolean(entry))
  );

  return {
    localizedNamesByGuid,
    abilityCatalogByPrefab,
    abilityTooltipByPrefab,
    itemIconByPrefab,
    itemDescriptionByPrefab,
    recipeLinkByPrefab,
    npcDisplayByPrefab: parsePrefabDisplayMap(npcDisplaySnapshot),
    workstationDisplayByPrefab: parsePrefabDisplayMap(workstationDisplaySnapshot),
    blueprintDisplayByPrefab: parsePrefabDisplayMap(blueprintDisplaySnapshot),
    questDisplayByPrefab: parsePrefabDisplayMap(questDisplaySnapshot),
    buffDisplayByPrefab: parsePrefabDisplayMap(buffDisplaySnapshot),
    itemsetDisplayByPrefab: parsePrefabDisplayMap(itemsetDisplaySnapshot)
  };
}

async function readJsonIfExists<T>(filePath: string): Promise<T | null> {
  try {
    return JSON.parse(await readFile(filePath, "utf8")) as T;
  } catch {
    return null;
  }
}

function buildItemEntity(doc: PrefabDocument, components: Map<string, ParsedComponent>, buildContext: BuildContext): BuiltItemEntity {
  const itemData = components.get("ProjectM.ItemData");
  const equippableData = components.get("ProjectM.EquippableData");
  const weaponLevel = components.get("ProjectM.WeaponLevelSource");
  const durability = components.get("ProjectM.Shared.Durability");
  const salvageable = components.get("ProjectM.Shared.Salvageable");
  const consumeAbility = components.get("ProjectM.CastAbilityOnConsume");
  const jewelInstance = components.get("ProjectM.Shared.JewelInstance");

  const itemType = stripQualifiedPrefix(itemData?.fields.ItemType);
  const itemCategories = parseStringList(stripQualifiedPrefix(itemData?.fields.ItemCategory));
  const equipmentType = stripQualifiedPrefix(equippableData?.fields.EquipmentType);
  const weaponType = stripQualifiedPrefix(equippableData?.fields.WeaponType);
  const level = toNumber(weaponLevel?.fields.Level);
  const maxAmount = toNumber(itemData?.fields.MaxAmount);
  const repairRecipe = parsePrefabReference(durability?.fields.RepairRecipe);
  const salvageRecipe = parsePrefabReference(salvageable?.fields.RecipeGUID);
  const castAbility = parsePrefabReference(consumeAbility?.fields.AbilityGuid);
  const overrideAbility = parsePrefabReference(getFirstField(jewelInstance, ["OverrideAbilityType"]));
  const jewelTierIndex = toNumber(getFirstField(jewelInstance, ["TierIndex"]));
  const tier = extractTier(doc.prefabName);
  const runtimeKind = getItemRuntimeKind(doc.prefabName, castAbility);
  const itemGroup =
    runtimeKind === "Fake Item" ? "Fake Items" : resolveItemGroup(itemCategories, itemType, equipmentType, weaponType);
  const itemFamily = resolveItemFamily(itemType, equipmentType, weaponType);
  const categories = uniqueStrings([runtimeKind, ...itemCategories, equipmentType, weaponType, itemType]);
  const fallbackTitle = formatDisplayName(doc.prefabName, "items");
  const { title, subtitle } = resolveTitle(buildContext, doc, fallbackTitle);
  const iconMapEntry = buildContext.itemIconByPrefab.get(doc.prefabName);
  const iconEntry = iconMapEntry && (doc.guid === null || iconMapEntry.itemGuid === doc.guid) ? iconMapEntry : undefined;
  const descriptionMapEntry = buildContext.itemDescriptionByPrefab.get(doc.prefabName);
  const descriptionEntry = descriptionMapEntry && (doc.guid === null || descriptionMapEntry.itemGuid === doc.guid) ? descriptionMapEntry : undefined;
  const localizedDescriptionText = cleanDisplayText(descriptionEntry?.descriptionTextEn);
  const description = buildItemDescription(title, runtimeKind, itemGroup, itemFamily, castAbility, localizedDescriptionText);

  const summaryParts = uniqueStrings([
    runtimeKind !== "Player Usable" ? runtimeKind : undefined,
    weaponType ? `${weaponType} item` : undefined,
    !weaponType && equipmentType ? `${equipmentType} item` : undefined,
    !weaponType && !equipmentType && itemType ? `${itemType} item` : undefined,
    level !== undefined ? `level ${level}` : undefined,
    maxAmount !== undefined ? `max stack ${maxAmount}` : undefined,
    overrideAbility ? `jewel for ${humanizeWords(overrideAbility.prefab.replace(/^(AB|Ability)_/, "").replace(/_/g, " "))}` : undefined
  ]);
  const summaryTail = castAbility ? ` Consumes into ${humanizeWords(castAbility.prefab)}.` : "";
  const summary = `${summaryParts.length > 0 ? `${summaryParts.join(", ")}.` : "Game item."}${summaryTail}`.trim();

  const index: IndexEntry = {
    slug: slugifyPrefabName(doc.prefabName),
    title,
    categories,
    icon: iconEntry?.iconAssetPath,
    tier,
    subtitle,
    description,
    recordKind: runtimeKind,
    itemGroup,
    itemFamily,
    itemType,
    equipmentType,
    weaponType,
    level: typeof level === "number" ? level : undefined,
    maxAmount: typeof maxAmount === "number" ? maxAmount : undefined,
    excerpt: summary.slice(0, 220),
    path: `/db/items/${slugifyPrefabName(doc.prefabName)}`,
    tags: uniqueStrings([
      doc.prefabName,
      doc.guid !== null ? String(doc.guid) : undefined,
      runtimeTag(runtimeKind),
      itemType,
      equipmentType,
      weaponType,
      overrideAbility?.prefab,
      ...categories
    ])
  };

  return {
    prefabName: doc.prefabName,
    recipePrefabs: uniqueStrings([repairRecipe?.prefab, salvageRecipe?.prefab]),
    overrideAbilityPrefab: overrideAbility?.prefab,
    index,
    detail: {
      slug: index.slug,
      title,
      subtitle,
      description,
      summary,
      prefab: doc.prefabName,
      guid: doc.guid,
      sourcePath: doc.sourcePath,
      prefabPath: doc.prefabPath,
      categories,
      tier,
      recordKind: runtimeKind,
      itemGroup,
      itemFamily,
      itemType,
      itemCategory: itemCategories,
      equipmentType,
      weaponType,
      maxAmount,
      level,
      durability: toNumber(durability?.fields.MaxDurability),
      repairRecipePrefab: repairRecipe?.prefab,
      salvageRecipePrefab: salvageRecipe?.prefab,
      consumeAbility: castAbility ? humanizeWords(castAbility.prefab) : undefined,
      overrideAbilityPrefab: overrideAbility?.prefab,
      jewelTierIndex,
      iconAssetName: iconEntry?.iconAssetName,
      iconAssetPath: iconEntry?.iconAssetPath,
      iconSourceKind: iconEntry?.sourceKind,
      iconSourceRef: iconEntry?.sourceRef,
      localizedDisplayNameEn: descriptionEntry?.displayNameEn,
      localizedDescriptionGuid: descriptionEntry?.descriptionLocalizationGuid,
      localizedDescriptionTextEn: localizedDescriptionText,
      descriptionSourceKind: descriptionEntry?.sourceKind,
      descriptionSourceRef: descriptionEntry?.sourceRef,
      tags: index.tags
    }
  };
}

function buildRecipeEntity(
  doc: PrefabDocument,
  components: Map<string, ParsedComponent>,
  itemLookup: Map<string, EntityBundle>,
  buildContext: BuildContext
): BuiltRecipeEntity {
  const recipeData = components.get("ProjectM.RecipeData");
  const requirements = (components.get("ProjectM.RecipeRequirementBuffer")?.entries ?? [])
    .map((entry) => toRelatedEntityRef(parsePrefabReference(entry.Guid), itemLookup, entry.Amount ? Number(entry.Amount) : undefined))
    .filter((entry): entry is RelatedEntityRef => Boolean(entry));
  const outputs = (components.get("ProjectM.RecipeOutputBuffer")?.entries ?? [])
    .map((entry) => toRelatedEntityRef(parsePrefabReference(entry.Guid), itemLookup, entry.Amount ? Number(entry.Amount) : undefined))
    .filter((entry): entry is RelatedEntityRef => Boolean(entry));
  const repairCosts = (components.get("ProjectM.ItemRepairBuffer")?.entries ?? [])
    .map((entry) => toRelatedEntityRef(parsePrefabReference(entry.Guid), itemLookup, entry.Stacks ? Number(entry.Stacks) : undefined))
    .filter((entry): entry is RelatedEntityRef => Boolean(entry));

  const craftDuration = toNumber(recipeData?.fields.CraftDuration);
  const alwaysUnlocked = toBoolean(recipeData?.fields.AlwaysUnlocked);
  const hideInStation = toBoolean(recipeData?.fields.HideInStation);
  const ignoreServerSettings = toBoolean(recipeData?.fields.IgnoreServerSettings);
  const primaryOutput = outputs[0];
  const primaryOutputDetail = primaryOutput?.prefab ? itemLookup.get(primaryOutput.prefab)?.detail : undefined;
  const primaryOutputCategories = itemLookup.get(primaryOutput?.prefab ?? "")?.index.categories ?? [];
  const primaryOutputItemType = typeof primaryOutputDetail?.itemType === "string" ? primaryOutputDetail.itemType : undefined;
  const primaryOutputEquipmentType = typeof primaryOutputDetail?.equipmentType === "string" ? primaryOutputDetail.equipmentType : undefined;
  const primaryOutputWeaponType = typeof primaryOutputDetail?.weaponType === "string" ? primaryOutputDetail.weaponType : undefined;
  const tier = primaryOutput?.prefab ? extractTier(primaryOutput.prefab) : extractTier(doc.prefabName);
  const categories = uniqueStrings([...primaryOutputCategories, primaryOutput?.title ? undefined : formatDisplayName(doc.prefabName, "recipes")]);
  const title = primaryOutput ? `${primaryOutput.title} Recipe` : `${formatDisplayName(doc.prefabName, "recipes")} Recipe`;
  const subtitle = doc.prefabName;
  const recipeGroup = resolveRecipeGroup(doc.prefabName, primaryOutputCategories, primaryOutputItemType, primaryOutputEquipmentType, primaryOutputWeaponType);
  const recipeFamily = resolveItemFamily(primaryOutputItemType, primaryOutputEquipmentType, primaryOutputWeaponType);
  const outputCount = outputs.length;
  const requirementCount = requirements.length;
  const repairCostCount = repairCosts.length;
  const recipeLinkMapEntry = buildContext.recipeLinkByPrefab.get(doc.prefabName);
  const recipeLinkEntry = recipeLinkMapEntry && (doc.guid === null || recipeLinkMapEntry.recipeGuid === doc.guid) ? recipeLinkMapEntry : undefined;
  const description = primaryOutput ? `${recipeGroup} recipe for ${primaryOutput.title}.` : `${recipeGroup} recipe record.`;
  const summary = `Crafts ${summarizeRefs(outputs, "unknown output")}${craftDuration !== undefined ? ` in ${craftDuration}s` : ""} from ${summarizeRefs(requirements, "unknown requirements")}.`;

  const index: IndexEntry = {
    slug: slugifyPrefabName(doc.prefabName),
    title,
    subtitle,
    description,
    categories,
    tier,
    craftDuration: typeof craftDuration === "number" ? craftDuration : undefined,
    outputCount,
    requirementCount,
    repairCostCount,
    recipeGroup,
    recipeFamily,
    excerpt: summary.slice(0, 220),
    path: `/db/recipes/${slugifyPrefabName(doc.prefabName)}`,
    tags: uniqueStrings([
      doc.prefabName,
      doc.guid !== null ? String(doc.guid) : undefined,
      ...categories,
      ...outputs.map((output) => output.prefab),
      ...requirements.map((requirement) => requirement.prefab)
    ])
  };

  return {
    prefabName: doc.prefabName,
    outputPrefabs: outputs.map((output) => output.prefab),
    index,
    detail: {
      slug: index.slug,
      title,
      subtitle,
      description,
      summary,
      prefab: doc.prefabName,
      guid: doc.guid,
      sourcePath: doc.sourcePath,
      prefabPath: doc.prefabPath,
      categories,
      tier,
      recipeGroup,
      recipeFamily,
      craftDuration,
      outputCount,
      requirementCount,
      repairCostCount,
      alwaysUnlocked,
      hideInStation,
      ignoreServerSettings,
      crafts: summarizeRefs(outputs, "unknown output"),
      requires: summarizeRefs(requirements, "unknown requirements"),
      repairsWith: repairCosts.length > 0 ? summarizeRefs(repairCosts, "n/a") : undefined,
      normalizedOutputs: recipeLinkEntry ? summarizeRecipeLinkRefs(recipeLinkEntry.outputs, "n/a") : undefined,
      normalizedRequirements: recipeLinkEntry ? summarizeRecipeLinkRefs(recipeLinkEntry.requirements, "n/a") : undefined,
      normalizedRepairCosts: recipeLinkEntry ? summarizeRecipeLinkRefs(recipeLinkEntry.repairCosts, "n/a") : undefined,
      normalizedOutputCount: recipeLinkEntry ? recipeLinkEntry.outputs.length : undefined,
      normalizedRequirementCount: recipeLinkEntry ? recipeLinkEntry.requirements.length : undefined,
      normalizedRepairCostCount: recipeLinkEntry ? recipeLinkEntry.repairCosts.length : undefined,
      normalizedSourceKind: recipeLinkEntry?.sourceKind,
      normalizedSourceRef: recipeLinkEntry?.sourceRef,
      outputs,
      requirements,
      repairCosts,
      tags: index.tags
    }
  };
}

function buildNpcEntity(doc: PrefabDocument, components: Map<string, ParsedComponent>, buildContext: BuildContext): EntityBundle | null {
  const docCategories = getDocCategories(doc);
  const isNpc = doc.prefabName.startsWith("CHAR_") || docCategories.some((category) => npcCategories.has(category));
  if (!isNpc) {
    return null;
  }

  const essence = components.get("ProjectM.YieldEssenceOnDeath");
  const moveSpeeds = components.get("ProjectM.AiMoveSpeeds");
  const aggro = components.get("ProjectM.AggroConsumer");
  const servant = components.get("ProjectM.ServantConvertable");
  const convertToUnit = toPrefabEntityRef(parsePrefabReference(getFirstField(servant, ["ConvertToUnit"])));
  const essenceItem = toPrefabEntityRef(parsePrefabReference(getFirstField(essence, ["EssenceItemType"])));
  const essenceGain = toNumber(getFirstField(essence, ["EssenceGain"]));
  const walkSpeed = toNumber(getFirstField(moveSpeeds, ["Walk"]));
  const runSpeed = toNumber(getFirstField(moveSpeeds, ["Run"]));
  const aggroRadius = toNumber(getFirstField(aggro, ["ProximityRadius"]));
  const leashDistance = toNumber(getFirstField(aggro, ["MaxDistanceFromPreCombatPosition"]));
  const displayMapEntry = buildContext.npcDisplayByPrefab.get(doc.prefabName);
  const displayEntry = displayMapEntry && (doc.guid === null || displayMapEntry.guid === doc.guid) ? displayMapEntry : undefined;
  const fallbackTitle = formatPrefabDisplayName(doc.prefabName, ["CHAR"]);
  const { title, subtitle } = resolveTitle(buildContext, doc, fallbackTitle);
  const summary = uniqueStrings([
    doc.prefabName.includes("VBlood") ? "V Blood NPC" : "NPC unit",
    essenceGain !== undefined ? `${essenceGain} essence` : undefined,
    aggroRadius !== undefined ? `aggro ${formatNumber(aggroRadius)}` : undefined,
    convertToUnit ? `servant form ${convertToUnit.title}` : undefined
  ]).join(" • ");

  return createGenericEntity("npcs", doc, {
    title,
    subtitle,
    categories: uniqueStrings([...docCategories, doc.prefabName.includes("VBlood") ? "VBlood" : undefined, convertToUnit ? "Servant Convertible" : undefined]),
    summary,
    tier: extractTier(doc.prefabName),
    icon: displayEntry?.iconAssetPath,
    tags: [essenceItem?.prefab, convertToUnit?.prefab],
    detail: {
      essenceGain,
      essenceItemPrefab: essenceItem?.prefab,
      walkSpeed,
      runSpeed,
      aggroRadius,
      leashDistance,
      localizedDisplayNameEn: displayEntry?.displayNameEn,
      localizedDisplayGuid: displayEntry?.displayLocalizationGuid,
      localizedSummaryEn: displayEntry?.summaryEn,
      iconAssetName: displayEntry?.iconAssetName,
      iconAssetPath: displayEntry?.iconAssetPath,
      servantPrefabs: convertToUnit ? [convertToUnit] : [],
      essenceItemPrefabs: essenceItem ? [essenceItem] : []
    }
  });
}

function buildAbilityEntity(doc: PrefabDocument, components: Map<string, ParsedComponent>, buildContext: BuildContext): EntityBundle | null {
  const docCategories = getDocCategories(doc);
  const isAbility = doc.prefabName.startsWith("AB_") || doc.prefabName.startsWith("Ability_") || docCategories.includes("Ability");
  if (!isAbility) {
    return null;
  }

  const groupInfo = components.get("ProjectM.AbilityGroupInfo");
  const state = components.get("ProjectM.AbilityState");
  const castTimeData = components.get("ProjectM.AbilityCastTimeData");
  const cooldownData = components.get("ProjectM.AbilityCooldownData");
  const priority = components.get("ProjectM.AbilityPriority");
  const spawnOnCast = components.get("ProjectM.AbilitySpawnPrefabOnCast");
  const spawnOnStartCast = components.get("ProjectM.AbilitySpawnPrefabOnStartCast");
  const behaviorType = stripQualifiedPrefix(getFirstField(groupInfo, ["BehaviorType"])) ?? stripQualifiedPrefix(getFirstField(state, ["AbilityTypeFlag"]));
  const inputType = stripQualifiedPrefix(getFirstField(groupInfo, ["InputType"]));
  const target =
    stripQualifiedPrefix(getFirstField(groupInfo, ["Target"])) ??
    stripQualifiedPrefix(getFirstField(spawnOnCast, ["Target"])) ??
    stripQualifiedPrefix(getFirstField(spawnOnStartCast, ["Target"]));
  const castTime = toNumber(getFirstField(castTimeData, ["CastDuration", "CastTime", "Duration"]));
  const cooldown = toNumber(getFirstField(cooldownData, ["Cooldown", "CooldownDuration", "Duration"]));
  const priorityValue = toNumber(getFirstField(priority, ["Value", "Priority"]));
  const spawnedPrefabs = dedupeRelatedRefs([
    toPrefabEntityRef(parsePrefabReference(getFirstField(spawnOnCast, ["SpawnPrefab"]))),
    toPrefabEntityRef(parsePrefabReference(getFirstField(spawnOnStartCast, ["SpawnPrefab"])))
  ]);
  const catalogEntry = buildContext.abilityCatalogByPrefab.get(doc.prefabName);
  const tooltipMapEntry = buildContext.abilityTooltipByPrefab.get(doc.prefabName);
  const tooltipEntry = tooltipMapEntry && (doc.guid === null || doc.guid === tooltipMapEntry.abilityGuid) ? tooltipMapEntry : undefined;
  const normalizedDocCategories = docCategories.filter((category) => category !== "AB" && category !== "Ability");
  const fallbackTitle = formatPrefabDisplayName(doc.prefabName, ["AB", "Ability"]);
  const title = catalogEntry?.displayName ?? resolveTitle(buildContext, doc, fallbackTitle).title;
  const subtitle = catalogEntry || title !== fallbackTitle ? doc.prefabName : undefined;
  const runtimeKind = getAbilityRuntimeKind(doc.prefabName, catalogEntry, behaviorType, inputType);
  const abilityForm = getAbilityForm(doc.prefabName, catalogEntry);
  const tierLabel = catalogEntry ? formatCatalogTier(catalogEntry.tier) : extractTier(doc.prefabName);
  const tooltipText = cleanDisplayText(tooltipEntry?.tooltipTextEn);
  const description = buildAbilityDescription(title, runtimeKind, tooltipText, abilityForm);
  const summary = uniqueStrings([
    runtimeKind,
    abilityForm,
    catalogEntry?.school,
    catalogEntry ? tierLabel : undefined,
    behaviorType && behaviorType !== "None" ? behaviorType : undefined,
    inputType && inputType !== "Default" ? inputType : undefined,
    castTime !== undefined ? `cast ${formatNumber(castTime)}s` : undefined,
    cooldown !== undefined ? `cooldown ${formatNumber(cooldown)}s` : undefined,
    spawnedPrefabs[0] ? `spawns ${spawnedPrefabs[0].title}` : undefined
  ]).join(" • ");

  return createGenericEntity("abilities", doc, {
    title,
    subtitle,
    description,
    categories: uniqueStrings([
      ...normalizedDocCategories,
      runtimeKind,
      abilityForm,
      catalogEntry?.school,
      tierLabel,
      behaviorType && behaviorType !== "None" ? behaviorType : undefined
    ]),
    summary,
    tier: tierLabel,
    icon: catalogEntry?.icon,
    tags: [runtimeTag(runtimeKind), abilityForm, catalogEntry?.school, catalogEntry?.displayName, behaviorType, inputType, target, ...spawnedPrefabs.map((item) => item.prefab)],
    indexFields: {
      school: catalogEntry?.school,
      recordKind: runtimeKind,
      catalogStatus: catalogEntry ? "catalog" : "technical",
      castTime,
      cooldown,
      inputType,
      behaviorType
    },
    detail: {
      school: catalogEntry?.school,
      recordKind: runtimeKind,
      catalogStatus: catalogEntry ? "catalog" : "technical",
      behaviorType,
      inputType,
      target,
      castTime,
      cooldown,
      priority: priorityValue,
      catalogTier: tierLabel,
      tooltipEntryId: tooltipEntry?.tooltipEntryId,
      tooltipLocalizationGuid: tooltipEntry?.tooltipLocalizationGuid,
      tooltipTextEn: tooltipText,
      tooltipSourceKind: tooltipEntry?.sourceKind,
      tooltipSourceRef: tooltipEntry?.sourceRef,
      spawnedPrefabs
    }
  });
}

function buildWorkstationEntity(doc: PrefabDocument, components: Map<string, ParsedComponent>, buildContext: BuildContext): EntityBundle | null {
  const castleWorkstation = components.get("ProjectM.CastleWorkstation");
  const refinementstation = components.get("ProjectM.Refinementstation");
  if (!castleWorkstation && !refinementstation) {
    return null;
  }

  const docCategories = getDocCategories(doc);
  const respawnPoint = components.get("ProjectM.RespawnPoint");
  const inventoryPrefab = toPrefabEntityRef(parsePrefabReference(getFirstField(refinementstation, ["InventoryPrefabGuid"])));
  const stationKind = refinementstation ? "Refinement Station" : "Castle Workstation";
  const workstationRole = resolveWorkstationRole(doc.prefabName, stationKind);
  const { merchantRegion, merchantInventory } = resolveTraderMetadata(doc.prefabName);
  const matchingFloorType = stripQualifiedPrefix(getFirstField(castleWorkstation, ["MatchingFloorType"]));
  const bonusServantType = stripQualifiedPrefix(getFirstField(castleWorkstation, ["BonusServantType"]));
  const status = stripQualifiedPrefix(getFirstField(refinementstation, ["Status"]));
  const respawnPointType = stripQualifiedPrefix(getFirstField(respawnPoint, ["RespawnPointType"]));
  const displayMapEntry = buildContext.workstationDisplayByPrefab.get(doc.prefabName);
  const displayEntry = displayMapEntry && (doc.guid === null || displayMapEntry.guid === doc.guid) ? displayMapEntry : undefined;
  const fallbackTitle = resolveKnownWorkstationTitle(
    doc.prefabName,
    formatPrefabDisplayName(doc.prefabName, ["TM", "BP", "StationBonus", "Refinementstation"])
  );
  const { title } = resolveTitle(buildContext, doc, fallbackTitle);
  const subtitle = doc.prefabName;
  const description =
    workstationRole === "Vendor"
      ? `${merchantRegion ? `${merchantRegion} ` : ""}${merchantInventory ? `${merchantInventory.toLowerCase()} ` : ""}vendor record with normalized naming and source-prefab context.`
      : `${workstationRole} workstation record with player-facing naming and technical prefab context.`;
  const summary = uniqueStrings([
    workstationRole,
    workstationRole === "Vendor" ? merchantRegion : stationKind,
    workstationRole === "Vendor" ? merchantInventory : matchingFloorType ? `floor ${matchingFloorType}` : undefined,
    workstationRole !== "Vendor" && bonusServantType ? `servant ${bonusServantType}` : undefined,
    inventoryPrefab ? `inventory ${inventoryPrefab.title}` : undefined,
    respawnPointType ? `respawn ${respawnPointType}` : undefined
  ]).join(" • ");

  return createGenericEntity("workstations", doc, {
    title,
    subtitle,
    description,
    categories: uniqueStrings([...docCategories, stationKind, workstationRole]),
    summary,
    icon: displayEntry?.iconAssetPath,
    tags: [matchingFloorType, bonusServantType, status, inventoryPrefab?.prefab, respawnPointType, merchantRegion, merchantInventory],
    indexFields: {
      workstationRole,
      stationKind,
      matchingFloorType,
      bonusServantType,
      status,
      merchantRegion,
      merchantInventory
    },
    detail: {
      workstationRole,
      stationKind,
      matchingFloorType,
      bonusServantType,
      status,
      merchantRegion,
      merchantInventory,
      respawnPointType,
      localizedDisplayNameEn: displayEntry?.displayNameEn,
      localizedDisplayGuid: displayEntry?.displayLocalizationGuid,
      localizedSummaryEn: displayEntry?.summaryEn,
      iconAssetName: displayEntry?.iconAssetName,
      iconAssetPath: displayEntry?.iconAssetPath,
      inventoryPrefabs: inventoryPrefab ? [inventoryPrefab] : []
    }
  });
}

function buildBlueprintEntity(doc: PrefabDocument, components: Map<string, ParsedComponent>, buildContext: BuildContext): EntityBundle | null {
  const blueprint = components.get("ProjectM.BlueprintData");
  if (!blueprint) {
    return null;
  }

  const docCategories = getDocCategories(doc);
  const fullDismantleTime = toNumber(getFirstField(blueprint, ["FullDismantleTime"]));
  const isStartBlueprint = toBoolean(getFirstField(blueprint, ["IsStartBlueprint"]));
  const isInventoryItemBuilding = toBoolean(getFirstField(blueprint, ["IsInventoryItemBuilding"]));
  const exitBuildModeWhenBuilt = toBoolean(getFirstField(blueprint, ["ExitBuildModeWhenBuilt"]));
  const requiresLineOfSight = toBoolean(getFirstField(blueprint, ["RequiresLineOfSight"]));
  const requiresPathfinding = toBoolean(getFirstField(blueprint, ["RequiresSuccessfullPathfinding"]));
  const placeSequence = getFirstField(blueprint, ["PlaceSequence"]);
  const editSequence = getFirstField(blueprint, ["EditSequence"]);
  const buildingSequence = getFirstField(blueprint, ["BuildingSequence"]);
  const displayMapEntry = buildContext.blueprintDisplayByPrefab.get(doc.prefabName);
  const displayEntry = displayMapEntry && (doc.guid === null || displayMapEntry.guid === doc.guid) ? displayMapEntry : undefined;
  const fallbackTitle = formatPrefabDisplayName(doc.prefabName, ["TM", "BP"]);
  const { title, subtitle } = resolveTitle(buildContext, doc, fallbackTitle);
  const summary = uniqueStrings([
    components.has("ProjectM.CastleWorkstation") || components.has("ProjectM.Refinementstation") ? "Workstation blueprint" : "Buildable blueprint",
    isStartBlueprint ? "starter build" : undefined,
    requiresLineOfSight ? "line of sight required" : undefined,
    requiresPathfinding ? "pathfinding required" : undefined,
    fullDismantleTime !== undefined ? `dismantle ${formatNumber(fullDismantleTime)}s` : undefined
  ]).join(" • ");

  return createGenericEntity("blueprints", doc, {
    title,
    subtitle,
    categories: uniqueStrings([...docCategories, "Blueprint"]),
    summary,
    icon: displayEntry?.iconAssetPath,
    tags: [placeSequence, editSequence, buildingSequence],
    detail: {
      fullDismantleTime,
      isStartBlueprint,
      isInventoryItemBuilding,
      exitBuildModeWhenBuilt,
      requiresLineOfSight,
      requiresSuccessfullPathfinding: requiresPathfinding,
      placeSequence,
      editSequence,
      buildingSequence,
      localizedDisplayNameEn: displayEntry?.displayNameEn,
      localizedDisplayGuid: displayEntry?.displayLocalizationGuid,
      localizedSummaryEn: displayEntry?.summaryEn,
      iconAssetName: displayEntry?.iconAssetName,
      iconAssetPath: displayEntry?.iconAssetPath
    }
  });
}

function buildQuestEntity(doc: PrefabDocument, components: Map<string, ParsedComponent>, buildContext: BuildContext): EntityBundle | null {
  const achievement = components.get("ProjectM.AchievementData");
  const docCategories = getDocCategories(doc);
  const isQuest = doc.prefabName.startsWith("Journal_") || docCategories.includes("Journal") || Boolean(achievement);
  if (!isQuest) {
    return null;
  }

  const rewardPrefab = toPrefabEntityRef(parsePrefabReference(getFirstField(achievement, ["Reward"])));
  const dependencyPrefab = toPrefabEntityRef(parsePrefabReference(getFirstField(achievement, ["Dependency"])));
  const level = toNumber(getFirstField(achievement, ["Level"]));
  const subTasks = components.get("ProjectM.AchievementSubTaskEntry")?.entries ?? [];
  const displayMapEntry = buildContext.questDisplayByPrefab.get(doc.prefabName);
  const displayEntry = displayMapEntry && (doc.guid === null || displayMapEntry.guid === doc.guid) ? displayMapEntry : undefined;
  const fallbackTitle = formatPrefabDisplayName(doc.prefabName, ["Journal"]);
  const { title, subtitle } = resolveTitle(buildContext, doc, fallbackTitle);
  const summary = uniqueStrings([
    level !== undefined ? `journal step level ${level}` : "Journal step",
    rewardPrefab ? `rewards ${rewardPrefab.title}` : undefined,
    dependencyPrefab ? `depends on ${dependencyPrefab.title}` : undefined,
    subTasks.length > 0 ? `${subTasks.length} subtasks` : undefined
  ]).join(" • ");

  return createGenericEntity("quests", doc, {
    title,
    subtitle,
    categories: uniqueStrings([...docCategories, doc.prefabName.includes("Reward_") ? "Reward" : undefined]),
    summary,
    icon: displayEntry?.iconAssetPath,
    tags: [rewardPrefab?.prefab, dependencyPrefab?.prefab],
    detail: {
      level,
      rewardPrefab: rewardPrefab?.prefab,
      dependencyPrefab: dependencyPrefab?.prefab,
      subTaskCount: subTasks.length,
      localizedDisplayNameEn: displayEntry?.displayNameEn,
      localizedDisplayGuid: displayEntry?.displayLocalizationGuid,
      localizedSummaryEn: displayEntry?.summaryEn,
      iconAssetName: displayEntry?.iconAssetName,
      iconAssetPath: displayEntry?.iconAssetPath,
      rewardPrefabs: rewardPrefab ? [rewardPrefab] : [],
      dependencyPrefabs: dependencyPrefab ? [dependencyPrefab] : []
    }
  });
}

function buildBuffEntity(doc: PrefabDocument, components: Map<string, ParsedComponent>, buildContext: BuildContext): EntityBundle | null {
  const buff = components.get("ProjectM.Buff");
  const docCategories = getDocCategories(doc);
  const isBuff = doc.prefabName.startsWith("Buff_") || docCategories.includes("Buff") || Boolean(buff);
  if (!isBuff) {
    return null;
  }

  const buffCategory = components.get("ProjectM.BuffCategory");
  const buffType = stripQualifiedPrefix(getFirstField(buff, ["BuffType"]));
  const effectType = stripQualifiedPrefix(getFirstField(buff, ["BuffEffectType"]));
  const categoryGroups = stripQualifiedPrefix(getFirstField(buffCategory, ["Groups"]));
  const uniqueBuffCategories = stripQualifiedPrefix(findFieldAcrossComponents(components, "UniqueBuffCategories"));
  const displayMapEntry = buildContext.buffDisplayByPrefab.get(doc.prefabName);
  const displayEntry = displayMapEntry && (doc.guid === null || displayMapEntry.guid === doc.guid) ? displayMapEntry : undefined;
  const fallbackTitle = formatPrefabDisplayName(doc.prefabName, ["Buff", "AB"]);
  const { title, subtitle } = resolveTitle(buildContext, doc, fallbackTitle);
  const summary = uniqueStrings([
    effectType ? `${effectType} buff` : buffType ? `${buffType} buff` : "Buff prefab",
    categoryGroups,
    uniqueBuffCategories
  ]).join(" • ");

  return createGenericEntity("buffs", doc, {
    title,
    subtitle,
    categories: uniqueStrings([...docCategories, effectType, buffType]),
    summary,
    tier: extractTier(doc.prefabName),
    icon: displayEntry?.iconAssetPath,
    tags: [categoryGroups, uniqueBuffCategories],
    detail: {
      buffType,
      effectType,
      categoryGroups,
      uniqueBuffCategories,
      localizedDisplayNameEn: displayEntry?.displayNameEn,
      localizedDisplayGuid: displayEntry?.displayLocalizationGuid,
      localizedSummaryEn: displayEntry?.summaryEn,
      iconAssetName: displayEntry?.iconAssetName,
      iconAssetPath: displayEntry?.iconAssetPath
    }
  });
}

function buildItemSetEntity(doc: PrefabDocument, components: Map<string, ParsedComponent>, buildContext: BuildContext): EntityBundle | null {
  const docCategories = getDocCategories(doc);
  const isItemSet = doc.prefabName.startsWith("ItemSet_") || docCategories.includes("Set") || components.has("ProjectM.ItemSet");
  if (!isItemSet) {
    return null;
  }

  const fallbackTitle = formatPrefabDisplayName(doc.prefabName, ["ItemSet"]);
  const { title, subtitle } = resolveTitle(buildContext, doc, fallbackTitle);
  const displayMapEntry = buildContext.itemsetDisplayByPrefab.get(doc.prefabName);
  const displayEntry = displayMapEntry && (doc.guid === null || displayMapEntry.guid === doc.guid) ? displayMapEntry : undefined;
  const setKind = title.includes("Weapon")
    ? "Weapon Set"
    : title.includes("Armour") || title.includes("Armor")
      ? "Armor Set"
      : title.includes("Book")
        ? "Book Set"
        : undefined;
  const summary = uniqueStrings([setKind ?? "Item set definition", extractTier(doc.prefabName), docCategories[0]]).join(" • ");

  return createGenericEntity("itemsets", doc, {
    title,
    subtitle,
    categories: uniqueStrings([...docCategories, "Set"]),
    summary,
    tier: extractTier(doc.prefabName),
    icon: displayEntry?.iconAssetPath,
    tags: [setKind],
    detail: {
      setKind,
      localizedDisplayNameEn: displayEntry?.displayNameEn,
      localizedDisplayGuid: displayEntry?.displayLocalizationGuid,
      localizedSummaryEn: displayEntry?.summaryEn,
      iconAssetName: displayEntry?.iconAssetName,
      iconAssetPath: displayEntry?.iconAssetPath
    }
  });
}

function enrichItemsWithRecipes(items: BuiltItemEntity[], recipes: BuiltRecipeEntity[]): BuiltItemEntity[] {
  const recipeLookup = new Map(recipes.map((recipe) => [recipe.prefabName, recipe]));
  const recipesByOutput = new Map<string, RelatedEntityRef[]>();

  for (const recipe of recipes) {
    for (const prefab of recipe.outputPrefabs) {
      const entries = recipesByOutput.get(prefab) ?? [];
      entries.push({
        title: recipe.index.title,
        prefab: recipe.prefabName,
        guid: typeof recipe.detail.guid === "number" ? recipe.detail.guid : null,
        slug: recipe.index.slug,
        path: recipe.index.path
      });
      recipesByOutput.set(prefab, entries);
    }
  }

  return items.map((item) => {
    const repairRecipes = item.recipePrefabs
      .map((prefab) => recipeLookup.get(prefab))
      .filter((recipe): recipe is BuiltRecipeEntity => Boolean(recipe))
      .map((recipe) => ({
        title: recipe.index.title,
        prefab: recipe.prefabName,
        guid: typeof recipe.detail.guid === "number" ? recipe.detail.guid : null,
        slug: recipe.index.slug,
        path: recipe.index.path
      }));
    const relatedRecipes = recipesByOutput.get(item.prefabName) ?? [];

    return {
      ...item,
      detail: {
        ...item.detail,
        repairRecipes,
        relatedRecipes
      }
    };
  });
}

function enrichAbilitiesWithSpellJewels(abilities: EntityBundle[], items: BuiltItemEntity[]): EntityBundle[] {
  const jewelsByAbilityPrefab = new Map<string, RelatedEntityRef[]>();

  for (const item of items) {
    if (!item.overrideAbilityPrefab) {
      continue;
    }

    const entries = jewelsByAbilityPrefab.get(item.overrideAbilityPrefab) ?? [];
    entries.push({
      title: item.index.title,
      prefab: item.prefabName,
      guid: typeof item.detail.guid === "number" ? item.detail.guid : null,
      slug: item.index.slug,
      path: item.index.path
    });
    jewelsByAbilityPrefab.set(item.overrideAbilityPrefab, entries);
  }

  return abilities.map((ability) => {
    const abilityPrefab = typeof ability.detail.prefab === "string" ? ability.detail.prefab : undefined;
    const spellJewels = abilityPrefab ? dedupeRelatedRefs(jewelsByAbilityPrefab.get(abilityPrefab) ?? []) : [];

    return {
      ...ability,
      detail: {
        ...ability.detail,
        spellJewels
      }
    };
  });
}

async function loadRealEntities(repoRoot: string): Promise<Record<Section, EntityBundle[]>> {
  const buildContext = await loadBuildContext(repoRoot);
  const docs = await loadPrefabDocuments(repoRoot);
  const componentCache = new Map<string, Map<string, ParsedComponent>>();
  const getComponents = (doc: PrefabDocument): Map<string, ParsedComponent> => {
    const cached = componentCache.get(doc.filePath);
    if (cached) {
      return cached;
    }

    const parsed = parseComponents(doc.body);
    componentCache.set(doc.filePath, parsed);
    return parsed;
  };

  const itemDocs = docs.filter(
    (doc) => doc.prefabName.startsWith("Item_") || doc.prefabName.startsWith("FakeItem_") || doc.prefabName === "LegendaryItem_Template"
  );
  const builtItems = itemDocs.map((doc) => buildItemEntity(doc, getComponents(doc), buildContext));
  const itemLookup = new Map(builtItems.map((item) => [item.prefabName, { index: item.index, detail: item.detail } satisfies EntityBundle]));
  const recipeDocs = docs.filter((doc) => doc.prefabName.startsWith("Recipe_"));
  const builtRecipes = recipeDocs.map((doc) => buildRecipeEntity(doc, getComponents(doc), itemLookup, buildContext));
  const enrichedItems = enrichItemsWithRecipes(builtItems, builtRecipes);

  const entities: Record<Section, EntityBundle[]> = {
    items: enrichedItems.map(({ index, detail }) => ({ index, detail })),
    recipes: builtRecipes.map(({ index, detail }) => ({ index, detail })),
    npcs: [],
    abilities: [],
    workstations: [],
    blueprints: [],
    quests: [],
    buffs: [],
    itemsets: []
  };

  for (const doc of docs) {
    if (doc.prefabName.startsWith("Item_") || doc.prefabName.startsWith("Recipe_")) {
      continue;
    }

    const docCategories = getDocCategories(doc);
    const maybeStructuredDoc =
      doc.prefabName.startsWith("AB_") ||
      doc.prefabName.startsWith("Ability_") ||
      doc.prefabName.startsWith("Buff_") ||
      doc.prefabName.startsWith("Journal_") ||
      doc.prefabName.startsWith("CHAR_") ||
      doc.prefabName.startsWith("ItemSet_") ||
      docCategories.includes("Ability") ||
      docCategories.includes("Buff") ||
      docCategories.includes("Journal") ||
      docCategories.includes("Set") ||
      docCategories.some((category) => npcCategories.has(category)) ||
      doc.body.includes("ProjectM.BlueprintData") ||
      doc.body.includes("ProjectM.CastleWorkstation") ||
      doc.body.includes("ProjectM.Refinementstation") ||
      doc.body.includes("ProjectM.Buff]");

    if (!maybeStructuredDoc) {
      continue;
    }

    const components = getComponents(doc);

    const npc = buildNpcEntity(doc, components, buildContext);
    if (npc) entities.npcs.push(npc);

    const ability = buildAbilityEntity(doc, components, buildContext);
    if (ability) entities.abilities.push(ability);

    const workstation = buildWorkstationEntity(doc, components, buildContext);
    if (workstation) entities.workstations.push(workstation);

    const blueprint = buildBlueprintEntity(doc, components, buildContext);
    if (blueprint) entities.blueprints.push(blueprint);

    const quest = buildQuestEntity(doc, components, buildContext);
    if (quest) entities.quests.push(quest);

    const buff = buildBuffEntity(doc, components, buildContext);
    if (buff) entities.buffs.push(buff);

    const itemSet = buildItemSetEntity(doc, components, buildContext);
    if (itemSet) entities.itemsets.push(itemSet);
  }

  entities.abilities = enrichAbilitiesWithSpellJewels(entities.abilities, enrichedItems);

  return entities;
}

async function writeSection(repoRoot: string, section: Section, entities: EntityBundle[]) {
  const outDir = path.join(repoRoot, "public", "data", "db", section);
  const bySlugDir = path.join(outDir, "by-slug");
  await mkdir(bySlugDir, { recursive: true });

  const index = entities.map((entry) => entry.index).sort((a, b) => a.title.localeCompare(b.title));
  await writeFile(path.join(outDir, "index.json"), JSON.stringify(index, null, 2));

  const existing = await readdir(bySlugDir);
  await Promise.all(existing.map((file) => rm(path.join(bySlugDir, file), { force: true })));

  for (const entity of entities) {
    await writeFile(path.join(bySlugDir, `${entity.index.slug}.json`), JSON.stringify(entity.detail, null, 2));
  }
}

async function main() {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const realEntities = await loadRealEntities(repoRoot);

  for (const section of sections) {
    const entities = realEntities[section];
    if (entities.length > 0) {
      await writeSection(repoRoot, section, entities);
      continue;
    }

    const rawEntities = await loadRawSection(repoRoot, section);
    await writeSection(repoRoot, section, rawEntities.map((entity) => normalizeEntity(section, entity)));
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
