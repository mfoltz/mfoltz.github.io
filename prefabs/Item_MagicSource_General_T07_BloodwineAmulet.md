---
title: Item_MagicSource_General_T07_BloodwineAmulet
guid: 991396285
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
- SpellLevelSource
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
- NetworkSnapshotType
---

# Item_MagicSource_General_T07_BloodwineAmulet

**GUID:** `991396285`

**Categories:** [All](/prefabs/All), [Item](/prefabs/Item)

## Components

- [Equippable](/components/Equippable){:target="_blank"}
  - `EquipTarget: NetworkedEntity(0:0)`
  - `EquipBuff: Entity(0:0)`

- [InventoryItem](/components/InventoryItem){:target="_blank"}
  - `ContainerEntity: Entity(0:0)`

- [ItemData](/components/ItemData){:target="_blank"}
  - `SilverValue: 1`
  - `Entity: Prefab Item_MagicSource_General_T07_BloodwineAmulet PrefabGuid(991396285) - Entity(21787:1)`
  - `ItemTypeGUID: Item_MagicSource_General_T07_BloodwineAmulet PrefabGuid(991396285)`
  - `DropItemPrefab: Resource_Drop_Pendant PrefabGuid(-583542658)`
  - `DropItemArc: GUID Not Found`
  - `MaxAmount: 1`
  - `ItemType: ProjectM.ItemType Equippable`
  - `ItemCategory: ProjectM.ItemCategory BloodBound, LoseDurabilityOnDeath, Magic`
  - `RemoveOnConsume: True`
  - `SortOrder: 117`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [EquippableData](/components/EquippableData){:target="_blank"}
  - `BuffGuid: Item_EquipBuff_Shared_General PrefabGuid(343359674)`
  - `EquipmentType: ProjectM.EquipmentType MagicSource`
  - `WeaponType: ProjectM.WeaponType None`
  - `EquipmentSet: GUID Not Found`
  - `SCTBrokenText: Stunlock.Core.AssetGuid 7ae7dd586c1d4135a1bd01eb7d9d54a7`
  - `DurabilitySettings: Item_DurabilitySettings`

- [SpellLevelSource](/components/SpellLevelSource){:target="_blank"}
  - `Level: 73.33`

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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_achhebehdei`

- [Salvageable](/components/Salvageable){:target="_blank"}
  - `RecipeGUID: Recipe_MagicSource_General_T07_BloodwineAmulet PrefabGuid(307631810)`
  - `SalvageFactor: 0.75`
  - `SalvageTimer: 8`

- [Durability](/components/Durability){:target="_blank"}
  - `Value: 1194.8033`
  - `MaxDurability: 1194.8033`
  - `RepairRecipe: Recipe_MagicSource_General_T07_BloodwineAmulet PrefabGuid(307631810)`
  - `LossType: ProjectM.Shared.DurabilityLossType LossOnDamageTaken`
  - `TakeDamageDurabilityLossFactor: 1`
  - `DealDamageTypeModifiers: DurabilityDamageModifiers`
  - `MainDamageModifier: 0`
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
  - `_Value: 991396285`

- [SyncToUserBuffer](/components/SyncToUserBuffer){:target="_blank"}
  - *(No fields)*

- [RecipeRequirementBuffer](/components/RecipeRequirementBuffer){:target="_blank"}
  - *(No fields)*

- [ModifyUnitStatBuff_DOTS](/components/ModifyUnitStatBuff_DOTS){:target="_blank"}

- **[0]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType SpellPower`
  - `ModificationType: ProjectM.ModificationType AddToBase`
  - `Value: 27.916435`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **[1]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType ReducedBloodDrain`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 0.15`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 5`
  - `Id: Unset`

- [NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 189`

- **[1]**
  - `Value: 129`

- **[2]**
  - `Value: 23`

- **[3]**
  - `Value: 59`

- **[4]**
  - `Value: 73`

- **[5]**
  - `Value: 0`

- **[6]**
  - `Value: 0`

- **[7]**
  - `Value: 0`

- **[8]**
  - `Value: 181`

- **[9]**
  - `Value: 89`

- **[10]**
  - `Value: 149`

- **[11]**
  - `Value: 68`

- **[12]**
  - `Value: 194`

- **[13]**
  - `Value: 22`

- **[14]**
  - `Value: 86`

- **[15]**
  - `Value: 18`

- **[16]**
  - `Value: 181`

- **[17]**
  - `Value: 89`

- **[18]**
  - `Value: 149`

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
  - `Value: 194`

- **[33]**
  - `Value: 22`

- **[34]**
  - `Value: 86`

- **[35]**
  - `Value: 18`

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

- [NetworkSnapshotType](/components/NetworkSnapshotType){:target="_blank"}
  - *(No fields)*
