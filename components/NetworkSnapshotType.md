---
nav_exclude: true
search_exclude: true
---

# NetworkSnapshotType

```csharp
[StructLayout(2)]
public struct NetworkSnapshotType
{
	static NetworkSnapshotType()
	{
		Il2CppClassPointerStore<NetworkSnapshotType>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "NetworkSnapshotType");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NetworkSnapshotType>.NativeClassPtr);
		NetworkSnapshotType.NativeFieldInfoPtr_None = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkSnapshotType>.NativeClassPtr, "None");
		NetworkSnapshotType.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkSnapshotType>.NativeClassPtr, "Value");
		NetworkSnapshotType.NativeMethodInfoPtr__ctor_Public_Void_UInt16_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkSnapshotType>.NativeClassPtr, 100670413);
		NetworkSnapshotType.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_NetworkSnapshotType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkSnapshotType>.NativeClassPtr, 100670414);
		NetworkSnapshotType.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkSnapshotType>.NativeClassPtr, 100670415);
		NetworkSnapshotType.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkSnapshotType>.NativeClassPtr, 100670416);
		NetworkSnapshotType.NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_NetworkSnapshotType_NetworkSnapshotType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkSnapshotType>.NativeClassPtr, 100670417);
		NetworkSnapshotType.NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_NetworkSnapshotType_NetworkSnapshotType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkSnapshotType>.NativeClassPtr, 100670418);
		NetworkSnapshotType.NativeMethodInfoPtr_op_Implicit_Public_Static_NetworkSnapshotType_UInt16_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkSnapshotType>.NativeClassPtr, 100670419);
		NetworkSnapshotType.NativeMethodInfoPtr_op_Implicit_Public_Static_UInt16_NetworkSnapshotType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkSnapshotType>.NativeClassPtr, 100670420);
		NetworkSnapshotType.NativeMethodInfoPtr_ToString_Public_Virtual_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkSnapshotType>.NativeClassPtr, 100670421);
		NetworkSnapshotType.NativeMethodInfoPtr___codegen__Equals_Public_Static_Boolean_ptr_Void_ptr_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkSnapshotType>.NativeClassPtr, 100670422);
		NetworkSnapshotType.NativeMethodInfoPtr___codegen__GetHashCode_Public_Static_Int32_ptr_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkSnapshotType>.NativeClassPtr, 100670423);
	}
	[CallerCount(834)]
	[CachedScanResults(RefRangeStart = 194498, RefRangeEnd = 195332, XrefRangeStart = 194498, XrefRangeEnd = 195332, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe NetworkSnapshotType(ushort value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkSnapshotType.NativeMethodInfoPtr__ctor_Public_Void_UInt16_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	public unsafe bool Equals(NetworkSnapshotType other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkSnapshotType.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_NetworkSnapshotType_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkSnapshotType.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1129872, XrefRangeEnd = 1129874, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override bool Equals(Object obj)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkSnapshotType.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static bool operator ==(NetworkSnapshotType a, NetworkSnapshotType b)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref a;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref b;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkSnapshotType.NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_NetworkSnapshotType_NetworkSnapshotType_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static bool operator !=(NetworkSnapshotType a, NetworkSnapshotType b)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref a;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref b;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkSnapshotType.NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_NetworkSnapshotType_NetworkSnapshotType_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1843)]
	[CachedScanResults(RefRangeStart = 1129874, RefRangeEnd = 1131717, XrefRangeStart = 1129874, XrefRangeEnd = 1129874, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static implicit operator NetworkSnapshotType(ushort value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkSnapshotType.NativeMethodInfoPtr_op_Implicit_Public_Static_NetworkSnapshotType_UInt16_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1843)]
	[CachedScanResults(RefRangeStart = 1129874, RefRangeEnd = 1131717, XrefRangeStart = 1129874, XrefRangeEnd = 1131717, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static implicit operator ushort(NetworkSnapshotType snapshot)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref snapshot;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkSnapshotType.NativeMethodInfoPtr_op_Implicit_Public_Static_UInt16_NetworkSnapshotType_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1131717, XrefRangeEnd = 1131723, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkSnapshotType.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	[CallerCount(0)]
	public unsafe static bool __codegen__Equals(void* self, void* A_1)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = self;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = A_1;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkSnapshotType.NativeMethodInfoPtr___codegen__Equals_Public_Static_Boolean_ptr_Void_ptr_Void_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static int __codegen__GetHashCode(void* self)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = self;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkSnapshotType.NativeMethodInfoPtr___codegen__GetHashCode_Public_Static_Int32_ptr_Void_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NetworkSnapshotType>.NativeClassPtr, ref this));
	}
	public unsafe static ushort None
	{
		get
		{
			ushort result;
			IL2CPP.il2cpp_field_static_get_value(NetworkSnapshotType.NativeFieldInfoPtr_None, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(NetworkSnapshotType.NativeFieldInfoPtr_None, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_None;
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_UInt16_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_NetworkSnapshotType_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_NetworkSnapshotType_NetworkSnapshotType_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_NetworkSnapshotType_NetworkSnapshotType_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_NetworkSnapshotType_UInt16_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_UInt16_NetworkSnapshotType_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToString_Public_Virtual_String_0;
	private static readonly IntPtr NativeMethodInfoPtr___codegen__Equals_Public_Static_Boolean_ptr_Void_ptr_Void_0;
	private static readonly IntPtr NativeMethodInfoPtr___codegen__GetHashCode_Public_Static_Int32_ptr_Void_0;
	[FieldOffset(0)]
	public ushort Value;
}
