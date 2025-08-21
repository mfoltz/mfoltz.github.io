---
title: TM_Lucie_PotionManager
guid: 730911835
categories: ['All', 'TM']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `730911835`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [TM]({{% relref "prefabs/TM.md" %}})

## Components

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Age]({{% relref "components/Age.md" %}})
  - `Value: 0`

- [Unity.Transforms.Rotation]({{% relref "components/Rotation.md" %}})
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation]({{% relref "components/Translation.md" %}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Transforms.LocalToWorld]({{% relref "components/LocalToWorld.md" %}})
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform]({{% relref "components/LocalTransform.md" %}})
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 730911835`

- [ProjectM.CreateGameplayEventsOnTimePassed]({{% relref "components/CreateGameplayEventsOnTimePassed.md" %}})

- **[0]**
  - `EventId: Local - -837446999`
  - `Target: ProjectM.GameplayEventTarget Self`
  - `Duration: 1`
  - `Time: 0`
  - `DurationFactorBasedOnLifetime: 0`

- [ProjectM.GameplayEventIdMapping]({{% relref "components/GameplayEventIdMapping.md" %}})

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -837446999`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [ProjectM.RunScriptOnGameplayEvent]({{% relref "components/RunScriptOnGameplayEvent.md" %}})

- **[0]**
  - `ScriptReference: ProjectM.ScriptMethodReference ProjectM.ScriptMethodReference`

- [ProjectM.GameplayEventListeners]({{% relref "components/GameplayEventListeners.md" %}})

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

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- **ProjectM.Gameplay.Scripting.Script_Lucie_DropPotionOnDestroy_DataServer**

- **ProjectM.Gameplay.Scripting.Script_Lucie_PotionDropManager_DataServer**

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})

- [Unity.Entities.BlobAssetOwner]({{% relref "components/BlobAssetOwner.md" %}})
