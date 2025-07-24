---
title: CHAR_Gloomrot_RailgunSergeant_VBlood
guid: 2054432370
categories: ['All', 'CHAR']
nav_exclude: true
search_exclude: false
layout: default
---

# CHAR_Gloomrot_RailgunSergeant_VBlood

**GUID:** `2054432370`

**Categories:** [All](/prefabs/All), [CHAR](/prefabs/CHAR)

## Components

- **ProjectM.IdleInteractor**
  - `NextInteractionTime: 0`
  - `Blob: Unity.Entities.BlobAssetReference`1[ProjectM.IdleInteractor+BlobData] Unity.Entities.BlobAssetReference`1[ProjectM.IdleInteractor+BlobData]`
  - `CurrentInteraction: ProjectM.IdleInteractor+CurrentInteractionData ProjectM.IdleInteractor+CurrentInteractionData`

- [AbilityBar_Server](/components/AbilityBar_Server){:target="_blank"}
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

- [AbilityBar_Shared](/components/AbilityBar_Shared){:target="_blank"}
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

- [AggroConsumer](/components/AggroConsumer){:target="_blank"}
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

- [Follower](/components/Follower){:target="_blank"}
  - `Followed: ModifiableEntity(0:0)`
  - `Offset: Unity.Mathematics.float2 float2(0f, 0f)`
  - `LastOffsetUpdateTime: -1.7976931348623157E+308`
  - `ModeModifiable: 1`
  - `Stationary: False`
  - `InheritRotationWhenStationary: False`

- [EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [BuffResistances](/components/BuffResistances){:target="_blank"}
  - `SettingsEntity: ModifiableEntity(0:0)`
  - `InitialSettingGuid: BuffResistance_UberMob PrefabGuid(1067748088)`

- [EntityInput](/components/EntityInput){:target="_blank"}
  - `Movement: Unity.Mathematics.float2 float2(0f, 0f)`
  - `AimPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `AimPositionPlane: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `AimDirection: Unity.Mathematics.float3 float3(0f, 0f, 1f)`
  - `AimLength: 0`
  - `HoveredEntity: Entity(0:0)`
  - `HoveredEntityNetworkId: ProjectM.Network.NetworkId (None)`
  - `ProjectileAimType: ProjectM.AimDirectionType Planar`
  - `State: ProjectM.SyncedInputState ProjectM.SyncedInputState`

- [AiMove_Server](/components/AiMove_Server){:target="_blank"}
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

- [BehaviourTreeInstance](/components/BehaviourTreeInstance){:target="_blank"}
  - `TreeEntity: Entity(0:0)`
  - `ExpectedTreeEntity: ModifiableEntity(0:0)`

- [Script_ApplyBuffUnderHealthThreshold_DataServer](/components/Script_ApplyBuffUnderHealthThreshold_DataServer){:target="_blank"}
  - `HealthFactor: 0`
  - `NewBuffEntity: Buff_Gloomrot_RailgunSergeant_VBlood_Downed PrefabGuid(1251197221)`
  - `TriggerSequence: SequenceGUID -88390845`
  - `OnDamageTakenListener: ProjectM.Scripting.ListenerId ProjectM.Scripting.ListenerId`
  - `ThresholdMet: False`
  - `DontTriggerOnDots: False`
  - `DontTriggerInFlight: False`

- [LastPathRequest](/components/LastPathRequest){:target="_blank"}
  - `PathRequest: ProjectM.Pathfinding.PathRequest ProjectM.Pathfinding.PathRequest`
  - `HasLastPathRequest: False`

- [CombatMusicSource_Server](/components/CombatMusicSource_Server){:target="_blank"}
  - `Active: True`

- [CastleAreaRequirement](/components/CastleAreaRequirement){:target="_blank"}
  - `RequirementType: ProjectM.CastleBuilding.Placement.CastleAreaRequirementType PlaceableInNeutralArea`
  - `BlockPlacementOnRoads: False`
  - `AllowPlaceInObjectsInRepairState: False`
  - `AllowTilesStickingOutOfTerritory: False`

- [CastOptionsUser](/components/CastOptionsUser){:target="_blank"}
  - `CastOptionsPrefab: ModifiablePrefabGUID PrefabGuid(-727240888)`

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

- [TravelToTargetRadius](/components/TravelToTargetRadius){:target="_blank"}
  - `Radius: 1.5`

- [DynamicCollision](/components/DynamicCollision){:target="_blank"}
  - `AgainstUnits: ProjectM.DynamicCollisionSettings ProjectM.DynamicCollisionSettings`
  - `AgainstPlayers: ProjectM.DynamicCollisionSettings ProjectM.DynamicCollisionSettings`
  - `NetworkMultiplier: 1`
  - `NetworkDirection: Unity.Mathematics.float2 float2(0f, 0f)`
  - `Immobile: False`

- [Height](/components/Height){:target="_blank"}
  - `LastPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Value: 0`
  - `ServerHeightLevel: 0`

- [AoETargetImportance](/components/AoETargetImportance){:target="_blank"}
  - `Importance: 2`

- [Torture](/components/Torture){:target="_blank"}
  - `TortureModifier: 1`
  - `TorturePerDamage: 0.5`

- [IsSpellControlled](/components/IsSpellControlled){:target="_blank"}
  - `MovementControlled: False`
  - `RotationControlled: False`

- [NetworkInterpolated_Shared](/components/NetworkInterpolated_Shared){:target="_blank"}
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

- [AbilityBarInitializationState](/components/AbilityBarInitializationState){:target="_blank"}
  - `AbilityGroupSlotsInitialized: False`

- [Aggroable](/components/Aggroable){:target="_blank"}
  - `DistanceFactor: 1`
  - `AggroFactor: 1`
  - `Value: True`

- [GainAggroByAlert](/components/GainAggroByAlert){:target="_blank"}
  - `AlertThreshold: 3`

- [GainAggroByVicinity](/components/GainAggroByVicinity){:target="_blank"}
  - `Value: ProjectM.AggroData ProjectM.AggroData`

- [GainAlertByVicinity](/components/GainAlertByVicinity){:target="_blank"}
  - `Value: ProjectM.AggroData ProjectM.AggroData`
  - `AggregatedCircleRadius: 0`
  - `AggregatedConeRadius: 0`

- [AggroModifiers](/components/AggroModifiers){:target="_blank"}
  - `ConeRadiusFactor: 1`
  - `CircleRadiusFactor: 1`

- [AlertModifiers](/components/AlertModifiers){:target="_blank"}
  - `ConeRadiusFactor: 1`
  - `CircleRadiusFactor: 1`

- [AggroDamageHistoryConfig](/components/AggroDamageHistoryConfig){:target="_blank"}
  - `StorageTimeSeconds: 5`

- [AiPrioritization_Data](/components/AiPrioritization_Data){:target="_blank"}
  - `UltraHighPriority: True`

- [AiPrioritization_State](/components/AiPrioritization_State){:target="_blank"}
  - `AccumulatedDeltaTime: 0`
  - `AccumulatedPriority: 0`
  - `Updated: False`

- [UseBossCenterPositionAsPreCombatPosition](/components/UseBossCenterPositionAsPreCombatPosition){:target="_blank"}
  - `RangeSq: 625`
  - `Found: False`

- [AiMoveSpeeds](/components/AiMoveSpeeds){:target="_blank"}
  - `Walk: 1`
  - `Run: 2`
  - `Circle: 2`
  - `Return: 3.5`

- [CastHistoryData](/components/CastHistoryData){:target="_blank"}
  - `StorageTimeSeconds: 900`

- [FactionReference](/components/FactionReference){:target="_blank"}
  - `FactionGuid: ModifiablePrefabGUID PrefabGuid(-1632475814)`

- [MinionMaster](/components/MinionMaster){:target="_blank"}
  - `TotalMaxMinions: 16`
  - `MinionSpawnsThisFrame: 0`

- [BloodConsumeSource](/components/BloodConsumeSource){:target="_blank"}
  - `ConstantData: Unity.Entities.BlobAssetReference`1[BloodConsumeSourceBlob] Unity.Entities.BlobAssetReference`1[BloodConsumeSourceBlob]`
  - `BloodQuality: -1`
  - `UnitBloodType: ModifiablePrefabGUID PrefabGuid(-338774148)`
  - `OverrideBloodCurve: ProjectM.CurveReference ProjectM.CurveReference`
  - `ForceBadBloodQuality: False`
  - `BloodQualityBuffRequirement: 50`
  - `CanBeConsumed: True`

- [VBloodConsumeSource](/components/VBloodConsumeSource){:target="_blank"}
  - `Source: CHAR_Gloomrot_RailgunSergeant_VBlood PrefabGuid(2054432370)`
  - `JournalCategory: ProjectM.JournalCategoryType None`
  - `QuestFlavorTextOverride: 00000000-0000-0000-0000-000000000000 - <Localization not found!>`
  - `TooltipGUID: GUID Not Found`
  - `SpellSchool: StormSpellSchoolAsset PrefabGuid(-829934972)`
  - `Tier: ProjectM.SpellSchoolProgressionTier Tier2`
  - `SpellSchoolPoints: 1`
  - `PassivePoints: 0`

- [PlacementDestroyData](/components/PlacementDestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Buffable](/components/Buffable){:target="_blank"}
  - `KnockbackResistanceIndex: 6`
  - `UniqueBuffCategories: ProjectM.BuffCategoryFlag Travel, Shapeshift`

- [Hideable](/components/Hideable){:target="_blank"}
  - `IsHidden: False`
  - `Visibility: 1`
  - `AdditionalHideRangeSq: 0`
  - `IgnoreLoS: False`

- [Stealthable](/components/Stealthable){:target="_blank"}
  - `IsStealthed: False`
  - `AlwaysShowVFX: False`
  - `StealthBushId: -1`
  - `ModelInvisible: True`

- [Health](/components/Health){:target="_blank"}
  - `MaxHealth: 0`
  - `TimeOfDeath: 0`
  - `Value: 0`
  - `MaxRecoveryHealth: 1`
  - `IsDead: False`

- [HealthConstants](/components/HealthConstants){:target="_blank"}
  - `LowHealthFactor: 0.4`
  - `DestroyOnDeath: True`
  - `DestroyAfterDuration: 120`
  - `DisableDamageSCT: False`

- [DynamicallyWeakenAttackers](/components/DynamicallyWeakenAttackers){:target="_blank"}
  - `Multiplier: 0.8`
  - `MultiplierReductionFactorPerCrowdedness: 0.9`
  - `MaxPlayers: 5`

- [Immortal](/components/Immortal){:target="_blank"}
  - `IsImmortal: True`

- [LastTranslation](/components/LastTranslation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Movement](/components/Movement){:target="_blank"}
  - `ForcePositionData: ProjectM.ForcePositionData ProjectM.ForcePositionData`
  - `MoveStopAbilityData: ProjectM.MoveStopAbilityData ProjectM.MoveStopAbilityData`
  - `MoveInput: Unity.Mathematics.float2 float2(0f, 0f)`
  - `LastNonZeroMoveInput: Unity.Mathematics.float2 float2(1f, 0f)`
  - `Speed: 3.6`
  - `AbilityCastSpeedMultiplier: 1`
  - `HasMoveStopData: False`

- [CollisionRadius](/components/CollisionRadius){:target="_blank"}
  - `Radius: 0.5`

- [MapCollision](/components/MapCollision){:target="_blank"}
  - `Radius: 0.4`
  - `CollidesAgainstMapFlags: ProjectM.Tiles.MapCollisionFlags CollideNormalMovement, CollideAirMovement`
  - `Result: ProjectM.MapCollisionResult ProjectM.MapCollisionResult`

- [Velocity](/components/Velocity){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [SpawnTransform](/components/SpawnTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 0f)`

- [TargetDirection](/components/TargetDirection){:target="_blank"}
  - `ForcedDirection: float3(0f, 0f, 0f)`
  - `Direction: Unity.Mathematics.float3 float3(0f, 0f, 1f)`
  - `AimDirection: Unity.Mathematics.float3 float3(0f, 0f, 1f)`
  - `DefaultRotationSpeed: 500`
  - `RotationSpeed: 500`
  - `RotateTowardsMouse: False`
  - `ForceRotateTowardsMovement: False`
  - `CurrentCanRotate: True`
  - `PlayerControlsRotation: True`

- [Team](/components/Team){:target="_blank"}
  - `Value: 2`
  - `FactionIndex: 13`

- [TileBounds](/components/TileBounds){:target="_blank"}
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- [TileModelSpatialData](/components/TileModelSpatialData){:target="_blank"}
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- [TileData](/components/TileData){:target="_blank"}
  - `Data: Unity.Entities.BlobAssetReference`1[TileBlob] Unity.Entities.BlobAssetReference`1[TileBlob]`

- [UnitRespawnTime](/components/UnitRespawnTime){:target="_blank"}
  - `MaxRespawnTime: 5`
  - `MinRespawnTime: 3`

- [VBloodUnit](/components/VBloodUnit){:target="_blank"}
  - `CanBeTracked: True`
  - `OverrideLockedVBloodUnit: GUID Not Found`
  - `UnlocksTrophyOnFeed: ProjectM.Trophy None`
  - `UnlocksTrophyOnFeedBrutal: ProjectM.Trophy None`
  - `LastNonExploitTime: 0`

- [WoundedConstants](/components/WoundedConstants){:target="_blank"}
  - `HealthFactor: 0`
  - `WoundedTriggerSequenceGuid: SequenceGUID -1123441705`
  - `WoundedSequenceGuid: SequenceGUID 395723216`
  - `TriggerKnockbackOnWounded: False`
  - `KnockbackPower: ProjectM.KnockbackPower ProjectM.KnockbackPower`
  - `KnockbackDuration: 0.3`
  - `KnockbackRange: 0.5`
  - `WoundedKnockbackResistanceIndex: 6`

- [BuffableFlagState](/components/BuffableFlagState){:target="_blank"}
  - `Value: ProjectM.ModifiableLong ProjectM.ModifiableLong`

- [EntityCategory](/components/EntityCategory){:target="_blank"}
  - `MainCategoryInt: 0`
  - `UnitCategoryInt: 0`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 5`
  - `ResourceLevel: 0`

- [ApplyBuffOnSpawn](/components/ApplyBuffOnSpawn){:target="_blank"}
  - `Kind: ProjectM.SpawnBuffKind Default`
  - `SpawnTime: 0`

- [UnitLevel](/components/UnitLevel){:target="_blank"}
  - `Level: 79`
  - `HideLevel: False`

- [UnitLevelServerData](/components/UnitLevelServerData){:target="_blank"}
  - `HealthUnitBaseStatsTypeInt: 2`
  - `UnitBaseStatsTypeInt: 2`

- [Vision](/components/Vision){:target="_blank"}
  - `Range: 30`

- [EntityAimData](/components/EntityAimData){:target="_blank"}
  - `AimPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `AimPositionPlane: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `ProjectileAimPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [MoveVelocity](/components/MoveVelocity){:target="_blank"}
  - `MoveVelocityMagnitude: 0`
  - `ReferenceWalkingCurve: ProjectM.CurveReference ProjectM.CurveReference`

- [ResistanceData](/components/ResistanceData){:target="_blank"}
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

- [UnitStats](/components/UnitStats){:target="_blank"}
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

- [AiMove_Shared](/components/AiMove_Shared){:target="_blank"}
  - `Waypoints: PathWaypoints PathWaypoints`

- [UnitSpawnData](/components/UnitSpawnData){:target="_blank"}
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

- [GenericCombatMovementData](/components/GenericCombatMovementData){:target="_blank"}
  - `MinDistance: 0`
  - `GoalDistanceInner: 10`
  - `GoalDistanceOuter: 10`
  - `MaxDistance: 12`
  - `MovePattern: 0`
  - `ForceLookAtTarget: 0`
  - `CircleCurveInRange: ProjectM.CurveReference ProjectM.CurveReference`
  - `CircleCurveOutOfRange: ProjectM.CurveReference ProjectM.CurveReference`

- [MiscAiGameplayData](/components/MiscAiGameplayData){:target="_blank"}
  - `StationaryWhenIdle: False`
  - `AlertAlliesOnDeath: True`
  - `IgnoresPathfindingLineOfSight: False`
  - `StopPatrol: False`

- [IsMinion](/components/IsMinion){:target="_blank"}
  - `Value: False`

- [ImpactMaterial](/components/ImpactMaterial){:target="_blank"}
  - `IntType: 4`
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, 0.5f)`
  - `PlayOnSelf: False`

- [Networked](/components/Networked){:target="_blank"}
  - `CreateFrame: 0`

- [NetworkedTimeout](/components/NetworkedTimeout){:target="_blank"}
  - `LastTimeSynced: 0`
  - `TimeoutAfter: 3`
  - `Enabled: True`

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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_acijcbjbihb`

- [BehaviourTreeBinding](/components/BehaviourTreeBinding){:target="_blank"}
  - `PrefabGUID: BEH_Gloomrot_RailgunSergeant PrefabGuid(-1612217012)`

- [BehaviourTreeState](/components/BehaviourTreeState){:target="_blank"}
  - `Value: ProjectM.GenericEnemyState Initialize`

- [BehaviourTreeStateMetadata](/components/BehaviourTreeStateMetadata){:target="_blank"}
  - `PreviousState: ProjectM.GenericEnemyState Initialize`
  - `LastChangeTime: 0`

- [TileModel](/components/TileModel){:target="_blank"}
  - `DisabledTileTypesInt: 0`

- [HybridModelSeed](/components/HybridModelSeed){:target="_blank"}
  - `Seed: 0`
  - `HasSetSeed: False`

- [DropTableOnDeath](/components/DropTableOnDeath){:target="_blank"}
  - `Dropped: False`
  - `CustomDropArc: DropItemSphere_VBlood PrefabGuid(1725779712)`
  - `MinRange: 3`
  - `MaxRange: 6`

- [Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [PhysicsCollider](/components/PhysicsCollider){:target="_blank"}
  - `Value: Unity.Entities.BlobAssetReference`1[Collider] Unity.Entities.BlobAssetReference`1[Collider]`

- [StaticPhysicsWorldBodyIndex](/components/StaticPhysicsWorldBodyIndex){:target="_blank"}
  - `WorldBodyIndex: -1`

- [AiDebugDraw](/components/AiDebugDraw){:target="_blank"}
  - `CurrentTarget: Unity.Mathematics.float2 float2(0f, 0f)`
  - `AggroRadius: 0`

- [Pathfinder](/components/Pathfinder){:target="_blank"}
  - `TerrainData: ProjectM.Pathfinding.PathfindingTerrainData ProjectM.Pathfinding.PathfindingTerrainData`
  - `MaxExpansions: 15000`
  - `UseSmoothing: True`

- [LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [TeamReference](/components/TeamReference){:target="_blank"}
  - `Value: ModifiableEntity(0:0)`

- [TilePosition](/components/TilePosition){:target="_blank"}
  - `Tile: Unity.Mathematics.int2 int2(0, 0)`
  - `TileRotation: ProjectM.Tiles.TileRotation None`
  - `CompressedHeight: 0`

- [NetworkId](/components/NetworkId){:target="_blank"}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: 2054432370`

- [AggroBuffer](/components/AggroBuffer){:target="_blank"}
  - *(No fields)*

- [AlertBuffer](/components/AlertBuffer){:target="_blank"}
  - *(No fields)*

- [AggroCandidateBufferElement](/components/AggroCandidateBufferElement){:target="_blank"}
  - *(No fields)*

- [AggroDamageHistoryBufferElement](/components/AggroDamageHistoryBufferElement){:target="_blank"}
  - *(No fields)*

- [ExternalAggroBufferElement](/components/ExternalAggroBufferElement){:target="_blank"}
  - *(No fields)*

- [AbilityGroupSlotBuffer](/components/AbilityGroupSlotBuffer){:target="_blank"}

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
