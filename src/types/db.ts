import { TextVariableResolutionMap } from "../lib/textVariables";

export interface DbIndexEntry {
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
  workstationRecipeCount?: number;
  workstationOutputCount?: number;
  npcLevel?: number;
  npcKind?: string;
  npcBloodType?: string;
  npcFaction?: string;
  npcUnitCategory?: string;
  isVBlood?: boolean;
  isServant?: boolean;
  excerpt: string;
  path: string;
  tags?: string[];
  textVariableValues?: TextVariableResolutionMap;
}

export interface DbRelatedEntityRef {
  title: string;
  prefab: string;
  guid: number | null;
  amount?: number;
  slug?: string;
  path?: string;
  icon?: string;
}

export interface DbRuntimeDamageEvidence {
  sourceKind: "server-damage-evidence";
  sourceRef: string;
  sourcePrefab: string;
  sourceGuid: number | null;
  graphDepth: number;
  interpretationStatus?: string;
  RawDamagePercent?: number;
  RawDamageValue?: number;
  MainFactor?: number;
  ResourceModifier?: number;
  StaggerFactor?: number;
  DamageModifierPerHit?: number;
  MultiplyMainFactorWithStacks?: boolean;
  DealDamageFlags?: number;
  MainType?: string;
}

export interface DbEntityDetail {
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  summary?: string;
  fields?: Record<string, unknown>;
  sections?: { title: string; rows: Record<string, unknown> }[];
  prefab?: string;
  guid?: number | null;
  sourcePath?: string;
  prefabPath?: string;
  categories?: string[];
  tier?: string;
  icon?: string;
  school?: string;
  recordKind?: string;
  catalogStatus?: string;
  castTime?: number;
  cooldown?: number;
  inputType?: string;
  behaviorType?: string;
  tooltipEntryId?: string;
  tooltipLocalizationGuid?: string;
  tooltipTextEn?: string;
  tooltipSourceKind?: string;
  tooltipSourceRef?: string;
  localizedDisplayNameEn?: string;
  localizedDisplayGuid?: string;
  localizedSummaryEn?: string;
  iconAssetName?: string;
  iconAssetPath?: string;
  iconSourceKind?: string;
  iconSourceRef?: string;
  descriptionSourceKind?: string;
  descriptionSourceRef?: string;
  normalizedSourceKind?: string;
  normalizedSourceRef?: string;
  tags?: string[];
  textVariableValues?: TextVariableResolutionMap;
  runtimeDamageEvidence?: DbRuntimeDamageEvidence[];
  [key: string]: unknown;
}

export interface DbItemDetail extends DbEntityDetail {
  itemGroup?: string;
  itemFamily?: string;
  itemType?: string;
  itemCategory?: string[];
  equipmentType?: string;
  weaponType?: string;
  maxAmount?: number;
  level?: number;
  durability?: number;
  repairRecipePrefab?: string;
  salvageRecipePrefab?: string;
  consumeAbility?: string;
  localizedDescriptionGuid?: string;
  localizedDescriptionTextEn?: string;
  repairRecipes?: DbRelatedEntityRef[];
  relatedRecipes?: DbRelatedEntityRef[];
}

export interface DbRecipeDetail extends DbEntityDetail {
  recipeGroup?: string;
  recipeFamily?: string;
  craftDuration?: number;
  outputCount?: number;
  requirementCount?: number;
  repairCostCount?: number;
  alwaysUnlocked?: boolean;
  hideInStation?: boolean;
  ignoreServerSettings?: boolean;
  crafts?: string;
  requires?: string;
  repairsWith?: string;
  normalizedOutputs?: string;
  normalizedRequirements?: string;
  normalizedRepairCosts?: string;
  normalizedOutputCount?: number;
  normalizedRequirementCount?: number;
  normalizedRepairCostCount?: number;
  outputs?: DbRelatedEntityRef[];
  requirements?: DbRelatedEntityRef[];
  repairCosts?: DbRelatedEntityRef[];
}

export interface DbWorkstationDetail extends DbEntityDetail {
  workstationRole?: string;
  stationKind?: string;
  matchingFloorType?: string;
  bonusServantType?: string;
  status?: string;
  merchantRegion?: string;
  merchantInventory?: string;
  respawnPointType?: string;
  workstationRecipeCount?: number;
  workstationOutputCount?: number;
  workstationRecipeSourceKind?: string;
  workstationRecipeSourceRef?: string;
  workstationRecipes?: DbRelatedEntityRef[];
  workstationOutputs?: DbRelatedEntityRef[];
  inventoryPrefabs?: DbRelatedEntityRef[];
}
