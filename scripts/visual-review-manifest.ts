export const visualThemes = ["dark", "light"] as const;

export type VisualTheme = (typeof visualThemes)[number];

export interface VisualClip {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface VisualCapture {
  id: string;
  title: string;
  path: string;
  pack: "route" | "shell";
  clip?: VisualClip;
  openShellGroupId?: string;
}

export const visualViewport = {
  width: 1440,
  height: 1280
} as const;

const shellClip = {
  x: 0,
  y: 0,
  width: visualViewport.width,
  height: 260
} as const;

export const visualCaptures: VisualCapture[] = [
  { id: "home", title: "Home", path: "/", pack: "route" },
  { id: "db-abilities-list", title: "Database Abilities", path: "/db/abilities", pack: "route" },
  { id: "db-item-blood-essence-detail", title: "Blood Essence Item Detail", path: "/db/items/item-blood-essence-t01", pack: "route" },
  { id: "search-blood-db", title: "Database Search: Blood", path: "/search?q=blood&scope=db", pack: "route" },
  { id: "reference-prefabs-list", title: "Prefabs Reference", path: "/prefabs", pack: "route" },
  { id: "reference-prefab-blood-essence-detail", title: "Prefab Detail: Blood Essence", path: "/prefabs/item-bloodessence-t01", pack: "route" },
  { id: "shell-home", title: "Shell Home Active", path: "/", pack: "shell", clip: shellClip },
  { id: "shell-database", title: "Shell Database Active", path: "/db/abilities", pack: "shell", clip: shellClip },
  { id: "shell-prefabs", title: "Shell Prefabs Active", path: "/prefabs", pack: "shell", clip: shellClip },
  {
    id: "shell-reference",
    title: "Shell Reference Flyout",
    path: "/components",
    pack: "shell",
    clip: shellClip,
    openShellGroupId: "reference"
  }
];
