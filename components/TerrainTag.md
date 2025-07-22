---
nav_exclude: true
search_exclude: false
---

# TerrainTag

```csharp
public struct TerrainTag
{
	static TerrainTag()
	{
		Il2CppClassPointerStore<TerrainTag>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "TerrainTag");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TerrainTag>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TerrainTag>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [TerrainManager](/systems/server/TerrainManager)

## Client Systems

- [UpdateSurfaceTextureSystem](/systems/client/UpdateSurfaceTextureSystem)
