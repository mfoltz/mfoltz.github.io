---
nav_exclude: true
search_exclude: true
---

# RecipeOutputUnitBuffer

```csharp
public struct RecipeOutputUnitBuffer
{
	static RecipeOutputUnitBuffer()
	{
		Il2CppClassPointerStore<RecipeOutputUnitBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "RecipeOutputUnitBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RecipeOutputUnitBuffer>.NativeClassPtr);
		RecipeOutputUnitBuffer.NativeFieldInfoPtr_Guid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RecipeOutputUnitBuffer>.NativeClassPtr, "Guid");
		RecipeOutputUnitBuffer.NativeFieldInfoPtr_Stacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RecipeOutputUnitBuffer>.NativeClassPtr, "Stacks");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RecipeOutputUnitBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Guid;
	private static readonly IntPtr NativeFieldInfoPtr_Stacks;

	public PrefabGUID Guid;

	public int Stacks;
}
```
