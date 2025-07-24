---
title: AB_Dreadhorn_Trample_AggroBuff
guid: -1435714402
categories: ['AB', 'All']
nav_exclude: true
search_exclude: false
layout: default
---

# AB_Dreadhorn_Trample_AggroBuff

**GUID:** `-1435714402`

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
  - `Duration: 3`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ScriptDestroy](/components/ScriptDestroy){:target="_blank"}
  - `Handled: False`

- [Script_Buff_GenerateAggro_DataServer](/components/Script_Buff_GenerateAggro_DataServer){:target="_blank"}
  - `Value: 500`
  - `From: ProjectM.Gameplay.Scripting.Script_Buff_GenerateAggro_Target Owner`
  - `Towards: ProjectM.Gameplay.Scripting.Script_Buff_GenerateAggro_Target BuffTarget`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -1435714402`

- [CreateGameplayEventsOnSpawn](/components/CreateGameplayEventsOnSpawn){:target="_blank"}

- **[0]**
  - `EventId: Local - -112044381`
  - `Target: ProjectM.GameplayEventTarget Owner`

- [ForceCastOnGameplayEvent](/components/ForceCastOnGameplayEvent){:target="_blank"}

- **[0]**
  - `ForceCastAbility: AB_Dreadhorn_Trample_AbilityGroup PrefabGuid(-2081714952)`
  - `Target: ProjectM.ForceCastTarget Target`

- [GameplayEventIdMapping](/components/GameplayEventIdMapping){:target="_blank"}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -112044381`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ForceCast`
  - `GameplayEventId: Local - -112044381`

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
