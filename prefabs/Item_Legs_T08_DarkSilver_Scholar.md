---
title: Item_Legs_T08_DarkSilver_Scholar
guid: 703230071
categories:
- All
- Item
nav_exclude: true
search_exclude: true
layout: default
components:
- Equippable
- InventoryItem
- ItemData
- DestroyData
- DestroyState
- EquippableData
- ArmorLevelSource
- TransmogAssetKeyBlobData
- TransmogData
- Networked
- UpToDateUserBitMask
- SyncToUserBitMask
- FrameChanged
- NetworkSnapshot
- Salvageable
- Durability
- NetworkId
- PrefabGUID
- SyncToUserBuffer
- RecipeRequirementBuffer
- ModifyUnitStatBuff_DOTS
- NetSnapshot
- SnapshotFrameChangedBuffer
- AlwaysNetworked
- OnlySyncToUsersTag
- SpawnTag
- Prefab
- Simulate
- BlobAssetOwner
- NetworkSnapshotType
---

# Item_Legs_T08_DarkSilver_Scholar

**GUID:** `703230071`

**Categories:** [All](/prefabs/All), [Item](/prefabs/Item)

## Components

- [Equippable](/components/Equippable){:target="_blank"}
  - `EquipTarget: NetworkedEntity(0:0)`
  - `EquipBuff: Entity(0:0)`

- [InventoryItem](/components/InventoryItem){:target="_blank"}
  - `ContainerEntity: Entity(0:0)`

- [ItemData](/components/ItemData){:target="_blank"}
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

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [EquippableData](/components/EquippableData){:target="_blank"}
  - `BuffGuid: EquipBuff_Legs_Base PrefabGuid(1971020070)`
  - `EquipmentType: ProjectM.EquipmentType Legs`
  - `WeaponType: ProjectM.WeaponType None`
  - `EquipmentSet: SetBonus_T08_DarkSilver_Scholar PrefabGuid(1766981478)`
  - `SCTBrokenText: Stunlock.Core.AssetGuid 87ba94db76914210b6c511c34edc2c1c`
  - `DurabilitySettings: Item_DurabilitySettings`

- [ArmorLevelSource](/components/ArmorLevelSource){:target="_blank"}
  - `Level: 80`

- [TransmogAssetKeyBlobData](/components/TransmogAssetKeyBlobData){:target="_blank"}
  - `Blob: Unity.Entities.BlobAssetReference`1[TransmogAssetKeyBlob] Unity.Entities.BlobAssetReference`1[TransmogAssetKeyBlob]`

- [TransmogData](/components/TransmogData){:target="_blank"}
  - `ActiveTransmogIndex: 0`
  - `NumColorOptions: 31`

- [Networked](/components/Networked){:target="_blank"}
  - `CreateFrame: 0`

- [UpToDateUserBitMask](/components/UpToDateUserBitMask){:target="_blank"}
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- [SyncToUserBitMask](/components/SyncToUserBitMask){:target="_blank"}
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- [FrameChanged](/components/FrameChanged){:target="_blank"}
  - `Value: -1`

- [NetworkSnapshot](/components/NetworkSnapshot){:target="_blank"}
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_cgjcfccfcc`

- [Salvageable](/components/Salvageable){:target="_blank"}
  - `RecipeGUID: Recipe_Armor_Legs_T08_DarkSilver_Scholar PrefabGuid(1352971933)`
  - `SalvageFactor: 0.75`
  - `SalvageTimer: 8`

- [Durability](/components/Durability){:target="_blank"}
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

- [NetworkId](/components/NetworkId){:target="_blank"}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 703230071`

- [SyncToUserBuffer](/components/SyncToUserBuffer){:target="_blank"}
  - *(No fields)*

- [RecipeRequirementBuffer](/components/RecipeRequirementBuffer){:target="_blank"}
  - *(No fields)*

- [ModifyUnitStatBuff_DOTS](/components/ModifyUnitStatBuff_DOTS){:target="_blank"}

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

- [NetSnapshot](/components/NetSnapshot){:target="_blank"}

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
  - *(No fields)*

- [SnapshotFrameChangedBuffer](/components/SnapshotFrameChangedBuffer){:target="_blank"}

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

- [AlwaysNetworked](/components/AlwaysNetworked){:target="_blank"}
  - *(No fields)*

- [OnlySyncToUsersTag](/components/OnlySyncToUsersTag){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [BlobAssetOwner](/components/BlobAssetOwner){:target="_blank"}
  - *(No fields)*

- [NetworkSnapshotType](/components/NetworkSnapshotType){:target="_blank"}
  - *(No fields)*
