# Database Parity Audit

Last reviewed: March 25, 2026

Scope:

- compare the original database site at [vrising.gaming.tools](https://vrising.gaming.tools/) against the current generated DB experience
- treat the original site as a structure and information-scent reference, not a canonical data source
- keep the map out of scope

Reference pages used during this pass:

- [Home](https://vrising.gaming.tools/)
- [Abilities: Blood](https://vrising.gaming.tools/abilities/blood)
- [Advanced Furnace](https://vrising.gaming.tools/de/workstations/tm_refinementstation_furnace_large)

Reference status observed on March 25, 2026:

- V Rising version `1.0.4`
- Last Updated `May 26, 2024`

## Cross-cutting read

Already aligned:

- generated DB JSON remains the only source of truth
- player-first detail pages stay separate from the raw reference lane
- developer provenance stays available on the same detail page instead of being removed

Deliberate deviations to keep:

- no attempt to clone the original site layout or mirror its stale data coverage
- no literal `Info / Developer Info` tabs
- no placeholder sections for drop tables, unlock trees, or map-linked content that the extractor cannot currently support

Shipped in this pass:

- DB browse state is now URL-backed instead of component-local
- ability school browsing has a first-class query-backed slice via `/db/abilities?view=catalog&school=<slug>`
- public `tags` were cleaned toward prefab, GUID, meaningful taxonomy, and linked-prefab discovery instead of raw runtime noise
- DB and reference detail pages now use explicit developer-language section titles in the secondary lane

Deferred gaps:

- NPC list browsing is still generic facet-first rather than having dedicated encounter-region or blood-type slices
- workstation detail pages still lack real recipe output lists
- item and NPC discovery still depend more on search and generated summaries than on rich secondary browse rails

Future language note:

- keep browse query params locale-neutral and slug-based so localized labels can change later without breaking shared URLs
- keep prefab, GUID, and source-path developer fields stable so alternate language surfaces still have a canonical fallback lane

## Section Matrix

### Abilities

Parity already met:

- searchable ability list with player-readable titles
- detailed ability pages with tooltip/body copy, timing, and prefab traceability
- linked developer/reference lane kept available below player content

Deliberate deviations to keep:

- catalog-first default instead of showing every technical record up front
- shared detail shell instead of separate info/dev tabs

Shipped in this pass:

- query-backed school slice with shareable URLs and back/forward-safe state
- surface title, helper copy, and metrics now reflect the active school slice
- cleaned tags now prefer title, school, form, prefab, GUID, and linked prefabs over `runtime:*`, `Default`, `Owner`, and similar filler
- combat-context block now guarantees school, form, timing, and use-cue coverage above provenance on sparse pages

Deferred gaps:

- no first-class subtype slices yet for ultimate, travel, or defensive groupings
- no explicit combo or spell-family subsection model beyond the generated categories we already expose

### Items

Parity already met:

- group/family/tier browsing
- searchable item list with player-readable names plus prefab/GUID lookup
- detail pages preserve crafting and repair context

Deliberate deviations to keep:

- no promise of full wiki-style authored item pages
- no filler tabs for stats we cannot currently derive

Shipped in this pass:

- query-backed group/family/tier state for direct-load and refresh-safe browsing
- tag cleanup removes runtime markers and placeholder tokens from public search tags
- rendered item-icon delivery is now repo-backed for resolved rows, so tracked item detail routes can surface real `/icons/items/...` assets instead of relying on metadata only
- extractor-backed item descriptions now flow into generated item detail rows for `884 / 1130` high-signal items instead of staying empty behind metadata-only shells

Deferred gaps:

- richer item discovery sub-slices such as resource families, consumable use lanes, or jewelry-focused paths are still future work
- the remaining item-description misses still need a bounded follow-up to separate genuinely blank upstream items from residual ingest gaps

### Recipes

Parity already met:

- output-first browse
- ingredient/output/repair relations on detail pages
- craft-time and count context surfaced in the list

Deliberate deviations to keep:

- generated recipe facts stay normalized and extractor-backed instead of hand-authored

Shipped in this pass:

- query-backed group/family/tier browsing
- cleaned tags now emphasize recipe/output/ingredient discovery over generic filler
- broad-control recipe provenance now resolves against a reproducible `full-dumponly` regression-sentinel run instead of falling through to a stateful snapshot

Deferred gaps:

- no workstation-native browse handoff yet from recipe detail into a scoped station subsection
- no authored walkthrough or progression framing beyond generated context

### NPCs

Parity already met:

- searchable NPC archive with boss-readable names where available
- encounter detail pages preserve aggro, movement, and essence/drop context
- developer provenance remains accessible

Deliberate deviations to keep:

- no fake drop-table sections when the extractor only has partial drop context

Shipped in this pass:

- encounter-context block now guarantees encounter, drop, and servant cues above provenance on sparse pages
- cleaned tags drop placeholder values such as bare `CHAR`
- the NPC refresh path now resolves the accepted server-first `NpcsServer.json` artifact when it is available, so the website is no longer blocked on a missing upstream NPC contract
- `npc-display-map` is now seeded from the server NPC artifact, then enriched by canonical client/current display overlays without counting server-only fallback rows as high-signal display coverage

Deferred gaps:

- list browse is still generic facet/search based
- richer subsections such as factions, regions, blood carriers, or boss ladders require more extractor-backed classification
- current ingestion-readiness warnings for NPCs mean server-first breadth is present but high-signal display overlay is incomplete; the current client overlay has canonical rows but no populated display text or icon signal

### Workstations

Parity already met:

- searchable player-facing station/vendor records
- role, bonus, and provenance context on detail pages
- vendor and station identity remain visible without collapsing into prefab-only nomenclature

Deliberate deviations to keep:

- no stale promise of full recipe panels when we only have partial station-to-output joins

Shipped in this pass:

- query-backed role/area browsing
- station-context block now guarantees role, room-bonus, and recipe-context cues above provenance
- developer/reference lane wording is now aligned with the DB detail lane

Deferred gaps:

- real recipe lists per workstation remain a future extractor-driven enhancement
- workstation area browsing still reflects generated floor/region data rather than richer authored geography

## Follow-on cues

Player-first next:

- extend query-backed subsection patterns where the generated data already supports them cleanly
- keep using the player-first visual pack as the acceptance surface before refreshing baselines

Developer-facing next:

- deepen the secondary developer lane with better join summaries and raw-source usefulness
- keep the DB and reference lanes paired in language and review order so developer improvements remain easy to track visually
