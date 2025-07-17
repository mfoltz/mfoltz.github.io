---
nav_exclude: true
search_exclude: true
---

# SequenceGUID

```csharp
[Serializable]
[StructLayout(2)]
public struct SequenceGUID
{
	static SequenceGUID()
	{
		Il2CppClassPointerStore<SequenceGUID>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SequenceGUID");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SequenceGUID>.NativeClassPtr);
		SequenceGUID.NativeFieldInfoPtr_GuidHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequenceGUID>.NativeClassPtr, "GuidHash");
		SequenceGUID.NativeMethodInfoPtr__ctor_Public_Void_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SequenceGUID>.NativeClassPtr, 100664710);
		SequenceGUID.NativeMethodInfoPtr_IsEmpty_Public_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SequenceGUID>.NativeClassPtr, 100664711);
		SequenceGUID.NativeMethodInfoPtr_get_Empty_Public_Static_get_SequenceGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SequenceGUID>.NativeClassPtr, 100664712);
		SequenceGUID.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_SequenceGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SequenceGUID>.NativeClassPtr, 100664713);
		SequenceGUID.NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_SequenceGUID_SequenceGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SequenceGUID>.NativeClassPtr, 100664714);
		SequenceGUID.NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_SequenceGUID_SequenceGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SequenceGUID>.NativeClassPtr, 100664715);
		SequenceGUID.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SequenceGUID>.NativeClassPtr, 100664716);
		SequenceGUID.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SequenceGUID>.NativeClassPtr, 100664717);
		SequenceGUID.NativeMethodInfoPtr_ToPrefabGUID_Public_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SequenceGUID>.NativeClassPtr, 100664718);
	}
	[CallerCount(11)]
	[CachedScanResults(RefRangeStart = 1063175, RefRangeEnd = 1063186, XrefRangeStart = 1063175, XrefRangeEnd = 1063175, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe SequenceGUID(int guidHash)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref guidHash;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SequenceGUID.NativeMethodInfoPtr__ctor_Public_Void_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 69459, RefRangeEnd = 69460, XrefRangeStart = 69459, XrefRangeEnd = 69460, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool IsEmpty()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SequenceGUID.NativeMethodInfoPtr_IsEmpty_Public_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public unsafe static SequenceGUID Empty
	{
		[CallerCount(9)]
		[CachedScanResults(RefRangeStart = 12424, RefRangeEnd = 12433, XrefRangeStart = 12424, XrefRangeEnd = 12433, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SequenceGUID.NativeMethodInfoPtr_get_Empty_Public_Static_get_SequenceGUID_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(0)]
	public unsafe bool Equals(SequenceGUID other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SequenceGUID.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_SequenceGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1063186, RefRangeEnd = 1063187, XrefRangeStart = 1063186, XrefRangeEnd = 1063186, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool operator !=(SequenceGUID guid1, SequenceGUID guid2)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref guid1;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref guid2;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SequenceGUID.NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_SequenceGUID_SequenceGUID_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static bool operator ==(SequenceGUID guid1, SequenceGUID guid2)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref guid1;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref guid2;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SequenceGUID.NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_SequenceGUID_SequenceGUID_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1063187, XrefRangeEnd = 1063189, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override bool Equals(Object obj)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SequenceGUID.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(614)]
	[CachedScanResults(RefRangeStart = 72441, RefRangeEnd = 73055, XrefRangeStart = 72441, XrefRangeEnd = 73055, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SequenceGUID.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(614)]
	[CachedScanResults(RefRangeStart = 72441, RefRangeEnd = 73055, XrefRangeStart = 72441, XrefRangeEnd = 73055, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe PrefabGUID ToPrefabGUID()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SequenceGUID.NativeMethodInfoPtr_ToPrefabGUID_Public_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SequenceGUID>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GuidHash;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsEmpty_Public_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Empty_Public_Static_get_SequenceGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_SequenceGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_SequenceGUID_SequenceGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_SequenceGUID_SequenceGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToPrefabGUID_Public_PrefabGUID_0;
	[FieldOffset(0)]
	public int GuidHash;
}
