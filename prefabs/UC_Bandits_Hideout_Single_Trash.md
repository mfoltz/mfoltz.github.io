---
title: UC_Bandits_Hideout_Single_Trash
guid: 1007057368
categories: ['All', 'UC']
nav_exclude: true
search_exclude: true
layout: default
---

# UC_Bandits_Hideout_Single_Trash

**GUID:** `1007057368`

**Categories:** [All](/prefabs/All), [UC](/prefabs/UC)

## Components

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

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
  - `_Value: 1007057368`

- **ProjectM.UnitCompositionGroupEntry**

- **[0]**
  - `TimeRequirement: GUID Not Found`
  - `Id: ProjectM.UnitCompositionId ProjectM.UnitCompositionId`
  - `Weight: 50`
  - `UnitsStartIndex: 0`
  - `UnitsCount: 1`

- **[1]**
  - `TimeRequirement: GUID Not Found`
  - `Id: ProjectM.UnitCompositionId ProjectM.UnitCompositionId`
  - `Weight: 70`
  - `UnitsStartIndex: 1`
  - `UnitsCount: 1`

- **ProjectM.UnitCompositionGroupUnitEntry**

- **[0]**
  - `Unit: CHAR_Bandit_Hunter PrefabGuid(-1301144178)`
  - `IsVBloodUnit: False`
  - `CustomVBloodUnit: GUID Not Found`
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Trash`

- **[1]**
  - `Unit: CHAR_Bandit_Thug PrefabGuid(-301730941)`
  - `IsVBloodUnit: False`
  - `CustomVBloodUnit: GUID Not Found`
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Trash`

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**
