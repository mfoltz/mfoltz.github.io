---
title: Item_Weapon_Pistols_T05_Iron
guid: 769603740
categories: ['All', 'Item']
nav_exclude: true
search_exclude: true
layout: default
---

# Item_Weapon_Pistols_T05_Iron

**GUID:** `769603740`

**Categories:** [All](/prefabs/All), [Item](/prefabs/Item)

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
  - `Entity: Prefab Item_Weapon_Pistols_T05_Iron PrefabGuid(769603740) - Entity(22512:1)`
  - `ItemTypeGUID: Item_Weapon_Pistols_T05_Iron PrefabGuid(769603740)`
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
  - `BuffGuid: EquipBuff_Weapon_Pistols_Ability03 PrefabGuid(-187287183)`
  - `EquipmentType: ProjectM.EquipmentType Weapon`
  - `WeaponType: ProjectM.WeaponType Pistols`
  - `EquipmentSet: GUID Not Found`
  - `SCTBrokenText: Stunlock.Core.AssetGuid c059cee6557148cabf820a2d9cf60d18`
  - `DurabilitySettings: Item_DurabilitySettings`

- **ProjectM.WeaponLevelSource**
  - `Level: 50`

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
  - `RecipeGUID: Recipe_Weapon_Pistols_T05_Iron PrefabGuid(1314793960)`
  - `SalvageFactor: 0.75`
  - `SalvageTimer: 8`

- **ProjectM.Shared.Durability**
  - `Value: 1553.2477`
  - `MaxDurability: 1553.2477`
  - `RepairRecipe: Recipe_Weapon_Pistols_T05_Iron PrefabGuid(1314793960)`
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
  - `_Value: 769603740`

- **ProjectM.Network.SyncToUserBuffer**
  - *(No fields)*

- **ProjectM.ReplaceAbilityOnSlotWhenMountedBuffElement**
  - *(No fields)*

- **[0]**
  - `AbilitySlotIndex: 0`
  - `NewGroupId: AB_Pistols_Primary_Attack_Mounted_AbilityGroup PrefabGuid(-413053555)`
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
  - `Value: 13.840439`
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
  - `Value: 14`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **ProjectM.Network.NetSnapshot**
  - *(No fields)*

- **[0]**
  - `Value: 156`

- **[1]**
  - `Value: 56`

- **[2]**
  - `Value: 223`

- **[3]**
  - `Value: 45`

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
  - `Value: 237`

- **[29]**
  - `Value: 39`

- **[30]**
  - `Value: 194`

- **[31]**
  - `Value: 68`

- **[32]**
  - `Value: 232`

- **[33]**
  - `Value: 41`

- **[34]**
  - `Value: 94`

- **[35]**
  - `Value: 78`

- **[36]**
  - `Value: 237`

- **[37]**
  - `Value: 39`

- **[38]**
  - `Value: 194`

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
  - `Value: 232`

- **[53]**
  - `Value: 41`

- **[54]**
  - `Value: 94`

- **[55]**
  - `Value: 78`

- **[56]**
  - `Value: 0`

- **[57]**
  - `Value: 0`

- **[58]**
  - `Value: 72`

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

