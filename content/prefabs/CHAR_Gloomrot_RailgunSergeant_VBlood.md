---
title: CHAR_Gloomrot_RailgunSergeant_VBlood
guid: 2054432370
categories: ['All', 'CHAR']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `2054432370`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [CHAR]({{% relref "prefabs/CHAR.md" %}})

## Components

- **ProjectM.IdleInteractor**
  - `NextInteractionTime: 0`
  - `Blob: Unity.Entities.BlobAssetReference`1[ProjectM.IdleInteractor+BlobData] Unity.Entities.BlobAssetReference`1[ProjectM.IdleInteractor+BlobData]`
  - `CurrentInteraction: ProjectM.IdleInteractor+CurrentInteractionData ProjectM.IdleInteractor+CurrentInteractionData`

- [ProjectM.AbilityBar_Server]({{% relref "components/AbilityBar_Server.md" %}})
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

- [ProjectM.AbilityBar_Shared]({{% relref "components/AbilityBar_Shared.md" %}})
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

- [ProjectM.AggroConsumer]({{% relref "components/AggroConsumer.md" %}})
  - `ProximityRadius: 35`
  - `ProximityWeight: 1`
  - `DamageWeight: 10`
  - `RemoveDelay: 8`
  - `TargetSwitchThreshold: 1.25`
  - `AlertDecayPerSecond: 0.5`
  - `PreCombatPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `MaxDistanceFromPreCombatPosition: 30`
  - `AggroAppliesCombatBuff: True`
  - `CombatAreaRelocationDistance: 0`
  - `AggroTarget: NetworkedEntity(0:0)`
  - `AlertTarget: NetworkedEntity(0:0)`
  - `AggroReason: ProjectM.AggroReason Provocation`
  - `DeaggroReason: ProjectM.DeaggroReason InvalidTarget`
  - `Active: True`
  - `RecieveAlerts: True`

- [ProjectM.Follower]({{% relref "components/Follower.md" %}})
  - `Followed: ModifiableEntity(0:0)`
  - `Offset: Unity.Mathematics.float2 float2(0f, 0f)`
  - `LastOffsetUpdateTime: -1.7976931348623157E+308`
  - `ModeModifiable: 1`
  - `Stationary: False`
  - `InheritRotationWhenStationary: False`

- [ProjectM.EntityOwner]({{% relref "components/EntityOwner.md" %}})
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator]({{% relref "components/EntityCreator.md" %}})
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.BuffResistances]({{% relref "components/BuffResistances.md" %}})
  - `SettingsEntity: ModifiableEntity(0:0)`
  - `InitialSettingGuid: BuffResistance_UberMob PrefabGuid(1067748088)`

- [ProjectM.EntityInput]({{% relref "components/EntityInput.md" %}})
  - `Movement: Unity.Mathematics.float2 float2(0f, 0f)`
  - `AimPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `AimPositionPlane: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `AimDirection: Unity.Mathematics.float3 float3(0f, 0f, 1f)`
  - `AimLength: 0`
  - `HoveredEntity: Entity(0:0)`
  - `HoveredEntityNetworkId: ProjectM.Network.NetworkId (None)`
  - `ProjectileAimType: ProjectM.AimDirectionType Planar`
  - `State: ProjectM.SyncedInputState ProjectM.SyncedInputState`

- [ProjectM.AiMove_Server]({{% relref "components/AiMove_Server.md" %}})
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
  - `CircleChangeDirectionFrequencyMax: 5`
  - `TargettingMode: ProjectM.AiTargettingMode None`
  - `MovePattern: ProjectM.AiMovePattern Approach`
  - `ForceLookAtTarget: ProjectM.AiForceLookAtTarget None`
  - `SeekOutwards: False`
  - `CircleClockwise: False`
  - `FreezeRotationWhenStationary: False`
  - `IsSeekingGoalPosition: False`
  - `OnlyChangeCircleDirectionOnCast: True`

- [ProjectM.Behaviours.BehaviourTreeInstance]({{% relref "components/BehaviourTreeInstance.md" %}})
  - `TreeEntity: Entity(0:0)`
  - `ExpectedTreeEntity: ModifiableEntity(0:0)`

- [ProjectM.Gameplay.Scripting.Script_ApplyBuffUnderHealthThreshold_DataServer]({{% relref "components/Script_ApplyBuffUnderHealthThreshold_DataServer.md" %}})
  - `HealthFactor: 0`
  - `NewBuffEntity: Buff_Gloomrot_RailgunSergeant_VBlood_Downed PrefabGuid(1251197221)`
  - `TriggerSequence: SequenceGUID -88390845`
  - `OnDamageTakenListener: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`
  - `ThresholdMet: False`
  - `DontTriggerOnDots: False`
  - `DontTriggerInFlight: False`

- [ProjectM.Pathfinding.LastPathRequest]({{% relref "components/LastPathRequest.md" %}})
  - `PathRequest: ProjectM.Pathfinding.PathRequest ProjectM.Pathfinding.PathRequest`
  - `HasLastPathRequest: False`

- [ProjectM.CombatMusicSource_Server]({{% relref "components/CombatMusicSource_Server.md" %}})
  - `Active: True`

- [ProjectM.CastleAreaRequirement]({{% relref "components/CastleAreaRequirement.md" %}})
  - `RequirementType: ProjectM.CastleBuilding.Placement.CastleAreaRequirementType PlaceableInNeutralArea`
  - `BlockPlacementOnRoads: False`
  - `AllowPlaceInObjectsInRepairState: False`
  - `AllowTilesStickingOutOfTerritory: False`

- [ProjectM.CastOptionsUser]({{% relref "components/CastOptionsUser.md" %}})
  - `CastOptionsPrefab: ModifiablePrefabGUID PrefabGuid(-727240888)`

- [ProjectM.Interactable]({{% relref "components/Interactable.md" %}})
  - `CurrentTargetSequenceGuid: SequenceGUID 0`
  - `IgnoreLineOfSight: False`
  - `IgnoreBlockInteract: False`
  - `UseInteractAbilityName: True`
  - `Disabled: False`

- [ProjectM.InteractedUpon]({{% relref "components/InteractedUpon.md" %}})
  - `Interacting: False`
  - `BlockBuildingMovement: False`
  - `BlockBuildingDisassemble: False`

- [ProjectM.TravelToTargetRadius]({{% relref "components/TravelToTargetRadius.md" %}})
  - `Radius: 1.5`

- [ProjectM.DynamicCollision]({{% relref "components/DynamicCollision.md" %}})
  - `AgainstUnits: ProjectM.DynamicCollisionSettings ProjectM.DynamicCollisionSettings`
  - `AgainstPlayers: ProjectM.DynamicCollisionSettings ProjectM.DynamicCollisionSettings`
  - `NetworkMultiplier: 1`
  - `NetworkDirection: Unity.Mathematics.float2 float2(0f, 0f)`
  - `Immobile: False`

- [ProjectM.Height]({{% relref "components/Height.md" %}})
  - `LastPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Value: 0`
  - `ServerHeightLevel: 0`

- [ProjectM.AoETargetImportance]({{% relref "components/AoETargetImportance.md" %}})
  - `Importance: 2`

- [ProjectM.Torture]({{% relref "components/Torture.md" %}})
  - `TortureModifier: 1`
  - `TorturePerDamage: 0.5`

- [ProjectM.IsSpellControlled]({{% relref "components/IsSpellControlled.md" %}})
  - `MovementControlled: False`
  - `RotationControlled: False`

- [ProjectM.Network.NetworkInterpolated_Shared]({{% relref "components/NetworkInterpolated_Shared.md" %}})
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

- [ProjectM.AbilityBarInitializationState]({{% relref "components/AbilityBarInitializationState.md" %}})
  - `AbilityGroupSlotsInitialized: False`

- [ProjectM.Aggroable]({{% relref "components/Aggroable.md" %}})
  - `DistanceFactor: 1`
  - `AggroFactor: 1`
  - `Value: True`

- [ProjectM.GainAggroByAlert]({{% relref "components/GainAggroByAlert.md" %}})
  - `AlertThreshold: 3`

- [ProjectM.GainAggroByVicinity]({{% relref "components/GainAggroByVicinity.md" %}})
  - `Value: ProjectM.AggroData ProjectM.AggroData`

- [ProjectM.GainAlertByVicinity]({{% relref "components/GainAlertByVicinity.md" %}})
  - `Value: ProjectM.AggroData ProjectM.AggroData`
  - `AggregatedCircleRadius: 0`
  - `AggregatedConeRadius: 0`

- [ProjectM.AggroModifiers]({{% relref "components/AggroModifiers.md" %}})
  - `ConeRadiusFactor: 1`
  - `CircleRadiusFactor: 1`

- [ProjectM.AlertModifiers]({{% relref "components/AlertModifiers.md" %}})
  - `ConeRadiusFactor: 1`
  - `CircleRadiusFactor: 1`

- [ProjectM.AggroDamageHistoryConfig]({{% relref "components/AggroDamageHistoryConfig.md" %}})
  - `StorageTimeSeconds: 5`

- [ProjectM.AiPrioritization_Data]({{% relref "components/AiPrioritization_Data.md" %}})
  - `UltraHighPriority: True`

- [ProjectM.AiPrioritization_State]({{% relref "components/AiPrioritization_State.md" %}})
  - `AccumulatedDeltaTime: 0`
  - `AccumulatedPriority: 0`
  - `Updated: False`

- [ProjectM.UseBossCenterPositionAsPreCombatPosition]({{% relref "components/UseBossCenterPositionAsPreCombatPosition.md" %}})
  - `RangeSq: 625`
  - `Found: False`

- [ProjectM.AiMoveSpeeds]({{% relref "components/AiMoveSpeeds.md" %}})
  - `Walk: 1`
  - `Run: 2`
  - `Circle: 2`
  - `Return: 3.5`

- [ProjectM.CastHistoryData]({{% relref "components/CastHistoryData.md" %}})
  - `StorageTimeSeconds: 900`

- [ProjectM.FactionReference]({{% relref "components/FactionReference.md" %}})
  - `FactionGuid: ModifiablePrefabGUID PrefabGuid(-1632475814)`

- [ProjectM.MinionMaster]({{% relref "components/MinionMaster.md" %}})
  - `TotalMaxMinions: 16`
  - `MinionSpawnsThisFrame: 0`

- [ProjectM.BloodConsumeSource]({{% relref "components/BloodConsumeSource.md" %}})
  - `ConstantData: Unity.Entities.BlobAssetReference`1[ProjectM.BloodConsumeSourceBlob] Unity.Entities.BlobAssetReference`1[ProjectM.BloodConsumeSourceBlob]`
  - `BloodQuality: -1`
  - `UnitBloodType: ModifiablePrefabGUID PrefabGuid(-338774148)`
  - `OverrideBloodCurve: ProjectM.CurveReference ProjectM.CurveReference`
  - `ForceBadBloodQuality: False`
  - `BloodQualityBuffRequirement: 50`
  - `CanBeConsumed: True`

- [ProjectM.VBloodConsumeSource]({{% relref "components/VBloodConsumeSource.md" %}})
  - `Source: CHAR_Gloomrot_RailgunSergeant_VBlood PrefabGuid(2054432370)`
  - `JournalCategory: ProjectM.JournalCategoryType None`
  - `QuestFlavorTextOverride: 00000000-0000-0000-0000-000000000000 - <Localization not found!>`
  - `TooltipGUID: GUID Not Found`
  - `SpellSchool: StormSpellSchoolAsset PrefabGuid(-829934972)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier2`
  - `SpellSchoolPoints: 1`
  - `PassivePoints: 0`

- [ProjectM.PlacementDestroyData]({{% relref "components/PlacementDestroyData.md" %}})
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Buffable]({{% relref "components/Buffable.md" %}})
  - `KnockbackResistanceIndex: 6`
  - `UniqueBuffCategories: ProjectM.BuffCategoryFlag Travel, Shapeshift`

- [ProjectM.Hideable]({{% relref "components/Hideable.md" %}})
  - `IsHidden: False`
  - `Visibility: 1`
  - `AdditionalHideRangeSq: 0`
  - `IgnoreLoS: False`

- [ProjectM.Stealthable]({{% relref "components/Stealthable.md" %}})
  - `IsStealthed: False`
  - `AlwaysShowVFX: False`
  - `StealthBushId: -1`
  - `ModelInvisible: True`

- [ProjectM.Health]({{% relref "components/Health.md" %}})
  - `MaxHealth: 0`
  - `TimeOfDeath: 0`
  - `Value: 0`
  - `MaxRecoveryHealth: 1`
  - `IsDead: False`

- [ProjectM.HealthConstants]({{% relref "components/HealthConstants.md" %}})
  - `LowHealthFactor: 0.4`
  - `DestroyOnDeath: True`
  - `DestroyAfterDuration: 120`
  - `DisableDamageSCT: False`

- [ProjectM.DynamicallyWeakenAttackers]({{% relref "components/DynamicallyWeakenAttackers.md" %}})
  - `Multiplier: 0.8`
  - `MultiplierReductionFactorPerCrowdedness: 0.9`
  - `MaxPlayers: 5`

- [ProjectM.Immortal]({{% relref "components/Immortal.md" %}})
  - `IsImmortal: True`

- [ProjectM.LastTranslation]({{% relref "components/LastTranslation.md" %}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.Movement]({{% relref "components/Movement.md" %}})
  - `ForcePositionData: ProjectM.ForcePositionData ProjectM.ForcePositionData`
  - `MoveStopAbilityData: ProjectM.MoveStopAbilityData ProjectM.MoveStopAbilityData`
  - `MoveInput: Unity.Mathematics.float2 float2(0f, 0f)`
  - `LastNonZeroMoveInput: Unity.Mathematics.float2 float2(1f, 0f)`
  - `Speed: 3.6`
  - `AbilityCastSpeedMultiplier: 1`
  - `HasMoveStopData: False`

- [ProjectM.CollisionRadius]({{% relref "components/CollisionRadius.md" %}})
  - `Radius: 0.5`

- [ProjectM.MapCollision]({{% relref "components/MapCollision.md" %}})
  - `Radius: 0.4`
  - `CollidesAgainstMapFlags: ProjectM.Tiles.MapCollisionFlags CollideNormalMovement, CollideAirMovement`
  - `Result: ProjectM.MapCollisionResult ProjectM.MapCollisionResult`

- [ProjectM.Velocity]({{% relref "components/Velocity.md" %}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.SpawnTransform]({{% relref "components/SpawnTransform.md" %}})
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 0f)`

- [ProjectM.TargetDirection]({{% relref "components/TargetDirection.md" %}})
  - `ForcedDirection: float3(0f, 0f, 0f)`
  - `Direction: Unity.Mathematics.float3 float3(0f, 0f, 1f)`
  - `AimDirection: Unity.Mathematics.float3 float3(0f, 0f, 1f)`
  - `DefaultRotationSpeed: 500`
  - `RotationSpeed: 500`
  - `RotateTowardsMouse: False`
  - `ForceRotateTowardsMovement: False`
  - `CurrentCanRotate: True`
  - `PlayerControlsRotation: True`

- [ProjectM.Team]({{% relref "components/Team.md" %}})
  - `Value: 2`
  - `FactionIndex: 13`

- [ProjectM.TileBounds]({{% relref "components/TileBounds.md" %}})
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- [ProjectM.TileModelSpatialData]({{% relref "components/TileModelSpatialData.md" %}})
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- [ProjectM.TileData]({{% relref "components/TileData.md" %}})
  - `Data: Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob] Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob]`

- [ProjectM.UnitRespawnTime]({{% relref "components/UnitRespawnTime.md" %}})
  - `MaxRespawnTime: 5`
  - `MinRespawnTime: 3`

- [ProjectM.VBloodUnit]({{% relref "components/VBloodUnit.md" %}})
  - `CanBeTracked: True`
  - `OverrideLockedVBloodUnit: GUID Not Found`
  - `UnlocksTrophyOnFeed: ProjectM.Trophy None`
  - `UnlocksTrophyOnFeedBrutal: ProjectM.Trophy None`
  - `LastNonExploitTime: 0`

- [ProjectM.WoundedConstants]({{% relref "components/WoundedConstants.md" %}})
  - `HealthFactor: 0`
  - `WoundedTriggerSequenceGuid: SequenceGUID -1123441705`
  - `WoundedSequenceGuid: SequenceGUID 395723216`
  - `TriggerKnockbackOnWounded: False`
  - `KnockbackPower: ProjectM.KnockbackPower ProjectM.KnockbackPower`
  - `KnockbackDuration: 0.3`
  - `KnockbackRange: 0.5`
  - `WoundedKnockbackResistanceIndex: 6`

- [ProjectM.BuffableFlagState]({{% relref "components/BuffableFlagState.md" %}})
  - `Value: ProjectM.ModifiableLong ProjectM.ModifiableLong`

- [ProjectM.EntityCategory]({{% relref "components/EntityCategory.md" %}})
  - `MainCategoryInt: 0`
  - `UnitCategoryInt: 0`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 5`
  - `ResourceLevel: 0`

- [ProjectM.ApplyBuffOnSpawn]({{% relref "components/ApplyBuffOnSpawn.md" %}})
  - `Kind: ProjectM.SpawnBuffKind Default`
  - `SpawnTime: 0`

- [ProjectM.UnitLevel]({{% relref "components/UnitLevel.md" %}})
  - `Level: 79`
  - `HideLevel: False`

- [ProjectM.UnitLevelServerData]({{% relref "components/UnitLevelServerData.md" %}})
  - `HealthUnitBaseStatsTypeInt: 2`
  - `UnitBaseStatsTypeInt: 2`

- [ProjectM.Vision]({{% relref "components/Vision.md" %}})
  - `Range: 30`

- [ProjectM.EntityAimData]({{% relref "components/EntityAimData.md" %}})
  - `AimPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `AimPositionPlane: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `ProjectileAimPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.MoveVelocity]({{% relref "components/MoveVelocity.md" %}})
  - `MoveVelocityMagnitude: 0`
  - `ReferenceWalkingCurve: ProjectM.CurveReference ProjectM.CurveReference`

- [ProjectM.ResistanceData]({{% relref "components/ResistanceData.md" %}})
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

- [ProjectM.UnitStats]({{% relref "components/UnitStats.md" %}})
  - `PhysicalPower: 93.564255`
  - `SpellPower: 93.564255`
  - `ResourcePower: 49.920002`
  - `SiegePower: 19.800001`
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

- [ProjectM.AiMove_Shared]({{% relref "components/AiMove_Shared.md" %}})
  - `Waypoints: PathWaypoints PathWaypoints`

- [ProjectM.UnitSpawnData]({{% relref "components/UnitSpawnData.md" %}})
  - `HealthSettingsPrefabGuid: Unit_StatsSettings_Health_Default PrefabGuid(-1724763162)`
  - `SpellPowerSettingsPrefabGuid: Unit_StatsSettings_Spell_Default PrefabGuid(1644963370)`
  - `PhysicalPowerSettingsPrefabGuid: Unit_StatsSettings_Physical_Default PrefabGuid(2131874575)`
  - `SiegePowerSettingsPrefabGuid: Unit_StatsSettings_Siege_Default PrefabGuid(1476468719)`
  - `MaxHealthFactor: 1`
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

- [ProjectM.GenericCombatMovementData]({{% relref "components/GenericCombatMovementData.md" %}})
  - `MinDistance: 0`
  - `GoalDistanceInner: 10`
  - `GoalDistanceOuter: 10`
  - `MaxDistance: 12`
  - `MovePattern: 0`
  - `ForceLookAtTarget: 0`
  - `CircleCurveInRange: ProjectM.CurveReference ProjectM.CurveReference`
  - `CircleCurveOutOfRange: ProjectM.CurveReference ProjectM.CurveReference`

- [ProjectM.MiscAiGameplayData]({{% relref "components/MiscAiGameplayData.md" %}})
  - `StationaryWhenIdle: False`
  - `AlertAlliesOnDeath: True`
  - `IgnoresPathfindingLineOfSight: False`
  - `StopPatrol: False`

- [ProjectM.IsMinion]({{% relref "components/IsMinion.md" %}})
  - `Value: False`

- [ProjectM.Sequencer.ImpactMaterial]({{% relref "components/ImpactMaterial.md" %}})
  - `IntType: 4`
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, 0.5f)`
  - `PlayOnSelf: False`

- [ProjectM.Network.Networked]({{% relref "components/Networked.md" %}})
  - `CreateFrame: 0`

- [ProjectM.Network.NetworkedTimeout]({{% relref "components/NetworkedTimeout.md" %}})
  - `LastTimeSynced: 0`
  - `TimeoutAfter: 3`
  - `Enabled: True`

- [ProjectM.Network.UpToDateUserBitMask]({{% relref "components/UpToDateUserBitMask.md" %}})
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- [ProjectM.Network.FrameChanged]({{% relref "components/FrameChanged.md" %}})
  - `Value: -1`

- [ProjectM.Network.NetworkSnapshot]({{% relref "components/NetworkSnapshot.md" %}})
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_acijcbjbihb`

- [ProjectM.Behaviours.BehaviourTreeBinding]({{% relref "components/BehaviourTreeBinding.md" %}})
  - `PrefabGUID: BEH_Gloomrot_RailgunSergeant PrefabGuid(-1612217012)`

- [ProjectM.Behaviours.BehaviourTreeState]({{% relref "components/BehaviourTreeState.md" %}})
  - `Value: ProjectM.GenericEnemyState Initialize`

- [ProjectM.Behaviours.BehaviourTreeStateMetadata]({{% relref "components/BehaviourTreeStateMetadata.md" %}})
  - `PreviousState: ProjectM.GenericEnemyState Initialize`
  - `LastChangeTime: 0`

- [ProjectM.Tiles.TileModel]({{% relref "components/TileModel.md" %}})
  - `DisabledTileTypesInt: 0`

- [ProjectM.Hybrid.HybridModelSeed]({{% relref "components/HybridModelSeed.md" %}})
  - `Seed: 0`
  - `HasSetSeed: False`

- [ProjectM.Shared.DropTableOnDeath]({{% relref "components/DropTableOnDeath.md" %}})
  - `Dropped: False`
  - `CustomDropArc: DropItemSphere_VBlood PrefabGuid(1725779712)`
  - `MinRange: 3`
  - `MaxRange: 6`

- [Unity.Transforms.Rotation]({{% relref "components/Rotation.md" %}})
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation]({{% relref "components/Translation.md" %}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Physics.PhysicsCollider]({{% relref "components/PhysicsCollider.md" %}})
  - `Value: Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider] Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider]`

- [Unity.Physics.Systems.StaticPhysicsWorldBodyIndex]({{% relref "components/StaticPhysicsWorldBodyIndex.md" %}})
  - `WorldBodyIndex: -1`

- [ProjectM.AiDebugDraw]({{% relref "components/AiDebugDraw.md" %}})
  - `CurrentTarget: Unity.Mathematics.float2 float2(0f, 0f)`
  - `AggroRadius: 0`

- [ProjectM.Pathfinding.Pathfinder]({{% relref "components/Pathfinder.md" %}})
  - `TerrainData: ProjectM.Pathfinding.PathfindingTerrainData ProjectM.Pathfinding.PathfindingTerrainData`
  - `MaxExpansions: 15000`
  - `UseSmoothing: True`

- [Unity.Transforms.LocalToWorld]({{% relref "components/LocalToWorld.md" %}})
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform]({{% relref "components/LocalTransform.md" %}})
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [ProjectM.TeamReference]({{% relref "components/TeamReference.md" %}})
  - `Value: ModifiableEntity(0:0)`

- [ProjectM.TilePosition]({{% relref "components/TilePosition.md" %}})
  - `Tile: Unity.Mathematics.int2 int2(0, 0)`
  - `TileRotation: ProjectM.Tiles.TileRotation None`
  - `CompressedHeight: 0`

- [ProjectM.Network.NetworkId]({{% relref "components/NetworkId.md" %}})
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 2054432370`

- [ProjectM.AggroBuffer]({{% relref "components/AggroBuffer.md" %}})

- [ProjectM.AlertBuffer]({{% relref "components/AlertBuffer.md" %}})

- [ProjectM.AggroCandidateBufferElement]({{% relref "components/AggroCandidateBufferElement.md" %}})

- [ProjectM.AggroDamageHistoryBufferElement]({{% relref "components/AggroDamageHistoryBufferElement.md" %}})

- [ProjectM.ExternalAggroBufferElement]({{% relref "components/ExternalAggroBufferElement.md" %}})

- [ProjectM.AbilityGroupSlotBuffer]({{% relref "components/AbilityGroupSlotBuffer.md" %}})

- **[0]**
  - `BaseAbilityGroupOnSlot: AB_Gloomrot_RailgunSergeant_EnergyBurst_AbilityGroup PrefabGuid(-1187406748)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[1]**
  - `BaseAbilityGroupOnSlot: AB_Gloomrot_RailgunSergeant_CloakField_AbilityGroup PrefabGuid(1623874343)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[2]**
  - `BaseAbilityGroupOnSlot: AB_Gloomrot_RailgunSergeant_WideShot_AbilityGroup PrefabGuid(-900859351)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[3]**
  - `BaseAbilityGroupOnSlot: AB_Gloomrot_RailgunSergeant_Warp_AbilityGroup PrefabGuid(-1308520526)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[4]**
  - `BaseAbilityGroupOnSlot: AB_Gloomrot_RailgunSergeant_CloneWarpRight_AbilityGroup PrefabGuid(-1220318405)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[5]**
  - `BaseAbilityGroupOnSlot: AB_Gloomrot_RailgunSergeant_WarpInit_AbilityGroup PrefabGuid(-1717533555)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[6]**
  - `BaseAbilityGroupOnSlot: AB_Gloomrot_RailgunSergeant_HomingOrb_AbilityGroup PrefabGuid(-1733128159)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[7]**
  - `BaseAbilityGroupOnSlot: AB_Gloomrot_RailgunSergeant_LightningWall_AbilityGroup PrefabGuid(978386280)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[8]**
  - `BaseAbilityGroupOnSlot: AB_Gloomrot_RailgunSergeant_CallAdds_AbilityGroup PrefabGuid(-948735477)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: Networ`
