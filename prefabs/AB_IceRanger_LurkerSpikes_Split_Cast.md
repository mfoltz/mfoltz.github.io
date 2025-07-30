---
title: AB_IceRanger_LurkerSpikes_Split_Cast
guid: 1868900578
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_IceRanger_LurkerSpikes_Split_Cast

**GUID:** `1868900578`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

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
  - `AbilityId: AB_IceRanger_LurkerSpikes_Split_Cast PrefabGuid(1868900578)`
  - `GroupEntity: NetworkedEntity(0:0)`
  - `AbilityTypeFlag: ProjectM.AbilityTypeFlag AbilityKit, AbilityKit_BreakStealth`

- **ProjectM.Network.ModifyRotationDuringCast**
  - `CastRotationData: ProjectM.Network.ModifyRotation ProjectM.Network.ModifyRotation`
  - `PostCastRotationData: ProjectM.Network.ModifyRotation ProjectM.Network.ModifyRotation`
  - `CastModifyRotationEntity: Entity(0:0)`
  - `PostCastModifyRotationEntity: Entity(0:0)`

- **ProjectM.AbilityPriority**
  - `Priority: 0`
  - `InterruptLowerPriority: False`
  - `InterruptHigherPriority: False`

- **ProjectM.AbilityCastTimeData**
  - `MaxCastTime: 1.6`
  - `PostCastTime: 2`
  - `HideCastBar: True`

- **ProjectM.HideWeaponDuringCast**
  - `CastStartTime: 0`
  - `Duration: 1`
  - `CastStartCounter: 0`
  - `Type: ProjectM.HideWeaponDuringCastType CastAndPostCast`

- **ProjectM.AbilityInterruptData**
  - `CooldownOnInterrupt: 0.5`
  - `InterruptTypes: ProjectM.InterruptTypes ManualInterrupt`
  - `FullCooldownOnInterrupt: False`
  - `FullCooldownModifier: 1`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.AbilityAimPrediction**
  - `AimPredictionFactor: 1`

- **ProjectM.AbilityCooldownState**
  - `CooldownEndTime: 0`
  - `CurrentCooldown: 0`

- **ProjectM.AbilityCooldownData**
  - `ShowInteractCooldownHUD: False`
  - `IgnoreCooldownModifier: False`
  - `Cooldown: 4`

- **ProjectM.GlobalCooldown**
  - `Value: 2.5`

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
  - `Duration: 3.5`
  - `OutDuration: 0.1`
  - `UseCastDuration: False`

- **ProjectM.Network.MoveDuringCastData**
  - `ManualDuration: 1`
  - `ForceMovementLength: 0`
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

- **ProjectM.Shared.SpellModSetComponent**
  - `SpellMods: SpellModSet`
  - `SyncId: 0`
  - `Mod0: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod1: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod2: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod3: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod4: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod5: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod6: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod7: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Count: 0`

- **ProjectM.Gameplay.Scripting.Script_MultiShot_Cast_DataServer**
  - `Angle: 1.0471976`
  - `OffsetAllAngles: 0`
  - `NewProjectile: AB_IceRanger_LurkerSpikes_Split_Projectile PrefabGuid(801218059)`
  - `Count: 3`
  - `Condition: None`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 1868900578`

- **ProjectM.Network.SyncToUserBuffer**

- **ProjectM.AbilityCastCondition**

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.RunScriptOnPreCastEnded**

- **ProjectM.PreventDisableWhenNoPlayersInRange**

- **ProjectM.Network.OnlySyncToUsersTag**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.Network.NetworkSnapshotType**
