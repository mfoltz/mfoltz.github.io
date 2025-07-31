---
title: AB_Cursed_MountainBeast_MeleeStraight_TargetedBuff
guid: -1704661869
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Cursed_MountainBeast_MeleeStraight_TargetedBuff

**GUID:** `-1704661869`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- [ProjectM.Attach](/components/Attach)
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner](/components/EntityOwner)
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator](/components/EntityCreator)
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Buff](/components/Buff)
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

- [ProjectM.DisableAggroBuff](/components/DisableAggroBuff)
  - `Mode: ProjectM.DisableAggroBuffMode OthersDontAttackTarget`

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age](/components/Age)
  - `Value: 0`

- [ProjectM.BuffCategory](/components/BuffCategory)
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- [ProjectM.LifeTime](/components/LifeTime)
  - `Duration: 2`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.Gameplay.Scripting.Script_ApplyBuffOnAggroListTarget_DataServer](/components/Script_ApplyBuffOnAggroListTarget_DataServer)
  - `MaxDistance: 25`
  - `NewBuffEntity: AB_Cursed_MountainBeast_Enrage_AggroBuff PrefabGuid(1162403144)`
  - `LowPrioBuff: AB_Cursed_MountainBeast_MeleeStraight_TargetedBuff PrefabGuid(-1704661869)`
  - `OnFailGameplayEventId: Local - -223062568`
  - `RandomTarget: True`
  - `ExcludeBuffTarget: True`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID)
  - `_Value: -1704661869`

- [ProjectM.CreateGameplayEventsOnSpawn](/components/CreateGameplayEventsOnSpawn)

- **[0]**
  - `EventId: Local - -112044381`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`

- [ProjectM.GameplayEventIdMapping](/components/GameplayEventIdMapping)

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -223062568`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[1]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -112044381`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [ProjectM.RemoveBuffOnGameplayEvent](/components/RemoveBuffOnGameplayEvent)

- **[0]**
  - `BuffTarget: ProjectM.RemoveBuffTarget Owner`

- **[1]**
  - `BuffTarget: ProjectM.RemoveBuffTarget EventTarget`

- [ProjectM.RemoveBuffOnGameplayEventEntry](/components/RemoveBuffOnGameplayEventEntry)

- **[0]**
  - `EventIndex: 0`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(1091231925)`
  - `BuffCategoryFlag: ProjectM.BuffCategoryFlag None`
  - `IncludeSelf: False`

- **[1]**
  - `EventIndex: 1`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(1162403144)`
  - `BuffCategoryFlag: ProjectM.BuffCategoryFlag None`
  - `IncludeSelf: False`

- [ProjectM.GameplayEventListeners](/components/GameplayEventListeners)

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RemoveBuff`
  - `GameplayEventId: Local - -223062568`

- **[1]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 1`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RemoveBuff`
  - `GameplayEventId: Local - -112044381`

- [ProjectM.Scripting.ScriptSpawn](/components/ScriptSpawn)

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)

- [Unity.Entities.BlobAssetOwner](/components/BlobAssetOwner)
