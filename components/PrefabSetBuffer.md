---
nav_exclude: true
search_exclude: true
---

# PrefabSetBuffer

```csharp
[StructLayout(2)]
public struct PrefabSetBuffer
{
	static PrefabSetBuffer()
	{
		Il2CppClassPointerStore<PrefabSetBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "PrefabSetBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PrefabSetBuffer>.NativeClassPtr);
		PrefabSetBuffer.NativeFieldInfoPtr_PrefabId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrefabSetBuffer>.NativeClassPtr, "PrefabId");
		PrefabSetBuffer.NativeMethodInfoPtr_Contains_Public_Static_Boolean_byref_DynamicBuffer_1_PrefabSetBuffer_PrefabIdentifier_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabSetBuffer>.NativeClassPtr, 100666625);
	}
	[CallerCount(4)]
	[CachedScanResults(RefRangeStart = 1086771, RefRangeEnd = 1086775, XrefRangeStart = 1086764, XrefRangeEnd = 1086771, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool Contains([In] ref DynamicBuffer<PrefabSetBuffer> prefabSetBuffer, PrefabIdentifier prefabId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &prefabSetBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref prefabId;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabSetBuffer.NativeMethodInfoPtr_Contains_Public_Static_Boolean_byref_DynamicBuffer_1_PrefabSetBuffer_PrefabIdentifier_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PrefabSetBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabId;
	private static readonly IntPtr NativeMethodInfoPtr_Contains_Public_Static_Boolean_byref_DynamicBuffer_1_PrefabSetBuffer_PrefabIdentifier_0;
	[FieldOffset(0)]
	public PrefabIdentifier PrefabId;
}
