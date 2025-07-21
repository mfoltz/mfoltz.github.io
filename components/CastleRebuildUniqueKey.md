---
nav_exclude: true
search_exclude: false
---

# CastleRebuildUniqueKey

```csharp
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

	public unsafe bool IsValid()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildUniqueKey.NativeMethodInfoPtr_IsValid_Public_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool Equals(CastleRebuildUniqueKey other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildUniqueKey.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_CastleRebuildUniqueKey_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override bool Equals(Object obj)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildUniqueKey.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildUniqueKey.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildUniqueKey.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}

	public unsafe void Serialize(ref NetBufferOut netBuffer)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildUniqueKey.NativeMethodInfoPtr_Serialize_Public_Void_byref_NetBufferOut_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe static CastleRebuildUniqueKey Deserialize(ref NetBufferIn netBuffer)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildUniqueKey.NativeMethodInfoPtr_Deserialize_Public_Static_CastleRebuildUniqueKey_byref_NetBufferIn_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

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

	public int Id;
}
```
