# Recipe De-Dup And Workstation Pivot

Status: parked
Date: 2026-05-07

## Accepted Recipe Direction

- The structured recipe summary is the player-facing overview when recipe structure exists.
- The lower recipe relations can collapse into one `Linked Records` surface with grouped output, ingredient, and repair records.
- Decorative row cues stay fixed and local to recipe summary labels. They are not generated from item names or keyword matching.
- Developer source and provenance sections keep normalized recipe strings for traceability/debugging, not top-level player copy.

## Workstation Candidate

Workstations show a similar shape: a compact role/floor summary could sit above larger recipe, output, and inventory linked lists. A later pass can consider `Station Summary` or `Workstation Summary` after the recipe de-dup pattern proves clean.

Candidate summary fields:

- Role
- Station kind
- Matching floor
- Servant bonus
- Recipe count
- Output count

Candidate lower-section cleanup:

- One linked-records surface for station recipes, outputs, and inventory.
- Preserve deep browsing rows, links, icons, GUIDs, prefab context, and source/provenance surfaces.

## Parked Spruce-Up Candidates

- Abilities: cast and cooldown timing cues.
- Items: durability and max-stack cues.
- NPCs: level, essence, and blood-type summary cues.
- No broad emoji taxonomy, fuzzy matching, or keyword-driven cue generation.
