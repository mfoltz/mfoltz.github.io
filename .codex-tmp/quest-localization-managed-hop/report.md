# Server Runtime Quest Snapshot Dump Result

## Result

Canonical promotion remains stopped.

The server-only harness now reaches startup, loads `VRising.DataExtractor`, and completes the targeted server dump, but `QuestsServer.json` is empty:

`C:/Users/mitch/source/Repos/VRising.DataExtractor/.codex/runs/20260503-140018/vrising-dataextractor-server-quest-snapshot/snapshots/VRising.DataExtractor/QuestsServer.json`

The decisive evidence is component coverage from the successful run:

`ManagedAchievementData=0`, while server-side non-managed quest/subtask components were present as `AchievementData=35` and `AchievementSubTaskData=82`.

That means this server runtime path currently does not provide the actual ownership hop needed for quest title/flavor promotion:

`Journal prefab/entity id -> ManagedAchievementData.Quest.Key/Text + ManagedAchievementData.Flavor.Key/Text -> Bloodcraft Localization/English.json text`

## Run Evidence

| Evidence | Finding |
| --- | --- |
| Profile | `vrising-dataextractor-server-quest-snapshot` |
| Generated config | `C:/Users/mitch/source/Repos/VRising.DataExtractor/.codex/harness.quest-snapshot.20260503-135356.generated.json` |
| Successful receipt | `C:/Users/mitch/source/Repos/VRising.DataExtractor/.codex/runs/20260503-140018/vrising-dataextractor-server-quest-snapshot/receipt.json` |
| Server install | `C:/Program Files (x86)/Steam/steamapps/common/VRisingDedicatedServerCodex` |
| Persistent output | `C:/Users/mitch/source/Repos/VRising.DataExtractor/.codex/persistent-data/20260503-140018/vrising-dataextractor-server-quest-snapshot/VRising.DataExtractor` |
| Snapshot copy | `C:/Users/mitch/source/Repos/VRising.DataExtractor/.codex/runs/20260503-140018/vrising-dataextractor-server-quest-snapshot/snapshots/VRising.DataExtractor` |
| Startup marker | `SuccessfulStartup` |
| Dump marker | `VRising.DataExtractor[2.0.0] dump complete (Server)` |
| Prefab catalog | Bloodcraft `PrefabGUIDs.cs` loaded with `23487` entries |
| Targeted scan | `8900` prefab entities harvested; `3` no-safe-entity prefab GUIDs; `0` skipped lookups |
| Component coverage | `ManagedAchievementData=0`, `AchievementData=35`, `AchievementSubTaskData=82`, `AchievementSubTaskEntry=0` |
| Output files | `AbilityGroupsServer.json`, `ItemsServer.json`, `NpcsServer.json`, `RecipesServer.json`, `QuestsServer.json` |
| Quest output | `QuestsServer.json` length `4`, content `[]` |

## Exporter Correction Applied

The first corrected server run reached gameplay data readiness but failed before writing snapshots because raw `AchievementSubTaskData` contains a non-JSON-safe `ProjectM.Shared.ConditionBlob&` field. That was a narrow exporter bug, not a startup or harness failure.

Applied follow-up correction in `C:/Users/mitch/source/Repos/VRising.DataExtractor`:

- `VRising.DataExtractor/DatabaseBuilder.cs` now projects `AchievementSubTaskData` through a safe shape instead of serializing the raw component.
- The projection keeps subtask evidence separate and includes only fields consumed by `QuestSubTaskModelBuilder`: `TaskTitle`, `PrefabReference`, `TechReference`, `RequiredCompletedCount`, `ConditionId`, `ProgressType`, and `ProgressLinkType`.

Build checks:

- `dotnet build C:/Users/mitch/source/Repos/VRising.DataExtractor/VRising.DataExtractor/VRising.DataExtractor.csproj --no-restore -v:minimal` passed with existing warnings and zero errors.
- The harness PowerShell build in the successful run also passed with existing warnings and zero errors.

## Blob Diagnostic Follow-Up

Reviewed blob-debugging patterns from:

- `C:/Users/mitch/AppData/Local/Temp/MetadataAsSource/.../EntityDebuggingUtility.cs`
- `C:/Users/mitch/source/Repos/Bloodcraft/Core.cs`
- `C:/Users/mitch/source/Repos/Aurelia/Core.cs`
- `https://github.com/Odjit/KindredExtract/blob/main/EntityDebug.cs`

The native `ProjectM.EntityDebuggingUtility` pattern is useful as diagnostic text, not as canonical structured enrichment. Bloodcraft and Aurelia both use it as a guarded entity dump. KindredExtract is a stronger provenance reference for typed extraction: it registers component extractors and special-cases `BlobAssetReference<ConditionBlob>` by checking `IsCreated`, dereferencing `m_data.m_Ptr`, and recording condition `Info` fields while leaving broad conditional traversal cautious.

Applied a narrow diagnostic-only fold-in in `C:/Users/mitch/source/Repos/VRising.DataExtractor`:

- `DumpServerComponentSpotChecks` and `DumpServerComponentArchetypeScout` now preserve the existing structured component capture and also attach a bounded `{ComponentName}DebugDump` string from `EntityDebuggingUtility.DumpComponent`.
- Debug dumps are capped at `12000` characters.
- This does not alter `QuestsServer.json`, canonical enrichment, or model snapshot fields.

Validation run:

- Ephemeral config: `C:/Users/mitch/source/Repos/VRising.DataExtractor/.codex/harness.achievement-subtask-blob-spotcheck.20260503.generated.json`
- Receipt: `C:/Users/mitch/source/Repos/VRising.DataExtractor/.codex/runs/20260503-142309/vrising-dataextractor-server-component-spotcheck/receipt.json`
- Output: `ServerComponentSpotChecksServer.json`
- Result: `82` `AchievementSubTaskData` rows matched, `82` had debug dumps, `82` exposed blob-reference/array text, and `7` included a visible `Info` block inside the bounded dump.

Representative row:

- `PrefabName`: `Journal_SubTask_Kill_RocksWithMaces`
- `ProgressType`: `Kill`
- `ProgressLinkType`: `Custom`
- `AchievementSubTaskDataDebugDump` includes `Condition (BLobAssetReference)`, `Conditionals (BlobArray)`, and an `Info` section whose byte values decode to subtask-oriented names such as `Journal_SubTask_Kill_RocksWithMaces` and `AchievementSubTaskAuthoring`.

Classification: useful diagnostic evidence for blob-backed subtask conditions, still not a promotion source for actual quest title/flavor copy.

## Classification

| Source | Classification | Finding | Promotion status |
| --- | --- | --- | --- |
| Successful server dump receipt | layout/source availability | Server runtime path is operational and writes server snapshot files. | Not promotable because quest rows are empty. |
| `QuestsServer.json` | direct-decode attempt failed | File exists but contains no quest ownership rows. | Stop. |
| Component coverage | direct-decode blocker | `ManagedAchievementData=0`; the required managed ownership component is absent from this server snapshot. | Stop. |
| `AchievementData=35` | source-adjacent | Non-localized quest/achievement ECS data exists server-side. | Not usable for player-facing title/flavor copy. |
| `AchievementSubTaskData=82` | source-adjacent subtask data | Subtask components exist server-side after safe projection. | Keep separate from actual quest title/flavor rows. |
| `ServerComponentSpotChecksServer.json` | diagnostic blob evidence | Native debug dumps expose `AchievementSubTaskData.Condition` blob arrays for subtask rows. | Useful for future subtask-condition interpretation, not quest title/flavor promotion. |
| Bloodcraft `PrefabGUIDs.cs` | source-adjacent | Provides Journal prefab IDs including `Journal_GettingReadyForTheHunt = 560247139`. | Catalog aid only. |
| Bloodcraft `Localization/English.json` | source-adjacent | Provides English GUID/text nodes for expected title/flavor strings. | Text exists but ownership is not proven by the server snapshot. |

## Required Spot Check

The requested positive spot check could not be satisfied because the successful server snapshot has zero quest rows:

- `Journal_GettingReadyForTheHunt` / `560247139`: not present in `QuestsServer.json`
- `f2991062-fb7d-458b-92c0-c2818bc260d3`: not present in `QuestsServer.json`
- `Getting Ready for the Hunt`: not present in `QuestsServer.json`
- `9f56f414-6356-442b-82eb-27c1c552ab5b`: not present in `QuestsServer.json`
- `I scavenged the area around me, gathering what I needed to prepare myself for my next hunt.`: not present in `QuestsServer.json`

Two additional `KnownEntities.ValidQuests` spot checks were also blocked by the same condition: the quest snapshot is empty, not merely missing one row.

## Stop Reason

The server runtime dump succeeded, but it produced an empty `QuestsServer.json` with `ManagedAchievementData=0`. This hits the planned stop condition: the corrected server-only path does not currently expose the managed quest title/flavor ownership rows needed for canonical enrichment promotion.

## Next Minimal Export Lead

The next useful extractor experiment should not guess from Bloodcraft text or filenames. It should determine whether `ManagedAchievementData` is absent because:

1. it is not present on dedicated server prefab entities at all,
2. it lives in a managed registry/cache outside the prefab entity path currently scanned by targeted snapshots, or
3. it requires a client/runtime journal system path rather than server startup.

A narrow next dump should log managed component availability independently of prefab catalog scanning, for example:

- enumerate entities/components containing `ManagedAchievementData` directly after server gameplay data readiness,
- if count remains zero, inspect managed data registries/caches used by the existing `EntityManagerExtensions.GetManagedComponentData<T>` path,
- emit a diagnostic-only count/sample file before attempting another canonical quest snapshot.

No `data/enrichment` files were changed, and `npm run validate:data` was intentionally not run.
