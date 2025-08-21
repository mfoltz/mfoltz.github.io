---
nav_exclude: true
search_exclude: true
---

```csharp
public struct WorldTypeSingleton
{
	static WorldTypeSingleton()
	{
		Il2CppClassPointerStore<WorldTypeSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("Stunlock.Core.dll", "Stunlock.Core", "WorldTypeSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WorldTypeSingleton>.NativeClassPtr);
		WorldTypeSingleton.NativeFieldInfoPtr_WorldType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldTypeSingleton>.NativeClassPtr, "WorldType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WorldTypeSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WorldType;

	public WorldType WorldType;
}
```

## Server Systems

- [GameDataManager]({{% relref "systems/server/GameDataManager.md" %}})
- [WorldLoadStartupTracker]({{% relref "systems/server/WorldLoadStartupTracker.md" %}})

## Client Systems

- [GameDataManager]({{% relref "systems/client/GameDataManager.md" %}})
- [WorldLoadStartupTracker]({{% relref "systems/client/WorldLoadStartupTracker.md" %}})
