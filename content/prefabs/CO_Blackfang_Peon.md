---
title: CO_Blackfang_Peon
guid: -637181845
categories: ['All', 'CO']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `-637181845`

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
  - `MaxRange: 2`

- [Unity.Transforms.LocalToWorld]({{% relref "components/LocalToWorld.md" %}})
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform]({{% relref "components/LocalTransform.md" %}})
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: -637181845`

- [Unity.Entities.LinkedEntityGroup]({{% relref "components/LinkedEntityGroup.md" %}})

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

- [ProjectM.Behaviours.CastOptionStateBuffer]({{% relref "components/CastOptionStateBuffer.md" %}})

- **[0]**
  - `State: ProjectM.GenericEnemyState Combat`
  - `Entity: Entity(38186:4)`

- **[1]**
  - `State: ProjectM.GenericEnemyState Idle`
  - `Entity: Entity(38187:4)`

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
