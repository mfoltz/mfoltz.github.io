---
title: ServantMission_Silverlight_Brighthaven_Cathedral
guid: -1034748789
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

# ServantMission_Silverlight_Brighthaven_Cathedral

**GUID:** `-1034748789`

**Categories:** [All](/prefabs/All), [Servant](/prefabs/Servant)

## Components

- [MissionData](/components/MissionData){:target="_blank"}
  - `PrefabGUID: ServantMission_Silverlight_Brighthaven_Cathedral PrefabGuid(-1034748789)`
  - `MissionDifficulty: 940`
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
  - `_Value: -1034748789`

- [PerksBuffer](/components/PerksBuffer){:target="_blank"}

- **[0]**
  - `Perk: ServantPerk_Faction_SilverExpert PrefabGuid(226032448)`

- **[1]**
  - `Perk: ServantPerk_BloodType_Scholar PrefabGuid(-1410655756)`

- [DropTableBuffer](/components/DropTableBuffer){:target="_blank"}

- **[0]**
  - `DropTableGuid: DT_Missions_Silverlight_BrighthavenCathedral PrefabGuid(713357348)`
  - `DropTrigger: ProjectM.Shared.DropTriggerType OnDestroy`
  - `RelicType: ProjectM.Shared.RelicType None`

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
