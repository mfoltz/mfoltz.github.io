---
title: CHAR_Poloma_VBlood
guid: -484556888
categories: ['All', 'CHAR']
nav_exclude: true
search_exclude: true
layout: default
---

# CHAR_Poloma_VBlood

**GUID:** `-484556888`

**Categories:** [All](/prefabs/All), [CHAR](/prefabs/CHAR)

## Components

- **ProjectM.IdleInteractor**
  - `NextInteractionTime: 0`
  - `Blob: Unity.Entities.BlobAssetReference`1[ProjectM.IdleInteractor+BlobData] Unity.Entities.BlobAssetReference`1[ProjectM.IdleInteractor+BlobData]`
  - `CurrentInteraction: ProjectM.IdleInteractor+CurrentInteractionData ProjectM.IdleInteractor+CurrentInteractionData`

- [ProjectM.AbilityBar_Server](/components/AbilityBar_Server)
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

- [ProjectM.AbilityBar_Shared](/components/AbilityBar_Shared)
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

- [ProjectM.AggroConsumer](/components/AggroConsumer)
  - `ProximityRadius: 35`
  - `ProximityWeight: 1`
  - `DamageWeight: 10`
  - `RemoveDelay: 8`
  - `TargetSwitchThreshold: 1.25`
  - `AlertDecayPerSecond: 0.5`
  - `PreCombatPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `MaxDistanceFromPreCombatPosition: 40`
  - `AggroAppliesCombatBuff: True`
  - `CombatAreaRelocationDistance: 0`
  - `AggroTarget: NetworkedEntity(0:0)`
  - `AlertTarget: NetworkedEntity(0:0)`
  - `AggroReason: ProjectM.AggroReason Provocation`
  - `DeaggroReason: ProjectM.DeaggroReason InvalidTarget`
  - `Active: True`
  - `RecieveAlerts: True`

- [ProjectM.Follower](/components/Follower)
  - `Followed: ModifiableEntity(0:0)`
  - `Offset: Unity.Mathematics.float2 float2(0f, 0f)`
  - `LastOffsetUpdateTime: -1.7976931348623157E+308`
  - `ModeModifiable: 1`
  - `Stationary: False`
  - `InheritRotationWhenStationary: False`

- [ProjectM.EntityOwner](/components/EntityOwner)
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator](/components/EntityCreator)
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.BuffResistances](/components/BuffResistances)
  - `SettingsEntity: ModifiableEntity(0:0)`
  - `InitialSettingGuid: BuffResistance_UberMob PrefabGuid(1067748088)`

- [ProjectM.EntityInput](/components/EntityInput)
  - `Movement: Unity.Mathematics.float2 float2(0f, 0f)`
  - `AimPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `AimPositionPlane: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `AimDirection: Unity.Mathematics.float3 float3(0f, 0f, 1f)`
  - `AimLength: 0`
  - `HoveredEntity: Entity(0:0)`
  - `HoveredEntityNetworkId: ProjectM.Network.NetworkId (None)`
  - `ProjectileAimType: ProjectM.AimDirectionType Planar`
  - `State: ProjectM.SyncedInputState ProjectM.SyncedInputState`

- [ProjectM.AiMove_Server](/components/AiMove_Server)
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
  - `CircleChangeDirectionFrequencyMin: 4`
  - `CircleChangeDirectionFrequencyMax: 6`
  - `TargettingMode: ProjectM.AiTargettingMode None`
  - `MovePattern: ProjectM.AiMovePattern Approach`
  - `ForceLookAtTarget: ProjectM.AiForceLookAtTarget None`
  - `SeekOutwards: False`
  - `CircleClockwise: False`
  - `FreezeRotationWhenStationary: False`
  - `IsSeekingGoalPosition: False`
  - `OnlyChangeCircleDirectionOnCast: True`

- [ProjectM.Behaviours.BehaviourTreeInstance](/components/BehaviourTreeInstance)
  - `TreeEntity: Entity(0:0)`
  - `ExpectedTreeEntity: ModifiableEntity(0:0)`

- [ProjectM.Gameplay.Scripting.Script_ApplyBuffUnderHealthThreshold_DataServer](/components/Script_ApplyBuffUnderHealthThreshold_DataServer)
  - `HealthFactor: 0`
  - `NewBuffEntity: Buff_Poloma_VBlood_Downed PrefabGuid(1120754048)`
  - `TriggerSequence: SequenceGUID 420611259`
  - `OnDamageTakenListener: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`
  - `ThresholdMet: False`
  - `DontTriggerOnDots: False`
  - `DontTriggerInFlight: False`

- [ProjectM.Pathfinding.LastPathRequest](/components/LastPathRequest)
  - `PathRequest: ProjectM.Pathfinding.PathRequest ProjectM.Pathfinding.PathRequest`
  - `HasLastPathRequest: False`

- [ProjectM.CombatMusicSource_Server](/components/CombatMusicSource_Server)
  - `Active: True`

- [ProjectM.CastleAreaRequirement](/components/CastleAreaRequirement)
  - `RequirementType: ProjectM.CastleBuilding.Placement.CastleAreaRequirementType PlaceableInNeutralArea`
  - `BlockPlacementOnRoads: False`
  - `AllowPlaceInObjectsInRepairState: False`
  - `AllowTilesStickingOutOfTerritory: False`

- [ProjectM.CastOptionsUser](/components/CastOptionsUser)
  - `CastOptionsPrefab: ModifiablePrefabGUID PrefabGuid(2047639378)`

- [ProjectM.Interactable](/components/Interactable)
  - `CurrentTargetSequenceGuid: SequenceGUID 0`
  - `IgnoreLineOfSight: False`
  - `IgnoreBlockInteract: False`
  - `UseInteractAbilityName: True`
  - `Disabled: False`

- [ProjectM.InteractedUpon](/components/InteractedUpon)
  - `Interacting: False`
  - `BlockBuildingMovement: False`
  - `BlockBuildingDisassemble: False`

- [ProjectM.TravelToTargetRadius](/components/TravelToTargetRadius)
  - `Radius: 0.5`

- [ProjectM.DynamicCollision](/components/DynamicCollision)
  - `AgainstUnits: ProjectM.DynamicCollisionSettings ProjectM.DynamicCollisionSettings`
  - `AgainstPlayers: ProjectM.DynamicCollisionSettings ProjectM.DynamicCollisionSettings`
  - `NetworkMultiplier: 1`
  - `NetworkDirection: Unity.Mathematics.float2 float2(0f, 0f)`
  - `Immobile: False`

- [ProjectM.Height](/components/Height)
  - `LastPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Value: 0`
  - `ServerHeightLevel: 0`

- [ProjectM.AoETargetImportance](/components/AoETargetImportance)
  - `Importance: 2`

- [ProjectM.Torture](/components/Torture)
  - `TortureModifier: 1`
  - `TorturePerDamage: 0.5`

- [ProjectM.IsSpellControlled](/components/IsSpellControlled)
  - `MovementControlled: False`
  - `RotationControlled: False`

- [ProjectM.Network.NetworkInterpolated_Shared](/components/NetworkInterpolated_Shared)
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

- [ProjectM.AbilityBarInitializationState](/components/AbilityBarInitializationState)
  - `AbilityGroupSlotsInitialized: False`

- [ProjectM.Aggroable](/components/Aggroable)
  - `DistanceFactor: 1`
  - `AggroFactor: 1`
  - `Value: True`

- [ProjectM.GainAggroByAlert](/components/GainAggroByAlert)
  - `AlertThreshold: 3`

- [ProjectM.GainAggroByVicinity](/components/GainAggroByVicinity)
  - `Value: ProjectM.AggroData ProjectM.AggroData`

- [ProjectM.GainAlertByVicinity](/components/GainAlertByVicinity)
  - `Value: ProjectM.AggroData ProjectM.AggroData`
  - `AggregatedCircleRadius: 0`
  - `AggregatedConeRadius: 0`

- [ProjectM.AggroModifiers](/components/AggroModifiers)
  - `ConeRadiusFactor: 1`
  - `CircleRadiusFactor: 1`

- [ProjectM.AlertModifiers](/components/AlertModifiers)
  - `ConeRadiusFactor: 1`
  - `CircleRadiusFactor: 1`

- [ProjectM.AggroDamageHistoryConfig](/components/AggroDamageHistoryConfig)
  - `StorageTimeSeconds: 5`

- [ProjectM.AiPrioritization_Data](/components/AiPrioritization_Data)
  - `UltraHighPriority: True`

- [ProjectM.AiPrioritization_State](/components/AiPrioritization_State)
  - `AccumulatedDeltaTime: 0`
  - `AccumulatedPriority: 0`
  - `Updated: False`

- [ProjectM.AiMoveSpeeds](/components/AiMoveSpeeds)
  - `Walk: 1.2`
  - `Run: 3.75`
  - `Circle: 3.75`
  - `Return: 4.5`

- [ProjectM.CastHistoryData](/components/CastHistoryData)
  - `StorageTimeSeconds: 900`

- [ProjectM.FactionReference](/components/FactionReference)
  - `FactionGuid: ModifiablePrefabGUID PrefabGuid(1597367490)`

- [ProjectM.MinionMaster](/components/MinionMaster)
  - `TotalMaxMinions: 8`
  - `MinionSpawnsThisFrame: 0`

- [ProjectM.BloodConsumeSource](/components/BloodConsumeSource)
  - `ConstantData: Unity.Entities.BlobAssetReference`1[ProjectM.BloodConsumeSourceBlob] Unity.Entities.BlobAssetReference`1[ProjectM.BloodConsumeSourceBlob]`
  - `BloodQuality: -1`
  - `UnitBloodType: ModifiablePrefabGUID PrefabGuid(-338774148)`
  - `OverrideBloodCurve: ProjectM.CurveReference ProjectM.CurveReference`
  - `ForceBadBloodQuality: False`
  - `BloodQualityBuffRequirement: 50`
  - `CanBeConsumed: True`

- [ProjectM.VBloodConsumeSource](/components/VBloodConsumeSource)
  - `Source: CHAR_Poloma_VBlood PrefabGuid(-484556888)`
  - `JournalCategory: ProjectM.JournalCategoryType None`
  - `QuestFlavorTextOverride: 00000000-0000-0000-0000-000000000000 - <Localization not found!>`
  - `TooltipGUID: JournalAsset_VBlood_Ability PrefabGuid(1808963981)`
  - `SpellSchool: IllusionSpellSchoolAsset PrefabGuid(-526263322)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier1`
  - `SpellSchoolPoints: 1`
  - `PassivePoints: 0`

- [ProjectM.PlacementDestroyData](/components/PlacementDestroyData)
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- [ProjectM.DestroyData](/components/DestroyData)
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState)
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Buffable](/components/Buffable)
  - `KnockbackResistanceIndex: 6`
  - `UniqueBuffCategories: ProjectM.BuffCategoryFlag Travel, Shapeshift`

- [ProjectM.Hideable](/components/Hideable)
  - `IsHidden: False`
  - `Visibility: 1`
  - `AdditionalHideRangeSq: 0`
  - `IgnoreLoS: False`

- [ProjectM.Stealthable](/components/Stealthable)
  - `IsStealthed: False`
  - `AlwaysShowVFX: False`
  - `StealthBushId: -1`
  - `ModelInvisible: True`

- [ProjectM.Health](/components/Health)
  - `MaxHealth: 0`
  - `TimeOfDeath: 0`
  - `Value: 0`
  - `MaxRecoveryHealth: 1`
  - `IsDead: False`

- [ProjectM.HealthConstants](/components/HealthConstants)
  - `LowHealthFactor: 0.4`
  - `DestroyOnDeath: True`
  - `DestroyAfterDuration: 120`
  - `DisableDamageSCT: False`

- [ProjectM.DynamicallyWeakenAttackers](/components/DynamicallyWeakenAttackers)
  - `Multiplier: 0.8`
  - `MultiplierReductionFactorPerCrowdedness: 0.9`
  - `MaxPlayers: 5`

- [ProjectM.Immortal](/components/Immortal)
  - `IsImmortal: True`

- [ProjectM.LastTranslation](/components/LastTranslation)
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.Movement](/components/Movement)
  - `ForcePositionData: ProjectM.ForcePositionData ProjectM.ForcePositionData`
  - `MoveStopAbilityData: ProjectM.MoveStopAbilityData ProjectM.MoveStopAbilityData`
  - `MoveInput: Unity.Mathematics.float2 float2(0f, 0f)`
  - `LastNonZeroMoveInput: Unity.Mathematics.float2 float2(1f, 0f)`
  - `Speed: 3`
  - `AbilityCastSpeedMultiplier: 1`
  - `HasMoveStopData: False`

- [ProjectM.CollisionRadius](/components/CollisionRadius)
  - `Radius: 0.6`

- [ProjectM.MapCollision](/components/MapCollision)
  - `Radius: 0.4`
  - `CollidesAgainstMapFlags: ProjectM.Tiles.MapCollisionFlags CollideNormalMovement, CollideAirMovement`
  - `Result: ProjectM.MapCollisionResult ProjectM.MapCollisionResult`

- [ProjectM.Velocity](/components/Velocity)
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.SpawnTransform](/components/SpawnTransform)
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 0f)`

- [ProjectM.TargetDirection](/components/TargetDirection)
  - `ForcedDirection: float3(0f, 0f, 0f)`
  - `Direction: Unity.Mathematics.float3 float3(0f, 0f, 1f)`
  - `AimDirection: Unity.Mathematics.float3 float3(0f, 0f, 1f)`
  - `DefaultRotationSpeed: 500`
  - `RotationSpeed: 500`
  - `RotateTowardsMouse: False`
  - `ForceRotateTowardsMovement: False`
  - `CurrentCanRotate: True`
  - `PlayerControlsRotation: True`

- [ProjectM.Team](/components/Team)
  - `Value: 2`
  - `FactionIndex: 19`

- [ProjectM.TileBounds](/components/TileBounds)
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- [ProjectM.TileModelSpatialData](/components/TileModelSpatialData)
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- [ProjectM.TileData](/components/TileData)
  - `Data: Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob] Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob]`

- [ProjectM.UnitRespawnTime](/components/UnitRespawnTime)
  - `MaxRespawnTime: 5`
  - `MinRespawnTime: 3`

- [ProjectM.VBloodUnit](/components/VBloodUnit)
  - `CanBeTracked: True`
  - `OverrideLockedVBloodUnit: GUID Not Found`
  - `UnlocksTrophyOnFeed: ProjectM.Trophy None`
  - `UnlocksTrophyOnFeedBrutal: ProjectM.Trophy None`
  - `LastNonExploitTime: 0`

- [ProjectM.WoundedConstants](/components/WoundedConstants)
  - `HealthFactor: 0`
  - `WoundedTriggerSequenceGuid: SequenceGUID -1123441705`
  - `WoundedSequenceGuid: SequenceGUID 395723216`
  - `TriggerKnockbackOnWounded: False`
  - `KnockbackPower: ProjectM.KnockbackPower ProjectM.KnockbackPower`
  - `KnockbackDuration: 0.3`
  - `KnockbackRange: 0.5`
  - `WoundedKnockbackResistanceIndex: 6`

- [ProjectM.BuffableFlagState](/components/BuffableFlagState)
  - `Value: ProjectM.ModifiableLong ProjectM.ModifiableLong`

- [ProjectM.EntityCategory](/components/EntityCategory)
  - `MainCategoryInt: 0`
  - `UnitCategoryInt: 0`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 5`
  - `ResourceLevel: 0`

- [ProjectM.ApplyBuffOnSpawn](/components/ApplyBuffOnSpawn)
  - `Kind: ProjectM.SpawnBuffKind Default`
  - `SpawnTime: 0`

- [ProjectM.UnitLevel](/components/UnitLevel)
  - `Level: 35`
  - `HideLevel: False`

- [ProjectM.UnitLevelServerData](/components/UnitLevelServerData)
  - `HealthUnitBaseStatsTypeInt: 2`
  - `UnitBaseStatsTypeInt: 2`

- [ProjectM.Vision](/components/Vision)
  - `Range: 30`

- [ProjectM.EntityAimData](/components/EntityAimData)
  - `AimPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `AimPositionPlane: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `ProjectileAimPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.MoveVelocity](/components/MoveVelocity)
  - `MoveVelocityMagnitude: 0`
  - `ReferenceWalkingCurve: ProjectM.CurveReference ProjectM.CurveReference`

- [ProjectM.ResistanceData](/components/ResistanceData)
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

- [ProjectM.UnitStats](/components/UnitStats)
  - `PhysicalPower: 37.483562`
  - `SpellPower: 37.483562`
  - `ResourcePower: 28.8`
  - `SiegePower: 11`
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

- [ProjectM.AiMove_Shared](/components/AiMove_Shared)
  - `Waypoints: PathWaypoints PathWaypoints`

- [ProjectM.UnitSpawnData](/components/UnitSpawnData)
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

- [ProjectM.GenericCombatMovementData](/components/GenericCombatMovementData)
  - `MinDistance: 3`
  - `GoalDistanceInner: 4.5`
  - `GoalDistanceOuter: 4.5`
  - `MaxDistance: 20`
  - `MovePattern: 1`
  - `ForceLookAtTarget: 0`
  - `CircleCurveInRange: ProjectM.CurveReference ProjectM.CurveReference`
  - `CircleCurveOutOfRange: ProjectM.CurveReference ProjectM.CurveReference`

- [ProjectM.MiscAiGameplayData](/components/MiscAiGameplayData)
  - `StationaryWhenIdle: False`
  - `AlertAlliesOnDeath: True`
  - `IgnoresPathfindingLineOfSight: False`
  - `StopPatrol: False`

- [ProjectM.IsMinion](/components/IsMinion)
  - `Value: False`

- [ProjectM.Sequencer.ImpactMaterial](/components/ImpactMaterial)
  - `IntType: 4`
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, 0.5f)`
  - `PlayOnSelf: False`

- [ProjectM.Network.Networked](/components/Networked)
  - `CreateFrame: 0`

- [ProjectM.Network.NetworkedTimeout](/components/NetworkedTimeout)
  - `LastTimeSynced: 0`
  - `TimeoutAfter: 3`
  - `Enabled: True`

- [ProjectM.Network.UpToDateUserBitMask](/components/UpToDateUserBitMask)
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- **00000000000000000000000000000000**

- [ProjectM.Network.FrameChanged](/components/FrameChanged)
  - `Value: -1`

- [ProjectM.Network.NetworkSnapshot](/components/NetworkSnapshot)
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_acijcbjbihb`

- [ProjectM.Behaviours.BehaviourTreeBinding](/components/BehaviourTreeBinding)
  - `PrefabGUID: BEH_Poloma_VBlood PrefabGuid(-1566350035)`

- [ProjectM.Behaviours.BehaviourTreeState](/components/BehaviourTreeState)
  - `Value: ProjectM.GenericEnemyState Initialize`

- [ProjectM.Behaviours.BehaviourTreeStateMetadata](/components/BehaviourTreeStateMetadata)
  - `PreviousState: ProjectM.GenericEnemyState Initialize`
  - `LastChangeTime: 0`

- [ProjectM.Tiles.TileModel](/components/TileModel)
  - `DisabledTileTypesInt: 0`

- [ProjectM.Hybrid.HybridModelSeed](/components/HybridModelSeed)
  - `Seed: 0`
  - `HasSetSeed: False`

- [ProjectM.Shared.DropTableOnDeath](/components/DropTableOnDeath)
  - `Dropped: False`
  - `CustomDropArc: DropItemSphere_VBlood PrefabGuid(1725779712)`
  - `MinRange: 3`
  - `MaxRange: 6`

- [Unity.Transforms.Rotation](/components/Rotation)
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation](/components/Translation)
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Unity.Physics.PhysicsCollider](/components/PhysicsCollider)
  - `Value: Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider] Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider]`

- [Unity.Physics.Systems.StaticPhysicsWorldBodyIndex](/components/StaticPhysicsWorldBodyIndex)
  - `WorldBodyIndex: -1`

- [ProjectM.AiDebugDraw](/components/AiDebugDraw)
  - `CurrentTarget: Unity.Mathematics.float2 float2(0f, 0f)`
  - `AggroRadius: 0`

- [ProjectM.Pathfinding.Pathfinder](/components/Pathfinder)
  - `TerrainData: ProjectM.Pathfinding.PathfindingTerrainData ProjectM.Pathfinding.PathfindingTerrainData`
  - `MaxExpansions: 15000`
  - `UseSmoothing: True`

- [Unity.Transforms.LocalToWorld](/components/LocalToWorld)
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform](/components/LocalTransform)
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [ProjectM.TeamReference](/components/TeamReference)
  - `Value: ModifiableEntity(0:0)`

- [ProjectM.TilePosition](/components/TilePosition)
  - `Tile: Unity.Mathematics.int2 int2(0, 0)`
  - `TileRotation: ProjectM.Tiles.TileRotation None`
  - `CompressedHeight: 0`

- [ProjectM.Network.NetworkId](/components/NetworkId)
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID)
  - `_Value: -484556888`

- [ProjectM.AggroBuffer](/components/AggroBuffer)

- [ProjectM.AlertBuffer](/components/AlertBuffer)

- [ProjectM.AggroCandidateBufferElement](/components/AggroCandidateBufferElement)

- [ProjectM.AggroDamageHistoryBufferElement](/components/AggroDamageHistoryBufferElement)

- [ProjectM.ExternalAggroBufferElement](/components/ExternalAggroBufferElement)

- [ProjectM.AbilityGroupSlotBuffer](/components/AbilityGroupSlotBuffer)

- **[0]**
  - `BaseAbilityGroupOnSlot: AB_Poloma_Projectile_Group PrefabGuid(-914903899)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[1]**
  - `BaseAbilityGroupOnSlot: AB_Poloma_Wolf_AbilityGroup PrefabGuid(-321651703)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[2]**
  - `BaseAbilityGroupOnSlot: AB_Poloma_Otherside_AbilityGroup PrefabGuid(1795809188)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[3]**
  - `BaseAbilityGroupOnSlot: AB_Poloma_SpiritRift_Group PrefabGuid(-939006306)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[4]**
  - `BaseAbilityGroupOnSlot: AB_Poloma_Pixie_Group PrefabGuid(-1036943907)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[5]**
  - `BaseAbilityGroupOnSlot: AB_Poloma_Otherside_AbilityGroup_Ally PrefabGuid(2033547790)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[6]**
  - `BaseAbilityGroupOnSlot: AB_Poloma_Hard_Projectile_Group PrefabGuid(-595482115)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- [ProjectM.BuffBuffer](/components/BuffBuffer)

- [ProjectM.EntitiesInView_Server](/components/EntitiesInView_Server)

- [ProjectM.Behaviours.BehaviourTreeStateActiveBuffsBuffer](/components/BehaviourTreeStateActiveBuffsBuffer)

- [ProjectM.InteractAbilityBuffer](/components/InteractAbilityBuffer)

- **[0]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab ��.��   `

- **C���  �**
  - `Component ��           Hp��<  `
  - `ConditionalElements`
  - `Ability: AB_FeedBoss_01_Initiate_AbilityGroup PrefabGuid(-948311829)`
  - `Importance: 3`
  - `HideInteractHUDWhileCasting: False`

- [ProjectM.CreateGameplayEventsOnSpawn](/components/CreateGameplayEventsOnSpawn)

- **[0]**
  - `EventId: Local - -1628185855`
  - `Target: ProjectM.GameplayEventTarget Self`

- [ProjectM.ApplyBuffOnGameplayEvent](/components/ApplyBuffOnGameplayEvent)

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

- [ProjectM.GameplayEventIdMapping](/components/GameplayEventIdMapping)

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

- [ProjectM.CastHistoryBufferElement](/components/CastHistoryBufferElement)

- [ProjectM.MaxMinionsPerPlayerElement](/components/MaxMinionsPerPlayerElement)

- **[0]**
  - `Value: 2`

- **[1]**
  - `Value: 4`

- **[2]**
  - `Value: 6`

- **[3]**
  - `Value: 8`

- [ProjectM.VBloodUnlockTechBuffer](/components/VBloodUnlockTechBuffer)

- **[0]**
  - `Guid: Tech_Collection_VBlood_T04_Poloma PrefabGuid(-1138769053)`

- **[1]**
  - `Guid: Tech_Collection_VBlood_T04_PolomaGardenFloors PrefabGuid(196684992)`

- **[2]**
  - `Guid: Tech_Collection_Garden_Hedges_T02 PrefabGuid(1158190765)`

- **[3]**
  - `Guid: Tech_Collection_VBlood_T04_PolomaPlantersExterior PrefabGuid(35536792)`

- **[4]**
  - `Guid: Tech_Collection_VBlood_T04_PolomaPlantersInterior PrefabGuid(6233001)`

- [ProjectM.SpawnBuffElement](/components/SpawnBuffElement)

- **[0]**
  - `Kind: ProjectM.SpawnBuffKind Default`
  - `Buff: Buff_General_Spawn_VBlood_EarlyGame PrefabGuid(-703593639)`
  - `OriginPositionFactor: 0`
  - `Weight: 1`

- [ProjectM.GameplayEventListeners](/components/GameplayEventListeners)

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - -1628185855`

- [ProjectM.Network.NetSnapshot](/components/NetSnapshot)

- **[0]**
  - `Value: 168`

- **[1]**
  - `Value: 63`

- **[2]**
  - `Value: 30`

- **[3]**
  - `Value: 227`

- **[4]**
  - `Value: 87`

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
  - `Value: 128`

- **[11]**
  - `Value: 63`

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

- **[80]**
  - `Value: 0`

- **[81]**
  - `Value: 0`

- **[82]**
  - `Value: 128`

- **[83]**
  - `Value: 63`

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
  - `Value: 0`

- **[96]**
  - `Value: 0`

- **[97]**
  - `Value: 0`

- **[98]**
  - `Value: 0`

- **[99]**
  - `Value: 0`

- **[100]**
  - `Value: 0`

- **[101]**
  - `Value: 0`

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
  - `Value: 0`

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

- **[128]**
  - `Value: 0`

- **[129]**
  - `Value: 0`

- **[130]**
  - `Value: 0`

- **[131]**
  - `Value: 0`

- **[132]**
  - `Value: 0`

- **[133]**
  - `Value: 0`

- **[134]**
  - `Value: 0`

- **[135]**
  - `Value: 0`

- **[136]**
  - `Value: 0`

- **[137]**
  - `Value: 0`

- **[138]**
  - `Value: 0`

- **[139]**
  - `Value: 0`

- **[140]**
  - `Value: 0`

- **[141]**
  - `Value: 0`

- **[142]**
  - `Value: 0`

- **[143]**
  - `Value: 0`

- **[144]**
  - `Value: 0`

- **[145]**
  - `Value: 0`

- **[146]**
  - `Value: 0`

- **[147]**
  - `Value: 0`

- **[148]**
  - `Value: 0`

- **[149]**
  - `Value: 0`

- **[150]**
  - `Value: 0`

- **[151]**
  - `Value: 0`

- **[152]**
  - `Value: 0`

- **[153]**
  - `Value: 0`

- **[154]**
  - `Value: 0`

- **[155]**
  - `Value: 0`

- **[156]**
  - `Value: 0`

- **[157]**
  - `Value: 0`

- **[158]**
  - `Value: 0`

- **[159]**
  - `Value: 0`

- **[160]**
  - `Value: 0`

- **[161]**
  - `Value: 0`

- **[162]**
  - `Value: 0`

- **[163]**
  - `Value: 0`

- **[164]**
  - `Value: 0`

- **[165]**
  - `Value: 128`

- **[166]**
  - `Value: 191`

- **[167]**
  - `Value: 1`

- **[168]**
  - `Value: 124`

- **[169]**
  - `Value: 183`

- **[170]**
  - `Value: 206`

- **[171]**
  - `Value: 235`

- **[172]**
  - `Value: 0`

- **[173]**
  - `Value: 0`

- **[174]**
  - `Value: 0`

- **[175]**
  - `Value: 0`

- **[176]**
  - `Value: 0`

- **[177]**
  - `Value: 0`

- **[178]**
  - `Value: 0`

- **[179]**
  - `Value: 0`

- **[180]**
  - `Value: 0`

- **[181]**
  - `Value: 0`

- **[182]**
  - `Value: 128`

- **[183]**
  - `Value: 62`

- **[184]**
  - `Value: 0`

- **[185]**
  - `Value: 0`

- **[186]**
  - `Value: 64`

- **[187]**
  - `Value: 64`

- **[188]**
  - `Value: 0`

- **[189]**
  - `Value: 0`

- **[190]**
  - `Value: 192`

- **[191]**
  - `Value: 63`

- **[192]**
  - `Value: 0`

- **[193]**
  - `Value: 0`

- **[194]**
  - `Value: 0`

- **[195]**
  - `Value: 0`

- **[196]**
  - `Value: 205`

- **[197]**
  - `Value: 204`

- **[198]**
  - `Value: 76`

- **[199]**
  - `Value: 62`

- **[200]**
  - `Value: 0`

- **[201]**
  - `Value: 0`

- **[202]**
  - `Value: 0`

- **[203]**
  - `Value: 0`

- **[204]**
  - `Value: 205`

- **[205]**
  - `Value: 204`

- **[206]**
  - `Value: 204`

- **[207]**
  - `Value: 62`

- **[208]**
  - `Value: 0`

- **[209]**
  - `Value: 0`

- **[210]**
  - `Value: 0`

- **[211]**
  - `Value: 0`

- **[212]**
  - `Value: 0`

- **[213]**
  - `Value: 0`

- **[214]**
  - `Value: 0`

- **[215]**
  - `Value: 128`

- **[216]**
  - `Value: 63`

- **[217]**
  - `Value: 0`

- **[218]**
  - `Value: 0`

- **[219]**
  - `Value: 0`

- **[220]**
  - `Value: 0`

- **[221]**
  - `Value: 0`

- **[222]**
  - `Value: 0`

- **[223]**
  - `Value: 0`

- **[224]**
  - `Value: 0`

- **[225]**
  - `Value: 0`

- **[226]**
  - `Value: 0`

- **[227]**
  - `Value: 0`

- **[228]**
  - `Value: 0`

- **[229]**
  - `Value: 0`

- **[230]**
  - `Value: 0`

- **[231]**
  - `Value: 0`

- **[232]**
  - `Value: 0`

- **[233]**
  - `Value: 0`

- **[234]**
  - `Value: 0`

- **[235]**
  - `Value: 0`

- **[236]**
  - `Value: 0`

- **[237]**
  - `Value: 0`

- **[238]**
  - `Value: 0`

- **[239]**
  - `Value: 64`

- **[240]**
  - `Value: 64`

- **[241]**
  - `Value: 0`

- **[242]**
  - `Value: 0`

- **[243]**
  - `Value: 0`

- **[244]**
  - `Value: 0`

- **[245]**
  - `Value: 0`

- **[246]**
  - `Value: 0`

- **[247]**
  - `Value: 0`

- **[248]**
  - `Value: 0`

- **[249]**
  - `Value: 0`

- **[250]**
  - `Value: 0`

- **[251]**
  - `Value: 0`

- **[252]**
  - `Value: 0`

- **[253]**
  - `Value: 0`

- **[254]**
  - `Value: 0`

- **[255]**
  - `Value: 0`

- **[256]**
  - `Value: 0`

- **[257]**
  - `Value: 0`

- **[258]**
  - `Value: 0`

- **[259]**
  - `Value: 0`

- **[260]**
  - `Value: 0`

- **[261]**
  - `Value: 0`

- **[262]**
  - `Value: 0`

- **[263]**
  - `Value: 0`

- **[264]**
  - `Value: 0`

- **[265]**
  - `Value: 0`

- **[266]**
  - `Value: 0`

- **[267]**
  - `Value: 0`

- **[268]**
  - `Value: 0`

- **[269]**
  - `Value: 0`

- **[270]**
  - `Value: 0`

- **[271]**
  - `Value: 0`

- **[272]**
  - `Value: 0`

- **[273]**
  - `Value: 0`

- **[274]**
  - `Value: 0`

- **[275]**
  - `Value: 0`

- **[276]**
  - `Value: 0`

- **[277]**
  - `Value: 0`

- **[278]**
  - `Value: 0`

- **[279]**
  - `Value: 0`

- **[280]**
  - `Value: 0`

- **[281]**
  - `Value: 0`

- **[282]**
  - `Value: 0`

- **[283]**
  - `Value: 0`

- **[284]**
  - `Value: 0`

- **[285]**
  - `Value: 0`

- **[286]**
  - `Value: 0`

- **[287]**
  - `Value: 0`

- **[288]**
  - `Value: 0`

- **[289]**
  - `Value: 0`

- **[290]**
  - `Value: 0`

- **[291]**
  - `Value: 0`

- **[292]**
  - `Value: 0`

- **[293]**
  - `Value: 0`

- **[294]**
  - `Value: 0`

- **[295]**
  - `Value: 0`

- **[296]**
  - `Value: 0`

- **[297]**
  - `Value: 1`

- **[298]**
  - `Value: 255`

- **[299]**
  - `Value: 255`

- **360 total elements but only showing the first 36**

- [ProjectM.Network.SnapshotFrameChangedBuffer](/components/SnapshotFrameChangedBuffer)

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

- **[29]**
  - `Value: -1`

- **[30]**
  - `Value: -1`

- **[31]**
  - `Value: -1`

- **[32]**
  - `Value: -1`

- **[33]**
  - `Value: -1`

- **[34]**
  - `Value: -1`

- **[35]**
  - `Value: -1`

- **[36]**
  - `Value: -1`

- **[37]**
  - `Value: -1`

- **[38]**
  - `Value: -1`

- **[39]**
  - `Value: -1`

- **[40]**
  - `Value: -1`

- **[41]**
  - `Value: -1`

- **[42]**
  - `Value: -1`

- **[43]**
  - `Value: -1`

- **[44]**
  - `Value: -1`

- **[45]**
  - `Value: -1`

- **[46]**
  - `Value: -1`

- **[47]**
  - `Value: -1`

- **[48]**
  - `Value: -1`

- **[49]**
  - `Value: -1`

- **[50]**
  - `Value: -1`

- **[51]**
  - `Value: -1`

- **[52]**
  - `Value: -1`

- **[53]**
  - `Value: -1`

- **[54]**
  - `Value: -1`

- **[55]**
  - `Value: -1`

- **[56]**
  - `Value: -1`

- **[57]**
  - `Value: -1`

- **[58]**
  - `Value: -1`

- **[59]**
  - `Value: -1`

- **[60]**
  - `Value: -1`

- **[61]**
  - `Value: -1`

- **[62]**
  - `Value: -1`

- **[63]**
  - `Value: -1`

- **[64]**
  - `Value: -1`

- **[65]**
  - `Value: -1`

- **[66]**
  - `Value: -1`

- **[67]**
  - `Value: -1`

- **[68]**
  - `Value: -1`

- **[69]**
  - `Value: -1`

- **[70]**
  - `Value: -1`

- **[71]**
  - `Value: -1`

- **[72]**
  - `Value: -1`

- **[73]**
  - `Value: -1`

- **[74]**
  - `Value: -1`

- **[75]**
  - `Value: -1`

- **[76]**
  - `Value: -1`

- **[77]**
  - `Value: -1`

- **[78]**
  - `Value: -1`

- **[79]**
  - `Value: -1`

- **[80]**
  - `Value: -1`

- **[81]**
  - `Value: -1`

- **[82]**
  - `Value: -1`

- **[83]**
  - `Value: -1`

- **[84]**
  - `Value: -1`

- **[85]**
  - `Value: -1`

- **[86]**
  - `Value: -1`

- **[87]**
  - `Value: -1`

- **[88]**
  - `Value: -1`

- **[89]**
  - `Value: -1`

- **[90]**
  - `Value: -1`

- **[91]**
  - `Value: -1`

- **[92]**
  - `Value: -1`

- **[93]**
  - `Value: -1`

- **[94]**
  - `Value: -1`

- **[95]**
  - `Value: -1`

- **[96]**
  - `Value: -1`

- **[97]**
  - `Value: -1`

- **[98]**
  - `Value: -1`

- **99 total elements but only showing the first 36**

- [ProjectM.Behaviours.BehaviourTreeStateBuffsBuffer](/components/BehaviourTreeStateBuffsBuffer)

- **[0]**
  - `BuffGuid: Buff_InCombat_VBlood_Poloma PrefabGuid(-1054878413)`
  - `State: ProjectM.GenericEnemyState Combat, Relocate_Unstuck`

- **[1]**
  - `BuffGuid: Buff_Shared_Return PrefabGuid(-560330878)`
  - `State: ProjectM.GenericEnemyState Return`

- [ProjectM.Shared.DropTableBuffer](/components/DropTableBuffer)

- **[0]**
  - `DropTableGuid: DT_Shared_Unit_VBlood_T01_Normal PrefabGuid(830431682)`
  - `DropTrigger: ProjectM.Shared.DropTriggerType OnDeath`
  - `RelicType: ProjectM.Shared.RelicType None`

- [ProjectM.Behaviours.BehaviourTreeNodeInstanceElement](/components/BehaviourTreeNodeInstanceElement)

- [ProjectM.Pathfinding.PathBuffer](/components/PathBuffer)

- [ProjectM.Pathfinding.PathRequestFilledSegmentBuffer](/components/PathRequestFilledSegmentBuffer)

- [ProjectM.Pathfinding.PathRequestSolveDebugBuffer](/components/PathRequestSolveDebugBuffer)

- [ProjectM.Pathfinding.UnsmoothedPathBuffer](/components/UnsmoothedPathBuffer)

- [Stunlock.Sequencer.BlackboardElement](/components/BlackboardElement)

- [ProjectM.MoveStopTrigger](/components/MoveStopTrigger)

- [ProjectM.SnapToHeight](/components/SnapToHeight)

- [ProjectM.HideOutsideVision](/components/HideOutsideVision)

- **ProjectM.Contest.ContestTerminatorTag**

- [ProjectM.MoveEntity](/components/MoveEntity)

- [ProjectM.TilePlacementTag](/components/TilePlacementTag)

- [ProjectM.DisableWhenNoPlayersInRange](/components/DisableWhenNoPlayersInRange)

- [ProjectM.Scripting.ScriptSpawn](/components/ScriptSpawn)

- [ProjectM.Shared.DropTable](/components/DropTable)

- [Unity.Entities.SpawnTag](/components/SpawnTag)

- [Unity.Entities.Prefab](/components/Prefab)

- [Unity.Entities.Simulate](/components/Simulate)

- [Unity.Entities.BlobAssetOwner](/components/BlobAssetOwner)

- [ProjectM.TileModelRegistrationState](/components/TileModelRegistrationState)

- [ProjectM.Network.NetworkSnapshotType](/components/NetworkSnapshotType)

- [ProjectM.Tiles.TileModelLayer](/components/TileModelLayer)

- [Unity.Physics.PhysicsWorldIndex](/components/PhysicsWorldIndex)
