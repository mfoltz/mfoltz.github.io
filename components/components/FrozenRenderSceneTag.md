---
nav_exclude: true
search_exclude: true
---

# FrozenRenderSceneTag

```csharp
[Serializable]
[StructLayout(2)]
public struct FrozenRenderSceneTag
{
	static FrozenRenderSceneTag()
	{
		Il2CppClassPointerStore<FrozenRenderSceneTag>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "FrozenRenderSceneTag");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FrozenRenderSceneTag>.NativeClassPtr);
		FrozenRenderSceneTag.NativeFieldInfoPtr_SceneGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FrozenRenderSceneTag>.NativeClassPtr, "SceneGUID");
		FrozenRenderSceneTag.NativeFieldInfoPtr_SectionIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FrozenRenderSceneTag>.NativeClassPtr, "SectionIndex");
		FrozenRenderSceneTag.NativeFieldInfoPtr_HasStreamedLOD = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FrozenRenderSceneTag>.NativeClassPtr, "HasStreamedLOD");
		FrozenRenderSceneTag.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_FrozenRenderSceneTag_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<FrozenRenderSceneTag>.NativeClassPtr, 100663984);
		FrozenRenderSceneTag.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<FrozenRenderSceneTag>.NativeClassPtr, 100663985);
		FrozenRenderSceneTag.NativeMethodInfoPtr_ToString_Public_Virtual_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<FrozenRenderSceneTag>.NativeClassPtr, 100663986);
		FrozenRenderSceneTag.NativeMethodInfoPtr___codegen__Equals_Public_Static_Boolean_ptr_Void_ptr_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<FrozenRenderSceneTag>.NativeClassPtr, 100663987);
		FrozenRenderSceneTag.NativeMethodInfoPtr___codegen__GetHashCode_Public_Static_Int32_ptr_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<FrozenRenderSceneTag>.NativeClassPtr, 100663988);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 2139642, RefRangeEnd = 2139643, XrefRangeStart = 2139639, XrefRangeEnd = 2139642, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool Equals(FrozenRenderSceneTag other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(FrozenRenderSceneTag.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_FrozenRenderSceneTag_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 2139646, RefRangeEnd = 2139647, XrefRangeStart = 2139643, XrefRangeEnd = 2139646, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(FrozenRenderSceneTag.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2139647, XrefRangeEnd = 2139657, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(FrozenRenderSceneTag.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2139657, XrefRangeEnd = 2139658, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool __codegen__Equals(void* self, void* A_1)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = self;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = A_1;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(FrozenRenderSceneTag.NativeMethodInfoPtr___codegen__Equals_Public_Static_Boolean_ptr_Void_ptr_Void_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2139658, XrefRangeEnd = 2139659, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static int __codegen__GetHashCode(void* self)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = self;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(FrozenRenderSceneTag.NativeMethodInfoPtr___codegen__GetHashCode_Public_Static_Int32_ptr_Void_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FrozenRenderSceneTag>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SceneGUID;
	private static readonly IntPtr NativeFieldInfoPtr_SectionIndex;
	private static readonly IntPtr NativeFieldInfoPtr_HasStreamedLOD;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_FrozenRenderSceneTag_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToString_Public_Virtual_String_0;
	private static readonly IntPtr NativeMethodInfoPtr___codegen__Equals_Public_Static_Boolean_ptr_Void_ptr_Void_0;
	private static readonly IntPtr NativeMethodInfoPtr___codegen__GetHashCode_Public_Static_Int32_ptr_Void_0;
	[FieldOffset(0)]
	public Hash128 SceneGUID;
	[FieldOffset(16)]
	public int SectionIndex;
	[FieldOffset(20)]
	public int HasStreamedLOD;
}
