---
title: AB_Bandit_Fisherman_SpinAttack_Cast
guid: 160205942
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Bandit_Fisherman_SpinAttack_Cast

**GUID:** `160205942`

**Categories:** [AB]{{< relref "prefabs/AB.md" >}}, [All]{{< relref "prefabs/All.md" >}}

## Components

- [ProjectM.Attach]{{< relref "components/Attach.md" >}}
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner]{{< relref "components/EntityOwner.md" >}}
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator]{{< relref "components/EntityCreator.md" >}}
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.AbilityState]{{< relref "components/AbilityState.md" >}}
  - `AbilityId: AB_Bandit_Fisherman_SpinAttack_Cast PrefabGuid(160205942)`
  - `GroupEntity: NetworkedEntity(0:0)`
  - `AbilityTypeFlag: ProjectM.AbilityTypeFlag AbilityKit, AbilityKit_BreakStealth`

- [ProjectM.Network.ModifyRotationDuringCast]{{< relref "components/ModifyRotationDuringCast.md" >}}
  - `CastRotationData: ProjectM.Network.ModifyRotation ProjectM.Network.ModifyRotation`
  - `PostCastRotationData: ProjectM.Network.ModifyRotation ProjectM.Network.ModifyRotation`
  - `CastModifyRotationEntity: Entity(0:0)`
  - `PostCastModifyRotationEntity: Entity(0:0)`

- [ProjectM.AbilityPriority]{{< relref "components/AbilityPriority.md" >}}
  - `Priority: 0`
  - `InterruptLowerPriority: False`
  - `InterruptHigherPriority: False`

- [ProjectM.AbilityCastTimeData]{{< relref "components/AbilityCastTimeData.md" >}}
  - `MaxCastTime: 2.2`
  - `PostCastTime: 1.4`
  - `HideCastBar: True`

- [ProjectM.DestroyData]{{< relref "components/DestroyData.md" >}}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]{{< relref "components/DestroyState.md" >}}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.AbilityCooldownState]{{< relref "components/AbilityCooldownState.md" >}}
  - `CooldownEndTime: 0`
  - `CurrentCooldown: 0`

- [ProjectM.AbilityCooldownData]{{< relref "components/AbilityCooldownData.md" >}}
  - `ShowInteractCooldownHUD: False`
  - `IgnoreCooldownModifier: False`
  - `Cooldown: 1`

- [ProjectM.GlobalCooldown]{{< relref "components/GlobalCooldown.md" >}}
  - `Value: 1`

- [ProjectM.Network.Networked]{{< relref "components/Networked.md" >}}
  - `CreateFrame: 0`

- [ProjectM.Network.UpToDateUserBitMask]{{< relref "components/UpToDateUserBitMask.md" >}}
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- [ProjectM.Network.SyncToUserBitMask]{{< relref "components/SyncToUserBitMask.md" >}}
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- [ProjectM.Network.FrameChanged]{{< relref "components/FrameChanged.md" >}}
  - `Value: -1`

- [ProjectM.Network.NetworkSnapshot]{{< relref "components/NetworkSnapshot.md" >}}
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_acgddgdckdd`

- [ProjectM.Network.ModifyMovementDuringCastData]{{< relref "components/ModifyMovementDuringCastData.md" >}}
  - `MovementSpeedMultiplier: 0`
  - `InDuration: 0`
  - `Duration: 3.2`
  - `OutDuration: 0`
  - `UseCastDuration: False`

- [ProjectM.Network.NetworkId]{{< relref "components/NetworkId.md" >}}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID]{{< relref "components/PrefabGUID.md" >}}
  - `_Value: 160205942`

- [ProjectM.AbilitySpawnPrefabOnCast]{{< relref "components/AbilitySpawnPrefabOnCast.md" >}}

- **[0]**
  - `SpawnPrefab: AB_Bandit_Fisherman_SpinAttack_Channel PrefabGuid(-1448436196)`
  - `Target: ProjectM.AbilitySpawnTarget Owner`
  - `TargetEntity: Entity(0:0)`
  - `HoverDistance: 0`
  - `HoverCondition: None`
  - `Condition: None`
  - `HoverMaxDistance: 900`

- [ProjectM.Network.SyncToUserBuffer]{{< relref "components/SyncToUserBuffer.md" >}}

- [ProjectM.AbilityCastCondition]{{< relref "components/AbilityCastCondition.md" >}}

- [ProjectM.Network.NetSnapshot]{{< relref "components/NetSnapshot.md" >}}

- **[0]**
  - `Value: 118`

- **[1]**
  - `Value: 140`

- **[2]**
  - `Value: 140`

- **[3]**
  - `Value: 9`

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

- [ProjectM.Network.SnapshotFrameChangedBuffer]{{< relref "components/SnapshotFrameChangedBuffer.md" >}}

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

- [ProjectM.PreventDisableWhenNoPlayersInRange]{{< relref "components/PreventDisableWhenNoPlayersInRange.md" >}}

- [ProjectM.Network.OnlySyncToUsersTag]{{< relref "components/OnlySyncToUsersTag.md" >}}

- [Unity.Entities.SpawnTag]{{< relref "components/SpawnTag.md" >}}

- [Unity.Entities.Prefab]{{< relref "components/Prefab.md" >}}

- [Unity.Entities.Simulate]{{< relref "components/Simulate.md" >}}

- [Unity.Entities.BlobAssetOwner]{{< relref "components/BlobAssetOwner.md" >}}

- [ProjectM.Network.NetworkSnapshotType]{{< relref "components/NetworkSnapshotType.md" >}}
