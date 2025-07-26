---
title: AB_ChurchOfLight_Overseer_IceRecovery_Hard_IcicleTrigger
guid: -1945090025
categories:
- AB
- All
nav_exclude: true
search_exclude: true
layout: default
components:
- EntityOwner
- EntityCreator
- GetOwnerRotation
- GetTranslationOnSpawn
- DestroyData
- DestroyState
- Age
- LifeTime
- ManualFirstFrameLastTranslation
- Team
- Networked
- NetworkedSettings
- UpToDateUserBitMask
- FrameChanged
- NetworkSnapshot
- Rotation
- Translation
- EvenSpreadCluster_Tick_DataServer
- LocalToWorld
- LocalTransform
- TeamReference
- NetworkId
- PrefabGUID
- CreateGameplayEventsOnSpawn
- GameplayEventIdMapping
- RunScriptOnGameplayEvent
- GameplayEventListeners
- NetSnapshot
- SnapshotFrameChangedBuffer
- Throw_Prefabs_To_Spawn
- DestroyOnSpawn
- GetOwnerRotationOnlyOnSpawnTag
- GetOwnerTeamOnSpawn
- SpawnTag
- Prefab
- Simulate
- BlobAssetOwner
- NetworkSnapshotType
---

# AB_ChurchOfLight_Overseer_IceRecovery_Hard_IcicleTrigger

**GUID:** `-1945090025`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- [EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [GetOwnerRotation](/components/GetOwnerRotation){:target="_blank"}
  - `OffsetDegreesClockwise: -160`
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
  - `Duration: 0.01`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ManualFirstFrameLastTranslation](/components/ManualFirstFrameLastTranslation){:target="_blank"}
  - `Value: Il2CppSystem.Nullable_Unboxed`1[float3]`

- [Team](/components/Team){:target="_blank"}
  - `Value: 1`
  - `FactionIndex: -1`

- [Networked](/components/Networked){:target="_blank"}
  - `CreateFrame: 0`

- [NetworkedSettings](/components/NetworkedSettings){:target="_blank"}
  - `BasePriority: 2.1`
  - `SyncRate: 0`

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

- [EvenSpreadCluster_Tick_DataServer](/components/EvenSpreadCluster_Tick_DataServer){:target="_blank"}
  - `OffsetAngle: 0.94247776`
  - `RandomAngle: 0`
  - `RotationPerTick: 0`
  - `Count: 5`
  - `TicksDone: 0`
  - `IndividualRandom: False`
  - `UseAimDirection: False`
  - `UseSelfRotation: True`
  - `UseAIReturnPosAsOrigo: True`
  - `AlwaysMaxRange: False`
  - `SpawnOffset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `IgnoreCollision: True`
  - `FullCircleSpread: False`
  - `SpawnPrefabInsteadIfConditionTrue: GUID Not Found`
  - `Condition: None`

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
  - `_Value: -1945090025`

- [CreateGameplayEventsOnSpawn](/components/CreateGameplayEventsOnSpawn){:target="_blank"}

- **[0]**
  - `EventId: Local - 373290447`
  - `Target: ProjectM.GameplayEventTarget Owner`

- [GameplayEventIdMapping](/components/GameplayEventIdMapping){:target="_blank"}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 373290447`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [RunScriptOnGameplayEvent](/components/RunScriptOnGameplayEvent){:target="_blank"}

- **[0]**
  - `ScriptReference: ProjectM.ScriptMethodReference ProjectM.ScriptMethodReference`

- [GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RunScript`
  - `GameplayEventId: Local - 373290447`

- [NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 23`

- **[1]**
  - `Value: 72`

- **[2]**
  - `Value: 16`

- **[3]**
  - `Value: 140`

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

- [Throw_Prefabs_To_Spawn](/components/Throw_Prefabs_To_Spawn){:target="_blank"}

- **[0]**
  - `Value: AB_ChurchOfLight_Overseer_IceRecovery_Hard_IcicleThrow PrefabGuid(-458867587)`

- [DestroyOnSpawn](/components/DestroyOnSpawn){:target="_blank"}
  - *(No fields)*

- [GetOwnerRotationOnlyOnSpawnTag](/components/GetOwnerRotationOnlyOnSpawnTag){:target="_blank"}
  - *(No fields)*

- [GetOwnerTeamOnSpawn](/components/GetOwnerTeamOnSpawn){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [BlobAssetOwner](/components/BlobAssetOwner){:target="_blank"}
  - *(No fields)*

- [NetworkSnapshotType](/components/NetworkSnapshotType){:target="_blank"}
  - *(No fields)*
