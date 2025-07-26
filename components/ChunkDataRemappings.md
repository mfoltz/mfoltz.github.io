---
nav_exclude: true
search_exclude: true
---

# ChunkDataRemappings

```csharp
public struct ChunkDataRemappings
{
	static ChunkDataRemappings()
	{
		Il2CppClassPointerStore<ChunkDataRemappings>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ChunkDataRemappings");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChunkDataRemappings>.NativeClassPtr);
		ChunkDataRemappings.NativeFieldInfoPtr__ReplacedDropTablesByChunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkDataRemappings>.NativeClassPtr, "_ReplacedDropTablesByChunk");
		ChunkDataRemappings.NativeFieldInfoPtr__ReplacedRandomizedSpawnChainsByChunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkDataRemappings>.NativeClassPtr, "_ReplacedRandomizedSpawnChainsByChunk");
		ChunkDataRemappings.NativeFieldInfoPtr__ReplacedMicroPoiManagersByChunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkDataRemappings>.NativeClassPtr, "_ReplacedMicroPoiManagersByChunk");
		ChunkDataRemappings.NativeFieldInfoPtr__ReplacedMapIconNamesByChunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkDataRemappings>.NativeClassPtr, "_ReplacedMapIconNamesByChunk");
		ChunkDataRemappings.NativeMethodInfoPtr__ctor_Public_Void_Allocator_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChunkDataRemappings>.NativeClassPtr, 100668953);
		ChunkDataRemappings.NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChunkDataRemappings>.NativeClassPtr, 100668954);
		ChunkDataRemappings.NativeMethodInfoPtr_GetDropTableByChunkLookup_Public_ChunkRemappingLookup_1_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChunkDataRemappings>.NativeClassPtr, 100668955);
		ChunkDataRemappings.NativeMethodInfoPtr_GetRandomizedSpawnChainByChunkLookup_Public_ChunkRemappingLookup_1_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChunkDataRemappings>.NativeClassPtr, 100668956);
		ChunkDataRemappings.NativeMethodInfoPtr_GetMicroPoiManagersByChunk_Public_ChunkRemappingLookup_1_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChunkDataRemappings>.NativeClassPtr, 100668957);
		ChunkDataRemappings.NativeMethodInfoPtr_GetMapIconNameByChunkLookup_Public_ChunkRemappingLookup_1_LocalizationKey_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChunkDataRemappings>.NativeClassPtr, 100668958);
		ChunkDataRemappings.NativeMethodInfoPtr_GetRawLookups_Public_Void_byref_NativeHashMap_2_ChunkRemapping_Unboxed_1_PrefabGUID_PrefabGUID_byref_NativeHashMap_2_ChunkRemapping_Unboxed_1_PrefabGUID_PrefabGUID_byref_NativeHashMap_2_ChunkRemapping_Unboxed_1_PrefabGUID_PrefabGUID_byref_NativeHashMap_2_ChunkRemapping_Unboxed_1_LocalizationKey_LocalizationKey_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChunkDataRemappings>.NativeClassPtr, 100668959);
	}

	public unsafe ChunkDataRemappings(Allocator allocator)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref allocator;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChunkDataRemappings.NativeMethodInfoPtr__ctor_Public_Void_Allocator_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Dispose()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChunkDataRemappings.NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe ChunkRemappingLookup<PrefabGUID> GetDropTableByChunkLookup()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChunkDataRemappings.NativeMethodInfoPtr_GetDropTableByChunkLookup_Public_ChunkRemappingLookup_1_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe ChunkRemappingLookup<PrefabGUID> GetRandomizedSpawnChainByChunkLookup()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChunkDataRemappings.NativeMethodInfoPtr_GetRandomizedSpawnChainByChunkLookup_Public_ChunkRemappingLookup_1_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe ChunkRemappingLookup<PrefabGUID> GetMicroPoiManagersByChunk()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChunkDataRemappings.NativeMethodInfoPtr_GetMicroPoiManagersByChunk_Public_ChunkRemappingLookup_1_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe ChunkRemappingLookup<LocalizationKey> GetMapIconNameByChunkLookup()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChunkDataRemappings.NativeMethodInfoPtr_GetMapIconNameByChunkLookup_Public_ChunkRemappingLookup_1_LocalizationKey_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe void GetRawLookups(out NativeHashMap<ChunkRemapping_Unboxed<PrefabGUID>, PrefabGUID> replacedDropTablesByChunk, out NativeHashMap<ChunkRemapping_Unboxed<PrefabGUID>, PrefabGUID> replacedRandomizedSpawnChainsByChunk, out NativeHashMap<ChunkRemapping_Unboxed<PrefabGUID>, PrefabGUID> replacedMicroPoiManagersByChunk, out NativeHashMap<ChunkRemapping_Unboxed<LocalizationKey>, LocalizationKey> replacedMapIconNamesByChunk)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &replacedDropTablesByChunk;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &replacedRandomizedSpawnChainsByChunk;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &replacedMicroPoiManagersByChunk;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &replacedMapIconNamesByChunk;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChunkDataRemappings.NativeMethodInfoPtr_GetRawLookups_Public_Void_byref_NativeHashMap_2_ChunkRemapping_Unboxed_1_PrefabGUID_PrefabGUID_byref_NativeHashMap_2_ChunkRemapping_Unboxed_1_PrefabGUID_PrefabGUID_byref_NativeHashMap_2_ChunkRemapping_Unboxed_1_PrefabGUID_PrefabGUID_byref_NativeHashMap_2_ChunkRemapping_Unboxed_1_LocalizationKey_LocalizationKey_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChunkDataRemappings>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr__ReplacedDropTablesByChunk;
	private static readonly IntPtr NativeFieldInfoPtr__ReplacedRandomizedSpawnChainsByChunk;
	private static readonly IntPtr NativeFieldInfoPtr__ReplacedMicroPoiManagersByChunk;
	private static readonly IntPtr NativeFieldInfoPtr__ReplacedMapIconNamesByChunk;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Allocator_0;
	private static readonly IntPtr NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetDropTableByChunkLookup_Public_ChunkRemappingLookup_1_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetRandomizedSpawnChainByChunkLookup_Public_ChunkRemappingLookup_1_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetMicroPoiManagersByChunk_Public_ChunkRemappingLookup_1_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetMapIconNameByChunkLookup_Public_ChunkRemappingLookup_1_LocalizationKey_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetRawLookups_Public_Void_byref_NativeHashMap_2_ChunkRemapping_Unboxed_1_PrefabGUID_PrefabGUID_byref_NativeHashMap_2_ChunkRemapping_Unboxed_1_PrefabGUID_PrefabGUID_byref_NativeHashMap_2_ChunkRemapping_Unboxed_1_PrefabGUID_PrefabGUID_byref_NativeHashMap_2_ChunkRemapping_Unboxed_1_LocalizationKey_LocalizationKey_0;

	public NativeHashMap<ChunkRemapping_Unboxed<PrefabGUID>, PrefabGUID> _ReplacedDropTablesByChunk;

	public NativeHashMap<ChunkRemapping_Unboxed<PrefabGUID>, PrefabGUID> _ReplacedRandomizedSpawnChainsByChunk;

	public NativeHashMap<ChunkRemapping_Unboxed<PrefabGUID>, PrefabGUID> _ReplacedMicroPoiManagersByChunk;

	public NativeHashMap<ChunkRemapping_Unboxed<LocalizationKey>, LocalizationKey> _ReplacedMapIconNamesByChunk;
}
```

## Server Systems

- [ChunkDataRemappingManager_SetupMapIconRemappings](/systems/server/ChunkDataRemappingManager_SetupMapIconRemappings)
- [RandomizedSpawnChainSpawnSystem](/systems/server/RandomizedSpawnChainSpawnSystem)
- [ReplaceDropTablesByChunkSystem](/systems/server/ReplaceDropTablesByChunkSystem)

## Client Systems

- [ChunkDataRemappingManager_SetupMapIconRemappings](/systems/client/ChunkDataRemappingManager_SetupMapIconRemappings)
- [ReplaceMapIconNamesByChunkSystem](/systems/client/ReplaceMapIconNamesByChunkSystem)
