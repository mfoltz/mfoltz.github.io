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

- [ProjectM.CastleBuilding.CastleRebuildSettings](/components/CastleRebuildSettings)
  - `TransferContainer: TM_Stash_Chest_Rebuilding PrefabGuid(-220201461)`
  - `TimePerTileModel: 0.05`
  - `DelayBeforeStart: 0.3`
  - `DelayAfterDone: 0.5`
  - `JournalQuest: ProjectM.CastleBuilding.CastleRebuildJournalQuest ProjectM.CastleBuilding.CastleRebuildJournalQuest`
  - `TransferSequenceStart: SequenceGUID 1318239939`
  - `TransferSequenceEnd: SequenceGUID -119872048`

- [ProjectM.SingletonPrefab](/components/SingletonPrefab)
  - `AutomaticInstantiation: True`
  - `OverrideExisting: False`

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Unity.Transforms.Rotation](/components/Rotation)
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation](/components/Translation)
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Transforms.LocalToWorld](/components/LocalToWorld)
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform](/components/LocalTransform)
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID)
  - `_Value: 1517300989`

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)
