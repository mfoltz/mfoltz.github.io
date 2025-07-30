---
title: EquipBuff_Weapon_Spear_Ability03
guid: -552536675
categories: ['All', 'Equip']
nav_exclude: true
search_exclude: true
layout: default
---

# EquipBuff_Weapon_Spear_Ability03

**GUID:** `-552536675`

**Categories:** [All](/prefabs/All), [Equip](/prefabs/Equip)

## Components

- **ProjectM.Attach**
  - `Parent: Entity(0:0)`

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.EquippableBuff**
  - `ItemSource: Entity(0:0)`

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

- **ProjectM.ReplaceAbilityOnSlotData**
  - `ModificationEntity: Entity(0:0)`
  - `CopyCooldown: True`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.WeaponLevel**
  - `Level: 0`
  - `ModificationId: Unset`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_fkbkbchgb`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: -552536675`

- **ProjectM.ReplaceAbilityOnSlotWhenMountedBuffElement**

- **ProjectM.ReplaceAbilityOnSlotWhenMountedBuffModificationElement**

- **ProjectM.ReplaceAbilityOnSlotBuff**

- **[0]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 0`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: AB_Vampire_Spear_Primary_Attack_Group PrefabGuid(-208121356)`
  - `Priority: 0`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType WholeCast`
  - `CopyCooldown: False`

- **[1]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 1`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: AB_Spear_AThousandSpears_Stab_AbilityGroup PrefabGuid(377778793)`
  - `Priority: 0`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType WholeCast`
  - `CopyCooldown: False`

- **[2]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 4`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: AB_Vampire_Spear_Harpoon_Throw_AbilityGroup PrefabGuid(830123499)`
  - `Priority: 0`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType WholeCast`
  - `CopyCooldown: False`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.Buff_Persists_Through_Death**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.Network.NetworkSnapshotType**
