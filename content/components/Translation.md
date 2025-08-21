---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Translation
{
	static Translation()
	{
		Il2CppClassPointerStore<Translation>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Transforms", "Translation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Translation>.NativeClassPtr);
		Translation.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Translation>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Translation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public float3 Value;
}
```

## Server Systems

- [ApplyBuffOnSpawnSystem]({{% relref "systems/server/ApplyBuffOnSpawnSystem.md" %}})
- [CheckInSunSystem]({{% relref "systems/server/CheckInSunSystem.md" %}})
- [DashUpdateLastTranslationSystem]({{% relref "systems/server/DashUpdateLastTranslationSystem.md" %}})
- [DropInventorySystem]({{% relref "systems/server/DropInventorySystem.md" %}})
- [FlyLastValidPositionSystem]({{% relref "systems/server/FlyLastValidPositionSystem.md" %}})
- [GetTranslationAlongPatrolOnSpawnSystem]({{% relref "systems/server/GetTranslationAlongPatrolOnSpawnSystem.md" %}})
- [HeightCorrectionSpawnSystem]({{% relref "systems/server/HeightCorrectionSpawnSystem.md" %}})
- [HeightCorrectionSystem]({{% relref "systems/server/HeightCorrectionSystem.md" %}})
- [InitializeNewSpawnChainSystem]({{% relref "systems/server/InitializeNewSpawnChainSystem.md" %}})
- [MapIconSpawnSystem]({{% relref "systems/server/MapIconSpawnSystem.md" %}})
- [MinionSpawnSystem]({{% relref "systems/server/MinionSpawnSystem.md" %}})
- [MountBuffSpawnSystem_Server]({{% relref "systems/server/MountBuffSpawnSystem_Server.md" %}})
- [MoveTowardsPositionSystem_Server_Create]({{% relref "systems/server/MoveTowardsPositionSystem_Server_Create.md" %}})
- [MoveTowardsPositionSystem_Server_Update]({{% relref "systems/server/MoveTowardsPositionSystem_Server_Update.md" %}})
- [MoveTowardsPositionSystem_Shared_Update]({{% relref "systems/server/MoveTowardsPositionSystem_Shared_Update.md" %}})
- [NetworkInterpolationSystem_Server]({{% relref "systems/server/NetworkInterpolationSystem_Server.md" %}})
- [OffsetTranslationOnSpawnSystem]({{% relref "systems/server/OffsetTranslationOnSpawnSystem.md" %}})
- [PlayerMapZonesDiscoverySystem]({{% relref "systems/server/PlayerMapZonesDiscoverySystem.md" %}})
- [ProjectileSystem]({{% relref "systems/server/ProjectileSystem.md" %}})
- [RandomizedSpawnChainUpdateSystem]({{% relref "systems/server/RandomizedSpawnChainUpdateSystem.md" %}})
- [RegisterSpawnedChunkObjectsSystem_ReactToSpawn]({{% relref "systems/server/RegisterSpawnedChunkObjectsSystem_ReactToSpawn.md" %}})
- [ReplaceDropTablesByChunkSystem]({{% relref "systems/server/ReplaceDropTablesByChunkSystem.md" %}})
- [RevealMapSystem]({{% relref "systems/server/RevealMapSystem.md" %}})
- [ServantSummonIfIdleOutsideTerritorySystem]({{% relref "systems/server/ServantSummonIfIdleOutsideTerritorySystem.md" %}})
- [SetPreCombatPositionSystem]({{% relref "systems/server/SetPreCombatPositionSystem.md" %}})
- [SetPreCombatPositionSystem_Spawn]({{% relref "systems/server/SetPreCombatPositionSystem_Spawn.md" %}})
- [SpawnTransformSystem_OnSpawn]({{% relref "systems/server/SpawnTransformSystem_OnSpawn.md" %}})
- [Spawn_DashSystem]({{% relref "systems/server/Spawn_DashSystem.md" %}})
- [Spawn_TravelBuffSystem]({{% relref "systems/server/Spawn_TravelBuffSystem.md" %}})
- [SpellMovementSystem_Spawn]({{% relref "systems/server/SpellMovementSystem_Spawn.md" %}})
- [SpellMovementSystem_Update]({{% relref "systems/server/SpellMovementSystem_Update.md" %}})
- [StaticTransformUpdateSystem_ReactToSpawn_Server]({{% relref "systems/server/StaticTransformUpdateSystem_ReactToSpawn_Server.md" %}})
- [TeleportIncorrectPositionSystem]({{% relref "systems/server/TeleportIncorrectPositionSystem.md" %}})
- [TravelBuffUpdateLastTranslationSystem]({{% relref "systems/server/TravelBuffUpdateLastTranslationSystem.md" %}})
- [UpdateWaypointRegionSystem]({{% relref "systems/server/UpdateWaypointRegionSystem.md" %}})
- [UserActivityGridSystem]({{% relref "systems/server/UserActivityGridSystem.md" %}})
- [UserTranslationCopySystem]({{% relref "systems/server/UserTranslationCopySystem.md" %}})
- [WalkBackAndForthSystem]({{% relref "systems/server/WalkBackAndForthSystem.md" %}})
- [WarEventRegistrySystem]({{% relref "systems/server/WarEventRegistrySystem.md" %}})
- [YieldResourcesSystem_Dead]({{% relref "systems/server/YieldResourcesSystem_Dead.md" %}})

## Client Systems

- [ActiveJewelCraftingStationSequenceSystem]({{% relref "systems/client/ActiveJewelCraftingStationSequenceSystem.md" %}})
- [ActiveLightningRodSequenceSystem]({{% relref "systems/client/ActiveLightningRodSequenceSystem.md" %}})
- [ActiveRefinementSequenceSystem]({{% relref "systems/client/ActiveRefinementSequenceSystem.md" %}})
- [ActiveResearchstationSequenceSystem]({{% relref "systems/client/ActiveResearchstationSequenceSystem.md" %}})
- [ActiveSalvageSequenceSystem]({{% relref "systems/client/ActiveSalvageSequenceSystem.md" %}})
- [ActiveUnitSpawnerstationSequenceSystem]({{% relref "systems/client/ActiveUnitSpawnerstationSequenceSystem.md" %}})
- [AiMoveSystem_Client_Spawn]({{% relref "systems/client/AiMoveSystem_Client_Spawn.md" %}})
- [AreaSequenceSystem]({{% relref "systems/client/AreaSequenceSystem.md" %}})
- [BonfireSystem_Client]({{% relref "systems/client/BonfireSystem_Client.md" %}})
- [ClanMenuMapper]({{% relref "systems/client/ClanMenuMapper.md" %}})
- [ConditionalInfoSystem]({{% relref "systems/client/ConditionalInfoSystem.md" %}})
- [DebugWorldLineOfSightBoundsSystem]({{% relref "systems/client/DebugWorldLineOfSightBoundsSystem.md" %}})
- [DebugWorldRestrictionAreaBoundsSystem]({{% relref "systems/client/DebugWorldRestrictionAreaBoundsSystem.md" %}})
- [DebugWorldSurfaceFluffBoundsSystem]({{% relref "systems/client/DebugWorldSurfaceFluffBoundsSystem.md" %}})
- [DebugWorldTileCollisionBoundsSystem]({{% relref "systems/client/DebugWorldTileCollisionBoundsSystem.md" %}})
- [DebugWorldTileHeightBoundsSystem]({{% relref "systems/client/DebugWorldTileHeightBoundsSystem.md" %}})
- [DebugWorldTilePlacementBoundsSystem]({{% relref "systems/client/DebugWorldTilePlacementBoundsSystem.md" %}})
- [DeserializeMapIconSystem]({{% relref "systems/client/DeserializeMapIconSystem.md" %}})
- [DeserializeStaticTransformSystem]({{% relref "systems/client/DeserializeStaticTransformSystem.md" %}})
- [FreeCameraSystem]({{% relref "systems/client/FreeCameraSystem.md" %}})
- [GameplayInputSystem]({{% relref "systems/client/GameplayInputSystem.md" %}})
- [GetAndSetHybridModelTransformSystem]({{% relref "systems/client/GetAndSetHybridModelTransformSystem.md" %}})
- [GlobalWorldVFXInstanceSystem]({{% relref "systems/client/GlobalWorldVFXInstanceSystem.md" %}})
- [HeightCorrectionSystem]({{% relref "systems/client/HeightCorrectionSystem.md" %}})
- [HybridCameraSystem]({{% relref "systems/client/HybridCameraSystem.md" %}})
- [LightningStormLightSpawnSystem]({{% relref "systems/client/LightningStormLightSpawnSystem.md" %}})
- [MountBuffSpawnSystem_Client]({{% relref "systems/client/MountBuffSpawnSystem_Client.md" %}})
- [MoveTowardsPositionSystem_Shared_Update]({{% relref "systems/client/MoveTowardsPositionSystem_Shared_Update.md" %}})
- [NetworkInterpolationSystem_Client]({{% relref "systems/client/NetworkInterpolationSystem_Client.md" %}})
- [OrbitCameraSystem]({{% relref "systems/client/OrbitCameraSystem.md" %}})
- [ProjectileSystem]({{% relref "systems/client/ProjectileSystem.md" %}})
- [Pull_PositionSystem]({{% relref "systems/client/Pull_PositionSystem.md" %}})
- [ReplaceMapIconNamesByChunkSystem]({{% relref "systems/client/ReplaceMapIconNamesByChunkSystem.md" %}})
- [ServantCoffinstationSequenceSystem]({{% relref "systems/client/ServantCoffinstationSequenceSystem.md" %}})
- [ShowTileCollisionHistorySystem]({{% relref "systems/client/ShowTileCollisionHistorySystem.md" %}})
- [ShowTileCollisionHistorySystem_Client]({{% relref "systems/client/ShowTileCollisionHistorySystem_Client.md" %}})
- [SpawnAimPreviewProjectileSystem]({{% relref "systems/client/SpawnAimPreviewProjectileSystem.md" %}})
- [SpawnAimPreviewTargetAoeSystem]({{% relref "systems/client/SpawnAimPreviewTargetAoeSystem.md" %}})
- [SpawnSequenceForEntitySystem]({{% relref "systems/client/SpawnSequenceForEntitySystem.md" %}})
- [SpellMovementSystem_Spawn]({{% relref "systems/client/SpellMovementSystem_Spawn.md" %}})
- [SpellMovementSystem_Update]({{% relref "systems/client/SpellMovementSystem_Update.md" %}})
- [TargetAOESequenceSystem]({{% relref "systems/client/TargetAOESequenceSystem.md" %}})
- [UserActivityGridSystem]({{% relref "systems/client/UserActivityGridSystem.md" %}})
- [UserTranslationCopySystem]({{% relref "systems/client/UserTranslationCopySystem.md" %}})
- [VisualizeMapMarkerGuidanceSystem]({{% relref "systems/client/VisualizeMapMarkerGuidanceSystem.md" %}})
- [VoiceOverlaySystem]({{% relref "systems/client/VoiceOverlaySystem.md" %}})
- [WarEventRegistrySystem]({{% relref "systems/client/WarEventRegistrySystem.md" %}})
- [WindMotorSystem]({{% relref "systems/client/WindMotorSystem.md" %}})
