---
nav_exclude: true
search_exclude: true
---

```csharp
public struct DisableSceneResolveAndLoad
{
	static DisableSceneResolveAndLoad()
	{
		Il2CppClassPointerStore<DisableSceneResolveAndLoad>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Scenes.dll", "Unity.Scenes", "DisableSceneResolveAndLoad");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DisableSceneResolveAndLoad>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DisableSceneResolveAndLoad>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [ResolveSceneReferenceSystem]({{% relref "systems/server/ResolveSceneReferenceSystem.md" %}})
- [SceneSectionStreamingSystem]({{% relref "systems/server/SceneSectionStreamingSystem.md" %}})

## Client Systems

- [ResolveSceneReferenceSystem]({{% relref "systems/client/ResolveSceneReferenceSystem.md" %}})
- [SceneSectionStreamingSystem]({{% relref "systems/client/SceneSectionStreamingSystem.md" %}})
