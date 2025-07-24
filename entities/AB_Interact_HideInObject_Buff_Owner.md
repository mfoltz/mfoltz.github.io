---
title: AB_Interact_HideInObject_Buff_Owner
guid: -2059756080
categories: ['AB', 'All']
nav_exclude: true
search_exclude: false
layout: default
---

# AB_Interact_HideInObject_Buff_Owner

**GUID:** `-2059756080`

**Categories:** [AB](/prefabs/AB), [All](/prefabs/All)

## Components

- [HideWeapon](/components/HideWeapon){:target="_blank"}
  - `HideWeaponSequenceGUID: SequenceGUID 1136240177`
  - `HideWeaponState: SequenceState`
  - `Id: Entity(0:0)`

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
  - `BuffEffectType: ProjectM.BuffEffectType Buff`

- [ReplaceAbilityOnSlotData](/components/ReplaceAbilityOnSlotData){:target="_blank"}
  - `ModificationEntity: Entity(0:0)`
  - `CopyCooldown: False`

- [SpellTarget](/components/SpellTarget){:target="_blank"}
  - `Target: NetworkedEntity(0:0)`
  - `DestroyIfNotInteractable: False`

- [DisableAggroBuff](/components/DisableAggroBuff){:target="_blank"}
  - `Mode: ProjectM.DisableAggroBuffMode OthersDontAttackTarget`

- [ShapeshiftImpairBuff](/components/ShapeshiftImpairBuff){:target="_blank"}
  - `FailKey: 00000000-0000-0000-0000-000000000000 - <Localization not found!>`
  - `Condition: None`

- [SpawnPrefabOnDestroy](/components/SpawnPrefabOnDestroy){:target="_blank"}
  - `SpawnPrefab: AB_Interact_HideInObject_Travel_Out PrefabGuid(533645066)`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Age](/components/Age){:target="_blank"}
  - `Value: 0`

- [HideTargetHUD](/components/HideTargetHUD){:target="_blank"}
  - `Type: ProjectM.HideTargetHUDType -1`

- [LifeTime](/components/LifeTime){:target="_blank"}
  - `Duration: 120`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- [LastTranslation](/components/LastTranslation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Team](/components/Team){:target="_blank"}
  - `Value: 1`
  - `FactionIndex: -1`

- [BuffModificationFlagData](/components/BuffModificationFlagData){:target="_blank"}
  - `ModificationTypes: 8125114`
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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_jceehdeeh`

- [Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Script_Buff_Stealth_DataServer](/components/Script_Buff_Stealth_DataServer){:target="_blank"}
  - `StealthModificationId: Unset`
  - `InvisibleModificationId: Unset`
  - `AlwaysShowVFXModificationId: Unset`
  - `ModelInvisible: True`
  - `AlwaysShowVFX: False`

- [LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [TeamReference](/components/TeamReference){:target="_blank"}
  - `Value: ModifiableEntity(0:0)`

- [NetworkId](/components/NetworkId){:target="_blank"}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -2059756080`

- [CreateGameplayEventsOnAbilityTrigger](/components/CreateGameplayEventsOnAbilityTrigger){:target="_blank"}

- **[0]**
  - `EventId: Local - -1662216269`
  - `Type: ProjectM.AbilityTriggerEventType Cast`
  - `Target: ProjectM.GameplayEventTarget BuffTarget`
  - `Condition: None`
  - `AbilityTypes: ProjectM.AbilityTypeFlag All`
  - `AbilityButton: ProjectM.AbilityButtonInputAction None`
  - `AbilityTypeEnum: ProjectM.AbilityTypeEnum None`
  - `NumOfPrefabTargets: 0`
  - `PrefabTargetStartIndex: 0`

- [CreateGameplayEventsOnDestroy](/components/CreateGameplayEventsOnDestroy){:target="_blank"}

- **[0]**
  - `EventId: Local - -1285857012`
  - `Target: ProjectM.GameplayEventTarget SpellTarget`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyOnGameplayEvent](/components/DestroyOnGameplayEvent){:target="_blank"}

- **[0]**
  - `Who: ProjectM.DestroyOnGameplayEventWho Self`
  - `Type: ProjectM.DestroyOnGameplayEventType Remove`
  - `DestroyReason: ProjectM.DestroyReason Default`
  - `SetTranslationToEventTranslation: True`

- [GameplayEventIdMapping](/components/GameplayEventIdMapping){:target="_blank"}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1285857012`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[1]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1662216269`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [RemoveBuffOnGameplayEvent](/components/RemoveBuffOnGameplayEvent){:target="_blank"}

- **[0]**
  - `BuffTarget: ProjectM.RemoveBuffTarget EventTarget`

- [RemoveBuffOnGameplayEventEntry](/components/RemoveBuffOnGameplayEventEntry){:target="_blank"}

- **[0]**
  - `EventIndex: 0`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(-1696380191)`
  - `BuffCategoryFlag: ProjectM.BuffCategoryFlag None`
  - `IncludeSelf: False`

- [ReplaceAbilityOnSlotBuff](/components/ReplaceAbilityOnSlotBuff){:target="_blank"}

- **[0]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffOwner`
  - `Slot: 0`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: AB_Interact_HideInObject_Recast_M1_AbilityGroup PrefabGuid(-188185340)`
  - `Priority: 10`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType WholeCast`
  - `CopyCooldown: False`

- **[1]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 1`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: GUID Not Found`
  - `Priority: 10`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType WholeCast`
  - `CopyCooldown: False`

- **[2]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 2`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: GUID Not Found`
  - `Priority: 10`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType WholeCast`
  - `CopyCooldown: False`

- **[3]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 3`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: GUID Not Found`
  - `Priority: 10`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType WholeCast`
  - `CopyCooldown: False`

- **[4]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 4`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: GUID Not Found`
  - `Priority: 10`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType WholeCast`
  - `CopyCooldown: False`

- **[5]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 5`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: GUID Not Found`
  - `Priority: 10`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType WholeCast`
  - `CopyCooldown: False`

- **[6]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 6`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: GUID Not Found`
  - `Priority: 10`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType WholeCast`
  - `CopyCooldown: False`

- **[7]**
  - `Target: ProjectM.ReplaceAbilityTarget BuffTarget`
  - `Slot: 7`
  - `ReplaceGroupId: GUID Not Found`
  - `NewGroupId: GUID Not Found`
  - `Priority: 10`
  - `Condition: None`
  - `CastBlockType: ProjectM.GroupSlotModificationCastBlockType WholeCast`
  - `CopyCooldown: False`

- [GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RemoveBuff`
  - `GameplayEventId: Local - -1285857012`

- **[1]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - -1662216269`

- [NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 208`

- **[1]**
  - `Value: 157`

- **[2]**
  - `Value: 58`

- **[3]**
  - `Value: 133`

- **[4]**
  - `Value: 130`

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
  - `Value: 240`

- **[56]**
  - `Value: 66`

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
  - `Value: 0`

- **[64]**
  - `Value: 0`

- **[65]**
  - `Value: 0`

- **[66]**
  - `Value: 0`

- **[67]**
  - `Value: 0`

- **[68]**
  - `Value: 0`

- **[69]**
  - `Value: 255`

- **[70]**
  - `Value: 255`

- **[71]**
  - `Value: 255`

- **[72]**
  - `Value: 255`

- **[73]**
  - `Value: 1`

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

- [GetOwnerTeamOnSpawn](/components/GetOwnerTeamOnSpawn){:target="_blank"}
  - *(No fields)*

- [InteractBuff](/components/InteractBuff){:target="_blank"}
  - *(No fields)*

- [ScriptSpawn](/components/ScriptSpawn){:target="_blank"}
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
