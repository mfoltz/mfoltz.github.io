---
nav_exclude: true
search_exclude: true
---

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

- [GameDataSystem]({{% relref "systems/server/GameDataSystem.md" %}})
- [JointConversionFinalizationSystem]({{% relref "systems/server/JointConversionFinalizationSystem.md" %}})
- [ProgressAchievementSystem]({{% relref "systems/server/ProgressAchievementSystem.md" %}})
- [RemoveHybridRenderingFromServerPrefabsSystem]({{% relref "systems/server/RemoveHybridRenderingFromServerPrefabsSystem.md" %}})
- [SetupServerSettings]({{% relref "systems/server/SetupServerSettings.md" %}})

## Client Systems

- [GameDataSystem]({{% relref "systems/client/GameDataSystem.md" %}})
- [GiveInventoryItemCommandSystem]({{% relref "systems/client/GiveInventoryItemCommandSystem.md" %}})
- [HideOutsideVisionKeywordSystem]({{% relref "systems/client/HideOutsideVisionKeywordSystem.md" %}})
- [JointConversionFinalizationSystem]({{% relref "systems/client/JointConversionFinalizationSystem.md" %}})
- [SetupServerSettings]({{% relref "systems/client/SetupServerSettings.md" %}})
