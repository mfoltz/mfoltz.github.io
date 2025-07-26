---
title: UC_Bandits_VBlood_FrostArrow
guid: 238760410
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

# UC_Bandits_VBlood_FrostArrow

**GUID:** `238760410`

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
  - `_Value: 238760410`

- [UnitCompositionGroupEntry](/components/UnitCompositionGroupEntry){:target="_blank"}

- **[0]**
  - `TimeRequirement: GUID Not Found`
  - `Id: ProjectM.UnitCompositionId ProjectM.UnitCompositionId`
  - `Weight: 50`
  - `UnitsStartIndex: 0`
  - `UnitsCount: 3`

- [UnitCompositionGroupUnitEntry](/components/UnitCompositionGroupUnitEntry){:target="_blank"}

- **[0]**
  - `Unit: CHAR_Bandit_Frostarrow_VBlood PrefabGuid(1124739990)`
  - `IsVBloodUnit: True`
  - `CustomVBloodUnit: GUID Not Found`
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Elite`

- **[1]**
  - `Unit: CHAR_Bandit_Thug PrefabGuid(-301730941)`
  - `IsVBloodUnit: False`
  - `CustomVBloodUnit: GUID Not Found`
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Trash`

- **[2]**
  - `Unit: CHAR_Bandit_Thug PrefabGuid(-301730941)`
  - `IsVBloodUnit: False`
  - `CustomVBloodUnit: GUID Not Found`
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Trash`

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
