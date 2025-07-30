---
title: ProjectileBig
guid: 1136068294
categories: ['All', 'Remainders']
nav_exclude: true
search_exclude: true
layout: default
---

# ProjectileBig

**GUID:** `1136068294`

**Categories:** [All](/prefabs/All), [Remainders](/prefabs/Remainders)

## Components

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Age**
  - `Value: 0`

- **ProjectM.LifeTime**
  - `Duration: 4`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.Projectile**
  - `StartPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `EndPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Range: 28`
  - `Speed: 7`
  - `TravelToMouseCursorLengthOffset: 0`
  - `MinRange: 0`
  - `TravelToMouseCursor: False`
  - `RecalculateLifetimeBasedOnTarget: False`
  - `OverrideLifeTime: 0`
  - `DelayLifeTime: 0`

- **ProjectM.ProjectileDestroyData**
  - `HasHitTarget: False`

- **ProjectM.SpellMovement**
  - `StartPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `TargetPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `CurveXLoops: 1`
  - `XScale: 0`
  - `YScale: 0`
  - `CurrentY: 0`
  - `CurveY: ProjectM.CurveReference ProjectM.CurveReference`
  - `CurveX: ProjectM.CurveReference ProjectM.CurveReference`
  - `CurveZ: ProjectM.CurveReference ProjectM.CurveReference`
  - `SetRotationEveryFrame: True`
  - `Disabled: False`
  - `DisabledPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **ProjectM.Velocity**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **ProjectM.Team**
  - `Value: 1`
  - `FactionIndex: -1`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_fdjggbfcb`

- **Unity.Transforms.Rotation**
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Unity.Transforms.Translation**
  - `Value: Unity.Mathematics.float3 float3(0.8187774f, -2.850975f, -0.982573f)`

- **Unity.Transforms.LocalToWorld**
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0.8187774f,  0f, 1f, 0f, -2.850975f,  0f, 0f, 1f, -0.982573f,  0f, 0f, 0f, 1f)`

- **Unity.Transforms.LocalTransform**
  - `Position: Unity.Mathematics.float3 float3(0.8187774f, -2.850975f, -0.982573f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **ProjectM.TeamReference**
  - `Value: ModifiableEntity(0:0)`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 1136068294`

- **ProjectM.HitTrigger**

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.DisableWhenNoPlayersInRange**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **ProjectM.Network.NetworkSnapshotType**
