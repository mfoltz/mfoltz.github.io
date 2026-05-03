# Aurelia Journal/UI Scout

Source file: `C:\Users\mitch\source\Repos\Aurelia\Patches\VBloodTrackerPatches.cs`

Scope: read-only scout for journal/tutorial extraction guidance. No canonical enrichment, generated data, schema, UI, or asset files were edited.

## Stop condition

The file does not provide owned journal/tutorial localization keys or a canonical text extraction path. It mostly mutates live UI objects and writes runtime display strings directly. Stop before canonical enrichment.

It is still useful as a runtime guidance note because it shows UI readiness gates, journal row cloning behavior, and PrefabGUID joins from the VBlood menu/tree and ghost-buff systems.

## Findings

| Classification | Finding | Evidence | Extraction guidance |
| --- | --- | --- | --- |
| UI-gating lead | `AchievementsSystem.OnUpdatePostfix` is gated by initialization, connection, config, and `TrackVBloodSource.HasValue()` before touching journal UI. It returns if the journal layout object is not present. | Lines 151-216 | A safe journal/tutorial UI probe should wait for player/session state and the actual journal layout object before reading or cloning rows. |
| UI-gating lead | Journal rows are located under `HUDCanvas(Clone)/JournalCanvas/JournalParent(Clone)/Content/Layout`. The code treats child `1` as the original tracker row and child `0` or `1` as the template depending on child count. | Lines 159-181 | This gives the concrete object path and child-index assumptions to verify when probing journal/tutorial rows. Treat the indexes as fragile runtime observations, not stable data schema. |
| UI-gating lead | Template behavior differs by active state: when the candidate template is inactive, the comment says completed tutorials can use it as a template; when active, the code clones the original tracker row instead, with a comment that tutorials are active. | Lines 171-198 | Reusable pattern: prefer an inactive completed/tutorial template when available, and fall back carefully when active tutorial rows occupy the template slot. |
| UI-gating lead | `VBloodTrackingMenuMapperSystem.OnMenuEnabled` sets `_menuReady`; only after that does the achievement update call `VBloodTrackingMenu.OnUpdate()` and `GetVBloodsPositionResponseSystem_...Execute()`. | Lines 249-260 and 367-377 | Use the menu-enabled hook as a readiness signal for VBlood UI/tree mapping. This is a UI-readiness lead, not a content extraction lead. |
| prefab/entity join lead | The VBlood menu tree path is hard-coded down to `TreeParent`, then chunk entries are walked to find `VBloodTrackingUnitEntry.UnitPrefabGuid`. | Lines 219-238 and 474-523 | Useful for joining visible VBlood UI entries to PrefabGUIDs. It does not explain journal/tutorial localization ownership. |
| prefab/entity join lead | Ghost-buff spawn/update systems cache `VbloodGhostBuff_Shared` entities by `Buff.Target` PrefabGUID, then trackers reuse that cache for destroy time and target entity state. | Lines 397-464 and 648-733 | Useful runtime pattern for joining ECS buff entities back to unit prefab identities and respawn timing. This is adjacent evidence for entity joins, not journal/tutorial text extraction. |
| direct extraction lead | `AchievementEntry` cloning exposes the row lifecycle and component shape: clone the template under the original parent, set sibling index `2`, deactivate subtask/reward/button children, cache `AchievementEntry`, quest text, and then force distance/status text. | Lines 528-645 | Directly useful for understanding how a journal row can be instantiated safely. Not sufficient for canonical extraction because the populated text is synthetic runtime text. |
| localization lead | The only explicit `LocalizedText` access is on the reused claim button, where the code calls `ForceSet("Clear")` and also sets TMP text to `Clear`. VBlood names come from a hard-coded `PrefabGUID` to string map. | Lines 78-149 and 572-579 | Weak localization lead only. It confirms a `LocalizedText` component can be present on row controls, but this patch overwrites text instead of discovering source keys. Do not treat these strings as localization authority. |
| not useful | The `IsVBloodEntryAvailable` and `GetPlayerLevel` patches are commented out debug/override code. | Lines 379-395 | Ignore for extraction. It is a discarded unlock/readiness experiment, not evidence of source ownership. |
| not useful | Direction, distance, respawn, marker-buff, and cleanup helpers are runtime presentation/behavior code. | Lines 736-918 | Useful for the mod feature, but not for journal/tutorial extraction except as confirmation that the patch writes synthetic UI state. |

## Practical conclusion

Use this file as a UI-gating and runtime join precedent only. The safest reusable pattern is:

1. Wait for initialized, connected player/UI state.
2. Wait for `HUDCanvas(Clone)/JournalCanvas/JournalParent(Clone)/Content/Layout`.
3. Detect whether the candidate tutorial/template row is inactive or active before cloning.
4. Clone under the original journal parent and strip irrelevant child controls before activating.
5. Join VBlood UI rows to `PrefabGUID` through `VBloodTrackingUnitEntry.UnitPrefabGuid` only after the VBlood menu mapper is enabled.

Do not use this file to populate canonical journal/tutorial enrichment. It lacks localization key ownership, and its names/text are hard-coded or runtime-generated.
