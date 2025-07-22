---
nav_exclude: true
search_exclude: false
---

# RequestSceneLoaded

```csharp
public struct RequestSceneLoaded
{
	static RequestSceneLoaded()
	{
		Il2CppClassPointerStore<RequestSceneLoaded>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "RequestSceneLoaded");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RequestSceneLoaded>.NativeClassPtr);
		RequestSceneLoaded.NativeFieldInfoPtr_LoadFlags = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RequestSceneLoaded>.NativeClassPtr, "LoadFlags");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RequestSceneLoaded>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LoadFlags;

	public SceneLoadFlags LoadFlags;
}
```

## Server Systems

- [DefragMemoryOnSubSceneLoadSystem](/systems/server/DefragMemoryOnSubSceneLoadSystem)
- [ResolveSceneReferenceSystem](/systems/server/ResolveSceneReferenceSystem)
- [SceneSectionStreamingSystem](/systems/server/SceneSectionStreamingSystem)

## Client Systems

- [ResolveSceneReferenceSystem](/systems/client/ResolveSceneReferenceSystem)
- [SceneSectionStreamingSystem](/systems/client/SceneSectionStreamingSystem)
