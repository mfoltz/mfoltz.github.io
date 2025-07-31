---
title: Buff_General_Knockback_Wind
guid: -1505593036
categories: ['All', 'Buff']
nav_exclude: true
search_exclude: true
layout: default
---

# Buff_General_Knockback_Wind

**GUID:** `-1505593036`

**Categories:** [All](/prefabs/All), [Buff](/prefabs/Buff)

## Components

- [ProjectM.Attach](/components/Attach)
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner](/components/EntityOwner)
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator](/components/EntityCreator)
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Buff](/components/Buff)
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

- [ProjectM.SpellTarget](/components/SpellTarget)
  - `Target: NetworkedEntity(0:0)`
  - `DestroyIfNotInteractable: True`

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age](/components/Age)
  - `Value: 0`

- [ProjectM.BuffCategory](/components/BuffCategory)
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag Knockback`
  - `KeepOldest: False`

- [ProjectM.Dash](/components/Dash)
  - `StartRotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`
  - `StartPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Range: 1.5`
  - `Speed: 0`
  - `Curve: ProjectM.CurveReference ProjectM.CurveReference`
  - `RotationMode: ProjectM.MovementCurveRotationMode InverseDirection`
  - `TileCollisionHitCount: 0`
  - `CurveId: 0`
  - `StopOnMapCollision: False`

- [ProjectM.DashSpawn](/components/DashSpawn)
  - `MinRange: 0`
  - `MaxRange: 0`
  - `UseMinMaxRange: False`

- [ProjectM.Knockback](/components/Knockback)
  - `CanCastModId: Unset`
  - `CanMoveModId: Unset`
  - `Importance: 0`
  - `ApplyStun: False`

- [ProjectM.LifeTime](/components/LifeTime)
  - `Duration: 0.75`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.BuffModificationFlagData](/components/BuffModificationFlagData)
  - `ModificationTypes: 528`
  - `ModificationId: Unset`

- [Unity.Transforms.Rotation](/components/Rotation)
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation](/components/Translation)
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Transforms.LocalToWorld](/components/LocalToWorld)
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform](/components/LocalTransform)
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID)
  - `_Value: -1505593036`

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)
