---
nav_exclude: true
search_exclude: true
---

```csharp
public struct UnlockedRecipeElement
{
	static UnlockedRecipeElement()
	{
		Il2CppClassPointerStore<UnlockedRecipeElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "UnlockedRecipeElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnlockedRecipeElement>.NativeClassPtr);
		UnlockedRecipeElement.NativeFieldInfoPtr_UnlockedRecipe = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnlockedRecipeElement>.NativeClassPtr, "UnlockedRecipe");
		UnlockedRecipeElement.NativeFieldInfoPtr_UserHasRequiredContentFlags = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnlockedRecipeElement>.NativeClassPtr, "UserHasRequiredContentFlags");
		UnlockedRecipeElement.NativeMethodInfoPtr_op_Implicit_Public_Static_PrefabGUID_UnlockedRecipeElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnlockedRecipeElement>.NativeClassPtr, 100670732);
		UnlockedRecipeElement.NativeMethodInfoPtr_op_Implicit_Public_Static_UnlockedRecipeElement_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnlockedRecipeElement>.NativeClassPtr, 100670733);
	}

	public unsafe static implicit operator PrefabGUID(UnlockedRecipeElement e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnlockedRecipeElement.NativeMethodInfoPtr_op_Implicit_Public_Static_PrefabGUID_UnlockedRecipeElement_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static implicit operator UnlockedRecipeElement(PrefabGUID e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnlockedRecipeElement.NativeMethodInfoPtr_op_Implicit_Public_Static_UnlockedRecipeElement_PrefabGUID_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnlockedRecipeElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UnlockedRecipe;
	private static readonly IntPtr NativeFieldInfoPtr_UserHasRequiredContentFlags;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_PrefabGUID_UnlockedRecipeElement_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_UnlockedRecipeElement_PrefabGUID_0;

	public PrefabGUID UnlockedRecipe;

	public bool UserHasRequiredContentFlags;
}
```
