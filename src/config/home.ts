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
  "Generated gameplay and prefab reference data for mechanics, progression, and world inspection. For guides, community docs, Discord, and Thunderstore direction, visit the Community Wiki.";

export const homeLandingBands: HomeLandingBand[] = [
  {
    id: "gameplay-data",
    title: "Gameplay Data",
    description: "Start with the generated records that explain combat, items, drops, and craft progression.",
    helperText: "This is the data companion surface; the Community Wiki remains the home for authored guides and community context.",
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
        description: "Inspect item definitions, resource records, and gameplay-facing inventory data across the generated data layer.",
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
        description: "Follow crafting outputs, requirements, and workstation-linked production data without leaving the generated record layer.",
        actionLabel: "Open Recipes"
      }
    ]
  }
];
