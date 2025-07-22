---
title: UC_UpperGloomrot_General_Solo_Tank
guid: 1495318020
categories: ['All', 'UC']
nav_exclude: true
search_exclude: true
layout: default
---

# UC_UpperGloomrot_General_Solo_Tank

**GUID:** `1495318020`

**Categories:** [All](/prefabs/All), [UC](/prefabs/UC)

## Components

- [ProjectM.DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Unity.Transforms.Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Transforms.LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 1495318020`

- [ProjectM.UnitCompositionGroupEntry](/components/UnitCompositionGroupEntry){:target="_blank"}

- **[0]**
  - `TimeRequirement: DTS_Everyday_AllDay PrefabGuid(482895609)`
  - `Id: ProjectM.UnitCompositionId ProjectM.UnitCompositionId`
  - `Weight: 50`
  - `UnitsStartIndex: 0`
  - `UnitsCount: 1`

- **[1]**
  - `TimeRequirement: DTS_Everyday_AllDay PrefabGuid(482895609)`
  - `Id: ProjectM.UnitCompositionId ProjectM.UnitCompositionId`
  - `Weight: 50`
  - `UnitsStartIndex: 1`
  - `UnitsCount: 1`

- **[2]**
  - `TimeRequirement: DTS_Everyday_AllDay PrefabGuid(482895609)`
  - `Id: ProjectM.UnitCompositionId ProjectM.UnitCompositionId`
  - `Weight: 35`
  - `UnitsStartIndex: 2`
  - `UnitsCount: 1`

- [ProjectM.UnitCompositionGroupUnitEntry](/components/UnitCompositionGroupUnitEntry){:target="_blank"}

- **[0]**
  - `Unit: CHAR_Gloomrot_SpiderTank_Zapper PrefabGuid(-2018710724)`
  - `IsVBloodUnit: False`
  - `CustomVBloodUnit: GUID Not Found`
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Normal`

- **[1]**
  - `Unit: CHAR_Gloomrot_SpiderTank_Gattler PrefabGuid(-884401089)`
  - `IsVBloodUnit: False`
  - `CustomVBloodUnit: GUID Not Found`
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Normal`

- **[2]**
  - `Unit: CHAR_Gloomrot_SpiderTank_LightningRod PrefabGuid(1655577903)`
  - `IsVBloodUnit: False`
  - `CustomVBloodUnit: GUID Not Found`
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Normal`

- [Unity.Entities.SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
