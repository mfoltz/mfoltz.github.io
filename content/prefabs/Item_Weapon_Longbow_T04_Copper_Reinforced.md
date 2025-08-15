---
title: Item_Weapon_Longbow_T04_Copper_Reinforced
guid: 352247730
categories: ['All', 'Item']
nav_exclude: true
search_exclude: true
layout: default
---

# Item_Weapon_Longbow_T04_Copper_Reinforced

**GUID:** `352247730`

**Categories:** [All](/prefabs/All), [Item](/prefabs/Item)

## Components

- **ProjectM.WeaponCoating.Coatable**
  - `CoatingExpireTime: 0`
  - `ChargedUpTime: 0`
  - `CoatingGuid: GUID Not Found`
  - `CoatingBuffInstance: Entity(0:0)`
  - `Cooldown: 12`
  - `GlobalCooldown: 1`

- [ProjectM.Equippable](/components/Equippable)
  - `EquipTarget: NetworkedEntity(0:0)`
  - `EquipBuff: Entity(0:0)`

- [ProjectM.InventoryItem](/components/InventoryItem)
  - `ContainerEntity: Entity(0:0)`

- [ProjectM.ItemData](/components/ItemData)
  - `SilverValue: 1`
  - `Entity: Prefab Item_Weapon_Longbow_T04_Copper_Reinforced PrefabGuid(352247730) - Entity(22473:1)`
  - `ItemTypeGUID: Item_Weapon_Longbow_T04_Copper_Reinforced PrefabGuid(352247730)`
  - `DropItemPrefab: Resource_Drop_Weapon_Cluster PrefabGuid(2080553210)`
  - `DropItemArc: GUID Not Found`
  - `MaxAmount: 1`
  - `ItemType: ProjectM.ItemType Equippable`
  - `ItemCategory: ProjectM.ItemCategory Weapon, BloodBound, LoseDurabilityOnDeath`
  - `RemoveOnConsume: True`
  - `SortOrder: 0`

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.EquippableData](/components/EquippableData)
  - `BuffGuid: EquipBuff_Weapon_Longbow_Ability02 PrefabGuid(443801770)`
  - `EquipmentType: ProjectM.EquipmentType Weapon`
  - `WeaponType: ProjectM.WeaponType Longbow`
  - `EquipmentSet: GUID Not Found`
  - `SCTBrokenText: Stunlock.Core.AssetGuid c059cee6557148cabf820a2d9cf60d18`
  - `DurabilitySettings: Item_DurabilitySettings`

- [ProjectM.WeaponLevelSource](/components/WeaponLevelSource)
  - `Level: 40`

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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_cjjdggjjcj`

- [ProjectM.Shared.Salvageable](/components/Salvageable)
  - `RecipeGUID: Recipe_Weapon_Longbow_T04_Copper_Reinforced PrefabGuid(777859879)`
  - `SalvageFactor: 0.75`
  - `SalvageTimer: 8`

- [ProjectM.Shared.Durability](/components/Durability)
  - `Value: 1291.5104`
  - `MaxDurability: 1291.5104`
  - `RepairRecipe: Recipe_Weapon_Longbow_T04_Copper_Reinforced PrefabGuid(777859879)`
  - `LossType: ProjectM.Shared.DurabilityLossType LossOnDamageDealt`
  - `TakeDamageDurabilityLossFactor: 0.25`
  - `DealDamageTypeModifiers: DurabilityDamageModifiers`
  - `MainDamageModifier: 1`
  - `ResourceDamageModifier: 0.5`
  - `SiegeDamageModifier: 0.5`
  - `IsBroken: False`
  - `RepairSequence: SequenceGUID 375059735`
  - `OneLevelFactor: 0.75`
  - `TwoLevelFactor: 0.55`
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
  - `_Value: 352247730`

- [ProjectM.Network.SyncToUserBuffer](/components/SyncToUserBuffer)

- [ProjectM.ReplaceAbilityOnSlotWhenMountedBuffElement](/components/ReplaceAbilityOnSlotWhenMountedBuffElement)

- **[0]**
  - `AbilitySlotIndex: 0`
  - `NewGroupId: AB_Vampire_Longbow_Primary_Mounted_Group PrefabGuid(815729526)`
  - `Priority: 5`

- [ProjectM.ReplaceAbilityOnSlotWhenMountedBuffModificationElement](/components/ReplaceAbilityOnSlotWhenMountedBuffModificationElement)

- [ProjectM.RecipeRequirementBuffer](/components/RecipeRequirementBuffer)

- [ProjectM.ModifyUnitStatBuff_DOTS](/components/ModifyUnitStatBuff_DOTS)

- **[0]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType PhysicalPower`
  - `ModificationType: ProjectM.ModificationType AddToBase`
  - `Value: 10.910838`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **[1]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType ResourcePower`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 12`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- [ProjectM.Network.NetSnapshot](/components/NetSnapshot)

- **[0]**
  - `Value: 178`

- **[1]**
  - `Value: 223`

- **[2]**
  - `Value: 254`

- **[3]**
  - `Value: 20`

- **[4]**
  - `Value: 40`

- **[5]**
  - `Value: 1`

- **[6]**
  - `Value: 0`

- **[7]**
  - `Value: 0`

- **[8]**
  - `Value: 0`

- **[9]**
  - `Value: 0`

- **[10]**
  - `Value: 0`

- **[11]**
  - `Value: 0`

- **[12]**
  - `Value: 0`

- **[13]**
  - `Value: 0`

- **[14]**
  - `Value: 0`

- **[15]**
  - `Value: 0`

- **[16]**
  - `Value: 0`

- **[17]**
  - `Value: 0`

- **[18]**
  - `Value: 0`

- **[19]**
  - `Value: 0`

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
  - `Value: 85`

- **[29]**
  - `Value: 112`

- **[30]**
  - `Value: 161`

- **[31]**
  - `Value: 68`

- **[32]**
  - `Value: 39`

- **[33]**
  - `Value: 51`

- **[34]**
  - `Value: 93`

- **[35]**
  - `Value: 46`

- **[36]**
  - `Value: 85`

- **[37]**
  - `Value: 112`

- **[38]**
  - `Value: 161`

- **[39]**
  - `Value: 68`

- **[40]**
  - `Value: 0`

- **[41]**
  - `Value: 0`

- **[42]**
  - `Value: 0`

- **[43]**
  - `Value: 0`

- **[44]**
  - `Value: 0`

- **[45]**
  - `Value: 0`

- **[46]**
  - `Value: 0`

- **[47]**
  - `Value: 0`

- **[48]**
  - `Value: 0`

- **[49]**
  - `Value: 0`

- **[50]**
  - `Value: 0`

- **[51]**
  - `Value: 0`

- **[52]**
  - `Value: 39`

- **[53]**
  - `Value: 51`

- **[54]**
  - `Value: 93`

- **[55]**
  - `Value: 46`

- **[56]**
  - `Value: 0`

- **[57]**
  - `Value: 0`

- **[58]**
  - `Value: 32`

- **[59]**
  - `Value: 66`

- **[60]**
  - `Value: 0`

- **[61]**
  - `Value: 0`

- **[62]**
  - `Value: 0`

- **[63]**
  - `Value: 0`

- **64 total elements but only showing the first 36**

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

- **[10]**
  - `Value: -1`

- **[11]**
  - `Value: -1`

- **[12]**
  - `Value: -1`

- **[13]**
  - `Value: -1`

- [ProjectM.Network.AlwaysNetworked](/components/AlwaysNetworked)

- [ProjectM.Network.OnlySyncToUsersTag](/components/OnlySyncToUsersTag)

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)

- [ProjectM.Network.NetworkSnapshotType](/components/NetworkSnapshotType)
