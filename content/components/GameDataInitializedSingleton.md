---
nav_exclude: true
search_exclude: true
---

```csharp
public struct GameDataInitializedSingleton
{
	static GameDataInitializedSingleton()
	{
		Il2CppClassPointerStore<GameDataInitializedSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "GameDataInitializedSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GameDataInitializedSingleton>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GameDataInitializedSingleton>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [AbilityRunScriptsSystem]({{% relref "systems/server/AbilityRunScriptsSystem.md" %}})
- [ScriptMapperPrepareDependenciesSystem]({{% relref "systems/server/ScriptMapperPrepareDependenciesSystem.md" %}})
- [ScriptUpdateServer]({{% relref "systems/server/ScriptUpdateServer.md" %}})
- [WorldLoadStartupTracker]({{% relref "systems/server/WorldLoadStartupTracker.md" %}})
