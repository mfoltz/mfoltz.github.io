# Readability cleanup and prefab reader rollout

22 September 2026. Implementation on `codex/readability-and-prefab-reader`, based on `cc461d186c`. Review captures remain separate from accepted visual baselines.

## Result

The shared interface now puts browsing and record content closer to the arrival view. Following approval of the AmbientLightning prototype and its folding behavior, the document reader is enabled for every prefab with a repository component snapshot. Collections retain their directory view. Identity-only records explicitly report that a component snapshot is unavailable.

- Home exposes all nine gameplay sections, technical references, and a working search form.
- Database navigation and the /db breadcrumb resolve to a real directory.
- Ctrl+K focuses search both when arriving and when already on the search page.
- Exact GUID/name search finds the prefab and gameplay representations; exact records rank ahead of containing collections.
- Mobile filters collapse on demand, preserve active-filter summaries, and expose selected state to assistive technology.
- Detail pages have one record H1. Repeated paths, generic prose, oversized technical headers, and surplus browse metadata have been reduced.
- Source/provenance is disclosed on demand. Recipe names wrap, NPC portraits use a larger display size, and unresolved ability parameters have explicit explanations.
- The reference generator preserves multiline bitmasks, links prefabs to all database categories, and deduplicates system references by destination.
- Browse indexes exclude full detail payloads and source text.

## Reader contract

The reader uses a continuous monospaced document, source-order component outline, mobile jump menu, folding, wrap control, component definition links, source/component copy actions, and source download links. Search identifies matching components and opens their content; previous/next navigates between matching components, rather than every individual text occurrence.

The AmbientLightning sample retains both distinct snapshots:
- Repository Markdown: NetSnapshot[4] = 176.
- Supplied text: NetSnapshot[4] = 178.

The supplied file is preserved unchanged in `data/reference-samples/ambient-lightning-light.txt`. SHA256: `28a7d13ed6a5437d208f90043a51963fe5d5536bf848ec26df4ef23065ecc073`. The game build and original capture date remain unknown. The directory name is not treated as verified version evidence. Neither snapshot overwrites the other.

In that sample, all 22 components, four tag-only components, 28 NetSnapshot entries, four SnapshotFrameChangedBuffer entries, and all four bitmask lines remain represented. Complete original source is independently available, including any content outside the parsed component presentation.

## Prototype folding verification

The follow-up pass uses an explicit list of seven network-state components: Networked, UpToDateUserBitMask, FrameChanged, NetworkSnapshot, NetworkId, NetSnapshot, and SnapshotFrameChangedBuffer, all under ProjectM.Network. These begin folded in both sample snapshots. Other components remain open, including unfamiliar buffers or components in the same namespace. Values such as zero, false, and empty references do not influence the default.

Folded buffers show their actual entry count (28 and 4 for this sample); other folded rows say Network state. The four tag-only components use compact, non-expandable rows with definition and copy actions. Expand all, Collapse all, source copying, and component order are preserved. Search opens matching content and component jumps also reveal their targets, including keyboard focus for tag rows.

The folding follow-up passed TypeScript, five targeted reference/reader tests, a production rebuild, and artifact verification. Browser checks confirmed 11 open components, seven folded components, and four compact tags in both snapshots. Expand all opens all 18 field-bearing components; Collapse all closes them while the tags remain visible. Search reveals folded buffer values, outline/mobile jumps open their targets, and tag search, keyboard focus, and copy actions work. No page-level overflow was present at 390 pixels. Follow-up captures: prefab-folding-desktop.jpg, prefab-tags-desktop.jpg, and prefab-tags-mobile.jpg in implementation-review. Build log: .codex-tmp/dev-review/prefab-folding-build.log.

## Corpus rollout

The wider rollout recognizes both legacy `relref` headings and newer direct component links. Definition paths are normalized to the generated routes and remain available after the 120-component relation preview limit. Markdown-only blank padding is removed from the reading view; complete original source is retained independently with a SHA256, copy action, and download link.

Bold array indices, bitmask continuations, buffer truncation notices, and opaque exporter output stay inside their component rather than becoming false component headings. Explicit "isn't handled" notices retain the named component and its source message. Buffer counts describe recorded entries; where the exporter includes a truncation notice, the hint says "recorded" rather than implying a complete buffer. Some source notices disagree with the entries actually present; the reader preserves that evidence without rewriting it.

The explicit folding list now also covers `SyncToUserBitMask`, `SyncToUserBuffer`, `NetworkInterpolated_Shared`, and `Unity.Physics.Systems.StaticPhysicsWorldBodyIndex`. It includes 41 individually reviewed `ProjectM.Network.Snapshot_*` byte-buffer types whose declarations expose `public byte Value`. This is an exact allowlist, not a namespace/prefix heuristic. Gameplay recipe, inventory, stats, transform, and other unfamiliar buffers stay open. `NetworkedTimeout` stays open because it includes usable timeout configuration.

Known empty buffers say "Buffer · 0 entries". Known empty tags say "Tag". Other empty component dumps say "No recorded fields", without claiming that the component is a tag or has no fields in its declaration. Source order, manual folding, search reveal, copying, and jumps are retained.

Generation checks the reader's component order against the structured source and rejects duplicate jump anchors. All 23,505 component snapshots have distinct reader pages. These checks cover 736,670 component blocks and 1,294 distinct types. The defaults fold 107,001 populated component blocks. The source includes 13,200 buffer export notices, which remain attached to their respective buffers.

There are also 1,253 Markdown identity stubs and one registry-only identity. These 1,254 records retain an explicit unavailable-snapshot state, without a zero-component claim or empty reader. The 81 collections remain collection pages.

A case-only identity collision was discovered during the coverage check: `Dynamic_Gloomrot_Farm01` (GUID -805017052) has a component dump, whereas `Dynamic_GloomRot_Farm01` (GUID -1425711457) has only a registry identity. Previously the latter overwrote the former's normalized route. The dump keeps `/prefabs/dynamic-gloomrot-farm01`; the registry identity receives `/prefabs/dynamic-gloomrot-farm01--guid-n1425711457`. Its aliases do not replace the dump's aliases. Both retain their separate names and GUIDs.

## Rollout verification

- Full `npm test` passed, including the added direct-link, export-notice, conservative-default, empty-buffer, and six-source fixture regressions.
- Full `npm run verify` passed. After the final identity-only and collision fixes, TypeScript and the affected reference/search generation, data validation, production build, and artifact checks passed again.
- No component-order discrepancies or duplicate reader anchors were found across the corpus.
- Original source payloads remain outside browse/search indexes. Generated route uniqueness, both colliding identities and their GUIDs, and preservation of the dump's aliases passed explicit checks.
- All source payloads for eight sampled records (including both AmbientLightning snapshots) match their files byte for byte and match their declared SHA256.
- Browser checks cover the NPC (149 components, 9 folded), workstation (95, 10 folded), item (30, 8 folded), recipe (14, none folded), ability (34, 8 folded), and largest source file (12, none folded).
- The workstation's six gameplay recipe entries stay open; its 104-entry serialized recipe snapshot starts folded. Searching its export notice reveals it; mobile jumps reveal and focus their targets.
- A definition after the NPC's 120th component opens successfully. The large gameplay composition buffer retains all 251 recorded entries and its source notice.
- At 390 pixels, the workstation and large-buffer views have no page-level overflow. Wrapping on and off both retain this boundary. Desktop checks used 1440 pixels.
- The workstation's displayed original source has SHA256 `b2fc6de497fdca8d6bf5f76083905642dfccd52fcab3c92eaacb3d3390f77660`, exactly matching the file and generated snapshot. The copy action reports success, but this pass's browser clipboard API returned an earlier clipboard value, so clipboard-byte fidelity is not claimed for that sample. Native download completion remains unverified.
- Final-browser checks confirmed the formerly overwritten dump displays 12 components under GUID -805017052 and the separate registry page displays GUID -1425711457 with an unavailable snapshot.
- Browser error logs were empty during the representative reader checks. The preview is left on the workstation with viewport overrides reset.
- Both AmbientLightning snapshots still show 22 components, with 11 field-bearing components open, seven folded, and four compact tags. Switching to the supplied dump retains its distinct NetSnapshot[4] = 178 value.
- Source corpus and approved artwork have no changes. The supplied dump and unrelated enrichment file retain their hashes.

Rollout logs: `.codex-tmp/dev-review/prefab-rollout-tests.log`, `prefab-rollout-verify.log`, `prefab-rollout-final-data.log`, and `prefab-rollout-final-build.log`. Captures in `implementation-review/` use the `rollout-` prefix and cover workstation, gameplay recipes, NPC, recipe, large buffer, and identity-only pages.

## Verification of the earlier cleanup

- Full `npm test` passed.
- Full `npm run verify` passed.
- After final responsive/source-scope refinements: TypeScript and the five fidelity/search regression tests passed; reference/search generation, data validation, production build, and artifact verification were rerun.
- The existing enrichment coverage targets still produce warnings; their required floors pass. Browserslist also reports an older caniuse-lite dataset.
- Browser checks used the local production preview at 1440 x 1000 and 390 x 844, with dark and light themes.
- Verified home form submission, /db breadcrumb, exact GUID/name search, shortcut focus on repeated use, mobile menu, filter disclosure/active state, source switching, source disclosure, folding, search in folded content, next/previous matching component, component jump, wrap mode, GUID copying, and exact dump copying.
- The copied dump's SHA256 matches the supplied file exactly.
- Source download is implemented as a native download link. End-to-end download confirmation remains unverified: the in-app browser did not return a download event, and later blocked a preview navigation with ERR_BLOCKED_BY_CLIENT. No browser-policy workaround was attempted. The final local server still returned HTTP 200.
- The sample reader has no page-level horizontal overflow at 390 pixels, with wrapping on or off. Its first value is around y=752, within the 844-pixel initial viewport. The earlier published-page review placed the first component-field heading around y=3988; this is an indicative layout comparison, not a benchmark.
- Recipe output text is fully visible, source details expand, and sampled recipe/NPC pages expose one H1.
- Before rollout, the adjacent AmbientLightning gameplay-strike prefab retained the existing template, confirming the initial prototype was bounded.

## Compact browse rows and parking point

The final cleanup removes every repeated "Open Record" label from the four shared row templates, covering all nine database sections, all four reference indexes, and global search. The complete row remains a link, with hover feedback and an inset keyboard-focus outline.

A shared `display: block` declaration was overriding the row grids. Removing that override lets recipes, items, abilities, NPCs, and workstations place their existing facts on the right from 768 pixels upward. Facts wrap into a compact line on smaller screens. Rows without facts use the full content width. Other database/reference rows lose the redundant action line, and search keeps the destination path in a bounded secondary column on wide screens.

At a 1,000-pixel viewport, the first Aftershock recipe row decreased from 196 to 140 pixels high (56 pixels, about 29%). At 390 pixels it decreased from 219 to 193 pixels, with craft time, ingredient count, and output count all on one line. Values and source identifiers are retained, including `Craft 0s` on the Ashfolk Helmet recipe.

The responsive check also found long, unbroken technical identifiers clipped inside reference summaries. Shared row wrapping now retains their complete text. The same wrapping applies to long search/filter summaries so exact-identifier searches stay within the viewport.

Parking-point checks:
- Full `npm test` and `npm run verify` passed, including regenerated data, reader corpus checks, enrichment floors, TypeScript, production output, and Pages artifact validation. Existing enrichment-target and Browserslist warnings remain unchanged.
- Browser checks visited every database and reference index at 1,000 and 390 pixels, plus global search at 1,440, 1,000, and 390 pixels. No repeated action label remains. Reference rows were rechecked after the wrapping correction: none of the 144 displayed rows in each reference section overflowed at 390 pixels.
- Recipe facts were also checked at 768 and 1,440 pixels. Whole-row keyboard activation opens the correct detail page, its H1 remains singular, and the focus outline stays visible inside the list surface.
- Mobile recipe filters retain their selected state and active-filter summary when collapsed. Home GUID search returns the expected prefab and gameplay records; repeated Ctrl+K returns focus to search.
- Both AmbientLightning snapshots retain 22 components, seven default folds, and four compact tags. Searching the supplied snapshot reveals its distinct value 178; Expand all and Collapse all affect all 18 field-bearing components.
- The small Sawmill reader retains 95 components and 10 default folds. Its five gameplay recipe entries stay open while its transport snapshot starts folded. The mobile jump opens and focuses that snapshot.
- After the final search-summary CSS fix, the production rebuild, Pages fallback preparation, and artifact verification passed again. The exact long-name query has no page or row overflow at 390 and 1,440 pixels; light-theme search and recipe rows were visually reviewed. Final browser error logs were empty after reload.
- At the local parking point, the preview was left on `/db/recipes` in dark theme, with the query cleared and viewport overrides reset. The user subsequently approved committing the reviewed work and pushing the feature branch.

Before committing, full `npm run verify` passed again on the final implementation; log: `.codex-tmp/dev-review/pre-commit-verify.log`. The supplied dump retains its original CRLF bytes in Git, with a scoped whitespace attribute recognizing those line endings. The pre-existing enrichment file remains excluded from the commits.

Logs: `.codex-tmp/dev-review/parking-point-tests.log`, `parking-point-verify.log`, and `parking-point-final-build.log`. Review captures use the `row-cleanup-` prefix in `implementation-review/`.

## PR visual capture follow-up

PR #144's Visual Review check stopped because the prefab source capture still targeted the previous template's `#source-compatibility` navigation link. The reader now uses its toolbar's Source details link to open `#reader-source`. The regular `npm run verify` command does not run the visual capture pack, so the earlier verification did not exercise this selector.

The capture now uses the reader's current control. The item and workstation source captures explicitly open their Source & provenance disclosures before jumping to them. Each source interaction waits for the revealed content to be visible before taking a screenshot, preventing a closed disclosure from silently producing an unhelpful capture.

Validation: all 11 visual-review self-tests passed; all six focused source captures completed across dark and light themes; and the complete 38-capture comparison finished successfully with no missing baselines. Full `npm run verify` then passed, including data generation, validation, production build, and Pages artifact checks. Existing enrichment-target and Browserslist warnings remain unchanged. The pack reports 38 visual differences and uses the existing CI `--allow-diffs` policy. These captures do not approve or replace baselines. The focused source screenshots were also inspected for visible source content.

Local evidence: `.codex-tmp/visual-review/pr144-source-smoke/`, `.codex-tmp/visual-review/pr144-full/`, and `.codex-tmp/dev-review/pr144-source-captures.log`, `pr144-visual-full.log`, and `pr144-verify.log`.

## Review evidence

Screenshots and the original review are local artifacts outside the repository:
`C:/Users/mitch/.codex/visualizations/2026/09/22/01a0ca20-4196-7692-9b50-d6267ad8f810/`

Screenshots document the browser-checked states during implementation. Final wording, repeated item-slug removal, and the native download-link refinement followed those captures. Implementation screenshots are in `implementation-review/`: home, GUID search, reader desktop/mobile/light, mobile items, desktop recipe, light-theme component, and mobile NPC. They are review captures, not accepted test baselines.

Verification logs are in ignored `.codex-tmp/dev-review/`:
- `readability-tests.log`
- `readability-verify.log`
- `readability-reference-final.log`
- `readability-final-build.log`

## Boundaries

Approved artwork and source corpus files are unchanged. The pre-existing untracked `data/enrichment/blueprint-unlock-map.json` is unchanged (SHA256 `e75a57c71e8dc9228cc0d79cd18f44fdb664d8340c4dc706f1b7d673ec42b3dd`).

Broader component declaration/query/system reordering, sparse-data enrichment, and comparisons between snapshots remain later work. The visual checks are representative, not an exhaustive accessibility, contrast, screen-reader, browser, or record audit.
