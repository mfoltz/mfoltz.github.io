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
  - `BuffEffectType: ProjectM.BuffEffectType Buff`

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

- [Script_SpawnTravelToTargetOriginPosition_DataServer](/components/Script_SpawnTravelToTargetOriginPosition_DataServer){:target="_blank"}
  - `TargetFilterCondition: None`
  - `SelfTravelSpell: AB_Vampire_Sword_Shockwave_Recast_ReturnTravelBuff PrefabGuid(-1141440849)`
  - `ActivateScriptWhenPlayersHasBuff: AB_Vampire_Sword_Shockwave_Recast_ImmaterialBuff PrefabGuid(998177393)`
  - `TargetOriginPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `MinDuration: 0.2`
  - `MaxDuration: 0.4`
  - `MaxRange: 10`
  - `Activated: False`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 864593896`

- [AbilityTargetSource](/components/AbilityTargetSource){:target="_blank"}
  - *(No fields)*

- [Buff_Persists_Through_Death](/components/Buff_Persists_Through_Death){:target="_blank"}
  - *(No fields)*

- [ScriptSpawn](/components/ScriptSpawn){:target="_blank"}
  - *(No fields)*

- [ScriptUpdate](/components/ScriptUpdate){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [BlobAssetOwner](/components/BlobAssetOwner){:target="_blank"}
  - *(No fields)*
