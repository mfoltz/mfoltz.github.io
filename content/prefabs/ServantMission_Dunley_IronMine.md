---
title: ServantMission_Dunley_IronMine
guid: -1591895762
categories: ['All', 'Servant']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `-1591895762`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [Servant]({{% relref "prefabs/Servant.md" %}})

## Components

- [ProjectM.MissionData]({{% relref "components/MissionData.md" %}})
  - `PrefabGUID: ServantMission_Dunley_IronMine PrefabGuid(-1591895762)`
  - `MissionDifficulty: 640`
  - `ServantSlots: 2`
  - `AlwaysUnlocked: False`

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
  - `_Value: -1591895762`

- [ProjectM.PerksBuffer]({{% relref "components/PerksBuffer.md" %}})

- **[0]**
  - `Perk: ServantPerk_Faction_DunleyExpert PrefabGuid(81754057)`

- **[1]**
  - `Perk: ServantPerk_BloodType_Brute PrefabGuid(740985277)`

- [ProjectM.Shared.DropTableBuffer]({{% relref "components/DropTableBuffer.md" %}})

- **[0]**
  - `DropTableGuid: DT_Missions_Dunley_IronMine PrefabGuid(1667938211)`
  - `DropTrigger: ProjectM.Shared.DropTriggerType OnDestroy`
  - `RelicType: ProjectM.Shared.RelicType None`

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
