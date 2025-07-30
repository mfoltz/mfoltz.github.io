---
title: Buff_General_Shapeshift_Werewolf_Standard
guid: -1598161201
categories: ['All', 'Buff']
nav_exclude: true
search_exclude: true
layout: default
---

# Buff_General_Shapeshift_Werewolf_Standard

**GUID:** `-1598161201`

**Categories:** [All](/prefabs/All), [Buff](/prefabs/Buff)

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
  - `BuffType: ProjectM.BuffType Replace`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: True`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Buff`

- **ProjectM.ChangeKnockbackResistanceBuff**
  - `KnockbackResistanceIndex: 6`

- **ProjectM.ModifyAIMoveSpeedsBuff**
  - `Walk: 1`
  - `WalkModId: Unset`
  - `Run: 6`
  - `RunModId: Unset`
  - `Circle: 6`
  - `CircleModId: Unset`
  - `Return: 6`
  - `ReturnModId: Unset`

- **ProjectM.ModifyConsumeBloodTypeBuff**
  - `BloodType: BloodType_Creature PrefabGuid(524822543)`
  - `BloodTypeModificationId: Unset`

- **ProjectM.ModifyEntityCategoryBuff**
  - `MainCategory: ProjectM.MainEntityCategory Unit`
  - `MainCategoryModId: Unset`
  - `UnitCategory: ProjectM.UnitCategory Beast`
  - `UnitCategoryModId: Unset`
  - `StructureCategory: ProjectM.StructureCategory BasicStructure`
  - `StructureCategoryModId: Unset`
  - `MaterialCategory: ProjectM.MaterialCategory None`
  - `MaterialCategoryModId: Unset`
  - `ResourceLevel: 0`
  - `ResourceLevelModId: Unset`

- **ProjectM.ModifyAggroRangesBuff**
  - `AggroCircleRadiusFactor: 1.5`
  - `AggroConeRadiusFactor: -1`
  - `AlertCircleRadiusFactor: -1`
  - `AlertConeRadiusFactor: -1`

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

- **ProjectM.ModifyTargetHUDBuff**
  - `Priority: 0`
  - `Height: 0.7`
  - `CharacterHUDHeightModId: Unset`
  - `HeightModId: Unset`
  - `PrefabType: ProjectM.CharacterHUDEntryType BaseUnit`
  - `PrefabTypeModId: Unset`
  - `BloodPrefabType: ProjectM.CharacterHUDEntryType None`
  - `BloodPrefabTypeModId: Unset`
  - `LocalizedName: Stunlock.Core.AssetGuid 0e866501925e4a9295264861e3e0901b`
  - `PreviousLocalizedName: Stunlock.Core.AssetGuid 00000000000000000000000000000000`

- **ProjectM.ModifyUnitBaseStatsTypeBuff**
  - `Priority: 0`
  - `UnitBaseStatsType: ProjectM.UnitBaseStatsType Normal`
  - `UnitBaseStatsTypeModId: Unset`
  - `HealthUnitBaseStatsType: ProjectM.UnitBaseStatsType Normal`
  - `HealthUnitBaseStatsTypeModId: Unset`
  - `MaxHealthFactor: 2.6`
  - `MaxHealthFactorModId: Unset`

- **ProjectM.ModifyUnitLevelBuff**
  - `Priority: 0`
  - `UnitLevel: 65`
  - `Addition: False`
  - `UnitLevelModId: Unset`

- **ProjectM.Scripting.ScriptDestroy**
  - `Handled: False`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_fkbkbchgb`

- **Unity.Transforms.Rotation**
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Unity.Transforms.Translation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **ProjectM.Gameplay.Scripting.Script_Modify_Combat_Movement_Buff_Data**
  - `MinDistance: 1.5`
  - `GoalDistance: 2`
  - `GoalDistanceOuter: 2.5`
  - `MaxDistance: 3`
  - `MovePattern: ProjectM.AiMovePattern Circle`
  - `ForceLookAtTarget: ProjectM.AiForceLookAtTarget None`
  - `CircleCurveInRange: ProjectM.CurveReference ProjectM.CurveReference`
  - `CircleCurveOutOfRange: ProjectM.CurveReference ProjectM.CurveReference`

- **ProjectM.Gameplay.Scripting.Script_Modify_Combat_Movement_Buff_State**
  - `MinDistanceModId: Unset`
  - `GoalDistanceModId: Unset`
  - `GoalDistanceOuterModId: Unset`
  - `MaxDistanceModId: Unset`
  - `MovePatternModId: Unset`
  - `ForceLookAtTargetModId: Unset`
  - `OldCircleCurveInRange: ProjectM.CurveReference ProjectM.CurveReference`
  - `OldCircleCurveOutOfRange: ProjectM.CurveReference ProjectM.CurveReference`

- **ProjectM.Gameplay.Scripting.Script_Buff_ModifyCastOptions_DataServer**
  - `CastOptionsPrefab: CO_Werewolf PrefabGuid(195815988)`
  - `ModId: Unset`

- **ProjectM.Gameplay.Scripting.Script_Buff_ModifyFaction_DataServer**
  - `Faction: Faction_Werewolf PrefabGuid(-2024618997)`
  - `ModId: Unset`

- **Unity.Transforms.LocalToWorld**
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- **Unity.Transforms.LocalTransform**
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: -1598161201`

- **ProjectM.CreateGameplayEventsOnDestroy**

- **[0]**
  - `EventId: Local - -1285857012`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.CreateGameplayEventsOnSpawn**

- **[0]**
  - `EventId: Local - -112044381`
  - `Target: ProjectM.GameplayEventTarget Owner`

- **[1]**
  - `EventId: Local - 373290447`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`

- **ProjectM.CreateGameplayEventsOnTick**

- **[0]**
  - `EventId: Local - -1486120159`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`
  - `TickInterval: 3`
  - `TickTime: -0`
  - `MaxTicks: 2147483647`
  - `CallScriptOnTick: False`
  - `RandomTickOffset: 0`
  - `RandomTickInterval: 0`
  - `ResetWhenBuffStacksChanged: False`
  - `ResetWhenCastingAbility: GUID Not Found`

- **ProjectM.DestroyOnGameplayEvent**

- **[0]**
  - `Who: ProjectM.DestroyOnGameplayEventWho Self`
  - `Type: ProjectM.DestroyOnGameplayEventType Remove`
  - `DestroyReason: ProjectM.DestroyReason Default`
  - `SetTranslationToEventTranslation: False`

- **ProjectM.HealOnGameplayEvent**

- **[0]**
  - `Health: 0`
  - `HealthPercent: 1`
  - `HealthPerSpellPower: 0`
  - `showSCT: False`
  - `TrueHealing: False`
  - `Who: ProjectM.HealOnGameplayEventWho BuffTarget`
  - `MultiplyMainFactorWithStacks: False`

- **ProjectM.GameplayEventIdMapping**

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 373290447`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[1]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1285857012`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[2]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1486120159`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[3]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -112044381`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **ProjectM.PlaySequenceOnGameplayEvent**

- **[0]**
  - `SequenceGuid: SequenceGUID -854879316`
  - `SequencePositionTarget: ProjectM.PlaySequenceOnGameplayEventTarget EventTarget`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget EventTarget`

- **ProjectM.ModifyDropTableBuff**

- **[0]**
  - `DropTable: DT_Unit_Cursed_Creature_Werewolf PrefabGuid(-728620058)`

- **ProjectM.GameplayEventListeners**

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - 373290447`

- **[1]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - -1285857012`

- **[2]**
  - `EventIdIndex: 2`
  - `EventIndexOfType: 0`
  - `ConditionBlob: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                                          `
  - `Component                                `
  - `ConditionalElements`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - -1486120159`

- **[3]**
  - `EventIdIndex: 3`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Heal`
  - `GameplayEventId: Local - -112044381`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.Shared.DropTableBuffer**

- **ProjectM.Buff_Persists_Through_Death**

- **ProjectM.Scripting.ScriptSpawn**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.Network.NetworkSnapshotType**
