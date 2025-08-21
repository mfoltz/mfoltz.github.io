---
nav_exclude: true
search_exclude: true
---

```csharp
public struct TechUnlockRecipeBuffer
{
	static TechUnlockRecipeBuffer()
	{
		Il2CppClassPointerStore<TechUnlockRecipeBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TechUnlockRecipeBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TechUnlockRecipeBuffer>.NativeClassPtr);
		TechUnlockRecipeBuffer.NativeFieldInfoPtr_Guid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TechUnlockRecipeBuffer>.NativeClassPtr, "Guid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TechUnlockRecipeBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Guid;

	public PrefabGUID Guid;
}
```
