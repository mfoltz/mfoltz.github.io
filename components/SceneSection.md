# SceneSection

```csharp
[Serializable]
[StructLayout(2)]
public struct SceneSection
{
	static SceneSection()
	{
		Il2CppClassPointerStore<SceneSection>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "SceneSection");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SceneSection>.NativeClassPtr);
		SceneSection.NativeFieldInfoPtr_SceneGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneSection>.NativeClassPtr, "SceneGUID");
		SceneSection.NativeFieldInfoPtr_Section = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneSection>.NativeClassPtr, "Section");
		SceneSection.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_SceneSection_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SceneSection>.NativeClassPtr, 100669391);
		SceneSection.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SceneSection>.NativeClassPtr, 100669392);
		SceneSection.NativeMethodInfoPtr___codegen__Equals_Public_Static_Boolean_ptr_Void_ptr_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SceneSection>.NativeClassPtr, 100669393);
		SceneSection.NativeMethodInfoPtr___codegen__GetHashCode_Public_Static_Int32_ptr_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SceneSection>.NativeClassPtr, 100669394);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1353508, RefRangeEnd = 1353510, XrefRangeStart = 1353505, XrefRangeEnd = 1353508, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool Equals(SceneSection other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SceneSection.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_SceneSection_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1353513, RefRangeEnd = 1353515, XrefRangeStart = 1353510, XrefRangeEnd = 1353513, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SceneSection.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1353515, XrefRangeEnd = 1353516, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool __codegen__Equals(void* self, void* A_1)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = self;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = A_1;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SceneSection.NativeMethodInfoPtr___codegen__Equals_Public_Static_Boolean_ptr_Void_ptr_Void_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1353516, XrefRangeEnd = 1353517, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static int __codegen__GetHashCode(void* self)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = self;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SceneSection.NativeMethodInfoPtr___codegen__GetHashCode_Public_Static_Int32_ptr_Void_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SceneSection>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SceneGUID;
	private static readonly IntPtr NativeFieldInfoPtr_Section;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_SceneSection_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr___codegen__Equals_Public_Static_Boolean_ptr_Void_ptr_Void_0;
	private static readonly IntPtr NativeMethodInfoPtr___codegen__GetHashCode_Public_Static_Int32_ptr_Void_0;
	[FieldOffset(0)]
	public Hash128 SceneGUID;
	[FieldOffset(16)]
	public int Section;
}
