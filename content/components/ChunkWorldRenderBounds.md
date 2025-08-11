---
nav_exclude: true
search_exclude: true
---

# ChunkWorldRenderBounds

```csharp
public struct ChunkWorldRenderBounds
{
	static ChunkWorldRenderBounds()
	{
		Il2CppClassPointerStore<ChunkWorldRenderBounds>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "ChunkWorldRenderBounds");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChunkWorldRenderBounds>.NativeClassPtr);
		ChunkWorldRenderBounds.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkWorldRenderBounds>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChunkWorldRenderBounds>.NativeClassPtr, ref this));
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
