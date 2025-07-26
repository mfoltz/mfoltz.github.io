---
title: ServantMission_Cursed_CursedVillage
guid: 1596714739
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

# ServantMission_Cursed_CursedVillage

**GUID:** `1596714739`

**Categories:** [All](/prefabs/All), [Servant](/prefabs/Servant)

## Components

- [MissionData](/components/MissionData){:target="_blank"}
  - `PrefabGUID: ServantMission_Cursed_CursedVillage PrefabGuid(1596714739)`
  - `MissionDifficulty: 840`
  - `ServantSlots: 1`
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
  - `_Value: 1596714739`

- [PerksBuffer](/components/PerksBuffer){:target="_blank"}

- **[0]**
  - `Perk: ServantPerk_Faction_CursedExpert PrefabGuid(-1394605411)`

- **[1]**
  - `Perk: ServantPerk_BloodType_Worker PrefabGuid(-49207502)`

- [DropTableBuffer](/components/DropTableBuffer){:target="_blank"}

- **[0]**
  - `DropTableGuid: DT_Missions_Cursed_AncientVillage PrefabGuid(-1487881045)`
  - `DropTrigger: ProjectM.Shared.DropTriggerType OnDestroy`
  - `RelicType: ProjectM.Shared.RelicType None`

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
