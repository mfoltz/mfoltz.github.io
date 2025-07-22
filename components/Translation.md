---
nav_exclude: true
search_exclude: false
---

# Translation

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

- [ApplyBuffOnSpawnSystem](/systems/server/ApplyBuffOnSpawnSystem)
- [CheckInSunSystem](/systems/server/CheckInSunSystem)
- [DashUpdateLastTranslationSystem](/systems/server/DashUpdateLastTranslationSystem)
- [DropInventorySystem](/systems/server/DropInventorySystem)
- [FlyLastValidPositionSystem](/systems/server/FlyLastValidPositionSystem)
- [GetTranslationAlongPatrolOnSpawnSystem](/systems/server/GetTranslationAlongPatrolOnSpawnSystem)
- [HeightCorrectionSpawnSystem](/systems/server/HeightCorrectionSpawnSystem)
- [HeightCorrectionSystem](/systems/server/HeightCorrectionSystem)
- [InitializeNewSpawnChainSystem](/systems/server/InitializeNewSpawnChainSystem)
- [MapIconSpawnSystem](/systems/server/MapIconSpawnSystem)
- [MinionSpawnSystem](/systems/server/MinionSpawnSystem)
- [MountBuffSpawnSystem_Server](/systems/server/MountBuffSpawnSystem_Server)
- [MoveTowardsPositionSystem_Server_Create](/systems/server/MoveTowardsPositionSystem_Server_Create)
- [MoveTowardsPositionSystem_Server_Update](/systems/server/MoveTowardsPositionSystem_Server_Update)
- [MoveTowardsPositionSystem_Shared_Update](/systems/server/MoveTowardsPositionSystem_Shared_Update)
- [NetworkInterpolationSystem_Server](/systems/server/NetworkInterpolationSystem_Server)
- [OffsetTranslationOnSpawnSystem](/systems/server/OffsetTranslationOnSpawnSystem)
- [PlayerMapZonesDiscoverySystem](/systems/server/PlayerMapZonesDiscoverySystem)
- [ProjectileSystem](/systems/server/ProjectileSystem)
- [RandomizedSpawnChainUpdateSystem](/systems/server/RandomizedSpawnChainUpdateSystem)
- [RegisterSpawnedChunkObjectsSystem_ReactToSpawn](/systems/server/RegisterSpawnedChunkObjectsSystem_ReactToSpawn)
- [ReplaceDropTablesByChunkSystem](/systems/server/ReplaceDropTablesByChunkSystem)
- [RevealMapSystem](/systems/server/RevealMapSystem)
- [ServantSummonIfIdleOutsideTerritorySystem](/systems/server/ServantSummonIfIdleOutsideTerritorySystem)
- [SetPreCombatPositionSystem](/systems/server/SetPreCombatPositionSystem)
- [SetPreCombatPositionSystem_Spawn](/systems/server/SetPreCombatPositionSystem_Spawn)
- [SpawnTransformSystem_OnSpawn](/systems/server/SpawnTransformSystem_OnSpawn)
- [Spawn_DashSystem](/systems/server/Spawn_DashSystem)
- [Spawn_TravelBuffSystem](/systems/server/Spawn_TravelBuffSystem)
- [SpellMovementSystem_Spawn](/systems/server/SpellMovementSystem_Spawn)
- [SpellMovementSystem_Update](/systems/server/SpellMovementSystem_Update)
- [StaticTransformUpdateSystem_ReactToSpawn_Server](/systems/server/StaticTransformUpdateSystem_ReactToSpawn_Server)
- [TeleportIncorrectPositionSystem](/systems/server/TeleportIncorrectPositionSystem)
- [TravelBuffUpdateLastTranslationSystem](/systems/server/TravelBuffUpdateLastTranslationSystem)
- [UpdateWaypointRegionSystem](/systems/server/UpdateWaypointRegionSystem)
- [UserActivityGridSystem](/systems/server/UserActivityGridSystem)
- [UserTranslationCopySystem](/systems/server/UserTranslationCopySystem)
- [WalkBackAndForthSystem](/systems/server/WalkBackAndForthSystem)
- [WarEventRegistrySystem](/systems/server/WarEventRegistrySystem)
- [YieldResourcesSystem_Dead](/systems/server/YieldResourcesSystem_Dead)

## Client Systems

- [ActiveJewelCraftingStationSequenceSystem](/systems/client/ActiveJewelCraftingStationSequenceSystem)
- [ActiveLightningRodSequenceSystem](/systems/client/ActiveLightningRodSequenceSystem)
- [ActiveRefinementSequenceSystem](/systems/client/ActiveRefinementSequenceSystem)
- [ActiveResearchstationSequenceSystem](/systems/client/ActiveResearchstationSequenceSystem)
- [ActiveSalvageSequenceSystem](/systems/client/ActiveSalvageSequenceSystem)
- [ActiveUnitSpawnerstationSequenceSystem](/systems/client/ActiveUnitSpawnerstationSequenceSystem)
- [AiMoveSystem_Client_Spawn](/systems/client/AiMoveSystem_Client_Spawn)
- [AreaSequenceSystem](/systems/client/AreaSequenceSystem)
- [BonfireSystem_Client](/systems/client/BonfireSystem_Client)
- [ClanMenuMapper](/systems/client/ClanMenuMapper)
- [ConditionalInfoSystem](/systems/client/ConditionalInfoSystem)
- [DebugWorldLineOfSightBoundsSystem](/systems/client/DebugWorldLineOfSightBoundsSystem)
- [DebugWorldRestrictionAreaBoundsSystem](/systems/client/DebugWorldRestrictionAreaBoundsSystem)
- [DebugWorldSurfaceFluffBoundsSystem](/systems/client/DebugWorldSurfaceFluffBoundsSystem)
- [DebugWorldTileCollisionBoundsSystem](/systems/client/DebugWorldTileCollisionBoundsSystem)
- [DebugWorldTileHeightBoundsSystem](/systems/client/DebugWorldTileHeightBoundsSystem)
- [DebugWorldTilePlacementBoundsSystem](/systems/client/DebugWorldTilePlacementBoundsSystem)
- [DeserializeMapIconSystem](/systems/client/DeserializeMapIconSystem)
- [DeserializeStaticTransformSystem](/systems/client/DeserializeStaticTransformSystem)
- [FreeCameraSystem](/systems/client/FreeCameraSystem)
- [GameplayInputSystem](/systems/client/GameplayInputSystem)
- [GetAndSetHybridModelTransformSystem](/systems/client/GetAndSetHybridModelTransformSystem)
- [GlobalWorldVFXInstanceSystem](/systems/client/GlobalWorldVFXInstanceSystem)
- [HeightCorrectionSystem](/systems/client/HeightCorrectionSystem)
- [HybridCameraSystem](/systems/client/HybridCameraSystem)
- [LightningStormLightSpawnSystem](/systems/client/LightningStormLightSpawnSystem)
- [MountBuffSpawnSystem_Client](/systems/client/MountBuffSpawnSystem_Client)
- [MoveTowardsPositionSystem_Shared_Update](/systems/client/MoveTowardsPositionSystem_Shared_Update)
- [NetworkInterpolationSystem_Client](/systems/client/NetworkInterpolationSystem_Client)
- [OrbitCameraSystem](/systems/client/OrbitCameraSystem)
- [ProjectileSystem](/systems/client/ProjectileSystem)
- [Pull_PositionSystem](/systems/client/Pull_PositionSystem)
- [ReplaceMapIconNamesByChunkSystem](/systems/client/ReplaceMapIconNamesByChunkSystem)
- [ServantCoffinstationSequenceSystem](/systems/client/ServantCoffinstationSequenceSystem)
- [ShowTileCollisionHistorySystem](/systems/client/ShowTileCollisionHistorySystem)
- [ShowTileCollisionHistorySystem_Client](/systems/client/ShowTileCollisionHistorySystem_Client)
- [SpawnAimPreviewProjectileSystem](/systems/client/SpawnAimPreviewProjectileSystem)
- [SpawnAimPreviewTargetAoeSystem](/systems/client/SpawnAimPreviewTargetAoeSystem)
- [SpawnSequenceForEntitySystem](/systems/client/SpawnSequenceForEntitySystem)
- [SpellMovementSystem_Spawn](/systems/client/SpellMovementSystem_Spawn)
- [SpellMovementSystem_Update](/systems/client/SpellMovementSystem_Update)
- [TargetAOESequenceSystem](/systems/client/TargetAOESequenceSystem)
- [UserActivityGridSystem](/systems/client/UserActivityGridSystem)
- [UserTranslationCopySystem](/systems/client/UserTranslationCopySystem)
- [VisualizeMapMarkerGuidanceSystem](/systems/client/VisualizeMapMarkerGuidanceSystem)
- [VoiceOverlaySystem](/systems/client/VoiceOverlaySystem)
- [WarEventRegistrySystem](/systems/client/WarEventRegistrySystem)
- [WindMotorSystem](/systems/client/WindMotorSystem)
