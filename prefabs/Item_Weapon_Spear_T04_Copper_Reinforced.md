---
title: Item_Weapon_Spear_T04_Copper_Reinforced
guid: 790210443
categories: ['All', 'Item']
nav_exclude: true
search_exclude: true
layout: default
---

# Item_Weapon_Spear_T04_Copper_Reinforced

**GUID:** `790210443`

**Categories:** All, Item

## Components

- **ProjectM.WeaponCoating.Coatable**
  - `CoatingExpireTime: 0`
  - `ChargedUpTime: 0`
  - `CoatingGuid: GUID Not Found`
  - `CoatingBuffInstance: Entity(0:0)`
  - `Cooldown: 12`
  - `GlobalCooldown: 1`

- **ProjectM.Equippable**
  - `EquipTarget: NetworkedEntity(0:0)`
  - `EquipBuff: Entity(0:0)`

- **ProjectM.InventoryItem**
  - `ContainerEntity: Entity(0:0)`

- **ProjectM.ItemData**
  - `SilverValue: 1`
  - `Entity: Prefab Item_Weapon_Spear_T04_Copper_Reinforced PrefabGuid(790210443) - Entity(22470:1)`
  - `ItemTypeGUID: Item_Weapon_Spear_T04_Copper_Reinforced PrefabGuid(790210443)`
  - `DropItemPrefab: Resource_Drop_Weapon_Cluster PrefabGuid(2080553210)`
  - `DropItemArc: GUID Not Found`
  - `MaxAmount: 1`
  - `ItemType: ProjectM.ItemType Equippable`
  - `ItemCategory: ProjectM.ItemCategory Weapon, BloodBound, LoseDurabilityOnDeath`
  - `RemoveOnConsume: True`
  - `SortOrder: 0`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.EquippableData**
  - `BuffGuid: EquipBuff_Weapon_Spear_Ability02 PrefabGuid(-1335720608)`
  - `EquipmentType: ProjectM.EquipmentType Weapon`
  - `WeaponType: ProjectM.WeaponType Spear`
  - `EquipmentSet: GUID Not Found`
  - `SCTBrokenText: Stunlock.Core.AssetGuid c059cee6557148cabf820a2d9cf60d18`
  - `DurabilitySettings: Item_DurabilitySettings`

- **ProjectM.WeaponLevelSource**
  - `Level: 40`

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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_cjjdggjjcj`

- **ProjectM.Shared.Salvageable**
  - `RecipeGUID: Recipe_Weapon_Spear_T04_Copper_Reinforced PrefabGuid(-118222260)`
  - `SalvageFactor: 0.75`
  - `SalvageTimer: 8`

- **ProjectM.Shared.Durability**
  - `Value: 1291.5104`
  - `MaxDurability: 1291.5104`
  - `RepairRecipe: Recipe_Weapon_Spear_T04_Copper_Reinforced PrefabGuid(-118222260)`
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

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 790210443`

- **ProjectM.Network.SyncToUserBuffer**
  - *(No fields)*

- **ProjectM.ReplaceAbilityOnSlotWhenMountedBuffElement**
  - *(No fields)*

- **[0]**
  - `AbilitySlotIndex: 0`
  - `NewGroupId: AB_Vampire_Spear_Primary_Mounted_AbilityGroup PrefabGuid(409165231)`
  - `Priority: 5`

- **ProjectM.ReplaceAbilityOnSlotWhenMountedBuffModificationElement**
  - *(No fields)*

- **ProjectM.RecipeRequirementBuffer**
  - *(No fields)*

- **ProjectM.ModifyUnitStatBuff_DOTS**
  - *(No fields)*

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
  - `StatType: ProjectM.UnitStatType DamageVsBeasts`
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
  - `Value: 12`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **ProjectM.Network.NetSnapshot**
  - *(No fields)*

- **[0]**
  - `Value: 139`

- **[1]**
  - `Value: 167`

- **[2]**
  - `Value: 25`

- **[3]**
  - `Value: 47`

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
  - `Value: 76`

- **[33]**
  - `Value: 18`

- **[34]**
  - `Value: 244`

- **[35]**
  - `Value: 248`

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
  - `Value: 76`

- **[53]**
  - `Value: 18`

- **[54]**
  - `Value: 244`

- **[55]**
  - `Value: 248`

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

- **[10]**
  - `Value: -1`

- **[11]**
  - `Value: -1`

- **[12]**
  - `Value: -1`

- **[13]**
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

- **ProjectM.Network.NetworkSnapshotType**
  - *(No fields)*

