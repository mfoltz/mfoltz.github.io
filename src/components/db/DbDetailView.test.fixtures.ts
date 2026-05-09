import { DbEntityDetail, DbRelatedEntityRef } from "../../types/db";

const boneguardBoots: DbRelatedEntityRef = {
  title: "Boneguard Boots",
  prefab: "Item_Boots_T01_Bone",
  guid: 172364,
  amount: 1,
  path: "/db/items/item-boots-t01-bone",
  icon: "/icons/items/Item_Boots_T01_Bone.png"
};

const bone: DbRelatedEntityRef = {
  title: "Bone",
  prefab: "Item_Ingredient_Bone",
  guid: 862477,
  amount: 16,
  path: "/db/items/item-ingredient-bone",
  icon: "/icons/items/Item_Ingredient_Bone.png"
};

const ruggedHide: DbRelatedEntityRef = {
  title: "Rugged Hide",
  prefab: "Item_Ingredient_RuggedHide",
  guid: 168531,
  amount: 32,
  path: "/db/items/item-ingredient-rugged-hide",
  icon: "/icons/items/Item_Ingredient_RuggedHide.png"
};

const boneguardBootsRecipe: DbRelatedEntityRef = {
  title: "Boneguard Boots Recipe",
  prefab: "Recipe_Armor_Boots_T01_Bone",
  guid: 110024,
  path: "/db/recipes/recipe-armor-boots-t01-bone"
};

const jewelcraftingOutput: DbRelatedEntityRef = {
  title: "Merciless Copper Ring",
  prefab: "Item_Jewel_Ring_T02_Copper",
  guid: 278312,
  path: "/db/items/item-jewel-ring-t02-copper"
};

const jewelcraftingRecipe: DbRelatedEntityRef = {
  title: "Merciless Copper Ring Recipe",
  prefab: "Recipe_Jewel_Ring_T02_Copper",
  guid: 278313,
  path: "/db/recipes/recipe-jewel-ring-t02-copper"
};

const sawmillInventory: DbRelatedEntityRef = {
  title: "Sawmill Inventory",
  prefab: "Inventory_Sawmill",
  guid: 99120,
  path: "/prefabs/inventory-sawmill"
};

export const recipeDetailFixture: DbEntityDetail = {
  slug: "recipe-armor-boots-t01-bone",
  title: "Boneguard Boots Recipe",
  subtitle: "Recipe_Armor_Boots_T01_Bone",
  description: "Boneguard Boots recipe generated summary.",
  categories: ["T01", "Armor", "Footgear", "Bloodbound"],
  recipeGroup: "Armor",
  recipeFamily: "Footgear",
  craftDuration: 4,
  outputCount: 1,
  requirementCount: 2,
  repairCostCount: 1,
  crafts: "1x Boneguard Boots",
  requires: "16x Bone, 32x Rugged Hide",
  repairsWith: "16x Bone",
  outputs: [boneguardBoots],
  requirements: [bone, ruggedHide],
  repairCosts: [bone]
};

export const itemDetailFixture: DbEntityDetail = {
  slug: "item-boots-t01-bone",
  title: "Boneguard Boots",
  subtitle: "Item_Boots_T01_Bone",
  summary: "None item, max stack 1.",
  categories: ["Armor", "Footgear", "Equippable"],
  itemGroup: "Armor",
  itemFamily: "Footgear",
  itemType: "Equippable",
  equipmentType: "Footgear",
  maxAmount: 1,
  durability: 426,
  localizedDescriptionTextEn: "Armour made from collecting the bones of the dead.",
  relatedRecipes: [boneguardBootsRecipe],
  repairRecipes: [boneguardBootsRecipe],
  icon: "/icons/items/Item_Boots_T01_Bone.png"
};

export const npcDetailFixture: DbEntityDetail = {
  slug: "char-bandit-bomber",
  title: "Bomber",
  subtitle: "CHAR_Bandit_Bomber",
  description: "Bomber is an NPC unit with preserved aggro, movement, and drop context for encounter reference.",
  categories: ["CHAR", "Servant Convertible", "Human", "Warrior Blood"],
  prefab: "CHAR_Bandit_Bomber",
  npcKind: "Blood Carrier",
  npcLevel: 32,
  npcBloodType: "Warrior",
  npcFaction: "Bandits",
  npcUnitCategory: "Human",
  essenceGain: 15,
  runSpeed: 3.5,
  aggroRadius: 15,
  leashDistance: 45,
  servantPrefabs: [
    {
      title: "CHAR Bandit Bomber Servant",
      prefab: "CHAR_Bandit_Bomber_Servant",
      guid: -450600397,
      path: "/prefabs/char-bandit-bomber-servant"
    }
  ],
  essenceItemPrefabs: [
    {
      title: "Item Blood Essence T01",
      prefab: "Item_BloodEssence_T01",
      guid: 862477668,
      path: "/prefabs/item-blood-essence-t01"
    }
  ]
};

export const workstationDetailFixture: DbEntityDetail = {
  slug: "tm-crafting-station-jewelcrafting-table",
  title: "Jewelcrafting Table",
  subtitle: "TM_CraftingStation_JewelcraftingTable",
  description: "Station workstation record with player-facing naming and technical prefab context.",
  categories: ["TM", "Castle Workstation", "Station"],
  workstationRole: "Station",
  stationKind: "Castle Workstation",
  matchingFloorType: "Temple",
  bonusServantType: "None",
  workstationRecipeCount: 126,
  workstationOutputCount: 126,
  portraitAssetPath: "/icons/buildables/Stunlock_Icon_Structure_JewelcraftingTable.png",
  workstationOutputs: [jewelcraftingOutput],
  workstationRecipes: [jewelcraftingRecipe]
};

export const workstationWithInventoryDetailFixture: DbEntityDetail = {
  ...workstationDetailFixture,
  slug: "tm-refinement-station-sawmill-large",
  title: "Sawmill",
  subtitle: "TM_RefinementStation_Sawmill_Large",
  inventoryPrefabs: [sawmillInventory]
};
