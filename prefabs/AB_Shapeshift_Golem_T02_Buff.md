---
title: AB_Shapeshift_Golem_T02_Buff
guid: 914043867
categories:
- AB
- All
nav_exclude: true
search_exclude: true
layout: default
components:
- Attach
- EntityOwner
- EntityCreator
- Buff
- ReplaceAbilityOnSlotData
- SpellTarget
- Script_Buff_Shapeshift_DataShared
- AbsorbBuff
- ChangeKnockbackResistanceBuff
- AllowJumpFromCliffsBuff
- ModifyBloodDrainBuff
- ShapeshiftImpairBuff
- DestroyData
- DestroyState
- Age
- BuffCategory
- LifeTime
- ModifyTargetHUDBuff
- BuffModificationFlagData
- ScriptDestroy
- Networked
- UpToDateUserBitMask
- FrameChanged
- NetworkSnapshot
- Rotation
- Translation
- Script_Buff_ModifyBuffResistances_DataServer
- LocalToWorld
- LocalTransform
- NetworkId
- PrefabGUID
- CreateGameplayEventsOnDestroy
- CreateGameplayEventsOnSpawn
- ApplyBuffOnGameplayEvent
- GameplayEventIdMapping
- PlaySequenceOnGameplayEvent
- RemoveBuffOnGameplayEvent
- RemoveBuffOnGameplayEventEntry
- ReplaceAbilityOnSlotBuff
- AttachMapIconsToEntity
- DealDamageOnGameplayEvent
- ModifyUnitStatBuff_DOTS
- GameplayEventListeners
- NetSnapshot
- SnapshotFrameChangedBuffer
- SiegeWeaponAbsorbCapByServerSettings
- Buff_Destroy_On_Owner_Death
- RunScriptOnPreCastEnded
- ScriptSpawn
- ScriptUpdate
- SpawnTag
- Prefab
- Simulate
- BlobAssetOwner
- NetworkSnapshotType
---

# AB_Shapeshift_Golem_T02_Buff

**GUID:** `914043867`

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
  - `BuffType: ProjectM.BuffType Block`
  - `Stacks: 0`
  - `MaxStacks: 1`
  - `ResetAge: False`
  - `IncreaseStacks: False`
  - `CorrectlyCreated: False`
  - `OneInstancePerOwner: False`
  - `BuffEffectType: ProjectM.BuffEffectType Buff`

- [ReplaceAbilityOnSlotData](/components/ReplaceAbilityOnSlotData){:target="_blank"}
  - `ModificationEntity: Entity(0:0)`
  - `CopyCooldown: False`

- [SpellTarget](/components/SpellTarget){:target="_blank"}
  - `Target: NetworkedEntity(0:0)`
  - `DestroyIfNotInteractable: True`

- [Script_Buff_Shapeshift_DataShared](/components/Script_Buff_Shapeshift_DataShared){:target="_blank"}
  - `ShapeshiftModificationId: Unset`
  - `RotateTowardsMovementModificationId: Unset`
  - `BloodDrainValue: 0`
  - `BloodDrainModificationId: Unset`
  - `OnStatChangedListener: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`
  - `RemoveOnDamageTaken: False`
  - `DestroyOnAbilityEnd: False`
  - `MovementSpeed: 3.7`

- [AbsorbBuff](/components/AbsorbBuff){:target="_blank"}
  - `AbsorbModifier: 1`
  - `AbsorbCap: 2000`
  - `AbsorbValue: 2000`

- [ChangeKnockbackResistanceBuff](/components/ChangeKnockbackResistanceBuff){:target="_blank"}
  - `KnockbackResistanceIndex: 10`

- [AllowJumpFromCliffsBuff](/components/AllowJumpFromCliffsBuff){:target="_blank"}
  - `AllowJumpModificationId: Unset`
  - `BlockJumpModificationId: Unset`
  - `ModificationPriority: 0`
  - `AllowJump: False`
  - `BlockJump: True`

- [ModifyBloodDrainBuff](/components/ModifyBloodDrainBuff){:target="_blank"}
  - `BloodValue: 1.25`
  - `BloodIdleValue: 0`
  - `ModificationId: Unset`
  - `IgnoreIdleDrainModId: Unset`
  - `ModificationIdleId: Unset`
  - `ModificationType: ProjectM.ModificationType Multiply`
  - `ModificationIdleType: ProjectM.ModificationType Set`
  - `ModificationPriority: 10`
  - `ModificationIdlePriority: 0`
  - `AffectBloodValue: True`
  - `AffectIdleBloodValue: False`
  - `IgnoreIdleDrainWhileActive: False`

- [ShapeshiftImpairBuff](/components/ShapeshiftImpairBuff){:target="_blank"}
  - `FailKey: 7a919d06-eacc-4a2f-bfca-4252d4f46459 - Cannot transform`
  - `Condition: None`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Age](/components/Age){:target="_blank"}
  - `Value: 0`

- [BuffCategory](/components/BuffCategory){:target="_blank"}
  - `Level: 0`
  - `Groups: ProjectM.BuffCategoryFlag Shapeshift`
  - `KeepOldest: False`

- [LifeTime](/components/LifeTime){:target="_blank"}
  - `Duration: 300`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [ModifyTargetHUDBuff](/components/ModifyTargetHUDBuff){:target="_blank"}
  - `Priority: 0`
  - `Height: 3`
  - `CharacterHUDHeightModId: Unset`
  - `HeightModId: Unset`
  - `PrefabType: ProjectM.CharacterHUDEntryType None`
  - `PrefabTypeModId: Unset`
  - `BloodPrefabType: ProjectM.CharacterHUDEntryType None`
  - `BloodPrefabTypeModId: Unset`
  - `LocalizedName: Stunlock.Core.AssetGuid 00000000000000000000000000000000`
  - `PreviousLocalizedName: Stunlock.Core.AssetGuid 00000000000000000000000000000000`

- [BuffModificationFlagData](/components/BuffModificationFlagData){:target="_blank"}
  - `ModificationTypes: 15040475298`
  - `ModificationId: Unset`

- [ScriptDestroy](/components/ScriptDestroy){:target="_blank"}
  - `Handled: False`

- [Networked](/components/Networked){:target="_blank"}
  - `CreateFrame: 0`

- [UpToDateUserBitMask](/components/UpToDateUserBitMask){:target="_blank"}
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- [FrameChanged](/components/FrameChanged){:target="_blank"}
  - `Value: -1`

- [NetworkSnapshot](/components/NetworkSnapshot){:target="_blank"}
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_akdddhikjj`

- [Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Script_Buff_ModifyBuffResistances_DataServer](/components/Script_Buff_ModifyBuffResistances_DataServer){:target="_blank"}
  - `AssetPrefabGuid: BuffResistance_Golem PrefabGuid(-1736068504)`
  - `ModId: Unset`

- [LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [NetworkId](/components/NetworkId){:target="_blank"}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 914043867`

- [CreateGameplayEventsOnDestroy](/components/CreateGameplayEventsOnDestroy){:target="_blank"}

- **[0]**
  - `EventId: Local - -136930912`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- **[1]**
  - `EventId: Local - -1507622595`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`
  - `SpecificDestroyReason: True`
  - `DestroyReason: ProjectM.DestroyReason Absorb`

- [CreateGameplayEventsOnSpawn](/components/CreateGameplayEventsOnSpawn){:target="_blank"}

- **[0]**
  - `EventId: Local - -919631584`
  - `Target: ProjectM.GameplayEventTarget Owner`

- **[1]**
  - `EventId: Local - -112044381`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`

- **[2]**
  - `EventId: Local - 651631752`
  - `Target: ProjectM.GameplayEventTarget SpellTarget`

- [ApplyBuffOnGameplayEvent](/components/ApplyBuffOnGameplayEvent){:target="_blank"}

- **[0]**
  - `BuffTarget: ProjectM.ApplyBuffTarget Owner`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[Single]`
  - `Stacks: 1`
  - `Buff0: AB_Shapeshift_Golem_T02_AwakeBuff PrefabGuid(-2111422455)`
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
  - `GameplayEventId: Local - -112044381`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[1]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -136930912`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[2]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1507622595`
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

- **[4]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - 651631752`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[5]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1507622595`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[6]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1507622595`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [PlaySequenceOnGameplayEvent](/components/PlaySequenceOnGameplayEvent){:target="_blank"}

- **[0]**
  - `SequenceGuid: SequenceGUID 770778228`
  - `SequencePositionTarget: ProjectM.PlaySequenceOnGameplayEventTarget EventTarget`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget EventTarget`

- **[1]**
  - `SequenceGuid: SequenceGUID -1469492512`
  - `SequencePositionTarget: ProjectM.PlaySequenceOnGameplayEventTarget EventTarget`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget EventTarget`

- [RemoveBuffOnGameplayEvent](/components/RemoveBuffOnGameplayEvent){:target="_blank"}

- **[0]**
  - `BuffTarget: ProjectM.RemoveBuffTarget EventTarget`

- **[1]**
  - `BuffTarget: ProjectM.RemoveBuffTarget EventTarget`

- [RemoveBuffOnGameplayEventEntry](/components/RemoveBuffOnGameplayEventEntry){:target="_blank"}

- **[0]**
  - `EventIndex: 0`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(-1353936983)`
  - `BuffCategoryFlag: ProjectM.BuffCategoryFlag None`
  - `IncludeSelf: False`

- **[1]**
  - `EventIndex: 1`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(0)`
  - `BuffCategoryFlag: ProjectM.BuffCategoryFlag Shapeshift`
  - `IncludeSelf: False`

- [ReplaceAbilityOnSlotBuff](/components/ReplaceAbilityOnSlotBuff){:target="_blank"}

- **[0]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 0`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: AB_Shapesfhit_Golem_T02_MeleeAttack_Group PrefabGuid(-27840697)`
  - `Priority: 8`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType WholeCast`
  - `CopyCooldown: False`

- **[1]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 1`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: AB_Shapesfhit_Golem_T02_FistSlam_Group PrefabGuid(-1303418171)`
  - `Priority: 8`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType WholeCast`
  - `CopyCooldown: False`

- **[2]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 2`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: AB_Shapeshift_Golem_T02_Roar_AbilityGroup PrefabGuid(-223453383)`
  - `Priority: 8`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType WholeCast`
  - `CopyCooldown: False`

- **[3]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 4`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: AB_Shapeshift_Golem_T02_GroundSlam_Group PrefabGuid(1216522353)`
  - `Priority: 8`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType WholeCast`
  - `CopyCooldown: False`

- **[4]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 5`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: AB_Shapeshift_Golem_T02_Ranged_AbilityGroup PrefabGuid(-1130363778)`
  - `Priority: 8`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType WholeCast`
  - `CopyCooldown: False`

- **[5]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 6`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: AB_Shapesfhit_Golem_ExitForm_Group PrefabGuid(1546717070)`
  - `Priority: 8`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType WholeCast`
  - `CopyCooldown: False`

- **[6]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 7`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: GUID Not Found`
  - `Priority: 8`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType WholeCast`
  - `CopyCooldown: False`

- [AttachMapIconsToEntity](/components/AttachMapIconsToEntity){:target="_blank"}

- **[0]**
  - `Prefab: MapIcon_Siege_Summon_T02_Complete PrefabGuid(1358914922)`

- [DealDamageOnGameplayEvent](/components/DealDamageOnGameplayEvent){:target="_blank"}

- **[0]**
  - `Parameters: ProjectM.DealDamageParameters ProjectM.DealDamageParameters`
  - `DamageModifierPerHit: 0`
  - `MultiplyMainFactorWithStacks: False`

- [ModifyUnitStatBuff_DOTS](/components/ModifyUnitStatBuff_DOTS){:target="_blank"}

- **[0]**
  - `AttributeCapType: ProjectM.AttributeCapType Uncapped`
  - `StatType: ProjectM.UnitStatType PhysicalPower`
  - `ModificationType: ProjectM.ModificationType Set`
  - `Value: 50`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 10`
  - `Id: Unset`

- **[1]**
  - `AttributeCapType: ProjectM.AttributeCapType Uncapped`
  - `StatType: ProjectM.UnitStatType SpellPower`
  - `ModificationType: ProjectM.ModificationType Set`
  - `Value: 50`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 10`
  - `Id: Unset`

- **[2]**
  - `AttributeCapType: ProjectM.AttributeCapType Uncapped`
  - `StatType: ProjectM.UnitStatType FireResistance`
  - `ModificationType: ProjectM.ModificationType Set`
  - `Value: 100`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 10`
  - `Id: Unset`

- **[3]**
  - `AttributeCapType: ProjectM.AttributeCapType Uncapped`
  - `StatType: ProjectM.UnitStatType SunResistance`
  - `ModificationType: ProjectM.ModificationType Set`
  - `Value: 100`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 10`
  - `Id: Unset`

- **[4]**
  - `AttributeCapType: ProjectM.AttributeCapType Uncapped`
  - `StatType: ProjectM.UnitStatType CorruptionDamageReduction`
  - `ModificationType: ProjectM.ModificationType Set`
  - `Value: 0.25`
  - `SoftCapValue: 0`
  - `Modifier: 1`
  - `IncreaseByStacks: False`
  - `ValueByStacks: 0`
  - `Priority: 10`
  - `Id: Unset`

- [GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RemoveBuff`
  - `GameplayEventId: Local - -112044381`

- **[1]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - -136930912`

- **[2]**
  - `EventIdIndex: 2`
  - `EventIndexOfType: 1`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - -1507622595`

- **[3]**
  - `EventIdIndex: 3`
  - `EventIndexOfType: 1`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RemoveBuff`
  - `GameplayEventId: Local - -112044381`

- **[4]**
  - `EventIdIndex: 4`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - 651631752`

- **[5]**
  - `EventIdIndex: 6`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum DealDamage`
  - `GameplayEventId: Local - -1507622595`

- [NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 219`

- **[1]**
  - `Value: 51`

- **[2]**
  - `Value: 123`

- **[3]**
  - `Value: 54`

- **[4]**
  - `Value: 201`

- **[5]**
  - `Value: 0`

- **[6]**
  - `Value: 0`

- **[7]**
  - `Value: 0`

- **[8]**
  - `Value: 0`

- **[9]**
  - `Value: 0`

- **[10]**
  - `Value: 250`

- **[11]**
  - `Value: 68`

- **[12]**
  - `Value: 0`

- **[13]**
  - `Value: 0`

- **[14]**
  - `Value: 250`

- **[15]**
  - `Value: 68`

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

- **[56]**
  - `Value: 0`

- **[57]**
  - `Value: 0`

- **[58]**
  - `Value: 0`

- **[59]**
  - `Value: 0`

- **[60]**
  - `Value: 0`

- **[61]**
  - `Value: 0`

- **[62]**
  - `Value: 0`

- **[63]**
  - `Value: 150`

- **[64]**
  - `Value: 67`

- **[65]**
  - `Value: 0`

- **[66]**
  - `Value: 0`

- **[67]**
  - `Value: 0`

- **[68]**
  - `Value: 0`

- **[69]**
  - `Value: 0`

- **[70]**
  - `Value: 0`

- **[71]**
  - `Value: 0`

- **[72]**
  - `Value: 0`

- **[73]**
  - `Value: 0`

- **[74]**
  - `Value: 0`

- **[75]**
  - `Value: 0`

- **[76]**
  - `Value: 0`

- **[77]**
  - `Value: 0`

- **[78]**
  - `Value: 0`

- **[79]**
  - `Value: 0`

- **80 total elements but only showing the first 36**
  - *(No fields)*

- [SnapshotFrameChangedBuffer](/components/SnapshotFrameChangedBuffer){:target="_blank"}

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

- **[8]**
  - `Value: -1`

- **[9]**
  - `Value: -1`

- **[10]**
  - `Value: -1`

- **[11]**
  - `Value: -1`

- **[12]**
  - `Value: -1`

- **[13]**
  - `Value: -1`

- **[14]**
  - `Value: -1`

- [SiegeWeaponAbsorbCapByServerSettings](/components/SiegeWeaponAbsorbCapByServerSettings){:target="_blank"}
  - *(No fields)*

- [Buff_Destroy_On_Owner_Death](/components/Buff_Destroy_On_Owner_Death){:target="_blank"}
  - *(No fields)*

- [RunScriptOnPreCastEnded](/components/RunScriptOnPreCastEnded){:target="_blank"}
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

- [NetworkSnapshotType](/components/NetworkSnapshotType){:target="_blank"}
  - *(No fields)*
