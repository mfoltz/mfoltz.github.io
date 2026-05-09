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
  "Generated gameplay and prefab reference data for mechanics, progression, and world inspection.";

export const homeLandingBands: HomeLandingBand[] = [
  {
    id: "gameplay-data",
    title: "Gameplay Data",
    description: "Start with the generated records that explain combat, items, drops, and craft progression.",
    items: [
      {
        id: "abilities",
        to: "/db/abilities",
        eyebrow: "Combat",
        title: "Abilities",
        description: "Browse spell, weapon, and action records to understand mechanics, schools, and linked gameplay behavior.",
        actionLabel: "Open Abilities"
      },
      {
        id: "items",
        to: "/db/items",
        eyebrow: "Inventory",
        title: "Items",
        description: "Inspect item definitions, resource records, and gameplay-facing inventory data across the generated data layer.",
        actionLabel: "Open Items"
      },
      {
        id: "npcs",
        to: "/db/npcs",
        eyebrow: "World",
        title: "NPCs",
        description: "Trace enemy, unit, and world entity records to see how combatants and actors are represented.",
        actionLabel: "Open NPCs"
      },
      {
        id: "recipes",
        to: "/db/recipes",
        eyebrow: "Crafting",
        title: "Recipes",
        description: "Follow crafting outputs, requirements, and workstation-linked production data without leaving the generated record layer.",
        actionLabel: "Open Recipes"
      },
      {
        id: "workstations",
        to: "/db/workstations",
        eyebrow: "Stations",
        title: "Workstations",
        description: "Compare station roles, matching floors, servant bonuses, linked recipes, and production outputs from the generated station records.",
        actionLabel: "Open Workstations"
      }
    ]
  }
];
