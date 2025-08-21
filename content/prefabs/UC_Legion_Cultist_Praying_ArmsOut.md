---
title: UC_Legion_Cultist_Praying_ArmsOut
guid: 1629399595
categories: ['All', 'UC']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `1629399595`

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
  - `_Value: 1629399595`

- [ProjectM.UnitCompositionGroupEntry]({{% relref "components/UnitCompositionGroupEntry.md" %}})

- **[0]**
  - `TimeRequirement: GUID Not Found`
  - `Id: ProjectM.UnitCompositionId ProjectM.UnitCompositionId`
  - `Weight: 50`
  - `UnitsStartIndex: 0`
  - `UnitsCount: 1`

- **[1]**
  - `TimeRequirement: GUID Not Found`
  - `Id: ProjectM.UnitCompositionId ProjectM.UnitCompositionId`
  - `Weight: 50`
  - `UnitsStartIndex: 1`
  - `UnitsCount: 1`

- [ProjectM.UnitCompositionGroupUnitEntry]({{% relref "components/UnitCompositionGroupUnitEntry.md" %}})

- **[0]**
  - `Unit: CHAR_Vampire_Cultist_PrayingArmsOut PrefabGuid(-1438710930)`
  - `IsVBloodUnit: False`
  - `CustomVBloodUnit: GUID Not Found`
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Normal`

- **[1]**
  - `Unit: CHAR_Vampire_Cultist_PrayingArmsOut_Female PrefabGuid(-1074322242)`
  - `IsVBloodUnit: False`
  - `CustomVBloodUnit: GUID Not Found`
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Normal`

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
