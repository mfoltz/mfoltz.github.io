---
title: AB_Manticore_FrostVortex_TriggerCluster
guid: -800152091
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Manticore_FrostVortex_TriggerCluster

**GUID:** `-800152091`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- [EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [GetOwnerRotation](/components/GetOwnerRotation){:target="_blank"}
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType Rotation`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Owner`
  - `InverseRotation: False`

- [GetTranslationOnSpawn](/components/GetTranslationOnSpawn){:target="_blank"}
  - `TranslationSource: ProjectM.GetTranslationSource Owner`
  - `SnapToGround: False`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Age](/components/Age){:target="_blank"}
  - `Value: 0`

- [LifeTime](/components/LifeTime){:target="_blank"}
  - `Duration: 1`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ManualFirstFrameLastTranslation](/components/ManualFirstFrameLastTranslation){:target="_blank"}
  - `Value: Il2CppSystem.Nullable_Unboxed`1[float3]`

- [Team](/components/Team){:target="_blank"}
  - `Value: 1`
  - `FactionIndex: -1`

- [ScriptDestroy](/components/ScriptDestroy){:target="_blank"}
  - `Handled: False`

- [Networked](/components/Networked){:target="_blank"}
  - `CreateFrame: 0`

- [UpToDateUserBitMask](/components/UpToDateUserBitMask){:target="_blank"}
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- [FrameChanged](/components/FrameChanged){:target="_blank"}
  - `Value: -1`

- [NetworkSnapshot](/components/NetworkSnapshot){:target="_blank"}
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_kiighbfgg`

- [Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [EvenSpreadCluster_DataServer](/components/EvenSpreadCluster_DataServer){:target="_blank"}
  - `OffsetAngle: 0.89709926`
  - `RandomAngle: 0`
  - `NewThrowEntity: AB_Manticore_FrostVortex_Throw PrefabGuid(1875745365)`
  - `Count: 7`
  - `IndividualRandom: False`
  - `UseAimDirection: True`
  - `AlwaysMaxRange: False`
  - `OnSpawn: True`
  - `OnDestroy: False`
  - `ListenerEventId: Local - 371857150`
  - `UseGameplayEventTargetPosition: False`
  - `TryFindThrowLocationIterations: 1`

- [LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [TeamReference](/components/TeamReference){:target="_blank"}
  - `Value: ModifiableEntity(0:0)`

- [NetworkId](/components/NetworkId){:target="_blank"}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -800152091`

- [CreateGameplayEventsOnTick](/components/CreateGameplayEventsOnTick){:target="_blank"}

- **[0]**
  - `EventId: Local - 325352405`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `TickInterval: 0.075`
  - `TickTime: -0`
  - `MaxTicks: 7`
  - `CallScriptOnTick: True`
  - `RandomTickOffset: 0`
  - `RandomTickInterval: 0`
  - `ResetWhenBuffStacksChanged: False`
  - `ResetWhenCastingAbility: GUID Not Found`

- [NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 229`

- **[1]**
  - `Value: 165`

- **[2]**
  - `Value: 78`

- **[3]**
  - `Value: 208`

- **[4]**
  - `Value: 159`

- **[5]**
  - `Value: 1`

- **[6]**
  - `Value: 0`

- **[7]**
  - `Value: 0`

- **[8]**
  - `Value: 0`

- **[9]**
  - `Value: 0`

- **[10]**
  - `Value: 128`

- **[11]**
  - `Value: 63`

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

- [SnapshotFrameChangedBuffer](/components/SnapshotFrameChangedBuffer){:target="_blank"}

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

- [GetOwnerRotationOnlyOnSpawnTag](/components/GetOwnerRotationOnlyOnSpawnTag){:target="_blank"}
  - *(No fields)*

- [GetOwnerTeamOnSpawn](/components/GetOwnerTeamOnSpawn){:target="_blank"}
  - *(No fields)*

- **ProjectM.RunScriptOnGameplayEvents isn't handled**
  - *(No fields)*

- [ScriptSpawn](/components/ScriptSpawn){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [NetworkSnapshotType](/components/NetworkSnapshotType){:target="_blank"}
  - *(No fields)*
