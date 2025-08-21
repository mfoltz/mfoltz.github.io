---
title: Item_Ingredient_Plant_BleedingHeart
guid: -135435342
categories: ['All', 'Item']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `-135435342`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [Item]({{% relref "prefabs/Item.md" %}})

## Components

- [ProjectM.InventoryItem]({{% relref "components/InventoryItem.md" %}})
  - `ContainerEntity: Entity(0:0)`

- [ProjectM.ItemData]({{% relref "components/ItemData.md" %}})
  - `SilverValue: 1`
  - `Entity: Entity(0:0)`
  - `ItemTypeGUID: Item_Ingredient_Plant_BleedingHeart PrefabGuid(-135435342)`
  - `DropItemPrefab: Resource_Drop_General PrefabGuid(-1221682951)`
  - `DropItemArc: GUID Not Found`
  - `MaxAmount: 500`
  - `ItemType: ProjectM.ItemType Stackable`
  - `ItemCategory: ProjectM.ItemCategory Flower, Herb, StablesIngredient`
  - `RemoveOnConsume: True`
  - `SortOrder: 11`

- **ProjectM.StablesIngredient**
  - `Stat: ProjectM.StablesStat Acceleration`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: -135435342`

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
