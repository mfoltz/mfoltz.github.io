export interface HomeLandingItem {
  id: string;
  to: string;
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
}

export interface HomeLandingBand {
  id: string;
  title: string;
  description: string;
  items: HomeLandingItem[];
}

export const homeHeroSummary =
  "Explore gameplay records for mechanics and progression, then drill into systems, queries, and prefabs when you want implementation detail.";

export const homeLandingBands: HomeLandingBand[] = [
  {
    id: "gameplay-data",
    title: "Gameplay Data",
    description: "Start with the records that explain combat, items, drops, and craft progression.",
    items: [
      {
        id: "abilities",
        to: "/db/abilities",
        eyebrow: "Gameplay Data",
        title: "Abilities",
        description: "Browse spell, weapon, and action records to understand mechanics, schools, and linked gameplay behavior.",
        actionLabel: "Open Abilities"
      },
      {
        id: "items",
        to: "/db/items",
        eyebrow: "Gameplay Data",
        title: "Items",
        description: "Inspect item definitions, resource records, and gameplay-facing inventory data across the generated database.",
        actionLabel: "Open Items"
      },
      {
        id: "npcs",
        to: "/db/npcs",
        eyebrow: "Gameplay Data",
        title: "NPCs",
        description: "Trace enemy, unit, and world entity records to see how combatants and actors are represented.",
        actionLabel: "Open NPCs"
      },
      {
        id: "recipes",
        to: "/db/recipes",
        eyebrow: "Gameplay Data",
        title: "Recipes",
        description: "Follow crafting outputs, requirements, and workstation-linked production data without leaving the database layer.",
        actionLabel: "Open Recipes"
      }
    ]
  },
  {
    id: "developer-internals",
    title: "Developer Internals",
    description: "Use the source-first reference layer when you want systems, ECS structure, and prefab relationships.",
    items: [
      {
        id: "components",
        to: "/components",
        eyebrow: "Developer Internals",
        title: "Components",
        description: "Inspect component records and data-bearing surfaces that appear across generated reference views and prefab links.",
        actionLabel: "Open Components"
      },
      {
        id: "systems",
        to: "/systems",
        eyebrow: "Developer Internals",
        title: "Systems",
        description: "Review system records and responsibilities to understand how gameplay logic is organized and connected.",
        actionLabel: "Open Systems"
      },
      {
        id: "queries",
        to: "/queries",
        eyebrow: "Developer Internals",
        title: "Queries",
        description: "Trace extracted query shapes to see which data each system reads, filters, and joins through ECS access patterns.",
        actionLabel: "Open Queries"
      },
      {
        id: "prefabs",
        to: "/prefabs",
        eyebrow: "Developer Internals",
        title: "Prefabs",
        description: "Jump into prefab records to connect high-level game objects with their underlying component composition.",
        actionLabel: "Open Prefabs"
      }
    ]
  }
];
