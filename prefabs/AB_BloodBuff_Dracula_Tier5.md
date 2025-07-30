---
title: AB_BloodBuff_Dracula_Tier5
guid: -1923843097
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_BloodBuff_Dracula_Tier5

**GUID:** `-1923843097`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- **ProjectM.Attach**
  - `Parent: Entity(0:0)`

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.Buff**
  - `StartTimeUnmodified: 0`
  - `Target: Entity(0:0)`
  - `BuffType: ProjectM.BuffType Replace`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: True`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Buff`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Age**
  - `Value: 0`

- **ProjectM.BloodBuff**
  - `UnmodifiedValue0: 0`
  - `Type: ProjectM.BloodBuffType Primary`

- **ProjectM.BuffCategory**
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.SyncToUserBitMask**
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_hcejdkkkf`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: -1923843097`

- **ProjectM.Network.SyncToUserBuffer**

- **ProjectM.ModifyUnitStatBloodBuff_DOTS**

- **[0]**
  - `StaticValueMinMax: ProjectM.FloatRange { Min: 0.4, Max: 0.4 }`
  - `SoftCapValueMinMax: ProjectM.FloatRange { Min: 0, Max: 0 }`
  - `BaseQuality: 100`
  - `BloodEfficiencyModificationId: Unset`
  - `BloodEfficiencyExcluded: False`

- **[1]**
  - `StaticValueMinMax: ProjectM.FloatRange { Min: 0.4, Max: 0.4 }`
  - `SoftCapValueMinMax: ProjectM.FloatRange { Min: 0, Max: 0 }`
  - `BaseQuality: 100`
  - `BloodEfficiencyModificationId: Unset`
  - `BloodEfficiencyExcluded: False`

- **ProjectM.ModifyUnitStatBuff_DOTS**

- **[0]**
  - `AttributeCapType: ProjectM.AttributeCapType Uncapped`
  - `StatType: ProjectM.UnitStatType SpellFreeCast`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 0.4`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **[1]**
  - `AttributeCapType: ProjectM.AttributeCapType Uncapped`
  - `StatType: ProjectM.UnitStatType WeaponFreeCast`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 0.4`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.Network.OnlySyncToUsersTag**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **ProjectM.Network.NetworkSnapshotType**
