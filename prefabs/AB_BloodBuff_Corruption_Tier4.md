---
title: AB_BloodBuff_Corruption_Tier4
guid: 1491794137
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_BloodBuff_Corruption_Tier4

**GUID:** `1491794137`

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
  - `BuffType: ProjectM.BuffType Parallel`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: False`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Buff`

- **ProjectM.Gameplay.Scripting.BloodBuff_Corruption_SpawnUnitOnCast_DataShared**
  - `Chance: 0.2`
  - `DamageListenerId: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`
  - `RequiredBloodPercentage: 90`
  - `PrefabType: AB_Corruption_EnemySpawner PrefabGuid(530364652)`

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
  - `_Value: 1491794137`

- **ProjectM.Network.SyncToUserBuffer**

- **ProjectM.ModifyUnitStatBloodBuff_DOTS**

- **[0]**
  - `StaticValueMinMax: ProjectM.FloatRange { Min: 0.15, Max: 0.15 }`
  - `SoftCapValueMinMax: ProjectM.FloatRange { Min: 0, Max: 0 }`
  - `BaseQuality: 90`
  - `BloodEfficiencyModificationId: Unset`
  - `BloodEfficiencyExcluded: False`

- **[1]**
  - `StaticValueMinMax: ProjectM.FloatRange { Min: 0.15, Max: 0.15 }`
  - `SoftCapValueMinMax: ProjectM.FloatRange { Min: 0, Max: 0 }`
  - `BaseQuality: 90`
  - `BloodEfficiencyModificationId: Unset`
  - `BloodEfficiencyExcluded: False`

- **ProjectM.ModifyUnitStatBuff_DOTS**

- **[0]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType SpellFreeCast`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 0.15`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **[1]**
  - `AttributeCapType: ProjectM.AttributeCapType SoftCapped`
  - `StatType: ProjectM.UnitStatType WeaponFreeCast`
  - `ModificationType: ProjectM.ModificationType Add`
  - `Value: 0.15`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 0`
  - `Id: Unset`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.Buff_Persists_Through_Death**

- **ProjectM.RunScriptOnPreCastFinished**

- **ProjectM.Network.OnlySyncToUsersTag**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **ProjectM.Network.NetworkSnapshotType**
