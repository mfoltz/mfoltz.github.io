---
title: TM_Lucie_PotionManager
guid: 730911835
categories: ['All', 'TM']
nav_exclude: true
search_exclude: true
layout: default
---

# TM_Lucie_PotionManager

**GUID:** `730911835`

**Categories:** [All](/prefabs/All), [TM](/prefabs/TM)

## Components

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age](/components/Age)
  - `Value: 0`

- [Unity.Transforms.Rotation](/components/Rotation)
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation](/components/Translation)
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Transforms.LocalToWorld](/components/LocalToWorld)
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform](/components/LocalTransform)
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID)
  - `_Value: 730911835`

- [ProjectM.CreateGameplayEventsOnTimePassed](/components/CreateGameplayEventsOnTimePassed)

- **[0]**
  - `EventId: Local - -837446999`
  - `Target: ProjectM.GameplayEventTarget Self`
  - `Duration: 1`
  - `Time: 0`
  - `DurationFactorBasedOnLifetime: 0`

- [ProjectM.GameplayEventIdMapping](/components/GameplayEventIdMapping)

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -837446999`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [ProjectM.RunScriptOnGameplayEvent](/components/RunScriptOnGameplayEvent)

- **[0]**
  - `ScriptReference: ProjectM.ScriptMethodReference ProjectM.ScriptMethodReference`

- [ProjectM.GameplayEventListeners](/components/GameplayEventListeners)

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

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- **ProjectM.Gameplay.Scripting.Script_Lucie_DropPotionOnDestroy_DataServer**

- **ProjectM.Gameplay.Scripting.Script_Lucie_PotionDropManager_DataServer**

- [Unity.Entities.Simulate](/components/Simulate)

- [Unity.Entities.BlobAssetOwner](/components/BlobAssetOwner)
