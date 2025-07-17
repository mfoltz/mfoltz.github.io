---
nav_exclude: true
search_exclude: true
---

# SubSceneRemapping

```csharp
public struct SubSceneRemapping
{
	static SubSceneRemapping()
	{
		Il2CppClassPointerStore<SubSceneRemapping>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SubSceneRemapping");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SubSceneRemapping>.NativeClassPtr);
		SubSceneRemapping.NativeFieldInfoPtr_Remapping = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SubSceneRemapping>.NativeClassPtr, "Remapping");
		SubSceneRemapping.NativeMethodInfoPtr_GetSceneGuidToLoad_Public_Static_Hash128_SingletonAccessor_1_SubSceneRemapping_Hash128_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SubSceneRemapping>.NativeClassPtr, 100665532);
		SubSceneRemapping.NativeMethodInfoPtr_GetSceneGuidToLoad_Public_Hash128_Hash128_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SubSceneRemapping>.NativeClassPtr, 100665533);
	}

	public unsafe static Hash128 GetSceneGuidToLoad(SingletonAccessor<SubSceneRemapping> singletonAccessor, Hash128 requestedGuid)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref singletonAccessor;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref requestedGuid;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SubSceneRemapping.NativeMethodInfoPtr_GetSceneGuidToLoad_Public_Static_Hash128_SingletonAccessor_1_SubSceneRemapping_Hash128_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe Hash128 GetSceneGuidToLoad(Hash128 requestedGuid)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref requestedGuid;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SubSceneRemapping.NativeMethodInfoPtr_GetSceneGuidToLoad_Public_Hash128_Hash128_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SubSceneRemapping>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Remapping;
	private static readonly IntPtr NativeMethodInfoPtr_GetSceneGuidToLoad_Public_Static_Hash128_SingletonAccessor_1_SubSceneRemapping_Hash128_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetSceneGuidToLoad_Public_Hash128_Hash128_0;

	public NativeHashMap<Hash128, Hash128> Remapping;
}
```
