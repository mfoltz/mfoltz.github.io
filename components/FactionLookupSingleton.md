---
nav_exclude: true
search_exclude: true
---

# FactionLookupSingleton

```csharp
public struct FactionLookupSingleton
{
	static FactionLookupSingleton()
	{
		Il2CppClassPointerStore<FactionLookupSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "FactionLookupSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FactionLookupSingleton>.NativeClassPtr);
		FactionLookupSingleton.NativeFieldInfoPtr_AggroMultiplierLookup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FactionLookupSingleton>.NativeClassPtr, "AggroMultiplierLookup");
		FactionLookupSingleton.NativeFieldInfoPtr_FactionPrefabEntityLookup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FactionLookupSingleton>.NativeClassPtr, "FactionPrefabEntityLookup");
		FactionLookupSingleton.NativeMethodInfoPtr_GetAggroMultiplier_Public_Single_Int32_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<FactionLookupSingleton>.NativeClassPtr, 100667033);
		FactionLookupSingleton.NativeMethodInfoPtr_TryGetPrefabEntity_Public_Boolean_Int32_byref_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<FactionLookupSingleton>.NativeClassPtr, 100667034);
	}

	public unsafe float GetAggroMultiplier(int factionIndex, int targetFactionIndex)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref factionIndex;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref targetFactionIndex;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(FactionLookupSingleton.NativeMethodInfoPtr_GetAggroMultiplier_Public_Single_Int32_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool TryGetPrefabEntity(int factionIndex, out Entity prefabEntity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref factionIndex;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &prefabEntity;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(FactionLookupSingleton.NativeMethodInfoPtr_TryGetPrefabEntity_Public_Boolean_Int32_byref_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FactionLookupSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AggroMultiplierLookup;
	private static readonly IntPtr NativeFieldInfoPtr_FactionPrefabEntityLookup;
	private static readonly IntPtr NativeMethodInfoPtr_GetAggroMultiplier_Public_Single_Int32_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetPrefabEntity_Public_Boolean_Int32_byref_Entity_0;

	public NativeArray<float> AggroMultiplierLookup;

	public NativeArray<Entity> FactionPrefabEntityLookup;
}
```
