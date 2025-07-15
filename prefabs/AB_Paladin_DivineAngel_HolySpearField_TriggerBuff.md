---
title: AB_Paladin_DivineAngel_HolySpearField_TriggerBuff
guid: 1392777264
categories: ['AB', 'All']
nav_exclude: true
search_exclude: true
layout: default
---

# AB_Paladin_DivineAngel_HolySpearField_TriggerBuff

**GUID:** `1392777264`

**Categories:** [AB](/prefabs/AB/), [All](/prefabs/All/)

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
  - `BuffEffectType: ProjectM.BuffEffectType Debuff`

- **ProjectM.GetTranslationOnSpawn**
  - `TranslationSource: ProjectM.GetTranslationSource BuffTarget`
  - `SnapToGround: False`

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
  - `Duration: 1`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.ManualFirstFrameLastTranslation**
  - `Value: Il2CppSystem.Nullable_Unboxed`1[Unity.Mathematics.float3]`

- **Unity.Transforms.Rotation**
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Unity.Transforms.Translation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **Unity.Transforms.LocalToWorld**
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- **Unity.Transforms.LocalTransform**
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 1392777264`

- **ProjectM.CreateGameplayEventsOnSpawn**
  - *(No fields)*

- **[0]**
  - `EventId: Local - -112044381`
  - `Target: ProjectM.GameplayEventTarget Owner`

- **ProjectM.GameplayEventIdMapping**
  - *(No fields)*

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

- **ProjectM.SpawnPrefabOnGameplayEvent**
  - *(No fields)*

- **[0]**
  - `SpawnPrefab: AB_Paladin_DivineAngel_HolySpearField_SpawnerProjectile01 PrefabGuid(-161417409)`
  - `CustomAbilitySpellModsSource: GUID Not Found`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `Owner: ProjectM.SpawnPrefabOnGameplayEventOwner Inherit`
  - `Creator: ProjectM.SpawnPrefabOnGameplayEventCreator Inherit`

- **[1]**
  - `SpawnPrefab: AB_Paladin_DivineAngel_HolySpearField_SpawnerProjectile02 PrefabGuid(1939459631)`
  - `CustomAbilitySpellModsSource: GUID Not Found`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `Owner: ProjectM.SpawnPrefabOnGameplayEventOwner Inherit`
  - `Creator: ProjectM.SpawnPrefabOnGameplayEventCreator Inherit`

- **ProjectM.GameplayEventListeners**
  - *(No fields)*

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum SpawnPrefab`
  - `GameplayEventId: Local - -112044381`

- **[1]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 1`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum SpawnPrefab`
  - `GameplayEventId: Local - -112044381`

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*

- **Unity.Entities.BlobAssetOwner**
  - *(No fields)*

