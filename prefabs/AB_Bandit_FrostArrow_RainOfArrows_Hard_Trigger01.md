---
title: AB_Bandit_FrostArrow_RainOfArrows_Hard_Trigger01
guid: -721181968
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
- ScriptDestroy
- Networked
- UpToDateUserBitMask
- FrameChanged
- NetworkSnapshot
- Rotation
- Translation
- EvenSpreadCluster_DataServer
- LocalToWorld
- LocalTransform
- TeamReference
- NetworkId
- PrefabGUID
- CreateGameplayEventsOnDestroy
- GameplayEventIdMapping
- SpawnPrefabOnGameplayEvent
- GameplayEventListeners
- NetSnapshot
- SnapshotFrameChangedBuffer
- GetOwnerRotationOnlyOnSpawnTag
- GetOwnerTeamOnSpawn
- DisableWhenNoPlayersInRange
- ScriptSpawn
- SpawnTag
- Prefab
- Simulate
- BlobAssetOwner
- NetworkSnapshotType
---

# AB_Bandit_FrostArrow_RainOfArrows_Hard_Trigger01

**GUID:** `-721181968`

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
  - `Duration: 0.3`
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
  - `OffsetAngle: 0.17453292`
  - `RandomAngle: 0.34906584`
  - `NewThrowEntity: AB_Bandit_FrostArrow_RainOfArrows_Hard_Throw01 PrefabGuid(-698051948)`
  - `Count: 8`
  - `IndividualRandom: True`
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
  - `_Value: -721181968`

- [CreateGameplayEventsOnDestroy](/components/CreateGameplayEventsOnDestroy){:target="_blank"}

- **[0]**
  - `EventId: Local - -136930912`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- [GameplayEventIdMapping](/components/GameplayEventIdMapping){:target="_blank"}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -136930912`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [SpawnPrefabOnGameplayEvent](/components/SpawnPrefabOnGameplayEvent){:target="_blank"}

- **[0]**
  - `SpawnPrefab: AB_Bandit_FrostArrow_RainOfArrows_Hard_Trigger02 PrefabGuid(1789626324)`
  - `CustomAbilitySpellModsSource: GUID Not Found`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `Owner: ProjectM.SpawnPrefabOnGameplayEventOwner Inherit`
  - `Creator: ProjectM.SpawnPrefabOnGameplayEventCreator Inherit`

- [GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum SpawnPrefab`
  - `GameplayEventId: Local - -136930912`

- [NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 240`

- **[1]**
  - `Value: 162`

- **[2]**
  - `Value: 3`

- **[3]**
  - `Value: 213`

- **[4]**
  - `Value: 159`

- **[5]**
  - `Value: 1`

- **[6]**
  - `Value: 0`

- **[7]**
  - `Value: 0`

- **[8]**
  - `Value: 154`

- **[9]**
  - `Value: 153`

- **[10]**
  - `Value: 153`

- **[11]**
  - `Value: 62`

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

- [DisableWhenNoPlayersInRange](/components/DisableWhenNoPlayersInRange){:target="_blank"}
  - *(No fields)*

- [ScriptSpawn](/components/ScriptSpawn){:target="_blank"}
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
