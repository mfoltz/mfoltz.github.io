---
title: Item_Ingredient_Plant_RadiantFiber
guid: -182923609
categories: ['All', 'Item']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `-182923609`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [Item]({{% relref "prefabs/Item.md" %}})

## Components

- [ProjectM.InventoryItem]({{% relref "components/InventoryItem.md" %}})
  - `ContainerEntity: Entity(0:0)`

- [ProjectM.ItemData]({{% relref "components/ItemData.md" %}})
  - `SilverValue: 1`
  - `Entity: Entity(0:0)`
  - `ItemTypeGUID: Item_Ingredient_Plant_RadiantFiber PrefabGuid(-182923609)`
  - `DropItemPrefab: Resource_Drop_General PrefabGuid(-1221682951)`
  - `DropItemArc: GUID Not Found`
  - `MaxAmount: 500`
  - `ItemType: ProjectM.ItemType Stackable`
  - `ItemCategory: ProjectM.ItemCategory Herb`
  - `RemoveOnConsume: True`
  - `SortOrder: 2`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Shared.Salvageable]({{% relref "components/Salvageable.md" %}})
  - `RecipeGUID: Recipe_CastleUpkeep_T02 PrefabGuid(-1281672171)`
  - `SalvageFactor: 1`
  - `SalvageTimer: 10`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: -182923609`

- [ProjectM.RecipeRequirementBuffer]({{% relref "components/RecipeRequirementBuffer.md" %}})

- **[0]**
  - `Guid: Item_Ingredient_Gemdust PrefabGuid(820932258)`
  - `Amount: 8`

- **[1]**
  - `Guid: Item_Ingredient_Plant_PlantFiber PrefabGuid(-1409142667)`
  - `Amount: 16`

- **[2]**
  - `Guid: Item_Ingredient_Pollen PrefabGuid(855691699)`
  - `Amount: 24`

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
