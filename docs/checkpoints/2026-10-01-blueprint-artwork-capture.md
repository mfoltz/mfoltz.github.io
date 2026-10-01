# Blueprint artwork and capture preparation — October 1, 2026

This checkpoint records the approved local image-limit change and targeted
capture preparation. It does not authorize publication or a game install update.
The branch is `codex/blueprint-icons-capture`, based on the completed materials
pass at `f7824d6de36e33c007af124c766f33fdf9d69771`. Local main remains
`970eef1af8480456dea9c24c6f8658330f23b9c2`.

The first commit, `8b81610799`, pins the reviewed identities and source hashes.
The commit containing this checkpoint materializes and verifies that manifest.
The external receipt records both final commit IDs and their verification logs.

## Delivered images

- Replace the workstation-only 25-image cap with an explicit reviewed manifest.
- Preserve the 13 existing images and add 41 original Texture2D PNGs: 8 stairs,
  29 floors, and 4 walls/pillars. All 54 public images match pinned source bytes.
- Preserve exact prefab/GUID joins. The added associations are identified as
  `curated-unique-name-match` in source disclosure; runtime ownership is unproven.
- Keep the four ambiguous entrance records without images. Reject ambiguous
  names, stale GUIDs, duplicate links, changed source bytes, and extra files.
- Provide a narrow refresh command. Its repeated run copies/deletes zero files.

## Preserved evidence and acceptance

The corpus remains 1,198 Blueprints, with 1,080 recorded material lists and 1,470
positive rows; 117 empty lists and one record with two zero-valued rows retain
their explicit states. Unlock evidence remains 895 linked / 303 unlinked records,
932 edges across 174 sources, 72 linked books, and 396 Blueprints with book links.

Repeated generation is deterministic. All 859 unaffected input/public-asset
hashes and eight other database index hashes remain unchanged. Only the 41 new
Blueprint artwork fields differ in detail, browse, and search output.

The full tests, artwork tests, and `npm run verify` pass. Native browser checks
cover the existing Blueprint/material interactions, responsive browsing, and
20 new artwork captures. All 74 visual baselines match after accepting only six
new castle detail baselines. New captures were inspected in both themes at
320px and desktop widths; the existing native 200% zoom checks also pass.

## Prepared capture and execution stop

An isolated extractor source copy contains a compiled, reviewable patch for 58
exact prefab/GUID targets, including all four ambiguous entrances. Nine parser
contract checks pass. The mode records managed icon asset GUIDs and cached Sprite
names, preserving unknowns and rejecting conflicts. It requests no asset loads,
exports no unrelated snapshots, and permits no automatic connection/capture retry.

Live capture is held: the isolated client is 1.1.10 and the server is 1.1.13.
The deployment guard rejects that pair. No game launch, deployment, extraction,
install update, or download occurred. The original extractor checkout remains
clean at `584359b7c54e58631512803c8c16e9123d7c41be`.

Logs, original screenshots, review sheets, checks, source patch, target list,
compiled artifact hashes, and the final receipt are retained outside the checkout
under `C:\Users\mitch\.codex\visualizations\2026\09\30\01a0f347-a14d-77f1-9cf0-5f6b3fd2d4af\blueprint-icons-capture`.
Historical receipts remain intact. No push, PR, merge, or deployment is included.
