---
title: UC_UpperGloomrot_General_Solo_Tank
guid: 1495318020
categories: ['All', 'UC']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `1495318020`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [UC]({{% relref "prefabs/UC.md" %}})

## Components

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Unity.Transforms.Rotation]({{% relref "components/Rotation.md" %}})
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation]({{% relref "components/Translation.md" %}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Transforms.LocalToWorld]({{% relref "components/LocalToWorld.md" %}})
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform]({{% relref "components/LocalTransform.md" %}})
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 1495318020`

- [ProjectM.UnitCompositionGroupEntry]({{% relref "components/UnitCompositionGroupEntry.md" %}})

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

- [ProjectM.UnitCompositionGroupUnitEntry]({{% relref "components/UnitCompositionGroupUnitEntry.md" %}})

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

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
