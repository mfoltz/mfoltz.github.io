---
title: AB_Shapeshift_Human_PMK_Skin02_Buff
guid: -868350144
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Shapeshift_Human_PMK_Skin02_Buff

**GUID:** `-868350144`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- **ProjectM.Attach**
  - `Parent: Entity(0:0)`

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.AbilityOwner**
  - `AbilityGroup: NetworkedEntity(0:0)`
  - `Ability: NetworkedEntity(0:0)`

- **ProjectM.Buff**
  - `StartTimeUnmodified: 0`
  - `Target: Entity(0:0)`
  - `BuffType: ProjectM.BuffType Block`
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

- **ProjectM.Gameplay.Scripting.Script_Buff_Shapeshift_DataShared**
  - `ShapeshiftModificationId: Unset`
  - `RotateTowardsMovementModificationId: Unset`
  - `BloodDrainValue: 0`
  - `BloodDrainModificationId: Unset`
  - `OnStatChangedListener: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`
  - `RemoveOnDamageTaken: True`
  - `DestroyOnAbilityEnd: False`
  - `MovementSpeed: 2.8`

- **ProjectM.ModifyBloodDrainBuff**
  - `BloodValue: 1.5`
  - `BloodIdleValue: 0`
  - `ModificationId: Unset`
  - `IgnoreIdleDrainModId: Unset`
  - `ModificationIdleId: Unset`
  - `ModificationType: ProjectM.ModificationType Multiply`
  - `ModificationIdleType: ProjectM.ModificationType Set`
  - `ModificationPriority: 10`
  - `ModificationIdlePriority: 0`
  - `AffectBloodValue: True`
  - `AffectIdleBloodValue: False`
  - `IgnoreIdleDrainWhileActive: False`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Age**
  - `Value: 0`

- **ProjectM.BuffCategory**
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag Shapeshift, RemoveOnDisconnect`
  - `KeepOldest: False`

- **ProjectM.BuffModificationFlagData**
  - `ModificationTypes: 211106240606208`
  - `ModificationId: Unset`

- **ProjectM.Scripting.ScriptDestroy**
  - `Handled: False`

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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_acchhgcjcbh`

- **ProjectM.Gameplay.Scripting.Script_Buff_ModifyFaction_DataServer**
  - `Faction: Faction_Players_Shapeshift_Human PrefabGuid(-1036907707)`
  - `ModId: Unset`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: -868350144`

- **ProjectM.CreateGameplayEventsOnAbilityTrigger**
  - *(No fields)*

- **[0]**
  - `EventId: Local - -2132548640`
  - `Type: ProjectM.AbilityTriggerEventType Use`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`
  - `Condition: None`
  - `AbilityTypes: ProjectM.AbilityTypeFlag 4294967221`
  - `AbilityButton: ProjectM.AbilityButtonInputAction None`
  - `AbilityTypeEnum: ProjectM.AbilityTypeEnum None`
  - `NumOfPrefabTargets: 0`
  - `PrefabTargetStartIndex: 0`

- **ProjectM.CreateGameplayEventsOnDestroy**
  - *(No fields)*

- **[0]**
  - `EventId: Local - -136930912`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.CreateGameplayEventsOnSpawn**
  - *(No fields)*

- **[0]**
  - `EventId: Local - -919631584`
  - `Target: ProjectM.GameplayEventTarget Owner`

- **[1]**
  - `EventId: Local - -112044381`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`

- **ProjectM.DestroyOnGameplayEvent**
  - *(No fields)*

- **[0]**
  - `Who: ProjectM.DestroyOnGameplayEventWho Self`
  - `Type: ProjectM.DestroyOnGameplayEventType Remove`
  - `DestroyReason: ProjectM.DestroyReason Default`
  - `SetTranslationToEventTranslation: True`

- **ProjectM.GameplayEventIdMapping**
  - *(No fields)*

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -112044381`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[1]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -919631584`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[2]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -136930912`
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

- **[4]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -112044381`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[5]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -919631584`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **ProjectM.PlaySequenceOnGameplayEvent**
  - *(No fields)*

- **[0]**
  - `SequenceGuid: SequenceGUID -1535312990`
  - `SequencePositionTarget: ProjectM.PlaySequenceOnGameplayEventTarget Owner`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget Owner`

- **[1]**
  - `SequenceGuid: SequenceGUID 672133792`
  - `SequencePositionTarget: ProjectM.PlaySequenceOnGameplayEventTarget Owner`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget Owner`

- **ProjectM.RemoveBuffOnGameplayEvent**
  - *(No fields)*

- **[0]**
  - `BuffTarget: ProjectM.RemoveBuffTarget EventTarget`

- **[1]**
  - `BuffTarget: ProjectM.RemoveBuffTarget EventTarget`

- **ProjectM.RemoveBuffOnGameplayEventEntry**
  - *(No fields)*

- **[0]**
  - `EventIndex: 0`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(-1353936983)`
  - `BuffCategoryFlag: ProjectM.BuffCategoryFlag None`
  - `IncludeSelf: False`

- **[1]**
  - `EventIndex: 1`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(0)`
  - `BuffCategoryFlag: ProjectM.BuffCategoryFlag Shapeshift`
  - `IncludeSelf: False`

- **ProjectM.UnlockTrophyOnGameplayEvent**
  - *(No fields)*

- **[0]**
  - `Trophy: ProjectM.Trophy ACreatureOfManyForms`

- **ProjectM.ReplaceAbilityOnSlotBuff**
  - *(No fields)*

- **ProjectM.ModifyUnitStatBuff_DOTS**
  - *(No fields)*

- **ProjectM.GameplayEventListeners**
  - *(No fields)*

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RemoveBuff`
  - `GameplayEventId: Local - -112044381`

- **[1]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - -919631584`

- **[2]**
  - `EventIdIndex: 2`
  - `EventIndexOfType: 1`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - -136930912`

- **[3]**
  - `EventIdIndex: 3`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - -2132548640`

- **[4]**
  - `EventIdIndex: 4`
  - `EventIndexOfType: 1`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RemoveBuff`
  - `GameplayEventId: Local - -112044381`

- **[5]**
  - `EventIdIndex: 5`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum UnlockTrophy`
  - `GameplayEventId: Local - -919631584`

- **ProjectM.Network.NetSnapshot**
  - *(No fields)*

- **[0]**
  - `Value: 64`

- **[1]**
  - `Value: 7`

- **[2]**
  - `Value: 62`

- **[3]**
  - `Value: 204`

- **[4]**
  - `Value: 18`

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
  - `Value: 0`

- **[64]**
  - `Value: 0`

- **[65]**
  - `Value: 0`

- **[66]**
  - `Value: 0`

- **[67]**
  - `Value: 0`

- **[68]**
  - `Value: 0`

- **[69]**
  - `Value: 0`

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

- **ProjectM.Buff_Destroy_On_Owner_Death**
  - *(No fields)*

- **ProjectM.RunScriptOnPreCastEnded**
  - *(No fields)*

- **ProjectM.Scripting.ScriptSpawn**
  - *(No fields)*

- **ProjectM.Scripting.ScriptUpdate**
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

