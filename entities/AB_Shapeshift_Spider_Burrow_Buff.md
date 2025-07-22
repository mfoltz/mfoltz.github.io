---
title: AB_Shapeshift_Spider_Burrow_Buff
guid: -1665328650
categories: ['AB', 'All']
nav_exclude: true
search_exclude: false
layout: default
---

# AB_Shapeshift_Spider_Burrow_Buff

**GUID:** `-1665328650`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- [ProjectM.Attach](/components/Attach){:target="_blank"}
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Buff](/components/Buff){:target="_blank"}
  - `StartTimeUnmodified: 0`
  - `Target: Entity(0:0)`
  - `BuffType: ProjectM.BuffType Replace`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: True`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Buff`

- [ProjectM.ReplaceAbilityOnSlotData](/components/ReplaceAbilityOnSlotData){:target="_blank"}
  - `ModificationEntity: Entity(0:0)`
  - `CopyCooldown: False`

- [ProjectM.ShapeshiftImpairBuff](/components/ShapeshiftImpairBuff){:target="_blank"}
  - `FailKey: c502c740-7acb-4877-9188-e134915de0e3 - Cannot shapeshift while burrowed`
  - `Condition: None`

- [ProjectM.DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age](/components/Age){:target="_blank"}
  - `Value: 0`

- [ProjectM.BuffCategory](/components/BuffCategory){:target="_blank"}
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- [ProjectM.HideTargetHUD](/components/HideTargetHUD){:target="_blank"}
  - `Type: ProjectM.HideTargetHUDType -1`

- [ProjectM.BuffModificationFlagData](/components/BuffModificationFlagData){:target="_blank"}
  - `ModificationTypes: 30802448478866`
  - `ModificationId: Unset`

- [ProjectM.Scripting.ScriptDestroy](/components/ScriptDestroy){:target="_blank"}
  - `Handled: False`

- [ProjectM.Network.Networked](/components/Networked){:target="_blank"}
  - `CreateFrame: 0`

- [ProjectM.Network.UpToDateUserBitMask](/components/UpToDateUserBitMask){:target="_blank"}
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- [ProjectM.Network.FrameChanged](/components/FrameChanged){:target="_blank"}
  - `Value: -1`

- [ProjectM.Network.NetworkSnapshot](/components/NetworkSnapshot){:target="_blank"}
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_fkbkbchgb`

- [ProjectM.Gameplay.Scripting.Script_Buff_AggroRangeFactor_DataShared](/components/Script_Buff_AggroRangeFactor_DataShared){:target="_blank"}
  - `AggroRangeFactor: 0`
  - `AggroRangeFactorModificationId: Unset`

- [ProjectM.Network.NetworkId](/components/NetworkId){:target="_blank"}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -1665328650`

- [ProjectM.CreateGameplayEventsOnAbilityTrigger](/components/CreateGameplayEventsOnAbilityTrigger){:target="_blank"}

- **[0]**
  - `EventId: Local - -2132548640`
  - `Type: ProjectM.AbilityTriggerEventType Use`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`
  - `Condition: None`
  - `AbilityTypes: ProjectM.AbilityTypeFlag 4294967072`
  - `AbilityButton: ProjectM.AbilityButtonInputAction None`
  - `AbilityTypeEnum: ProjectM.AbilityTypeEnum None`
  - `NumOfPrefabTargets: 0`
  - `PrefabTargetStartIndex: 0`

- [ProjectM.CreateGameplayEventOnDamageTaken](/components/CreateGameplayEventOnDamageTaken){:target="_blank"}

- **[0]**
  - `EventId: Local - -2015634130`
  - `Condition: None`
  - `Source: ProjectM.DamageTakenTarget BuffTarget`
  - `IncludeDoTs: False`
  - `IgnoreWhenInContest: False`

- [ProjectM.CreateGameplayEventsOnDestroy](/components/CreateGameplayEventsOnDestroy){:target="_blank"}

- **[0]**
  - `EventId: Local - -1285857012`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyOnGameplayEvent](/components/DestroyOnGameplayEvent){:target="_blank"}

- **[0]**
  - `Who: ProjectM.DestroyOnGameplayEventWho Self`
  - `Type: ProjectM.DestroyOnGameplayEventType Remove`
  - `DestroyReason: ProjectM.DestroyReason Default`
  - `SetTranslationToEventTranslation: True`

- [ProjectM.ForceCastOnGameplayEvent](/components/ForceCastOnGameplayEvent){:target="_blank"}

- **[0]**
  - `ForceCastAbility: AB_Shapeshift_Spider_Unburrow_AbilityGroup PrefabGuid(1704026958)`
  - `Target: ProjectM.ForceCastTarget Owner`

- [ProjectM.GameplayEventIdMapping](/components/GameplayEventIdMapping){:target="_blank"}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -2132548640`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[1]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -2015634130`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: True`

- **[2]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1285857012`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[3]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -2132548640`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [ProjectM.ReplaceAbilityOnSlotBuff](/components/ReplaceAbilityOnSlotBuff){:target="_blank"}

- **[0]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 0`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: AB_Shapeshift_Spider_Unburrow_AbilityGroup PrefabGuid(1704026958)`
  - `Priority: 100`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType PreCast`
  - `CopyCooldown: False`

- **[1]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 1`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: AB_Shapeshift_Spider_Unburrow_AbilityGroup PrefabGuid(1704026958)`
  - `Priority: 100`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType PreCast`
  - `CopyCooldown: False`

- **[2]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 2`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: AB_Shapeshift_Spider_Unburrow_AbilityGroup PrefabGuid(1704026958)`
  - `Priority: 100`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType PreCast`
  - `CopyCooldown: False`

- **[3]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 3`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: AB_Shapeshift_Spider_Unburrow_AbilityGroup PrefabGuid(1704026958)`
  - `Priority: 100`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType PreCast`
  - `CopyCooldown: False`

- **[4]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 4`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: AB_Shapeshift_Spider_Unburrow_AbilityGroup PrefabGuid(1704026958)`
  - `Priority: 100`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType PreCast`
  - `CopyCooldown: False`

- **[5]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 5`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: AB_Shapeshift_Spider_Unburrow_AbilityGroup PrefabGuid(1704026958)`
  - `Priority: 100`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType PreCast`
  - `CopyCooldown: False`

- **[6]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 6`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: AB_Shapeshift_Spider_Unburrow_AbilityGroup PrefabGuid(1704026958)`
  - `Priority: 100`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType PreCast`
  - `CopyCooldown: False`

- **[7]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 7`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: AB_Shapeshift_Spider_Unburrow_AbilityGroup PrefabGuid(1704026958)`
  - `Priority: 100`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType PreCast`
  - `CopyCooldown: False`

- [ProjectM.GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - -2132548640`

- **[1]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - -2015634130`

- **[2]**
  - `EventIdIndex: 2`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ForceCast`
  - `GameplayEventId: Local - -1285857012`

- **[3]**
  - `EventIdIndex: 3`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ForceCast`
  - `GameplayEventId: Local - -2132548640`

- [ProjectM.Network.NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 246`

- **[1]**
  - `Value: 25`

- **[2]**
  - `Value: 189`

- **[3]**
  - `Value: 156`

- **[4]**
  - `Value: 92`

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

- **56 total elements but only showing the first 36**
  - *(No fields)*

- [ProjectM.Network.SnapshotFrameChangedBuffer](/components/SnapshotFrameChangedBuffer){:target="_blank"}

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

- [ProjectM.Scripting.ScriptSpawn](/components/ScriptSpawn){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.BlobAssetOwner](/components/BlobAssetOwner){:target="_blank"}
  - *(No fields)*

- [ProjectM.Network.NetworkSnapshotType](/components/NetworkSnapshotType){:target="_blank"}
  - *(No fields)*
