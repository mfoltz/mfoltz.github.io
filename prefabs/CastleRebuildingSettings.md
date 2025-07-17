---
title: CastleRebuildingSettings
guid: 1517300989
categories: ['All', 'Castle']
nav_exclude: true
search_exclude: true
layout: default
---

# CastleRebuildingSettings

**GUID:** `1517300989`

**Categories:** [All](/prefabs/All), [Castle](/prefabs/Castle)

## Components

- [ProjectM.CastleBuilding.CastleRebuildSettings](/components/CastleRebuildSettings){:target="_blank"}
  - `TransferContainer: TM_Stash_Chest_Rebuilding PrefabGuid(-220201461)`
  - `TimePerTileModel: 0.05`
  - `DelayBeforeStart: 0.3`
  - `DelayAfterDone: 0.5`
  - `JournalQuest: ProjectM.CastleBuilding.CastleRebuildJournalQuest ProjectM.CastleBuilding.CastleRebuildJournalQuest`
  - `TransferSequenceStart: SequenceGUID 1318239939`
  - `TransferSequenceEnd: SequenceGUID -119872048`

- [ProjectM.SingletonPrefab](/components/SingletonPrefab){:target="_blank"}
  - `AutomaticInstantiation: True`
  - `OverrideExisting: False`

- [ProjectM.DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Unity.Transforms.Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Transforms.LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 1517300989`

- [Unity.Entities.SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
