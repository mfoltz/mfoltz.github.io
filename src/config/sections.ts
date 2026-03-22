import { referenceSections, type ReferenceSection } from "../types/reference";

export { referenceSections };
export type { ReferenceSection };

export const referenceSectionLabels: Record<ReferenceSection, string> = {
  prefabs: "Prefabs",
  components: "Components",
  systems: "Systems",
  queries: "Queries"
};

export const dbSections = [
  "items",
  "recipes",
  "npcs",
  "abilities",
  "workstations",
  "blueprints",
  "quests",
  "buffs",
  "itemsets"
] as const;
export type DbSection = (typeof dbSections)[number];

export const dbSectionLabels: Record<DbSection, string> = {
  items: "Items",
  recipes: "Recipes",
  npcs: "NPCs",
  abilities: "Abilities",
  workstations: "Workstations",
  blueprints: "Blueprints",
  quests: "Quests",
  buffs: "Buffs",
  itemsets: "Item Sets"
};

export function isReferenceSection(value: string): value is ReferenceSection {
  return (referenceSections as readonly string[]).includes(value);
}

export function isDbSection(value: string): value is DbSection {
  return (dbSections as readonly string[]).includes(value);
}

export function getReferenceSectionLabel(section: ReferenceSection): string {
  return referenceSectionLabels[section];
}

export function getDbSectionLabel(section: DbSection): string {
  return dbSectionLabels[section];
}
