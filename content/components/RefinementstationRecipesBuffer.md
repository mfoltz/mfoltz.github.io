---
nav_exclude: true
search_exclude: true
---

```csharp
public struct RefinementstationRecipesBuffer
{
	static RefinementstationRecipesBuffer()
	{
		Il2CppClassPointerStore<RefinementstationRecipesBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "RefinementstationRecipesBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RefinementstationRecipesBuffer>.NativeClassPtr);
		RefinementstationRecipesBuffer.NativeFieldInfoPtr_RecipeGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RefinementstationRecipesBuffer>.NativeClassPtr, "RecipeGuid");
		RefinementstationRecipesBuffer.NativeFieldInfoPtr_Unlocked = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RefinementstationRecipesBuffer>.NativeClassPtr, "Unlocked");
		RefinementstationRecipesBuffer.NativeFieldInfoPtr_Disabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RefinementstationRecipesBuffer>.NativeClassPtr, "Disabled");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RefinementstationRecipesBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RecipeGuid;
	private static readonly IntPtr NativeFieldInfoPtr_Unlocked;
	private static readonly IntPtr NativeFieldInfoPtr_Disabled;

	public PrefabGUID RecipeGuid;

	public bool Unlocked;

	public bool Disabled;
}
```

## Server Systems

- [GameDataSystem]({{% relref "systems/server/GameDataSystem.md" %}})
- [SetupServerSettings]({{% relref "systems/server/SetupServerSettings.md" %}})
- [UnitSpawnerUpdateSystem]({{% relref "systems/server/UnitSpawnerUpdateSystem.md" %}})

## Client Systems

- [CastleHeartVisualStateSystem]({{% relref "systems/client/CastleHeartVisualStateSystem.md" %}})
- [GameDataSystem]({{% relref "systems/client/GameDataSystem.md" %}})
- [SetupServerSettings]({{% relref "systems/client/SetupServerSettings.md" %}})
