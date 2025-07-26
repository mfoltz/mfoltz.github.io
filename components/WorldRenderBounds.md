---
nav_exclude: true
search_exclude: true
---

# WorldRenderBounds

```csharp
public struct WorldRenderBounds
{
	static WorldRenderBounds()
	{
		Il2CppClassPointerStore<WorldRenderBounds>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "WorldRenderBounds");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WorldRenderBounds>.NativeClassPtr);
		WorldRenderBounds.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldRenderBounds>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WorldRenderBounds>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public AABB Value;
}
```

## Client Systems

- [AddWorldAndChunkRenderBounds](/systems/client/AddWorldAndChunkRenderBounds)
- [EntitiesGraphicsSystem](/systems/client/EntitiesGraphicsSystem)
- [RenderBoundsUpdateSystem](/systems/client/RenderBoundsUpdateSystem)
- [UpdateHybridChunksStructure](/systems/client/UpdateHybridChunksStructure)
