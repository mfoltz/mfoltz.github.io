# TerrainChunkLookup

```csharp
[StructLayout(2)]
public struct TerrainChunkLookup
{
	static TerrainChunkLookup()
	{
		Il2CppClassPointerStore<TerrainChunkLookup>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "TerrainChunkLookup");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TerrainChunkLookup>.NativeClassPtr);
		TerrainChunkLookup.NativeFieldInfoPtr__LoadedTerrainChunksEntities = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunkLookup>.NativeClassPtr, "_LoadedTerrainChunksEntities");
		TerrainChunkLookup.NativeFieldInfoPtr__ChunkMetadataLookup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunkLookup>.NativeClassPtr, "_ChunkMetadataLookup");
		TerrainChunkLookup.NativeMethodInfoPtr_get_IsCreated_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkLookup>.NativeClassPtr, 100668776);
		TerrainChunkLookup.NativeMethodInfoPtr_Create_Public_Static_TerrainChunkLookup_NativeParallelHashMap_2_TerrainChunk_Entity_NativeParallelHashMap_2_TerrainChunk_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkLookup>.NativeClassPtr, 100668777);
		TerrainChunkLookup.NativeMethodInfoPtr_LoadedChunkCount_Public_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkLookup>.NativeClassPtr, 100668778);
		TerrainChunkLookup.NativeMethodInfoPtr_TryGetCoreChunk_Public_Boolean_TerrainChunk_byref_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkLookup>.NativeClassPtr, 100668779);
		TerrainChunkLookup.NativeMethodInfoPtr_IsCoreChunkLoaded_Public_Boolean_TerrainChunk_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkLookup>.NativeClassPtr, 100668780);
		TerrainChunkLookup.NativeMethodInfoPtr_TryGetChunk_Public_Boolean_TerrainChunk_byref_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkLookup>.NativeClassPtr, 100668781);
		TerrainChunkLookup.NativeMethodInfoPtr_GetAllLoadedChunks_Public_NativeArray_1_TerrainChunk_Allocator_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkLookup>.NativeClassPtr, 100668782);
		TerrainChunkLookup.NativeMethodInfoPtr_TryGetChunkMetadataEntity_Public_Boolean_TerrainChunk_byref_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkLookup>.NativeClassPtr, 100668783);
		TerrainChunkLookup.NativeMethodInfoPtr_GetChunkMetadataEntity_Public_Entity_TerrainChunk_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkLookup>.NativeClassPtr, 100668784);
		TerrainChunkLookup.NativeMethodInfoPtr_GetAllChunkMetadatas_Public_NativeArray_1_TerrainChunk_Allocator_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkLookup>.NativeClassPtr, 100668785);
		TerrainChunkLookup.NativeMethodInfoPtr_Unsafe_GetLoadedChunkCollection_Public_NativeParallelHashMap_2_TerrainChunk_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkLookup>.NativeClassPtr, 100668786);
		TerrainChunkLookup.NativeMethodInfoPtr_Unsafe_DisposeCollections_Public_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TerrainChunkLookup>.NativeClassPtr, 100668787);
	}
	public unsafe bool IsCreated
	{
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1110875, XrefRangeEnd = 1110878, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkLookup.NativeMethodInfoPtr_get_IsCreated_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(0)]
	public unsafe static TerrainChunkLookup Create(NativeParallelHashMap<TerrainChunk, Entity> terrainChunks, NativeParallelHashMap<TerrainChunk, Entity> chunkMetadataLookup)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref terrainChunks;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref chunkMetadataLookup;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkLookup.NativeMethodInfoPtr_Create_Public_Static_TerrainChunkLookup_NativeParallelHashMap_2_TerrainChunk_Entity_NativeParallelHashMap_2_TerrainChunk_Entity_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1110878, XrefRangeEnd = 1110882, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe int LoadedChunkCount()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkLookup.NativeMethodInfoPtr_LoadedChunkCount_Public_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(4)]
	[CachedScanResults(RefRangeStart = 1110886, RefRangeEnd = 1110890, XrefRangeStart = 1110882, XrefRangeEnd = 1110886, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryGetCoreChunk(TerrainChunk coordinate, out Entity terrainChunkEntity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref coordinate;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &terrainChunkEntity;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkLookup.NativeMethodInfoPtr_TryGetCoreChunk_Public_Boolean_TerrainChunk_byref_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1110894, RefRangeEnd = 1110895, XrefRangeStart = 1110890, XrefRangeEnd = 1110894, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool IsCoreChunkLoaded(TerrainChunk coordinate)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref coordinate;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkLookup.NativeMethodInfoPtr_IsCoreChunkLoaded_Public_Boolean_TerrainChunk_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1110899, RefRangeEnd = 1110900, XrefRangeStart = 1110895, XrefRangeEnd = 1110899, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryGetChunk(TerrainChunk coordinate, out Entity terrainChunkEntity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref coordinate;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &terrainChunkEntity;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkLookup.NativeMethodInfoPtr_TryGetChunk_Public_Boolean_TerrainChunk_byref_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1110900, XrefRangeEnd = 1110904, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe NativeArray<TerrainChunk> GetAllLoadedChunks(Allocator allocator)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref allocator;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkLookup.NativeMethodInfoPtr_GetAllLoadedChunks_Public_NativeArray_1_TerrainChunk_Allocator_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1110904, XrefRangeEnd = 1110908, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryGetChunkMetadataEntity(TerrainChunk terrainChunk, out Entity metadataEntity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref terrainChunk;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &metadataEntity;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkLookup.NativeMethodInfoPtr_TryGetChunkMetadataEntity_Public_Boolean_TerrainChunk_byref_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1110908, XrefRangeEnd = 1110911, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe Entity GetChunkMetadataEntity(TerrainChunk terrainChunk)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref terrainChunk;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkLookup.NativeMethodInfoPtr_GetChunkMetadataEntity_Public_Entity_TerrainChunk_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1110911, XrefRangeEnd = 1110915, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe NativeArray<TerrainChunk> GetAllChunkMetadatas(Allocator allocator)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref allocator;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkLookup.NativeMethodInfoPtr_GetAllChunkMetadatas_Public_NativeArray_1_TerrainChunk_Allocator_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe NativeParallelHashMap<TerrainChunk, Entity> Unsafe_GetLoadedChunkCollection()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkLookup.NativeMethodInfoPtr_Unsafe_GetLoadedChunkCollection_Public_NativeParallelHashMap_2_TerrainChunk_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1110915, XrefRangeEnd = 1110920, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Unsafe_DisposeCollections()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TerrainChunkLookup.NativeMethodInfoPtr_Unsafe_DisposeCollections_Public_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TerrainChunkLookup>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr__LoadedTerrainChunksEntities;
	private static readonly IntPtr NativeFieldInfoPtr__ChunkMetadataLookup;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsCreated_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_Create_Public_Static_TerrainChunkLookup_NativeParallelHashMap_2_TerrainChunk_Entity_NativeParallelHashMap_2_TerrainChunk_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_LoadedChunkCount_Public_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetCoreChunk_Public_Boolean_TerrainChunk_byref_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsCoreChunkLoaded_Public_Boolean_TerrainChunk_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetChunk_Public_Boolean_TerrainChunk_byref_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetAllLoadedChunks_Public_NativeArray_1_TerrainChunk_Allocator_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetChunkMetadataEntity_Public_Boolean_TerrainChunk_byref_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetChunkMetadataEntity_Public_Entity_TerrainChunk_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetAllChunkMetadatas_Public_NativeArray_1_TerrainChunk_Allocator_0;
	private static readonly IntPtr NativeMethodInfoPtr_Unsafe_GetLoadedChunkCollection_Public_NativeParallelHashMap_2_TerrainChunk_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_Unsafe_DisposeCollections_Public_Void_0;
	[FieldOffset(0)]
	public NativeParallelHashMap<TerrainChunk, Entity> _LoadedTerrainChunksEntities;
	[FieldOffset(16)]
	public NativeParallelHashMap<TerrainChunk, Entity> _ChunkMetadataLookup;
}
