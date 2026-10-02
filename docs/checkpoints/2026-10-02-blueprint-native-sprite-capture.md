# Blueprint native Sprite capture — October 2, 2026

This dated receipt records the approved exact-lookup investigation, manual
58-target capture, attended connection, validation, restoration, and current
roadmap update. The user subsequently requested admin access and a progression
skip because the copied character could not yet open the build menu.
The [October 1 checkpoint](2026-10-01-blueprint-artwork-capture.md) and other
historical receipts retain their original claims.

## Verified native result

The matching isolated client/server pair is 1.1.13. Attempt 08 completed one
manual capture with managed checkpoint exit 0:

| Measure | Count |
| --- | ---: |
| Frozen targets / exact runtime prefab-GUID matches | 58 / 58 |
| Icon GUIDs unchanged from the earlier native snapshot | 58 |
| Distinct icon GUIDs / distinct Sprite names | 57 / 57 |
| Resolved Sprite names / unknown rows | 58 / 0 |
| Client cache owners / default-world cache owners | 7 / 0 |
| Current curated names agreeing / differing | 49 / 5 |

The target manifest SHA256 is
`4d73d2f8e639d1a5b8d91e11fb7d5106346166da5b0292ba61721a7a40f0441c`.
The final snapshot SHA256 is
`d080ea52202cbd4319156cf593ed11d08a527b8e05cd39ee7c3410ddd0a9cea2`.
The captured DLL SHA256 is
`1006162aed00a33407a6fed52340a8cc3f8ea72b0ad18d39552e2d76691c994a`.

The resolver uses existing `ManagedAssetReferences.AssetLookup` caches and
probes only the frozen targets' icon GUIDs. It avoids the unloadable UI Singleton
wrappers, requests no asset loads, and rejects conflicting names, non-Sprite
objects, mismatched identities, duplicates, overwrites, and inconsistent counts.
Its cache-owner query is bounded at 4096 owners per world and disposed after use.

## Attended setup and intermediate evidence

- A text-only search of the 57 prior icon GUIDs in existing asset metadata found
  one BlueprintDataComponent GUID match and no Sprite destination. It did not
  establish PNG ownership.
- Attempt 06 could not connect: the localhost client selected LAN transport,
  while the server used Steam IPv4 transport. Cleanup completed with exit 1.
- Attempt 07 verified the owned UDP socket and connected with LAN Server
  unchecked. Five cache owners were accessible; all 58 rows were
  `asset-not-loaded`. The manual dump succeeded and the harness closed the client
  during its planned collection/shutdown sequence; the logs show no capture crash.
- Attempt 08 added only the observed character identity to the copied save's
  admin list. The operator used `AdminAuth`, `CompleteJournalQuests 50`, opened
  the build menu, then issued `extract_dump` once. The operator confirmed that
  journal completion enabled the menu without unlocking every build-menu entry.
  Seven cache owners then yielded all 58 Sprite names.

Journal completion changes progression and can grant rewards. Those side effects
were not enumerated. The raw checkpoint's `recipeUnlocks=0` counter describes
automated activity; it must not be read as proof that the operator's journal
command granted no unlocks. No blanket research/V Blood command was observed.
No character was created, and KindredCommands was not deployed.

## Artwork findings retained for later review

Five curated names differ from the captured runtime names:

| Prefab | Runtime Sprite name suffix |
| --- | --- |
| `TM_Castle_Floor_Jewelcrafting01` | `Floor_JewelCrafting02` |
| `TM_Castle_Floor_Jewelcrafting02` | `Floor_JewelCrafting01` |
| `TM_Castle_Wall_Tier02_Stone_Pillar` | `CastlePillar01` |
| `TM_CraftingStation_SimpleCraftingBench` | `SimpleWorkbench` |
| `TM_RefinementStation_Sawmill_Small` | `Sawmill` |

All suffixes above follow `Stunlock_Icon_Structure_`. The two wood entrances
share `Stunlock_Icon_Structure_CastleWallTier01WoodEntrance` and its icon GUID.
The stone BP resolves to `Stunlock_Icon_Structure_CastleGate01`; the stone TM
resolves to `Stunlock_Icon_Structure_CastleWallTier02StoneEntrance` with a
different icon GUID. Existing Sprite/Texture2D basename matches and file hashes
are retained separately. This pass does not promote those files or revise the
54-entry curated manifest, evidence labels, public artwork, or acquisition claims.

## Verification and preservation

The Release build passed with the same five existing warnings. Sixteen target
contracts and ten tests linked to the production cache/capture code passed,
along with managed JSON binding and isolation checks. Native output independently
passes exact target identity, unchanged icon GUID, one-shot, conflict, schema,
count, and snapshot-hash checks.

`npm run verify` passed after the guidance update, including TypeScript,
shortcode, generation, data/threshold/control, production-build, and artifact
checks. Existing enrichment coverage/low-signal notices and stale Browserslist
data remain warnings. No application or artwork change required new visual
baselines; this receipt proves cached Sprite identity, not a pixel capture of
every build-menu entry.

Native checkpoints preserved the website HEAD
`46b9c93cee3965ce820dc6e357fb17d41b7d64cc` and original extractor HEAD
`584359b7c54e58631512803c8c16e9123d7c41be`, clean worktrees, and index hashes.
Original server/client seed files and restored plugin inventories match their
recorded hashes. No game processes or cleanup errors remain. Only this receipt
and the active roadmap are intentionally edited afterward; website code, data,
artwork, historical receipts, local main, and the original extractor are preserved.

Evidence is retained outside the checkout under
`C:\Users\mitch\.codex\visualizations\2026\09\30\01a0f347-a14d-77f1-9cf0-5f6b3fd2d4af\blueprint-icons-capture`:
`manual-lookup-20261002` contains source/API/build/test evidence and attended setup
notes; `live-capture-attempt-06`, `07`, and `08` contain raw receipts, snapshots,
analyses, and copied harness logs beside their receipts. Attempt 08 also contains
`sprite-asset-comparison.json` and independent restoration verification.

The setup notes retain a future KindredCommands profile candidate, pinned local
DLL/dependency details, and the author's documented
[player unlock command](https://github.com/Odjit/KindredCommands/blob/main/README.md).
Its compatibility and deployment are not established by this pass. A later
artwork correction or enrichment task requires a separate instruction.
No push, PR, merge, or publication occurred.
