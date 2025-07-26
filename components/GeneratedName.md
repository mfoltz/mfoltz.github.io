---
nav_exclude: true
search_exclude: true
---

# GeneratedName

```csharp
public struct GeneratedName
{
	static GeneratedName()
	{
		Il2CppClassPointerStore<GeneratedName>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "GeneratedName");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GeneratedName>.NativeClassPtr);
		GeneratedName.NativeFieldInfoPtr_RandomNamePrefix = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GeneratedName>.NativeClassPtr, "RandomNamePrefix");
		GeneratedName.NativeFieldInfoPtr_RandomNamePostfix = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GeneratedName>.NativeClassPtr, "RandomNamePostfix");
		GeneratedName.NativeFieldInfoPtr_NameGeneratorPrefixSource = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GeneratedName>.NativeClassPtr, "NameGeneratorPrefixSource");
		GeneratedName.NativeFieldInfoPtr_NameGeneratorPostfixSource = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GeneratedName>.NativeClassPtr, "NameGeneratorPostfixSource");
		GeneratedName.NativeMethodInfoPtr_BuildName_Public_String_ManagedDataRegistry_BlobAssetReference_1_SpellModSetGlobalTierData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GeneratedName>.NativeClassPtr, 100672111);
		GeneratedName.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_GeneratedName_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GeneratedName>.NativeClassPtr, 100672112);
		GeneratedName.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GeneratedName>.NativeClassPtr, 100672113);
		GeneratedName.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GeneratedName>.NativeClassPtr, 100672114);
	}

	public unsafe string BuildName(ManagedDataRegistry managedDataRegistry, BlobAssetReference<SpellModSetGlobalTierData> globalSpellModData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.il2cpp_object_unbox(IL2CPP.Il2CppObjectBaseToPtrNotNull(managedDataRegistry));
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref globalSpellModData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GeneratedName.NativeMethodInfoPtr_BuildName_Public_String_ManagedDataRegistry_BlobAssetReference_1_SpellModSetGlobalTierData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}

	public unsafe bool Equals(GeneratedName other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GeneratedName.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_GeneratedName_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override bool Equals(Object obj)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GeneratedName.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GeneratedName.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GeneratedName>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RandomNamePrefix;
	private static readonly IntPtr NativeFieldInfoPtr_RandomNamePostfix;
	private static readonly IntPtr NativeFieldInfoPtr_NameGeneratorPrefixSource;
	private static readonly IntPtr NativeFieldInfoPtr_NameGeneratorPostfixSource;
	private static readonly IntPtr NativeMethodInfoPtr_BuildName_Public_String_ManagedDataRegistry_BlobAssetReference_1_SpellModSetGlobalTierData_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_GeneratedName_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;

	public byte RandomNamePrefix;

	public byte RandomNamePostfix;

	public PrefabGUID NameGeneratorPrefixSource;

	public PrefabGUID NameGeneratorPostfixSource;
}
```
