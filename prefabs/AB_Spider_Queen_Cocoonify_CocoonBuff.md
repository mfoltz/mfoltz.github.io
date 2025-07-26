---
title: AB_Spider_Queen_Cocoonify_CocoonBuff
guid: 831431517
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Spider_Queen_Cocoonify_CocoonBuff

**GUID:** `831431517`

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
  - `BuffType: ProjectM.BuffType Parallel`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: False`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Debuff`

- **ProjectM.GetTranslationOnSpawn**
  - `TranslationSource: ProjectM.GetTranslationSource BuffTarget`
  - `SnapToGround: False`

- **ProjectM.AbsorbBuff**
  - `AbsorbModifier: 1`
  - `AbsorbCap: 0`
  - `AbsorbValue: 0`

- **ProjectM.MultiplyAbsorbCapBySpellPower**
  - `Modifier: 7`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Age**
  - `Value: 0`

- **ProjectM.BuffCategory**
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag Stun`
  - `KeepOldest: False`

- **ProjectM.LifeTime**
  - `Duration: 1`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.ManualFirstFrameLastTranslation**
  - `Value: Il2CppSystem.Nullable_Unboxed`1[Unity.Mathematics.float3]`

- **ProjectM.Team**
  - `Value: 1`
  - `FactionIndex: -1`

- **ProjectM.BuffModificationFlagData**
  - `ModificationTypes: 1107296272`
  - `ModificationId: Unset`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_achfcefeheb`

- **Unity.Transforms.Rotation**
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Unity.Transforms.Translation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **Unity.Transforms.LocalToWorld**
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- **Unity.Transforms.LocalTransform**
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **ProjectM.TeamReference**
  - `Value: ModifiableEntity(0:0)`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 831431517`

- **ProjectM.CreateGameplayEventsOnDestroy**
  - *(No fields)*

- **[0]**
  - `EventId: Local - -1727898954`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- **[1]**
  - `EventId: Local - 1632871836`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`
  - `SpecificDestroyReason: True`
  - `DestroyReason: ProjectM.DestroyReason Duration`

- **ProjectM.CreateGameplayEventsOnSpawn**
  - *(No fields)*

- **[0]**
  - `EventId: Local - 373290447`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`

- **ProjectM.GameplayEventIdMapping**
  - *(No fields)*

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1727898954`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[1]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 373290447`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[2]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 1632871836`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[3]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 1632871836`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[4]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 1632871836`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **ProjectM.PlaySequenceOnGameplayEvent**
  - *(No fields)*

- **[0]**
  - `SequenceGuid: SequenceGUID -1293010694`
  - `SequencePositionTarget: ProjectM.PlaySequenceOnGameplayEventTarget Self`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget Self`

- **[1]**
  - `SequenceGuid: SequenceGUID -251619470`
  - `SequencePositionTarget: ProjectM.PlaySequenceOnGameplayEventTarget Self`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget Self`

- **ProjectM.SpawnMinionOnGameplayEvent**
  - *(No fields)*

- **[0]**
  - `Location: ProjectM.SpawnMiniononGameplayEventLocation Target`
  - `Rotation: ProjectM.SpawnMinionOnGameplayEventRotation Random`
  - `PrefabPickMode: ProjectM.SpawnMinionOnGameplayEventPrefabPickMode InOrder`
  - `OwnerSpawnDirection: False`
  - `MinDistance: 0.3`
  - `MaxDistance: 0.6`
  - `EventTargetAggroBoost: 0`
  - `MaxDistanceFromPreCombatPositionOverride: -1`
  - `Count: 3`
  - `IncludeInMinionCount: True`
  - `AllowCharm: False`
  - `CanBeConsumed: True`
  - `OverrideBloodQualityCurve: ProjectM.CurveReference ProjectM.CurveReference`
  - `ForceBadBloodQuality: True`
  - `TriggerMasterDeathActionOnDowned: True`
  - `InheritOwnerFaction: True`
  - `InheritOwner: False`
  - `AcceptSpawnInCollision: False`
  - `SetTeamToOwner: True`
  - `DisableDropsFromMinion: True`
  - `MasterDeathAction: ProjectM.MinionMasterDeathAction Kill`
  - `MasterDeathBuffPrefabGuid: GUID Not Found`
  - `BlobData: Unity.Entities.BlobAssetReference`1[ProjectM.SpawnMinionOnGameplayEventBlob] Unity.Entities.BlobAssetReference`1[ProjectM.SpawnMinionOnGameplayEventBlob]`
  - `SpawnSequenceGuid: SequenceGUID 0`
  - `StatsOverrides: ProjectM.SpawnMinionOnGameplayEventStatsOverrides ProjectM.SpawnMinionOnGameplayEventStatsOverrides`

- **ProjectM.DealDamageOnGameplayEvent**
  - *(No fields)*

- **[0]**
  - `Parameters: ProjectM.DealDamageParameters ProjectM.DealDamageParameters`
  - `DamageModifierPerHit: 0`
  - `MultiplyMainFactorWithStacks: False`

- **ProjectM.GameplayEventListeners**
  - *(No fields)*

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - -1727898954`

- **[1]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 1`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - 373290447`

- **[2]**
  - `EventIdIndex: 2`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum SpawnMinion`
  - `GameplayEventId: Local - 1632871836`

- **[3]**
  - `EventIdIndex: 4`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum DealDamage`
  - `GameplayEventId: Local - 1632871836`

- **ProjectM.Network.NetSnapshot**
  - *(No fields)*

- **[0]**
  - `Value: 93`

- **[1]**
  - `Value: 163`

- **[2]**
  - `Value: 142`

- **[3]**
  - `Value: 49`

- **[4]**
  - `Value: 68`

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

- **[48]**
  - `Value: 0`

- **[49]**
  - `Value: 0`

- **[50]**
  - `Value: 0`

- **[51]**
  - `Value: 0`

- **[52]**
  - `Value: 0`

- **[53]**
  - `Value: 0`

- **[54]**
  - `Value: 0`

- **[55]**
  - `Value: 0`

- **[56]**
  - `Value: 0`

- **[57]**
  - `Value: 0`

- **[58]**
  - `Value: 0`

- **[59]**
  - `Value: 0`

- **[60]**
  - `Value: 0`

- **[61]**
  - `Value: 0`

- **[62]**
  - `Value: 0`

- **[63]**
  - `Value: 128`

- **[64]**
  - `Value: 63`

- **[65]**
  - `Value: 255`

- **[66]**
  - `Value: 255`

- **[67]**
  - `Value: 255`

- **[68]**
  - `Value: 255`

- **[69]**
  - `Value: 1`

- **[70]**
  - `Value: 0`

- **[71]**
  - `Value: 0`

- **[72]**
  - `Value: 0`

- **[73]**
  - `Value: 0`

- **[74]**
  - `Value: 0`

- **[75]**
  - `Value: 0`

- **[76]**
  - `Value: 0`

- **[77]**
  - `Value: 0`

- **[78]**
  - `Value: 0`

- **[79]**
  - `Value: 0`

- **80 total elements but only showing the first 36**
  - *(No fields)*

- **ProjectM.Network.SnapshotFrameChangedBuffer**
  - *(No fields)*

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

- **[10]**
  - `Value: -1`

- **[11]**
  - `Value: -1`

- **[12]**
  - `Value: -1`

- **[13]**
  - `Value: -1`

- **[14]**
  - `Value: -1`

- **[15]**
  - `Value: -1`

- **ProjectM.GetOwnerTeamOnSpawn**
  - *(No fields)*

- **ProjectM.BlockFeedBuff**
  - *(No fields)*

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*

- **Unity.Entities.BlobAssetOwner**
  - *(No fields)*

- **ProjectM.Network.NetworkSnapshotType**
  - *(No fields)*

