# Recipe De-Dup And Workstation Pivot

Status: completed design direction; historical snapshot
Date: 2026-05-07

Reviewed: 2026-09-30. Recipe/workstation summaries and grouped Linked Records are
implemented in the current detail shell. The candidate queue below is retired;
use the [active roadmap](../source-backed-next-thread-roadmap.md) for future work.

## Accepted Recipe Direction

- The structured recipe summary is the player-facing overview when recipe structure exists.
- The lower recipe relations can collapse into one `Linked Records` surface with grouped output, ingredient, and repair records.
- Decorative row cues stay fixed and local to recipe summary labels. They are not generated from item names or keyword matching.
- Developer source and provenance sections keep normalized recipe strings for traceability/debugging, not top-level player copy.

## Delivered Workstation Direction

Workstations now have a compact Workstation Summary above grouped recipe,
output, and inventory Linked Records. This direction is delivered, not a later
implementation candidate.

Delivered summary fields:

- Role
- Station kind
- Matching floor
- Servant bonus
- Recipe count
- Output count

Delivered lower-section cleanup:

- One linked-records surface for station recipes, outputs, and inventory.
- Preserve deep browsing rows, links, icons, GUIDs, prefab context, and source/provenance surfaces.

## Retired Spruce-Up Queue

- Abilities already expose cast and cooldown facts.
- Items already expose durability and max-stack facts in the summary.
- NPCs already expose level, essence, and blood-type summary facts.

These older candidates do not authorize additional polish. Retain the constraint
against broad emoji taxonomy, fuzzy matching, or keyword-driven cue generation.
