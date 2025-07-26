---
nav_exclude: true
search_exclude: true
---

# GameDataLoadingStartedSingleton

```csharp
public struct GameDataLoadingStartedSingleton
{
	static GameDataLoadingStartedSingleton()
	{
		Il2CppClassPointerStore<GameDataLoadingStartedSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "GameDataLoadingStartedSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GameDataLoadingStartedSingleton>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GameDataLoadingStartedSingleton>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [GameDataManager](/systems/server/GameDataManager)

## Client Systems

- [GameDataManager](/systems/client/GameDataManager)
