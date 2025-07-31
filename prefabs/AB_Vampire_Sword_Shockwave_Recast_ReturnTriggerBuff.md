---
title: AB_Vampire_Sword_Shockwave_Recast_ReturnTriggerBuff
guid: 864593896
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Vampire_Sword_Shockwave_Recast_ReturnTriggerBuff

**GUID:** `864593896`

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
  - `BuffEffectType: ProjectM.BuffEffectType Buff`

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
  - `Duration: 4`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ProjectM.Gameplay.Scripting.Script_SpawnTravelToTargetOriginPosition_DataServer](/components/Script_SpawnTravelToTargetOriginPosition_DataServer)
  - `TargetFilterCondition: None`
  - `SelfTravelSpell: AB_Vampire_Sword_Shockwave_Recast_ReturnTravelBuff PrefabGuid(-1141440849)`
  - `ActivateScriptWhenPlayersHasBuff: AB_Vampire_Sword_Shockwave_Recast_ImmaterialBuff PrefabGuid(998177393)`
  - `TargetOriginPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `MinDuration: 0.2`
  - `MaxDuration: 0.4`
  - `MaxRange: 10`
  - `Activated: False`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID)
  - `_Value: 864593896`

- [ProjectM.AbilityTargetSource](/components/AbilityTargetSource)

- [ProjectM.Buff_Persists_Through_Death](/components/Buff_Persists_Through_Death)

- [ProjectM.Scripting.ScriptSpawn](/components/ScriptSpawn)

- [ProjectM.Scripting.ScriptUpdate](/components/ScriptUpdate)

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)

- [Unity.Entities.BlobAssetOwner](/components/BlobAssetOwner)
