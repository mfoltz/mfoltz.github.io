---
title: UC_Civilians_Farmers_Day
guid: -1321785047
categories:
- All
- UC
nav_exclude: true
search_exclude: true
layout: default
components:
- DestroyData
- DestroyState
- Rotation
- Translation
- LocalToWorld
- LocalTransform
- PrefabGUID
- UnitCompositionGroupEntry
- UnitCompositionGroupUnitEntry
- SpawnTag
- Prefab
- Simulate
---

# UC_Civilians_Farmers_Day

**GUID:** `-1321785047`

**Categories:** [All](/prefabs/All), [UC](/prefabs/UC)

## Components

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -1321785047`

- [UnitCompositionGroupEntry](/components/UnitCompositionGroupEntry){:target="_blank"}

- **[0]**
  - `TimeRequirement: DTS_Everyday_Day PrefabGuid(-684975497)`
  - `Id: ProjectM.UnitCompositionId ProjectM.UnitCompositionId`
  - `Weight: 50`
  - `UnitsStartIndex: 0`
  - `UnitsCount: 1`

- [UnitCompositionGroupUnitEntry](/components/UnitCompositionGroupUnitEntry){:target="_blank"}

- **[0]**
  - `Unit: CHAR_Farmlands_Farmer PrefabGuid(-1342764880)`
  - `IsVBloodUnit: False`
  - `CustomVBloodUnit: GUID Not Found`
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Trash`

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
