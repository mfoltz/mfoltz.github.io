---
title: Item_Legs_T01_Bone
guid: 1355823667
categories: ['All', 'Item']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `1355823667`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [Item]({{% relref "prefabs/Item.md" %}})

## Components

- [ProjectM.Equippable]({{% relref "components/Equippable.md" %}})
  - `EquipTarget: NetworkedEntity(0:0)`
  - `EquipBuff: Entity(0:0)`

- [ProjectM.InventoryItem]({{% relref "components/InventoryItem.md" %}})
  - `ContainerEntity: Entity(0:0)`

- [ProjectM.ItemData]({{% relref "components/ItemData.md" %}})
  - `SilverValue: 1`
  - `Entity: Prefab Item_Legs_T01_Bone PrefabGuid(1355823667) - Entity(3732:1)`
  - `ItemTypeGUID: Item_Legs_T01_Bone PrefabGuid(1355823667)`
  - `DropItemPrefab: Resource_Drop_Garment_Pants PrefabGuid(1871602977)`
  - `DropItemArc: GUID Not Found`
  - `MaxAmount: 1`
  - `ItemType: ProjectM.ItemType Equippable`
  - `ItemCategory: ProjectM.ItemCategory Armor, BloodBound, LoseDurabilityOnDeath`
  - `RemoveOnConsume: True`
  - `SortOrder: 0`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.EquippableData]({{% relref "components/EquippableData.md" %}})
  - `BuffGuid: EquipBuff_Legs_Base PrefabGuid(1971020070)`
  - `EquipmentType: ProjectM.EquipmentType Legs`
  - `WeaponType: ProjectM.WeaponType None`
  - `EquipmentSet: GUID Not Found`
  - `SCTBrokenText: Stunlock.Core.AssetGuid 87ba94db76914210b6c511c34edc2c1c`
  - `DurabilitySettings: Item_DurabilitySettings`

- [ProjectM.ArmorLevelSource]({{% relref "components/ArmorLevelSource.md" %}})
  - `Level: 10`

- [ProjectM.Transmog.TransmogAssetKeyBlobData]({{% relref "components/TransmogAssetKeyBlobData.md" %}})
  - `Blob: Unity.Entities.BlobAssetReference`1[ProjectM.Transmog.TransmogAssetKeyBlob] Unity.Entities.BlobAssetReference`1[ProjectM.Transmog.TransmogAssetKeyBlob]`

- [ProjectM.Transmog.TransmogData]({{% relref "components/TransmogData.md" %}})
  - `ActiveTransmogIndex: 0`
  - `NumColorOptions: 31`

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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_cgjcfccfcc`

- [ProjectM.Shared.Salvageable]({{% relref "components/Salvageable.md" %}})
  - `RecipeGUID: Recipe_Armor_Legs_T01_Bone PrefabGuid(-1690725169)`
  - `SalvageFactor: 0.75`
  - `SalvageTimer: 8`

- [ProjectM.Shared.Durability]({{% relref "components/Durability.md" %}})
  - `Value: 346.00156`
  - `MaxDurability: 346.00156`
  - `RepairRecipe: Recipe_Armor_Legs_T01_Bone PrefabGuid(-1690725169)`
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

- [ProjectM.Network.NetworkId]({{% relref "components/NetworkId.md" %}})
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 1355823667`

- [ProjectM.Network.SyncToUserBuffer]({{% relref "components/SyncToUserBuffer.md" %}})

- [ProjectM.RecipeRequirementBuffer]({{% relref "components/RecipeRequirementBuffer.md" %}})

- [ProjectM.ModifyUnitStatBuff_DOTS]({{% relref "components/ModifyUnitStatBuff_DOTS.md" %}})

- **[0]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType MaxHealth`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 24.583424`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- [ProjectM.Network.NetSnapshot]({{% relref "components/NetSnapshot.md" %}})

- **[0]**
  - `Value: 51`

- **[1]**
  - `Value: 58`

- **[2]**
  - `Value: 208`

- **[3]**
  - `Value: 80`

- **[4]**
  - `Value: 15`

- **[5]**
  - `Value: 1`

- **[6]**
  - `Value: 0`

- **[7]**
  - `Value: 0`

- **[8]**
  - `Value: 51`

- **[9]**
  - `Value: 0`

- **[10]**
  - `Value: 173`

- **[11]**
  - `Value: 67`

- **[12]**
  - `Value: 207`

- **[13]**
  - `Value: 148`

- **[14]**
  - `Value: 57`

- **[15]**
  - `Value: 155`

- **[16]**
  - `Value: 51`

- **[17]**
  - `Value: 0`

- **[18]**
  - `Value: 173`

- **[19]**
  - `Value: 67`

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
  - `Value: 207`

- **[33]**
  - `Value: 148`

- **[34]**
  - `Value: 57`

- **[35]**
  - `Value: 155`

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

- **[8]**
  - `Value: -1`

- **[9]**
  - `Value: -1`

- [ProjectM.Network.AlwaysNetworked]({{% relref "components/AlwaysNetworked.md" %}})

- [ProjectM.Network.OnlySyncToUsersTag]({{% relref "components/OnlySyncToUsersTag.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})

- [Unity.Entities.BlobAssetOwner]({{% relref "components/BlobAssetOwner.md" %}})

- [ProjectM.Network.NetworkSnapshotType]({{% relref "components/NetworkSnapshotType.md" %}})
