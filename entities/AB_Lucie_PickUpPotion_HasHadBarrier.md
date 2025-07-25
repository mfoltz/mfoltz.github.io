---
title: AB_Lucie_PickUpPotion_HasHadBarrier
guid: 914424936
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Lucie_PickUpPotion_HasHadBarrier

**GUID:** `914424936`

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
  - `Duration: 10`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.Gameplay.Scripting.Script_Lucie_ModifyPotionDropTable_DataServer**
  - `SpecificPotionPrefab: AB_Lucie_Player_LiquidFirePotion_Resource_Throw PrefabGuid(1845884699)`
  - `SpecificPotionCount: 1`
  - `RandomPotionCount: 0`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 914424936`

- [ScriptSpawn](/components/ScriptSpawn){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*
