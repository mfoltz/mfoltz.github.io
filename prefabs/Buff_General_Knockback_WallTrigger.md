---
title: Buff_General_Knockback_WallTrigger
guid: -1483130162
categories: ['All', 'Buff']
nav_exclude: true
search_exclude: true
layout: default
---

# Buff_General_Knockback_WallTrigger

**GUID:** `-1483130162`

**Categories:** [All](/prefabs/All), [Buff](/prefabs/Buff)

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
  - `BuffType: ProjectM.BuffType Parallel`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: False`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Debuff`

- **ProjectM.ModifyMovementSpeedBuff**
  - `MoveSpeed: 0`
  - `Curve: ProjectM.CurveReference ProjectM.CurveReference`
  - `MultiplyAdd: False`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Age**
  - `Value: 0`

- **ProjectM.BuffCategory**
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag Knockback`
  - `KeepOldest: False`

- **ProjectM.Dash**
  - `StartRotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`
  - `StartPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Range: 1.5`
  - `Speed: 0`
  - `Curve: ProjectM.CurveReference ProjectM.CurveReference`
  - `RotationMode: ProjectM.MovementCurveRotationMode InverseDirection`
  - `TileCollisionHitCount: 0`
  - `CurveId: 0`
  - `StopOnMapCollision: False`

- **ProjectM.DashSpawn**
  - `MinRange: 0`
  - `MaxRange: 0`
  - `UseMinMaxRange: False`

- **ProjectM.Knockback**
  - `CanCastModId: Unset`
  - `CanMoveModId: Unset`
  - `Importance: 0`
  - `ApplyStun: False`

- **ProjectM.LifeTime**
  - `Duration: 0.75`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.BuffModificationFlagData**
  - `ModificationTypes: 528`
  - `ModificationId: Unset`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_cfedcgehh`

- **Unity.Transforms.Rotation**
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Unity.Transforms.Translation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **ProjectM.Gameplay.Scripting.Script_Knockback_Wall_Buff_DataServer**
  - `LastPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `HitOffset: Unity.Mathematics.float3 float3(0f, 1f, 0f)`
  - `BuffDuration: 1`
  - `HitRadius: 1`
  - `BuffType: Buff_General_Stun PrefabGuid(355774169)`
  - `TriggerSequence: SequenceGUID 653389951`

- **Unity.Transforms.LocalToWorld**
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- **Unity.Transforms.LocalTransform**
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: -1483130162`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.ServerControlsMovementBuff**

- **ProjectM.Scripting.ScriptSpawn**

- **ProjectM.Scripting.ScriptUpdate**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **ProjectM.Network.NetworkSnapshotType**
