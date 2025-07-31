---
title: UC_Gloomrot_Villager_Night
guid: -592397662
categories: ['All', 'UC']
nav_exclude: true
search_exclude: true
layout: default
---

# UC_Gloomrot_Villager_Night

**GUID:** `-592397662`

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
  - `_Value: -592397662`

- [ProjectM.UnitCompositionGroupEntry](/components/UnitCompositionGroupEntry)

- **[0]**
  - `TimeRequirement: DTS_Everyday_Night PrefabGuid(2115694930)`
  - `Id: ProjectM.UnitCompositionId ProjectM.UnitCompositionId`
  - `Weight: 50`
  - `UnitsStartIndex: 0`
  - `UnitsCount: 1`

- **[1]**
  - `TimeRequirement: DTS_Everyday_Night PrefabGuid(2115694930)`
  - `Id: ProjectM.UnitCompositionId ProjectM.UnitCompositionId`
  - `Weight: 50`
  - `UnitsStartIndex: 1`
  - `UnitsCount: 1`

- [ProjectM.UnitCompositionGroupUnitEntry](/components/UnitCompositionGroupUnitEntry)

- **[0]**
  - `Unit: CHAR_Gloomrot_Villager_Male PrefabGuid(-732208863)`
  - `IsVBloodUnit: False`
  - `CustomVBloodUnit: GUID Not Found`
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Trash`

- **[1]**
  - `Unit: CHAR_Gloomrot_Villager_Female PrefabGuid(1216169364)`
  - `IsVBloodUnit: False`
  - `CustomVBloodUnit: GUID Not Found`
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Trash`

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)
