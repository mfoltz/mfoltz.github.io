---
title: CO_Blackfang_Peon
guid: -637181845
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

# CO_Blackfang_Peon

**GUID:** `-637181845`

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
  - `MaxRange: 2`

- [LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -637181845`

- [LinkedEntityGroup](/components/LinkedEntityGroup){:target="_blank"}

- **[0]**
  - `Value: Prefab CO_Blackfang_Peon PrefabGuid(-637181845) - Entity(18484:5)`

- **[1]**
  - `Value: Entity(38186:4)`

- **[2]**
  - `Value: Entity(2655:5)`

- **[3]**
  - `Value: Entity(38187:4)`

- **[4]**
  - `Value: Entity(2656:5)`

- [CastOptionStateBuffer](/components/CastOptionStateBuffer){:target="_blank"}

- **[0]**
  - `State: ProjectM.GenericEnemyState Combat`
  - `Entity: Entity(38186:4)`

- **[1]**
  - `State: ProjectM.GenericEnemyState Idle`
  - `Entity: Entity(38187:4)`

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
