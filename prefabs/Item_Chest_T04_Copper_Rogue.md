---
title: Item_Chest_T04_Copper_Rogue
guid: 763326246
categories: ['All', 'Item']
nav_exclude: true
search_exclude: true
layout: default
---

# Item_Chest_T04_Copper_Rogue

**GUID:** `763326246`

**Categories:** [All](/prefabs/All), [Item](/prefabs/Item)

## Components

- **ProjectM.Equippable**
  - `EquipTarget: NetworkedEntity(0:0)`
  - `EquipBuff: Entity(0:0)`

- **ProjectM.InventoryItem**
  - `ContainerEntity: Entity(0:0)`

- **ProjectM.ItemData**
  - `SilverValue: 1`
  - `Entity: Prefab Item_Chest_T04_Copper_Rogue PrefabGuid(763326246) - Entity(3709:1)`
  - `ItemTypeGUID: Item_Chest_T04_Copper_Rogue PrefabGuid(763326246)`
  - `DropItemPrefab: Resource_Drop_Garment_Shirt PrefabGuid(-5892362)`
  - `DropItemArc: GUID Not Found`
  - `MaxAmount: 1`
  - `ItemType: ProjectM.ItemType Equippable`
  - `ItemCategory: ProjectM.ItemCategory Armor, BloodBound, LoseDurabilityOnDeath`
  - `RemoveOnConsume: True`
  - `SortOrder: 0`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.EquippableData**
  - `BuffGuid: EquipBuff_Chest_Base PrefabGuid(1872694456)`
  - `EquipmentType: ProjectM.EquipmentType Chest`
  - `WeaponType: ProjectM.WeaponType None`
  - `EquipmentSet: SetBonus_T04_Copper_Rogue PrefabGuid(-593972812)`
  - `SCTBrokenText: Stunlock.Core.AssetGuid 8e39f0bb85d247b4be2a3dfff6530abe`
  - `DurabilitySettings: Item_DurabilitySettings`

- **ProjectM.ArmorLevelSource**
  - `Level: 40`

- **ProjectM.Transmog.TransmogAssetKeyBlobData**
  - `Blob: Unity.Entities.BlobAssetReference`1[ProjectM.Transmog.TransmogAssetKeyBlob] Unity.Entities.BlobAssetReference`1[ProjectM.Transmog.TransmogAssetKeyBlob]`

- **ProjectM.Transmog.TransmogData**
  - `ActiveTransmogIndex: 0`
  - `NumColorOptions: 31`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **ProjectM.Network.SyncToUserBitMask**
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_cgjcfccfcc`

- **ProjectM.Shared.Salvageable**
  - `RecipeGUID: Recipe_Armor_Chest_T04_Copper_Rogue PrefabGuid(-235084625)`
  - `SalvageFactor: 0.75`
  - `SalvageTimer: 8`

- **ProjectM.Shared.Durability**
  - `Value: 601.1728`
  - `MaxDurability: 601.1728`
  - `RepairRecipe: Recipe_Armor_Chest_T04_Copper_Rogue PrefabGuid(-235084625)`
  - `LossType: ProjectM.Shared.DurabilityLossType LossOnDamageTaken`
  - `TakeDamageDurabilityLossFactor: 1`
  - `DealDamageTypeModifiers: DurabilityDamageModifiers`
  - `MainDamageModifier: 0.25`
  - `ResourceDamageModifier: 0`
  - `SiegeDamageModifier: 0`
  - `IsBroken: False`
  - `RepairSequence: SequenceGUID 375059735`
  - `OneLevelFactor: 0.8`
  - `TwoLevelFactor: 0.6`
  - `ThreeLevelFactor: 0.4`
  - `DestroyItemWhenBroken: False`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 763326246`

- **ProjectM.Network.SyncToUserBuffer**
  - *(No fields)*

- **ProjectM.RecipeRequirementBuffer**
  - *(No fields)*

- **ProjectM.ModifyUnitStatBuff_DOTS**
  - *(No fields)*

- **[0]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType MaxHealth`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 90.16078`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **[1]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType PhysicalCriticalStrikeChance`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 0`
  - `SoftCapValue: 0.25`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **ProjectM.Network.NetSnapshot**
  - *(No fields)*

- **[0]**
  - `Value: 38`

- **[1]**
  - `Value: 111`

- **[2]**
  - `Value: 127`

- **[3]**
  - `Value: 45`

- **[4]**
  - `Value: 15`

- **[5]**
  - `Value: 1`

- **[6]**
  - `Value: 0`

- **[7]**
  - `Value: 0`

- **[8]**
  - `Value: 15`

- **[9]**
  - `Value: 75`

- **[10]**
  - `Value: 22`

- **[11]**
  - `Value: 68`

- **[12]**
  - `Value: 175`

- **[13]**
  - `Value: 228`

- **[14]**
  - `Value: 252`

- **[15]**
  - `Value: 241`

- **[16]**
  - `Value: 15`

- **[17]**
  - `Value: 75`

- **[18]**
  - `Value: 22`

- **[19]**
  - `Value: 68`

- **[20]**
  - `Value: 0`

- **[21]**
  - `Value: 0`

- **[22]**
  - `Value: 0`

- **[23]**
  - `Value: 0`

- **[24]**
  - `Value: 0`

- **[25]**
  - `Value: 0`

- **[26]**
  - `Value: 0`

- **[27]**
  - `Value: 0`

- **[28]**
  - `Value: 0`

- **[29]**
  - `Value: 0`

- **[30]**
  - `Value: 0`

- **[31]**
  - `Value: 0`

- **[32]**
  - `Value: 175`

- **[33]**
  - `Value: 228`

- **[34]**
  - `Value: 252`

- **[35]**
  - `Value: 241`

- **[36]**
  - `Value: 0`

- **[37]**
  - `Value: 0`

- **[38]**
  - `Value: 0`

- **[39]**
  - `Value: 0`

- **40 total elements but only showing the first 36**
  - *(No fields)*

- **ProjectM.Network.SnapshotFrameChangedBuffer**
  - *(No fields)*

- **[0]**
  - `Value: -1`

- **[1]**
  - `Value: -1`

- **[2]**
  - `Value: -1`

- **[3]**
  - `Value: -1`

- **[4]**
  - `Value: -1`

- **[5]**
  - `Value: -1`

- **[6]**
  - `Value: -1`

- **[7]**
  - `Value: -1`

- **[8]**
  - `Value: -1`

- **[9]**
  - `Value: -1`

- **ProjectM.Network.AlwaysNetworked**
  - *(No fields)*

- **ProjectM.Network.OnlySyncToUsersTag**
  - *(No fields)*

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*

- **Unity.Entities.BlobAssetOwner**
  - *(No fields)*

- **ProjectM.Network.NetworkSnapshotType**
  - *(No fields)*

