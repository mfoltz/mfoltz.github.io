---
title: Item_NewBag_T03
guid: -261654929
categories: ['All', 'Item']
nav_exclude: true
search_exclude: true
layout: default
---

# Item_NewBag_T03

**GUID:** `-261654929`

**Categories:** [All](/prefabs/All), [Item](/prefabs/Item)

## Components

- **ProjectM.Equippable**
  - `EquipTarget: NetworkedEntity(0:0)`
  - `EquipBuff: Entity(0:0)`

- **ProjectM.InventoryItem**
  - `ContainerEntity: Entity(0:0)`

- **ProjectM.ItemData**
  - `SilverValue: 1`
  - `Entity: Prefab Item_NewBag_T03 PrefabGuid(-261654929) - Entity(20066:1)`
  - `ItemTypeGUID: Item_NewBag_T03 PrefabGuid(-261654929)`
  - `DropItemPrefab: Resource_Drop_Bag PrefabGuid(-132814229)`
  - `DropItemArc: GUID Not Found`
  - `MaxAmount: 1`
  - `ItemType: ProjectM.ItemType Equippable`
  - `ItemCategory: ProjectM.ItemCategory BloodBound, Bag`
  - `RemoveOnConsume: True`
  - `SortOrder: 3`

- **ProjectM.ModifyInventorySizeBuff**
  - `SlotCount: 10`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.EquippableData**
  - `BuffGuid: EquipBuff_Bag_Base PrefabGuid(-783958722)`
  - `EquipmentType: ProjectM.EquipmentType Bag`
  - `WeaponType: ProjectM.WeaponType None`
  - `EquipmentSet: GUID Not Found`
  - `SCTBrokenText: Stunlock.Core.AssetGuid e4db74e6b3c4441289590a83d7e2c88f`
  - `DurabilitySettings: Item_DurabilitySettings`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.SyncToUserBitMask**
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_ahbbjggfkj`

- **ProjectM.Shared.Salvageable**
  - `RecipeGUID: Recipe_Bag_New_T03 PrefabGuid(-1025651560)`
  - `SalvageFactor: 0.75`
  - `SalvageTimer: 8`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: -261654929`

- **ProjectM.Network.SyncToUserBuffer**

- **ProjectM.RecipeRequirementBuffer**

- **ProjectM.ModifyUnitStatBuff_DOTS**

- **[0]**
  - `AttributeCapType: ProjectM.AttributeCapType Uncapped`
  - `StatType: ProjectM.UnitStatType InventorySlots`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 10`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **[1]**
  - `AttributeCapType: ProjectM.AttributeCapType Uncapped`
  - `StatType: ProjectM.UnitStatType SilverCoinResistance`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 200`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.Network.AlwaysNetworked**

- **ProjectM.Network.OnlySyncToUsersTag**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **ProjectM.Network.NetworkSnapshotType**
