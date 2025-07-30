---
title: AB_BloodBuff_Worker_Tier4
guid: 1791009885
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_BloodBuff_Worker_Tier4

**GUID:** `1791009885`

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

- **ProjectM.Gameplay.Scripting.BloodBuff_Worker_Pulverize_DataShared**
  - `PulverizeBuff: Buff_BloodBuff_Worker_Tier4_FadingHaste PrefabGuid(2131895379)`
  - `RequiredBloodPercentage: 90`
  - `PulverizeChance: 0.03`
  - `PulverizeDamage: ProjectM.DealDamageParameters ProjectM.DealDamageParameters`
  - `SequenceGuid: SequenceGUID 1734740798`
  - `SequenceState: SequenceState`
  - `Id: Entity(0:0)`
  - `OnDamageDealtListener: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`

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
  - `_Value: 1791009885`

- **ProjectM.Network.SyncToUserBuffer**

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.YieldResourceSource**

- **ProjectM.Buff_Persists_Through_Death**

- **ProjectM.Scripting.ScriptSpawn**

- **ProjectM.Network.OnlySyncToUsersTag**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **ProjectM.Network.NetworkSnapshotType**
