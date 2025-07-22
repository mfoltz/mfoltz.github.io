---
title: InventoryRouteSingleton
guid: -2067847121
categories: ['All', 'Remainders']
nav_exclude: true
search_exclude: false
layout: default
---

# InventoryRouteSingleton

**GUID:** `-2067847121`

**Categories:** [All](/prefabs/All), [Remainders](/prefabs/Remainders)

## Components

- [ProjectM.SingletonPrefab](/components/SingletonPrefab){:target="_blank"}
  - `AutomaticInstantiation: True`
  - `OverrideExisting: True`

- [ProjectM.DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.InventoryRouteSingleton_Server**
  - `PrefabIncoming: InventoryRouteInstance_Incoming PrefabGuid(1741593497)`
  - `PrefabOutgoing: InventoryRouteInstance_Outgoing PrefabGuid(2051027792)`
  - `PrefabBoth: InventoryRouteInstance_Both PrefabGuid(-1946518072)`
  - `RouteSyncBuff: InventoryRoute_SyncBuff PrefabGuid(2128314821)`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -2067847121`

- [Unity.Entities.SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
