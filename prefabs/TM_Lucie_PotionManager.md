---
title: TM_Lucie_PotionManager
guid: 730911835
categories:
- All
- TM
nav_exclude: true
search_exclude: true
layout: default
components:
- DestroyData
- DestroyState
- Age
- Rotation
- Translation
- LocalToWorld
- LocalTransform
- PrefabGUID
- CreateGameplayEventsOnTimePassed
- GameplayEventIdMapping
- RunScriptOnGameplayEvent
- GameplayEventListeners
- SpawnTag
- Prefab
- Simulate
- BlobAssetOwner
---

# TM_Lucie_PotionManager

**GUID:** `730911835`

**Categories:** [All](/prefabs/All), [TM](/prefabs/TM)

## Components

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Age](/components/Age){:target="_blank"}
  - `Value: 0`

- [Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 730911835`

- [CreateGameplayEventsOnTimePassed](/components/CreateGameplayEventsOnTimePassed){:target="_blank"}

- **[0]**
  - `EventId: Local - -837446999`
  - `Target: ProjectM.GameplayEventTarget Self`
  - `Duration: 1`
  - `Time: 0`
  - `DurationFactorBasedOnLifetime: 0`

- [GameplayEventIdMapping](/components/GameplayEventIdMapping){:target="_blank"}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -837446999`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [RunScriptOnGameplayEvent](/components/RunScriptOnGameplayEvent){:target="_blank"}

- **[0]**
  - `ScriptReference: ProjectM.ScriptMethodReference ProjectM.ScriptMethodReference`

- [GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RunScript`
  - `GameplayEventId: Local - -837446999`

- **ProjectM.Gameplay.Scripting.Script_Lucie_Potion_DataServer**

- **[0]**
  - `PotionPrefab: AB_Lucie_Player_ClarityPotion_Resource_Throw PrefabGuid(778857257)`

- **[1]**
  - `PotionPrefab: AB_Lucie_Player_LiquidFirePotion_Resource_Throw PrefabGuid(1845884699)`

- **[2]**
  - `PotionPrefab: AB_Lucie_Player_PolymorphPotion_Resource_Throw PrefabGuid(1881468430)`

- **[3]**
  - `PotionPrefab: AB_Lucie_Player_LiquidLuckPotion_Resource_Throw PrefabGuid(-1711132237)`

- **[4]**
  - `PotionPrefab: AB_Lucie_Player_WondrousHealingPotion_Resource_Throw PrefabGuid(-1960893454)`

- **ProjectM.Gameplay.Scripting.Script_Lucie_Drop_DataServer**
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- **ProjectM.Gameplay.Scripting.Script_Lucie_DropPotionOnDestroy_DataServer**
  - *(No fields)*

- **ProjectM.Gameplay.Scripting.Script_Lucie_PotionDropManager_DataServer**
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [BlobAssetOwner](/components/BlobAssetOwner){:target="_blank"}
  - *(No fields)*
