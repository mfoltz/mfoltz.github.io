---
title: AB_Shapeshift_Bat_PreCast
guid: 618866625
categories:
- AB
- All
nav_exclude: true
search_exclude: true
layout: default
components:
- Attach
- EntityOwner
- EntityCreator
- AbilityState
- AbilityPriority
- AbilityCastTimeData
- DestroyData
- DestroyState
- AbilityCooldownState
- AbilityCooldownData
- Networked
- UpToDateUserBitMask
- SyncToUserBitMask
- FrameChanged
- NetworkSnapshot
- Script_PreCast_TakeFlight_DataServer
- NetworkId
- PrefabGUID
- SyncToUserBuffer
- CreateGameplayEventsOnSpawn
- AbilityCastCondition
- NetSnapshot
- SnapshotFrameChangedBuffer
- RunScriptOnPreCastEnded
- PreventDisableWhenNoPlayersInRange
- OnlySyncToUsersTag
- SpawnTag
- Prefab
- Simulate
- BlobAssetOwner
- NetworkSnapshotType
---

# AB_Shapeshift_Bat_PreCast

**GUID:** `618866625`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- [Attach](/components/Attach){:target="_blank"}
  - `Parent: Entity(0:0)`

- [EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [AbilityState](/components/AbilityState){:target="_blank"}
  - `AbilityId: AB_Shapeshift_Bat_PreCast PrefabGuid(618866625)`
  - `GroupEntity: NetworkedEntity(0:0)`
  - `AbilityTypeFlag: ProjectM.AbilityTypeFlag None`

- [AbilityPriority](/components/AbilityPriority){:target="_blank"}
  - `Priority: 3`
  - `InterruptLowerPriority: True`
  - `InterruptHigherPriority: False`

- [AbilityCastTimeData](/components/AbilityCastTimeData){:target="_blank"}
  - `MaxCastTime: 0`
  - `PostCastTime: 0`
  - `HideCastBar: True`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [AbilityCooldownState](/components/AbilityCooldownState){:target="_blank"}
  - `CooldownEndTime: 0`
  - `CurrentCooldown: 0`

- [AbilityCooldownData](/components/AbilityCooldownData){:target="_blank"}
  - `ShowInteractCooldownHUD: False`
  - `IgnoreCooldownModifier: False`
  - `Cooldown: 0.5`

- [Networked](/components/Networked){:target="_blank"}
  - `CreateFrame: 0`

- [UpToDateUserBitMask](/components/UpToDateUserBitMask){:target="_blank"}
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- [SyncToUserBitMask](/components/SyncToUserBitMask){:target="_blank"}
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- [FrameChanged](/components/FrameChanged){:target="_blank"}
  - `Value: -1`

- [NetworkSnapshot](/components/NetworkSnapshot){:target="_blank"}
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_hkdbgkgik`

- [Script_PreCast_TakeFlight_DataServer](/components/Script_PreCast_TakeFlight_DataServer){:target="_blank"}
  - `Ability: AB_Shapeshift_Bat_TakeFlight_Group PrefabGuid(576026408)`
  - `LKey_TakeoffBlocked: e62f0a11-1e2b-4f90-98e2-e4db59a8fc5e - Invalid Location`
  - `LKey_InContest: 3b5f134b-fed2-43ee-988c-5d424476cb47 - Cannot Use in Contest`

- [NetworkId](/components/NetworkId){:target="_blank"}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 618866625`

- [SyncToUserBuffer](/components/SyncToUserBuffer){:target="_blank"}
  - *(No fields)*

- [CreateGameplayEventsOnSpawn](/components/CreateGameplayEventsOnSpawn){:target="_blank"}

- **[0]**
  - `EventId: Local - -112044381`
  - `Target: ProjectM.GameplayEventTarget Owner`

- [AbilityCastCondition](/components/AbilityCastCondition){:target="_blank"}
  - *(No fields)*

- [NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 193`

- **[1]**
  - `Value: 39`

- **[2]**
  - `Value: 227`

- **[3]**
  - `Value: 36`

- **[4]**
  - `Value: 115`

- **[5]**
  - `Value: 1`

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

- **40 total elements but only showing the first 36**
  - *(No fields)*

- [SnapshotFrameChangedBuffer](/components/SnapshotFrameChangedBuffer){:target="_blank"}

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

- [RunScriptOnPreCastEnded](/components/RunScriptOnPreCastEnded){:target="_blank"}
  - *(No fields)*

- [PreventDisableWhenNoPlayersInRange](/components/PreventDisableWhenNoPlayersInRange){:target="_blank"}
  - *(No fields)*

- [OnlySyncToUsersTag](/components/OnlySyncToUsersTag){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [BlobAssetOwner](/components/BlobAssetOwner){:target="_blank"}
  - *(No fields)*

- [NetworkSnapshotType](/components/NetworkSnapshotType){:target="_blank"}
  - *(No fields)*
