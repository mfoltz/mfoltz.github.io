---
title: AB_Bandit_Fisherman_SerpentFeed_Hard_DespawnDelayBuff
guid: 1995307154
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Bandit_Fisherman_SerpentFeed_Hard_DespawnDelayBuff

**GUID:** `1995307154`

**Categories:** [AB]{{< relref "prefabs/AB.md" >}}, [All]{{< relref "prefabs/All.md" >}}

## Components

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

- [ProjectM.LifeTime]{{< relref "components/LifeTime.md" >}}
  - `Duration: 0.5`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.SpawnRandomLifeTime]{{< relref "components/SpawnRandomLifeTime.md" >}}
  - `MinDuration: 0.5`
  - `MaxDuration: 2.5`

- [Stunlock.Core.PrefabGUID]{{< relref "components/PrefabGUID.md" >}}
  - `_Value: 1995307154`

- [ProjectM.CreateGameplayEventsOnDestroy]{{< relref "components/CreateGameplayEventsOnDestroy.md" >}}

- **[0]**
  - `EventId: Local - -136930912`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.ApplyBuffOnGameplayEvent]{{< relref "components/ApplyBuffOnGameplayEvent.md" >}}

- **[0]**
  - `BuffTarget: ProjectM.ApplyBuffTarget EventTarget`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[System.Single]`
  - `Stacks: 1`
  - `Buff0: AB_Bandit_Fisherman_SerpentFeed_Hard_DespawnBuff PrefabGuid(1573364739)`
  - `Buff1: GUID Not Found`
  - `Buff2: GUID Not Found`
  - `Buff3: GUID Not Found`
  - `EventOnConsume: Local - 0`
  - `ConsumeIfAlreadyExists: False`
  - `ConsumeConditional: None`
  - `CustomAbilitySpellModsSource: GUID Not Found`

- [ProjectM.GameplayEventIdMapping]{{< relref "components/GameplayEventIdMapping.md" >}}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -136930912`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [ProjectM.GameplayEventListeners]{{< relref "components/GameplayEventListeners.md" >}}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - -136930912`

- [Unity.Entities.SpawnTag]{{< relref "components/SpawnTag.md" >}}

- [Unity.Entities.Prefab]{{< relref "components/Prefab.md" >}}

- [Unity.Entities.Simulate]{{< relref "components/Simulate.md" >}}

- [Unity.Entities.BlobAssetOwner]{{< relref "components/BlobAssetOwner.md" >}}
