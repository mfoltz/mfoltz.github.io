---
title: Buff_Vampire_Dracula_Return
guid: -1377587236
categories: ['All', 'Buff']
nav_exclude: true
search_exclude: true
layout: default
---

# Buff_Vampire_Dracula_Return

**GUID:** `-1377587236`

**Categories:** [All](/prefabs/All), [Buff](/prefabs/Buff)

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

- [ChangeKnockbackResistanceBuff](/components/ChangeKnockbackResistanceBuff){:target="_blank"}
  - `KnockbackResistanceIndex: 13`

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
  - `Duration: 999`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [BuffModificationFlagData](/components/BuffModificationFlagData){:target="_blank"}
  - `ModificationTypes: 2564`
  - `ModificationId: Unset`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -1377587236`

- [CreateGameplayEventsOnSpawn](/components/CreateGameplayEventsOnSpawn){:target="_blank"}

- **[0]**
  - `EventId: Local - -112044381`
  - `Target: ProjectM.GameplayEventTarget Owner`

- [ApplyBuffOnGameplayEvent](/components/ApplyBuffOnGameplayEvent){:target="_blank"}

- **[0]**
  - `BuffTarget: ProjectM.ApplyBuffTarget EventTarget`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[Single]`
  - `Stacks: 1`
  - `Buff0: Buff_Vampire_Dracula_ReturnHide PrefabGuid(404387047)`
  - `Buff1: GUID Not Found`
  - `Buff2: GUID Not Found`
  - `Buff3: GUID Not Found`
  - `EventOnConsume: Local - 0`
  - `ConsumeIfAlreadyExists: False`
  - `ConsumeConditional: None`
  - `CustomAbilitySpellModsSource: GUID Not Found`

- [HealOnGameplayEvent](/components/HealOnGameplayEvent){:target="_blank"}

- **[0]**
  - `Health: 0`
  - `HealthPercent: 0.1`
  - `HealthPerSpellPower: 0`
  - `showSCT: False`
  - `TrueHealing: False`
  - `Who: ProjectM.HealOnGameplayEventWho BuffTarget`
  - `MultiplyMainFactorWithStacks: False`

- [GameplayEventIdMapping](/components/GameplayEventIdMapping){:target="_blank"}

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
  - `GameplayEventId: Local - -112044381`
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

- [RemoveBuffOnGameplayEvent](/components/RemoveBuffOnGameplayEvent){:target="_blank"}

- **[0]**
  - `BuffTarget: ProjectM.RemoveBuffTarget EventTarget`

- [RemoveBuffOnGameplayEventEntry](/components/RemoveBuffOnGameplayEventEntry){:target="_blank"}

- **[0]**
  - `EventIndex: 0`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(1269681960)`
  - `BuffCategoryFlag: ProjectM.BuffCategoryFlag None`
  - `IncludeSelf: False`

- **[1]**
  - `EventIndex: 0`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(-1334644133)`
  - `BuffCategoryFlag: ProjectM.BuffCategoryFlag None`
  - `IncludeSelf: False`

- **[2]**
  - `EventIndex: 0`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(344852790)`
  - `BuffCategoryFlag: ProjectM.BuffCategoryFlag None`
  - `IncludeSelf: False`

- **[3]**
  - `EventIndex: 0`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(2013697540)`
  - `BuffCategoryFlag: ProjectM.BuffCategoryFlag None`
  - `IncludeSelf: False`

- **[4]**
  - `EventIndex: 0`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(-683309186)`
  - `BuffCategoryFlag: ProjectM.BuffCategoryFlag None`
  - `IncludeSelf: False`

- **[5]**
  - `EventIndex: 0`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(1512871984)`
  - `BuffCategoryFlag: ProjectM.BuffCategoryFlag None`
  - `IncludeSelf: False`

- **[6]**
  - `EventIndex: 0`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(-1961466676)`
  - `BuffCategoryFlag: ProjectM.BuffCategoryFlag None`
  - `IncludeSelf: False`

- **[7]**
  - `EventIndex: 0`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(-1722767889)`
  - `BuffCategoryFlag: ProjectM.BuffCategoryFlag None`
  - `IncludeSelf: False`

- **[8]**
  - `EventIndex: 0`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(-1285880026)`
  - `BuffCategoryFlag: ProjectM.BuffCategoryFlag None`
  - `IncludeSelf: False`

- **[9]**
  - `EventIndex: 0`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(136816739)`
  - `BuffCategoryFlag: ProjectM.BuffCategoryFlag None`
  - `IncludeSelf: False`

- **[10]**
  - `EventIndex: 0`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(-1762276771)`
  - `BuffCategoryFlag: ProjectM.BuffCategoryFlag None`
  - `IncludeSelf: False`

- **[11]**
  - `EventIndex: 0`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(627336618)`
  - `BuffCategoryFlag: ProjectM.BuffCategoryFlag None`
  - `IncludeSelf: False`

- [GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Heal`
  - `GameplayEventId: Local - -112044381`

- **[1]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - -112044381`

- **[2]**
  - `EventIdIndex: 2`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RemoveBuff`
  - `GameplayEventId: Local - -112044381`

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [BlobAssetOwner](/components/BlobAssetOwner){:target="_blank"}
  - *(No fields)*
