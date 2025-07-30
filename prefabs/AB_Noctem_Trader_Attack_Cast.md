---
title: AB_Noctem_Trader_Attack_Cast
guid: 1245399064
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Noctem_Trader_Attack_Cast

**GUID:** `1245399064`

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

- **ProjectM.AbilityState**
  - `AbilityId: AB_Noctem_Trader_Attack_Cast PrefabGuid(1245399064)`
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
  - `MaxCastTime: 0.8`
  - `PostCastTime: 0.25`
  - `HideCastBar: True`

- **ProjectM.HideWeaponDuringCast**
  - `CastStartTime: 0`
  - `Duration: 1.5`
  - `CastStartCounter: 0`
  - `Type: ProjectM.HideWeaponDuringCastType CustomDuration`

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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_chiiihhffh`

- **ProjectM.Network.ModifyMovementDuringCastData**
  - `MovementSpeedMultiplier: 0`
  - `InDuration: 0.1`
  - `Duration: 1.3`
  - `OutDuration: 0.1`
  - `UseCastDuration: False`

- **ProjectM.Shared.SpellModSetComponent**
  - `SpellMods: SpellModSet`
  - `SyncId: 0`
  - `Mod0: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod1: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod2: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod3: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod4: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod5: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod6: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Mod7: SpellMod`
  - `Id: GUID Not Found`
  - `Power: 0`
  - `Count: 0`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 1245399064`

- **ProjectM.AbilitySpawnPrefabOnCast**

- **[0]**
  - `SpawnPrefab: AB_Noctem_Trader_Attack_Projectile PrefabGuid(-1789959759)`
  - `Target: ProjectM.AbilitySpawnTarget Owner`
  - `TargetEntity: Entity(0:0)`
  - `HoverDistance: 0`
  - `HoverCondition: None`
  - `Condition: None`
  - `HoverMaxDistance: 900`

- **ProjectM.Network.SyncToUserBuffer**

- **ProjectM.AbilityCastCondition**

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.Shared.SpellModArithmeticModifiable**

- **[0]**
  - `Condition: None`
  - `SpellMod: SpellMod_Shared_Cooldown_Medium PrefabGuid(1439297485)`
  - `Operation: ProjectM.Shared.SpellModArithmeticOperation IncreaseRatePercent`
  - `ValueIndex: 0`
  - `Target: ProjectM.Shared.SpellModArithmeticModifiableTarget AbilityCooldownData_Cooldown`
  - `TargetIndex: 0`

- **[1]**
  - `Condition: None`
  - `SpellMod: SpellMod_Shared_CastRate PrefabGuid(-111114882)`
  - `Operation: ProjectM.Shared.SpellModArithmeticOperation IncreaseRatePercent`
  - `ValueIndex: 0`
  - `Target: ProjectM.Shared.SpellModArithmeticModifiableTarget AbilityCastTimeData_MaxCastTime`
  - `TargetIndex: 0`

- **ProjectM.PreventDisableWhenNoPlayersInRange**

- **ProjectM.Network.OnlySyncToUsersTag**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.Network.NetworkSnapshotType**
