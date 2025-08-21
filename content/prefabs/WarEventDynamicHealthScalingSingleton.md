---
title: WarEventDynamicHealthScalingSingleton
guid: -571920625
categories: ['All', 'Remainders']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `-571920625`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [Remainders]({{% relref "prefabs/Remainders.md" %}})

## Components

- [ProjectM.SingletonPrefab]({{% relref "components/SingletonPrefab.md" %}})
  - `AutomaticInstantiation: True`
  - `OverrideExisting: True`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: -571920625`

- **ProjectM.Shared.WarEvents.WarEventDynamicHealthScalingElement**

- **[0]**
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Trash`
  - `DynamicallyWeakenAttackers: ProjectM.DynamicallyWeakenAttackers ProjectM.DynamicallyWeakenAttackers`

- **[1]**
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Normal`
  - `DynamicallyWeakenAttackers: ProjectM.DynamicallyWeakenAttackers ProjectM.DynamicallyWeakenAttackers`

- **[2]**
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Elite`
  - `DynamicallyWeakenAttackers: ProjectM.DynamicallyWeakenAttackers ProjectM.DynamicallyWeakenAttackers`

- **[3]**
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Boss`
  - `DynamicallyWeakenAttackers: ProjectM.DynamicallyWeakenAttackers ProjectM.DynamicallyWeakenAttackers`

- **[4]**
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Servant`
  - `DynamicallyWeakenAttackers: ProjectM.DynamicallyWeakenAttackers ProjectM.DynamicallyWeakenAttackers`

- **ProjectM.Shared.WarEvents.WarEventDynamicHealthScalingSingleton isn't handled**

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
