---
title: AB_Gloomrot_RailgunSergeant_HomingOrb_Cast
guid: 1410738
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Gloomrot_RailgunSergeant_HomingOrb_Cast

**GUID:** `1410738`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- **ProjectM.Attach**
  - `Parent: Entity(0:0)`

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.AbilityState**
  - `AbilityId: AB_Gloomrot_RailgunSergeant_HomingOrb_Cast PrefabGuid(1410738)`
  - `GroupEntity: NetworkedEntity(0:0)`
  - `AbilityTypeFlag: ProjectM.AbilityTypeFlag AbilityKit, AbilityKit_BreakStealth`

- **ProjectM.Network.ModifyRotationDuringCast**
  - `CastRotationData: ProjectM.Network.ModifyRotation ProjectM.Network.ModifyRotation`
  - `PostCastRotationData: ProjectM.Network.ModifyRotation ProjectM.Network.ModifyRotation`
  - `CastModifyRotationEntity: Entity(0:0)`
  - `PostCastModifyRotationEntity: Entity(0:0)`

- **ProjectM.AbilityPriority**
  - `Priority: 0`
  - `InterruptLowerPriority: False`
  - `InterruptHigherPriority: False`

- **ProjectM.AbilityCastTimeData**
  - `MaxCastTime: 2`
  - `PostCastTime: 1`
  - `HideCastBar: True`

- **ProjectM.AbilityInterruptData**
  - `CooldownOnInterrupt: 0.5`
  - `InterruptTypes: ProjectM.InterruptTypes ManualInterrupt`
  - `FullCooldownOnInterrupt: False`
  - `FullCooldownModifier: 1`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.AbilityCooldownState**
  - `CooldownEndTime: 0`
  - `CurrentCooldown: 0`

- **ProjectM.AbilityCooldownData**
  - `ShowInteractCooldownHUD: False`
  - `IgnoreCooldownModifier: False`
  - `Cooldown: 1`

- **ProjectM.GlobalCooldown**
  - `Value: 0`

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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_acgddgdckdd`

- **ProjectM.Network.ModifyMovementDuringCastData**
  - `MovementSpeedMultiplier: 0`
  - `InDuration: 0`
  - `Duration: 3.2`
  - `OutDuration: 0`
  - `UseCastDuration: False`

- **ProjectM.Behaviours.AbilityRange**
  - `Min: 0`
  - `Max: 12`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 1410738`

- **ProjectM.AbilitySpawnPrefabOnCast**

- **[0]**
  - `SpawnPrefab: AB_Gloomrot_RailgunSergeant_HomingOrb_Trigger PrefabGuid(-1771636157)`
  - `Target: ProjectM.AbilitySpawnTarget Owner`
  - `TargetEntity: Entity(0:0)`
  - `HoverDistance: 0`
  - `HoverCondition: None`
  - `Condition: None`
  - `HoverMaxDistance: 900`

- **ProjectM.Network.SyncToUserBuffer**

- **ProjectM.AbilitySpawnPrefabOnStartCast**

- **[0]**
  - `SpawnPrefab: AB_Gloomrot_RailgunSergeant_HomingOrb_InitTrigger PrefabGuid(-1305946610)`
  - `BuffDuration: 0`
  - `Condition: None`
  - `DestroyWhenCastDone: False`
  - `Target: ProjectM.AbilitySpawnPrefabOnStartCast+SpawnTarget Owner`

- **ProjectM.AbilityCastCondition**

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.PreventDisableWhenNoPlayersInRange**

- **ProjectM.Network.OnlySyncToUsersTag**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.Network.NetworkSnapshotType**
