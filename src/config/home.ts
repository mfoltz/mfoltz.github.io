export interface HomeLandingItem {
  id: string;
  to: string;
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
  iconMediaSrc?: string;
  tooltipSummary?: string;
  supportingNote?: string;
}

export interface HomeLandingBand {
  id: string;
  title: string;
  description: string;
  helperText?: string;
  items: HomeLandingItem[];
}

export const homeHeroSummary =
  "Start with gameplay records for mechanics, progression, and world data. Use the shell for deeper systems, queries, components, and prefab investigation.";

export const homeLandingBands: HomeLandingBand[] = [
  {
    id: "gameplay-data",
    title: "Gameplay Data",
    description: "Start with the records that explain combat, items, drops, and craft progression.",
    helperText: "For components, systems, queries, and prefab internals, use the shell navigation above.",
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
  }
];
