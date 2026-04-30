import type { DbIndexEntry } from "../types/db";
import type { DbSection } from "./sections";

export const ALL_DB_BROWSE_VALUE = "all";

export interface DbBrowseOption {
  value: string;
  slug: string;
  count: number;
}

export interface DbBrowseFacetConfig {
  key: string;
  param: string;
  label: string;
  allLabel: string;
  sortMode?: "count" | "alphabetical";
  limit?: number;
}

export interface DbBrowseViewConfig {
  param: string;
  defaultValue: string;
  options: Array<{ value: string; label: string }>;
}

export interface DbBrowseSubsectionMeta {
  key: string;
  label: string;
  buildSurfaceTitle: (value: string, viewValue: string) => string;
  buildSectionTitle: (value: string) => string;
  buildSectionSubtitle: (value: string, viewValue: string) => string;
  buildHelperText: (value: string, viewValue: string) => string;
}

export interface DbBrowseProfile {
  searchParam: string;
  searchPlaceholder: string;
  sectionSubtitle: string;
  surfaceEyebrow: string;
  surfaceTitle: string;
  helperText: string;
  facets: DbBrowseFacetConfig[];
  view?: DbBrowseViewConfig;
  subsection?: DbBrowseSubsectionMeta;
}

export function slugifyDbBrowseValue(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function buildDbBrowseOptions(
  entries: DbIndexEntry[],
  getValue: (entry: DbIndexEntry) => string | undefined,
  config: Pick<DbBrowseFacetConfig, "sortMode" | "limit"> = {}
): DbBrowseOption[] {
  const counts = new Map<string, number>();

  for (const entry of entries) {
    const value = getValue(entry);
    if (!value) {
      continue;
    }

    counts.set(value, (counts.get(value) ?? 0) + 1);
  }

  const sorted = [...counts.entries()].sort((left, right) =>
    config.sortMode === "alphabetical" ? left[0].localeCompare(right[0]) : right[1] - left[1] || left[0].localeCompare(right[0])
  );

  const limited = typeof config.limit === "number" ? sorted.slice(0, config.limit) : sorted;
  return limited.map(([value, count]) => ({
    value,
    slug: slugifyDbBrowseValue(value),
    count
  }));
}

export function resolveDbBrowseSelection(
  rawValue: string | null,
  options: DbBrowseOption[],
  defaultValue = ALL_DB_BROWSE_VALUE
): string {
  if (!rawValue) {
    return defaultValue;
  }

  return options.find((option) => option.slug === rawValue)?.value ?? defaultValue;
}

export function resolveDbBrowseView(rawValue: string | null, config: DbBrowseViewConfig | undefined): string {
  if (!config || !rawValue) {
    return config?.defaultValue ?? ALL_DB_BROWSE_VALUE;
  }

  return config.options.find((option) => option.value === rawValue)?.value ?? config.defaultValue;
}

export const dbBrowseProfiles: Record<DbSection, DbBrowseProfile> = {
  abilities: {
    searchParam: "q",
    searchPlaceholder: "Search by ability name, school, prefab, or behavior...",
    sectionSubtitle: "Curated spell catalog with optional prefab-level coverage.",
    surfaceEyebrow: "Database Catalog",
    surfaceTitle: "Spell Catalog",
    helperText: "Defaults to catalog spell entries. Switch to all records for full prefab coverage.",
    facets: [
      { key: "school", param: "school", label: "School", allLabel: "All Schools", sortMode: "alphabetical" },
      { key: "tier", param: "tier", label: "Tier", allLabel: "All Tiers", sortMode: "alphabetical" }
    ],
    view: {
      param: "view",
      defaultValue: "catalog",
      options: [
        { value: "catalog", label: "Catalog" },
        { value: "all", label: "All Records" }
      ]
    },
    subsection: {
      key: "school",
      label: "Spell school",
      buildSurfaceTitle: (value, viewValue) => (viewValue === "all" ? `${value} School Records` : `${value} School Catalog`),
      buildSectionTitle: (value) => `Database: ${value} Abilities`,
      buildSectionSubtitle: (value, viewValue) =>
        viewValue === "all"
          ? `${value} school browse with technical prefab coverage included for parity review.`
          : `${value} school browse with the catalog-first player lane kept in focus.`,
      buildHelperText: (value, viewValue) =>
        viewValue === "all"
          ? `Direct-linked to the ${value} school slice with technical prefab records included for parity checks.`
          : `Direct-linked to the ${value} school catalog so player-facing spell review stays focused and shareable.`
    }
  },
  items: {
    searchParam: "q",
    searchPlaceholder: "Search by item name, family, prefab, or category...",
    sectionSubtitle: "Dense item browse with group, family, and tier filters.",
    surfaceEyebrow: "Desktop Browse",
    surfaceTitle: "Item Records",
    helperText: "Filter items by group, family, and tier while keeping prefab identity visible.",
    facets: [
      { key: "group", param: "group", label: "Group", allLabel: "All Groups", limit: 10 },
      { key: "family", param: "family", label: "Family", allLabel: "All Families", sortMode: "alphabetical" },
      { key: "tier", param: "tier", label: "Tier", allLabel: "All Tiers", sortMode: "alphabetical" }
    ]
  },
  recipes: {
    searchParam: "q",
    searchPlaceholder: "Search by output item, prefab, ingredient, or category...",
    sectionSubtitle: "Output-first recipe browse with ingredient and timing context.",
    surfaceEyebrow: "Desktop Browse",
    surfaceTitle: "Recipe Records",
    helperText: "Browse recipes by output, family, and tier with counts and craft time on the row.",
    facets: [
      { key: "group", param: "group", label: "Group", allLabel: "All Groups", limit: 10 },
      { key: "family", param: "family", label: "Family", allLabel: "All Families", sortMode: "alphabetical" },
      { key: "tier", param: "tier", label: "Tier", allLabel: "All Tiers", sortMode: "alphabetical" }
    ]
  },
  workstations: {
    searchParam: "q",
    searchPlaceholder: "Search by station name, prefab, role, floor, or region...",
    sectionSubtitle: "Player-facing stations and traders with prefab traceability.",
    surfaceEyebrow: "Desktop Browse",
    surfaceTitle: "Workstation Records",
    helperText: "Browse normalized player-facing stations while keeping technical source identity intact.",
    facets: [
      { key: "role", param: "role", label: "Role", allLabel: "All Roles", sortMode: "alphabetical" },
      { key: "area", param: "area", label: "Area", allLabel: "All Areas", sortMode: "alphabetical" }
    ]
  },
  blueprints: {
    searchParam: "q",
    searchPlaceholder: "Search blueprints...",
    sectionSubtitle: "Structured generated records from the database index.",
    surfaceEyebrow: "Static Database View",
    surfaceTitle: "Database Records",
    helperText: "Use facet filters to narrow this generated archive.",
    facets: [{ key: "facet", param: "facet", label: "Facet", allLabel: "All Facets", limit: 10 }]
  },
  buffs: {
    searchParam: "q",
    searchPlaceholder: "Search buffs...",
    sectionSubtitle: "Structured generated records from the database index.",
    surfaceEyebrow: "Static Database View",
    surfaceTitle: "Database Records",
    helperText: "Use facet filters to narrow this generated archive.",
    facets: [{ key: "facet", param: "facet", label: "Facet", allLabel: "All Facets", limit: 10 }]
  },
  itemsets: {
    searchParam: "q",
    searchPlaceholder: "Search item sets...",
    sectionSubtitle: "Structured generated records from the database index.",
    surfaceEyebrow: "Static Database View",
    surfaceTitle: "Database Records",
    helperText: "Use facet filters to narrow this generated archive.",
    facets: [{ key: "facet", param: "facet", label: "Facet", allLabel: "All Facets", limit: 10 }]
  },
  npcs: {
    searchParam: "q",
    searchPlaceholder: "Search by NPC name, boss, blood type, faction, prefab, or category...",
    sectionSubtitle: "NPC browse with boss ladder and blood carrier slices.",
    surfaceEyebrow: "Desktop Browse",
    surfaceTitle: "NPC Records",
    helperText: "Browse all NPC records, focus the V Blood boss ladder, or filter blood carriers by blood type.",
    facets: [{ key: "blood", param: "blood", label: "Blood Type", allLabel: "All Blood Types", sortMode: "alphabetical" }],
    view: {
      param: "view",
      defaultValue: "all",
      options: [
        { value: "all", label: "All NPCs" },
        { value: "bosses", label: "Boss Ladder" },
        { value: "blood-carriers", label: "Blood Carriers" }
      ]
    }
  },
  quests: {
    searchParam: "q",
    searchPlaceholder: "Search quests...",
    sectionSubtitle: "Structured generated records from the database index.",
    surfaceEyebrow: "Static Database View",
    surfaceTitle: "Database Records",
    helperText: "Use facet filters to narrow this generated archive.",
    facets: [{ key: "facet", param: "facet", label: "Facet", allLabel: "All Facets", limit: 10 }]
  }
};

export function getDbBrowseProfile(section: DbSection): DbBrowseProfile {
  return dbBrowseProfiles[section];
}
