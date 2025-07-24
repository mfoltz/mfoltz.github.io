---
title: GateBossComponentsTemplate_Minor
guid: -222706317
categories: ['All', 'Remainders']
nav_exclude: true
search_exclude: false
layout: default
---

# GateBossComponentsTemplate_Minor

**GUID:** `-222706317`

**Categories:** [All](/prefabs/All), [Remainders](/prefabs/Remainders)

## Components

- [Interactable](/components/Interactable){:target="_blank"}
  - `CurrentTargetSequenceGuid: SequenceGUID 0`
  - `IgnoreLineOfSight: False`
  - `IgnoreBlockInteract: False`
  - `UseInteractAbilityName: True`
  - `Disabled: False`

- [InteractedUpon](/components/InteractedUpon){:target="_blank"}
  - `Interacting: False`
  - `BlockBuildingMovement: False`
  - `BlockBuildingDisassemble: False`

- [FactionReference](/components/FactionReference){:target="_blank"}
  - `FactionGuid: ModifiablePrefabGUID PrefabGuid(-772044125)`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [VBloodUnit](/components/VBloodUnit){:target="_blank"}
  - `CanBeTracked: False`
  - `OverrideLockedVBloodUnit: GUID Not Found`
  - `UnlocksTrophyOnFeed: ProjectM.Trophy None`
  - `UnlocksTrophyOnFeedBrutal: ProjectM.Trophy None`
  - `LastNonExploitTime: 0`

- [EntityCategory](/components/EntityCategory){:target="_blank"}
  - `MainCategoryInt: 0`
  - `UnitCategoryInt: 11`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 0`
  - `ResourceLevel: 0`

- [ApplyBuffOnSpawn](/components/ApplyBuffOnSpawn){:target="_blank"}
  - `Kind: ProjectM.SpawnBuffKind Default`
  - `SpawnTime: 0`

- [UnitLevel](/components/UnitLevel){:target="_blank"}
  - `Level: 57`
  - `HideLevel: False`

- [UnitLevelServerData](/components/UnitLevelServerData){:target="_blank"}
  - `HealthUnitBaseStatsTypeInt: 1`
  - `UnitBaseStatsTypeInt: 1`

- [ImpactMaterial](/components/ImpactMaterial){:target="_blank"}
  - `IntType: 17`
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, 0.5f)`
  - `PlayOnSelf: False`

- [DropTableOnDeath](/components/DropTableOnDeath){:target="_blank"}
  - `Dropped: False`
  - `CustomDropArc: GUID Not Found`
  - `MinRange: 0`
  - `MaxRange: 0`

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
  - `_Value: -222706317`

- [InteractAbilityBuffer](/components/InteractAbilityBuffer){:target="_blank"}
  - *(No fields)*

- [CreateGameplayEventOnDeath](/components/CreateGameplayEventOnDeath){:target="_blank"}

- **[0]**
  - `EventId: Local - -683621876`
  - `DeathTarget: ProjectM.EventOnDeathTarget Self`
  - `EventTarget: ProjectM.GameplayEventTarget Self`
  - `SpellTarget: ProjectM.GameplayEventTarget Self`
  - `Reason: ProjectM.StatChangeReason Any`

- [ApplyBuffOnGameplayEvent](/components/ApplyBuffOnGameplayEvent){:target="_blank"}

- **[0]**
  - `BuffTarget: ProjectM.ApplyBuffTarget EventTarget`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[Single]`
  - `Stacks: 1`
  - `Buff0: Buff_RemoveAfterDuration_FadeOut_GateBoss PrefabGuid(-1322217295)`
  - `Buff1: GUID Not Found`
  - `Buff2: GUID Not Found`
  - `Buff3: GUID Not Found`
  - `EventOnConsume: Local - 0`
  - `ConsumeIfAlreadyExists: False`
  - `ConsumeConditional: None`
  - `CustomAbilitySpellModsSource: GUID Not Found`

- [GameplayEventIdMapping](/components/GameplayEventIdMapping){:target="_blank"}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -683621876`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **ProjectM.CrowdednessDropTableSettingsAsset+CrowdednessSetting**

- **[0]**
  - `DropChance: 1`

- **[1]**
  - `DropChance: 0.6`

- **[2]**
  - `DropChance: 0.45`

- **[3]**
  - `DropChance: 0.3`

- [SpawnBuffElement](/components/SpawnBuffElement){:target="_blank"}

- **[0]**
  - `Kind: ProjectM.SpawnBuffKind Default`
  - `Buff: Buff_General_Spawn_Unit_GateBoss_WarEvent PrefabGuid(-1232783422)`
  - `OriginPositionFactor: 0`
  - `Weight: 0`

- [GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - -683621876`

- [DropTableBuffer](/components/DropTableBuffer){:target="_blank"}

- **[0]**
  - `DropTableGuid: DT_Shared_Legendary_VBlood_GateBoss_Minor PrefabGuid(-1584910830)`
  - `DropTrigger: ProjectM.Shared.DropTriggerType OnDeath`
  - `RelicType: ProjectM.Shared.RelicType None`

- [DropTable](/components/DropTable){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [BlobAssetOwner](/components/BlobAssetOwner){:target="_blank"}
  - *(No fields)*
