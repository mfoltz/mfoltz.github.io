# Dual-Lane Review Loop Developer Iteration 02

## Goal

Deepen the DB detail developer lane by replacing the flattest provenance read with grouped summaries for routes, linked records, and raw-origin clusters while keeping the player-first detail flow intact.

## What Changed

- Added grouped provenance summaries to schema-backed DB detail pages above the exact raw provenance grid.
- Split developer source context into `Routes`, `Linked Records`, and `Raw Origins` groups, with recipe and workstation join summaries when those records have join data.
- Kept copy actions and the compact exact-value grid available below the grouped summaries, but removed the synthetic DB route from that raw grid.
- Refreshed accepted visual baselines for the DB detail/source captures and the search capture after review.

## What Visibly Improved

- Developer source sections now answer `where is this page, what records does it join to, and which raw origin backed these fields?` without requiring a scan through every raw field first.
- Item, recipe, NPC, and ability detail pages still lead with player-facing hero/context sections before the developer lane appears.
- Recipe pages now distinguish normalized join summaries from linked record route samples instead of relying only on the flat provenance grid.

## What Still Feels Weak

- Workstation-specific grouped summaries are present in the shared renderer but are not yet covered by a dedicated visual capture.
- Long source refs still need line wrapping, so raw-origin cards are clearer than before but remain visually dense.
- Linked record summaries sample only the first few routes; deeper relation browsing still depends on the existing relation sections.

## What The Compare Pack Caught

- The first compare reported 14 intentional changes across DB detail/source captures and the search capture as the provenance section gained grouped summaries.
- The developer-sanity source clip showed the clearest improvement: routes, linked records, and raw origins are now visible together without turning the whole page into a raw dump.
- Shell and reference clips stayed stable after incidental shell baseline rewrites were restored.
- After `npm run visual:baseline`, the final `npm run visual:compare` returned clean.

## Next Swing

Add a workstation-focused developer capture or a richer station/vendor route to prove the station join grouping on a page with many buffer-backed recipes.
