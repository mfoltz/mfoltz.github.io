---
title: CO_Blackfang_PeonCarryingBarrel
guid: 316993000
categories: ['All', 'CO']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `316993000`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [CO]({{% relref "prefabs/CO.md" %}})

## Components

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Unity.Transforms.Rotation]({{% relref "components/Rotation.md" %}})
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation]({{% relref "components/Translation.md" %}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.Behaviours.CastOptionRoot]({{% relref "components/CastOptionRoot.md" %}})
  - `MaxRange: 20`

- [Unity.Transforms.LocalToWorld]({{% relref "components/LocalToWorld.md" %}})
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform]({{% relref "components/LocalTransform.md" %}})
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 316993000`

- [Unity.Entities.LinkedEntityGroup]({{% relref "components/LinkedEntityGroup.md" %}})

- **[0]**
  - `Value: Prefab CO_Blackfang_PeonCarryingBarrel PrefabGuid(316993000) - Entity(32615:8)`

- **[1]**
  - `Value: Entity(38092:4)`

- **[2]**
  - `Value: Entity(2673:5)`

- **[3]**
  - `Value: Entity(2674:5)`

- **[4]**
  - `Value: Entity(38093:4)`

- **[5]**
  - `Value: Entity(2675:5)`

- [ProjectM.Behaviours.CastOptionStateBuffer]({{% relref "components/CastOptionStateBuffer.md" %}})

- **[0]**
  - `State: ProjectM.GenericEnemyState Combat`
  - `Entity: Entity(38092:4)`

- **[1]**
  - `State: ProjectM.GenericEnemyState Follow`
  - `Entity: Entity(38093:4)`

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
