---
nav_exclude: true
search_exclude: false
---

# DisableRendering

```csharp
public struct DisableRendering
{
	static DisableRendering()
	{
		Il2CppClassPointerStore<DisableRendering>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "DisableRendering");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DisableRendering>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DisableRendering>.NativeClassPtr, ref this));
	}
}
```

## Client Systems

- [CustomCullingSystem](/systems/client/CustomCullingSystem)
- [OcclusionCullingSystem](/systems/client/OcclusionCullingSystem)
- [OnlyShowInBuildModeSystem](/systems/client/OnlyShowInBuildModeSystem)
- [UpdateHybridChunksStructure](/systems/client/UpdateHybridChunksStructure)
