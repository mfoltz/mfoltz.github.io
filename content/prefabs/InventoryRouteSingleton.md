---
title: InventoryRouteSingleton
guid: -2067847121
categories: ['All', 'Remainders']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `-2067847121`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [Remainders]({{% relref "prefabs/Remainders.md" %}})

## Components

- [ProjectM.SingletonPrefab]({{% relref "components/SingletonPrefab.md" %}})
  - `AutomaticInstantiation: True`
  - `OverrideExisting: True`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.InventoryRouteSingleton_Server**
  - `PrefabIncoming: InventoryRouteInstance_Incoming PrefabGuid(1741593497)`
  - `PrefabOutgoing: InventoryRouteInstance_Outgoing PrefabGuid(2051027792)`
  - `PrefabBoth: InventoryRouteInstance_Both PrefabGuid(-1946518072)`
  - `RouteSyncBuff: InventoryRoute_SyncBuff PrefabGuid(2128314821)`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: -2067847121`

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
