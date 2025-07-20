---
nav_exclude: true
search_exclude: true
---

# WaitingForSceneLoad

```csharp
public struct WaitingForSceneLoad
{
	static WaitingForSceneLoad()
	{
		Il2CppClassPointerStore<WaitingForSceneLoad>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "WaitingForSceneLoad");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WaitingForSceneLoad>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WaitingForSceneLoad>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [GameDataSubSceneSystem](/systems/server/GameDataSubSceneSystem)

## Client Systems

- [GameDataManager](/systems/client/GameDataManager)
