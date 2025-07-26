---
title: CHAR_Winter_Wolf
guid: 134039094
categories:
- All
- CHAR
nav_exclude: true
search_exclude: true
layout: default
components:
- AbilityBar_Server
- AbilityBar_Shared
- AggroConsumer
- Follower
- EntityOwner
- EntityCreator
- BuffResistances
- EntityInput
- AiMove_Server
- BehaviourTreeInstance
- LastPathRequest
- CastleAreaRequirement
- CastOptionsUser
- Interactable
- InteractedUpon
- TravelToTargetRadius
- DynamicCollision
- Height
- AoETargetImportance
- Torture
- YieldEssenceOnDeath
- IsSpellControlled
- NetworkInterpolated_Shared
- AbilityBarInitializationState
- Aggroable
- GainAggroByAlert
- GainAggroByVicinity
- GainAlertByVicinity
- AggroModifiers
- AlertModifiers
- AggroDamageHistoryConfig
- AiPrioritization_Data
- AiPrioritization_State
- AiMoveSpeeds
- CastHistoryData
- FactionReference
- BloodConsumeSource
- PlacementDestroyData
- DestroyData
- DestroyState
- Buffable
- Hideable
- Stealthable
- Health
- HealthConstants
- DynamicallyWeakenAttackers
- LastTranslation
- Movement
- CollisionRadius
- MapCollision
- Velocity
- SpawnTransform
- TargetDirection
- Team
- TileBounds
- TileModelSpatialData
- TileData
- UnitRespawnTime
- WoundedConstants
- BuffableFlagState
- EntityCategory
- ApplyBuffOnSpawn
- UnitLevel
- UnitLevelServerData
- Vision
- EntityAimData
- MoveVelocity
- CanPreventDisableWhenNoPlayersInRange
- ResistanceData
- UnitStats
- AiMove_Shared
- UnitSpawnData
- GenericCombatMovementData
- MiscAiGameplayData
- IsMinion
- ImpactMaterial
- Networked
- NetworkedTimeout
- UpToDateUserBitMask
- FrameChanged
- NetworkSnapshot
- BehaviourTreeBinding
- BehaviourTreeState
- BehaviourTreeStateMetadata
- TileModel
- HybridModelSeed
- DeathRagdollForce
- DropTableOnDeath
- Rotation
- Translation
- PhysicsCollider
- StaticPhysicsWorldBodyIndex
- AiDebugDraw
- Pathfinder
- LocalToWorld
- LocalTransform
- TeamReference
- TilePosition
- NetworkId
- PrefabGUID
- AggroBuffer
- AlertBuffer
- AggroCandidateBufferElement
- AggroDamageHistoryBufferElement
- ExternalAggroBufferElement
- AbilityGroupSlotBuffer
- BuffBuffer
- EntitiesInView_Server
- BehaviourTreeStateActiveBuffsBuffer
- InteractAbilityBuffer
- CreateGameplayEventsOnSpawn
- ApplyBuffOnGameplayEvent
- GameplayEventIdMapping
- CastHistoryBufferElement
- SpawnBuffElement
- GameplayEventListeners
- NetSnapshot
- SnapshotFrameChangedBuffer
- BehaviourTreeStateBuffsBuffer
- DropTableBuffer
- BehaviourTreeNodeInstanceElement
- PathBuffer
- PathRequestFilledSegmentBuffer
- PathRequestSolveDebugBuffer
- UnsmoothedPathBuffer
- BlackboardElement
- MoveStopTrigger
- SnapToHeight
- HideOutsideVision
- CharmSource
- MoveEntity
- TilePlacementTag
- DisableWhenNoPlayersInRange
- DropTable
- SpawnTag
- Prefab
- Simulate
- BlobAssetOwner
- TileModelRegistrationState
- NetworkSnapshotType
- TileModelLayer
- PhysicsWorldIndex
---

# CHAR_Winter_Wolf

**GUID:** `134039094`

**Categories:** [All](/prefabs/All), [CHAR](/prefabs/CHAR)

## Components

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
  - `ProximityRadius: 15`
  - `ProximityWeight: 1`
  - `DamageWeight: 4`
  - `RemoveDelay: 5`
  - `TargetSwitchThreshold: 1.25`
  - `AlertDecayPerSecond: 0.5`
  - `PreCombatPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `MaxDistanceFromPreCombatPosition: 45`
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
  - `InitialSettingGuid: GUID Not Found`

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
  - `CircleChangeDirectionFrequencyMin: 3`
  - `CircleChangeDirectionFrequencyMax: 7`
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

- [LastPathRequest](/components/LastPathRequest){:target="_blank"}
  - `PathRequest: ProjectM.Pathfinding.PathRequest ProjectM.Pathfinding.PathRequest`
  - `HasLastPathRequest: False`

- **Animation.SkinColorCollectionComponent**
  - `SkinColorCollectionBlob: Unity.Entities.BlobAssetReference`1[SkinColorCollectionBlob] Unity.Entities.BlobAssetReference`1[SkinColorCollectionBlob]`

- [CastleAreaRequirement](/components/CastleAreaRequirement){:target="_blank"}
  - `RequirementType: ProjectM.CastleBuilding.Placement.CastleAreaRequirementType PlaceableInNeutralArea`
  - `BlockPlacementOnRoads: False`
  - `AllowPlaceInObjectsInRepairState: False`
  - `AllowTilesStickingOutOfTerritory: False`

- [CastOptionsUser](/components/CastOptionsUser){:target="_blank"}
  - `CastOptionsPrefab: ModifiablePrefabGUID PrefabGuid(-1528347301)`

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
  - `Radius: 1.1`

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

- [YieldEssenceOnDeath](/components/YieldEssenceOnDeath){:target="_blank"}
  - `EssenceGain: 19`
  - `EssenceItemType: Item_BloodEssence_T01 PrefabGuid(862477668)`

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
  - `AlertThreshold: 2`

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
  - `UltraHighPriority: False`

- [AiPrioritization_State](/components/AiPrioritization_State){:target="_blank"}
  - `AccumulatedDeltaTime: 0`
  - `AccumulatedPriority: 0`
  - `Updated: False`

- [AiMoveSpeeds](/components/AiMoveSpeeds){:target="_blank"}
  - `Walk: 3`
  - `Run: 6.5`
  - `Circle: 6.5`
  - `Return: 6.5`

- [CastHistoryData](/components/CastHistoryData){:target="_blank"}
  - `StorageTimeSeconds: 20`

- [FactionReference](/components/FactionReference){:target="_blank"}
  - `FactionGuid: ModifiablePrefabGUID PrefabGuid(-1671358863)`

- [BloodConsumeSource](/components/BloodConsumeSource){:target="_blank"}
  - `ConstantData: Unity.Entities.BlobAssetReference`1[BloodConsumeSourceBlob] Unity.Entities.BlobAssetReference`1[BloodConsumeSourceBlob]`
  - `BloodQuality: -1`
  - `UnitBloodType: ModifiablePrefabGUID PrefabGuid(524822543)`
  - `OverrideBloodCurve: ProjectM.CurveReference ProjectM.CurveReference`
  - `ForceBadBloodQuality: False`
  - `BloodQualityBuffRequirement: 50`
  - `CanBeConsumed: True`

- [PlacementDestroyData](/components/PlacementDestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- [DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [Buffable](/components/Buffable){:target="_blank"}
  - `KnockbackResistanceIndex: 3`
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
  - `Multiplier: 0.4`
  - `MultiplierReductionFactorPerCrowdedness: 0.9`
  - `MaxPlayers: 4`

- [LastTranslation](/components/LastTranslation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [Movement](/components/Movement){:target="_blank"}
  - `ForcePositionData: ProjectM.ForcePositionData ProjectM.ForcePositionData`
  - `MoveStopAbilityData: ProjectM.MoveStopAbilityData ProjectM.MoveStopAbilityData`
  - `MoveInput: Unity.Mathematics.float2 float2(0f, 0f)`
  - `LastNonZeroMoveInput: Unity.Mathematics.float2 float2(1f, 0f)`
  - `Speed: 6`
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
  - `DefaultRotationSpeed: 700`
  - `RotationSpeed: 700`
  - `RotateTowardsMouse: False`
  - `ForceRotateTowardsMovement: False`
  - `CurrentCanRotate: True`
  - `PlayerControlsRotation: True`

- [Team](/components/Team){:target="_blank"}
  - `Value: 2`
  - `FactionIndex: 34`

- [TileBounds](/components/TileBounds){:target="_blank"}
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- [TileModelSpatialData](/components/TileModelSpatialData){:target="_blank"}
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- [TileData](/components/TileData){:target="_blank"}
  - `Data: Unity.Entities.BlobAssetReference`1[TileBlob] Unity.Entities.BlobAssetReference`1[TileBlob]`

- [UnitRespawnTime](/components/UnitRespawnTime){:target="_blank"}
  - `MaxRespawnTime: 720`
  - `MinRespawnTime: 600`

- [WoundedConstants](/components/WoundedConstants){:target="_blank"}
  - `HealthFactor: 0.3`
  - `WoundedTriggerSequenceGuid: SequenceGUID -1123441705`
  - `WoundedSequenceGuid: SequenceGUID 395723216`
  - `TriggerKnockbackOnWounded: False`
  - `KnockbackPower: ProjectM.KnockbackPower ProjectM.KnockbackPower`
  - `KnockbackDuration: 0.3`
  - `KnockbackRange: 0.5`
  - `WoundedKnockbackResistanceIndex: 0`

- [BuffableFlagState](/components/BuffableFlagState){:target="_blank"}
  - `Value: ProjectM.ModifiableLong ProjectM.ModifiableLong`

- [EntityCategory](/components/EntityCategory){:target="_blank"}
  - `MainCategoryInt: 0`
  - `UnitCategoryInt: 4`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 4`
  - `ResourceLevel: 0`

- [ApplyBuffOnSpawn](/components/ApplyBuffOnSpawn){:target="_blank"}
  - `Kind: ProjectM.SpawnBuffKind Default`
  - `SpawnTime: 0`

- [UnitLevel](/components/UnitLevel){:target="_blank"}
  - `Level: 50`
  - `HideLevel: False`

- [UnitLevelServerData](/components/UnitLevelServerData){:target="_blank"}
  - `HealthUnitBaseStatsTypeInt: 0`
  - `UnitBaseStatsTypeInt: 0`

- [Vision](/components/Vision){:target="_blank"}
  - `Range: 30`

- [EntityAimData](/components/EntityAimData){:target="_blank"}
  - `AimPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `AimPositionPlane: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `ProjectileAimPosition: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [MoveVelocity](/components/MoveVelocity){:target="_blank"}
  - `MoveVelocityMagnitude: 0`
  - `ReferenceWalkingCurve: ProjectM.CurveReference ProjectM.CurveReference`

- [CanPreventDisableWhenNoPlayersInRange](/components/CanPreventDisableWhenNoPlayersInRange){:target="_blank"}
  - `CanDisable: True`

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
  - `PhysicalPower: 33.624607`
  - `SpellPower: 33.624607`
  - `ResourcePower: 23.5`
  - `SiegePower: 14`
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

- [GenericCombatMovementData](/components/GenericCombatMovementData){:target="_blank"}
  - `MinDistance: 0.1`
  - `GoalDistanceInner: 2.8`
  - `GoalDistanceOuter: 2.8`
  - `MaxDistance: 5`
  - `MovePattern: 1`
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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_acegdbdeeci`

- [BehaviourTreeBinding](/components/BehaviourTreeBinding){:target="_blank"}
  - `PrefabGUID: BEH_Winter_Wolf PrefabGuid(1961468296)`

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

- [DeathRagdollForce](/components/DeathRagdollForce){:target="_blank"}
  - `Force: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [DropTableOnDeath](/components/DropTableOnDeath){:target="_blank"}
  - `Dropped: False`
  - `CustomDropArc: GUID Not Found`
  - `MinRange: 0`
  - `MaxRange: 0`

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
  - `MaxExpansions: 4000`
  - `UseSmoothing: True`

- [LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(-3124.222f, 5.190657f, -3114.065f)`
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
  - `_Value: 134039094`

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
  - `BaseAbilityGroupOnSlot: AB_Wolf_Winter_MeleeAttack_Group PrefabGuid(-1267641072)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- **[1]**
  - `BaseAbilityGroupOnSlot: AB_Wolf_Winter_DashAttack_AbilityGroup PrefabGuid(-83187650)`
  - `ShowOnBar: True`
  - `GroupSlotEntity: NetworkedEntity(0:0)`

- [BuffBuffer](/components/BuffBuffer){:target="_blank"}
  - *(No fields)*

- [EntitiesInView_Server](/components/EntitiesInView_Server){:target="_blank"}
  - *(No fields)*

- [BehaviourTreeStateActiveBuffsBuffer](/components/BehaviourTreeStateActiveBuffsBuffer){:target="_blank"}
  - *(No fields)*

- [InteractAbilityBuffer](/components/InteractAbilityBuffer){:target="_blank"}

- **[0]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab                 `
  - `Component                      `
  - `ConditionalElements`
  - `Ability: AB_Feed_01_Initiate_AbilityGroup PrefabGuid(-376210658)`
  - `Importance: 3`
  - `HideInteractHUDWhileCasting: False`

- [CreateGameplayEventsOnSpawn](/components/CreateGameplayEventsOnSpawn){:target="_blank"}

- **[0]**
  - `EventId: Local - -1628185855`
  - `Target: ProjectM.GameplayEventTarget Self`

- [ApplyBuffOnGameplayEvent](/components/ApplyBuffOnGameplayEvent){:target="_blank"}

- **[0]**
  - `BuffTarget: ProjectM.ApplyBuffTarget EventTarget`
  - `SpellTarget: ProjectM.SetSpellTarget Default`
  - `EntityOwner: ProjectM.SetEntityOwner Default`
  - `OverrideDuration: Il2CppSystem.Nullable_Unboxed`1[Single]`
  - `Stacks: 1`
  - `Buff0: Buff_General_Wounded_Tracker PrefabGuid(224060472)`
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

- [CastHistoryBufferElement](/components/CastHistoryBufferElement){:target="_blank"}
  - *(No fields)*

- [SpawnBuffElement](/components/SpawnBuffElement){:target="_blank"}

- **[0]**
  - `Kind: ProjectM.SpawnBuffKind Default`
  - `Buff: Buff_General_Spawn_Unit PrefabGuid(396339796)`
  - `OriginPositionFactor: 0`
  - `Weight: 1`

- **[1]**
  - `Kind: ProjectM.SpawnBuffKind Eat`
  - `Buff: Buff_Wolf_Eating PrefabGuid(-177679480)`
  - `OriginPositionFactor: 0`
  - `Weight: 1`

- [GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum ApplyBuff`
  - `GameplayEventId: Local - -1628185855`

- [NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 54`

- **[1]**
  - `Value: 70`

- **[2]**
  - `Value: 253`

- **[3]**
  - `Value: 7`

- **[4]**
  - `Value: 38`

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
  - `Value: 15`

- **[169]**
  - `Value: 40`

- **[170]**
  - `Value: 72`

- **[171]**
  - `Value: 31`

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
  - `Value: 0`

- **[183]**
  - `Value: 0`

- **[184]**
  - `Value: 0`

- **[185]**
  - `Value: 0`

- **[186]**
  - `Value: 0`

- **[187]**
  - `Value: 0`

- **[188]**
  - `Value: 0`

- **[189]**
  - `Value: 0`

- **[190]**
  - `Value: 0`

- **[191]**
  - `Value: 0`

- **[192]**
  - `Value: 0`

- **[193]**
  - `Value: 0`

- **[194]**
  - `Value: 128`

- **[195]**
  - `Value: 62`

- **[196]**
  - `Value: 0`

- **[197]**
  - `Value: 0`

- **[198]**
  - `Value: 64`

- **[199]**
  - `Value: 64`

- **[200]**
  - `Value: 0`

- **[201]**
  - `Value: 0`

- **[202]**
  - `Value: 192`

- **[203]**
  - `Value: 63`

- **[204]**
  - `Value: 0`

- **[205]**
  - `Value: 0`

- **[206]**
  - `Value: 0`

- **[207]**
  - `Value: 0`

- **[208]**
  - `Value: 205`

- **[209]**
  - `Value: 204`

- **[210]**
  - `Value: 76`

- **[211]**
  - `Value: 62`

- **[212]**
  - `Value: 0`

- **[213]**
  - `Value: 0`

- **[214]**
  - `Value: 0`

- **[215]**
  - `Value: 0`

- **[216]**
  - `Value: 205`

- **[217]**
  - `Value: 204`

- **[218]**
  - `Value: 204`

- **[219]**
  - `Value: 62`

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
  - `Value: 128`

- **[228]**
  - `Value: 63`

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
  - `Value: 0`

- **[240]**
  - `Value: 0`

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
  - `Value: 192`

- **[252]**
  - `Value: 64`

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
  - `Value: 0`

- **[298]**
  - `Value: 0`

- **[299]**
  - `Value: 0`

- **376 total elements but only showing the first 36**
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

- **[99]**
  - `Value: -1`

- **[100]**
  - `Value: -1`

- **101 total elements but only showing the first 36**
  - *(No fields)*

- [BehaviourTreeStateBuffsBuffer](/components/BehaviourTreeStateBuffsBuffer){:target="_blank"}

- **[0]**
  - `BuffGuid: Buff_InCombat_Npc PrefabGuid(480749717)`
  - `State: ProjectM.GenericEnemyState Combat, Relocate_Unstuck`

- **[1]**
  - `BuffGuid: Buff_Shared_Return_NoInvulernable PrefabGuid(2086395440)`
  - `State: ProjectM.GenericEnemyState Return`

- [DropTableBuffer](/components/DropTableBuffer){:target="_blank"}

- **[0]**
  - `DropTableGuid: DT_Unit_Hallowed_Creature_Wolf_Arctic PrefabGuid(1378499548)`
  - `DropTrigger: ProjectM.Shared.DropTriggerType OnDeath`
  - `RelicType: ProjectM.Shared.RelicType None`

- [BehaviourTreeNodeInstanceElement](/components/BehaviourTreeNodeInstanceElement){:target="_blank"}
  - *(No fields)*

- [PathBuffer](/components/PathBuffer){:target="_blank"}
  - *(No fields)*

- [PathRequestFilledSegmentBuffer](/components/PathRequestFilledSegmentBuffer){:target="_blank"}
  - *(No fields)*

- [PathRequestSolveDebugBuffer](/components/PathRequestSolveDebugBuffer){:target="_blank"}
  - *(No fields)*

- [UnsmoothedPathBuffer](/components/UnsmoothedPathBuffer){:target="_blank"}
  - *(No fields)*

- [BlackboardElement](/components/BlackboardElement){:target="_blank"}
  - *(No fields)*

- [MoveStopTrigger](/components/MoveStopTrigger){:target="_blank"}
  - *(No fields)*

- [SnapToHeight](/components/SnapToHeight){:target="_blank"}
  - *(No fields)*

- [HideOutsideVision](/components/HideOutsideVision){:target="_blank"}
  - *(No fields)*

- [CharmSource](/components/CharmSource){:target="_blank"}
  - *(No fields)*

- [MoveEntity](/components/MoveEntity){:target="_blank"}
  - *(No fields)*

- [TilePlacementTag](/components/TilePlacementTag){:target="_blank"}
  - *(No fields)*

- [DisableWhenNoPlayersInRange](/components/DisableWhenNoPlayersInRange){:target="_blank"}
  - *(No fields)*

- [DropTable](/components/DropTable){:target="_blank"}
  - *(No fields)*

- [SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [BlobAssetOwner](/components/BlobAssetOwner){:target="_blank"}
  - *(No fields)*

- [TileModelRegistrationState](/components/TileModelRegistrationState){:target="_blank"}
  - *(No fields)*

- [NetworkSnapshotType](/components/NetworkSnapshotType){:target="_blank"}
  - *(No fields)*

- [TileModelLayer](/components/TileModelLayer){:target="_blank"}
  - *(No fields)*

- [PhysicsWorldIndex](/components/PhysicsWorldIndex){:target="_blank"}
  - *(No fields)*
