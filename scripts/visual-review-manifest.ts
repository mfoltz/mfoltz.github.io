export const visualThemes = ["dark", "light"] as const;

export type VisualTheme = (typeof visualThemes)[number];
export type VisualReviewPack = "player-first" | "developer-sanity";

export const visualReviewPackMeta: Record<
  VisualReviewPack,
  {
    title: string;
    summary: string;
  }
> = {
  "player-first": {
    title: "Player-first pack",
    summary: "Review these first after accepted broad runs. Focus on intentional first screens, readable top folds, and source details staying secondary."
  },
  "developer-sanity": {
    title: "Developer sanity pack",
    summary: "Reference prefab routes and shell/header clips that catch navigation, provenance, and shell-layout drift."
  }
};

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
  pack: VisualReviewPack;
  kind: "route" | "shell";
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
  height: 84
} as const;

export const visualCaptures: VisualCapture[] = [
  { id: "home", title: "Home", path: "/", pack: "player-first", kind: "route" },
  {
    id: "db-item-blood-essence-detail",
    title: "Blood Essence Item Detail",
    path: "/db/items/item-blood-essence-t01",
    pack: "player-first",
    kind: "route"
  },
  {
    id: "db-item-vampire-coating-detail",
    title: "Blood Coating Item Detail",
    path: "/db/items/item-vampire-coating-blood",
    pack: "player-first",
    kind: "route"
  },
  {
    id: "db-ability-apply-weapon-coating-blood-detail",
    title: "Blood Coating Ability Detail",
    path: "/db/abilities/ab-apply-weapon-coating-blood-ability-group",
    pack: "player-first",
    kind: "route"
  },
  {
    id: "db-recipe-armor-boots-t01-bone-detail",
    title: "Boneguard Boots Recipe Detail",
    path: "/db/recipes/recipe-armor-boots-t01-bone",
    pack: "player-first",
    kind: "route"
  },
  {
    id: "db-npc-char-bandit-bomber-v-blood-detail",
    title: "Clive The Firestarter NPC Detail",
    path: "/db/npcs/char-bandit-bomber-v-blood",
    pack: "player-first",
    kind: "route"
  },
  { id: "db-abilities-list", title: "Database Abilities", path: "/db/abilities", pack: "player-first", kind: "route" },
  {
    id: "db-abilities-list-blood-school",
    title: "Database Abilities: Blood School",
    path: "/db/abilities?view=catalog&school=blood",
    pack: "player-first",
    kind: "route"
  },
  { id: "search-blood-db", title: "Database Search: Blood", path: "/search?q=blood&scope=db", pack: "player-first", kind: "route" },
  { id: "reference-prefabs-list", title: "Prefabs Reference", path: "/prefabs", pack: "developer-sanity", kind: "route" },
  {
    id: "reference-prefab-blood-essence-detail",
    title: "Prefab Detail: Blood Essence",
    path: "/prefabs/item-bloodessence-t01",
    pack: "developer-sanity",
    kind: "route"
  },
  { id: "shell-home", title: "Shell Home Active", path: "/", pack: "developer-sanity", kind: "shell", clip: shellClip },
  { id: "shell-components", title: "Shell Components Active", path: "/components", pack: "developer-sanity", kind: "shell", clip: shellClip },
  { id: "shell-systems", title: "Shell Systems Active", path: "/systems", pack: "developer-sanity", kind: "shell", clip: shellClip },
  { id: "shell-queries", title: "Shell Queries Active", path: "/queries", pack: "developer-sanity", kind: "shell", clip: shellClip },
  { id: "shell-prefabs", title: "Shell Prefabs Active", path: "/prefabs", pack: "developer-sanity", kind: "shell", clip: shellClip },
  { id: "shell-search", title: "Shell Search Utility", path: "/search?q=blood&scope=db", pack: "developer-sanity", kind: "shell", clip: shellClip }
];
