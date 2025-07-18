---
nav_exclude: true
search_exclude: true
---

# Rotation

```csharp
public struct Rotation
{
	static Rotation()
	{
		Il2CppClassPointerStore<Rotation>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Transforms", "Rotation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Rotation>.NativeClassPtr);
		Rotation.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Rotation>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Rotation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public quaternion Value;
}
```

## Server Systems

- [ApplyBuffOnSpawnSystem](/systems/server/ApplyBuffOnSpawnSystem)
- [HitCastColliderSystem_OnDestroy](/systems/server/HitCastColliderSystem_OnDestroy)
- [HitCastColliderSystem_OnSpawn](/systems/server/HitCastColliderSystem_OnSpawn)
- [HitCastColliderSystem_OnUpdate](/systems/server/HitCastColliderSystem_OnUpdate)
- [InitializeNewSpawnChainSystem](/systems/server/InitializeNewSpawnChainSystem)
- [MinionSpawnSystem](/systems/server/MinionSpawnSystem)
- [MountBuffSpawnSystem_Server](/systems/server/MountBuffSpawnSystem_Server)
- [MoveTowardsRotationSystem_Shared](/systems/server/MoveTowardsRotationSystem_Shared)
- [NetworkInterpolationSystem_Server](/systems/server/NetworkInterpolationSystem_Server)
- [OffsetTranslationOnSpawnSystem](/systems/server/OffsetTranslationOnSpawnSystem)
- [RandomizedSpawnChainUpdateSystem](/systems/server/RandomizedSpawnChainUpdateSystem)
- [RegisterSpawnedChunkObjectsSystem_ReactToSpawn](/systems/server/RegisterSpawnedChunkObjectsSystem_ReactToSpawn)
- [SpawnTransformSystem_OnSpawn](/systems/server/SpawnTransformSystem_OnSpawn)
- [Spawn_DashSystem](/systems/server/Spawn_DashSystem)
- [Spawn_TravelBuffSystem](/systems/server/Spawn_TravelBuffSystem)
- [SpellMovementSystem_Spawn](/systems/server/SpellMovementSystem_Spawn)
- [SpellMovementSystem_Update](/systems/server/SpellMovementSystem_Update)
- [StaticTransformUpdateSystem_ReactToSpawn_Server](/systems/server/StaticTransformUpdateSystem_ReactToSpawn_Server)

## Client Systems

- [ActiveJewelCraftingStationSequenceSystem](/systems/client/ActiveJewelCraftingStationSequenceSystem)
- [ActiveLightningRodSequenceSystem](/systems/client/ActiveLightningRodSequenceSystem)
- [ActiveRefinementSequenceSystem](/systems/client/ActiveRefinementSequenceSystem)
- [ActiveResearchstationSequenceSystem](/systems/client/ActiveResearchstationSequenceSystem)
- [ActiveSalvageSequenceSystem](/systems/client/ActiveSalvageSequenceSystem)
- [ActiveUnitSpawnerstationSequenceSystem](/systems/client/ActiveUnitSpawnerstationSequenceSystem)
- [AreaSequenceSystem](/systems/client/AreaSequenceSystem)
- [BonfireSystem_Client](/systems/client/BonfireSystem_Client)
- [ConditionalInfoSystem](/systems/client/ConditionalInfoSystem)
- [DeserializeStaticTransformSystem](/systems/client/DeserializeStaticTransformSystem)
- [FreeCameraSystem](/systems/client/FreeCameraSystem)
- [GetAndSetHybridModelTransformSystem](/systems/client/GetAndSetHybridModelTransformSystem)
- [HybridCameraSystem](/systems/client/HybridCameraSystem)
- [MountBuffSpawnSystem_Client](/systems/client/MountBuffSpawnSystem_Client)
- [MoveTowardsRotationSystem_Shared](/systems/client/MoveTowardsRotationSystem_Shared)
- [NetworkInterpolationSystem_Client](/systems/client/NetworkInterpolationSystem_Client)
- [OrbitCameraSystem](/systems/client/OrbitCameraSystem)
- [PlayMountedSequenceSystem](/systems/client/PlayMountedSequenceSystem)
- [Pull_RotationSystem](/systems/client/Pull_RotationSystem)
- [ServantCoffinstationSequenceSystem](/systems/client/ServantCoffinstationSequenceSystem)
- [SpawnAimPreviewProjectileSystem](/systems/client/SpawnAimPreviewProjectileSystem)
- [SpawnAimPreviewTargetAoeSystem](/systems/client/SpawnAimPreviewTargetAoeSystem)
- [SpawnSequenceForEntitySystem](/systems/client/SpawnSequenceForEntitySystem)
- [SpellMovementSystem_Spawn](/systems/client/SpellMovementSystem_Spawn)
- [SpellMovementSystem_Update](/systems/client/SpellMovementSystem_Update)
- [TargetAOESequenceSystem](/systems/client/TargetAOESequenceSystem)
- [TargetAoE_DestroySystem](/systems/client/TargetAoE_DestroySystem)
- [TravelBuffSequenceSpawnSystem](/systems/client/TravelBuffSequenceSpawnSystem)
- [TravelBuffSequenceSystem](/systems/client/TravelBuffSequenceSystem)
