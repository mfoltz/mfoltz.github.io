---
nav_exclude: true
search_exclude: true
---

# EditorChunkToLoadOnStartupElement

```csharp
public struct EditorChunkToLoadOnStartupElement
{
	static EditorChunkToLoadOnStartupElement()
	{
		Il2CppClassPointerStore<EditorChunkToLoadOnStartupElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "EditorChunkToLoadOnStartupElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EditorChunkToLoadOnStartupElement>.NativeClassPtr);
		EditorChunkToLoadOnStartupElement.NativeFieldInfoPtr_ChunkCoordinate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditorChunkToLoadOnStartupElement>.NativeClassPtr, "ChunkCoordinate");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EditorChunkToLoadOnStartupElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ChunkCoordinate;

	public TerrainChunk ChunkCoordinate;
}
```
