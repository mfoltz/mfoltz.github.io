# Workstations and Vendors: final local review

Reviewed and accepted locally: 2026-10-19. Ready for a local integration decision.

## Goal and boundary

Review the [completed implementation](2026-10-18-workstation-vendor-browse.md)
against the agreed artwork, copy, browse-row, and vendor-category scope. Adjust
issues found, then establish readiness for a separate local-main integration.
The user's wording was to consider merging after this review; this pass does
not merge, push, open a PR, or publish.

The review starts at `727c15230d` on `codex/workstation-vendor-browse`.
Local main is clean at `49075761cfda88bcc62548ac5294fd6590a12dc9` and is an
ancestor of the reviewed branch. The original chat checkout's two script edits
and two untracked planning notes are protected by fresh before/after hashes.

## Fresh screen review

The October 19 audit used the in-app browser against the owned production
preview. These are fresh screenshots from this run. JPEG originals are retained;
PNG inspection copies decode the same pixels for the image viewer.

1. Workstation browse: larger Anvil portrait, full approved description, source
   identity, and quiet trailing area. The singular result label needed correction.

   ![Workstation browse before count wording cleanup](C:/Users/mitch/.codex/visualizations/2026/10/16/01a14637-a7d7-7761-ac09-68e216720a9c/workstations-review/final-review-20261019/01-workstation-before-inspection.png)

2. Database directory: Vendors is a distinct sibling of Workstations, with
   recorded-inventory wording and the existing directory hierarchy.

   ![Separate Vendors directory entry](C:/Users/mitch/.codex/visualizations/2026/10/16/01a14637-a7d7-7761-ac09-68e216720a9c/workstations-review/final-review-20261019/02-directory-inspection.png)

3. Vendor filters: 15 vendors narrow to two Noctem records; inventory badges
   and complete prefabs distinguish the same-title merchants. Region and
   Inventory controls are labeled and the active selection stays visible.

   ![Filtered merchants with distinct inventory and prefab identities](C:/Users/mitch/.codex/visualizations/2026/10/16/01a14637-a7d7-7761-ac09-68e216720a9c/workstations-review/final-review-20261019/03-vendors-filtered-inspection.png)

4. Vendor detail: keyboard activation opens the exact Minor record; canonical
   detail and source links and the Vendors breadcrumb work. The hero still
   incorrectly emphasized Castle Workstation and empty station-specific facts.

   ![Vendor detail mismatch before cleanup](C:/Users/mitch/.codex/visualizations/2026/10/16/01a14637-a7d7-7761-ac09-68e216720a9c/workstations-review/final-review-20261019/04-vendor-detail-before-inspection.png)

5. Empty state and Back: the region survives Back and an unmatched query;
   Clear remains in Vendors and the empty-state instruction is explicit.

   ![Vendor empty state retains its active region](C:/Users/mitch/.codex/visualizations/2026/10/16/01a14637-a7d7-7761-ac09-68e216720a9c/workstations-review/final-review-20261019/05-vendor-empty-inspection.png)

6. Narrow vendor search: the Vendors scope, 15 results, category badges, and
   Database membership display correctly. Controls fit and focus is visible.

   ![Narrow vendor search with correct category and counts](C:/Users/mitch/.codex/visualizations/2026/10/16/01a14637-a7d7-7761-ac09-68e216720a9c/workstations-review/final-review-20261019/06-vendor-search-mobile-inspection.png)

The numbered source files are `01-workstation-before.jpg`, `02-directory.jpg`,
`03-vendors-filtered.jpg`, `04-vendor-detail-before.jpg`, `05-vendor-empty.jpg`,
and `06-vendor-search-mobile.jpg` in the evidence directory below. A first
partial vendor capture is retained separately and is not the accepted step-3
image. The in-app browser's first connection timed out; a fresh documented tab
worked without changing browser, installing software, or repairing dependencies.

## Adjustments

Vendor detail heroes now show the Vendor category and useful role/linked-record
facts. The fallback Castle Workstation badge and station-kind/floor/servant
summary rows are removed from vendor heroes. Their unchanged source values
remain under Source & provenance as Source Station Kind, Source Matching Floor,
and Source Servant Bonus. Region, inventory, prefab/GUID, canonical routes,
recipe/output relations, and ordinary workstation details are preserved.

The workstation result metric now uses `1 result` for a single match. No source,
generator, witness, artwork, dependency, or storage changes are part of this fix.

The new vendor-detail regression fails on the pre-fix presentation and passes
after the fix. All 40 detail-rendering tests pass. The maintained browser
harness now checks hero/source separation for every vendor in both themes.

Fresh rebuilt-screen checks are retained as `07-vendor-detail-after.jpg`,
`08-vendor-source-after.jpg`, and `09-workstation-after-light.jpg`, with PNG
inspection copies. The vendor before/after uses the same default desktop
viewport; the workstation light capture separately confirms `1 result` and
retained shared artwork. The temporary viewport and original dark theme were
restored, and the manual review tab was closed.

![Vendor detail after cleanup](C:/Users/mitch/.codex/visualizations/2026/10/16/01a14637-a7d7-7761-ac09-68e216720a9c/workstations-review/final-review-20261019/07-vendor-detail-after-inspection.png)

## Validation

Fresh `npm run verify`, `npm test`, `npm run test:db-artwork`, and
`npm run test:browse-visual` pass. The verifier includes the production build
and Pages artifact checks. The full workstation/vendor harness passes 114
captures, including all 15 vendor details with the new hero/provenance checks,
both themes, narrow and breakpoint layouts, keyboard navigation, failed art,
and real native 200% zoom. The full 92-frame baseline comparison passes with
zero differences and no baseline updates; all 92 baseline hashes are unchanged.
Existing October 18 acceptance remains dated history; its screenshots are
not used as fresh audit evidence.

The generated-output audit already passes: all 46,636 JSON files are
byte-identical to the accepted branch at the start of this review. Repository
data validation and enrichment floors pass. The optional broad-control check
is skipped because the sibling extractor repository is absent.

Fresh manual inspection includes the nine numbered audit images and a cropped
inspection of the freshly captured mobile vendor detail. Automated capture count
is not a claim that every matrix frame was personally inspected. No remaining
blocking finding was identified in the reviewed scope.

## Limits and handoff

Screenshot inspection and targeted keyboard/zoom checks establish their stated
scope, not full accessibility compliance or a screen-reader audit. Recorded
vendor inventory fields do not prove live stock or acquisition behavior. No new
artwork is added and no missing description is inferred.

Evidence directory:

`C:/Users/mitch/.codex/visualizations/2026/10/16/01a14637-a7d7-7761-ac09-68e216720a9c/workstations-review/final-review-20261019/`.

The next integration step, if authorized, is a local fast-forward of main and
verification in the main checkout. That step is separate from this review.
The successful production build and tests in this receipt ran in the isolated
review checkout; they do not claim that a post-merge main build has occurred.
