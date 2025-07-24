---
title: CastleRebuildingSettings
guid: 1517300989
categories: ['All', 'Castle']
nav_exclude: true
search_exclude: false
layout: default
---

# CastleRebuildingSettings

**GUID:** `1517300989`

**Categories:** [All](/prefabs/All), [Castle](/prefabs/Castle)

## Components

- [CastleRebuildSettings](/components/CastleRebuildSettings){:target="_blank"}
  - `TransferContainer: TM_Stash_Chest_Rebuilding PrefabGuid(-220201461)`
  - `TimePerTileModel: 0.05`
  - `DelayBeforeStart: 0.3`
  - `DelayAfterDone: 0.5`
  - `JournalQuest: ProjectM.CastleBuilding.CastleRebuildJournalQuest ProjectM.CastleBuilding.CastleRebuildJournalQuest`
  - `TransferSequenceStart: SequenceGUID 1318239939`
  - `TransferSequenceEnd: SequenceGUID -119872048`

- [SingletonPrefab](/components/SingletonPrefab){:target="_blank"}
  - `AutomaticInstantiation: True`
  - `OverrideExisting: False`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 1517300989`

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
