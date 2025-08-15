---
title: Item_Legs_T08_DarkSilver_Scholar
guid: 703230071
categories: ['All', 'Item']
nav_exclude: true
search_exclude: true
layout: default
---

# Item_Legs_T08_DarkSilver_Scholar

**GUID:** `703230071`

**Categories:** [All](/prefabs/All), [Item](/prefabs/Item)

## Components

- [ProjectM.Equippable](/components/Equippable)
  - `EquipTarget: NetworkedEntity(0:0)`
  - `EquipBuff: Entity(0:0)`

- [ProjectM.InventoryItem](/components/InventoryItem)
  - `ContainerEntity: Entity(0:0)`

- [ProjectM.ItemData](/components/ItemData)
  - `SilverValue: 1`
  - `Entity: Prefab Item_Legs_T08_DarkSilver_Scholar PrefabGuid(703230071) - Entity(3689:1)`
  - `ItemTypeGUID: Item_Legs_T08_DarkSilver_Scholar PrefabGuid(703230071)`
  - `DropItemPrefab: Resource_Drop_Garment_Pants PrefabGuid(1871602977)`
  - `DropItemArc: GUID Not Found`
  - `MaxAmount: 1`
  - `ItemType: ProjectM.ItemType Equippable`
  - `ItemCategory: ProjectM.ItemCategory Armor, BloodBound, LoseDurabilityOnDeath`
  - `RemoveOnConsume: True`
  - `SortOrder: 0`

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.EquippableData](/components/EquippableData)
  - `BuffGuid: EquipBuff_Legs_Base PrefabGuid(1971020070)`
  - `EquipmentType: ProjectM.EquipmentType Legs`
  - `WeaponType: ProjectM.WeaponType None`
  - `EquipmentSet: SetBonus_T08_DarkSilver_Scholar PrefabGuid(1766981478)`
  - `SCTBrokenText: Stunlock.Core.AssetGuid 87ba94db76914210b6c511c34edc2c1c`
  - `DurabilitySettings: Item_DurabilitySettings`

- [ProjectM.ArmorLevelSource](/components/ArmorLevelSource)
  - `Level: 80`

- [ProjectM.Transmog.TransmogAssetKeyBlobData](/components/TransmogAssetKeyBlobData)
  - `Blob: Unity.Entities.BlobAssetReference`1[ProjectM.Transmog.TransmogAssetKeyBlob] Unity.Entities.BlobAssetReference`1[ProjectM.Transmog.TransmogAssetKeyBlob]`

- [ProjectM.Transmog.TransmogData](/components/TransmogData)
  - `ActiveTransmogIndex: 0`
  - `NumColorOptions: 31`

- [ProjectM.Network.Networked](/components/Networked)
  - `CreateFrame: 0`

- [ProjectM.Network.UpToDateUserBitMask](/components/UpToDateUserBitMask)
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- [ProjectM.Network.SyncToUserBitMask](/components/SyncToUserBitMask)
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- [ProjectM.Network.FrameChanged](/components/FrameChanged)
  - `Value: -1`

- [ProjectM.Network.NetworkSnapshot](/components/NetworkSnapshot)
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_cgjcfccfcc`

- [ProjectM.Shared.Salvageable](/components/Salvageable)
  - `RecipeGUID: Recipe_Armor_Legs_T08_DarkSilver_Scholar PrefabGuid(1352971933)`
  - `SalvageFactor: 0.75`
  - `SalvageTimer: 8`

- [ProjectM.Shared.Durability](/components/Durability)
  - `Value: 1358.9874`
  - `MaxDurability: 1358.9874`
  - `RepairRecipe: Recipe_Armor_Legs_T08_DarkSilver_Scholar PrefabGuid(1352971933)`
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

- [ProjectM.Network.NetworkId](/components/NetworkId)
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID)
  - `_Value: 703230071`

- [ProjectM.Network.SyncToUserBuffer](/components/SyncToUserBuffer)

- [ProjectM.RecipeRequirementBuffer](/components/RecipeRequirementBuffer)

- [ProjectM.ModifyUnitStatBuff_DOTS](/components/ModifyUnitStatBuff_DOTS)

- **[0]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType MaxHealth`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 186.82156`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **[1]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType BonusSpellPower`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 0`
  - `SoftCapValue: 0.25`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- [ProjectM.Network.NetSnapshot](/components/NetSnapshot)

- **[0]**
  - `Value: 119`

- **[1]**
  - `Value: 112`

- **[2]**
  - `Value: 234`

- **[3]**
  - `Value: 41`

- **[4]**
  - `Value: 15`

- **[5]**
  - `Value: 1`

- **[6]**
  - `Value: 0`

- **[7]**
  - `Value: 0`

- **[8]**
  - `Value: 153`

- **[9]**
  - `Value: 223`

- **[10]**
  - `Value: 169`

- **[11]**
  - `Value: 68`

- **[12]**
  - `Value: 157`

- **[13]**
  - `Value: 182`

- **[14]**
  - `Value: 164`

- **[15]**
  - `Value: 80`

- **[16]**
  - `Value: 153`

- **[17]**
  - `Value: 223`

- **[18]**
  - `Value: 169`

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
  - `Value: 157`

- **[33]**
  - `Value: 182`

- **[34]**
  - `Value: 164`

- **[35]**
  - `Value: 80`

- **[36]**
  - `Value: 0`

- **[37]**
  - `Value: 0`

- **[38]**
  - `Value: 0`

- **[39]**
  - `Value: 0`

- **40 total elements but only showing the first 36**

- [ProjectM.Network.SnapshotFrameChangedBuffer](/components/SnapshotFrameChangedBuffer)

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

- [ProjectM.Network.AlwaysNetworked](/components/AlwaysNetworked)

- [ProjectM.Network.OnlySyncToUsersTag](/components/OnlySyncToUsersTag)

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)

- [Unity.Entities.BlobAssetOwner](/components/BlobAssetOwner)

- [ProjectM.Network.NetworkSnapshotType](/components/NetworkSnapshotType)
