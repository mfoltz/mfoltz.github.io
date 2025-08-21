---
title: Item_Ingredient_MapZone_Fish
guid: 193249843
categories: ['All', 'Item']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `193249843`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [Item]({{% relref "prefabs/Item.md" %}})

## Components

- [ProjectM.InventoryItem]({{% relref "components/InventoryItem.md" %}})
  - `ContainerEntity: Entity(0:0)`

- [ProjectM.ItemData]({{% relref "components/ItemData.md" %}})
  - `SilverValue: 1`
  - `Entity: Entity(0:0)`
  - `ItemTypeGUID: Item_Ingredient_MapZone_Fish PrefabGuid(193249843)`
  - `DropItemPrefab: Resource_Drop_Fish PrefabGuid(526872006)`
  - `DropItemArc: GUID Not Found`
  - `MaxAmount: 5`
  - `ItemType: ProjectM.ItemType Stackable`
  - `ItemCategory: ProjectM.ItemCategory TeleportBound`
  - `RemoveOnConsume: True`
  - `SortOrder: 0`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Shared.Salvageable]({{% relref "components/Salvageable.md" %}})
  - `RecipeGUID: GUID Not Found`
  - `SalvageFactor: 0.25`
  - `SalvageTimer: 8`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 193249843`

- [ProjectM.RecipeRequirementBuffer]({{% relref "components/RecipeRequirementBuffer.md" %}})

- **[0]**
  - `Guid: Item_Ingredient_FishBone PrefabGuid(424158416)`
  - `Amount: 1`

- **[1]**
  - `Guid: Item_Ingredient_Fishoil PrefabGuid(-242277891)`
  - `Amount: 6`

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
