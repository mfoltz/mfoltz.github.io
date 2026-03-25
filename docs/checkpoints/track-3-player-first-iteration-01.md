# Track 3 Player-First Iteration 01

## Goal

Prove the Track 3 loop on a narrow player-facing pass:
improve the five tracked detail pages, let the compare workflow catch the movement, accept the result, refresh baselines, and confirm the pack settles back to clean.

## What Changed

- Rewrote the generated player-facing copy for the tracked Blood Essence item, Blood Coating item, Apply Blood Coating ability, Boneguard Boots recipe, and Clive the Firestarter NPC routes.
- Cleaned up first-screen detail-page presentation by filtering low-signal chips, hiding default or negative quick facts, and keeping usage above linked relations where that reads better for players.
- Moved several raw prefab-oriented fields out of player-facing sections and kept them in secondary provenance surfaces instead.
- Renamed the tracked coating ability and linked item effect copy so the pair now reads as `Apply Blood Coating` instead of surfacing raw `Ability Group` wording.

## What Visibly Improved

- The targeted detail pages now open with clearer player-readable explanations instead of generic archive phrasing.
- The coating item and ability pair now share a cleaner naming and effect story, which makes the link between the consumable and the ability easier to scan.
- The recipe page now communicates both crafting and repair context in the hero copy instead of making players infer that from lower sections.
- The NPC page now reads like an encounter reference instead of a thin runtime dump, even with limited enrichment.
- First-screen badges and facts feel less noisy because default technical values are no longer competing with the player-facing summary.

## What Still Feels Weak

- Technical player abilities without tooltip enrichment still rely on fallback prose, so some pages remain more structural than truly instructional.
- NPC detail quality is still constrained by thin display enrichment; encounter copy is better, but deeper player guidance is still limited.
- Search results remain sensitive to description changes, so copy-focused passes can still create large result-page diffs even when the route pack itself is intentionally narrow.

## What The Compare Pack Caught

- The first compare run surfaced exactly the expected player-first movement: the five tracked detail pages changed in both themes.
- `search-blood-db` also changed in both themes because the new item and ability descriptions altered result snippets and page height. This was accepted as intentional coherence spillover from the detail-first pass.
- The developer-sanity pack did not move, which confirmed that the pass stayed scoped to player-facing copy and detail-page presentation.
- After `npm run visual:baseline`, a second `npm run visual:compare` returned clean, which confirmed the loop worked end to end.

## Next Swing

Apply the same loop to the developer-facing review surface:
focus on reference-detail usefulness, provenance clarity, shell consistency, and making the secondary source layers feel intentionally helpful rather than merely present.
