---
title: ServantMission_Cursed_AncientVillage
guid: -395595366
categories: ['All', 'Servant']
nav_exclude: true
search_exclude: true
layout: default
---

# ServantMission_Cursed_AncientVillage

**GUID:** `-395595366`

**Categories:** [All](/prefabs/All), [Servant](/prefabs/Servant)

## Components

- [ProjectM.MissionData](/components/MissionData)
  - `PrefabGUID: ServantMission_Cursed_AncientVillage PrefabGuid(-395595366)`
  - `MissionDifficulty: 840`
  - `ServantSlots: 1`
  - `AlwaysUnlocked: False`

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
  - `_Value: -395595366`

- [ProjectM.PerksBuffer](/components/PerksBuffer)

- **[0]**
  - `Perk: ServantPerk_Faction_CursedExpert PrefabGuid(-1394605411)`

- **[1]**
  - `Perk: ServantPerk_BloodType_Worker PrefabGuid(-49207502)`

- [ProjectM.Shared.DropTableBuffer](/components/DropTableBuffer)

- **[0]**
  - `DropTableGuid: DT_Missions_Cursed_AncientVillage PrefabGuid(-1487881045)`
  - `DropTrigger: ProjectM.Shared.DropTriggerType OnDestroy`
  - `RelicType: ProjectM.Shared.RelicType None`

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)
