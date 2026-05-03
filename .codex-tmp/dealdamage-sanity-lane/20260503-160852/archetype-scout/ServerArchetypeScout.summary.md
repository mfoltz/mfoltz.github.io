# Server Archetype Scout Summary

## Source

- Artifact: C:\Users\mitch\source\Repos\VRising.DataExtractor\.codex\runs\20260503-110111\vrising-dataextractor-server-archetype-scout\snapshots\VRising.DataExtractor\ServerComponentArchetypeScoutServer.json
- Snapshot root: C:\Users\mitch\source\Repos\VRising.DataExtractor\.codex\runs\20260503-110111\vrising-dataextractor-server-archetype-scout\snapshots\VRising.DataExtractor

## Coverage

- Rows: 5092
- Interpretation: raw-unverified

## Candidate Coverage

- GameplayEventIdMapping: 5080 entities, 5080 readable payloads
- ApplyBuffOnGameplayEvent: 2950 entities, 2950 readable payloads
- CreateGameplayEventsOnHit: 2083 entities, 2083 readable payloads
- DealDamageOnGameplayEvent: 1683 entities, 1683 readable payloads
- SpawnPrefabOnGameplayEvent: 833 entities, 833 readable payloads
- RunScriptOnGameplayEvent: 278 entities, 278 readable payloads
- HealOnGameplayEvent: 148 entities, 148 readable payloads
- ForceCastOnGameplayEvent: 64 entities, 64 readable payloads
- LifeLeechOnGameplayEvent: 23 entities, 23 readable payloads
- ChangeAbilityOnGameplayEvent: 3 entities, 3 readable payloads

## Co-Occurrence Pairs

- ApplyBuffOnGameplayEvent + GameplayEventIdMapping: 2949
- CreateGameplayEventsOnHit + GameplayEventIdMapping: 2071
- DealDamageOnGameplayEvent + GameplayEventIdMapping: 1683
- CreateGameplayEventsOnHit + DealDamageOnGameplayEvent: 1551
- ApplyBuffOnGameplayEvent + CreateGameplayEventsOnHit: 1136
- ApplyBuffOnGameplayEvent + DealDamageOnGameplayEvent: 923
- GameplayEventIdMapping + SpawnPrefabOnGameplayEvent: 833
- CreateGameplayEventsOnHit + SpawnPrefabOnGameplayEvent: 386
- ApplyBuffOnGameplayEvent + SpawnPrefabOnGameplayEvent: 328
- GameplayEventIdMapping + RunScriptOnGameplayEvent: 278
- DealDamageOnGameplayEvent + SpawnPrefabOnGameplayEvent: 247
- GameplayEventIdMapping + HealOnGameplayEvent: 148
- ApplyBuffOnGameplayEvent + RunScriptOnGameplayEvent: 95
- CreateGameplayEventsOnHit + RunScriptOnGameplayEvent: 83
- ApplyBuffOnGameplayEvent + HealOnGameplayEvent: 68
- ForceCastOnGameplayEvent + GameplayEventIdMapping: 64
- RunScriptOnGameplayEvent + SpawnPrefabOnGameplayEvent: 63
- DealDamageOnGameplayEvent + RunScriptOnGameplayEvent: 59
- CreateGameplayEventsOnHit + HealOnGameplayEvent: 48
- DealDamageOnGameplayEvent + HealOnGameplayEvent: 40

## Prefab Prefixes

- AB: 3458
- TM: 680
- CHAR: 504
- Buff: 300
- Journal: 41
- Item: 17
- EH: 16
- Storm: 9
- Unholy: 8
- Illusion: 7
- Chaos: 6
- EquipBuff: 6

## Same-Run Index Matches

- Ability groups: 30
- Items: 0
- NPCs: 1040
- Unmatched: 4022

## Recommendations

- GameplayEventIdMapping: score 56744; 5080 matched entities, 5080 readable payloads, co-occurs in 8052 candidate pair hits, 25400 top-neighbor hits.
- ApplyBuffOnGameplayEvent: score 34690; 2950 matched entities, 2950 readable payloads, co-occurs in 5545 candidate pair hits, 14750 top-neighbor hits.
- CreateGameplayEventsOnHit: score 27304; 2083 matched entities, 2083 readable payloads, co-occurs in 5320 candidate pair hits, 10415 top-neighbor hits.
- DealDamageOnGameplayEvent: score 22544; 1683 matched entities, 1683 readable payloads, co-occurs in 4540 candidate pair hits, 8415 top-neighbor hits.
- SpawnPrefabOnGameplayEvent: score 10430; 833 matched entities, 833 readable payloads, co-occurs in 1883 candidate pair hits, 4165 top-neighbor hits.
- RunScriptOnGameplayEvent: score 3426; 278 matched entities, 278 readable payloads, co-occurs in 601 candidate pair hits, 1390 top-neighbor hits.
- HealOnGameplayEvent: score 1886; 148 matched entities, 148 readable payloads, co-occurs in 351 candidate pair hits, 740 top-neighbor hits.
- ForceCastOnGameplayEvent: score 794; 64 matched entities, 64 readable payloads, co-occurs in 141 candidate pair hits, 320 top-neighbor hits.
- LifeLeechOnGameplayEvent: score 370; 23 matched entities, 23 readable payloads, co-occurs in 93 candidate pair hits, 115 top-neighbor hits.
- ChangeAbilityOnGameplayEvent: score 32; 3 matched entities, 3 readable payloads, co-occurs in 4 candidate pair hits, 15 top-neighbor hits.

## Downstream Boundary

Keep this parked as raw server ECS evidence. Do not promote these values into public database fields until a follow-up spot-check verifies the selected component payloads.
