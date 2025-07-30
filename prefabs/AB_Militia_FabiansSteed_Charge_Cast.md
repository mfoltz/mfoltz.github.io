---
title: AB_Militia_FabiansSteed_Charge_Cast
guid: -267421443
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Militia_FabiansSteed_Charge_Cast

**GUID:** `-267421443`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- **ProjectM.Attach**
  - `Parent: Entity(0:0)`

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.AbilityState**
  - `AbilityId: AB_Militia_FabiansSteed_Charge_Cast PrefabGuid(-267421443)`
  - `GroupEntity: NetworkedEntity(0:0)`
  - `AbilityTypeFlag: ProjectM.AbilityTypeFlag AbilityKit, AbilityKit_BreakStealth`

- **ProjectM.Network.ModifyRotationDuringCast**
  - `CastRotationData: ProjectM.Network.ModifyRotation ProjectM.Network.ModifyRotation`
  - `PostCastRotationData: ProjectM.Network.ModifyRotation ProjectM.Network.ModifyRotation`
  - `CastModifyRotationEntity: Entity(0:0)`
  - `PostCastModifyRotationEntity: Entity(0:0)`

- **ProjectM.AbilityPriority**
  - `Priority: 3`
  - `InterruptLowerPriority: False`
  - `InterruptHigherPriority: False`

- **ProjectM.AbilityCastTimeData**
  - `MaxCastTime: 1.6`
  - `PostCastTime: 0`
  - `HideCastBar: True`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.AbilityAimPrediction**
  - `AimPredictionFactor: 0.4`

- **ProjectM.AbilityCooldownState**
  - `CooldownEndTime: 0`
  - `CurrentCooldown: 0`

- **ProjectM.AbilityCooldownData**
  - `ShowInteractCooldownHUD: False`
  - `IgnoreCooldownModifier: False`
  - `Cooldown: 1`

- **ProjectM.GlobalCooldown**
  - `Value: 0`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.SyncToUserBitMask**
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_acgddgdckdd`

- **ProjectM.Network.ModifyMovementDuringCastData**
  - `MovementSpeedMultiplier: 0`
  - `InDuration: 0.1`
  - `Duration: 2.1`
  - `OutDuration: 0.1`
  - `UseCastDuration: False`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: -267421443`

- **ProjectM.AbilitySpawnPrefabOnCast**

- **[0]**
  - `SpawnPrefab: AB_Militia_FabiansSteed_Charge_Phase PrefabGuid(-219976787)`
  - `Target: ProjectM.AbilitySpawnTarget Owner`
  - `TargetEntity: Entity(0:0)`
  - `HoverDistance: 0`
  - `HoverCondition: None`
  - `Condition: None`
  - `HoverMaxDistance: 900`

- **[1]**
  - `SpawnPrefab: AB_Militia_FabiansSteed_Charge_ChargingBuff PrefabGuid(328706422)`
  - `Target: ProjectM.AbilitySpawnTarget Owner`
  - `TargetEntity: Entity(0:0)`
  - `HoverDistance: 0`
  - `HoverCondition: None`
  - `Condition: None`
  - `HoverMaxDistance: 900`

- **ProjectM.Network.SyncToUserBuffer**

- **ProjectM.AbilitySpawnPrefabOnStartCast**

- **[0]**
  - `SpawnPrefab: Buff_Militia_Fabian_CastImpair PrefabGuid(1671499645)`
  - `BuffDuration: 3.2`
  - `Condition: None`
  - `DestroyWhenCastDone: False`
  - `Target: ProjectM.AbilitySpawnPrefabOnStartCast+SpawnTarget Unit_Mounter`

- **[1]**
  - `SpawnPrefab: AB_Militia_FabiansSteed_Charge_RiderBuff PrefabGuid(-1988917472)`
  - `BuffDuration: 0`
  - `Condition: None`
  - `DestroyWhenCastDone: False`
  - `Target: ProjectM.AbilitySpawnPrefabOnStartCast+SpawnTarget Unit_Mounter`

- **ProjectM.AbilityCastCondition**

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.PreventDisableWhenNoPlayersInRange**

- **ProjectM.Network.OnlySyncToUsersTag**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.Network.NetworkSnapshotType**
