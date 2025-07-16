# CastleRebuildUniqueKey

```csharp
[StructLayout(2)]
public struct CastleRebuildUniqueKey
{
	static CastleRebuildUniqueKey()
	{
		Il2CppClassPointerStore<CastleRebuildUniqueKey>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding.Rebuilding", "CastleRebuildUniqueKey");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildUniqueKey>.NativeClassPtr);
		CastleRebuildUniqueKey.NativeFieldInfoPtr_Id = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildUniqueKey>.NativeClassPtr, "Id");
		CastleRebuildUniqueKey.NativeMethodInfoPtr_IsValid_Public_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildUniqueKey>.NativeClassPtr, 100671800);
		CastleRebuildUniqueKey.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_CastleRebuildUniqueKey_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildUniqueKey>.NativeClassPtr, 100671801);
		CastleRebuildUniqueKey.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildUniqueKey>.NativeClassPtr, 100671802);
		CastleRebuildUniqueKey.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildUniqueKey>.NativeClassPtr, 100671803);
		CastleRebuildUniqueKey.NativeMethodInfoPtr_ToString_Public_Virtual_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildUniqueKey>.NativeClassPtr, 100671804);
		CastleRebuildUniqueKey.NativeMethodInfoPtr_Serialize_Public_Void_byref_NetBufferOut_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildUniqueKey>.NativeClassPtr, 100671805);
		CastleRebuildUniqueKey.NativeMethodInfoPtr_Deserialize_Public_Static_CastleRebuildUniqueKey_byref_NetBufferIn_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildUniqueKey>.NativeClassPtr, 100671806);
		CastleRebuildUniqueKey.NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_CastleRebuildUniqueKey_CastleRebuildUniqueKey_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildUniqueKey>.NativeClassPtr, 100671807);
		CastleRebuildUniqueKey.NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_CastleRebuildUniqueKey_CastleRebuildUniqueKey_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildUniqueKey>.NativeClassPtr, 100671808);
	}
	[CallerCount(0)]
	public unsafe bool IsValid()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildUniqueKey.NativeMethodInfoPtr_IsValid_Public_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe bool Equals(CastleRebuildUniqueKey other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildUniqueKey.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_CastleRebuildUniqueKey_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1150421, XrefRangeEnd = 1150423, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override bool Equals(Object obj)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildUniqueKey.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(614)]
	[CachedScanResults(RefRangeStart = 72441, RefRangeEnd = 73055, XrefRangeStart = 72441, XrefRangeEnd = 73055, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildUniqueKey.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1150423, XrefRangeEnd = 1150430, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildUniqueKey.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1150430, XrefRangeEnd = 1150432, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildUniqueKey.NativeMethodInfoPtr_Serialize_Public_Void_byref_NetBufferOut_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1150432, XrefRangeEnd = 1150434, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static CastleRebuildUniqueKey Deserialize(ref NetBufferIn netBuffer)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildUniqueKey.NativeMethodInfoPtr_Deserialize_Public_Static_CastleRebuildUniqueKey_byref_NetBufferIn_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(155)]
	[CachedScanResults(RefRangeStart = 139415, RefRangeEnd = 139570, XrefRangeStart = 139415, XrefRangeEnd = 139570, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool operator ==(CastleRebuildUniqueKey a, CastleRebuildUniqueKey b)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref a;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref b;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildUniqueKey.NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_CastleRebuildUniqueKey_CastleRebuildUniqueKey_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static bool operator !=(CastleRebuildUniqueKey a, CastleRebuildUniqueKey b)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref a;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref b;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildUniqueKey.NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_CastleRebuildUniqueKey_CastleRebuildUniqueKey_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildUniqueKey>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Id;
	private static readonly IntPtr NativeMethodInfoPtr_IsValid_Public_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_CastleRebuildUniqueKey_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToString_Public_Virtual_String_0;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Void_byref_NetBufferOut_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Static_CastleRebuildUniqueKey_byref_NetBufferIn_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_CastleRebuildUniqueKey_CastleRebuildUniqueKey_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_CastleRebuildUniqueKey_CastleRebuildUniqueKey_0;
	[FieldOffset(0)]
	public int Id;
}
