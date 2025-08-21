---
nav_exclude: true
search_exclude: true
---

```csharp
public struct GameDataSubSceneTag
{
	static GameDataSubSceneTag()
	{
		Il2CppClassPointerStore<GameDataSubSceneTag>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "GameDataSubSceneTag");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GameDataSubSceneTag>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GameDataSubSceneTag>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [GameDataSubSceneSystem]({{% relref "systems/server/GameDataSubSceneSystem.md" %}})

## Client Systems

- [GameDataManager]({{% relref "systems/client/GameDataManager.md" %}})
