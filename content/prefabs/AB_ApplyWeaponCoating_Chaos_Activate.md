---
title: AB_ApplyWeaponCoating_Chaos_Activate
guid: -1012725577
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_ApplyWeaponCoating_Chaos_Activate

**GUID:** `-1012725577`

**Categories:** [AB]{{< relref "prefabs/AB.md" >}}, [All]{{< relref "prefabs/All.md" >}}

## Components

- [ProjectM.EntityOwner]{{< relref "components/EntityOwner.md" >}}
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator]{{< relref "components/EntityCreator.md" >}}
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.GetOwnerRotation]{{< relref "components/GetOwnerRotation.md" >}}
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType Rotation`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Owner`
  - `InverseRotation: False`

- [ProjectM.GetTranslationOnSpawn]{{< relref "components/GetTranslationOnSpawn.md" >}}
  - `TranslationSource: ProjectM.GetTranslationSource Owner`
  - `SnapToGround: False`

- [ProjectM.DestroyData]{{< relref "components/DestroyData.md" >}}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]{{< relref "components/DestroyState.md" >}}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age]{{< relref "components/Age.md" >}}
  - `Value: 0`

- [ProjectM.LifeTime]{{< relref "components/LifeTime.md" >}}
  - `Duration: 0.01`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.ManualFirstFrameLastTranslation]{{< relref "components/ManualFirstFrameLastTranslation.md" >}}
  - `Value: Il2CppSystem.Nullable_Unboxed`1[Unity.Mathematics.float3]`

- [ProjectM.Team]{{< relref "components/Team.md" >}}
  - `Value: 1`
  - `FactionIndex: -1`

- [ProjectM.Network.Networked]{{< relref "components/Networked.md" >}}
  - `CreateFrame: 0`

- [ProjectM.Network.NetworkedSettings]{{< relref "components/NetworkedSettings.md" >}}
  - `BasePriority: 2.1`
  - `SyncRate: 0`

- [ProjectM.Network.UpToDateUserBitMask]{{< relref "components/UpToDateUserBitMask.md" >}}
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- [ProjectM.Network.FrameChanged]{{< relref "components/FrameChanged.md" >}}
  - `Value: -1`

- [ProjectM.Network.NetworkSnapshot]{{< relref "components/NetworkSnapshot.md" >}}
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_kiighbfgg`

- [Unity.Transforms.Rotation]{{< relref "components/Rotation.md" >}}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation]{{< relref "components/Translation.md" >}}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Transforms.LocalToWorld]{{< relref "components/LocalToWorld.md" >}}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform]{{< relref "components/LocalTransform.md" >}}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [ProjectM.TeamReference]{{< relref "components/TeamReference.md" >}}
  - `Value: ModifiableEntity(0:0)`

- [ProjectM.Network.NetworkId]{{< relref "components/NetworkId.md" >}}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID]{{< relref "components/PrefabGUID.md" >}}
  - `_Value: -1012725577`

- [ProjectM.CreateGameplayEventsOnSpawn]{{< relref "components/CreateGameplayEventsOnSpawn.md" >}}

- **[0]**
  - `EventId: Local - 373290447`
  - `Target: ProjectM.GameplayEventTarget Owner`

- [ProjectM.GameplayEventIdMapping]{{< relref "components/GameplayEventIdMapping.md" >}}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 373290447`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- [ProjectM.PlaySequenceOnGameplayEvent]{{< relref "components/PlaySequenceOnGameplayEvent.md" >}}

- **[0]**
  - `SequenceGuid: SequenceGUID -1821308623`
  - `SequencePositionTarget: ProjectM.PlaySequenceOnGameplayEventTarget Owner`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget Owner`

- [ProjectM.GameplayEventListeners]{{< relref "components/GameplayEventListeners.md" >}}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - 373290447`

- [ProjectM.Network.NetSnapshot]{{< relref "components/NetSnapshot.md" >}}

- **[0]**
  - `Value: 183`

- **[1]**
  - `Value: 8`

- **[2]**
  - `Value: 163`

- **[3]**
  - `Value: 195`

- **[4]**
  - `Value: 159`

- **[5]**
  - `Value: 1`

- **[6]**
  - `Value: 0`

- **[7]**
  - `Value: 0`

- **[8]**
  - `Value: 10`

- **[9]**
  - `Value: 215`

- **[10]**
  - `Value: 35`

- **[11]**
  - `Value: 60`

- **[12]**
  - `Value: 255`

- **[13]**
  - `Value: 255`

- **[14]**
  - `Value: 255`

- **[15]**
  - `Value: 255`

- **[16]**
  - `Value: 1`

- **[17]**
  - `Value: 0`

- **[18]**
  - `Value: 0`

- **[19]**
  - `Value: 0`

- **[20]**
  - `Value: 0`

- **[21]**
  - `Value: 0`

- **[22]**
  - `Value: 0`

- **[23]**
  - `Value: 0`

- [ProjectM.Network.SnapshotFrameChangedBuffer]{{< relref "components/SnapshotFrameChangedBuffer.md" >}}

- **[0]**
  - `Value: -1`

- **[1]**
  - `Value: -1`

- **[2]**
  - `Value: -1`

- **[3]**
  - `Value: -1`

- **[4]**
  - `Value: -1`

- [ProjectM.DestroyOnSpawn]{{< relref "components/DestroyOnSpawn.md" >}}

- [ProjectM.GetOwnerRotationOnlyOnSpawnTag]{{< relref "components/GetOwnerRotationOnlyOnSpawnTag.md" >}}

- [ProjectM.GetOwnerTeamOnSpawn]{{< relref "components/GetOwnerTeamOnSpawn.md" >}}

- **ProjectM.WeaponCoating.ApplyStoredWeaponCoatingOnSpawn**

- [Unity.Entities.SpawnTag]{{< relref "components/SpawnTag.md" >}}

- [Unity.Entities.Prefab]{{< relref "components/Prefab.md" >}}

- [Unity.Entities.Simulate]{{< relref "components/Simulate.md" >}}

- [Unity.Entities.BlobAssetOwner]{{< relref "components/BlobAssetOwner.md" >}}

- [ProjectM.Network.NetworkSnapshotType]{{< relref "components/NetworkSnapshotType.md" >}}
