# DealDamageOnGameplayEvent Sanity Lane

## Scope

This is a parked server-only evidence pass. It does not promote public DB fields, touch quest localization data, or interpret client UI/tooltip values.

## Inputs

- DealDamage spot-check artifact: `C:\Users\mitch\source\Repos\VRising.DataExtractor\.codex\runs\20260502-211922\vrising-dataextractor-server-component-spotcheck\snapshots\VRising.DataExtractor\ServerComponentSpotChecksServer.json`
- Gameplay-event archetype scout artifact: `C:\Users\mitch\source\Repos\VRising.DataExtractor\.codex\runs\20260503-110111\vrising-dataextractor-server-archetype-scout\snapshots\VRising.DataExtractor\ServerComponentArchetypeScoutServer.json`
- Parked summaries:
  - `.codex-tmp/dealdamage-sanity-lane/20260503-160852/spotcheck/DealDamageOnGameplayEvent.summary.md`
  - `.codex-tmp/dealdamage-sanity-lane/20260503-160852/archetype-scout/ServerArchetypeScout.summary.md`
  - `.codex-tmp/dealdamage-sanity-lane/20260503-160852/server-ecs-component-evidence.json`

## Damage Supported Raw

- `DealDamageOnGameplayEvent` has complete readable server payload coverage: 1683 rows, 1683 captured, 0 missing.
- Raw damage fields are present and usable as internal evidence: `Parameters`, `DamageModifierPerHit`, and `MultiplyMainFactorWithStacks`.
- Parameter coverage supports raw damage/effect research:
  - `RawDamagePercent`: 1683 present, 1288 non-default, 52 distinct.
  - `RawDamageValue`: 1683 present, 0 non-default, 1 distinct.
  - `MainFactor`: 1683 present, 1353 non-default, 3 distinct.
  - `ResourceModifier`: 1683 present, 1353 non-default, 3 distinct.
  - `StaggerFactor`: 1683 present, 12 non-default, 4 distinct.
  - `MaterialModifiers`: 1683 present, 1683 non-default, 336 distinct.
  - `DealDamageFlags`: 1683 present, 1345 non-default, 16 distinct.
  - `MainType`: 1683 present, 1683 non-default, 2 distinct.
- Raw projection caveat: `DealDamageFlags`, `MainType`, and several material modifiers contain encoded or odd numeric values. Preserve them as raw evidence until enum, bitfield, or material interpretation is separately verified.

## Effect Candidates Supported Raw

- The archetype scout has readable payloads for the related gameplay-event components:
  - `GameplayEventIdMapping`: 5080 entities, 5080 readable payloads.
  - `CreateGameplayEventsOnHit`: 2083 entities, 2083 readable payloads.
  - `ApplyBuffOnGameplayEvent`: 2950 entities, 2950 readable payloads.
  - `SpawnPrefabOnGameplayEvent`: 833 entities, 833 readable payloads.
  - `RunScriptOnGameplayEvent`: 278 entities, 278 readable payloads.
  - `HealOnGameplayEvent`: 148 entities, 148 readable payloads.
  - `ForceCastOnGameplayEvent`: 64 entities, 64 readable payloads.
  - `LifeLeechOnGameplayEvent`: 23 entities, 23 readable payloads.
  - `ChangeAbilityOnGameplayEvent`: 3 entities, 3 readable payloads.
- Co-occurrence with `DealDamageOnGameplayEvent` is strong enough for a follow-up raw evidence lane:
  - `DealDamageOnGameplayEvent + GameplayEventIdMapping`: 1683.
  - `CreateGameplayEventsOnHit + DealDamageOnGameplayEvent`: 1551.
  - `ApplyBuffOnGameplayEvent + DealDamageOnGameplayEvent`: 923.
  - `DealDamageOnGameplayEvent + SpawnPrefabOnGameplayEvent`: 247.
  - `DealDamageOnGameplayEvent + RunScriptOnGameplayEvent`: 59.
  - `DealDamageOnGameplayEvent + HealOnGameplayEvent`: 40.
  - `DealDamageOnGameplayEvent + LifeLeechOnGameplayEvent`: 22.
  - `DealDamageOnGameplayEvent + ForceCastOnGameplayEvent`: 15.
  - `DealDamageOnGameplayEvent + ChangeAbilityOnGameplayEvent`: 0.
- These are candidate raw payload surfaces only. They do not yet justify player-facing text, tooltip copy, or interpreted public facts.

## Join Not Proven

- Recent server dumps can support raw, source-backed damage/effect evidence without client UI.
- They do not yet prove a deterministic join suitable for public DB enrichment.
- The strongest local join candidates are same-entity component co-occurrence and gameplay-event payload fields, especially `GameplayEventIdMapping` plus `CreateGameplayEventsOnHit`.
- A quick raw comparison found 1551 entities with DealDamage, CreateGameplayEventsOnHit, and GameplayEventIdMapping present; 598 shared the same nested `EventId` value, but 0 matched both raw `GameplayEventType` and `EventId` exactly. This indicates a likely normalization problem or separate event-role semantics, not a proven join.
- No shared quest/localization join was proven. Nothing from this lane should be added to quest localization reporting unless a later pass finds a deterministic key shared with quest display/localization inputs.

## Blocked/Stop Reason

- No blocker for parked raw evidence: the server-only artifacts are readable and sufficient for an internal sanity verdict.
- Stop before public enrichment because interpretation and join semantics remain raw-unverified.
- Stop before quest/localization work because no deterministic shared join key was proven.
- Stop before client UI/tooltip work because the lane succeeded without requiring client-only evidence.

## Verification

- `pwsh .codex\tests\Test-ServerComponentSpotChecks.ps1`: passed.
- `pwsh .codex\tests\Test-ServerArchetypeScout.ps1`: passed.
- The parked summary commands initially hit sandbox `spawn EPERM` through `tsx`/esbuild and were rerun outside the sandbox.
- `npm run test:server-component-spotcheck-summary`: passed, 2/2 selftests.
- `npm run test:server-archetype-scout-summary`: passed, 2/2 selftests.
- `npm run test:server-ecs-enrichment`: passed, 3/3 selftests.
- `npm run validate:server-ecs-enrichment`: passed.
