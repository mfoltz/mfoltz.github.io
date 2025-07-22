---
nav_exclude: true
search_exclude: true
---

# RecipeRequirementBuffer

```csharp
public struct RecipeRequirementBuffer
{
	static RecipeRequirementBuffer()
	{
		Il2CppClassPointerStore<RecipeRequirementBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "RecipeRequirementBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RecipeRequirementBuffer>.NativeClassPtr);
		RecipeRequirementBuffer.NativeFieldInfoPtr_Guid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RecipeRequirementBuffer>.NativeClassPtr, "Guid");
		RecipeRequirementBuffer.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RecipeRequirementBuffer>.NativeClassPtr, "Amount");
		RecipeRequirementBuffer.NativeMethodInfoPtr_get_ToInventoryBuffer_Public_Virtual_Final_New_get_InventoryBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RecipeRequirementBuffer>.NativeClassPtr, 100664694);
	}
	public unsafe InventoryBuffer ToInventoryBuffer
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RecipeRequirementBuffer.NativeMethodInfoPtr_get_ToInventoryBuffer_Public_Virtual_Final_New_get_InventoryBuffer_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RecipeRequirementBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Guid;
	private static readonly IntPtr NativeFieldInfoPtr_Amount;
	private static readonly IntPtr NativeMethodInfoPtr_get_ToInventoryBuffer_Public_Virtual_Final_New_get_InventoryBuffer_0;

	public PrefabGUID Guid;

	public int Amount;
}
```

## Client Systems

- [SetupServerSettings](/systems/client/SetupServerSettings)
