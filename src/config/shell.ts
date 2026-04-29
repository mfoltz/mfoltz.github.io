/**
 * Frozen shell contract:
 * - keep the brand lockup, nav rhythm, utility placement, and search trigger aligned with the wiki shell
 * - change shell destinations here instead of reworking SiteShell directly
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

export const shellSearchPath = "/search";

export const shellPrimaryNav: ShellLinkItem[] = [
  { type: "link", id: "home", label: "Home", to: "/", end: true },
  ...[
    { id: "components", label: "Components", to: "/components" },
    { id: "systems", label: "Systems", to: "/systems" },
    { id: "queries", label: "Queries", to: "/queries" },
    { id: "prefabs", label: "Prefabs", to: "/prefabs" }
  ].map((destination) => ({
    type: "link" as const,
    id: destination.id,
    label: destination.label,
    to: destination.to
  }))
];

export const shellUtilityLinks: ShellUtilityLink[] = [
  {
    id: "wiki",
    label: "Community Wiki",
    href: "https://wiki.vrisingmods.com/",
    external: true
  }
];
