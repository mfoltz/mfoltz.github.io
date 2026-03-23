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
    eyebrow: "Item Archive",
    factFields: [
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
      { key: "salvageRecipePrefab", label: "Salvage Recipe", format: "code" }
    ],
    technicalFields: [
      { key: "prefab", label: "Prefab", format: "code" },
      { key: "guid", label: "GUID", format: "number" },
      { key: "sourcePath", label: "Source Markdown", format: "code" }
    ],
    relationSections: [
      { key: "relatedRecipes", title: "Crafting Recipes", emptyLabel: "No crafting recipes linked." },
      { key: "repairRecipes", title: "Repair And Salvage", emptyLabel: "No repair or salvage recipes linked." }
    ]
  },
  recipes: {
    eyebrow: "Recipe Archive",
    factFields: [
      { key: "craftDuration", label: "Craft Time", format: "duration" },
      { key: "alwaysUnlocked", label: "Always Unlocked", format: "boolean" },
      { key: "hideInStation", label: "Hidden In Station", format: "boolean" },
      { key: "ignoreServerSettings", label: "Ignores Server Settings", format: "boolean" }
    ],
    detailFields: [
      { key: "crafts", label: "Crafts" },
      { key: "requires", label: "Requires" },
      { key: "repairsWith", label: "Repairs With" }
    ],
    technicalFields: [
      { key: "prefab", label: "Prefab", format: "code" },
      { key: "guid", label: "GUID", format: "number" },
      { key: "sourcePath", label: "Source Markdown", format: "code" }
    ],
    relationSections: [
      { key: "outputs", title: "Outputs", emptyLabel: "No outputs recorded." },
      { key: "requirements", title: "Requirements", emptyLabel: "No requirements recorded." },
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
    detailFields: [{ key: "essenceItemPrefab", label: "Essence Item", format: "code" }],
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
      { key: "behaviorType", label: "Behavior" },
      { key: "inputType", label: "Input" },
      { key: "castTime", label: "Cast Time", format: "duration" },
      { key: "cooldown", label: "Cooldown", format: "duration" },
      { key: "priority", label: "Priority", format: "number" }
    ],
    detailFields: [{ key: "target", label: "Targeting" }],
    technicalFields: [
      { key: "prefab", label: "Prefab", format: "code" },
      { key: "guid", label: "GUID", format: "number" },
      { key: "sourcePath", label: "Source Markdown", format: "code" }
    ],
    relationSections: [{ key: "spawnedPrefabs", title: "Spawned Prefabs", emptyLabel: "No spawned prefabs linked." }]
  },
  workstations: {
    eyebrow: "Workstation Archive",
    factFields: [
      { key: "stationKind", label: "Kind" },
      { key: "matchingFloorType", label: "Matching Floor" },
      { key: "bonusServantType", label: "Servant Bonus" },
      { key: "status", label: "Status" }
    ],
    detailFields: [{ key: "respawnPointType", label: "Respawn Type" }],
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
      { key: "editSequence", label: "Edit Sequence", format: "code" }
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
      { key: "dependencyPrefab", label: "Dependency", format: "code" }
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
    detailFields: [{ key: "uniqueBuffCategories", label: "Unique Categories" }],
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
    detailFields: [],
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
