---
title: ServantMission_Noctem_Ruins
guid: 311828353
categories: ['All', 'Servant']
nav_exclude: true
search_exclude: true
layout: default
---

# ServantMission_Noctem_Ruins

**GUID:** `311828353`

**Categories:** [All](/prefabs/All), [Servant](/prefabs/Servant)

## Components

- [ProjectM.MissionData](/components/MissionData){:target="_blank"}
  - `PrefabGUID: ServantMission_Noctem_Ruins PrefabGuid(311828353)`
  - `MissionDifficulty: 800`
  - `ServantSlots: 1`
  - `AlwaysUnlocked: False`

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
  - `_Value: 311828353`

- [ProjectM.PerksBuffer](/components/PerksBuffer){:target="_blank"}

- **[0]**
  - `Perk: ServantPerk_Faction_NoctemExpert PrefabGuid(-1031211388)`

- **[1]**
  - `Perk: ServantPerk_BloodType_Warrior PrefabGuid(-1947526080)`

- [ProjectM.Shared.DropTableBuffer](/components/DropTableBuffer){:target="_blank"}

- **[0]**
  - `DropTableGuid: DT_Missions_Noctem_Ruins PrefabGuid(814098336)`
  - `DropTrigger: ProjectM.Shared.DropTriggerType OnDestroy`
  - `RelicType: ProjectM.Shared.RelicType None`

- [Unity.Entities.SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
