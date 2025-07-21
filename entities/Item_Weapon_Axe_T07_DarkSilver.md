---
title: Item_Weapon_Axe_T07_DarkSilver
guid: -1130238142
categories: ['All', 'Item']
nav_exclude: true
search_exclude: true
layout: default
---

# Item_Weapon_Axe_T07_DarkSilver

**GUID:** `-1130238142`

**Categories:** [All](/prefabs/All), [Item](/prefabs/Item)

## Components

- **ProjectM.WeaponCoating.Coatable**
  - `CoatingExpireTime: 0`
  - `ChargedUpTime: 0`
  - `CoatingGuid: GUID Not Found`
  - `CoatingBuffInstance: Entity(0:0)`
  - `Cooldown: 12`
  - `GlobalCooldown: 1`

- [ProjectM.Equippable](/components/Equippable){:target="_blank"}
  - `EquipTarget: NetworkedEntity(0:0)`
  - `EquipBuff: Entity(0:0)`

- [ProjectM.InventoryItem](/components/InventoryItem){:target="_blank"}
  - `ContainerEntity: Entity(0:0)`

- [ProjectM.ItemData](/components/ItemData){:target="_blank"}
  - `SilverValue: 1`
  - `Entity: Prefab Item_Weapon_Axe_T07_DarkSilver PrefabGuid(-1130238142) - Entity(22495:1)`
  - `ItemTypeGUID: Item_Weapon_Axe_T07_DarkSilver PrefabGuid(-1130238142)`
  - `DropItemPrefab: Resource_Drop_Weapon_Cluster PrefabGuid(2080553210)`
  - `DropItemArc: GUID Not Found`
  - `MaxAmount: 1`
  - `ItemType: ProjectM.ItemType Equippable`
  - `ItemCategory: ProjectM.ItemCategory Weapon, BloodBound, LoseDurabilityOnDeath`
  - `RemoveOnConsume: True`
  - `SortOrder: 0`

- [ProjectM.DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.EquippableData](/components/EquippableData){:target="_blank"}
  - `BuffGuid: EquipBuff_Weapon_Axe_Ability03 PrefabGuid(1164259129)`
  - `EquipmentType: ProjectM.EquipmentType Weapon`
  - `WeaponType: ProjectM.WeaponType Axes`
  - `EquipmentSet: GUID Not Found`
  - `SCTBrokenText: Stunlock.Core.AssetGuid c059cee6557148cabf820a2d9cf60d18`
  - `DurabilitySettings: Item_DurabilitySettings`

- [ProjectM.WeaponLevelSource](/components/WeaponLevelSource){:target="_blank"}
  - `Level: 76.67`

- [ProjectM.Network.Networked](/components/Networked){:target="_blank"}
  - `CreateFrame: 0`

- [ProjectM.Network.UpToDateUserBitMask](/components/UpToDateUserBitMask){:target="_blank"}
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- [ProjectM.Network.SyncToUserBitMask](/components/SyncToUserBitMask){:target="_blank"}
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- [ProjectM.Network.FrameChanged](/components/FrameChanged){:target="_blank"}
  - `Value: -1`

- [ProjectM.Network.NetworkSnapshot](/components/NetworkSnapshot){:target="_blank"}
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_cjjdggjjcj`

- [ProjectM.Shared.Salvageable](/components/Salvageable){:target="_blank"}
  - `RecipeGUID: Recipe_Weapon_Axe_T07_DarkSilver PrefabGuid(-1896566066)`
  - `SalvageFactor: 0.75`
  - `SalvageTimer: 8`

- [ProjectM.Shared.Durability](/components/Durability){:target="_blank"}
  - `Value: 2544.6482`
  - `MaxDurability: 2544.6482`
  - `RepairRecipe: Recipe_Weapon_Axe_T07_DarkSilver PrefabGuid(-1896566066)`
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

- [ProjectM.Network.NetworkId](/components/NetworkId){:target="_blank"}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -1130238142`

- [ProjectM.Network.SyncToUserBuffer](/components/SyncToUserBuffer){:target="_blank"}
  - *(No fields)*

- [ProjectM.ReplaceAbilityOnSlotWhenMountedBuffElement](/components/ReplaceAbilityOnSlotWhenMountedBuffElement){:target="_blank"}

- **[0]**
  - `AbilitySlotIndex: 0`
  - `NewGroupId: AB_Vampire_Axe_Primary_Mounted_AbilityGroup PrefabGuid(-1439531953)`
  - `Priority: 5`

- [ProjectM.ReplaceAbilityOnSlotWhenMountedBuffModificationElement](/components/ReplaceAbilityOnSlotWhenMountedBuffModificationElement){:target="_blank"}
  - *(No fields)*

- [ProjectM.RecipeRequirementBuffer](/components/RecipeRequirementBuffer){:target="_blank"}
  - *(No fields)*

- [ProjectM.ModifyUnitStatBuff_DOTS](/components/ModifyUnitStatBuff_DOTS){:target="_blank"}

- **[0]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType PhysicalPower`
  - `ModificationType: ProjectM.ModificationType AddToBase`
  - `Value: 24.329535`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **[1]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType DamageVsWood`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 0.25`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **[2]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType ResourcePower`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 19.334`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- [ProjectM.Network.NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 66`

- **[1]**
  - `Value: 239`

- **[2]**
  - `Value: 161`

- **[3]**
  - `Value: 188`

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
  - `Value: 95`

- **[29]**
  - `Value: 10`

- **[30]**
  - `Value: 31`

- **[31]**
  - `Value: 69`

- **[32]**
  - `Value: 206`

- **[33]**
  - `Value: 178`

- **[34]**
  - `Value: 244`

- **[35]**
  - `Value: 142`

- **[36]**
  - `Value: 95`

- **[37]**
  - `Value: 10`

- **[38]**
  - `Value: 31`

- **[39]**
  - `Value: 69`

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
  - `Value: 206`

- **[53]**
  - `Value: 178`

- **[54]**
  - `Value: 244`

- **[55]**
  - `Value: 142`

- **[56]**
  - `Value: 10`

- **[57]**
  - `Value: 87`

- **[58]**
  - `Value: 153`

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
  - *(No fields)*

- [ProjectM.Network.SnapshotFrameChangedBuffer](/components/SnapshotFrameChangedBuffer){:target="_blank"}

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

- [ProjectM.Network.AlwaysNetworked](/components/AlwaysNetworked){:target="_blank"}
  - *(No fields)*

- [ProjectM.Network.OnlySyncToUsersTag](/components/OnlySyncToUsersTag){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [ProjectM.Network.NetworkSnapshotType](/components/NetworkSnapshotType){:target="_blank"}
  - *(No fields)*
