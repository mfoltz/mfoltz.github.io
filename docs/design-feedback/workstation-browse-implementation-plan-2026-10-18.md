# Workstation browse implementation plan

Reviewed: 2026-10-18.
Review status: complete; the original proposal below is retained as reviewed.

Execution follow-up: the user subsequently authorized implementation. The
[local delivery checkpoint](../checkpoints/2026-10-18-workstation-vendor-browse.md)
records the implementation and acceptance; the planning-only authority statements
below describe the earlier review request.

Use the newly accepted Blueprint text for matching workstation identities,
make existing workstation artwork easier to recognize, remove low-value row
metadata, and expose Vendors as a distinct browse category. The Blueprint
additions improve the available copy; they do not remove the need for the
artwork and navigation work in the [October 16 review](workstation-browse-deferred-plan-2026-10-16.md).

## Baseline and authority

The planning baseline is local main
`49075761cfda88bcc62548ac5294fd6590a12dc9`, in
`C:/Users/mitch/.codex/worktrees/blueprint-text-expansion-128/mfoltz.github.io`.
It contains the accepted Blueprint text completion and the later portable
release-smoke command. The completion checkpoint and roadmap retain dated
pre-consolidation main pointers; the current Git ref takes precedence for
this review. Publication state was not refreshed or inferred.

The chat's checkout remains `codex/reference-focus-start-repair` at
`7ff6162e3a`, with its two pre-existing reference-focus script edits. Review
read main without switching, resetting, committing, or modifying that worktree.
Nine inspected source files in the main worktree match their committed Git
blobs, including the generator, approved-text resolver, list pages, artwork,
detail view, directory, search page, and router. A complete main-worktree status
could not be certified because Git's worktree status operation failed under
the read-only access available here; this does not obscure the committed
source baseline. Establish a clean execution branch before implementation.

This request authorizes review and planning. Product edits, generated-data
refresh, artwork changes, commits, integration, publication, game launches,
new extraction, and dependency installation have not been performed. This
note does not replace the [single active roadmap](../source-backed-next-thread-roadmap.md)
or independently schedule these packets.

## What the Blueprint additions change

A read-only audit ran the current `readApprovedBlueprintText` and
`blueprintTextBuildRows` helpers, joined workstation and Blueprint details by
complete prefab plus signed GUID, and checked approved fields against the
generated Blueprint records. Matching source paths were also required.

| Measure | Current result | Planning implication |
| --- | ---: | --- |
| Workstation storage records | 136 | Preserve every identity and canonical destination. |
| Non-vendor records with exact Blueprint counterparts | 121 | Reuse existing evidence, without name matching. |
| Eligible names in those matches | 121 | 105 differ from current workstation labels. |
| Eligible descriptions in those matches | 119 | Replace boilerplate with independently qualified text. |
| Vendors | 15 | None has a Blueprint counterpart. |
| Workstation records with artwork | 13 | Sizing remains useful; missing artwork remains missing. |
| Blueprint records with artwork | 58 | No additional artwork is available for the 121 matches. |

Examples of useful existing copy are Anvil's description, "A workstation used
for crafting of weapons", and Fabricator's description of assembling advanced
materials. Alchemy Lab Small has the approved name Alchemy Table, Blood Mixer
has Blood Homogenizer, and Refinement Station Fabricator has Fabricator.
Keep original names searchable when adopting these labels.

Two matches have an eligible name but no eligible description:
`TM_Castle_RefinementStation_Soulshard` and
`TM_RefinementStation_TeslaLightningRod`. Their display-map rows still contain
the generic `Blueprint record.` summary. A row-level source marker therefore
does not qualify every field. Consume the approved resolver's independent
fields; do not copy truthy display-map strings or infer missing descriptions.
Recorded labels, including technical variants, do not establish availability.

The current workstation index is byte-identical to the earlier checkout's
index (SHA256 `3a675bee88dba33ce56a6cce0fb60618ec0f23ac087fa21e567db45a9dd29351`).
The workstation builder and browse/artwork components have not acquired this
new copy automatically. The shared detail change suppresses duplicate approved
description text; it is not a workstation text bridge.

## Frozen design choices

- Keep Workstations and Vendors as distinct user-facing browse categories.
  Storage continues to use the existing `workstations` section.
- Keep all 121 non-vendor records in Workstations. Storage, utility, respawn,
  and technical variants are not being reclassified in this pass.
- Keep canonical detail URLs, prefab/GUID identity, recipe/output/inventory
  joins, quantities, provenance, and artwork associations.
- Reuse approved names and descriptions independently. Keep their exact
  wording, punctuation, whitespace, and existing evidence strength.
- Keep one `DbArtwork` implementation. Opt workstation rows into larger
  artwork; leave the existing row default, detail, and ingredient sizes intact.
- Keep Blueprint material, book, and unlock relationships unchanged. These
  additions do not establish vendor stock, drops, or acquisition relationships.

## Packet 1 Reuse approved text for matching workstation records

Owner: one implementation agent, using the existing evidence and a bounded
generator change. The same writer should carry the following packets.

Use `BuildContext.blueprintTextByPrefab`, already loaded and validated from the
portable witnesses, in `buildWorkstationEntity`. Require exact prefab, signed
GUID, and source-path agreement. Put the small resolution rule in a testable
helper; do not reproduce the Blueprint evidence readers or add a second map.

Apply an eligible name to the title and localized-name fields, and an eligible
description to description/excerpt and localized-summary fields. Do not run
an approved string back through title normalization or a general formatter.
Retain the previous workstation title as a search alias in tags. Missing
eligible fields retain their existing fallback data; presentation suppresses
only the known boilerplate in Packet 2.

Keep name and description provenance independent. Use the existing description
source fields, and explicit optional name-source fields alongside the localized
name key. Expose these in the workstation Source & provenance schema. Do not
claim a description source for either name-only record. Keep existing structural
summary/facts and technical source access; show owned prose once in details.

Likely files: `scripts/build-db-index.ts`, a focused workstation-text helper
and tests, `src/types/db.ts`, and the workstation source schema in
`src/components/db/dbSchemas.ts`. Change `DbDetailView` only if a focused
rendering test demonstrates a remaining duplicate or missing provenance.

Done when: all 121 exact joins resolve eligible names, 119 resolve eligible
descriptions, 105 title changes are explained, both name-only cases remain
description-ineligible, and old names still find the correct records. Freeze
and audit the generated field allowance before accepting output: workstation
copy/provenance/aliases, aggregate rows, and any existing reference labels
whose source actually depends on those titles. Existing Blueprint, item,
material/book links, identities, quantities, artwork, and other records must
remain unchanged. Do not authorize an entire generated file merely because
one row in it is allowed to change.

Stop if: a join conflicts, a field lacks independent eligibility, unexpected
generated fields change, or any accepted evidence/threshold must be weakened.
Handoff: verified text changes and an exact generated-field preservation receipt.

## Packet 2 Improve artwork prominence and remove row noise

Owner: the same implementation agent; use visual judgment for final sizing.
Input: Packet 1's longer owned names/descriptions and the October 16 examples.

Add an opt-in prominent-row size to `DbArtwork`, passed through `DenseIndexRow`
only for workstation browse. A starting visual target is a portrait up to
56px high and 72px wide below 640px, and up to 80px high and 112px wide above
that breakpoint. These are comparison candidates, not accepted dimensions.
Use aspect-preserving containment and bounded width; preserve the entire
artwork, portrait precedence, lazy row loading, and failed/missing-image
collapse. Both old and new row sizes must remain lazy-loaded.

Abilities already use the same component, with square sprites at 48px below
640px and 64px above it. Retain that appearance while giving rectangular
workstation portraits more visible area. Blueprint browse, global search,
generic cards, and detail/ingredient artwork retain their current sizes.
Do not change the global row default: Blueprint browse places artwork before
the text and already has accepted long-name/zoom behavior.

Remove servant type and raw status from workstation `rightMeta`; remove the
duplicated vendor region from that slot. Keep useful role/floor or region/
inventory badges once. Suppress complete known workstation/vendor boilerplate
in browse/search through a narrow presentation helper, preserving nonmatching
owned prose and underlying fields. Keep rows as rows; no new card design,
line clamping, replacement art, cropping, or text-size reduction.

Likely files: `DbArtwork.tsx`, `DbListPage.tsx`, `dbPresentation.ts`,
`SearchPage.tsx` for the same narrow boilerplate rule, and `BrowseRows.test.tsx`.

Done when: Anvil, Fabricator, and the existing artwork-backed workstation
fixtures are easier to recognize, long owned labels wrap fully, both missing
description cases stay quiet, and unrelated artwork sizes remain unchanged.
Stop if: the intended appearance requires new assets, loss of text, a global
layout change, or regressions in the accepted Blueprint layouts.
Handoff: inspected representative captures and focused rendering checks.

## Packet 3 Add a Vendors browse category without moving records

Owner: the same implementation agent, with routing/search contracts fixed here.

Separate browse categories from storage sections. Keep `DbSection` and the
generator's nine storage sections intact. Add a small browse-category registry
that includes `vendors` and maps it to workstation storage plus the existing
`workstationRole === "Vendor"` predicate. Use the same classification rule
for list membership and search metadata. Do not classify from names, artwork,
NPC labels, or Blueprint links.

Register `/db/vendors` explicitly. It fetches the existing workstation index
and selects the 15 vendor records before building search results, facets, and
counts. `/db/workstations` selects the other 121 records before filtering.
Vendors gets its own heading, search copy, Region and Inventory filters using
recorded `merchantRegion` and `merchantInventory`. Keep recorded values such
as T04, Major, and Minor without inventing meanings or stock claims.

Use `q`, `region`, and `inventory` as vendor query parameters. A legacy
`/db/workstations?role=vendor` URL redirects with history replacement to
`/db/vendors`, preserving `q` and translating the old `area` filter to `region`
with the existing value codec. Consume the obsolete role parameter. Clearing
filters remains in Vendors. Other workstation role/floor queries still work.

Add Vendors to `DatabaseDirectory`, which is used by both Home and Database.
The legacy `homeLandingBands` configuration is not used by the current Home
page; do not edit it as a substitute for the real directory.

Preserve vendor detail URLs at `/db/workstations/<slug>` and their JSON paths.
Once the detail loads, its exact role selects a Vendors breadcrumb linking to
`/db/vendors`; direct links and reloads get the same category. Use a narrow
breadcrumb ancestor override and a vendor-appropriate summary heading where
needed, preserving all other detail layouts and source/linked-record anchors.
Browser Back restores list query state through existing history. Breadcrumbs
may return to the category root, matching current breadcrumb behavior; no
cross-catalog restoration framework is needed. Do not add a new vendor detail
route or silently redirect a canonical detail URL to a browse list.

For global search, retain each entry's storage `section`, path, and identity.
Add optional `browseCategory: "vendors"` only to the 15 vendor search rows.
Use effective browse category for scope choices, group headings, counts, and
section filters; use storage section for Database membership and detail loading.
`scope=vendors` selects vendors and `scope=workstations` selects non-vendors.
All-results/Database totals remain conserved by this category split; Packet 1
can separately change query matches through improved copy. Do not emit a second
search record per vendor, count Vendors as a non-Database family, or invent
`/data/db/vendors/index.json`.

Likely files: a browse-category registry, `dbBrowse.ts`, `router.tsx`,
`DbListPage.tsx`, `DatabaseDirectory.tsx`, `DbDetailPage.tsx`, `Breadcrumbs.tsx`,
`SearchPage.tsx`, `src/types/content.ts`, `scripts/build-search-index.ts`,
and focused directory/category/search/navigation tests. Keep role predicates
and query normalization in small pure helpers rather than duplicating branches
through the already-large list page.

Done when: both directories expose Vendors, default lists are disjoint and
exhaustive, facets/counts use their own populations, all 15 canonical vendor
details work, legacy filter links translate correctly, and search contains one
record per prior identity with correct category/family labels. Test two
same-title Vampire Merchants by exact prefab/GUID, not visible name alone.
Stop if: storage migration, new vendor acquisition evidence, duplicated records,
or broad changes to unrelated schemas/navigation become necessary.
Handoff: exact membership/search audit and browser navigation receipt.

## Integrated acceptance and review limits

Keep each independently reviewable commit within roughly 500-1000 changed
lines; smaller cohesive commits are fine. Split a packet before exceeding that
limit. Run `npm run verify` before every proposed commit. Verification regenerates
data, so capture preservation inputs before running it. No commit is authorized
by this planning request.

Run focused identity/text, name-alias, independent-field, row/artwork,
category/query-codec, search-conservation, directory, breadcrumb, and detail
tests. Once integrated, run `npm test`, `npm run test:db-artwork`, the targeted
workstation/vendor browser pass, and the existing browse/Blueprint/material/
book/shared-card regressions affected by the shared components. Reuse accepted
Blueprint fixtures and their exact prefab/GUID qualification; do not repeat
the entire all-record text-capture campaign for an unchanged text witness.

The new visual pass should cover both themes at 320, 390, 639, 640, and 1280px,
plus native 200 percent zoom and keyboard focus/activation. Include Anvil,
Blood Homogenizer, Fabricator, Stables' longer copy, a long technical/DLC label,
a missing description, absent artwork, a deliberately failed image, and the
same-title vendor pair. Verify complete text, decoded images, loaded Inter/
Cinzel, containment, search/facet clearing, old links, browser Back, reload,
canonical detail/source links, and preserved recipe/material/book query state.

Run `npm run visual:compare` and inspect every changed capture. Accept only
explained workstation text/artwork, directory/category, breadcrumb, and affected
search baseline changes. Blueprint strings, relationships, artwork bytes,
default artwork sizing, and unrelated baselines are preservation targets.
A changed baseline list is derived from the actual diff, not pre-approved here.

The new `smoke:release` command is optional supplemental preview/release proof;
it does not replace this acceptance matrix or authorize deployment. Run it
against an owned existing preview only when the future execution scope calls
for it. No remote smoke or publication check was run during this review.

## Evidence and handoff

October 16 screenshots establish the earlier desktop observations; they are
not fresh captures of this main snapshot. This review added source comparisons
and the approved-field identity audit, not browser or accessibility acceptance.

The audit script and complete 136-row JSON receipt are retained outside the
repository at:
`C:/Users/mitch/.codex/visualizations/2026/10/16/01a14637-a7d7-7761-ac09-68e216720a9c/workstations-review/main-review-20261018/`.
The receipt pins its baseline, source root, twelve input hashes, exact joins,
eligible values, missing descriptions, paths, and artwork counts. Its assertions
passed using the existing main-worktree dependencies, without generation.

- STATUS: review complete; implementation not started.
- DELIVERED: this full plan, the earlier note's forward link, and identity audit.
- VERIFIED: main ref/source comparisons, unchanged workstation index, and exact
  approved-field joins with independent name/description checks.
- STATE: the design direction remains valid; approved text reuse is the new
  prerequisite. No new artwork is available from the Blueprint overlap.
- BOUNDARY: planning artifacts only; current code, data, evidence, branches,
  pending edits, and publication remain untouched.
- NEXT: when implementation is requested, establish a clean branch from current
  accepted main and begin Packet 1; recheck this baseline if main has moved.
