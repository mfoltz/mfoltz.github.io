---
title: AB_Pistols_ExplosiveShot_DashCast
guid: 2098101392
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Pistols_ExplosiveShot_DashCast

**GUID:** `2098101392`

**Categories:** AB, All

## Components

- **ProjectM.HideWeapon**
  - `HideWeaponSequenceGUID: SequenceGUID 1136240177`
  - `HideWeaponState: SequenceState`
  - `Id: Entity(0:0)`

- **ProjectM.Attach**
  - `Parent: Entity(0:0)`

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.AbilityState**
  - `AbilityId: AB_Pistols_ExplosiveShot_DashCast PrefabGuid(2098101392)`
  - `GroupEntity: NetworkedEntity(0:0)`
  - `AbilityTypeFlag: ProjectM.AbilityTypeFlag AbilityKit_IgnoreInCombat`

- **ProjectM.Network.ModifyRotationDuringCast**
  - `CastRotationData: ProjectM.Network.ModifyRotation ProjectM.Network.ModifyRotation`
  - `PostCastRotationData: ProjectM.Network.ModifyRotation ProjectM.Network.ModifyRotation`
  - `CastModifyRotationEntity: Entity(0:0)`
  - `PostCastModifyRotationEntity: Entity(0:0)`

- **ProjectM.AbilityIgnoreSettings**
  - `IgnorePostCast: True`
  - `IgnoreGlobalCooldown: True`
  - `IgnoreAbilityImpair: False`

- **ProjectM.AbilityPriority**
  - `Priority: 18`
  - `InterruptLowerPriority: True`
  - `InterruptHigherPriority: False`

- **ProjectM.AbilityCastTimeData**
  - `MaxCastTime: 0.3`
  - `PostCastTime: 0.15`
  - `HideCastBar: True`

- **ProjectM.ChangeKnockbackResistanceDuringCast**
  - `KnockbackResistanceIndex: 9`
  - `ModificationId: Unset`

- **ProjectM.HideWeaponDuringCast**
  - `CastStartTime: 0`
  - `Duration: 1`
  - `CastStartCounter: 0`
  - `Type: ProjectM.HideWeaponDuringCastType CastAndPostCast`

- **ProjectM.AbilityInterruptData**
  - `CooldownOnInterrupt: 8`
  - `InterruptTypes: ProjectM.InterruptTypes None`
  - `FullCooldownOnInterrupt: False`
  - `FullCooldownModifier: 1`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.AbilityCooldownState**
  - `CooldownEndTime: 0`
  - `CurrentCooldown: 0`

- **ProjectM.AbilityCooldownData**
  - `ShowInteractCooldownHUD: False`
  - `IgnoreCooldownModifier: False`
  - `Cooldown: 10`

- **ProjectM.GlobalCooldown**
  - `Value: 0`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **ProjectM.Network.SyncToUserBitMask**
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_acgddgdckdd`

- **ProjectM.Network.ModifyMovementDuringCastData**
  - `MovementSpeedMultiplier: 0`
  - `InDuration: 0.1`
  - `Duration: 0.4`
  - `OutDuration: 0.1`
  - `UseCastDuration: False`

- **ProjectM.Network.MoveDuringCastData**
  - `ManualDuration: 0`
  - `ForceMovementLength: 4.5`
  - `CurveX: ProjectM.CurveReference ProjectM.CurveReference`
  - `CurveY: ProjectM.CurveReference ProjectM.CurveReference`
  - `CurveZ: ProjectM.CurveReference ProjectM.CurveReference`
  - `ModelOffsetCurveX: ProjectM.CurveReference ProjectM.CurveReference`
  - `ModelOffsetCurveY: ProjectM.CurveReference ProjectM.CurveReference`
  - `ModelOffsetCurveZ: ProjectM.CurveReference ProjectM.CurveReference`
  - `ForceMoveType: ProjectM.Network.ForceMoveDuringCastType None`
  - `MoveType: ProjectM.Network.AbilityMoveType MovementCurve`
  - `OnlyForceMoveIfAnyMoveInput: False`
  - `UseManualDuration: False`
  - `ExcludePostCastDuration: False`
  - `IgnoreMovementImpair: True`
  - `IgnoreMovementSpeedChanges: True`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 2098101392`

- **ProjectM.Network.SyncToUserBuffer**
  - *(No fields)*

- **ProjectM.AbilitySpawnPrefabOnStartCast**
  - *(No fields)*

- **[0]**
  - `SpawnPrefab: AB_Pistols_ExplosiveShot_Immaterial PrefabGuid(69982784)`
  - `BuffDuration: 0`
  - `Condition: None`
  - `DestroyWhenCastDone: False`
  - `Target: ProjectM.AbilitySpawnPrefabOnStartCast+SpawnTarget Owner`

- **ProjectM.AbilityCastCondition**
  - *(No fields)*

- **ProjectM.Network.NetSnapshot**
  - *(No fields)*

- **[0]**
  - `Value: 144`

- **[1]**
  - `Value: 124`

- **[2]**
  - `Value: 14`

- **[3]**
  - `Value: 125`

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

- **ProjectM.Network.SnapshotFrameChangedBuffer**
  - *(No fields)*

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

- **ProjectM.IgnoreInCombatBuff**
  - *(No fields)*

- **ProjectM.PreventDisableWhenNoPlayersInRange**
  - *(No fields)*

- **ProjectM.Network.OnlySyncToUsersTag**
  - *(No fields)*

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*

- **Unity.Entities.BlobAssetOwner**
  - *(No fields)*

- **ProjectM.Network.NetworkSnapshotType**
  - *(No fields)*

