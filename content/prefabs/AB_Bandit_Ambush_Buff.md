---
title: AB_Bandit_Ambush_Buff
guid: 614276301
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Bandit_Ambush_Buff

**GUID:** `614276301`

**Categories:** [AB]{{< relref "prefabs/AB.md" >}}, [All]{{< relref "prefabs/All.md" >}}

## Components

- [ProjectM.HideWeapon]{{< relref "components/HideWeapon.md" >}}
  - `HideWeaponSequenceGUID: SequenceGUID 1136240177`
  - `HideWeaponState: SequenceState`
  - `Id: Entity(0:0)`

- [ProjectM.Attach]{{< relref "components/Attach.md" >}}
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner]{{< relref "components/EntityOwner.md" >}}
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator]{{< relref "components/EntityCreator.md" >}}
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Buff]{{< relref "components/Buff.md" >}}
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

- [ProjectM.DisableAggroBuff]{{< relref "components/DisableAggroBuff.md" >}}
  - `Mode: ProjectM.DisableAggroBuffMode OthersDontAttackTarget`

- [ProjectM.ModifyAggroRangesBuff]{{< relref "components/ModifyAggroRangesBuff.md" >}}
  - `AggroCircleRadiusFactor: 0.2`
  - `AggroConeRadiusFactor: 0.2`
  - `AlertCircleRadiusFactor: 0`
  - `AlertConeRadiusFactor: 0`

- [ProjectM.DestroyData]{{< relref "components/DestroyData.md" >}}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]{{< relref "components/DestroyState.md" >}}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age]{{< relref "components/Age.md" >}}
  - `Value: 0`

- [ProjectM.BuffCategory]{{< relref "components/BuffCategory.md" >}}
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- [ProjectM.HideTargetHUD]{{< relref "components/HideTargetHUD.md" >}}
  - `Type: ProjectM.HideTargetHUDType -1`

- [ProjectM.BuffModificationFlagData]{{< relref "components/BuffModificationFlagData.md" >}}
  - `ModificationTypes: 17179869184`
  - `ModificationId: Unset`

- [ProjectM.Network.Networked]{{< relref "components/Networked.md" >}}
  - `CreateFrame: 0`

- [ProjectM.Network.UpToDateUserBitMask]{{< relref "components/UpToDateUserBitMask.md" >}}
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- [ProjectM.Network.FrameChanged]{{< relref "components/FrameChanged.md" >}}
  - `Value: -1`

- [ProjectM.Network.NetworkSnapshot]{{< relref "components/NetworkSnapshot.md" >}}
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_fkbkbchgb`

- [ProjectM.Network.NetworkId]{{< relref "components/NetworkId.md" >}}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID]{{< relref "components/PrefabGUID.md" >}}
  - `_Value: 614276301`

- [ProjectM.CreateGameplayEventsOnAbilityImpaired]{{< relref "components/CreateGameplayEventsOnAbilityImpaired.md" >}}

- **[0]**
  - `PreviousIsImpaired: False`
  - `EventId: Local - 1390851097`
  - `Source: ProjectM.GameplayEventTarget BuffTarget`
  - `Target: ProjectM.GameplayEventTarget Owner`

- [ProjectM.CreateGameplayEventOnBehaviourStateChanged]{{< relref "components/CreateGameplayEventOnBehaviourStateChanged.md" >}}

- **[0]**
  - `EventId: Local - -838666012`
  - `Condition: None`
  - `Source: ProjectM.GameplayEventTarget Owner`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `EnteredState: ProjectM.GenericEnemyState Combat`
  - `ExitedState: ProjectM.GenericEnemyState Initialize`

- [ProjectM.CreateGameplayEventsOnDestroy]{{< relref "components/CreateGameplayEventsOnDestroy.md" >}}

- **[0]**
  - `EventId: Local - -136930912`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.ApplyBuffOnGameplayEvent]{{< relref "components/ApplyBuffOnGameplayEvent.md" >}}

- **[0]**
  - `BuffTarget: ProjectM.ApplyBuffTarget EventTarget`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[System.Single]`
  - `Stacks: 1`
  - `Buff0: AB_Bandit_Ambush_RevealBuff PrefabGuid(-1076678456)`
  - `Buff1: GUID Not Found`
  - `Buff2: GUID Not Found`
  - `Buff3: GUID Not Found`
  - `EventOnConsume: Local - 0`
  - `ConsumeIfAlreadyExists: False`
  - `ConsumeConditional: None`
  - `CustomAbilitySpellModsSource: GUID Not Found`

- [ProjectM.DestroyOnGameplayEvent]{{< relref "components/DestroyOnGameplayEvent.md" >}}

- **[0]**
  - `Who: ProjectM.DestroyOnGameplayEventWho Self`
  - `Type: ProjectM.DestroyOnGameplayEventType Remove`
  - `DestroyReason: ProjectM.DestroyReason Default`
  - `SetTranslationToEventTranslation: False`

- [ProjectM.GameplayEventIdMapping]{{< relref "components/GameplayEventIdMapping.md" >}}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 1390851097`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[1]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -838666012`
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
  - `GameplayEventId: Local - -136930912`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [ProjectM.PlaySequenceOnGameplayEvent]{{< relref "components/PlaySequenceOnGameplayEvent.md" >}}

- **[0]**
  - `SequenceGuid: SequenceGUID 1957357347`
  - `SequencePositionTarget: ProjectM.PlaySequenceOnGameplayEventTarget EventTarget`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget EventTarget`

- [ProjectM.GameplayEventListeners]{{< relref "components/GameplayEventListeners.md" >}}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - 1390851097`

- **[1]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - -838666012`

- **[2]**
  - `EventIdIndex: 2`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - -136930912`

- **[3]**
  - `EventIdIndex: 3`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - -136930912`

- [ProjectM.Network.NetSnapshot]{{< relref "components/NetSnapshot.md" >}}

- **[0]**
  - `Value: 205`

- **[1]**
  - `Value: 28`

- **[2]**
  - `Value: 157`

- **[3]**
  - `Value: 36`

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

- **[7]**
  - `Value: -1`

- [Unity.Entities.SpawnTag]{{< relref "components/SpawnTag.md" >}}

- [Unity.Entities.Prefab]{{< relref "components/Prefab.md" >}}

- [Unity.Entities.Simulate]{{< relref "components/Simulate.md" >}}

- [Unity.Entities.BlobAssetOwner]{{< relref "components/BlobAssetOwner.md" >}}

- [ProjectM.Network.NetworkSnapshotType]{{< relref "components/NetworkSnapshotType.md" >}}
