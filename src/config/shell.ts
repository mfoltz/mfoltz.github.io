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
  icon?: "external" | "github";
  ariaLabel?: string;
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

export const shellCommunityLinks: ShellUtilityLink[] = [
  {
    id: "wiki",
    label: "Community Wiki",
    href: "https://wiki.vrisingmods.com/",
    icon: "external",
    external: true
  },
  {
    id: "ideas",
    label: "Ideas",
    href: "https://ideas.vrisingmods.com/",
    icon: "external",
    external: true
  }
];

export const shellSocialLinks: ShellUtilityLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/mfoltz/mfoltz.github.io",
    icon: "github",
    ariaLabel: "GitHub repository",
    external: true
  }
];

export const shellUtilityLinks: ShellUtilityLink[] = shellCommunityLinks;

export const shellMobileUtilityLinks: ShellUtilityLink[] = [...shellCommunityLinks, ...shellSocialLinks];
