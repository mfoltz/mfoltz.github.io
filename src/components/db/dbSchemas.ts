import { DbSection } from "../../config/sections";

export type SchemaDbSection = "items" | "recipes" | "npcs" | "abilities" | "workstations" | "blueprints" | "quests" | "buffs" | "itemsets";

export interface DbFieldSpec {
  key: string;
  label: string;
  format?: "text" | "number" | "boolean" | "duration" | "code";
  omitIfFalse?: boolean;
  omitValues?: Array<string | number>;
}

export interface DbRelationSpec {
  key: string;
  title: string;
  emptyLabel: string;
}

export interface DbSchemaConfig {
  eyebrow: string;
  factFields: DbFieldSpec[];
  detailFields?: DbFieldSpec[];
  playerFields?: DbFieldSpec[];
  usageFields?: DbFieldSpec[];
  provenanceFields?: DbFieldSpec[];
  technicalFields: DbFieldSpec[];
  relationSections: DbRelationSpec[];
  playerSectionTitle?: string;
  detailSectionTitle?: string;
  usageSectionTitle?: string;
  provenanceSectionTitle?: string;
}

export const dbSchemas: Record<SchemaDbSection, DbSchemaConfig> = {
  items: {
    eyebrow: "Item Database",
    factFields: [
      { key: "recordKind", label: "Record Type" },
      { key: "itemGroup", label: "Group" },
      { key: "itemFamily", label: "Family" },
      { key: "itemType", label: "Type" },
      { key: "equipmentType", label: "Equipment" },
      { key: "weaponType", label: "Weapon" },
      { key: "level", label: "Level", format: "number" },
      { key: "maxAmount", label: "Max Stack", format: "number" },
      { key: "durability", label: "Durability", format: "number" }
    ],
    playerFields: [{ key: "localizedDescriptionTextEn", label: "Description" }],
    usageFields: [{ key: "consumeAbility", label: "Use Effect" }],
    provenanceFields: [
      { key: "localizedDisplayNameEn", label: "Localized Display Name" },
      { key: "localizedDescriptionGuid", label: "Localized Description GUID", format: "code" },
      { key: "repairRecipePrefab", label: "Repair Recipe Prefab", format: "code" },
      { key: "salvageRecipePrefab", label: "Salvage Recipe Prefab", format: "code" },
      { key: "iconAssetPath", label: "Icon Asset Path", format: "code" },
      { key: "iconAssetName", label: "Icon Asset Name", format: "code" },
      { key: "iconSourceKind", label: "Icon Source" },
      { key: "iconSourceRef", label: "Icon Source Ref", format: "code" },
      { key: "descriptionSourceKind", label: "Description Source" },
      { key: "descriptionSourceRef", label: "Description Source Ref", format: "code" }
    ],
    technicalFields: [
      { key: "prefab", label: "Prefab", format: "code" },
      { key: "guid", label: "GUID", format: "number" },
      { key: "sourcePath", label: "Source Markdown", format: "code" }
    ],
    relationSections: [
      { key: "relatedRecipes", title: "Crafted From", emptyLabel: "No crafting recipe linked." },
      { key: "repairRecipes", title: "Repair And Salvage", emptyLabel: "No repair or salvage recipes linked." }
    ],
    playerSectionTitle: "Player Context",
    usageSectionTitle: "Usage & Links",
    provenanceSectionTitle: "Developer Source & Provenance"
  },
  recipes: {
    eyebrow: "Recipe Database",
    factFields: [
      { key: "recipeGroup", label: "Group" },
      { key: "recipeFamily", label: "Family" },
      { key: "craftDuration", label: "Craft Time", format: "duration" },
      { key: "outputCount", label: "Outputs", format: "number" },
      { key: "requirementCount", label: "Ingredients", format: "number" },
      { key: "repairCostCount", label: "Repair Costs", format: "number" },
      { key: "alwaysUnlocked", label: "Always Unlocked", format: "boolean", omitIfFalse: true },
      { key: "hideInStation", label: "Hidden In Station", format: "boolean", omitIfFalse: true },
      { key: "ignoreServerSettings", label: "Ignores Server Settings", format: "boolean", omitIfFalse: true }
    ],
    playerFields: [
      { key: "crafts", label: "Crafts" },
      { key: "requires", label: "Requires" },
      { key: "repairsWith", label: "Repairs With" }
    ],
    provenanceFields: [
      { key: "normalizedOutputs", label: "Normalized Outputs" },
      { key: "normalizedRequirements", label: "Normalized Requirements" },
      { key: "normalizedRepairCosts", label: "Normalized Repair Costs" },
      { key: "normalizedOutputCount", label: "Normalized Output Count", format: "number" },
      { key: "normalizedRequirementCount", label: "Normalized Requirement Count", format: "number" },
      { key: "normalizedRepairCostCount", label: "Normalized Repair Cost Count", format: "number" },
      { key: "normalizedSourceKind", label: "Normalized Source" },
      { key: "normalizedSourceRef", label: "Normalized Source Ref", format: "code" }
    ],
    technicalFields: [
      { key: "prefab", label: "Prefab", format: "code" },
      { key: "guid", label: "GUID", format: "number" },
      { key: "sourcePath", label: "Source Markdown", format: "code" }
    ],
    relationSections: [
      { key: "outputs", title: "Outputs", emptyLabel: "No outputs recorded." },
      { key: "requirements", title: "Ingredients", emptyLabel: "No requirements recorded." },
      { key: "repairCosts", title: "Repair Costs", emptyLabel: "No repair costs recorded." }
    ],
    playerSectionTitle: "Player Context",
    usageSectionTitle: "Usage & Links",
    provenanceSectionTitle: "Developer Source & Provenance"
  },
  npcs: {
    eyebrow: "NPC Archive",
    factFields: [
      { key: "essenceGain", label: "Essence", format: "number" },
      { key: "runSpeed", label: "Run Speed", format: "number" },
      { key: "aggroRadius", label: "Aggro Radius", format: "number" },
      { key: "leashDistance", label: "Leash Distance", format: "number" }
    ],
    provenanceFields: [
      { key: "essenceItemPrefab", label: "Essence Item Prefab", format: "code" },
      { key: "localizedDisplayGuid", label: "Localized Display GUID", format: "code" },
      { key: "iconAssetPath", label: "Icon Asset Path", format: "code" }
    ],
    technicalFields: [
      { key: "prefab", label: "Prefab", format: "code" },
      { key: "guid", label: "GUID", format: "number" },
      { key: "sourcePath", label: "Source Markdown", format: "code" }
    ],
    relationSections: [
      { key: "servantPrefabs", title: "Servant Forms", emptyLabel: "No servant variant linked." },
      { key: "essenceItemPrefabs", title: "Essence Drops", emptyLabel: "No essence drop linked." }
    ],
    playerSectionTitle: "Encounter Context",
    detailSectionTitle: "Archive Details"
  },
  abilities: {
    eyebrow: "Ability Archive",
    factFields: [
      { key: "recordKind", label: "Record Type" },
      { key: "school", label: "School" },
      { key: "catalogTier", label: "Catalog Tier" },
      { key: "behaviorType", label: "Behavior", omitValues: ["None"] },
      { key: "inputType", label: "Input", omitValues: ["Default"] },
      { key: "castTime", label: "Cast Time", format: "duration" },
      { key: "cooldown", label: "Cooldown", format: "duration" },
      { key: "priority", label: "Priority", format: "number" }
    ],
    playerFields: [{ key: "tooltipTextEn", label: "Tooltip" }],
    usageFields: [{ key: "target", label: "Applies To", omitValues: ["Owner"] }],
    provenanceFields: [
      { key: "catalogStatus", label: "Browse Status" },
      { key: "tooltipLocalizationGuid", label: "Tooltip Localization GUID", format: "code" },
      { key: "tooltipEntryId", label: "Tooltip Entry ID", format: "code" },
      { key: "tooltipSourceKind", label: "Tooltip Source" },
      { key: "tooltipSourceRef", label: "Tooltip Source Ref", format: "code" }
    ],
    technicalFields: [
      { key: "prefab", label: "Prefab", format: "code" },
      { key: "guid", label: "GUID", format: "number" },
      { key: "sourcePath", label: "Source Markdown", format: "code" }
    ],
    relationSections: [
      { key: "spellJewels", title: "Spell Jewels", emptyLabel: "No spell jewels linked." },
      { key: "spawnedPrefabs", title: "Spawned Prefabs", emptyLabel: "No spawned prefabs linked." }
    ],
    playerSectionTitle: "Combat Context",
    usageSectionTitle: "Usage & Links",
    provenanceSectionTitle: "Developer Source & Provenance"
  },
  workstations: {
    eyebrow: "Workstation Database",
    factFields: [
      { key: "workstationRole", label: "Role" },
      { key: "stationKind", label: "Kind" },
      { key: "matchingFloorType", label: "Matching Floor" },
      { key: "bonusServantType", label: "Servant Bonus" },
      { key: "merchantRegion", label: "Region" },
      { key: "merchantInventory", label: "Inventory" },
      { key: "status", label: "Status" }
    ],
    detailFields: [
      { key: "respawnPointType", label: "Respawn Type" },
      { key: "localizedDisplayNameEn", label: "Localized Display Name" },
      { key: "localizedSummaryEn", label: "Localized Summary" },
      { key: "localizedDisplayGuid", label: "Localized Display GUID", format: "code" },
      { key: "iconAssetPath", label: "Icon Asset Path", format: "code" }
    ],
    technicalFields: [
      { key: "prefab", label: "Prefab", format: "code" },
      { key: "guid", label: "GUID", format: "number" },
      { key: "sourcePath", label: "Source Markdown", format: "code" }
    ],
    relationSections: [{ key: "inventoryPrefabs", title: "Inventory Prefabs", emptyLabel: "No linked inventory prefab." }],
    playerSectionTitle: "Station Context",
    detailSectionTitle: "Catalog Details"
  },
  blueprints: {
    eyebrow: "Blueprint Archive",
    factFields: [
      { key: "fullDismantleTime", label: "Dismantle Time", format: "duration" },
      { key: "isStartBlueprint", label: "Starter Build", format: "boolean" },
      { key: "isInventoryItemBuilding", label: "Inventory Build", format: "boolean" },
      { key: "exitBuildModeWhenBuilt", label: "Exit Build Mode", format: "boolean" }
    ],
    detailFields: [
      { key: "requiresLineOfSight", label: "Needs Line Of Sight", format: "boolean" },
      { key: "requiresSuccessfullPathfinding", label: "Needs Pathfinding", format: "boolean" },
      { key: "placeSequence", label: "Place Sequence", format: "code" },
      { key: "editSequence", label: "Edit Sequence", format: "code" },
      { key: "localizedDisplayNameEn", label: "Localized Display Name" },
      { key: "localizedSummaryEn", label: "Localized Summary" },
      { key: "localizedDisplayGuid", label: "Localized Display GUID", format: "code" }
    ],
    technicalFields: [
      { key: "prefab", label: "Prefab", format: "code" },
      { key: "guid", label: "GUID", format: "number" },
      { key: "sourcePath", label: "Source Markdown", format: "code" }
    ],
    relationSections: [],
    detailSectionTitle: "Build Rules"
  },
  quests: {
    eyebrow: "Quest Archive",
    factFields: [
      { key: "level", label: "Level", format: "number" },
      { key: "subTaskCount", label: "Subtasks", format: "number" }
    ],
    detailFields: [
      { key: "rewardPrefab", label: "Reward Prefab", format: "code" },
      { key: "dependencyPrefab", label: "Dependency", format: "code" },
      { key: "localizedDisplayNameEn", label: "Localized Display Name" },
      { key: "localizedSummaryEn", label: "Localized Summary" },
      { key: "localizedDisplayGuid", label: "Localized Display GUID", format: "code" }
    ],
    technicalFields: [
      { key: "prefab", label: "Prefab", format: "code" },
      { key: "guid", label: "GUID", format: "number" },
      { key: "sourcePath", label: "Source Markdown", format: "code" }
    ],
    relationSections: [
      { key: "rewardPrefabs", title: "Rewards", emptyLabel: "No reward prefab linked." },
      { key: "dependencyPrefabs", title: "Dependencies", emptyLabel: "No dependency prefab linked." }
    ],
    detailSectionTitle: "Quest Details"
  },
  buffs: {
    eyebrow: "Buff Archive",
    factFields: [
      { key: "buffType", label: "Buff Type" },
      { key: "effectType", label: "Effect Type" },
      { key: "categoryGroups", label: "Category Groups" }
    ],
    detailFields: [
      { key: "uniqueBuffCategories", label: "Unique Categories" },
      { key: "localizedDisplayNameEn", label: "Localized Display Name" },
      { key: "localizedSummaryEn", label: "Localized Summary" },
      { key: "localizedDisplayGuid", label: "Localized Display GUID", format: "code" },
      { key: "iconAssetPath", label: "Icon Asset Path", format: "code" }
    ],
    technicalFields: [
      { key: "prefab", label: "Prefab", format: "code" },
      { key: "guid", label: "GUID", format: "number" },
      { key: "sourcePath", label: "Source Markdown", format: "code" }
    ],
    relationSections: [],
    detailSectionTitle: "Buff Details"
  },
  itemsets: {
    eyebrow: "Item Set Archive",
    factFields: [{ key: "setKind", label: "Set Kind" }],
    detailFields: [
      { key: "localizedDisplayNameEn", label: "Localized Display Name" },
      { key: "localizedSummaryEn", label: "Localized Summary" },
      { key: "localizedDisplayGuid", label: "Localized Display GUID", format: "code" },
      { key: "iconAssetPath", label: "Icon Asset Path", format: "code" }
    ],
    technicalFields: [
      { key: "prefab", label: "Prefab", format: "code" },
      { key: "guid", label: "GUID", format: "number" },
      { key: "sourcePath", label: "Source Markdown", format: "code" }
    ],
    relationSections: [],
    detailSectionTitle: "Set Details"
  }
};

export function hasDbSchema(section: DbSection): section is SchemaDbSection {
  return ["items", "recipes", "npcs", "abilities", "workstations", "blueprints", "quests", "buffs", "itemsets"].includes(section);
}
