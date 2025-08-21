---
title: Item_Dummy_Ghoul
guid: 2042311455
categories: ['All', 'Item']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `2042311455`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [Item]({{% relref "prefabs/Item.md" %}})

## Components

- [ProjectM.InventoryItem]({{% relref "components/InventoryItem.md" %}})
  - `ContainerEntity: Entity(0:0)`

- [ProjectM.ItemData]({{% relref "components/ItemData.md" %}})
  - `SilverValue: 1`
  - `Entity: Entity(0:0)`
  - `ItemTypeGUID: Item_Dummy_Ghoul PrefabGuid(2042311455)`
  - `DropItemPrefab: CHAR_Undead_Ghoul_TombSummon PrefabGuid(937597711)`
  - `DropItemArc: GUID Not Found`
  - `MaxAmount: 1`
  - `ItemType: ProjectM.ItemType Stackable`
  - `ItemCategory: ProjectM.ItemCategory TeleportBound`
  - `RemoveOnConsume: True`
  - `SortOrder: 0`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 2042311455`

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
