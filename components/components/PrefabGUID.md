---
nav_exclude: true
search_exclude: true
---

# PrefabGUID

```csharp
[Serializable]
[StructLayout(2)]
public struct PrefabGUID
{
	static PrefabGUID()
	{
		Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr = IL2CPP.GetIl2CppClass("Stunlock.Core.dll", "Stunlock.Core", "PrefabGUID");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr);
		PrefabGUID.NativeFieldInfoPtr__Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, "_Value");
		PrefabGUID.NativeMethodInfoPtr_get_GuidHash_Public_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, 100663821);
		PrefabGUID.NativeMethodInfoPtr__ctor_Public_Void_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, 100663822);
		PrefabGUID.NativeMethodInfoPtr_CreateUnsafe_Public_Static_PrefabGUID_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, 100663823);
		PrefabGUID.NativeMethodInfoPtr_IsEmpty_Public_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, 100663824);
		PrefabGUID.NativeMethodInfoPtr_HasValue_Public_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, 100663825);
		PrefabGUID.NativeMethodInfoPtr_get_Empty_Public_Static_get_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, 100663826);
		PrefabGUID.NativeMethodInfoPtr_FromGuidString_Public_Static_PrefabGUID_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, 100663827);
		PrefabGUID.NativeMethodInfoPtr_FromUnsafeGuidString_Public_Static_PrefabGUID_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, 100663828);
		PrefabGUID.NativeMethodInfoPtr_CalculateGuidHash_Public_Static_Int32_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, 100663829);
		PrefabGUID.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, 100663830);
		PrefabGUID.NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_PrefabGUID_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, 100663831);
		PrefabGUID.NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_PrefabGUID_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, 100663832);
		PrefabGUID.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, 100663833);
		PrefabGUID.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, 100663834);
		PrefabGUID.NativeMethodInfoPtr_Parse_Public_Static_PrefabGUID_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, 100663835);
		PrefabGUID.NativeMethodInfoPtr_TryParse_Public_Static_Boolean_String_byref_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, 100663836);
		PrefabGUID.NativeMethodInfoPtr_ToIdentifier_Public_PrefabIdentifier_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, 100663837);
		PrefabGUID.NativeMethodInfoPtr_ToString_Public_Virtual_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, 100663838);
		PrefabGUID.NativeMethodInfoPtr_ToFixedString_Public_FixedString64Bytes_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, 100663839);
		PrefabGUID.NativeMethodInfoPtr_CompareTo_Public_Virtual_Final_New_Int32_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, 100663840);
	}
	public unsafe int GuidHash
	{
		[CallerCount(614)]
		[CachedScanResults(RefRangeStart = 72441, RefRangeEnd = 73055, XrefRangeStart = 72441, XrefRangeEnd = 73055, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabGUID.NativeMethodInfoPtr_get_GuidHash_Public_get_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(11)]
	[CachedScanResults(RefRangeStart = 1063175, RefRangeEnd = 1063186, XrefRangeStart = 1063175, XrefRangeEnd = 1063186, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe PrefabGUID(int guidHash)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref guidHash;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabGUID.NativeMethodInfoPtr__ctor_Public_Void_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(529)]
	[CachedScanResults(RefRangeStart = 117126, RefRangeEnd = 117655, XrefRangeStart = 117126, XrefRangeEnd = 117655, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static PrefabGUID CreateUnsafe(int guidHash)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref guidHash;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabGUID.NativeMethodInfoPtr_CreateUnsafe_Public_Static_PrefabGUID_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 69459, RefRangeEnd = 69460, XrefRangeStart = 69459, XrefRangeEnd = 69460, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool IsEmpty()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabGUID.NativeMethodInfoPtr_IsEmpty_Public_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe bool HasValue()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabGUID.NativeMethodInfoPtr_HasValue_Public_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public unsafe static PrefabGUID Empty
	{
		[CallerCount(9)]
		[CachedScanResults(RefRangeStart = 12424, RefRangeEnd = 12433, XrefRangeStart = 12424, XrefRangeEnd = 12433, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabGUID.NativeMethodInfoPtr_get_Empty_Public_Static_get_PrefabGUID_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(0)]
	public unsafe static PrefabGUID FromGuidString(string assetGuid)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.ManagedStringToIl2Cpp(assetGuid);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabGUID.NativeMethodInfoPtr_FromGuidString_Public_Static_PrefabGUID_String_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static PrefabGUID FromUnsafeGuidString(string assetGuid)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.ManagedStringToIl2Cpp(assetGuid);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabGUID.NativeMethodInfoPtr_FromUnsafeGuidString_Public_Static_PrefabGUID_String_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static int CalculateGuidHash(string assetGuid)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.ManagedStringToIl2Cpp(assetGuid);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabGUID.NativeMethodInfoPtr_CalculateGuidHash_Public_Static_Int32_String_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe bool Equals(PrefabGUID other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabGUID.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1063186, RefRangeEnd = 1063187, XrefRangeStart = 1063186, XrefRangeEnd = 1063187, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool operator !=(PrefabGUID guid1, PrefabGUID guid2)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref guid1;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref guid2;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabGUID.NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_PrefabGUID_PrefabGUID_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static bool operator ==(PrefabGUID guid1, PrefabGUID guid2)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref guid1;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref guid2;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabGUID.NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_PrefabGUID_PrefabGUID_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2235196, XrefRangeEnd = 2235198, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override bool Equals(Object obj)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabGUID.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(614)]
	[CachedScanResults(RefRangeStart = 72441, RefRangeEnd = 73055, XrefRangeStart = 72441, XrefRangeEnd = 73055, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabGUID.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2235198, XrefRangeEnd = 2235199, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static PrefabGUID Parse(string s)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.ManagedStringToIl2Cpp(s);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabGUID.NativeMethodInfoPtr_Parse_Public_Static_PrefabGUID_String_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(6)]
	[CachedScanResults(RefRangeStart = 2235205, RefRangeEnd = 2235211, XrefRangeStart = 2235199, XrefRangeEnd = 2235205, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool TryParse(string s, out PrefabGUID prefabGuid)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.ManagedStringToIl2Cpp(s);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &prefabGuid;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabGUID.NativeMethodInfoPtr_TryParse_Public_Static_Boolean_String_byref_PrefabGUID_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(614)]
	[CachedScanResults(RefRangeStart = 72441, RefRangeEnd = 73055, XrefRangeStart = 72441, XrefRangeEnd = 73055, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe PrefabIdentifier ToIdentifier()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabGUID.NativeMethodInfoPtr_ToIdentifier_Public_PrefabIdentifier_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 2235218, RefRangeEnd = 2235220, XrefRangeStart = 2235211, XrefRangeEnd = 2235218, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabGUID.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	[CallerCount(5)]
	[CachedScanResults(RefRangeStart = 2235228, RefRangeEnd = 2235233, XrefRangeStart = 2235220, XrefRangeEnd = 2235228, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe FixedString64Bytes ToFixedString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabGUID.NativeMethodInfoPtr_ToFixedString_Public_FixedString64Bytes_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe int CompareTo(PrefabGUID other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabGUID.NativeMethodInfoPtr_CompareTo_Public_Virtual_Final_New_Int32_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr__Value;
	private static readonly IntPtr NativeMethodInfoPtr_get_GuidHash_Public_get_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateUnsafe_Public_Static_PrefabGUID_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsEmpty_Public_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_HasValue_Public_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Empty_Public_Static_get_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_FromGuidString_Public_Static_PrefabGUID_String_0;
	private static readonly IntPtr NativeMethodInfoPtr_FromUnsafeGuidString_Public_Static_PrefabGUID_String_0;
	private static readonly IntPtr NativeMethodInfoPtr_CalculateGuidHash_Public_Static_Int32_String_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_PrefabGUID_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_PrefabGUID_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_Parse_Public_Static_PrefabGUID_String_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryParse_Public_Static_Boolean_String_byref_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToIdentifier_Public_PrefabIdentifier_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToString_Public_Virtual_String_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToFixedString_Public_FixedString64Bytes_0;
	private static readonly IntPtr NativeMethodInfoPtr_CompareTo_Public_Virtual_Final_New_Int32_PrefabGUID_0;
	[FieldOffset(0)]
	public int _Value;
	[StructLayout(2)]
	public struct Comparer
	{
		static Comparer()
		{
			Il2CppClassPointerStore<PrefabGUID.Comparer>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<PrefabGUID>.NativeClassPtr, "Comparer");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PrefabGUID.Comparer>.NativeClassPtr);
			PrefabGUID.Comparer.NativeMethodInfoPtr_Compare_Public_Virtual_Final_New_Int32_PrefabGUID_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PrefabGUID.Comparer>.NativeClassPtr, 100663841);
		}
		[CallerCount(0)]
		public unsafe int Compare(PrefabGUID x, PrefabGUID y)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref x;
			ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref y;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PrefabGUID.Comparer.NativeMethodInfoPtr_Compare_Public_Virtual_Final_New_Int32_PrefabGUID_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PrefabGUID.Comparer>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeMethodInfoPtr_Compare_Public_Virtual_Final_New_Int32_PrefabGUID_PrefabGUID_0;
	}
}
