---
title: CastleRebuildingSettings
guid: 1517300989
categories: ['All', 'Castle']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `1517300989`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [Castle]({{% relref "prefabs/Castle.md" %}})

## Components

- [ProjectM.CastleBuilding.CastleRebuildSettings]({{% relref "components/CastleRebuildSettings.md" %}})
  - `TransferContainer: TM_Stash_Chest_Rebuilding PrefabGuid(-220201461)`
  - `TimePerTileModel: 0.05`
  - `DelayBeforeStart: 0.3`
  - `DelayAfterDone: 0.5`
  - `JournalQuest: ProjectM.CastleBuilding.CastleRebuildJournalQuest ProjectM.CastleBuilding.CastleRebuildJournalQuest`
  - `TransferSequenceStart: SequenceGUID 1318239939`
  - `TransferSequenceEnd: SequenceGUID -119872048`

- [ProjectM.SingletonPrefab]({{% relref "components/SingletonPrefab.md" %}})
  - `AutomaticInstantiation: True`
  - `OverrideExisting: False`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Unity.Transforms.Rotation]({{% relref "components/Rotation.md" %}})
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation]({{% relref "components/Translation.md" %}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Transforms.LocalToWorld]({{% relref "components/LocalToWorld.md" %}})
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform]({{% relref "components/LocalTransform.md" %}})
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 1517300989`

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
