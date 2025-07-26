---
title: InventoryRouteSingleton
guid: -2067847121
categories:
- All
- Remainders
nav_exclude: true
search_exclude: true
layout: default
components:
- SingletonPrefab
- DestroyData
- DestroyState
- PrefabGUID
- SpawnTag
- Prefab
- Simulate
---

# InventoryRouteSingleton

**GUID:** `-2067847121`

**Categories:** [All](/prefabs/All), [Remainders](/prefabs/Remainders)

## Components

- [SingletonPrefab](/components/SingletonPrefab){:target="_blank"}
  - `AutomaticInstantiation: True`
  - `OverrideExisting: True`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.InventoryRouteSingleton_Server**
  - `PrefabIncoming: InventoryRouteInstance_Incoming PrefabGuid(1741593497)`
  - `PrefabOutgoing: InventoryRouteInstance_Outgoing PrefabGuid(2051027792)`
  - `PrefabBoth: InventoryRouteInstance_Both PrefabGuid(-1946518072)`
  - `RouteSyncBuff: InventoryRoute_SyncBuff PrefabGuid(2128314821)`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -2067847121`

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
