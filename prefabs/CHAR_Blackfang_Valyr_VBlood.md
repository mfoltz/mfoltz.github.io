---
title: CHAR_Blackfang_Valyr_VBlood
guid: 173259239
categories: ['All', 'CHAR']
nav_exclude: true
search_exclude: true
layout: default
---

# CHAR_Blackfang_Valyr_VBlood

**GUID:** `173259239`

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
  - `MaxDistanceFromPreCombatPosition: 25`
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
  - `CircleChangeDirectionFrequencyMin: 0.5`
  - `CircleChangeDirectionFrequencyMax: 2`
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

- **ProjectM.Gameplay.Scripting.Script_ApplyBuffUnderHealthThreshold_DataServer**
  - `HealthFactor: 0`
  - `NewBuffEntity: Buff_Blackfang_Valyr_VBlood_Downed PrefabGuid(1382689617)`
  - `TriggerSequence: SequenceGUID 424973335`
  - `OnDamageTakenListener: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`
  - `ThresholdMet: False`
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
  - `CastOptionsPrefab: ModifiablePrefabGUID PrefabGuid(-1692475297)`

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
  - `Radius: 2`

- **ProjectM.DynamicCollision**
  - `AgainstUnits: ProjectM.DynamicCollisionSettings ProjectM.DynamicCollisionSettings`
  - `AgainstPlayers: ProjectM.DynamicCollisionSettings ProjectM.DynamicCollisionSettings`
  - `NetworkMultiplier: 1`
  - `NetworkDirection: Unity.Mathematics.float2 float2(0f, 0f)`
  - `Immobile: False`

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
  - `UltraHighPriority: True`

- **ProjectM.AiPrioritization_State**
  - `AccumulatedDeltaTime: 0`
  - `AccumulatedPriority: 0`
  - `Updated: False`

- **ProjectM.UseBossCenterPositionAsPreCombatPosition**
  - `RangeSq: 625`
  - `Found: False`

- **ProjectM.AiMoveSpeeds**
  - `Walk: 1`
  - `Run: 4`
  - `Circle: 4`
  - `Return: 6`

- **ProjectM.CastHistoryData**
  - `StorageTimeSeconds: 900`

- **ProjectM.FactionReference**
  - `FactionGuid: ModifiablePrefabGUID PrefabGuid(932337192)`

- **ProjectM.MinionMaster**
  - `TotalMaxMinions: 15`
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
  - `Source: CHAR_Blackfang_Valyr_VBlood PrefabGuid(173259239)`
  - `JournalCategory: ProjectM.JournalCategoryType None`
  - `QuestFlavorTextOverride: 00000000-0000-0000-0000-000000000000 - <Localization not found!>`
  - `TooltipGUID: GUID Not Found`
  - `SpellSchool: FrostSpellSchoolAsset PrefabGuid(-823811825)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier2`
  - `SpellSchoolPoints: 1`
  - `PassivePoints: 0`

- **ProjectM.PlacementDestroyData**
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- **ProjectM.DestroyData**
  - `DestroyReason: ProjectM.DestroyReason Default`

- **ProjectM.DestroyState**
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- **ProjectM.Buffable**
  - `KnockbackResistanceIndex: 9`
  - `UniqueBuffCategories: ProjectM.BuffCategoryFlag Travel, Shapeshift`

- **ProjectM.Hideable**
  - `IsHidden: False`
  - `Visibility: 1`
  - `AdditionalHideRangeSq: 0`
  - `IgnoreLoS: False`

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
  - `Multiplier: 0.8`
  - `MultiplierReductionFactorPerCrowdedness: 0.9`
  - `MaxPlayers: 5`

- **ProjectM.Immortal**
  - `IsImmortal: True`

- **ProjectM.LastTranslation**
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- **ProjectM.Movement**
  - `ForcePositionData: ProjectM.ForcePositionData ProjectM.ForcePositionData`
  - `MoveStopAbilityData: ProjectM.MoveStopAbilityData ProjectM.MoveStopAbilityData`
  - `MoveInput: Unity.Mathematics.float2 float2(0f, 0f)`
  - `LastNonZeroMoveInput: Unity.Mathematics.float2 float2(1f, 0f)`
  - `Speed: 3`
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
  - `DefaultRotationSpeed: 400`
  - `RotationSpeed: 400`
  - `RotateTowardsMouse: False`
  - `ForceRotateTowardsMovement: False`
  - `CurrentCanRotate: True`
  - `PlayerControlsRotation: True`

- **ProjectM.Team**
  - `Value: 2`
  - `FactionIndex: 2`

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
  - `CanBeTracked: True`
  - `OverrideLockedVBloodUnit: GUID Not Found`
  - `UnlocksTrophyOnFeed: ProjectM.Trophy None`
  - `UnlocksTrophyOnFeedBrutal: ProjectM.Trophy None`
  - `LastNonExploitTime: 0`

- **ProjectM.WoundedConstants**
  - `HealthFactor: 0`
  - `WoundedTriggerSequenceGuid: SequenceGUID -1123441705`
  - `WoundedSequenceGuid: SequenceGUID 395723216`
  - `TriggerKnockbackOnWounded: False`
  - `KnockbackPower: ProjectM.KnockbackPower ProjectM.KnockbackPower`
  - `KnockbackDuration: 0.3`
  - `KnockbackRange: 0.5`
  - `WoundedKnockbackResistanceIndex: 6`

- **ProjectM.BuffableFlagState**
  - `Value: ProjectM.ModifiableLong ProjectM.ModifiableLong`

- **ProjectM.EntityCategory**
  - `MainCategoryInt: 0`
  - `UnitCategoryInt: 0`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 5`
  - `ResourceLevel: 0`

- **ProjectM.ApplyBuffOnSpawn**
  - `Kind: ProjectM.SpawnBuffKind Default`
  - `SpawnTime: 0`

- **ProjectM.UnitLevel**
  - `Level: 82`
  - `HideLevel: False`

- **ProjectM.UnitLevelServerData**
  - `HealthUnitBaseStatsTypeInt: 2`
  - `UnitBaseStatsTypeInt: 2`

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
  - `PhysicalPower: 97.977425`
  - `SpellPower: 97.977425`
  - `ResourcePower: 51.36`
  - `SiegePower: 20.4`
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
  - `MaxHealthFactor: 1.2`
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
  - `GoalDistanceInner: 2.5`
  - `GoalDistanceOuter: 2.5`
  - `MaxDistance: 3`
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
  - `PrefabGUID: BEH_Blackfang_Valyr_VBlood PrefabGuid(1699999713)`

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
  - `_Value: 173259239`

- **ProjectM.AggroBuffer**

- **ProjectM.AlertBuffer**

- **ProjectM.AggroCandidateBufferElement**

- **ProjectM.AggroDamageHistoryBufferElement**

- **ProjectM.ExternalAggroBufferElement**

- **ProjectM.AbilityGroupSlotBuffer**

- **[0]**
  - `BaseAbilityGroupOnSlot: AB_Blackfang_Valyr_PhaseDual_MeleeAttack_AbilityGroup PrefabGuid(68363809)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[1]**
  - `BaseAbilityGroupOnSlot: AB_Blackfang_Valyr_PhaseDual_Tackle_AbilityGroup PrefabGuid(140047325)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[2]**
  - `BaseAbilityGroupOnSlot: AB_Blackfang_Valyr_PhaseDual_ChaseTargetBuff_AbilityGroup PrefabGuid(-1015932492)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[3]**
  - `BaseAbilityGroupOnSlot: AB_Blackfang_Valyr_PhaseDual_SeismicJump_AbilityGroup PrefabGuid(-9078612)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[4]**
  - `BaseAbilityGroupOnSlot: AB_Blackfang_Valyr_PhaseDual_BomberDuelQuake_AbilityGroup PrefabGuid(-1329409686)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[5]**
  - `BaseAbilityGroupOnSlot: AB_Blackfang_Valyr_PhaseSingle_MeleeAttack_AbilityGroup PrefabGuid(1633132226)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[6]**
  - `BaseAbilityGroupOnSlot: AB_Blackfang_Valyr_PhaseSingle_Charge_AbilityGroup PrefabGuid(-845442935)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[7]**
  - `BaseAbilityGroupOnSlot: AB_Blackfang_Valyr_PhaseSingle_VaultAttack_AbilityGroup PrefabGuid(-405003450)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[8]**
  - `BaseAbilityGroupOnSlot: AB_Blackfang_Valyr_PhaseSwap_AbilityGroup PrefabGuid(221530600)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[9]**
  - `BaseAbilityGroupOnSlot: AB_Blackfang_Valyr_PhaseSingle_Smack_AbilityGroup PrefabGuid(1590188261)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[10]**
  - `BaseAbilityGroupOnSlot: AB_Blackfang_Valyr_PhaseSingle_BomberQuake_AbilityGroup PrefabGuid(-98135680)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[11]**
  - `BaseAbilityGroupOnSlot: AB_Blackfang_Valyr_WalkToPos_AbilityGroup PrefabGuid(-1574580061)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **ProjectM.BuffBuffer**

- **ProjectM.EntitiesInView_Server**

- **ProjectM.Behaviours.BehaviourTreeStateActiveBuffsBuffer**

- **ProjectM.InteractAbilityBuffer**

- **[0]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab ��.��   `

- **C���  �.��      **
  - `Component     �ʬ�<           `
  - `ConditionalElements`
  - `Ability: AB_FeedBoss_01_Initiate_AbilityGroup PrefabGuid(-948311829)`
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

- **[0]**
  - `Value: 5`

- **[1]**
  - `Value: 9`

- **[2]**
  - `Value: 12`

- **[3]**
  - `Value: 15`

- **ProjectM.VBloodUnlockTechBuffer**

- **[0]**
  - `Guid: Tech_Collection_VBlood_T07_Valyr PrefabGuid(-1224541374)`

- **ProjectM.SpawnBuffElement**

- **[0]**
  - `Kind: ProjectM.SpawnBuffKind Default`
  - `Buff: Buff_General_Spawn_VBlood_EndGame PrefabGuid(-2071666138)`
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
  - `BuffGuid: Buff_Blackfang_Valyr_InCombat PrefabGuid(-1155858548)`
  - `State: ProjectM.GenericEnemyState Combat, Relocate_Unstuck`

- **[1]**
  - `BuffGuid: Buff_Shared_Return PrefabGuid(-560330878)`
  - `State: ProjectM.GenericEnemyState Return`

- **ProjectM.Shared.DropTableBuffer**

- **[0]**
  - `DropTableGuid: DT_Shared_Unit_VBlood_T05_EndGame PrefabGuid(1830862057)`
  - `DropTrigger: ProjectM.Shared.DropTriggerType OnDeath`
  - `RelicType: ProjectM.Shared.RelicType None`

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
