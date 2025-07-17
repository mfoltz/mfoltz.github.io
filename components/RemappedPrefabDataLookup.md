---
nav_exclude: true
search_exclude: true
---

# RemappedPrefabDataLookup

```csharp
public struct RemappedPrefabDataLookup
{
	static RemappedPrefabDataLookup()
	{
		Il2CppClassPointerStore<RemappedPrefabDataLookup>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "RemappedPrefabDataLookup");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RemappedPrefabDataLookup>.NativeClassPtr);
		RemappedPrefabDataLookup.NativeFieldInfoPtr_RemappedUnitDatas = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RemappedPrefabDataLookup>.NativeClassPtr, "RemappedUnitDatas");
		RemappedPrefabDataLookup.NativeMethodInfoPtr__ctor_Public_Void_NativeHashMap_2_PrefabGUID_RemappedPrefabData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RemappedPrefabDataLookup>.NativeClassPtr, 100667700);
	}

	public unsafe RemappedPrefabDataLookup(NativeHashMap<PrefabGUID, RemappedPrefabData> remappedUnitDataLookup)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref remappedUnitDataLookup;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RemappedPrefabDataLookup.NativeMethodInfoPtr__ctor_Public_Void_NativeHashMap_2_PrefabGUID_RemappedPrefabData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RemappedPrefabDataLookup>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RemappedUnitDatas;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_NativeHashMap_2_PrefabGUID_RemappedPrefabData_0;

	public NativeHashMap<PrefabGUID, RemappedPrefabData> RemappedUnitDatas;
}
```
