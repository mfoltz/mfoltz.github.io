---
title: CHAR_Critter_Silkworm
guid: -1587402408
categories: ['All', 'CHAR']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `-1587402408`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [CHAR]({{% relref "prefabs/CHAR.md" %}})

## Components

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

- [ProjectM.EntityOwner]({{% relref "components/EntityOwner.md" %}})
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator]({{% relref "components/EntityCreator.md" %}})
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.BuffResistances]({{% relref "components/BuffResistances.md" %}})
  - `SettingsEntity: ModifiableEntity(0:0)`
  - `InitialSettingGuid: GUID Not Found`

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

- [ProjectM.Pathfinding.LastPathRequest]({{% relref "components/LastPathRequest.md" %}})
  - `PathRequest: ProjectM.Pathfinding.PathRequest ProjectM.Pathfinding.PathRequest`
  - `HasLastPathRequest: False`

- [ProjectM.CastleAreaRequirement]({{% relref "components/CastleAreaRequirement.md" %}})
  - `RequirementType: ProjectM.CastleBuilding.Placement.CastleAreaRequirementType PlaceableInNeutralArea`
  - `BlockPlacementOnRoads: False`
  - `AllowPlaceInObjectsInRepairState: False`
  - `AllowTilesStickingOutOfTerritory: False`

- [ProjectM.CastOptionsUser]({{% relref "components/CastOptionsUser.md" %}})
  - `CastOptionsPrefab: ModifiablePrefabGUID PrefabGuid(0)`

- [ProjectM.Interactable]({{% relref "components/Interactable.md" %}})
  - `CurrentTargetSequenceGuid: SequenceGUID -1687938342`
  - `IgnoreLineOfSight: False`
  - `IgnoreBlockInteract: False`
  - `UseInteractAbilityName: False`
  - `Disabled: False`

- [ProjectM.InteractedUpon]({{% relref "components/InteractedUpon.md" %}})
  - `Interacting: False`
  - `BlockBuildingMovement: False`
  - `BlockBuildingDisassemble: False`

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

- [ProjectM.AiPrioritization_Data]({{% relref "components/AiPrioritization_Data.md" %}})
  - `UltraHighPriority: False`

- [ProjectM.AiPrioritization_State]({{% relref "components/AiPrioritization_State.md" %}})
  - `AccumulatedDeltaTime: 0`
  - `AccumulatedPriority: 0`
  - `Updated: False`

- [ProjectM.AiMoveSpeeds]({{% relref "components/AiMoveSpeeds.md" %}})
  - `Walk: 1.5`
  - `Run: 1.5`
  - `Circle: 1.5`
  - `Return: 1.5`

- [ProjectM.FactionReference]({{% relref "components/FactionReference.md" %}})
  - `FactionGuid: ModifiablePrefabGUID PrefabGuid(-1430861195)`

- [ProjectM.PlacementDestroyData]({{% relref "components/PlacementDestroyData.md" %}})
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.Buffable]({{% relref "components/Buffable.md" %}})
  - `KnockbackResistanceIndex: 0`
  - `UniqueBuffCategories: ProjectM.BuffCategoryFlag Travel, Shapeshift`

- [ProjectM.Health]({{% relref "components/Health.md" %}})
  - `MaxHealth: 1`
  - `TimeOfDeath: 0`
  - `Value: 1`
  - `MaxRecoveryHealth: 1`
  - `IsDead: False`

- [ProjectM.HealthConstants]({{% relref "components/HealthConstants.md" %}})
  - `LowHealthFactor: 0.4`
  - `DestroyOnDeath: True`
  - `DestroyAfterDuration: 120`
  - `DisableDamageSCT: False`

- [ProjectM.DynamicallyWeakenAttackers]({{% relref "components/DynamicallyWeakenAttackers.md" %}})
  - `Multiplier: 0.6`
  - `MultiplierReductionFactorPerCrowdedness: 0.9`
  - `MaxPlayers: 4`

- [ProjectM.LastTranslation]({{% relref "components/LastTranslation.md" %}})
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.Movement]({{% relref "components/Movement.md" %}})
  - `ForcePositionData: ProjectM.ForcePositionData ProjectM.ForcePositionData`
  - `MoveStopAbilityData: ProjectM.MoveStopAbilityData ProjectM.MoveStopAbilityData`
  - `MoveInput: Unity.Mathematics.float2 float2(0f, 0f)`
  - `LastNonZeroMoveInput: Unity.Mathematics.float2 float2(1f, 0f)`
  - `Speed: 3.5`
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
  - `FactionIndex: 15`

- [ProjectM.TileBounds]({{% relref "components/TileBounds.md" %}})
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- [ProjectM.TileModelSpatialData]({{% relref "components/TileModelSpatialData.md" %}})
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- [ProjectM.TileData]({{% relref "components/TileData.md" %}})
  - `Data: Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob] Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob]`

- [ProjectM.UnitRespawnTime]({{% relref "components/UnitRespawnTime.md" %}})
  - `MaxRespawnTime: 720`
  - `MinRespawnTime: 600`

- [ProjectM.BuffableFlagState]({{% relref "components/BuffableFlagState.md" %}})
  - `Value: ProjectM.ModifiableLong ProjectM.ModifiableLong`

- [ProjectM.EntityCategory]({{% relref "components/EntityCategory.md" %}})
  - `MainCategoryInt: 0`
  - `UnitCategoryInt: 4`
  - `StructureCategoryInt: 0`
  - `MaterialCategoryInt: 0`
  - `ResourceLevel: 0`

- [ProjectM.ApplyBuffOnSpawn]({{% relref "components/ApplyBuffOnSpawn.md" %}})
  - `Kind: ProjectM.SpawnBuffKind Default`
  - `SpawnTime: 0`

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
  - `CorruptionDamageReduction: 0.5`

- [ProjectM.AiMove_Shared]({{% relref "components/AiMove_Shared.md" %}})
  - `Waypoints: PathWaypoints PathWaypoints`

- [ProjectM.GenericCombatMovementData]({{% relref "components/GenericCombatMovementData.md" %}})
  - `MinDistance: 0.5`
  - `GoalDistanceInner: 1.8`
  - `GoalDistanceOuter: 1.8`
  - `MaxDistance: 2`
  - `MovePattern: 1`
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
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_fbcecjdjd`

- [ProjectM.Behaviours.BehaviourTreeBinding]({{% relref "components/BehaviourTreeBinding.md" %}})
  - `PrefabGUID: BEH_Critter_General PrefabGuid(-1694538601)`

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
  - `MaxExpansions: 4000`
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
  - `_Value: -1587402408`

- [ProjectM.AbilityGroupSlotBuffer]({{% relref "components/AbilityGroupSlotBuffer.md" %}})

- [ProjectM.BuffBuffer]({{% relref "components/BuffBuffer.md" %}})

- [ProjectM.EntitiesInView_Server]({{% relref "components/EntitiesInView_Server.md" %}})

- [ProjectM.Behaviours.BehaviourTreeStateActiveBuffsBuffer]({{% relref "components/BehaviourTreeStateActiveBuffsBuffer.md" %}})

- [ProjectM.InteractAbilityBuffer]({{% relref "components/InteractAbilityBuffer.md" %}})

- **[0]**
  - `Condition: None`
  - `Ability: AB_Interact_Pickup_AbilityGroup PrefabGuid(-1732463804)`
  - `Importance: 3`
  - `HideInteractHUDWhileCasting: False`

- [ProjectM.CreateGameplayEventsOnSpawn]({{% relref "components/CreateGameplayEventsOnSpawn.md" %}})

- **[0]**
  - `EventId: Local - 373290447`
  - `Target: ProjectM.GameplayEventTarget Self`

- [ProjectM.CreateGameplayEventsOnTimePassed]({{% relref "components/CreateGameplayEventsOnTimePassed.md" %}})

- **[0]**
  - `EventId: Local - -450386347`
  - `Target: ProjectM.GameplayEventTarget Self`
  - `Duration: 240`
  - `Time: 0`
  - `DurationFactorBasedOnLifetime: 0`

- [ProjectM.DestroyOnGameplayEvent]({{% relref "components/DestroyOnGameplayEvent.md" %}})

- **[0]**
  - `Who: ProjectM.DestroyOnGameplayEventWho Self`
  - `Type: ProjectM.DestroyOnGameplayEventType Remove`
  - `DestroyReason: ProjectM.DestroyReason Default`
  - `SetTranslationToEventTranslation: True`

- [ProjectM.GameplayEventIdMapping]({{% relref "components/GameplayEventIdMapping.md" %}})

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
  - `GameplayEventId: Local - -450386347`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- **[2]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -450386347`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [ProjectM.PlaySequenceOnGameplayEvent]({{% relref "components/PlaySequenceOnGameplayEvent.md" %}})

- **[0]**
  - `SequenceGuid: SequenceGUID -1191106637`
  - `SequencePositionTarget: ProjectM.PlaySequenceOnGameplayEventTarget ImpactLocation`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget ImpactLocation`

- [ProjectM.SpawnBuffElement]({{% relref "components/SpawnBuffElement.md" %}})

- **[0]**
  - `Kind: ProjectM.SpawnBuffKind Default`
  - `Buff: Buff_General_Spawn_Unit_Fast PrefabGuid(507944752)`
  - `OriginPositionFactor: 0`
  - `Weight: 1`

- [ProjectM.GameplayEventListeners]({{% relref "components/GameplayEventListeners.md" %}})

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
  - `GameplayEventId: Local - -450386347`

- **[2]**
  - `EventIdIndex: 2`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum Destroy`
  - `GameplayEventId: Local - -450386347`

- [ProjectM.Network.NetSnapshot]({{% relref "components/NetSnapshot.md" %}})

- **[0]**
  - `Value: 88`

- **[1]**
  - `Value: 41`

- **[2]**
  - `Value: 98`

- **[3]**
  - `Value: 161`

- **[4]**
  - `Value: 81`

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
  - `Value: 128`

- **[143]**
  - `Value: 63`

- **[144]**
  - `Value: 0`

- **[145]**
  - `Value: 0`

- **[146]**
  - `Value: 128`

- **[147]**
  - `Value: 63`

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
  - `Value: 128`

- **[159]**
  - `Value: 63`

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
  - `Value: 0`

- **[166]**
  - `Value: 0`

- **[167]**
  - `Value: 0`

- **[168]**
  - `Value: 0`

- **[169]**
  - `Value: 0`

- **[170]**
  - `Value: 96`

- **[171]**
  - `Value: 64`

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
  - `Value: 0`

- **[195]**
  - `Value: 0`

- **[196]**
  - `Value: 0`

- **[197]**
  - `Value: 0`

- **[198]**
  - `Value: 0`

- **[199]**
  - `Value: 0`

- **[200]**
  - `Value: 0`

- **[201]**
  - `Value: 0`

- **[202]**
  - `Value: 0`

- **[203]**
  - `Value: 0`

- **[204]**
  - `Value: 0`

- **[205]**
  - `Value: 0`

- **[206]**
  - `Value: 0`

- **[207]**
  - `Value: 0`

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
  - `Value: 0`

- **[216]**
  - `Value: 0`

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
  - `Value: 128`

- **[238]**
  - `Value: 63`

- **[239]**
  - `Value: 0`

- **[240]**
  - `Value: 0`

- **[241]**
  - `Value: 250`

- **[242]**
  - `Value: 67`

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
  - `Value: 128`

- **[254]**
  - `Value: 63`

- **[255]**
  - `Value: 0`

- **[256]**
  - `Value: 0`

- **[257]**
  - `Value: 15`

- **[258]**
  - `Value: 0`

- **[259]**
  - `Value: 0`

- **[260]**
  - `Value: 0`

- **[261]**
  - `Value: 2`

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
  - `Value: 128`

- **[272]**
  - `Value: 63`

- **[273]**
  - `Value: 0`

- **[274]**
  - `Value: 0`

- **[275]**
  - `Value: 240`

- **[276]**
  - `Value: 65`

- **[277]**
  - `Value: 0`

- **[278]**
  - `Value: 0`

- **[279]**
  - `Value: 0`

- **280 total elements but only showing the first 36**

- [ProjectM.Network.SnapshotFrameChangedBuffer]({{% relref "components/SnapshotFrameChangedBuffer.md" %}})

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

- **77 total elements but only showing the first 36**

- [ProjectM.Behaviours.BehaviourTreeStateBuffsBuffer]({{% relref "components/BehaviourTreeStateBuffsBuffer.md" %}})

- **[0]**
  - `BuffGuid: AB_Rat_Immaterial_Buff PrefabGuid(1746259719)`
  - `State: ProjectM.GenericEnemyState Idle`

- [ProjectM.Shared.DropTableBuffer]({{% relref "components/DropTableBuffer.md" %}})

- **[0]**
  - `DropTableGuid: DT_Pickup_T03_SilkWorm PrefabGuid(-147563786)`
  - `DropTrigger: ProjectM.Shared.DropTriggerType YieldResourcesOnPickup`
  - `RelicType: ProjectM.Shared.RelicType None`

- [ProjectM.Behaviours.BehaviourTreeNodeInstanceElement]({{% relref "components/BehaviourTreeNodeInstanceElement.md" %}})

- [ProjectM.Pathfinding.PathBuffer]({{% relref "components/PathBuffer.md" %}})

- [ProjectM.Pathfinding.PathRequestFilledSegmentBuffer]({{% relref "components/PathRequestFilledSegmentBuffer.md" %}})

- [ProjectM.Pathfinding.PathRequestSolveDebugBuffer]({{% relref "components/PathRequestSolveDebugBuffer.md" %}})

- [ProjectM.Pathfinding.UnsmoothedPathBuffer]({{% relref "components/UnsmoothedPathBuffer.md" %}})

- [Stunlock.Sequencer.BlackboardElement]({{% relref "components/BlackboardElement.md" %}})

- [ProjectM.YieldResourcesOnPickup]({{% relref "components/YieldResourcesOnPickup.md" %}})

- [ProjectM.SnapToHeight]({{% relref "components/SnapToHeight.md" %}})

- [ProjectM.HideOutsideVision]({{% relref "components/HideOutsideVision.md" %}})

- [ProjectM.MoveEntity]({{% relref "components/MoveEntity.md" %}})

- [ProjectM.TilePlacementTag]({{% relref "components/TilePlacementTag.md" %}})

- [ProjectM.DisableWhenNoPlayersInRange]({{% relref "components/DisableWhenNoPlayersInRange.md" %}})

- [ProjectM.Shared.DropTable]({{% relref "components/DropTable.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})

- [Unity.Entities.BlobAssetOwner]({{% relref "components/BlobAssetOwner.md" %}})

- [ProjectM.TileModelRegistrationState]({{% relref "components/TileModelRegistrationState.md" %}})

- [ProjectM.Network.NetworkSnapshotType]({{% relref "components/NetworkSnapshotType.md" %}})

- [ProjectM.Tiles.TileModelLayer]({{% relref "components/TileModelLayer.md" %}})

- [Unity.Physics.PhysicsWorldIndex]({{% relref "components/PhysicsWorldIndex.md" %}})
