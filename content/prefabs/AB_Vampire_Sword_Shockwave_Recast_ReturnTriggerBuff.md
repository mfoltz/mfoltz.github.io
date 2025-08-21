---
title: AB_Vampire_Sword_Shockwave_Recast_ReturnTriggerBuff
guid: 864593896
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `864593896`

**Categories:** [AB]({{% relref "prefabs/AB.md" %}}), [All]({{% relref "prefabs/All.md" %}})

## Components

- [ProjectM.Attach]({{% relref "components/Attach.md" %}})
  - `Parent: Entity(0:0)`

- [ProjectM.EntityOwner]({{% relref "components/EntityOwner.md" %}})
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator]({{% relref "components/EntityCreator.md" %}})
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.Buff]({{% relref "components/Buff.md" %}})
  - `StartTimeUnmodified: 0`
  - `Target: Entity(0:0)`
  - `BuffType: ProjectM.BuffType Parallel`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: False`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Buff`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age]({{% relref "components/Age.md" %}})
  - `Value: 0`

- [ProjectM.BuffCategory]({{% relref "components/BuffCategory.md" %}})
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- [ProjectM.LifeTime]({{% relref "components/LifeTime.md" %}})
  - `Duration: 4`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.Gameplay.Scripting.Script_SpawnTravelToTargetOriginPosition_DataServer]({{% relref "components/Script_SpawnTravelToTargetOriginPosition_DataServer.md" %}})
  - `TargetFilterCondition: None`
  - `SelfTravelSpell: AB_Vampire_Sword_Shockwave_Recast_ReturnTravelBuff PrefabGuid(-1141440849)`
  - `ActivateScriptWhenPlayersHasBuff: AB_Vampire_Sword_Shockwave_Recast_ImmaterialBuff PrefabGuid(998177393)`
  - `TargetOriginPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `MinDuration: 0.2`
  - `MaxDuration: 0.4`
  - `MaxRange: 10`
  - `Activated: False`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 864593896`

- [ProjectM.AbilityTargetSource]({{% relref "components/AbilityTargetSource.md" %}})

- [ProjectM.Buff_Persists_Through_Death]({{% relref "components/Buff_Persists_Through_Death.md" %}})

- [ProjectM.Scripting.ScriptSpawn]({{% relref "components/ScriptSpawn.md" %}})

- [ProjectM.Scripting.ScriptUpdate]({{% relref "components/ScriptUpdate.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})

- [Unity.Entities.BlobAssetOwner]({{% relref "components/BlobAssetOwner.md" %}})
