import { DbSection } from "../../config/sections";

export type SchemaDbSection = "items" | "recipes" | "npcs" | "abilities" | "workstations" | "blueprints" | "quests" | "buffs" | "itemsets";

export interface DbFieldSpec {
  key: string;
  label: string;
  format?: "text" | "number" | "boolean" | "duration" | "code";
}

export interface DbRelationSpec {
  key: string;
  title: string;
  emptyLabel: string;
}

export interface DbSchemaConfig {
  eyebrow: string;
  factFields: DbFieldSpec[];
  detailFields: DbFieldSpec[];
  technicalFields: DbFieldSpec[];
  relationSections: DbRelationSpec[];
}

export const dbSchemas: Record<SchemaDbSection, DbSchemaConfig> = {
  items: {
    eyebrow: "Item Database",
    factFields: [
      { key: "itemGroup", label: "Group" },
      { key: "itemFamily", label: "Family" },
      { key: "itemType", label: "Type" },
      { key: "equipmentType", label: "Equipment" },
      { key: "weaponType", label: "Weapon" },
      { key: "level", label: "Level", format: "number" },
      { key: "maxAmount", label: "Max Stack", format: "number" },
      { key: "durability", label: "Durability", format: "number" }
    ],
    detailFields: [
      { key: "consumeAbility", label: "Consume Effect" },
      { key: "repairRecipePrefab", label: "Repair Recipe", format: "code" },
      { key: "salvageRecipePrefab", label: "Salvage Recipe", format: "code" },
      { key: "localizedDisplayNameEn", label: "Localized Display Name" },
      { key: "localizedDescriptionTextEn", label: "Localized Description (English)" },
      { key: "localizedDescriptionGuid", label: "Localized Description GUID", format: "code" },
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
    ]
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
      { key: "alwaysUnlocked", label: "Always Unlocked", format: "boolean" },
      { key: "hideInStation", label: "Hidden In Station", format: "boolean" },
      { key: "ignoreServerSettings", label: "Ignores Server Settings", format: "boolean" }
    ],
    detailFields: [
      { key: "crafts", label: "Crafts" },
      { key: "requires", label: "Requires" },
      { key: "repairsWith", label: "Repairs With" },
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
    ]
  },
  npcs: {
    eyebrow: "NPC Archive",
    factFields: [
      { key: "essenceGain", label: "Essence", format: "number" },
      { key: "walkSpeed", label: "Walk Speed", format: "number" },
      { key: "runSpeed", label: "Run Speed", format: "number" },
      { key: "aggroRadius", label: "Aggro Radius", format: "number" },
      { key: "leashDistance", label: "Leash Distance", format: "number" }
    ],
    detailFields: [
      { key: "essenceItemPrefab", label: "Essence Item", format: "code" },
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
    relationSections: [
      { key: "servantPrefabs", title: "Servant Forms", emptyLabel: "No servant variant linked." },
      { key: "essenceItemPrefabs", title: "Essence Drops", emptyLabel: "No essence drop linked." }
    ]
  },
  abilities: {
    eyebrow: "Ability Archive",
    factFields: [
      { key: "school", label: "School" },
      { key: "recordKind", label: "Record Type" },
      { key: "catalogTier", label: "Catalog Tier" },
      { key: "behaviorType", label: "Behavior" },
      { key: "inputType", label: "Input" },
      { key: "castTime", label: "Cast Time", format: "duration" },
      { key: "cooldown", label: "Cooldown", format: "duration" },
      { key: "priority", label: "Priority", format: "number" }
    ],
    detailFields: [
      { key: "target", label: "Targeting" },
      { key: "catalogStatus", label: "Browse Status" },
      { key: "tooltipTextEn", label: "Tooltip (English)" },
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
    ]
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
    relationSections: [{ key: "inventoryPrefabs", title: "Inventory Prefabs", emptyLabel: "No linked inventory prefab." }]
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
    relationSections: []
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
    ]
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
    relationSections: []
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
    relationSections: []
  }
};

export function hasDbSchema(section: DbSection): section is SchemaDbSection {
  return ["items", "recipes", "npcs", "abilities", "workstations", "blueprints", "quests", "buffs", "itemsets"].includes(section);
}
