---
title: CHAR_Vampire_Dracula_VBlood
guid: -327335305
categories: ['All', 'CHAR']
nav_exclude: true
search_exclude: true
layout: default
---

# CHAR_Vampire_Dracula_VBlood

**GUID:** `-327335305`

**Categories:** [All](/prefabs/All), [CHAR](/prefabs/CHAR)

## Components

- **ProjectM.IdleInteractor**
  - `NextInteractionTime: 0`
  - `Blob: Unity.Entities.BlobAssetReference`1[ProjectM.IdleInteractor+BlobData] Unity.Entities.BlobAssetReference`1[ProjectM.IdleInteractor+BlobData]`
  - `CurrentInteraction: ProjectM.IdleInteractor+CurrentInteractionData ProjectM.IdleInteractor+CurrentInteractionData`

- **ProjectM.AbilityBar_Server**
  - `HandledClientInterruptCounter: 0`
  - `HandledServerInterruptCounter: 0`
  - `ClientInterruptCounter: 0`
  - `ClientCastStartedCounter: 0`
  - `ClientCastGroup: Entity(0:0)`
  - `SpellBlockDebuff: Entity(0:0)`
  - `SpellBlockResultBuffPrefab: GUID Not Found`
  - `SpellBlockTriggerSequence: SequenceGUID 0`
  - `SpellBlockResultBuffDuration: 0`
  - `IsSpellBlocked: False`

- **ProjectM.AbilityBar_Shared**
  - `LimitAbilityPriority: 0`
  - `GlobalCooldown: 0`
  - `CastStartTime: 0`
  - `CastTime: 0`
  - `PostCastTime: 0`
  - `InterruptTypes: ProjectM.InterruptTypes None`
  - `CooldownOnInterrupt: 0`
  - `FrameCompensation: 0`
  - `ServerInterruptCounter: 0`
  - `CastStartedCounter: 0`
  - `CastCompletedCounter: 0`
  - `ServerCastCounter: 0`
  - `ForceCastGroup: GUID Not Found`
  - `CastGroup: NetworkedEntity(0:0)`
  - `ThisFrameState: ProjectM.AbilityCastingState None`
  - `CastAbility: NetworkedEntity(0:0)`
  - `CastGroupPrefabGuid: GUID Not Found`
  - `CastAbilityPrefabGuid: GUID Not Found`
  - `CooldownRecoveryRate: 0`
  - `PrimaryCooldownRecoveryRate: 0`
  - `TravelCooldownRecoveryRate: 0`
  - `FeedCooldownRecoveryRate: 0`
  - `WeaponCooldownRecoveryRate: 0`
  - `SpellCooldownRecoveryRate: 0`
  - `UltimateCooldownRecoveryRate: 0`
  - `AbilityAttackSpeed: 1`
  - `PrimaryAttackSpeed: 1`
  - `SyncedIsCasting: False`
  - `IsChargeUp: False`
  - `ChargeUpData: ProjectM.AbilityBar_Shared+ChargeUpState ProjectM.AbilityBar_Shared+ChargeUpState`

- **ProjectM.AggroConsumer**
  - `ProximityRadius: 35`
  - `ProximityWeight: 1`
  - `DamageWeight: 10`
  - `RemoveDelay: 8`
  - `TargetSwitchThreshold: 1.25`
  - `AlertDecayPerSecond: 0.5`
  - `PreCombatPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `MaxDistanceFromPreCombatPosition: 999999`
  - `AggroAppliesCombatBuff: True`
  - `CombatAreaRelocationDistance: 0`
  - `AggroTarget: NetworkedEntity(0:0)`
  - `AlertTarget: NetworkedEntity(0:0)`
  - `AggroReason: ProjectM.AggroReason Provocation`
  - `DeaggroReason: ProjectM.DeaggroReason InvalidTarget`
  - `Active: True`
  - `RecieveAlerts: True`

- **ProjectM.Follower**
  - `Followed: ModifiableEntity(0:0)`
  - `Offset: Unity.Mathematics.float2 float2(0f, 0f)`
  - `LastOffsetUpdateTime: -1.7976931348623157E+308`
  - `ModeModifiable: 1`
  - `Stationary: False`
  - `InheritRotationWhenStationary: False`

- **ProjectM.EntityOwner**
  - `Owner: Entity(0:0)`

- **ProjectM.EntityCreator**
  - `Creator: NetworkedEntity(0:0)`

- **ProjectM.BuffResistances**
  - `SettingsEntity: ModifiableEntity(0:0)`
  - `InitialSettingGuid: BuffResistance_UberMob PrefabGuid(1067748088)`

- **ProjectM.EntityInput**
  - `Movement: Unity.Mathematics.float2 float2(0f, 0f)`
  - `AimPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `AimPositionPlane: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `AimDirection: Unity.Mathematics.float3 float3(0f, 0f, 1f)`
  - `AimLength: 0`
  - `HoveredEntity: Entity(0:0)`
  - `HoveredEntityNetworkId: ProjectM.Network.NetworkId (None)`
  - `ProjectileAimType: ProjectM.AimDirectionType Planar`
  - `State: ProjectM.SyncedInputState ProjectM.SyncedInputState`

- **ProjectM.AiMove_Server**
  - `TargetPosition: Unity.Mathematics.float2 float2(0f, 0f)`
  - `NextCircleDirectionChangeTime: 0`
  - `TargetEntity_Ability: Entity(0:0)`
  - `TargetEntity_Movement: Entity(0:0)`
  - `CircleCurveInRange: ProjectM.CurveReference ProjectM.CurveReference`
  - `CircleCurveOutOfRange: ProjectM.CurveReference ProjectM.CurveReference`
  - `MinDistance: 0`
  - `GoalDistanceInner: 0`
  - `GoalDistanceOuter: 0`
  - `MaxDistance: 0`
  - `CircleChangeDirectionFrequencyMin: 2`
  - `CircleChangeDirectionFrequencyMax: 3`
  - `TargettingMode: ProjectM.AiTargettingMode None`
  - `MovePattern: ProjectM.AiMovePattern Approach`
  - `ForceLookAtTarget: ProjectM.AiForceLookAtTarget None`
  - `SeekOutwards: False`
  - `CircleClockwise: False`
  - `FreezeRotationWhenStationary: False`
  - `IsSeekingGoalPosition: False`
  - `OnlyChangeCircleDirectionOnCast: True`

- **ProjectM.Behaviours.BehaviourTreeInstance**
  - `TreeEntity: Entity(0:0)`
  - `ExpectedTreeEntity: ModifiableEntity(0:0)`

- **ProjectM.Gameplay.Scripting.Script_ApplyBuffUnderHealthThreshhold_MonsterVBlood_DataServer**
  - `HealthFactor: 0`
  - `FirstBuffEntity: AB_Dracula_Final_Channel_00_InitializePhase PrefabGuid(1269681960)`
  - `SecondBuffEntity: Buff_Vampire_Dracula_Downed PrefabGuid(-187191126)`
  - `TriggerSequence: SequenceGUID -88390845`
  - `OnDamageTakenListener: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`
  - `ThresholdMetFrame: Il2CppSystem.Nullable_Unboxed`1[System.Int32]`
  - `DontTriggerOnDots: False`
  - `DontTriggerInFlight: False`

- **ProjectM.Pathfinding.LastPathRequest**
  - `PathRequest: ProjectM.Pathfinding.PathRequest ProjectM.Pathfinding.PathRequest`
  - `HasLastPathRequest: False`

- **ProjectM.CombatMusicSource_Server**
  - `Active: True`

- **ProjectM.CastleAreaRequirement**
  - `RequirementType: ProjectM.CastleBuilding.Placement.CastleAreaRequirementType PlaceableInNeutralArea`
  - `BlockPlacementOnRoads: False`
  - `AllowPlaceInObjectsInRepairState: False`
  - `AllowTilesStickingOutOfTerritory: False`

- **ProjectM.CastOptionsUser**
  - `CastOptionsPrefab: ModifiablePrefabGUID PrefabGuid(2131242094)`

- **ProjectM.Interactable**
  - `CurrentTargetSequenceGuid: SequenceGUID 0`
  - `IgnoreLineOfSight: False`
  - `IgnoreBlockInteract: False`
  - `UseInteractAbilityName: True`
  - `Disabled: False`

- **ProjectM.InteractedUpon**
  - `Interacting: False`
  - `BlockBuildingMovement: False`
  - `BlockBuildingDisassemble: False`

- **ProjectM.TravelToTargetRadius**
  - `Radius: 3`

- **ProjectM.DynamicCollision**
  - `AgainstUnits: ProjectM.DynamicCollisionSettings ProjectM.DynamicCollisionSettings`
  - `AgainstPlayers: ProjectM.DynamicCollisionSettings ProjectM.DynamicCollisionSettings`
  - `NetworkMultiplier: 1`
  - `NetworkDirection: Unity.Mathematics.float2 float2(0f, 0f)`
  - `Immobile: True`

- **ProjectM.Height**
  - `LastPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Value: 0`
  - `ServerHeightLevel: 0`

- **ProjectM.AoETargetImportance**
  - `Importance: 2`

- **ProjectM.Torture**
  - `TortureModifier: 1`
  - `TorturePerDamage: 0.5`

- **ProjectM.IsSpellControlled**
  - `MovementControlled: False`
  - `RotationControlled: False`

- **ProjectM.Network.NetworkInterpolated_Shared**
  - `LastClientCommandTime: 0`
  - `NextSimulationSyncTime: 0`
  - `NextSendTime: 0`
  - `ServerRotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 0f)`
  - `ServerPosition: Unity.Mathematics.float2 float2(0f, 0f)`
  - `ServerVelocity: Unity.Mathematics.float2 float2(0f, 0f)`
  - `Movement: Unity.Mathematics.float2 float2(0f, 0f)`
  - `ServerMoveVelocity: 0`
  - `Simulate: False`
  - `IsStopped: False`
  - `WasSpellControlled: False`

- **ProjectM.AbilityBarInitializationState**
  - `AbilityGroupSlotsInitialized: False`

- **ProjectM.Aggroable**
  - `DistanceFactor: 1`
  - `AggroFactor: 1`
  - `Value: True`

- **ProjectM.GainAggroByAlert**
  - `AlertThreshold: 3`

- **ProjectM.GainAggroByVicinity**
  - `Value: ProjectM.AggroData ProjectM.AggroData`

- **ProjectM.GainAlertByVicinity**
  - `Value: ProjectM.AggroData ProjectM.AggroData`
  - `AggregatedCircleRadius: 0`
  - `AggregatedConeRadius: 0`

- **ProjectM.AggroModifiers**
  - `ConeRadiusFactor: 1`
  - `CircleRadiusFactor: 1`

- **ProjectM.AlertModifiers**
  - `ConeRadiusFactor: 1`
  - `CircleRadiusFactor: 1`

- **ProjectM.AggroDamageHistoryConfig**
  - `StorageTimeSeconds: 5`

- **ProjectM.AiPrioritization_Data**
  - `UltraHighPriority: False`

- **ProjectM.AiPrioritization_State**
  - `AccumulatedDeltaTime: 0`
  - `AccumulatedPriority: 0`
  - `Updated: False`

- **ProjectM.AiMoveSpeeds**
  - `Walk: 1`
  - `Run: 2`
  - `Circle: 2`
  - `Return: 6`

- **ProjectM.CastHistoryData**
  - `StorageTimeSeconds: 5000`

- **ProjectM.FactionReference**
  - `FactionGuid: ModifiablePrefabGUID PrefabGuid(-772044125)`

- **ProjectM.MinionMaster**
  - `TotalMaxMinions: 50`
  - `MinionSpawnsThisFrame: 0`

- **ProjectM.BloodConsumeSource**
  - `ConstantData: Unity.Entities.BlobAssetReference`1[ProjectM.BloodConsumeSourceBlob] Unity.Entities.BlobAssetReference`1[ProjectM.BloodConsumeSourceBlob]`
  - `BloodQuality: -1`
  - `UnitBloodType: ModifiablePrefabGUID PrefabGuid(-338774148)`
  - `OverrideBloodCurve: ProjectM.CurveReference ProjectM.CurveReference`
  - `ForceBadBloodQuality: False`
  - `BloodQualityBuffRequirement: 50`
  - `CanBeConsumed: True`

- **ProjectM.VBloodConsumeSource**
  - `Source: CHAR_Vampire_Dracula_VBlood PrefabGuid(-327335305)`
  - `JournalCategory: ProjectM.JournalCategoryType None`
  - `QuestFlavorTextOverride: 00000000-0000-0000-0000-000000000000 - <Localization not found!>`
  - `TooltipGUID: GUID Not Found`
  - `SpellSchool: GUID Not Found`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier1`
  - `SpellSchoolPoints: 0`
  - `PassivePoints: 0`

- **ProjectM.PlacementDestroyData**
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Buffable**
  - `KnockbackResistanceIndex: 11`
  - `UniqueBuffCategories: ProjectM.BuffCategoryFlag Travel, Shapeshift`

- **ProjectM.Hideable**
  - `IsHidden: False`
  - `Visibility: 1`
  - `AdditionalHideRangeSq: 900`
  - `IgnoreLoS: True`

- **ProjectM.Stealthable**
  - `IsStealthed: False`
  - `AlwaysShowVFX: False`
  - `StealthBushId: -1`
  - `ModelInvisible: True`

- **ProjectM.Health**
  - `MaxHealth: 0`
  - `TimeOfDeath: 0`
  - `Value: 0`
  - `MaxRecoveryHealth: 1`
  - `IsDead: False`

- **ProjectM.HealthConstants**
  - `LowHealthFactor: 0.4`
  - `DestroyOnDeath: True`
  - `DestroyAfterDuration: 120`
  - `DisableDamageSCT: False`

- **ProjectM.DynamicallyWeakenAttackers**
  - `Multiplier: 0.75`
  - `MultiplierReductionFactorPerCrowdedness: 0.9`
  - `MaxPlayers: 10`

- **ProjectM.Immortal**
  - `IsImmortal: True`

- **ProjectM.LastTranslation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **ProjectM.Movement**
  - `ForcePositionData: ProjectM.ForcePositionData ProjectM.ForcePositionData`
  - `MoveStopAbilityData: ProjectM.MoveStopAbilityData ProjectM.MoveStopAbilityData`
  - `MoveInput: Unity.Mathematics.float2 float2(0f, 0f)`
  - `LastNonZeroMoveInput: Unity.Mathematics.float2 float2(1f, 0f)`
  - `Speed: 3.5`
  - `AbilityCastSpeedMultiplier: 1`
  - `HasMoveStopData: False`

- **ProjectM.CollisionRadius**
  - `Radius: 0.5`

- **ProjectM.MapCollision**
  - `Radius: 0.4`
  - `CollidesAgainstMapFlags: ProjectM.Tiles.MapCollisionFlags CollideNormalMovement, CollideAirMovement`
  - `Result: ProjectM.MapCollisionResult ProjectM.MapCollisionResult`

- **ProjectM.Velocity**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **ProjectM.SpawnTransform**
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 0f)`

- **ProjectM.TargetDirection**
  - `ForcedDirection: float3(0f, 0f, 0f)`
  - `Direction: Unity.Mathematics.float3 float3(0f, 0f, 1f)`
  - `AimDirection: Unity.Mathematics.float3 float3(0f, 0f, 1f)`
  - `DefaultRotationSpeed: 500`
  - `RotationSpeed: 500`
  - `RotateTowardsMouse: False`
  - `ForceRotateTowardsMovement: False`
  - `CurrentCanRotate: True`
  - `PlayerControlsRotation: True`

- **ProjectM.Team**
  - `Value: 2`
  - `FactionIndex: 16`

- **ProjectM.TileBounds**
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- **ProjectM.TileModelSpatialData**
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- **ProjectM.TileData**
  - `Data: Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob] Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob]`

- **ProjectM.UnitRespawnTime**
  - `MaxRespawnTime: 5`
  - `MinRespawnTime: 3`

- **ProjectM.VBloodUnit**
  - `CanBeTracked: False`
  - `OverrideLockedVBloodUnit: GUID Not Found`
  - `UnlocksTrophyOnFeed: ProjectM.Trophy SlayerOfTheImmortalKing`
  - `UnlocksTrophyOnFeedBrutal: ProjectM.Trophy BrutalSlayerOfTheImmortalKing`
  - `LastNonExploitTime: 0`

- **ProjectM.WoundedConstants**
  - `HealthFactor: 0`
  - `WoundedTriggerSequenceGuid: SequenceGUID 1808124315`
  - `WoundedSequenceGuid: SequenceGUID 937213907`
  - `TriggerKnockbackOnWounded: False`
  - `KnockbackPower: ProjectM.KnockbackPower ProjectM.KnockbackPower`
  - `KnockbackDuration: 0.3`
  - `KnockbackRange: 0.5`
  - `WoundedKnockbackResistanceIndex: 11`

- **ProjectM.BuffableFlagState**
  - `Value: ProjectM.ModifiableLong ProjectM.ModifiableLong`

- **ProjectM.EntityCategory**
  - `MainCategoryInt: 0`
  - `UnitCategoryInt: 9`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 5`
  - `ResourceLevel: 0`

- **ProjectM.ApplyBuffOnSpawn**
  - `Kind: ProjectM.SpawnBuffKind Default`
  - `SpawnTime: 0`

- **ProjectM.UnitLevel**
  - `Level: 91`
  - `HideLevel: False`

- **ProjectM.UnitLevelServerData**
  - `HealthUnitBaseStatsTypeInt: 3`
  - `UnitBaseStatsTypeInt: 3`

- **ProjectM.Vision**
  - `Range: 30`

- **ProjectM.EntityAimData**
  - `AimPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `AimPositionPlane: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `ProjectileAimPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **ProjectM.MoveVelocity**
  - `MoveVelocityMagnitude: 0`
  - `ReferenceWalkingCurve: ProjectM.CurveReference ProjectM.CurveReference`

- **ProjectM.ResistanceData**
  - `SunResistance_IncreasedSunPiercingDuration: 0`
  - `GarlicResistance_DamageReductionPerRating: 0`
  - `GarlicResistance_IncreasedExposureFactorPerRating: 0`
  - `GarlicResistance_ReduceMaxStacksPerRating: 0`
  - `FireResistance_DamageReductionPerRating: 0`
  - `FireResistance_RedcuedIgiteChancePerRating: 0`
  - `SilverResistance_DamageReductionPerRating: 0`
  - `SilverResistance_CarryValueAbsorbedPerRating: 0`
  - `HolyResistance_DamageReductionPerRating: 0`
  - `HolyResistance_DamageAbsorbPerRating: 0`
  - `PvPResilience_DamageReductionPerRating: 0`

- **ProjectM.UnitStats**
  - `PhysicalPower: 111.41323`
  - `SpellPower: 111.41323`
  - `ResourcePower: 55.68`
  - `SiegePower: 22.2`
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
  - `CorruptionDamageReduction: 0.5`

- **ProjectM.AiMove_Shared**
  - `Waypoints: PathWaypoints PathWaypoints`

- **ProjectM.UnitSpawnData**
  - `HealthSettingsPrefabGuid: Unit_StatsSettings_Health_Default PrefabGuid(-1724763162)`
  - `SpellPowerSettingsPrefabGuid: Unit_StatsSettings_Spell_Default PrefabGuid(1644963370)`
  - `PhysicalPowerSettingsPrefabGuid: Unit_StatsSettings_Physical_Default PrefabGuid(2131874575)`
  - `SiegePowerSettingsPrefabGuid: Unit_StatsSettings_Siege_Default PrefabGuid(1476468719)`
  - `MaxHealthFactor: 1.1`
  - `HealthFactor: 1`
  - `Misery: 1`
  - `BloodQuality: -1`
  - `OverrideMaxHealth: 0`
  - `PhysicalPowerFactor: 1`
  - `OverridePhysicalPower: 0`
  - `SpellPowerFactor: 1`
  - `OverrideSpellPower: 0`
  - `SiegePowerFactor: 1`
  - `OverrideSiegePower: 0`

- **ProjectM.GenericCombatMovementData**
  - `MinDistance: 0`
  - `GoalDistanceInner: 3`
  - `GoalDistanceOuter: 3`
  - `MaxDistance: 3.5`
  - `MovePattern: 0`
  - `ForceLookAtTarget: 0`
  - `CircleCurveInRange: ProjectM.CurveReference ProjectM.CurveReference`
  - `CircleCurveOutOfRange: ProjectM.CurveReference ProjectM.CurveReference`

- **ProjectM.MiscAiGameplayData**
  - `StationaryWhenIdle: False`
  - `AlertAlliesOnDeath: True`
  - `IgnoresPathfindingLineOfSight: False`
  - `StopPatrol: False`

- **ProjectM.IsMinion**
  - `Value: False`

- **ProjectM.Sequencer.ImpactMaterial**
  - `IntType: 4`
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, 0.5f)`
  - `PlayOnSelf: False`

- **ProjectM.Network.Networked**
  - `CreateFrame: 0`

- **ProjectM.Network.NetworkedTimeout**
  - `LastTimeSynced: 0`
  - `TimeoutAfter: 3`
  - `Enabled: True`

- **ProjectM.Network.UpToDateUserBitMask**

- **ProjectM.Network.FrameChanged**
  - `Value: -1`

- **ProjectM.Network.NetworkSnapshot**
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_acijcbjbihb`

- **ProjectM.Behaviours.BehaviourTreeBinding**
  - `PrefabGUID: BEH_Vampire_Dracula PrefabGuid(543339414)`

- **ProjectM.Behaviours.BehaviourTreeState**
  - `Value: ProjectM.GenericEnemyState Initialize`

- **ProjectM.Behaviours.BehaviourTreeStateMetadata**
  - `PreviousState: ProjectM.GenericEnemyState Initialize`
  - `LastChangeTime: 0`

- **ProjectM.Tiles.TileModel**
  - `DisabledTileTypesInt: 0`

- **ProjectM.Hybrid.HybridModelSeed**
  - `Seed: 0`
  - `HasSetSeed: False`

- **ProjectM.Shared.DropTableOnDeath**
  - `Dropped: False`
  - `CustomDropArc: DropItemSphere_VBlood PrefabGuid(1725779712)`
  - `MinRange: 3`
  - `MaxRange: 6`

- **Unity.Transforms.Rotation**
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **Unity.Transforms.Translation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **Unity.Physics.PhysicsCollider**
  - `Value: Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider] Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider]`

- **Unity.Physics.Systems.StaticPhysicsWorldBodyIndex**
  - `WorldBodyIndex: -1`

- **ProjectM.AiDebugDraw**
  - `CurrentTarget: Unity.Mathematics.float2 float2(0f, 0f)`
  - `AggroRadius: 0`

- **ProjectM.Pathfinding.Pathfinder**
  - `TerrainData: ProjectM.Pathfinding.PathfindingTerrainData ProjectM.Pathfinding.PathfindingTerrainData`
  - `MaxExpansions: 15000`
  - `UseSmoothing: True`

- **Unity.Transforms.LocalToWorld**
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- **Unity.Transforms.LocalTransform**
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- **ProjectM.TeamReference**
  - `Value: ModifiableEntity(0:0)`

- **ProjectM.TilePosition**
  - `Tile: Unity.Mathematics.int2 int2(0, 0)`
  - `TileRotation: ProjectM.Tiles.TileRotation None`
  - `CompressedHeight: 0`

- **ProjectM.Network.NetworkId**
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- **Stunlock.Core.PrefabGUID**
  - `_Value: -327335305`

- **ProjectM.AggroBuffer**

- **ProjectM.AlertBuffer**

- **ProjectM.AggroCandidateBufferElement**

- **ProjectM.AggroDamageHistoryBufferElement**

- **ProjectM.ExternalAggroBufferElement**

- **ProjectM.AbilityGroupSlotBuffer**

- **[0]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_ShockwaveSlash_AbilityGroup PrefabGuid(364141768)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[1]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_DownSwing_Abilitygroup PrefabGuid(-459642635)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[2]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_SwordThrow_Abilitygroup PrefabGuid(532210332)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[3]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_WolfAttack_Abilitygroup PrefabGuid(1888098383)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[4]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_WolfLeap_EnterTravel_AbilityGroup PrefabGuid(837193552)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[5]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_Feed_AbilityGroup PrefabGuid(1128466169)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[6]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_FeedAttack_Abilitygroup PrefabGuid(403738972)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[7]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_Dash_Right_AbilityGroup PrefabGuid(411852610)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[8]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_Dash_Left_AbilityGroup PrefabGuid(-412600077)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[9]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_TravelToCenter_AbilityGroup PrefabGuid(-1031474651)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[10]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_BloodBoltSwarm_AbilityGroup PrefabGuid(797450963)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[11]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_SideStep_Followup_Abilitygroup PrefabGuid(727824809)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[12]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_SideStep_Right_AbilityGroup PrefabGuid(1915068828)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[13]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_SideStep_Left_AbilityGroup PrefabGuid(-618038480)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[14]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_RingOfBlood_AbilityGroup PrefabGuid(-7407393)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[15]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_Evolve_AbilityGroup PrefabGuid(-2005193286)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[16]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_EvolveComplete_Abilitygroup PrefabGuid(27585400)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[17]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_QuickTeleport_AbilityGroup PrefabGuid(-1940289109)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[18]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_SliceNDice_AbilityGroup PrefabGuid(-847327302)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[19]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_DashFollowup_Abilitygroup PrefabGuid(-986547656)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[20]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_QuickTeleportPillar_AbilityGroup PrefabGuid(-703291679)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[21]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_BloodShower_AbilityGroup PrefabGuid(-1765846328)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[22]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_DownSwingDetonating_Abilitygroup PrefabGuid(841757706)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[23]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_SideStepLong_Right_AbilityGroup PrefabGuid(-130280994)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[24]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_SideStepLong_Left_AbilityGroup PrefabGuid(543365747)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[25]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_QuickTeleportChase_AbilityGroup PrefabGuid(-1589312992)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[26]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_SummonBats_Abilitygroup PrefabGuid(-1406000418)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[27]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_BloodStones_Setup_AbilityGroup PrefabGuid(-377463117)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[28]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_BloodStones_Summon_AbilityGroup PrefabGuid(2121218473)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[29]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_SideStepLong_Followup_Abilitygroup PrefabGuid(-2146217789)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[30]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_ShockwaveFastSlash_AbilityGroup PrefabGuid(-1473399128)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[31]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_VeilOfBats_AbilityGroup PrefabGuid(1270706044)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[32]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_VeilOfBats_PreAbilityGroup PrefabGuid(-2036664505)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[33]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_EtherialSword_Abilitygroup PrefabGuid(-1161896955)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[34]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_WolfLeap_ExitTravel_AbilityGroup PrefabGuid(-2103202975)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[35]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_WolfFollowup_Right_AbilityGroup PrefabGuid(-1362190512)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[36]**
  - `BaseAbilityGroupOnSlot: AB_Vampire_Dracula_WolfLeap_EnterStationary_Abilitygroup PrefabGuid(-1287837541)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **37 total elements but only showing the first 36**

- **ProjectM.BuffBuffer**

- **ProjectM.EntitiesInView_Server**

- **ProjectM.Behaviours.BehaviourTreeStateActiveBuffsBuffer**

- **ProjectM.InteractAbilityBuffer**

- **[0]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                            `
  - `Component                      `
  - `ConditionalElements`
  - `Ability: AB_FeedBoss_FeedOnDracula_01_Initiate_AbilityGroup PrefabGuid(1790847128)`
  - `Importance: 3`
  - `HideInteractHUDWhileCasting: False`

- **ProjectM.CreateGameplayEventsOnSpawn**

- **[0]**
  - `EventId: Local - -1628185855`
  - `Target: ProjectM.GameplayEventTarget Self`

- **ProjectM.ApplyBuffOnGameplayEvent**

- **[0]**
  - `BuffTarget: ProjectM.ApplyBuffTarget EventTarget`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[System.Single]`
  - `Stacks: 1`
  - `Buff0: Buff_General_Wounded_Tracker PrefabGuid(224060472)`
  - `Buff1: GUID Not Found`
  - `Buff2: GUID Not Found`
  - `Buff3: GUID Not Found`
  - `EventOnConsume: Local - 0`
  - `ConsumeIfAlreadyExists: False`
  - `ConsumeConditional: None`
  - `CustomAbilitySpellModsSource: GUID Not Found`

- **ProjectM.GameplayEventIdMapping**

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -1628185855`
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

- **ProjectM.CastHistoryBufferElement**

- **ProjectM.MaxMinionsPerPlayerElement**

- **ProjectM.VBloodUnlockTechBuffer**

- **[0]**
  - `Guid: Tech_Collection_VBlood_T08_Dracula PrefabGuid(956657660)`

- **ProjectM.SpawnBuffElement**

- **[0]**
  - `Kind: ProjectM.SpawnBuffKind Default`
  - `Buff: Buff_General_Spawn_VBlood_MidGame PrefabGuid(-184730451)`
  - `OriginPositionFactor: 0`
  - `Weight: 1`

- **ProjectM.GameplayEventListeners**

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - -1628185855`

- **ProjectM.Network.NetSnapshot**

- **ProjectM.Network.SnapshotFrameChangedBuffer**

- **ProjectM.Behaviours.BehaviourTreeStateBuffsBuffer**

- **[0]**
  - `BuffGuid: Buff_InCombat_Npc_Boss PrefabGuid(-1691569035)`
  - `State: ProjectM.GenericEnemyState Combat, Relocate_Unstuck`

- **[1]**
  - `BuffGuid: Buff_Vampire_Dracula_Return PrefabGuid(-1377587236)`
  - `State: ProjectM.GenericEnemyState Return`

- **[2]**
  - `BuffGuid: Buff_Vampire_Dracula_Idle PrefabGuid(496408546)`
  - `State: ProjectM.GenericEnemyState Idle`

- **ProjectM.Shared.DropTableBuffer**

- **[0]**
  - `DropTableGuid: DT_Unit_Relic_Dracula_Unique PrefabGuid(-191917509)`
  - `DropTrigger: ProjectM.Shared.DropTriggerType OnDeath`
  - `RelicType: ProjectM.Shared.RelicType Dracula`

- **ProjectM.Behaviours.BehaviourTreeNodeInstanceElement**

- **ProjectM.Pathfinding.PathBuffer**

- **ProjectM.Pathfinding.PathRequestFilledSegmentBuffer**

- **ProjectM.Pathfinding.PathRequestSolveDebugBuffer**

- **ProjectM.Pathfinding.UnsmoothedPathBuffer**

- **Stunlock.Sequencer.BlackboardElement**

- **ProjectM.MoveStopTrigger**

- **ProjectM.SnapToHeight**

- **ProjectM.HideOutsideVision**

- **ProjectM.Contest.ContestTerminatorTag**

- **ProjectM.MoveEntity**

- **ProjectM.TilePlacementTag**

- **ProjectM.DisableWhenNoPlayersInRange**

- **ProjectM.Scripting.ScriptSpawn**

- **ProjectM.Shared.DropTable**

- **Unity.Entities.SpawnTag**

- **Unity.Entities.Prefab**

- **Unity.Entities.Simulate**

- **Unity.Entities.BlobAssetOwner**

- **ProjectM.TileModelRegistrationState**

- **ProjectM.Network.NetworkSnapshotType**

- **ProjectM.Tiles.TileModelLayer**

- **Unity.Physics.PhysicsWorldIndex**
