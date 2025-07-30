---
title: AB_Manticore_Flying_Buff
guid: -2115732274
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Manticore_Flying_Buff

**GUID:** `-2115732274`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- **ProjectM.Attach**
  - `Parent: Entity(0:0)`

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.Buff**
  - `StartTimeUnmodified: 0`
  - `Target: Entity(0:0)`
  - `BuffType: ProjectM.BuffType Replace`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: True`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Buff`

- **ProjectM.ReplaceAbilityOnSlotData**
  - `ModificationEntity: Entity(0:0)`
  - `CopyCooldown: False`

- **ProjectM.ModifyMovementSpeedBuff**
  - `MoveSpeed: 2`
  - `Curve: ProjectM.CurveReference ProjectM.CurveReference`
  - `MultiplyAdd: True`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Age**
  - `Value: 0`

- **ProjectM.BuffCategory**
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- **ProjectM.BuffModificationFlagData**
  - `ModificationTypes: 201327180`
  - `ModificationId: Unset`

- **ProjectM.Scripting.ScriptDestroy**
  - `Handled: False`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_fkbkbchgb`

- **ProjectM.Network.ModifyRotation**
  - `PreviousTargetDirection: Il2CppSystem.Nullable_Unboxed`1[UnityEngine.Vector3]`
  - `OffsetRotation: Il2CppSystem.Nullable_Unboxed`1[UnityEngine.Vector3]`
  - `ActiveTimeline: ProjectM.Network.MinMaxValue ProjectM.Network.MinMaxValue`
  - `Value: 200`
  - `Curve: ProjectM.CurveReference ProjectM.CurveReference`
  - `Type: ProjectM.Network.RotationModificationType Set`
  - `TargetDirectionType: ProjectM.Network.TargetDirectionType AimDirection`
  - `UseZeroAsDefaultForCurveRotation: False`
  - `SnapToDirection: True`

- **ProjectM.Gameplay.Scripting.Script_Modify_Combat_Movement_Buff_Data**
  - `MinDistance: 17`
  - `GoalDistance: 18`
  - `GoalDistanceOuter: 18`
  - `MaxDistance: 19`
  - `MovePattern: ProjectM.AiMovePattern Circle`
  - `ForceLookAtTarget: ProjectM.AiForceLookAtTarget None`
  - `CircleCurveInRange: ProjectM.CurveReference ProjectM.CurveReference`
  - `CircleCurveOutOfRange: ProjectM.CurveReference ProjectM.CurveReference`

- **ProjectM.Gameplay.Scripting.Script_Modify_Combat_Movement_Buff_State**
  - `MinDistanceModId: Unset`
  - `GoalDistanceModId: Unset`
  - `GoalDistanceOuterModId: Unset`
  - `MaxDistanceModId: Unset`
  - `MovePatternModId: Unset`
  - `ForceLookAtTargetModId: Unset`
  - `OldCircleCurveInRange: ProjectM.CurveReference ProjectM.CurveReference`
  - `OldCircleCurveOutOfRange: ProjectM.CurveReference ProjectM.CurveReference`

- **ProjectM.Gameplay.Scripting.Script_Buff_IgnoresPathfindingLineOfSight_DataServer**
  - `ModId: Unset`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: -2115732274`

- **ProjectM.ReplaceAbilityOnSlotBuff**

- **[0]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 0`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: AB_Manticore_AirDash_AbilityGroup PrefabGuid(-500071289)`
  - `Priority: 0`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType WholeCast`
  - `CopyCooldown: False`

- **[1]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 2`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: AB_Manticore_FlyEnd_AbilityGroup PrefabGuid(-808215778)`
  - `Priority: 0`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType WholeCast`
  - `CopyCooldown: False`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.Scripting.ScriptSpawn**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.Network.NetworkSnapshotType**
