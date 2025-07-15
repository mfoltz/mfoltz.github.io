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

- **ProjectM.Attach**
  - `Parent: Entity(0:0)`

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.Buff**
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

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Age**
  - `Value: 0`

- **ProjectM.BuffCategory**
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag None`
  - `KeepOldest: False`

- **ProjectM.LifeTime**
  - `Duration: 4`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.Gameplay.Scripting.Script_SpawnTravelToTargetOriginPosition_DataServer**
  - `TargetFilterCondition: None`
  - `SelfTravelSpell: AB_Vampire_Sword_Shockwave_Recast_ReturnTravelBuff PrefabGuid(-1141440849)`
  - `ActivateScriptWhenPlayersHasBuff: AB_Vampire_Sword_Shockwave_Recast_ImmaterialBuff PrefabGuid(998177393)`
  - `TargetOriginPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `MinDuration: 0.2`
  - `MaxDuration: 0.4`
  - `MaxRange: 10`
  - `Activated: False`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 864593896`

- **ProjectM.AbilityTargetSource**
  - *(No fields)*

- **ProjectM.Buff_Persists_Through_Death**
  - *(No fields)*

- **ProjectM.Scripting.ScriptSpawn**
  - *(No fields)*

- **ProjectM.Scripting.ScriptUpdate**
  - *(No fields)*

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*

- **Unity.Entities.BlobAssetOwner**
  - *(No fields)*

