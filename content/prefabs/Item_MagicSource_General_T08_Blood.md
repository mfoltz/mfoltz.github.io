---
title: Item_MagicSource_General_T08_Blood
guid: -104934480
categories: ['All', 'Item']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `-104934480`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [Item]({{% relref "prefabs/Item.md" %}})

## Components

- [ProjectM.Equippable]({{% relref "components/Equippable.md" %}})
  - `EquipTarget: NetworkedEntity(0:0)`
  - `EquipBuff: Entity(0:0)`

- [ProjectM.InventoryItem]({{% relref "components/InventoryItem.md" %}})
  - `ContainerEntity: Entity(0:0)`

- [ProjectM.ItemData]({{% relref "components/ItemData.md" %}})
  - `SilverValue: 1`
  - `Entity: Prefab Item_MagicSource_General_T08_Blood PrefabGuid(-104934480) - Entity(21780:1)`
  - `ItemTypeGUID: Item_MagicSource_General_T08_Blood PrefabGuid(-104934480)`
  - `DropItemPrefab: Resource_Drop_Pendant PrefabGuid(-583542658)`
  - `DropItemArc: GUID Not Found`
  - `MaxAmount: 1`
  - `ItemType: ProjectM.ItemType Equippable`
  - `ItemCategory: ProjectM.ItemCategory BloodBound, LoseDurabilityOnDeath, Magic`
  - `RemoveOnConsume: True`
  - `SortOrder: 118`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.EquippableData]({{% relref "components/EquippableData.md" %}})
  - `BuffGuid: Item_EquipBuff_MagicSource_T08_Blood PrefabGuid(-331907553)`
  - `EquipmentType: ProjectM.EquipmentType MagicSource`
  - `WeaponType: ProjectM.WeaponType None`
  - `EquipmentSet: GUID Not Found`
  - `SCTBrokenText: Stunlock.Core.AssetGuid 7ae7dd586c1d4135a1bd01eb7d9d54a7`
  - `DurabilitySettings: Item_DurabilitySettings`

- [ProjectM.SpellLevelSource]({{% relref "components/SpellLevelSource.md" %}})
  - `Level: 83.33`

- [ProjectM.Network.Networked]({{% relref "components/Networked.md" %}})
  - `CreateFrame: 0`

- [ProjectM.Network.UpToDateUserBitMask]({{% relref "components/UpToDateUserBitMask.md" %}})
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- [ProjectM.Network.SyncToUserBitMask]({{% relref "components/SyncToUserBitMask.md" %}})
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- [ProjectM.Network.FrameChanged]({{% relref "components/FrameChanged.md" %}})
  - `Value: -1`

- [ProjectM.Network.NetworkSnapshot]({{% relref "components/NetworkSnapshot.md" %}})
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_achhebehdei`

- [ProjectM.Shared.Salvageable]({{% relref "components/Salvageable.md" %}})
  - `RecipeGUID: Recipe_MagicSource_General_T08_CrimsonSky PrefabGuid(-1485680334)`
  - `SalvageFactor: 0.75`
  - `SalvageTimer: 8`

- [ProjectM.Shared.Durability]({{% relref "components/Durability.md" %}})
  - `Value: 1447.0991`
  - `MaxDurability: 1447.0991`
  - `RepairRecipe: Recipe_MagicSource_General_T08_CrimsonSky PrefabGuid(-1485680334)`
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

- [ProjectM.Network.NetworkId]({{% relref "components/NetworkId.md" %}})
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: -104934480`

- [ProjectM.Network.SyncToUserBuffer]({{% relref "components/SyncToUserBuffer.md" %}})

- [ProjectM.RecipeRequirementBuffer]({{% relref "components/RecipeRequirementBuffer.md" %}})

- [ProjectM.ModifyUnitStatBuff_DOTS]({{% relref "components/ModifyUnitStatBuff_DOTS.md" %}})

- **[0]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType SpellPower`
  - `ModificationType: ProjectM.ModificationType AddToBase`
  - `Value: 34.033676`
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

- **[2]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType WeaponSkillPower`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 0`
  - `SoftCapValue: 1`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- [ProjectM.Network.NetSnapshot]({{% relref "components/NetSnapshot.md" %}})

- **[0]**
  - `Value: 176`

- **[1]**
  - `Value: 211`

- **[2]**
  - `Value: 190`

- **[3]**
  - `Value: 249`

- **[4]**
  - `Value: 73`

- **[5]**
  - `Value: 0`

- **[6]**
  - `Value: 0`

- **[7]**
  - `Value: 0`

- **[8]**
  - `Value: 44`

- **[9]**
  - `Value: 227`

- **[10]**
  - `Value: 180`

- **[11]**
  - `Value: 68`

- **[12]**
  - `Value: 50`

- **[13]**
  - `Value: 81`

- **[14]**
  - `Value: 114`

- **[15]**
  - `Value: 167`

- **[16]**
  - `Value: 44`

- **[17]**
  - `Value: 227`

- **[18]**
  - `Value: 180`

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
  - `Value: 50`

- **[33]**
  - `Value: 81`

- **[34]**
  - `Value: 114`

- **[35]**
  - `Value: 167`

- **[36]**
  - `Value: 0`

- **[37]**
  - `Value: 0`

- **[38]**
  - `Value: 0`

- **[39]**
  - `Value: 0`

- **40 total elements but only showing the first 36**

- [ProjectM.Network.SnapshotFrameChangedBuffer]({{% relref "components/SnapshotFrameChangedBuffer.md" %}})

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

- [ProjectM.Network.AlwaysNetworked]({{% relref "components/AlwaysNetworked.md" %}})

- [ProjectM.Network.OnlySyncToUsersTag]({{% relref "components/OnlySyncToUsersTag.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})

- [ProjectM.Network.NetworkSnapshotType]({{% relref "components/NetworkSnapshotType.md" %}})
