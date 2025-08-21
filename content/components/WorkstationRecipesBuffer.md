---
nav_exclude: true
search_exclude: true
---

```csharp
public struct WorkstationRecipesBuffer
{
	static WorkstationRecipesBuffer()
	{
		Il2CppClassPointerStore<WorkstationRecipesBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "WorkstationRecipesBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WorkstationRecipesBuffer>.NativeClassPtr);
		WorkstationRecipesBuffer.NativeFieldInfoPtr_RecipeGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorkstationRecipesBuffer>.NativeClassPtr, "RecipeGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WorkstationRecipesBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RecipeGuid;

	public PrefabGUID RecipeGuid;
}
```

## Server Systems

- [GameDataSystem]({{% relref "systems/server/GameDataSystem.md" %}})
- [JewelCraftingUpdateSystem]({{% relref "systems/server/JewelCraftingUpdateSystem.md" %}})
- [SetupServerSettings]({{% relref "systems/server/SetupServerSettings.md" %}})
- [UpdateCraftingSystem]({{% relref "systems/server/UpdateCraftingSystem.md" %}})
- [UpdatePrisonSystem]({{% relref "systems/server/UpdatePrisonSystem.md" %}})
