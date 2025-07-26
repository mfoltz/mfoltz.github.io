---
title: AB_Unholy_UnstableArachnid_Recast_AbilityGroup
guid: 1351498027
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
- AbilityGroupState
- AbilityGroupResetComboState
- DestroyData
- DestroyState
- AbilityChargesState
- AbilityChargesData
- AbilityGroupInfo
- Networked
- UpToDateUserBitMask
- SyncToUserBitMask
- FrameChanged
- NetworkSnapshot
- NetworkId
- PrefabGUID
- AbilityStateBuffer
- SyncToUserBuffer
- Snapshot_AbilityStateBuffer
- AbilityCastCondition
- AbilityGroupStartAbilitiesBuffer
- NetSnapshot
- SnapshotFrameChangedBuffer
- PreventDisableWhenNoPlayersInRange
- OnlySyncToUsersTag
- SpawnTag
- Prefab
- Simulate
- BlobAssetOwner
- NetworkSnapshotType
---

# AB_Unholy_UnstableArachnid_Recast_AbilityGroup

**GUID:** `1351498027`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- [Attach](/components/Attach){:target="_blank"}
  - `Parent: Entity(0:0)`

- [EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [AbilityGroupState](/components/AbilityGroupState){:target="_blank"}
  - `Character: NetworkedEntity(0:0)`
  - `GroupId: GUID Not Found`
  - `SlotIndex: -1`

- [AbilityGroupResetComboState](/components/AbilityGroupResetComboState){:target="_blank"}
  - `ComboResetTime: 0`
  - `ComboResetDuration: 1`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [AbilityChargesState](/components/AbilityChargesState){:target="_blank"}
  - `ChargeTime: 0`
  - `CurrentCharges: 3`

- [AbilityChargesData](/components/AbilityChargesData){:target="_blank"}
  - `ShowInteractCooldownHUD: False`
  - `ChargeUpTime: 50`
  - `MaxCharges: 3`
  - `IgnoreCooldownModifier: False`

- [AbilityGroupInfo](/components/AbilityGroupInfo){:target="_blank"}
  - `ReleaseCastQueueTime: 0.3`
  - `CastCondition: None`
  - `HoverCondition: None`
  - `MinRange: 0`
  - `MaxRange: 12`
  - `BehaviorType: ProjectM.AbilityBehaviorType TargetAOE`
  - `InputType: ProjectM.AbilityInputCastType Default`
  - `Target: ProjectM.AbilitySpawnTarget Owner`

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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_cjbjeehdbk`

- [NetworkId](/components/NetworkId){:target="_blank"}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 1351498027`

- [AbilityStateBuffer](/components/AbilityStateBuffer){:target="_blank"}
  - *(No fields)*

- [SyncToUserBuffer](/components/SyncToUserBuffer){:target="_blank"}
  - *(No fields)*

- [Snapshot_AbilityStateBuffer](/components/Snapshot_AbilityStateBuffer){:target="_blank"}
  - *(No fields)*

- [AbilityCastCondition](/components/AbilityCastCondition){:target="_blank"}
  - *(No fields)*

- [AbilityGroupStartAbilitiesBuffer](/components/AbilityGroupStartAbilitiesBuffer){:target="_blank"}

- **[0]**
  - `PrefabGUID: AB_Unholy_UnstableArachnid_Recast_Cast PrefabGuid(-274736833)`

- [NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 43`

- **[1]**
  - `Value: 57`

- **[2]**
  - `Value: 142`

- **[3]**
  - `Value: 80`

- **[4]**
  - `Value: 35`

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
  - `Value: 3`

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
  - `Value: 255`

- **[33]**
  - `Value: 255`

- **[34]**
  - `Value: 255`

- **[35]**
  - `Value: 255`

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

- **[48]**
  - `Value: 0`

- **[49]**
  - `Value: 0`

- **[50]**
  - `Value: 0`

- **[51]**
  - `Value: 0`

- **52 total elements but only showing the first 36**
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

- **[5]**
  - `Value: -1`

- **[6]**
  - `Value: -1`

- **[7]**
  - `Value: -1`

- **[8]**
  - `Value: -1`

- **[9]**
  - `Value: -1`

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
