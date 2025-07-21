---
nav_exclude: true
search_exclude: false
---

# RecipeOutputBuffer

```csharp
public struct RecipeOutputBuffer
{
	static RecipeOutputBuffer()
	{
		Il2CppClassPointerStore<RecipeOutputBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "RecipeOutputBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RecipeOutputBuffer>.NativeClassPtr);
		RecipeOutputBuffer.NativeFieldInfoPtr_Guid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RecipeOutputBuffer>.NativeClassPtr, "Guid");
		RecipeOutputBuffer.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RecipeOutputBuffer>.NativeClassPtr, "Amount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RecipeOutputBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Guid;
	private static readonly IntPtr NativeFieldInfoPtr_Amount;

	public PrefabGUID Guid;

	public int Amount;
}
```

## Server Systems

- [SetupServerSettings](/systems/server/SetupServerSettings)

## Client Systems

- [SetupServerSettings](/systems/client/SetupServerSettings)
