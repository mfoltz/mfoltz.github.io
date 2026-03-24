/**
 * Frozen shell contract:
 * - keep the brand lockup, nav rhythm, utility placement, and search trigger aligned with the wiki shell
 * - future UI passes should change information architecture here, not by restyling SiteShell ad hoc
 */

export interface ShellLinkItem {
  type: "link";
  id: string;
  label: string;
  to: string;
  end?: boolean;
}

export interface ShellGroupItem {
  type: "group";
  id: string;
  label: string;
  items: ShellLinkItem[];
}

export interface ShellUtilityLink {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export type ShellPrimaryItem = ShellLinkItem | ShellGroupItem;

export const shellSearchPath = "/search";

export const shellPrimaryNav: ShellPrimaryItem[] = [
  { type: "link", id: "home", label: "Home", to: "/", end: true },
  { type: "link", id: "database", label: "Database", to: "/db/abilities" },
  { type: "link", id: "prefabs", label: "Prefabs", to: "/prefabs" },
  {
    type: "group",
    id: "reference",
    label: "Reference",
    items: [
      { type: "link", id: "components", label: "Components", to: "/components" },
      { type: "link", id: "systems", label: "Systems", to: "/systems" },
      { type: "link", id: "queries", label: "Queries", to: "/queries" }
    ]
  }
];

export const shellUtilityLinks: ShellUtilityLink[] = [
  {
    id: "wiki",
    label: "Wiki",
    href: "https://odjit.github.io/VRising-Mod-Wiki/",
    external: true
  }
];
