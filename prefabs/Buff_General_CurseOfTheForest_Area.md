---
title: Buff_General_CurseOfTheForest_Area
guid: 821183186
categories: ['All', 'Buff']
nav_exclude: true
search_exclude: true
layout: default
---

# Buff_General_CurseOfTheForest_Area

**GUID:** `821183186`

**Categories:** [All](/prefabs/All), [Buff](/prefabs/Buff)

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
  - `BuffType: ProjectM.BuffType Block`
  - `Stacks: 0`
  - `MaxStacks: 100`
  - `ResetAge: True`
  - `IncreaseStacks: True`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Debuff`

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

- **ProjectM.Scripting.ScriptDestroy**
  - `Handled: False`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_cijeifhgec`

- **ProjectM.Gameplay.Scripting.Script_CursedAreaDebuff_DataServer**
  - `DynamicStacks: 0`
  - `DynamicStacksPerTick: 1`
  - `TimeInterval: 1`
  - `Timer: 0`
  - `DamagePerTick: 0`
  - `DecreaseTimeInterval: 0.2`
  - `CurseBlockTimeInterval: 0.15`
  - `CurseBlockDecreaseDynamicStacksPerTick: 2`
  - `DecreaseDynamicStacksPerTick: -1`
  - `VisionModificationId: Unset`
  - `VisionReductionPerStack: 0.17`
  - `VisionStartValue: 25`
  - `VisionMinValue: 0`
  - `ImmunityBuff: EquipBuff_ShroudOfTheForest PrefabGuid(1504279833)`
  - `BlockCurseBuff: AB_Interact_Curse_Wisp_Buff PrefabGuid(969375416)`
  - `CurseBlockStacks: 0`

- **ProjectM.Gameplay.Scripting.Script_CurseAreaDebuff_DataShared**
  - `IsInArea: False`
  - `StackSize: 0`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 821183186`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.Scripting.ScriptSpawn**

- **ProjectM.Scripting.ScriptUpdate**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **ProjectM.Network.NetworkSnapshotType**
