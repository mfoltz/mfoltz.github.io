---
nav_exclude: true
search_exclude: true
---

# UnlockedBlueprintElement

```csharp
public struct UnlockedBlueprintElement
{
	static UnlockedBlueprintElement()
	{
		Il2CppClassPointerStore<UnlockedBlueprintElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "UnlockedBlueprintElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnlockedBlueprintElement>.NativeClassPtr);
		UnlockedBlueprintElement.NativeFieldInfoPtr_UnlockedBlueprint = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnlockedBlueprintElement>.NativeClassPtr, "UnlockedBlueprint");
		UnlockedBlueprintElement.NativeFieldInfoPtr_UserHasRequiredContentFlags = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnlockedBlueprintElement>.NativeClassPtr, "UserHasRequiredContentFlags");
		UnlockedBlueprintElement.NativeMethodInfoPtr_op_Implicit_Public_Static_PrefabGUID_UnlockedBlueprintElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnlockedBlueprintElement>.NativeClassPtr, 100670734);
		UnlockedBlueprintElement.NativeMethodInfoPtr_op_Implicit_Public_Static_UnlockedBlueprintElement_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnlockedBlueprintElement>.NativeClassPtr, 100670735);
	}

	public unsafe static implicit operator PrefabGUID(UnlockedBlueprintElement e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnlockedBlueprintElement.NativeMethodInfoPtr_op_Implicit_Public_Static_PrefabGUID_UnlockedBlueprintElement_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static implicit operator UnlockedBlueprintElement(PrefabGUID e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnlockedBlueprintElement.NativeMethodInfoPtr_op_Implicit_Public_Static_UnlockedBlueprintElement_PrefabGUID_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnlockedBlueprintElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UnlockedBlueprint;
	private static readonly IntPtr NativeFieldInfoPtr_UserHasRequiredContentFlags;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_PrefabGUID_UnlockedBlueprintElement_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_UnlockedBlueprintElement_PrefabGUID_0;

	public PrefabGUID UnlockedBlueprint;

	public bool UserHasRequiredContentFlags;
}
```
