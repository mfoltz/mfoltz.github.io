export interface DbIndexEntry {
  slug: string;
  title: string;
  categories: string[];
  icon?: string;
  tier?: string;
  excerpt: string;
  path: string;
  tags?: string[];
}

export interface DbRelatedEntityRef {
  title: string;
  prefab: string;
  guid: number | null;
  amount?: number;
  slug?: string;
  path?: string;
}

export interface DbEntityDetail {
  slug: string;
  title: string;
  summary?: string;
  fields?: Record<string, unknown>;
  sections?: { title: string; rows: Record<string, unknown> }[];
  prefab?: string;
  guid?: number | null;
  sourcePath?: string;
  prefabPath?: string;
  categories?: string[];
  tier?: string;
  tags?: string[];
  [key: string]: unknown;
}

export interface DbItemDetail extends DbEntityDetail {
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
  repairRecipes?: DbRelatedEntityRef[];
  relatedRecipes?: DbRelatedEntityRef[];
}

export interface DbRecipeDetail extends DbEntityDetail {
  craftDuration?: number;
  alwaysUnlocked?: boolean;
  hideInStation?: boolean;
  ignoreServerSettings?: boolean;
  crafts?: string;
  requires?: string;
  repairsWith?: string;
  outputs?: DbRelatedEntityRef[];
  requirements?: DbRelatedEntityRef[];
  repairCosts?: DbRelatedEntityRef[];
}
