---
nav_exclude: true
search_exclude: true
---

```csharp
public struct MapZoneCollection
{
	static MapZoneCollection()
	{
		Il2CppClassPointerStore<MapZoneCollection>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MapZoneCollection");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MapZoneCollection>.NativeClassPtr);
		MapZoneCollection.NativeFieldInfoPtr_Empty = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneCollection>.NativeClassPtr, "Empty");
		MapZoneCollection.NativeFieldInfoPtr_SpatialLookup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneCollection>.NativeClassPtr, "SpatialLookup");
		MapZoneCollection.NativeFieldInfoPtr_MapZoneLookup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneCollection>.NativeClassPtr, "MapZoneLookup");
		MapZoneCollection.NativeFieldInfoPtr_GlobalCastleTerritory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneCollection>.NativeClassPtr, "GlobalCastleTerritory");
		MapZoneCollection.NativeMethodInfoPtr__ctor_Public_Void_NativeReference_1_FixedList512Bytes_1_SpatialMapZoneData_NativeArray_1_FixedList512Bytes_1_SpatialMapZoneData_NativeParallelHashMap_2_MapZoneId_SpatialMapZoneData_Nullable_Unboxed_1_SpatialMapZoneData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MapZoneCollection>.NativeClassPtr, 100668029);
		MapZoneCollection.NativeMethodInfoPtr_GetGlobalCastleTerritory_Public_Nullable_Unboxed_1_SpatialMapZoneData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MapZoneCollection>.NativeClassPtr, 100668030);
		MapZoneCollection.NativeMethodInfoPtr_GetZonesInChunk_Public_byref_FixedList512Bytes_1_SpatialMapZoneData_TerrainChunk_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MapZoneCollection>.NativeClassPtr, 100668031);
		MapZoneCollection.NativeMethodInfoPtr_GetZonesIntersectingBounds_Public_Void_BoundsMinMax_NativeList_1_SpatialMapZoneData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MapZoneCollection>.NativeClassPtr, 100668032);
		MapZoneCollection.NativeMethodInfoPtr_TryGetZone_Public_Boolean_MapZoneId_byref_SpatialMapZoneData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MapZoneCollection>.NativeClassPtr, 100668033);
		MapZoneCollection.NativeMethodInfoPtr_Dispose_Public_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MapZoneCollection>.NativeClassPtr, 100668034);
		MapZoneCollection.NativeMethodInfoPtr_SetGlobalMapZone_Public_MapZoneCollection_Nullable_Unboxed_1_SpatialMapZoneData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MapZoneCollection>.NativeClassPtr, 100668035);
	}

	public unsafe MapZoneCollection(NativeReference<FixedList512Bytes<SpatialMapZoneData>> empty, NativeArray<FixedList512Bytes<SpatialMapZoneData>> spatialLookup, NativeParallelHashMap<MapZoneId, SpatialMapZoneData> mapZoneLookup, Nullable_Unboxed<SpatialMapZoneData> globalCastleTerritory)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref empty;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref spatialLookup;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref mapZoneLookup;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref globalCastleTerritory;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MapZoneCollection.NativeMethodInfoPtr__ctor_Public_Void_NativeReference_1_FixedList512Bytes_1_SpatialMapZoneData_NativeArray_1_FixedList512Bytes_1_SpatialMapZoneData_NativeParallelHashMap_2_MapZoneId_SpatialMapZoneData_Nullable_Unboxed_1_SpatialMapZoneData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe Nullable_Unboxed<SpatialMapZoneData> GetGlobalCastleTerritory()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MapZoneCollection.NativeMethodInfoPtr_GetGlobalCastleTerritory_Public_Nullable_Unboxed_1_SpatialMapZoneData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe ref FixedList512Bytes<SpatialMapZoneData> GetZonesInChunk(TerrainChunk terrainChunk)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref terrainChunk;
		IntPtr intPtr;
		IntPtr result = IL2CPP.il2cpp_runtime_invoke(MapZoneCollection.NativeMethodInfoPtr_GetZonesInChunk_Public_byref_FixedList512Bytes_1_SpatialMapZoneData_TerrainChunk_0, ref this, (void**)ptr, ref intPtr);
		Il2CppException.RaiseExceptionIfNecessary(intPtr);
		return result;
	}

	public unsafe void GetZonesIntersectingBounds(BoundsMinMax worldBounds, NativeList<SpatialMapZoneData> zoneList)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldBounds;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref zoneList;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MapZoneCollection.NativeMethodInfoPtr_GetZonesIntersectingBounds_Public_Void_BoundsMinMax_NativeList_1_SpatialMapZoneData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe bool TryGetZone(MapZoneId mapZoneId, out SpatialMapZoneData mapZone)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref mapZoneId;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &mapZone;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MapZoneCollection.NativeMethodInfoPtr_TryGetZone_Public_Boolean_MapZoneId_byref_SpatialMapZoneData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe void Dispose()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MapZoneCollection.NativeMethodInfoPtr_Dispose_Public_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe MapZoneCollection SetGlobalMapZone(Nullable_Unboxed<SpatialMapZoneData> globalMapZone)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref globalMapZone;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MapZoneCollection.NativeMethodInfoPtr_SetGlobalMapZone_Public_MapZoneCollection_Nullable_Unboxed_1_SpatialMapZoneData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MapZoneCollection>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Empty;
	private static readonly IntPtr NativeFieldInfoPtr_SpatialLookup;
	private static readonly IntPtr NativeFieldInfoPtr_MapZoneLookup;
	private static readonly IntPtr NativeFieldInfoPtr_GlobalCastleTerritory;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_NativeReference_1_FixedList512Bytes_1_SpatialMapZoneData_NativeArray_1_FixedList512Bytes_1_SpatialMapZoneData_NativeParallelHashMap_2_MapZoneId_SpatialMapZoneData_Nullable_Unboxed_1_SpatialMapZoneData_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetGlobalCastleTerritory_Public_Nullable_Unboxed_1_SpatialMapZoneData_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetZonesInChunk_Public_byref_FixedList512Bytes_1_SpatialMapZoneData_TerrainChunk_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetZonesIntersectingBounds_Public_Void_BoundsMinMax_NativeList_1_SpatialMapZoneData_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetZone_Public_Boolean_MapZoneId_byref_SpatialMapZoneData_0;
	private static readonly IntPtr NativeMethodInfoPtr_Dispose_Public_Void_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetGlobalMapZone_Public_MapZoneCollection_Nullable_Unboxed_1_SpatialMapZoneData_0;

	public readonly NativeReference<FixedList512Bytes<SpatialMapZoneData>> Empty;

	public readonly NativeArray<FixedList512Bytes<SpatialMapZoneData>> SpatialLookup;

	public readonly NativeParallelHashMap<MapZoneId, SpatialMapZoneData> MapZoneLookup;

	public readonly Nullable_Unboxed<SpatialMapZoneData> GlobalCastleTerritory;
}
```

## Server Systems

- [CastleHeartSharedInventorySystem]({{% relref "systems/server/CastleHeartSharedInventorySystem.md" %}})
- [DiscoverResearchSystem]({{% relref "systems/server/DiscoverResearchSystem.md" %}})
- [ForgeSystem_Events]({{% relref "systems/server/ForgeSystem_Events.md" %}})
- [FusionForgeSystem_Events]({{% relref "systems/server/FusionForgeSystem_Events.md" %}})
- [JewelCraftingStartSystem]({{% relref "systems/server/JewelCraftingStartSystem.md" %}})
- [PlaceTileModelSystem]({{% relref "systems/server/PlaceTileModelSystem.md" %}})
- [RepairItemSystem]({{% relref "systems/server/RepairItemSystem.md" %}})
- [ServantCoffinstationActionSystem]({{% relref "systems/server/ServantCoffinstationActionSystem.md" %}})
- [SpellSchoolProgressionEventSystem]({{% relref "systems/server/SpellSchoolProgressionEventSystem.md" %}})
- [StablesSystem_ClientEvents]({{% relref "systems/server/StablesSystem_ClientEvents.md" %}})
- [StartCharacterCraftingSystem]({{% relref "systems/server/StartCharacterCraftingSystem.md" %}})
- [StartCraftingSystem]({{% relref "systems/server/StartCraftingSystem.md" %}})
- [UnlockResearchSystem]({{% relref "systems/server/UnlockResearchSystem.md" %}})
- [UpdateMicroPOIManagerSystem]({{% relref "systems/server/UpdateMicroPOIManagerSystem.md" %}})

## Client Systems

- [CastleHeartRebuildSubMenuMapper]({{% relref "systems/client/CastleHeartRebuildSubMenuMapper.md" %}})
- [CommonClientDataSystem]({{% relref "systems/client/CommonClientDataSystem.md" %}})
- [ResearchstationMenuMapper]({{% relref "systems/client/ResearchstationMenuMapper.md" %}})
- [ServantCoffinstationSubMenuMapper]({{% relref "systems/client/ServantCoffinstationSubMenuMapper.md" %}})
