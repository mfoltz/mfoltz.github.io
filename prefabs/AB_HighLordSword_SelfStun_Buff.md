---
title: AB_HighLordSword_SelfStun_Buff
guid: -226187750
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_HighLordSword_SelfStun_Buff

**GUID:** `-226187750`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- **ProjectM.HideWeapon**
  - `HideWeaponSequenceGUID: SequenceGUID 1136240177`
  - `HideWeaponState: SequenceState`
  - `Id: Entity(0:0)`

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
  - `BuffEffectType: ProjectM.BuffEffectType Debuff`

- **ProjectM.AmplifyBuff**
  - `AmplifyModifier: 0.25`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Age**
  - `Value: 0`

- **ProjectM.BuffCategory**
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- **ProjectM.LifeTime**
  - `Duration: 10`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.ModifyTargetHUDBuff**
  - `Priority: 0`
  - `Height: -1`
  - `CharacterHUDHeightModId: Unset`
  - `HeightModId: Unset`
  - `PrefabType: ProjectM.CharacterHUDEntryType None`
  - `PrefabTypeModId: Unset`
  - `BloodPrefabType: ProjectM.CharacterHUDEntryType None`
  - `BloodPrefabTypeModId: Unset`
  - `LocalizedName: Stunlock.Core.AssetGuid 00000000000000000000000000000000`
  - `PreviousLocalizedName: Stunlock.Core.AssetGuid 00000000000000000000000000000000`

- **ProjectM.BuffModificationFlagData**
  - `ModificationTypes: 1107296272`
  - `ModificationId: Unset`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_ajchjhccfg`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: -226187750`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **ProjectM.Network.NetworkSnapshotType**
