# Deferred workstation browse improvements

Date: 2026-10-16
Original status: parked review and plan.

Execution follow-up: implementation was later authorized; see the
[October 18 local delivery checkpoint](../checkpoints/2026-10-18-workstation-vendor-browse.md).
The observations and planning-only boundaries below retain their original scope.

Reviewed against local main on 2026-10-18. The
[full implementation plan](workstation-browse-implementation-plan-2026-10-18.md)
supersedes the proposed sequence below. This file retains the October 16 visual
observations and capture references; no implementation is authorized by either note.

Improve artwork visibility on [Workstations](https://mfoltz.github.io/db/workstations),
remove technical blurbs beside the artwork, and give vendors a distinct browse
category. Resume only after the user's current work and a request to take this
up. This note does not change the priorities in the
[active roadmap](../source-backed-next-thread-roadmap.md).

## Scope and stopping point

This review covers workstation browse rows, the abilities artwork reference,
and vendor discoverability. It ends with this deferred plan.

Non-goals: implementation, generated-data changes, artwork replacement or
extraction, broader catalog cleanup, commits, publication, and reprioritizing
current work. A future implementation should stop if it requires unsupported
classification, lost record links, new asset acquisition, or widening into
unrelated browse/detail changes.

## Current findings

Fresh live desktop captures were inspected alongside the current checkout on
`codex/reference-focus-start-repair` at `7ff6162e3a`. The local reference-focus
script edits were outside this review. Live and local state were reviewed
separately; this does not establish identical deployed and local revisions.

1. **Anvil row: usable, artwork lacks prominence.** Its image occupies a
   64 by 64 CSS-pixel box, while its source dimensions are 128 by 96. The
   `Servant Blacksmith` text competes with the small artwork on the right.
2. **Aftershock row: useful sizing reference.** Its source is 128 by 128,
   displayed in the same 64 by 64 box. Both pages already share
   `DenseIndexRow` and `DbArtwork`; a second rendering implementation is
   unnecessary. Rectangular artwork fitted into a square has less displayed
   height. Transparent margins may also affect perceived size, but were not
   measured in this review.
3. **Sawmill search: technical copy distracts.** The Advanced Sawmill row shows
   `Servant Lumberjack` and `NoInput`, plus repeated copy about normalized
   naming and technical prefab context. These do little to help identify a
   station in a browse list.
4. **Vendor filter: works, category remains buried.** The live filter exposes
   15 vendor records inside a 136-record Workstations catalog, retaining the
   Workstations heading. The local generated index independently has the same
   counts: 15 vendors and 121 other workstation records. Existing region and
   inventory fields provide a starting point for a dedicated browse surface.

The local index has artwork on 13 of 136 rows. Enlarging existing artwork will
not supply missing images, which remains outside this proposal.

## Proposed implementation sequence for later

### 1. Shared artwork sizing and quieter workstation rows

Extend the existing `DbArtwork` sizing policy so portrait artwork can use an
appropriate aspect ratio and bounded width, while ability sprites retain their
established square treatment. Use one shared component and responsive policy;
choose final dimensions through desktop and narrow-screen comparison rather
than fixing an untested size in this note. Preserve aspect ratio, complete
artwork, portrait precedence, and missing/failed-image collapse. Do not crop,
redraw, recolor, or replace source assets.

Remove workstation `rightMeta` output for servant type and raw status. Also
remove the duplicated vendor region from that slot, retaining useful region
information once in the row. Keep underlying fields, searchability, detail
context, and source access. Suppress the known repeated technical boilerplate
at presentation time; preserve any meaningful source-backed description.
Retain concise role, floor, or inventory cues where they help identification.

Primary code: `src/components/db/DbArtwork.tsx` and
`src/pages/DbListPage.tsx` (`DenseIndexRow`, `WorkstationIndexRow`). Check
`src/pages/BrowseRows.test.tsx` for existing artwork and row contracts.

### 2. A discoverable Vendors category

Provide a Vendors entry in database browsing, preferably at `/db/vendors`,
using the existing `workstationRole === "Vendor"` records as its initial
membership. Give it a Vendors heading and region/inventory filters, and exclude
vendors from the default Workstations browse list. A role filter buried under
Workstations alone does not fulfill this direction.

Prefer a browse projection over the existing records for the initial change.
Preserve their canonical detail links and exact prefab/GUID identities. Resolve
legacy `/db/workstations?role=vendor` links, return-to-list context, breadcrumbs,
counts, and search category labels together. Do not merely append `vendors` to
the section list: current routing and fetches assume every section owns its
generated index and detail files. A physical data/URL migration would need a
separate compatibility plan before execution.

Relevant code: `src/config/sections.ts`, `src/config/home.ts`,
`src/config/dbBrowse.ts`, `src/router.tsx`, `src/pages/DatabasePage.tsx`,
`src/pages/DbListPage.tsx`, `src/pages/DbDetailPage.tsx`, and
`scripts/build-search-index.ts`. Existing classification is in
`scripts/build-db-index.ts` (`resolveWorkstationRole`, `buildWorkstationEntity`);
this plan does not broaden its classification or infer new vendors from names.

## Acceptance when implementation is requested

- Anvil and other rectangular portraits have useful visual prominence next to
  ability sprites, with no distortion, overflow, or artwork changes.
- Workstation browse rows omit servant/status blurbs and repeated technical
  boilerplate; useful source data remains accessible.
- Vendors have a discoverable category and are absent from the default
  Workstations list. Every existing record remains reachable without duplicate
  search results. Derive counts from the current records when resuming.
- Inspect desktop, 320/375-pixel layouts, long names, 200 percent zoom, keyboard
  focus, missing/failed artwork, vendor filters, old links, and back navigation.
  Check shared item/NPC/ability rows for collateral changes.
- Run focused row/navigation checks, targeted browser captures, the relevant
  visual comparison, and `npm run verify` before any commit. Review baseline
  changes explicitly and keep commits within the repository's review limits.

This review established desktop hierarchy and filter behavior only. Mobile,
zoom, keyboard, contrast, and assistive-technology behavior need verification
with the future implementation; no accessibility compliance claim is made.

## Fresh screenshot evidence

These inspected captures are local review evidence outside the repository,
not new product assets or accepted visual baselines.

1. Anvil row and servant metadata:
   `01-workstation-anvil.jpg`.
2. Aftershock reference row:
   `02-ability-aftershock.jpg`.
3. Advanced Sawmill row and NoInput metadata:
   `03-workstation-sawmill.jpg`.
4. Selected vendor role, count, and Workstations heading:
   `04-vendor-filter.jpg`.

Capture directory on this host:
`C:/Users/mitch/.codex/visualizations/2026/10/16/01a14637-a7d7-7761-ac09-68e216720a9c/workstations-review/`.
