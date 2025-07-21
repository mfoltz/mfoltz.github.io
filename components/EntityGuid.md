---
nav_exclude: true
search_exclude: false
---

# EntityGuid

```csharp
public struct EntityGuid
{
	static EntityGuid()
	{
		Il2CppClassPointerStore<EntityGuid>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "EntityGuid");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EntityGuid>.NativeClassPtr);
		EntityGuid.NativeFieldInfoPtr_a = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityGuid>.NativeClassPtr, "a");
		EntityGuid.NativeFieldInfoPtr_b = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityGuid>.NativeClassPtr, "b");
		EntityGuid.NativeFieldInfoPtr_Null = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityGuid>.NativeClassPtr, "Null");
		EntityGuid.NativeMethodInfoPtr__ctor_Public_Void_Int32_Int32_UInt32_UInt32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityGuid>.NativeClassPtr, 100666110);
		EntityGuid.NativeMethodInfoPtr_get_OriginatingId_Public_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityGuid>.NativeClassPtr, 100666111);
		EntityGuid.NativeMethodInfoPtr_get_OriginatingSubId_Public_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityGuid>.NativeClassPtr, 100666112);
		EntityGuid.NativeMethodInfoPtr_get_FullNamespaceId_Internal_get_UInt32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityGuid>.NativeClassPtr, 100666113);
		EntityGuid.NativeMethodInfoPtr_get_Serial_Public_get_UInt32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityGuid>.NativeClassPtr, 100666114);
		EntityGuid.NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_byref_EntityGuid_byref_EntityGuid_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityGuid>.NativeClassPtr, 100666115);
		EntityGuid.NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_byref_EntityGuid_byref_EntityGuid_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityGuid>.NativeClassPtr, 100666116);
		EntityGuid.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityGuid>.NativeClassPtr, 100666117);
		EntityGuid.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_EntityGuid_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityGuid>.NativeClassPtr, 100666118);
		EntityGuid.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityGuid>.NativeClassPtr, 100666119);
		EntityGuid.NativeMethodInfoPtr_CompareTo_Public_Virtual_Final_New_Int32_EntityGuid_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityGuid>.NativeClassPtr, 100666120);
		EntityGuid.NativeMethodInfoPtr_ToString_Public_Virtual_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityGuid>.NativeClassPtr, 100666121);
	}

	public unsafe EntityGuid(int originatingId, int originatingSubId, uint namespaceId, uint serial)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref originatingId;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref originatingSubId;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref namespaceId;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref serial;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityGuid.NativeMethodInfoPtr__ctor_Public_Void_Int32_Int32_UInt32_UInt32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public unsafe int OriginatingId
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityGuid.NativeMethodInfoPtr_get_OriginatingId_Public_get_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe int OriginatingSubId
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityGuid.NativeMethodInfoPtr_get_OriginatingSubId_Public_get_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe uint FullNamespaceId
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityGuid.NativeMethodInfoPtr_get_FullNamespaceId_Internal_get_UInt32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe uint Serial
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityGuid.NativeMethodInfoPtr_get_Serial_Public_get_UInt32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}

	public unsafe static bool operator ==([In] ref EntityGuid lhs, [In] ref EntityGuid rhs)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &lhs;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &rhs;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityGuid.NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_byref_EntityGuid_byref_EntityGuid_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static bool operator !=([In] ref EntityGuid lhs, [In] ref EntityGuid rhs)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &lhs;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &rhs;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityGuid.NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_byref_EntityGuid_byref_EntityGuid_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override bool Equals(Object obj)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityGuid.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool Equals(EntityGuid other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityGuid.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_EntityGuid_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityGuid.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe int CompareTo(EntityGuid other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityGuid.NativeMethodInfoPtr_CompareTo_Public_Virtual_Final_New_Int32_EntityGuid_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityGuid.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EntityGuid>.NativeClassPtr, ref this));
	}
	public unsafe static EntityGuid Null
	{
		get
		{
			EntityGuid result;
			IL2CPP.il2cpp_field_static_get_value(EntityGuid.NativeFieldInfoPtr_Null, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(EntityGuid.NativeFieldInfoPtr_Null, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_a;
	private static readonly IntPtr NativeFieldInfoPtr_b;
	private static readonly IntPtr NativeFieldInfoPtr_Null;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Int32_Int32_UInt32_UInt32_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_OriginatingId_Public_get_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_OriginatingSubId_Public_get_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_FullNamespaceId_Internal_get_UInt32_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Serial_Public_get_UInt32_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_byref_EntityGuid_byref_EntityGuid_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_byref_EntityGuid_byref_EntityGuid_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_EntityGuid_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_CompareTo_Public_Virtual_Final_New_Int32_EntityGuid_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToString_Public_Virtual_String_0;

	public ulong a;

	public ulong b;
}
```
