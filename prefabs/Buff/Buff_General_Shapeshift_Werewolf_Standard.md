---
title: Buff_General_Shapeshift_Werewolf_Standard
nav_order: 1
parent: Buff Prefabs
---

# Buff_General_Shapeshift_Werewolf_Standard

**Prefab GUID:** `-1598161201`

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
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

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
  - *(No fields)*

- **[0]**
  - `EventId: Local - -1285857012`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.CreateGameplayEventsOnSpawn**
  - *(No fields)*

- **[0]**
  - `EventId: Local - -112044381`
  - `Target: ProjectM.GameplayEventTarget Owner`

- **[1]**
  - `EventId: Local - 373290447`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`

- **ProjectM.CreateGameplayEventsOnTick**
  - *(No fields)*

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
  - *(No fields)*

- **[0]**
  - `Who: ProjectM.DestroyOnGameplayEventWho Self`
  - `Type: ProjectM.DestroyOnGameplayEventType Remove`
  - `DestroyReason: ProjectM.DestroyReason Default`
  - `SetTranslationToEventTranslation: False`

- **ProjectM.HealOnGameplayEvent**
  - *(No fields)*

- **[0]**
  - `Health: 0`
  - `HealthPercent: 1`
  - `HealthPerSpellPower: 0`
  - `showSCT: False`
  - `TrueHealing: False`
  - `Who: ProjectM.HealOnGameplayEventWho BuffTarget`
  - `MultiplyMainFactorWithStacks: False`

- **ProjectM.GameplayEventIdMapping**
  - *(No fields)*

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
  - *(No fields)*

- **[0]**
  - `SequenceGuid: SequenceGUID -854879316`
  - `SequencePositionTarget: ProjectM.PlaySequenceOnGameplayEventTarget EventTarget`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget EventTarget`

- **ProjectM.ModifyDropTableBuff**
  - *(No fields)*

- **[0]**
  - `DropTable: DT_Unit_Cursed_Creature_Werewolf PrefabGuid(-728620058)`

- **ProjectM.GameplayEventListeners**
  - *(No fields)*

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
  - *(No fields)*

- **[0]**
  - `Value: 207`

- **[1]**
  - `Value: 254`

- **[2]**
  - `Value: 189`

- **[3]**
  - `Value: 160`

- **[4]**
  - `Value: 92`

- **[5]**
  - `Value: 1`

- **[6]**
  - `Value: 0`

- **[7]**
  - `Value: 0`

- **[8]**
  - `Value: 0`

- **[9]**
  - `Value: 0`

- **[10]**
  - `Value: 0`

- **[11]**
  - `Value: 0`

- **[12]**
  - `Value: 0`

- **[13]**
  - `Value: 0`

- **[14]**
  - `Value: 0`

- **[15]**
  - `Value: 0`

- **[16]**
  - `Value: 0`

- **[17]**
  - `Value: 0`

- **[18]**
  - `Value: 0`

- **[19]**
  - `Value: 0`

- **[20]**
  - `Value: 0`

- **[21]**
  - `Value: 0`

- **[22]**
  - `Value: 0`

- **[23]**
  - `Value: 0`

- **[24]**
  - `Value: 0`

- **[25]**
  - `Value: 0`

- **[26]**
  - `Value: 0`

- **[27]**
  - `Value: 0`

- **[28]**
  - `Value: 0`

- **[29]**
  - `Value: 0`

- **[30]**
  - `Value: 0`

- **[31]**
  - `Value: 0`

- **[32]**
  - `Value: 0`

- **[33]**
  - `Value: 0`

- **[34]**
  - `Value: 0`

- **[35]**
  - `Value: 0`

- **[36]**
  - `Value: 0`

- **[37]**
  - `Value: 0`

- **[38]**
  - `Value: 0`

- **[39]**
  - `Value: 0`

- **[40]**
  - `Value: 0`

- **[41]**
  - `Value: 0`

- **[42]**
  - `Value: 0`

- **[43]**
  - `Value: 0`

- **[44]**
  - `Value: 0`

- **[45]**
  - `Value: 0`

- **[46]**
  - `Value: 0`

- **[47]**
  - `Value: 0`

- **[48]**
  - `Value: 0`

- **[49]**
  - `Value: 0`

- **[50]**
  - `Value: 0`

- **[51]**
  - `Value: 0`

- **[52]**
  - `Value: 0`

- **[53]**
  - `Value: 0`

- **[54]**
  - `Value: 0`

- **[55]**
  - `Value: 0`

- **56 total elements but only showing the first 36**
  - *(No fields)*

- **ProjectM.Network.SnapshotFrameChangedBuffer**
  - *(No fields)*

- **[0]**
  - `Value: -1`

- **[1]**
  - `Value: -1`

- **[2]**
  - `Value: -1`

- **[3]**
  - `Value: -1`

- **[4]**
  - `Value: -1`

- **[5]**
  - `Value: -1`

- **[6]**
  - `Value: -1`

- **[7]**
  - `Value: -1`

- **ProjectM.Shared.DropTableBuffer**
  - *(No fields)*

- **ProjectM.Buff_Persists_Through_Death**
  - *(No fields)*

- **ProjectM.Scripting.ScriptSpawn**
  - *(No fields)*

- **Unity.Entities.SpawnTag**
  - *(No fields)*

- **Unity.Entities.Prefab**
  - *(No fields)*

- **Unity.Entities.Simulate**
  - *(No fields)*

- **Unity.Entities.BlobAssetOwner**
  - *(No fields)*

- **ProjectM.Network.NetworkSnapshotType**
  - *(No fields)*
