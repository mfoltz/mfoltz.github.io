/**
 * Frozen shell contract:
 * - keep the brand lockup, nav rhythm, utility placement, and search trigger aligned with the wiki shell
 * - change promoted destinations here instead of reworking SiteShell or HomePage independently
 */

export interface ShellLinkItem {
  type: "link";
  id: string;
  label: string;
  to: string;
  end?: boolean;
}

export interface ShellUtilityLink {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export interface PromotedDestination {
  id: string;
  label: string;
  to: string;
  homeEyebrow: string;
  homeTitle: string;
  homeDescription: string;
  homeActionLabel: string;
  heroActionLabel?: string;
}

export const shellSearchPath = "/search";

export const promotedDestinations: PromotedDestination[] = [
  {
    id: "database",
    label: "Database",
    to: "/db/abilities",
    homeEyebrow: "Primary Workspace",
    homeTitle: "Database",
    homeDescription: "Browse linked gameplay records across abilities, items, recipes, NPCs, and workstations.",
    homeActionLabel: "Open Database",
    heroActionLabel: "Browse Database"
  },
  {
    id: "components",
    label: "Components",
    to: "/components",
    homeEyebrow: "Developer Surface",
    homeTitle: "Components",
    homeDescription: "Inspect component records and schema-bearing data surfaces used throughout generated reference views.",
    homeActionLabel: "Open Components",
    heroActionLabel: "Open Components"
  },
  {
    id: "systems",
    label: "Systems",
    to: "/systems",
    homeEyebrow: "Developer Surface",
    homeTitle: "Systems",
    homeDescription: "Trace gameplay systems, their responsibilities, and the records or queries they touch.",
    homeActionLabel: "Open Systems"
  },
  {
    id: "queries",
    label: "Queries",
    to: "/queries",
    homeEyebrow: "Developer Surface",
    homeTitle: "Queries",
    homeDescription: "Review extracted query shapes and follow how systems read, filter, and join ECS data.",
    homeActionLabel: "Open Queries"
  },
  {
    id: "prefabs",
    label: "Prefabs",
    to: "/prefabs",
    homeEyebrow: "Generated Records",
    homeTitle: "Prefabs",
    homeDescription: "Jump into prefab records and their linked component and system coverage for modding workflows.",
    homeActionLabel: "Open Prefabs"
  }
];

export const heroPrimaryDestinationId = "database";
export const heroSecondaryDestinationId = "components";

export const shellPrimaryNav: ShellLinkItem[] = [
  { type: "link", id: "home", label: "Home", to: "/", end: true },
  ...promotedDestinations.map((destination) => ({
    type: "link" as const,
    id: destination.id,
    label: destination.label,
    to: destination.to
  }))
];

export const shellUtilityLinks: ShellUtilityLink[] = [
  {
    id: "wiki",
    label: "Wiki",
    href: "https://odjit.github.io/VRising-Mod-Wiki/",
    external: true
  }
];
