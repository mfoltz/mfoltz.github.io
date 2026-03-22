export const markdownSections = ["prefabs", "systems", "queries"] as const;
export type MarkdownSection = (typeof markdownSections)[number];

export const markdownSectionLabels: Record<MarkdownSection, string> = {
  prefabs: "Prefabs",
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

export function isMarkdownSection(value: string): value is MarkdownSection {
  return (markdownSections as readonly string[]).includes(value);
}

export function isDbSection(value: string): value is DbSection {
  return (dbSections as readonly string[]).includes(value);
}

export function getMarkdownSectionLabel(section: MarkdownSection): string {
  return markdownSectionLabels[section];
}

export function getDbSectionLabel(section: DbSection): string {
  return dbSectionLabels[section];
}
