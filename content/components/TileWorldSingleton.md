---
nav_exclude: true
search_exclude: true
---

```csharp
public struct TileWorldSingleton
{
	static TileWorldSingleton()
	{
		Il2CppClassPointerStore<TileWorldSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Tiles", "TileWorldSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TileWorldSingleton>.NativeClassPtr);
		TileWorldSingleton.NativeFieldInfoPtr__TileWorld = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TileWorldSingleton>.NativeClassPtr, "_TileWorld");
		TileWorldSingleton.NativeFieldInfoPtr__ReadDependency = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TileWorldSingleton>.NativeClassPtr, "_ReadDependency");
		TileWorldSingleton.NativeFieldInfoPtr__WriteDependency = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TileWorldSingleton>.NativeClassPtr, "_WriteDependency");
		TileWorldSingleton.NativeMethodInfoPtr__ctor_Public_Void_TileWorldWriteable_Allocator_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TileWorldSingleton>.NativeClassPtr, 100671351);
		TileWorldSingleton.NativeMethodInfoPtr_GetTileWorld_Public_TileWorld_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TileWorldSingleton>.NativeClassPtr, 100671352);
		TileWorldSingleton.NativeMethodInfoPtr_GetTileWorldAsync_Public_TileWorld_byref_JobHandle_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TileWorldSingleton>.NativeClassPtr, 100671353);
		TileWorldSingleton.NativeMethodInfoPtr_AddReaderJobHandle_Public_Void_JobHandle_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TileWorldSingleton>.NativeClassPtr, 100671354);
		TileWorldSingleton.NativeMethodInfoPtr_AddWriterJobHandle_Public_Void_JobHandle_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TileWorldSingleton>.NativeClassPtr, 100671355);
		TileWorldSingleton.NativeMethodInfoPtr_GetWriteable_Public_TileWorldWriteable_byref_JobHandle_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TileWorldSingleton>.NativeClassPtr, 100671356);
		TileWorldSingleton.NativeMethodInfoPtr_Dispose_Public_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TileWorldSingleton>.NativeClassPtr, 100671357);
	}

	public unsafe TileWorldSingleton(TileWorldWriteable tileWorld, Allocator allocator)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref tileWorld;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref allocator;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileWorldSingleton.NativeMethodInfoPtr__ctor_Public_Void_TileWorldWriteable_Allocator_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe TileWorld GetTileWorld()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileWorldSingleton.NativeMethodInfoPtr_GetTileWorld_Public_TileWorld_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe TileWorld GetTileWorldAsync(out JobHandle readDependency)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &readDependency;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileWorldSingleton.NativeMethodInfoPtr_GetTileWorldAsync_Public_TileWorld_byref_JobHandle_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe void AddReaderJobHandle(JobHandle readDependency)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref readDependency;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileWorldSingleton.NativeMethodInfoPtr_AddReaderJobHandle_Public_Void_JobHandle_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void AddWriterJobHandle(JobHandle writeDependency)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref writeDependency;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileWorldSingleton.NativeMethodInfoPtr_AddWriterJobHandle_Public_Void_JobHandle_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe TileWorldWriteable GetWriteable(out JobHandle writeDependency)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &writeDependency;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileWorldSingleton.NativeMethodInfoPtr_GetWriteable_Public_TileWorldWriteable_byref_JobHandle_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe void Dispose()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileWorldSingleton.NativeMethodInfoPtr_Dispose_Public_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TileWorldSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr__TileWorld;
	private static readonly IntPtr NativeFieldInfoPtr__ReadDependency;
	private static readonly IntPtr NativeFieldInfoPtr__WriteDependency;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_TileWorldWriteable_Allocator_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetTileWorld_Public_TileWorld_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetTileWorldAsync_Public_TileWorld_byref_JobHandle_0;
	private static readonly IntPtr NativeMethodInfoPtr_AddReaderJobHandle_Public_Void_JobHandle_0;
	private static readonly IntPtr NativeMethodInfoPtr_AddWriterJobHandle_Public_Void_JobHandle_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetWriteable_Public_TileWorldWriteable_byref_JobHandle_0;
	private static readonly IntPtr NativeMethodInfoPtr_Dispose_Public_Void_0;

	public TileWorldWriteable _TileWorld;

	public JobHandleManager _ReadDependency;

	public JobHandleManager _WriteDependency;
}
```

## Server Systems

- [AlertAlliesOnDeathSystem]({{% relref "systems/server/AlertAlliesOnDeathSystem.md" %}})
- [AssetSwapFloorUpdateSystem]({{% relref "systems/server/AssetSwapFloorUpdateSystem.md" %}})
- [CastleFloorAndWallsUpdateSystem]({{% relref "systems/server/CastleFloorAndWallsUpdateSystem.md" %}})
- [CastleRailingsSystem]({{% relref "systems/server/CastleRailingsSystem.md" %}})
- [DropItemThrowSystem]({{% relref "systems/server/DropItemThrowSystem.md" %}})
- [FlyLastValidPositionSystem]({{% relref "systems/server/FlyLastValidPositionSystem.md" %}})
- [GenerateCastleSystem]({{% relref "systems/server/GenerateCastleSystem.md" %}})
- [HandleGameplayEventsRecursiveSystem]({{% relref "systems/server/HandleGameplayEventsRecursiveSystem.md" %}})
- [HeightCorrectionSystem]({{% relref "systems/server/HeightCorrectionSystem.md" %}})
- [InteractValidateAndStopSystemServer]({{% relref "systems/server/InteractValidateAndStopSystemServer.md" %}})
- [PathfindingSystem]({{% relref "systems/server/PathfindingSystem.md" %}})
- [PlaceTileModelSystem]({{% relref "systems/server/PlaceTileModelSystem.md" %}})
- [ProjectileSystem]({{% relref "systems/server/ProjectileSystem.md" %}})
- [SpawnTransformSystem_OnReactToTransform]({{% relref "systems/server/SpawnTransformSystem_OnReactToTransform.md" %}})
- [TargetAOESystem]({{% relref "systems/server/TargetAOESystem.md" %}})
- [TravelToTargetSpawnSystem]({{% relref "systems/server/TravelToTargetSpawnSystem.md" %}})
- [UpdateTileCellsSystem_Server]({{% relref "systems/server/UpdateTileCellsSystem_Server.md" %}})
- [UpdateTileCellsSystem_ServerOnPersistenceLoad]({{% relref "systems/server/UpdateTileCellsSystem_ServerOnPersistenceLoad.md" %}})

## Client Systems

- [AimPreviewGeneralSystem]({{% relref "systems/client/AimPreviewGeneralSystem.md" %}})
- [AimPreviewProjectileSystem]({{% relref "systems/client/AimPreviewProjectileSystem.md" %}})
- [AimPreviewTargetAoeSystem]({{% relref "systems/client/AimPreviewTargetAoeSystem.md" %}})
- [AimPreviewTravelBuffSystem]({{% relref "systems/client/AimPreviewTravelBuffSystem.md" %}})
- [AssetSwapFloorUpdateSystem]({{% relref "systems/client/AssetSwapFloorUpdateSystem.md" %}})
- [BuildModeSystem]({{% relref "systems/client/BuildModeSystem.md" %}})
- [CastleFloorAndWallsUpdateSystem]({{% relref "systems/client/CastleFloorAndWallsUpdateSystem.md" %}})
- [CastleRailingsSystem]({{% relref "systems/client/CastleRailingsSystem.md" %}})
- [ClientSequencerConsoleCommandSystem]({{% relref "systems/client/ClientSequencerConsoleCommandSystem.md" %}})
- [CritterSystem]({{% relref "systems/client/CritterSystem.md" %}})
- [GameplayInputSystem]({{% relref "systems/client/GameplayInputSystem.md" %}})
- [GlobalCritterSpawnManager]({{% relref "systems/client/GlobalCritterSpawnManager.md" %}})
- [HeightCorrectionSystem]({{% relref "systems/client/HeightCorrectionSystem.md" %}})
- [HybridBoneRopeSystem]({{% relref "systems/client/HybridBoneRopeSystem.md" %}})
- [HybridModelAlignToWorldSystem]({{% relref "systems/client/HybridModelAlignToWorldSystem.md" %}})
- [ProjectileSystem]({{% relref "systems/client/ProjectileSystem.md" %}})
- [ProjectileSystem_Spawn_Client]({{% relref "systems/client/ProjectileSystem_Spawn_Client.md" %}})
- [ShowCellBitMaskSystem]({{% relref "systems/client/ShowCellBitMaskSystem.md" %}})
- [ShowLineOfSightSystem]({{% relref "systems/client/ShowLineOfSightSystem.md" %}})
- [ShowLineOfSightTileSystem]({{% relref "systems/client/ShowLineOfSightTileSystem.md" %}})
- [ShowProjectedSunblockerSystem]({{% relref "systems/client/ShowProjectedSunblockerSystem.md" %}})
- [ShowTileCollisionSystem]({{% relref "systems/client/ShowTileCollisionSystem.md" %}})
- [ShowTileHeightsSystemNew]({{% relref "systems/client/ShowTileHeightsSystemNew.md" %}})
- [ShowTilePlacementSystem]({{% relref "systems/client/ShowTilePlacementSystem.md" %}})
- [StunCloth_UpdateBoneChain_System]({{% relref "systems/client/StunCloth_UpdateBoneChain_System.md" %}})
- [UpdateSpiderLegsSystem]({{% relref "systems/client/UpdateSpiderLegsSystem.md" %}})
- [UpdateTileCellsSystem_Client]({{% relref "systems/client/UpdateTileCellsSystem_Client.md" %}})
