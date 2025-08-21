---
nav_exclude: true
search_exclude: true
---

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

- [ApplyBuffOnSpawnSystem]({{% relref "systems/server/ApplyBuffOnSpawnSystem.md" %}})
- [HitCastColliderSystem_OnDestroy]({{% relref "systems/server/HitCastColliderSystem_OnDestroy.md" %}})
- [HitCastColliderSystem_OnSpawn]({{% relref "systems/server/HitCastColliderSystem_OnSpawn.md" %}})
- [HitCastColliderSystem_OnUpdate]({{% relref "systems/server/HitCastColliderSystem_OnUpdate.md" %}})
- [InitializeNewSpawnChainSystem]({{% relref "systems/server/InitializeNewSpawnChainSystem.md" %}})
- [MinionSpawnSystem]({{% relref "systems/server/MinionSpawnSystem.md" %}})
- [MountBuffSpawnSystem_Server]({{% relref "systems/server/MountBuffSpawnSystem_Server.md" %}})
- [MoveTowardsRotationSystem_Shared]({{% relref "systems/server/MoveTowardsRotationSystem_Shared.md" %}})
- [NetworkInterpolationSystem_Server]({{% relref "systems/server/NetworkInterpolationSystem_Server.md" %}})
- [OffsetTranslationOnSpawnSystem]({{% relref "systems/server/OffsetTranslationOnSpawnSystem.md" %}})
- [RandomizedSpawnChainUpdateSystem]({{% relref "systems/server/RandomizedSpawnChainUpdateSystem.md" %}})
- [RegisterSpawnedChunkObjectsSystem_ReactToSpawn]({{% relref "systems/server/RegisterSpawnedChunkObjectsSystem_ReactToSpawn.md" %}})
- [SpawnTransformSystem_OnSpawn]({{% relref "systems/server/SpawnTransformSystem_OnSpawn.md" %}})
- [Spawn_DashSystem]({{% relref "systems/server/Spawn_DashSystem.md" %}})
- [Spawn_TravelBuffSystem]({{% relref "systems/server/Spawn_TravelBuffSystem.md" %}})
- [SpellMovementSystem_Spawn]({{% relref "systems/server/SpellMovementSystem_Spawn.md" %}})
- [SpellMovementSystem_Update]({{% relref "systems/server/SpellMovementSystem_Update.md" %}})
- [StaticTransformUpdateSystem_ReactToSpawn_Server]({{% relref "systems/server/StaticTransformUpdateSystem_ReactToSpawn_Server.md" %}})

## Client Systems

- [ActiveJewelCraftingStationSequenceSystem]({{% relref "systems/client/ActiveJewelCraftingStationSequenceSystem.md" %}})
- [ActiveLightningRodSequenceSystem]({{% relref "systems/client/ActiveLightningRodSequenceSystem.md" %}})
- [ActiveRefinementSequenceSystem]({{% relref "systems/client/ActiveRefinementSequenceSystem.md" %}})
- [ActiveResearchstationSequenceSystem]({{% relref "systems/client/ActiveResearchstationSequenceSystem.md" %}})
- [ActiveSalvageSequenceSystem]({{% relref "systems/client/ActiveSalvageSequenceSystem.md" %}})
- [ActiveUnitSpawnerstationSequenceSystem]({{% relref "systems/client/ActiveUnitSpawnerstationSequenceSystem.md" %}})
- [AreaSequenceSystem]({{% relref "systems/client/AreaSequenceSystem.md" %}})
- [BonfireSystem_Client]({{% relref "systems/client/BonfireSystem_Client.md" %}})
- [ConditionalInfoSystem]({{% relref "systems/client/ConditionalInfoSystem.md" %}})
- [DeserializeStaticTransformSystem]({{% relref "systems/client/DeserializeStaticTransformSystem.md" %}})
- [FreeCameraSystem]({{% relref "systems/client/FreeCameraSystem.md" %}})
- [GetAndSetHybridModelTransformSystem]({{% relref "systems/client/GetAndSetHybridModelTransformSystem.md" %}})
- [HybridCameraSystem]({{% relref "systems/client/HybridCameraSystem.md" %}})
- [MountBuffSpawnSystem_Client]({{% relref "systems/client/MountBuffSpawnSystem_Client.md" %}})
- [MoveTowardsRotationSystem_Shared]({{% relref "systems/client/MoveTowardsRotationSystem_Shared.md" %}})
- [NetworkInterpolationSystem_Client]({{% relref "systems/client/NetworkInterpolationSystem_Client.md" %}})
- [OrbitCameraSystem]({{% relref "systems/client/OrbitCameraSystem.md" %}})
- [PlayMountedSequenceSystem]({{% relref "systems/client/PlayMountedSequenceSystem.md" %}})
- [Pull_RotationSystem]({{% relref "systems/client/Pull_RotationSystem.md" %}})
- [ServantCoffinstationSequenceSystem]({{% relref "systems/client/ServantCoffinstationSequenceSystem.md" %}})
- [SpawnAimPreviewProjectileSystem]({{% relref "systems/client/SpawnAimPreviewProjectileSystem.md" %}})
- [SpawnAimPreviewTargetAoeSystem]({{% relref "systems/client/SpawnAimPreviewTargetAoeSystem.md" %}})
- [SpawnSequenceForEntitySystem]({{% relref "systems/client/SpawnSequenceForEntitySystem.md" %}})
- [SpellMovementSystem_Spawn]({{% relref "systems/client/SpellMovementSystem_Spawn.md" %}})
- [SpellMovementSystem_Update]({{% relref "systems/client/SpellMovementSystem_Update.md" %}})
- [TargetAOESequenceSystem]({{% relref "systems/client/TargetAOESequenceSystem.md" %}})
- [TargetAoE_DestroySystem]({{% relref "systems/client/TargetAoE_DestroySystem.md" %}})
- [TravelBuffSequenceSpawnSystem]({{% relref "systems/client/TravelBuffSequenceSpawnSystem.md" %}})
- [TravelBuffSequenceSystem]({{% relref "systems/client/TravelBuffSequenceSystem.md" %}})
