---
nav_exclude: true
search_exclude: true
---

# Prefab

```csharp
public struct Prefab
{
	static Prefab()
	{
		Il2CppClassPointerStore<Prefab>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "Prefab");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Prefab>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Prefab>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [GameDataSystem](/systems/server/GameDataSystem)
- [JointConversionFinalizationSystem](/systems/server/JointConversionFinalizationSystem)
- [ProgressAchievementSystem](/systems/server/ProgressAchievementSystem)
- [RemoveHybridRenderingFromServerPrefabsSystem](/systems/server/RemoveHybridRenderingFromServerPrefabsSystem)
- [SetupServerSettings](/systems/server/SetupServerSettings)

## Client Systems

- [GameDataSystem](/systems/client/GameDataSystem)
- [GiveInventoryItemCommandSystem](/systems/client/GiveInventoryItemCommandSystem)
- [HideOutsideVisionKeywordSystem](/systems/client/HideOutsideVisionKeywordSystem)
- [JointConversionFinalizationSystem](/systems/client/JointConversionFinalizationSystem)
- [SetupServerSettings](/systems/client/SetupServerSettings)
