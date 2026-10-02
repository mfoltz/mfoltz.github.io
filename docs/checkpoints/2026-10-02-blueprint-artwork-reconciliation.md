# Blueprint artwork reconciliation — October 2, 2026

The user approved reconciliation of five associations that differed from the
native capture and four held entrances. This pass reuses the retained capture
and existing asset dump. It performs no extraction, installation repair, game
launch, acquisition inference, publication or adjacent enrichment.

## Exact evidence and changes

The complete 58-target native capture is pinned unchanged in
`data/enrichment/blueprint-icon-capture.json`, SHA256
`d080ea52202cbd4319156cf593ed11d08a527b8e05cd39ee7c3410ddd0a9cea2`.
Git preserves its original bytes and line endings. All 58 current prefab/GUID
joins validate; the capture contains 57 distinct icon GUIDs/Sprite names and no
unknown rows. Historical capture receipts retain their original claims.

Nine records require the exact captured prefab, current GUID, icon GUID, Sprite
name, Sprite export hash and original texture hash. Each Sprite must match one
unique visible RGBA crop of its texture. Transparent RGB is excluded from the
pixel comparison; both original PNG byte hashes remain mandatory.

| Record | Accepted Sprite name, after `Stunlock_Icon_Structure_` |
| --- | --- |
| `TM_Castle_Floor_Jewelcrafting01` | `Floor_JewelCrafting02` |
| `TM_Castle_Floor_Jewelcrafting02` | `Floor_JewelCrafting01` |
| `TM_Castle_Wall_Tier02_Stone_Pillar` | `CastlePillar01` |
| `TM_CraftingStation_SimpleCraftingBench` | `SimpleWorkbench` |
| `TM_RefinementStation_Sawmill_Small` | `Sawmill` |
| `BP_Castle_Wall_Tier01_Wood_Entrance` | `CastleWallTier01WoodEntrance` |
| `TM_Castle_Wall_Tier01_Wood_Entrance` | `CastleWallTier01WoodEntrance` |
| `BP_Castle_Wall_Tier02_Stone_Entrance` | `CastleGate01` |
| `TM_Castle_Wall_Tier02_Stone_Entrance` | `CastleWallTier02StoneEntrance` |

The wood pair shares one captured icon GUID and identical Sprite/texture hashes.
Duplicate filenames remain forbidden without that exact shared native identity.
The stone pair uses distinct captured identities. These image links do not
merge build rules or establish unlock/acquisition routes.

The reviewed manifest covers **58 records / 57 public files**: nine
`runtime-sprite-name`, 38 `curated-unique-name-match` and 11 `existing-curated`
records. All 49 unaffected associations retain their original evidence kinds;
all 168 unrelated portrait-map rows are unchanged.

The narrow refresh copies six unchanged Texture2D exports, retires three pinned
superseded images, and preserves 51 existing public hashes. Retirement requires
an approved native replacement and the old file's exact hash. No source PNG is
cropped, recolored or redrawn. The dump texture aggregate and every non-buildable
public icon hash are unchanged. The historical name scout is unchanged; native
overrides validate against the pinned capture before choosing that authority.

## Verification

- `npm test`, `npm run test:db-artwork`, `npm run validate:data` and
  `npm run verify` pass. New tests reject stale GUIDs, duplicate identities,
  unknown/conflicting captures, unsupported sharing, hash changes, missing or
  ambiguous pixel crops and unapproved retirement. Existing commands remain.
- Repeat narrow materialization copies/deletes zero files. All 60 map, review,
  lock and public-image hashes are identical. Blueprint totals remain 1,198,
  linked/unlinked 895/303, edges/sources 932/174, books 72, and Blueprints with
  book links 396. Material counts remain 1,080 recorded, 117 empty and one held
  zero-valued record, with 1,470 positive rows and two held rows.
- Native Chromium artwork checks pass 80 captures across both themes and
  320px/1280px widths. All captures were inspected. Every reviewed image is
  served unchanged; source disclosure, breadcrumbs, browse/search artwork and
  both corrected workstation detail routes pass.
- Existing Blueprint checks pass 54 captures and six interaction runs,
  including combined filters, book-name search, ordering, pagination reset,
  Clear, reload/back, empty/retry states and source/book destinations.
- Existing responsive checks pass 92 captures and their interaction checks.
  Material checks pass four keyboard/navigation/fallback runs, ten captures
  and two native 200% zoom checks. No horizontal document overflow is accepted.
- Before acceptance, native comparison matched 72 established captures and
  changed only the stone-entrance materials detail in both themes. Eighteen
  new native captures had no baseline. All 20 candidates were inspected;
  only those captures were accepted. Final comparison: **92 matched, zero
  changed, zero missing**. All other baseline hashes remain unchanged.

Initial validation caught the old 54-record census and name-scout authority
assumptions; both were corrected using the stronger native contract. A strict
TypeScript optional-value check was fixed. Targeted capture assertions were
corrected for uppercase provenance labels and entrance queries that include
variants; no product behavior was altered. Sandboxed captures used fallback
fonts and were rejected. Authorized native reruns loaded the site's existing
Inter/Cinzel fonts; unrelated visual changes disappeared.

## Local delivery and retained evidence

The evidence commit is `c3c919157f` (785 insertions / 28 deletions). The artwork
commit accompanies this receipt; its exact SHA and diff size are recorded in the
external final receipt to avoid a self-referential commit identifier.

Evidence is retained under
`C:\Users\mitch\.codex\visualizations\2026\09\30\01a0f347-a14d-77f1-9cf0-5f6b3fd2d4af\blueprint-icons-capture\artwork-reconciliation-20261002`:
before snapshots, per-record pixel proof, deterministic hashes, font guard,
native visual reports, inspected contact sheets, current browser screenshots,
checks and command logs. Legacy sibling screenshots are excluded from the
selected browser evidence. Historical native logs and restoration receipts
remain in their original artifact directories.

Local main remains `970eef1af8480456dea9c24c6f8658330f23b9c2`. Work stays on
`codex/blueprint-icons-capture`; the extractor checkout and live-game state are
untouched by this pass. No push, PR, merge or deployment is performed.

Remaining warnings are the existing NPC/Blueprint/quest/Buff/itemset enrichment
coverage warnings, stale Browserslist data, and React server-render test warnings.
Blueprint display text remains 8/1198. These warnings do not authorize new
extraction, broader artwork, localized text or the later item-description audit.
