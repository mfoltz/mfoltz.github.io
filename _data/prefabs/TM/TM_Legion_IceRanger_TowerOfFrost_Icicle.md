---
title: TM_Legion_IceRanger_TowerOfFrost_Icicle
nav_order: 1
parent: TM Prefabs
---

# TM_Legion_IceRanger_TowerOfFrost_Icicle

**Prefab GUID:** `1476543271`

## Components

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.BuffResistances**
  - `SettingsEntity: ModifiableEntity(0:0)`
  - `InitialSettingGuid: BuffResistance_UberMobNoKnockbackOrGrab PrefabGuid(99200653)`

- **ProjectM.GetOwnerRotation**
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType RandomDirection`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Creator`
  - `InverseRotation: True`

- **ProjectM.GetTranslationOnSpawn**
  - `TranslationSource: ProjectM.GetTranslationSource Creator`
  - `SnapToGround: False`

- **ProjectM.OffsetTranslationOnSpawn**
  - `Offset: Unity.Mathematics.float3 float3(0f, -4f, 0f)`

- **ProjectM.DynamicCollision**
  - `AgainstUnits: ProjectM.DynamicCollisionSettings ProjectM.DynamicCollisionSettings`
  - `AgainstPlayers: ProjectM.DynamicCollisionSettings ProjectM.DynamicCollisionSettings`
  - `NetworkMultiplier: 1`
  - `NetworkDirection: Unity.Mathematics.float2 float2(0f, 0f)`
  - `Immobile: True`

- **ProjectM.Aggroable**
  - `DistanceFactor: 1`
  - `AggroFactor: 1`
  - `Value: True`

- **ProjectM.FactionReference**
  - `FactionGuid: ModifiablePrefabGUID PrefabGuid(-772044125)`

- **ProjectM.AiPointOfInterest**
  - `Type: ProjectM.AiPointOfInterestType ResourceNode`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Age**
  - `Value: 0`

- **ProjectM.Buffable**
  - `KnockbackResistanceIndex: 11`
  - `UniqueBuffCategories: ProjectM.BuffCategoryFlag Travel, Shapeshift`

- **ProjectM.LifeTime**
  - `Duration: 240`
  - `EndAction: ProjectM.LifeTimeEndAction Destroy`

- **ProjectM.Health**
  - `MaxHealth: 250`
  - `TimeOfDeath: 0`
  - `Value: 250`
  - `MaxRecoveryHealth: 1`
  - `IsDead: False`

- **ProjectM.HealthConstants**
  - `LowHealthFactor: 0.4`
  - `DestroyOnDeath: True`
  - `DestroyAfterDuration: 0`
  - `DisableDamageSCT: False`

- **ProjectM.DynamicallyWeakenAttackers**
  - `Multiplier: 0.8`
  - `MultiplierReductionFactorPerCrowdedness: 0.9`
  - `MaxPlayers: 5`

- **ProjectM.LastTranslation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **ProjectM.ManualFirstFrameLastTranslation**
  - `Value: Il2CppSystem.Nullable_Unboxed`1[Unity.Mathematics.float3]`

- **ProjectM.CollisionRadius**
  - `Radius: 0.8`

- **ProjectM.Team**
  - `Value: 2`
  - `FactionIndex: 16`

- **ProjectM.BuffableFlagState**
  - `Value: ProjectM.ModifiableLong ProjectM.ModifiableLong`

- **ProjectM.EntityCategory**
  - `MainCategoryInt: 0`
  - `UnitCategoryInt: 9`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 2`
  - `ResourceLevel: 0`

- **ProjectM.UnitLevel**
  - `Level: 53`
  - `HideLevel: False`

- **ProjectM.UnitLevelServerData**
  - `HealthUnitBaseStatsTypeInt: 2`
  - `UnitBaseStatsTypeInt: 2`

- **ProjectM.UnitStats**
  - `PhysicalPower: 0`
  - `SpellPower: 0`
  - `ResourcePower: 0`
  - `SiegePower: 0`
  - `PhysicalResistance: 0`
  - `SpellResistance: 0`
  - `FireResistance: 0`
  - `PassiveHealthRegen: 1`
  - `CCReduction: 0`
  - `HealthRecovery: 1`
  - `DamageReduction: 0`
  - `HealingReceived: 0`
  - `ReducedBloodDrain: 0`
  - `BloodDrainMultiplier: 1`
  - `CorruptionDamageReduction: 1`

- **ProjectM.Sequencer.ImpactMaterial**
  - `IntType: 2`
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `PlayOnSelf: False`

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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_jjdhjchc`

- **Unity.Transforms.Rotation**
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Unity.Transforms.Translation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **ProjectM.Gameplay.Scripting.ChangeTranslationOverTime_DataShared**
  - `TranslationToMove: Unity.Mathematics.float3 float3(0f, 4f, 0f)`
  - `StartPosition: Unity.Mathematics.float3 float3(0f, 4f, 0f)`
  - `TargetPosition: Unity.Mathematics.float3 float3(0f, 4f, 0f)`
  - `Duration: 1`

- **Unity.Physics.PhysicsCollider**
  - `Value: Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider] Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider]`

- **Unity.Physics.Systems.StaticPhysicsWorldBodyIndex**
  - `WorldBodyIndex: -1`

- **Unity.Transforms.LocalToWorld**
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- **Unity.Transforms.LocalTransform**
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **ProjectM.TeamReference**
  - `Value: ModifiableEntity(0:0)`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: 1476543271`

- **ProjectM.BuffBuffer**
  - *(No fields)*

- **ProjectM.CreateGameplayEventsOnDestroy**
  - *(No fields)*

- **[0]**
  - `EventId: Local - -136930912`
  - `Target: ProjectM.GameplayEventTarget Owner`
  - `SpecificDestroyReason: False`
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.CreateGameplayEventsOnSpawn**
  - *(No fields)*

- **[0]**
  - `EventId: Local - -112044381`
  - `Target: ProjectM.GameplayEventTarget Self`

- **ProjectM.CreateGameplayEventsOnTick**
  - *(No fields)*

- **[0]**
  - `EventId: Local - -2037759647`
  - `Target: ProjectM.GameplayEventTarget Self`
  - `TickInterval: 1`
  - `TickTime: -0`
  - `MaxTicks: 2147483647`
  - `CallScriptOnTick: False`
  - `RandomTickOffset: 0`
  - `RandomTickInterval: 0`
  - `ResetWhenBuffStacksChanged: False`
  - `ResetWhenCastingAbility: GUID Not Found`

- **ProjectM.ApplyBuffOnGameplayEvent**
  - *(No fields)*

- **[0]**
  - `BuffTarget: ProjectM.ApplyBuffTarget Owner`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner EventTarget`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[System.Single]`
  - `Stacks: 1`
  - `Buff0: AB_IceRanger_TowerOfFrost_AttachBuff PrefabGuid(-2036645637)`
  - `Buff1: GUID Not Found`
  - `Buff2: GUID Not Found`
  - `Buff3: GUID Not Found`
  - `EventOnConsume: Local - 0`
  - `ConsumeIfAlreadyExists: False`
  - `ConsumeConditional: None`
  - `CustomAbilitySpellModsSource: GUID Not Found`

- **[1]**
  - `BuffTarget: ProjectM.ApplyBuffTarget Self`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[System.Single]`
  - `Stacks: 1`
  - `Buff0: AB_IceRanger_TowerOfFrost_SpawnBuff PrefabGuid(-1706093146)`
  - `Buff1: GUID Not Found`
  - `Buff2: GUID Not Found`
  - `Buff3: GUID Not Found`
  - `EventOnConsume: Local - 0`
  - `ConsumeIfAlreadyExists: False`
  - `ConsumeConditional: None`
  - `CustomAbilitySpellModsSource: GUID Not Found`

- **[2]**
  - `BuffTarget: ProjectM.ApplyBuffTarget Owner`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner EventTarget`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[System.Single]`
  - `Stacks: 1`
  - `Buff0: AB_IceRanger_JumpDown_Travel PrefabGuid(1937056675)`
  - `Buff1: GUID Not Found`
  - `Buff2: GUID Not Found`
  - `Buff3: GUID Not Found`
  - `EventOnConsume: Local - 0`
  - `ConsumeIfAlreadyExists: False`
  - `ConsumeConditional: None`
  - `CustomAbilitySpellModsSource: GUID Not Found`

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
  - `GameplayEventId: Local - -136930912`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[2]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -112044381`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[3]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -136930912`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **ProjectM.RemoveBuffOnGameplayEvent**
  - *(No fields)*

- **[0]**
  - `BuffTarget: ProjectM.RemoveBuffTarget Owner`

- **ProjectM.RemoveBuffOnGameplayEventEntry**
  - *(No fields)*

- **[0]**
  - `EventIndex: 0`
  - `Buff: Stunlock.Core.PrefabIdentifier PrefabIdentifier(-2036645637)`
  - `BuffCategoryFlag: ProjectM.BuffCategoryFlag None`
  - `IncludeSelf: False`

- **ProjectM.PlaySequenceOnDeath**
  - *(No fields)*

- **[0]**
  - `SequenceGuid: SequenceGUID 95666698`

- **ProjectM.GameplayEventListeners**
  - *(No fields)*

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - -112044381`

- **[1]**
  - `EventIdIndex: 1`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum RemoveBuff`
  - `GameplayEventId: Local - -136930912`

- **[2]**
  - `EventIdIndex: 2`
  - `EventIndexOfType: 1`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - -112044381`

- **[3]**
  - `EventIdIndex: 3`
  - `EventIndexOfType: 2`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - -136930912`

- **ProjectM.Network.NetSnapshot**
  - *(No fields)*

- **[0]**
  - `Value: 39`

- **[1]**
  - `Value: 67`

- **[2]**
  - `Value: 2`

- **[3]**
  - `Value: 88`

- **[4]**
  - `Value: 143`

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
  - `Value: 128`

- **[19]**
  - `Value: 63`

- **[20]**
  - `Value: 0`

- **[21]**
  - `Value: 0`

- **[22]**
  - `Value: 64`

- **[23]**
  - `Value: 64`

- **[24]**
  - `Value: 0`

- **[25]**
  - `Value: 0`

- **[26]**
  - `Value: 192`

- **[27]**
  - `Value: 63`

- **[28]**
  - `Value: 0`

- **[29]**
  - `Value: 0`

- **[30]**
  - `Value: 128`

- **[31]**
  - `Value: 63`

- **[32]**
  - `Value: 0`

- **[33]**
  - `Value: 0`

- **[34]**
  - `Value: 64`

- **[35]**
  - `Value: 64`

- **[36]**
  - `Value: 0`

- **[37]**
  - `Value: 0`

- **[38]**
  - `Value: 0`

- **[39]**
  - `Value: 63`

- **[40]**
  - `Value: 205`

- **[41]**
  - `Value: 204`

- **[42]**
  - `Value: 204`

- **[43]**
  - `Value: 62`

- **[44]**
  - `Value: 0`

- **[45]**
  - `Value: 0`

- **[46]**
  - `Value: 0`

- **[47]**
  - `Value: 122`

- **[48]**
  - `Value: 67`

- **[49]**
  - `Value: 0`

- **[50]**
  - `Value: 0`

- **[51]**
  - `Value: 128`

- **[52]**
  - `Value: 63`

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
  - `Value: 122`

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
  - `Value: 112`

- **[80]**
  - `Value: 67`

- **[81]**
  - `Value: 0`

- **[82]**
  - `Value: 0`

- **[83]**
  - `Value: 0`

- **[84]**
  - `Value: 0`

- **[85]**
  - `Value: 0`

- **[86]**
  - `Value: 0`

- **[87]**
  - `Value: 0`

- **[88]**
  - `Value: 0`

- **[89]**
  - `Value: 0`

- **[90]**
  - `Value: 0`

- **[91]**
  - `Value: 0`

- **[92]**
  - `Value: 0`

- **[93]**
  - `Value: 0`

- **[94]**
  - `Value: 0`

- **[95]**
  - `Value: 128`

- **[96]**
  - `Value: 63`

- **[97]**
  - `Value: 16`

- **[98]**
  - `Value: 0`

- **[99]**
  - `Value: 0`

- **[100]**
  - `Value: 0`

- **[101]**
  - `Value: 2`

- **[102]**
  - `Value: 0`

- **[103]**
  - `Value: 0`

- **[104]**
  - `Value: 0`

- **[105]**
  - `Value: 0`

- **[106]**
  - `Value: 0`

- **[107]**
  - `Value: 0`

- **[108]**
  - `Value: 0`

- **[109]**
  - `Value: 0`

- **[110]**
  - `Value: 0`

- **[111]**
  - `Value: 0`

- **[112]**
  - `Value: 0`

- **[113]**
  - `Value: 0`

- **[114]**
  - `Value: 0`

- **[115]**
  - `Value: 0`

- **[116]**
  - `Value: 0`

- **[117]**
  - `Value: 53`

- **[118]**
  - `Value: 0`

- **[119]**
  - `Value: 0`

- **[120]**
  - `Value: 0`

- **[121]**
  - `Value: 0`

- **[122]**
  - `Value: 0`

- **[123]**
  - `Value: 0`

- **[124]**
  - `Value: 0`

- **[125]**
  - `Value: 0`

- **[126]**
  - `Value: 0`

- **[127]**
  - `Value: 0`

- **128 total elements but only showing the first 36**
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

- **[15]**
  - `Value: -1`

- **[16]**
  - `Value: -1`

- **[17]**
  - `Value: -1`

- **[18]**
  - `Value: -1`

- **[19]**
  - `Value: -1`

- **[20]**
  - `Value: -1`

- **[21]**
  - `Value: -1`

- **[22]**
  - `Value: -1`

- **[23]**
  - `Value: -1`

- **[24]**
  - `Value: -1`

- **[25]**
  - `Value: -1`

- **[26]**
  - `Value: -1`

- **[27]**
  - `Value: -1`

- **[28]**
  - `Value: -1`

- **ProjectM.GetOwnerRotationOnlyOnSpawnTag**
  - *(No fields)*

- **ProjectM.OffsetLastTranslationOnSpawn**
  - *(No fields)*

- **ProjectM.DisableWhenNoPlayersInRange**
  - *(No fields)*

- **ProjectM.Scripting.ScriptSpawn**
  - *(No fields)*

- **ProjectM.Scripting.ScriptUpdate**
  - *(No fields)*

- **ProjectM.Shared.DropTable**
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

- **Unity.Physics.PhysicsWorldIndex**
  - *(No fields)*
