---
nav_exclude: true
search_exclude: true
---

# DebugWorldSurfaceFluffBounds

```csharp
[StructLayout(2)]
public struct DebugWorldSurfaceFluffBounds
{
	static DebugWorldSurfaceFluffBounds()
	{
		Il2CppClassPointerStore<DebugWorldSurfaceFluffBounds>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.CastleBuilding.Systems.dll", "ProjectM", "DebugWorldSurfaceFluffBounds");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DebugWorldSurfaceFluffBounds>.NativeClassPtr);
		DebugWorldSurfaceFluffBounds.NativeFieldInfoPtr_TileRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DebugWorldSurfaceFluffBounds>.NativeClassPtr, "TileRange");
		DebugWorldSurfaceFluffBounds.NativeMethodInfoPtr_get_TileRangeProperty_Public_Virtual_Final_New_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DebugWorldSurfaceFluffBounds>.NativeClassPtr, 100663422);
		DebugWorldSurfaceFluffBounds.NativeMethodInfoPtr_set_TileRangeProperty_Public_Virtual_Final_New_set_Void_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DebugWorldSurfaceFluffBounds>.NativeClassPtr, 100663423);
	}
	public unsafe int TileRangeProperty
	{
		[CallerCount(614)]
		[CachedScanResults(RefRangeStart = 72441, RefRangeEnd = 73055, XrefRangeStart = 72441, XrefRangeEnd = 73055, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DebugWorldSurfaceFluffBounds.NativeMethodInfoPtr_get_TileRangeProperty_Public_Virtual_Final_New_get_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(11)]
		[CachedScanResults(RefRangeStart = 1063175, RefRangeEnd = 1063186, XrefRangeStart = 1063175, XrefRangeEnd = 1063186, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DebugWorldSurfaceFluffBounds.NativeMethodInfoPtr_set_TileRangeProperty_Public_Virtual_Final_New_set_Void_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DebugWorldSurfaceFluffBounds>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TileRange;
	private static readonly IntPtr NativeMethodInfoPtr_get_TileRangeProperty_Public_Virtual_Final_New_get_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_set_TileRangeProperty_Public_Virtual_Final_New_set_Void_Int32_0;
	[FieldOffset(0)]
	public int TileRange;
}
