---
nav_exclude: true
search_exclude: true
---

# PublicEntityRef

```csharp
public struct PublicEntityRef
{
	static PublicEntityRef()
	{
		Il2CppClassPointerStore<PublicEntityRef>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Scenes.dll", "Unity.Scenes", "PublicEntityRef");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PublicEntityRef>.NativeClassPtr);
		PublicEntityRef.NativeFieldInfoPtr_entityIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PublicEntityRef>.NativeClassPtr, "entityIndex");
		PublicEntityRef.NativeFieldInfoPtr_targetEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PublicEntityRef>.NativeClassPtr, "targetEntity");
		PublicEntityRef.NativeMethodInfoPtr_op_LessThan_Public_Static_Boolean_PublicEntityRef_PublicEntityRef_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PublicEntityRef>.NativeClassPtr, 100663529);
		PublicEntityRef.NativeMethodInfoPtr_op_GreaterThan_Public_Static_Boolean_PublicEntityRef_PublicEntityRef_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PublicEntityRef>.NativeClassPtr, 100663530);
		PublicEntityRef.NativeMethodInfoPtr_FindInsertionPoint_Private_Static_Int32_byref_DynamicBuffer_1_PublicEntityRef_PublicEntityRef_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PublicEntityRef>.NativeClassPtr, 100663531);
		PublicEntityRef.NativeMethodInfoPtr_Add_Public_Static_Void_byref_DynamicBuffer_1_PublicEntityRef_PublicEntityRef_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PublicEntityRef>.NativeClassPtr, 100663532);
	}

	public unsafe static bool operator <(PublicEntityRef a, PublicEntityRef b)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref a;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref b;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PublicEntityRef.NativeMethodInfoPtr_op_LessThan_Public_Static_Boolean_PublicEntityRef_PublicEntityRef_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static bool operator >(PublicEntityRef a, PublicEntityRef b)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref a;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref b;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PublicEntityRef.NativeMethodInfoPtr_op_GreaterThan_Public_Static_Boolean_PublicEntityRef_PublicEntityRef_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static int FindInsertionPoint(ref DynamicBuffer<PublicEntityRef> buffer, PublicEntityRef entityref)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &buffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityref;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PublicEntityRef.NativeMethodInfoPtr_FindInsertionPoint_Private_Static_Int32_byref_DynamicBuffer_1_PublicEntityRef_PublicEntityRef_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static void Add(ref DynamicBuffer<PublicEntityRef> buffer, PublicEntityRef entityref)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &buffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityref;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PublicEntityRef.NativeMethodInfoPtr_Add_Public_Static_Void_byref_DynamicBuffer_1_PublicEntityRef_PublicEntityRef_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PublicEntityRef>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_entityIndex;
	private static readonly IntPtr NativeFieldInfoPtr_targetEntity;
	private static readonly IntPtr NativeMethodInfoPtr_op_LessThan_Public_Static_Boolean_PublicEntityRef_PublicEntityRef_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_GreaterThan_Public_Static_Boolean_PublicEntityRef_PublicEntityRef_0;
	private static readonly IntPtr NativeMethodInfoPtr_FindInsertionPoint_Private_Static_Int32_byref_DynamicBuffer_1_PublicEntityRef_PublicEntityRef_0;
	private static readonly IntPtr NativeMethodInfoPtr_Add_Public_Static_Void_byref_DynamicBuffer_1_PublicEntityRef_PublicEntityRef_0;

	public int entityIndex;

	public Entity targetEntity;
}
```
