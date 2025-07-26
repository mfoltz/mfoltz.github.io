---
title: AB_Blackfang_Morgana_TravelToPosition_TailEmerge_Cast
guid: 148165843
categories:
- AB
- All
nav_exclude: true
search_exclude: true
layout: default
components:
- Attach
- EntityOwner
- EntityCreator
- AbilityState
- ModifyRotationDuringCast
- AbilityPriority
- AbilityCastTimeData
- AbilityInterruptData
- DestroyData
- DestroyState
- AbilityCooldownState
- AbilityCooldownData
- GlobalCooldown
- Networked
- UpToDateUserBitMask
- SyncToUserBitMask
- FrameChanged
- NetworkSnapshot
- ModifyMovementDuringCastData
- MoveDuringCastData
- NetworkId
- PrefabGUID
- SyncToUserBuffer
- AbilitySpawnPrefabOnStartCast
- AbilityCastCondition
- NetSnapshot
- SnapshotFrameChangedBuffer
- PreventDisableWhenNoPlayersInRange
- OnlySyncToUsersTag
- SpawnTag
- Prefab
- Simulate
- BlobAssetOwner
- NetworkSnapshotType
---

# AB_Blackfang_Morgana_TravelToPosition_TailEmerge_Cast

**GUID:** `148165843`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- [Attach](/components/Attach){:target="_blank"}
  - `Parent: Entity(0:0)`

- [EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [AbilityState](/components/AbilityState){:target="_blank"}
  - `AbilityId: AB_Blackfang_Morgana_TravelToPosition_TailEmerge_Cast PrefabGuid(148165843)`
  - `GroupEntity: NetworkedEntity(0:0)`
  - `AbilityTypeFlag: ProjectM.AbilityTypeFlag AbilityKit`

- [ModifyRotationDuringCast](/components/ModifyRotationDuringCast){:target="_blank"}
  - `CastRotationData: ProjectM.Network.ModifyRotation ProjectM.Network.ModifyRotation`
  - `PostCastRotationData: ProjectM.Network.ModifyRotation ProjectM.Network.ModifyRotation`
  - `CastModifyRotationEntity: Entity(0:0)`
  - `PostCastModifyRotationEntity: Entity(0:0)`

- [AbilityPriority](/components/AbilityPriority){:target="_blank"}
  - `Priority: 0`
  - `InterruptLowerPriority: False`
  - `InterruptHigherPriority: False`

- [AbilityCastTimeData](/components/AbilityCastTimeData){:target="_blank"}
  - `MaxCastTime: 1`
  - `PostCastTime: 0.2`
  - `HideCastBar: True`

- [AbilityInterruptData](/components/AbilityInterruptData){:target="_blank"}
  - `CooldownOnInterrupt: 0.5`
  - `InterruptTypes: ProjectM.InterruptTypes ManualInterrupt`
  - `FullCooldownOnInterrupt: False`
  - `FullCooldownModifier: 1`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [AbilityCooldownState](/components/AbilityCooldownState){:target="_blank"}
  - `CooldownEndTime: 0`
  - `CurrentCooldown: 0`

- [AbilityCooldownData](/components/AbilityCooldownData){:target="_blank"}
  - `ShowInteractCooldownHUD: False`
  - `IgnoreCooldownModifier: False`
  - `Cooldown: 0.5`

- [GlobalCooldown](/components/GlobalCooldown){:target="_blank"}
  - `Value: 0.2`

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

- [SyncToUserBitMask](/components/SyncToUserBitMask){:target="_blank"}
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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_acgddgdckdd`

- [ModifyMovementDuringCastData](/components/ModifyMovementDuringCastData){:target="_blank"}
  - `MovementSpeedMultiplier: 1`
  - `InDuration: 0`
  - `Duration: 0.5`
  - `OutDuration: 0`
  - `UseCastDuration: False`

- [MoveDuringCastData](/components/MoveDuringCastData){:target="_blank"}
  - `ManualDuration: 1`
  - `ForceMovementLength: -10`
  - `CurveX: ProjectM.CurveReference ProjectM.CurveReference`
  - `CurveY: ProjectM.CurveReference ProjectM.CurveReference`
  - `CurveZ: ProjectM.CurveReference ProjectM.CurveReference`
  - `ModelOffsetCurveX: ProjectM.CurveReference ProjectM.CurveReference`
  - `ModelOffsetCurveY: ProjectM.CurveReference ProjectM.CurveReference`
  - `ModelOffsetCurveZ: ProjectM.CurveReference ProjectM.CurveReference`
  - `ForceMoveType: ProjectM.Network.ForceMoveDuringCastType UseAimDirection`
  - `MoveType: ProjectM.Network.AbilityMoveType MovementCurve`
  - `OnlyForceMoveIfAnyMoveInput: True`
  - `UseManualDuration: False`
  - `ExcludePostCastDuration: False`
  - `IgnoreMovementImpair: False`
  - `IgnoreMovementSpeedChanges: False`

- [NetworkId](/components/NetworkId){:target="_blank"}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 148165843`

- [SyncToUserBuffer](/components/SyncToUserBuffer){:target="_blank"}
  - *(No fields)*

- [AbilitySpawnPrefabOnStartCast](/components/AbilitySpawnPrefabOnStartCast){:target="_blank"}

- **[0]**
  - `SpawnPrefab: AB_Blackfang_Morgana_TravelToPosition_Emerge_Trigger PrefabGuid(1849380415)`
  - `BuffDuration: 0`
  - `Condition: None`
  - `DestroyWhenCastDone: False`
  - `Target: ProjectM.AbilitySpawnPrefabOnStartCast+SpawnTarget Owner`

- [AbilityCastCondition](/components/AbilityCastCondition){:target="_blank"}
  - *(No fields)*

- [NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 211`

- **[1]**
  - `Value: 212`

- **[2]**
  - `Value: 212`

- **[3]**
  - `Value: 8`

- **[4]**
  - `Value: 55`

- **[5]**
  - `Value: 0`

- **[6]**
  - `Value: 0`

- **[7]**
  - `Value: 0`

- **[8]**
  - `Value: 0`

- **[9]**
  - `Value: 0`

- **[10]**
  - `Value: 0`

- **[11]**
  - `Value: 0`

- **[12]**
  - `Value: 0`

- **[13]**
  - `Value: 0`

- **[14]**
  - `Value: 0`

- **[15]**
  - `Value: 0`

- **[16]**
  - `Value: 0`

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

- **[24]**
  - `Value: 0`

- **[25]**
  - `Value: 0`

- **[26]**
  - `Value: 0`

- **[27]**
  - `Value: 0`

- **[28]**
  - `Value: 0`

- **[29]**
  - `Value: 0`

- **[30]**
  - `Value: 0`

- **[31]**
  - `Value: 0`

- **[32]**
  - `Value: 0`

- **[33]**
  - `Value: 0`

- **[34]**
  - `Value: 0`

- **[35]**
  - `Value: 0`

- **[36]**
  - `Value: 0`

- **[37]**
  - `Value: 0`

- **[38]**
  - `Value: 0`

- **[39]**
  - `Value: 0`

- **[40]**
  - `Value: 0`

- **[41]**
  - `Value: 0`

- **[42]**
  - `Value: 0`

- **[43]**
  - `Value: 0`

- **[44]**
  - `Value: 0`

- **[45]**
  - `Value: 0`

- **[46]**
  - `Value: 0`

- **[47]**
  - `Value: 0`

- **48 total elements but only showing the first 36**
  - *(No fields)*

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

- **[5]**
  - `Value: -1`

- **[6]**
  - `Value: -1`

- [PreventDisableWhenNoPlayersInRange](/components/PreventDisableWhenNoPlayersInRange){:target="_blank"}
  - *(No fields)*

- [OnlySyncToUsersTag](/components/OnlySyncToUsersTag){:target="_blank"}
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
