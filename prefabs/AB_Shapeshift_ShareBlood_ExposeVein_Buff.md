---
title: AB_Shapeshift_ShareBlood_ExposeVein_Buff
guid: -979543195
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Shapeshift_ShareBlood_ExposeVein_Buff

**GUID:** `-979543195`

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

- **ProjectM.Gameplay.Scripting.Script_Buff_Shapeshift_DataShared**
  - `ShapeshiftModificationId: Unset`
  - `RotateTowardsMovementModificationId: Unset`
  - `BloodDrainValue: 0`
  - `BloodDrainModificationId: Unset`
  - `OnStatChangedListener: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`
  - `RemoveOnDamageTaken: False`
  - `DestroyOnAbilityEnd: False`
  - `MovementSpeed: 10`

- **ProjectM.DestroyBuffOnMove**
  - `minAge: 0`

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

- **ProjectM.LifeTime**
  - `Duration: 12`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.BuffModificationFlagData**
  - `ModificationTypes: 1073741840`
  - `ModificationId: Unset`

- **ProjectM.Scripting.ScriptDestroy**
  - `Handled: False`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_ckkddehif`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: -979543195`

- **ProjectM.CreateGameplayEventsOnAbilityTrigger**

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

- **[1]**
  - `EventId: Local - 1192782072`
  - `Type: ProjectM.AbilityTriggerEventType Use`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`
  - `Condition: None`
  - `AbilityTypes: ProjectM.AbilityTypeFlag All`
  - `AbilityButton: ProjectM.AbilityButtonInputAction None`
  - `AbilityTypeEnum: ProjectM.AbilityTypeEnum None`
  - `NumOfPrefabTargets: 0`
  - `PrefabTargetStartIndex: 0`

- **ProjectM.CreateGameplayEventsOnDestroy**

- **[0]**
  - `EventId: Local - -136930912`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.CreateGameplayEventsOnSpawn**

- **[0]**
  - `EventId: Local - -919631584`
  - `Target: ProjectM.GameplayEventTarget Owner`

- **[1]**
  - `EventId: Local - -112044381`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`

- **ProjectM.DestroyOnGameplayEvent**

- **[0]**
  - `Who: ProjectM.DestroyOnGameplayEventWho Self`
  - `Type: ProjectM.DestroyOnGameplayEventType Remove`
  - `DestroyReason: ProjectM.DestroyReason Default`
  - `SetTranslationToEventTranslation: True`

- **[1]**
  - `Who: ProjectM.DestroyOnGameplayEventWho Self`
  - `Type: ProjectM.DestroyOnGameplayEventType Remove`
  - `DestroyReason: ProjectM.DestroyReason Default`
  - `SetTranslationToEventTranslation: True`

- **ProjectM.GameplayEventIdMapping**

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
  - `GameplayEventId: Local - -2132548640`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[2]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -112044381`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[3]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 1192782072`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **ProjectM.RemoveBuffOnGameplayEvent**

- **[0]**
  - `BuffTarget: ProjectM.RemoveBuffTarget EventTarget`

- **[1]**
  - `BuffTarget: ProjectM.RemoveBuffTarget EventTarget`

- **ProjectM.RemoveBuffOnGameplayEventEntry**

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

- **ProjectM.ModifyUnitStatBuff_DOTS**

- **ProjectM.GameplayEventListeners**

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
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - -2132548640`

- **[2]**
  - `EventIdIndex: 2`
  - `EventIndexOfType: 1`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RemoveBuff`
  - `GameplayEventId: Local - -112044381`

- **[3]**
  - `EventIdIndex: 3`
  - `EventIndexOfType: 1`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - 1192782072`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.BloodShareBuff**

- **ProjectM.BloodShareBuff_ResetVBlood**

- **ProjectM.Buff_Destroy_On_Owner_Death**

- **ProjectM.DestroyOnManualInterrupt**

- **ProjectM.RunScriptOnPreCastEnded**

- **ProjectM.Scripting.ScriptSpawn**

- **ProjectM.Scripting.ScriptUpdate**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.Network.NetworkSnapshotType**
