---
title: ServantMission_Gloomrot_PestPools
guid: -1170116308
categories: ['All', 'Servant']
nav_exclude: true
search_exclude: false
layout: default
---

# ServantMission_Gloomrot_PestPools

**GUID:** `-1170116308`

**Categories:** [All](/prefabs/All), [Servant](/prefabs/Servant)

## Components

- [MissionData](/components/MissionData){:target="_blank"}
  - `PrefabGUID: ServantMission_Gloomrot_PestPools PrefabGuid(-1170116308)`
  - `MissionDifficulty: 800`
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
  - `_Value: -1170116308`

- [PerksBuffer](/components/PerksBuffer){:target="_blank"}

- **[0]**
  - `Perk: ServantPerk_Faction_GloomrotExpert PrefabGuid(-1509519094)`

- **[1]**
  - `Perk: ServantPerk_BloodType_Warrior PrefabGuid(-1947526080)`

- [DropTableBuffer](/components/DropTableBuffer){:target="_blank"}

- **[0]**
  - `DropTableGuid: DT_Missions_Gloomrot_PestPools PrefabGuid(-1206022078)`
  - `DropTrigger: ProjectM.Shared.DropTriggerType OnDestroy`
  - `RelicType: ProjectM.Shared.RelicType None`

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
