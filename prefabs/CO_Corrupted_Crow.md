---
title: CO_Corrupted_Crow
guid: -1929345806
categories:
- All
- CO
nav_exclude: true
search_exclude: true
layout: default
components:
- DestroyData
- DestroyState
- Rotation
- Translation
- CastOptionRoot
- LocalToWorld
- LocalTransform
- PrefabGUID
- LinkedEntityGroup
- CastOptionStateBuffer
- SpawnTag
- Prefab
- Simulate
---

# CO_Corrupted_Crow

**GUID:** `-1929345806`

**Categories:** [All](/prefabs/All), [CO](/prefabs/CO)

## Components

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [CastOptionRoot](/components/CastOptionRoot){:target="_blank"}
  - `MaxRange: 20`

- [LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -1929345806`

- [LinkedEntityGroup](/components/LinkedEntityGroup){:target="_blank"}

- **[0]**
  - `Value: Prefab CO_Corrupted_Crow PrefabGuid(-1929345806) - Entity(18488:5)`

- **[1]**
  - `Value: Entity(38125:4)`

- **[2]**
  - `Value: Entity(2734:5)`

- **[3]**
  - `Value: Entity(2735:5)`

- **[4]**
  - `Value: Entity(2736:5)`

- **[5]**
  - `Value: Entity(2737:5)`

- **[6]**
  - `Value: Entity(38126:4)`

- **[7]**
  - `Value: Entity(2738:5)`

- [CastOptionStateBuffer](/components/CastOptionStateBuffer){:target="_blank"}

- **[0]**
  - `State: ProjectM.GenericEnemyState Combat`
  - `Entity: Entity(38125:4)`

- **[1]**
  - `State: ProjectM.GenericEnemyState Idle, Return, Follow`
  - `Entity: Entity(38126:4)`

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
