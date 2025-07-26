---
title: AB_Legion_Assassin_JumpBackWard_Buff
guid: -332623450
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Legion_Assassin_JumpBackWard_Buff

**GUID:** `-332623450`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- [Attach](/components/Attach){:target="_blank"}
  - `Parent: Entity(0:0)`

- [EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [Buff](/components/Buff){:target="_blank"}
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

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Age](/components/Age){:target="_blank"}
  - `Value: 0`

- [BuffCategory](/components/BuffCategory){:target="_blank"}
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- [LifeTime](/components/LifeTime){:target="_blank"}
  - `Duration: 4`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [SpawnRandomLifeTime](/components/SpawnRandomLifeTime){:target="_blank"}
  - `MinDuration: 4`
  - `MaxDuration: 6`

- [ScriptDestroy](/components/ScriptDestroy){:target="_blank"}
  - `Handled: False`

- [Script_Modify_Combat_Movement_Buff_Data](/components/Script_Modify_Combat_Movement_Buff_Data){:target="_blank"}
  - `MinDistance: 0`
  - `GoalDistance: 8`
  - `GoalDistanceOuter: 0`
  - `MaxDistance: 10`
  - `MovePattern: ProjectM.AiMovePattern Circle`
  - `ForceLookAtTarget: ProjectM.AiForceLookAtTarget Circle`
  - `CircleCurveInRange: ProjectM.CurveReference ProjectM.CurveReference`
  - `CircleCurveOutOfRange: ProjectM.CurveReference ProjectM.CurveReference`

- [Script_Modify_Combat_Movement_Buff_State](/components/Script_Modify_Combat_Movement_Buff_State){:target="_blank"}
  - `MinDistanceModId: Unset`
  - `GoalDistanceModId: Unset`
  - `GoalDistanceOuterModId: Unset`
  - `MaxDistanceModId: Unset`
  - `MovePatternModId: Unset`
  - `ForceLookAtTargetModId: Unset`
  - `OldCircleCurveInRange: ProjectM.CurveReference ProjectM.CurveReference`
  - `OldCircleCurveOutOfRange: ProjectM.CurveReference ProjectM.CurveReference`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -332623450`

- [CreateGameplayEventOnDamageTaken](/components/CreateGameplayEventOnDamageTaken){:target="_blank"}

- **[0]**
  - `EventId: Local - -2024040277`
  - `Condition: None`
  - `Source: ProjectM.DamageTakenTarget BuffTarget`
  - `IncludeDoTs: False`
  - `IgnoreWhenInContest: False`

- [DestroyOnGameplayEvent](/components/DestroyOnGameplayEvent){:target="_blank"}

- **[0]**
  - `Who: ProjectM.DestroyOnGameplayEventWho Self`
  - `Type: ProjectM.DestroyOnGameplayEventType Remove`
  - `DestroyReason: ProjectM.DestroyReason Default`
  - `SetTranslationToEventTranslation: True`

- [GameplayEventIdMapping](/components/GameplayEventIdMapping){:target="_blank"}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -2024040277`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - -2024040277`

- [ScriptSpawn](/components/ScriptSpawn){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [BlobAssetOwner](/components/BlobAssetOwner){:target="_blank"}
  - *(No fields)*
