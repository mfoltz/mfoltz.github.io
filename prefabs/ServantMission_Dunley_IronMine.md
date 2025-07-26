---
title: ServantMission_Dunley_IronMine
guid: -1591895762
categories:
- All
- Servant
nav_exclude: true
search_exclude: true
layout: default
components:
- MissionData
- DestroyData
- DestroyState
- Rotation
- Translation
- LocalToWorld
- LocalTransform
- PrefabGUID
- PerksBuffer
- DropTableBuffer
- SpawnTag
- Prefab
- Simulate
---

# ServantMission_Dunley_IronMine

**GUID:** `-1591895762`

**Categories:** [All](/prefabs/All), [Servant](/prefabs/Servant)

## Components

- [MissionData](/components/MissionData){:target="_blank"}
  - `PrefabGUID: ServantMission_Dunley_IronMine PrefabGuid(-1591895762)`
  - `MissionDifficulty: 640`
  - `ServantSlots: 2`
  - `AlwaysUnlocked: False`

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
  - `_Value: -1591895762`

- [PerksBuffer](/components/PerksBuffer){:target="_blank"}

- **[0]**
  - `Perk: ServantPerk_Faction_DunleyExpert PrefabGuid(81754057)`

- **[1]**
  - `Perk: ServantPerk_BloodType_Brute PrefabGuid(740985277)`

- [DropTableBuffer](/components/DropTableBuffer){:target="_blank"}

- **[0]**
  - `DropTableGuid: DT_Missions_Dunley_IronMine PrefabGuid(1667938211)`
  - `DropTrigger: ProjectM.Shared.DropTriggerType OnDestroy`
  - `RelicType: ProjectM.Shared.RelicType None`

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
