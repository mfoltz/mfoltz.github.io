---
nav_exclude: true
search_exclude: true
---

```csharp
public struct TerrainChunkPortalBuffer
{
	static TerrainChunkPortalBuffer()
	{
		Il2CppClassPointerStore<TerrainChunkPortalBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "TerrainChunkPortalBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TerrainChunkPortalBuffer>.NativeClassPtr);
		TerrainChunkPortalBuffer.NativeFieldInfoPtr_ToChunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunkPortalBuffer>.NativeClassPtr, "ToChunk");
		TerrainChunkPortalBuffer.NativeFieldInfoPtr_ToChunkPortalIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainChunkPortalBuffer>.NativeClassPtr, "ToChunkPortalIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TerrainChunkPortalBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ToChunk;
	private static readonly IntPtr NativeFieldInfoPtr_ToChunkPortalIndex;

	public TerrainChunk ToChunk;

	public int ToChunkPortalIndex;
}
```
