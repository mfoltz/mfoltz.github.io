---
nav_exclude: true
search_exclude: true
---

# TileWorldSingleton

```csharp
[StructLayout(2)]
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
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1147573, RefRangeEnd = 1147574, XrefRangeStart = 1147565, XrefRangeEnd = 1147573, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe TileWorldSingleton(TileWorldWriteable tileWorld, Allocator allocator)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref tileWorld;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref allocator;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileWorldSingleton.NativeMethodInfoPtr__ctor_Public_Void_TileWorldWriteable_Allocator_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1147574, XrefRangeEnd = 1147575, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe TileWorld GetTileWorld()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileWorldSingleton.NativeMethodInfoPtr_GetTileWorld_Public_TileWorld_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1147575, XrefRangeEnd = 1147576, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe TileWorld GetTileWorldAsync(out JobHandle readDependency)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &readDependency;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileWorldSingleton.NativeMethodInfoPtr_GetTileWorldAsync_Public_TileWorld_byref_JobHandle_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 0, XrefRangeEnd = 0, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void AddReaderJobHandle(JobHandle readDependency)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref readDependency;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileWorldSingleton.NativeMethodInfoPtr_AddReaderJobHandle_Public_Void_JobHandle_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1147576, XrefRangeEnd = 1147578, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void AddWriterJobHandle(JobHandle writeDependency)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref writeDependency;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileWorldSingleton.NativeMethodInfoPtr_AddWriterJobHandle_Public_Void_JobHandle_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1147578, XrefRangeEnd = 1147579, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe TileWorldWriteable GetWriteable(out JobHandle writeDependency)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &writeDependency;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileWorldSingleton.NativeMethodInfoPtr_GetWriteable_Public_TileWorldWriteable_byref_JobHandle_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1147579, XrefRangeEnd = 1147588, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
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
	[FieldOffset(0)]
	public TileWorldWriteable _TileWorld;
	[FieldOffset(24)]
	public JobHandleManager _ReadDependency;
	[FieldOffset(40)]
	public JobHandleManager _WriteDependency;
}
