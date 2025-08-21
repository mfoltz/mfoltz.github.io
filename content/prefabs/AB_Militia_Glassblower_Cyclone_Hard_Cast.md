---
title: AB_Militia_Glassblower_Cyclone_Hard_Cast
guid: -1085065672
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `-1085065672`

**Categories:** [AB]({{% relref "prefabs/AB.md" %}}), [All]({{% relref "prefabs/All.md" %}})

## Components

- [ProjectM.HideWeapon]({{% relref "components/HideWeapon.md" %}})
  - `HideWeaponSequenceGUID: SequenceGUID 1136240177`
  - `HideWeaponState: SequenceState`
  - `Id: Entity(0:0)`

- [ProjectM.Attach]({{% relref "components/Attach.md" %}})
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner]({{% relref "components/EntityOwner.md" %}})
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator]({{% relref "components/EntityCreator.md" %}})
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.AbilityState]({{% relref "components/AbilityState.md" %}})
  - `AbilityId: AB_Militia_Glassblower_Cyclone_Hard_Cast PrefabGuid(-1085065672)`
  - `GroupEntity: NetworkedEntity(0:0)`
  - `AbilityTypeFlag: ProjectM.AbilityTypeFlag AbilityKit, AbilityKit_BreakStealth`

- [ProjectM.Network.ModifyRotationDuringCast]({{% relref "components/ModifyRotationDuringCast.md" %}})
  - `CastRotationData: ProjectM.Network.ModifyRotation ProjectM.Network.ModifyRotation`
  - `PostCastRotationData: ProjectM.Network.ModifyRotation ProjectM.Network.ModifyRotation`
  - `CastModifyRotationEntity: Entity(0:0)`
  - `PostCastModifyRotationEntity: Entity(0:0)`

- [ProjectM.AbilityPriority]({{% relref "components/AbilityPriority.md" %}})
  - `Priority: 0`
  - `InterruptLowerPriority: False`
  - `InterruptHigherPriority: False`

- [ProjectM.AbilityCastTimeData]({{% relref "components/AbilityCastTimeData.md" %}})
  - `MaxCastTime: 0.8`
  - `PostCastTime: 0.7`
  - `HideCastBar: True`

- [ProjectM.HideWeaponDuringCast]({{% relref "components/HideWeaponDuringCast.md" %}})
  - `CastStartTime: 0`
  - `Duration: 1`
  - `CastStartCounter: 0`
  - `Type: ProjectM.HideWeaponDuringCastType CastAndPostCast`

- [ProjectM.AbilityInterruptData]({{% relref "components/AbilityInterruptData.md" %}})
  - `CooldownOnInterrupt: 0.5`
  - `InterruptTypes: ProjectM.InterruptTypes ManualInterrupt`
  - `FullCooldownOnInterrupt: False`
  - `FullCooldownModifier: 1`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.AbilityCooldownState]({{% relref "components/AbilityCooldownState.md" %}})
  - `CooldownEndTime: 0`
  - `CurrentCooldown: 0`

- [ProjectM.AbilityCooldownData]({{% relref "components/AbilityCooldownData.md" %}})
  - `ShowInteractCooldownHUD: False`
  - `IgnoreCooldownModifier: False`
  - `Cooldown: 7`

- [ProjectM.GlobalCooldown]({{% relref "components/GlobalCooldown.md" %}})
  - `Value: 0.3`

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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_acgddgdckdd`

- [ProjectM.Network.ModifyMovementDuringCastData]({{% relref "components/ModifyMovementDuringCastData.md" %}})
  - `MovementSpeedMultiplier: 0`
  - `InDuration: 0.1`
  - `Duration: 1.4`
  - `OutDuration: 0.1`
  - `UseCastDuration: False`

- [ProjectM.Shared.SpellModSetComponent]({{% relref "components/SpellModSetComponent.md" %}})
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

- [ProjectM.Gameplay.Scripting.Script_MultiShot_Cast_DataServer]({{% relref "components/Script_MultiShot_Cast_DataServer.md" %}})
  - `Angle: 0.34906584`
  - `OffsetAllAngles: 0`
  - `NewProjectile: AB_Militia_Glassblower_Cyclone_Hard_Projectile PrefabGuid(-1121865614)`
  - `Count: 2`
  - `Condition: None`

- [ProjectM.Network.NetworkId]({{% relref "components/NetworkId.md" %}})
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: -1085065672`

- [ProjectM.Network.SyncToUserBuffer]({{% relref "components/SyncToUserBuffer.md" %}})

- [ProjectM.AbilityCastCondition]({{% relref "components/AbilityCastCondition.md" %}})

- [ProjectM.Network.NetSnapshot]({{% relref "components/NetSnapshot.md" %}})

- **[0]**
  - `Value: 56`

- **[1]**
  - `Value: 54`

- **[2]**
  - `Value: 83`

- **[3]**
  - `Value: 191`

- **[4]**
  - `Value: 55`

- **[5]**
  - `Value: 0`

- **[6]**
  - `Value: 0`

- **[7]**
  - `Value: 0`

- **[8]**
  - `Value: 0`

- **[9]**
  - `Value: 0`

- **[10]**
  - `Value: 0`

- **[11]**
  - `Value: 0`

- **[12]**
  - `Value: 0`

- **[13]**
  - `Value: 0`

- **[14]**
  - `Value: 0`

- **[15]**
  - `Value: 0`

- **[16]**
  - `Value: 0`

- **[17]**
  - `Value: 0`

- **[18]**
  - `Value: 0`

- **[19]**
  - `Value: 0`

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
  - `Value: 0`

- **[33]**
  - `Value: 0`

- **[34]**
  - `Value: 0`

- **[35]**
  - `Value: 0`

- **[36]**
  - `Value: 0`

- **[37]**
  - `Value: 0`

- **[38]**
  - `Value: 0`

- **[39]**
  - `Value: 0`

- **[40]**
  - `Value: 0`

- **[41]**
  - `Value: 0`

- **[42]**
  - `Value: 0`

- **[43]**
  - `Value: 0`

- **[44]**
  - `Value: 0`

- **[45]**
  - `Value: 0`

- **[46]**
  - `Value: 0`

- **[47]**
  - `Value: 0`

- **48 total elements but only showing the first 36**

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

- [ProjectM.RunScriptOnPreCastEnded]({{% relref "components/RunScriptOnPreCastEnded.md" %}})

- [ProjectM.PreventDisableWhenNoPlayersInRange]({{% relref "components/PreventDisableWhenNoPlayersInRange.md" %}})

- [ProjectM.Network.OnlySyncToUsersTag]({{% relref "components/OnlySyncToUsersTag.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})

- [Unity.Entities.BlobAssetOwner]({{% relref "components/BlobAssetOwner.md" %}})

- [ProjectM.Network.NetworkSnapshotType]({{% relref "components/NetworkSnapshotType.md" %}})
