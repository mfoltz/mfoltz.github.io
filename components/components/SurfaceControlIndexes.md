---
nav_exclude: true
search_exclude: true
---

# SurfaceControlIndexes

```csharp
[StructLayout(2)]
public struct SurfaceControlIndexes
{
	static SurfaceControlIndexes()
	{
		Il2CppClassPointerStore<SurfaceControlIndexes>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "SurfaceControlIndexes");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SurfaceControlIndexes>.NativeClassPtr);
		SurfaceControlIndexes.NativeFieldInfoPtr_SurfaceIndex1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SurfaceControlIndexes>.NativeClassPtr, "SurfaceIndex1");
		SurfaceControlIndexes.NativeFieldInfoPtr_SurfaceIndex2 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SurfaceControlIndexes>.NativeClassPtr, "SurfaceIndex2");
		SurfaceControlIndexes.NativeFieldInfoPtr_SurfaceIndex3 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SurfaceControlIndexes>.NativeClassPtr, "SurfaceIndex3");
		SurfaceControlIndexes.NativeFieldInfoPtr_SurfaceIndex4 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SurfaceControlIndexes>.NativeClassPtr, "SurfaceIndex4");
		SurfaceControlIndexes.NativeMethodInfoPtr_op_Implicit_Public_Static_Color32_SurfaceControlIndexes_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SurfaceControlIndexes>.NativeClassPtr, 100664777);
		SurfaceControlIndexes.NativeMethodInfoPtr_op_Implicit_Public_Static_SurfaceControlIndexes_Color32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SurfaceControlIndexes>.NativeClassPtr, 100664778);
		SurfaceControlIndexes.NativeMethodInfoPtr_GetSurfaceIndex_Public_SurfaceIndex_Byte_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SurfaceControlIndexes>.NativeClassPtr, 100664779);
		SurfaceControlIndexes.NativeMethodInfoPtr_SetSurfaceIndex_Public_Void_Byte_SurfaceIndex_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SurfaceControlIndexes>.NativeClassPtr, 100664780);
		SurfaceControlIndexes.NativeMethodInfoPtr_FindChannelForIndex_Public_Nullable_Unboxed_1_Byte_SurfaceIndex_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SurfaceControlIndexes>.NativeClassPtr, 100664781);
		SurfaceControlIndexes.NativeMethodInfoPtr_FromInt_Public_Static_SurfaceControlIndexes_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SurfaceControlIndexes>.NativeClassPtr, 100664782);
		SurfaceControlIndexes.NativeMethodInfoPtr_IsAdditive_Public_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SurfaceControlIndexes>.NativeClassPtr, 100664783);
	}
	[CallerCount(0)]
	public unsafe static implicit operator Color32(SurfaceControlIndexes e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SurfaceControlIndexes.NativeMethodInfoPtr_op_Implicit_Public_Static_Color32_SurfaceControlIndexes_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static implicit operator SurfaceControlIndexes(Color32 e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SurfaceControlIndexes.NativeMethodInfoPtr_op_Implicit_Public_Static_SurfaceControlIndexes_Color32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 2026367, RefRangeEnd = 2026368, XrefRangeStart = 2026367, XrefRangeEnd = 2026367, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe SurfaceIndex GetSurfaceIndex(byte channelIndex)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref channelIndex;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SurfaceControlIndexes.NativeMethodInfoPtr_GetSurfaceIndex_Public_SurfaceIndex_Byte_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe void SetSurfaceIndex(byte channelIndex, SurfaceIndex surfaceIndex)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref channelIndex;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref surfaceIndex;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SurfaceControlIndexes.NativeMethodInfoPtr_SetSurfaceIndex_Public_Void_Byte_SurfaceIndex_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2026368, XrefRangeEnd = 2026369, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe Nullable_Unboxed<byte> FindChannelForIndex(SurfaceIndex surfaceIndex)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref surfaceIndex;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SurfaceControlIndexes.NativeMethodInfoPtr_FindChannelForIndex_Public_Nullable_Unboxed_1_Byte_SurfaceIndex_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static SurfaceControlIndexes FromInt(int packedData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref packedData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SurfaceControlIndexes.NativeMethodInfoPtr_FromInt_Public_Static_SurfaceControlIndexes_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe bool IsAdditive()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SurfaceControlIndexes.NativeMethodInfoPtr_IsAdditive_Public_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SurfaceControlIndexes>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SurfaceIndex1;
	private static readonly IntPtr NativeFieldInfoPtr_SurfaceIndex2;
	private static readonly IntPtr NativeFieldInfoPtr_SurfaceIndex3;
	private static readonly IntPtr NativeFieldInfoPtr_SurfaceIndex4;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_Color32_SurfaceControlIndexes_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_SurfaceControlIndexes_Color32_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetSurfaceIndex_Public_SurfaceIndex_Byte_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetSurfaceIndex_Public_Void_Byte_SurfaceIndex_0;
	private static readonly IntPtr NativeMethodInfoPtr_FindChannelForIndex_Public_Nullable_Unboxed_1_Byte_SurfaceIndex_0;
	private static readonly IntPtr NativeMethodInfoPtr_FromInt_Public_Static_SurfaceControlIndexes_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsAdditive_Public_Boolean_0;
	[FieldOffset(0)]
	public byte SurfaceIndex1;
	[FieldOffset(1)]
	public byte SurfaceIndex2;
	[FieldOffset(2)]
	public byte SurfaceIndex3;
	[FieldOffset(3)]
	public byte SurfaceIndex4;
}
