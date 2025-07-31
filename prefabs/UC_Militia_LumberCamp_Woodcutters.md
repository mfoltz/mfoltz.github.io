---
title: UC_Militia_LumberCamp_Woodcutters
guid: -630324966
categories: ['All', 'UC']
nav_exclude: true
search_exclude: true
layout: default
---

# UC_Militia_LumberCamp_Woodcutters

**GUID:** `-630324966`

**Categories:** [All](/prefabs/All), [UC](/prefabs/UC)

## Components

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

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
  - `_Value: -630324966`

- [ProjectM.UnitCompositionGroupEntry](/components/UnitCompositionGroupEntry)

- **[0]**
  - `TimeRequirement: DTS_Everyday_Day PrefabGuid(-684975497)`
  - `Id: ProjectM.UnitCompositionId ProjectM.UnitCompositionId`
  - `Weight: 100`
  - `UnitsStartIndex: 0`
  - `UnitsCount: 1`

- **[1]**
  - `TimeRequirement: DTS_Everyday_Night PrefabGuid(2115694930)`
  - `Id: ProjectM.UnitCompositionId ProjectM.UnitCompositionId`
  - `Weight: 50`
  - `UnitsStartIndex: 1`
  - `UnitsCount: 2`

- [ProjectM.UnitCompositionGroupUnitEntry](/components/UnitCompositionGroupUnitEntry)

- **[0]**
  - `Unit: CHAR_Farmlands_Woodcutter_Standard PrefabGuid(-893091615)`
  - `IsVBloodUnit: False`
  - `CustomVBloodUnit: GUID Not Found`
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Trash`

- **[1]**
  - `Unit: CHAR_Farmlands_Woodcutter_Standard PrefabGuid(-893091615)`
  - `IsVBloodUnit: False`
  - `CustomVBloodUnit: GUID Not Found`
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Trash`

- **[2]**
  - `Unit: CHAR_Farmlands_Woodcutter_Standard PrefabGuid(-893091615)`
  - `IsVBloodUnit: False`
  - `CustomVBloodUnit: GUID Not Found`
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Trash`

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)
