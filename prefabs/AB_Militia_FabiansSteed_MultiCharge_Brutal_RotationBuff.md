---
title: AB_Militia_FabiansSteed_MultiCharge_Brutal_RotationBuff
guid: 1328632900
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Militia_FabiansSteed_MultiCharge_Brutal_RotationBuff

**GUID:** `1328632900`

**Categories:** [AB](/prefabs/AB/), [All](/prefabs/All/)

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

- **ProjectM.GetOwnerRotation**
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType Rotation`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Owner`
  - `InverseRotation: False`

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

- **ProjectM.LifeTime**
  - `Duration: 2`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.Network.ModifyRotation**
  - `PreviousTargetDirection: Il2CppSystem.Nullable_Unboxed`1[UnityEngine.Vector3]`
  - `OffsetRotation: Il2CppSystem.Nullable_Unboxed`1[UnityEngine.Vector3]`
  - `ActiveTimeline: ProjectM.Network.MinMaxValue ProjectM.Network.MinMaxValue`
  - `Value: 1`
  - `Curve: ProjectM.CurveReference ProjectM.CurveReference`
  - `Type: ProjectM.Network.RotationModificationType Multiply`
  - `TargetDirectionType: ProjectM.Network.TargetDirectionType SelfRotation`
  - `UseZeroAsDefaultForCurveRotation: False`
  - `SnapToDirection: False`

- **Unity.Transforms.Rotation**
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Unity.Transforms.Translation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **Unity.Transforms.LocalToWorld**
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- **Unity.Transforms.LocalTransform**
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 1328632900`

- **ProjectM.CreateGameplayEventsOnSpawn**
  - *(No fields)*

- **[0]**
  - `EventId: Local - -112044381`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*

