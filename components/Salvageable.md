---
nav_exclude: true
search_exclude: false
---

# Salvageable

```csharp
public struct Salvageable
{
	static Salvageable()
	{
		Il2CppClassPointerStore<Salvageable>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "Salvageable");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Salvageable>.NativeClassPtr);
		Salvageable.NativeFieldInfoPtr_RecipeGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Salvageable>.NativeClassPtr, "RecipeGUID");
		Salvageable.NativeFieldInfoPtr_SalvageFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Salvageable>.NativeClassPtr, "SalvageFactor");
		Salvageable.NativeFieldInfoPtr_SalvageTimer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Salvageable>.NativeClassPtr, "SalvageTimer");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Salvageable>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RecipeGUID;
	private static readonly IntPtr NativeFieldInfoPtr_SalvageFactor;
	private static readonly IntPtr NativeFieldInfoPtr_SalvageTimer;

	public PrefabGUID RecipeGUID;

	public float SalvageFactor;

	public float SalvageTimer;
}
```

## Client Systems

- [SetupServerSettings](/systems/client/SetupServerSettings)
