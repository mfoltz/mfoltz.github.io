---
nav_exclude: true
search_exclude: true
---

# RecipeData

```csharp
public struct RecipeData
{
	static RecipeData()
	{
		Il2CppClassPointerStore<RecipeData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "RecipeData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RecipeData>.NativeClassPtr);
		RecipeData.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RecipeData>.NativeClassPtr, "Entity");
		RecipeData.NativeFieldInfoPtr_Guid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RecipeData>.NativeClassPtr, "Guid");
		RecipeData.NativeFieldInfoPtr_CraftDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RecipeData>.NativeClassPtr, "CraftDuration");
		RecipeData.NativeFieldInfoPtr_HudSortingOrder = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RecipeData>.NativeClassPtr, "HudSortingOrder");
		RecipeData.NativeFieldInfoPtr_AlwaysUnlocked = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RecipeData>.NativeClassPtr, "AlwaysUnlocked");
		RecipeData.NativeFieldInfoPtr_HideInStation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RecipeData>.NativeClassPtr, "HideInStation");
		RecipeData.NativeFieldInfoPtr_IgnoreServerSettings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RecipeData>.NativeClassPtr, "IgnoreServerSettings");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RecipeData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_Guid;
	private static readonly IntPtr NativeFieldInfoPtr_CraftDuration;
	private static readonly IntPtr NativeFieldInfoPtr_HudSortingOrder;
	private static readonly IntPtr NativeFieldInfoPtr_AlwaysUnlocked;
	private static readonly IntPtr NativeFieldInfoPtr_HideInStation;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreServerSettings;

	public Entity Entity;

	public PrefabGUID Guid;

	public float CraftDuration;

	public int HudSortingOrder;

	public bool AlwaysUnlocked;

	public bool HideInStation;

	public bool IgnoreServerSettings;
}
```

## Server Systems

- [GameDataSystem](/systems/server/GameDataSystem)

## Client Systems

- [GameDataSystem](/systems/client/GameDataSystem)
