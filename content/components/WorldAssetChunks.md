---
nav_exclude: true
search_exclude: true
---

```csharp
public struct WorldAssetChunks
{
	static WorldAssetChunks()
	{
		Il2CppClassPointerStore<WorldAssetChunks>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "WorldAssetChunks");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WorldAssetChunks>.NativeClassPtr);
		WorldAssetChunks.NativeFieldInfoPtr_Coordinate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldAssetChunks>.NativeClassPtr, "Coordinate");
		WorldAssetChunks.NativeFieldInfoPtr_MetadataEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldAssetChunks>.NativeClassPtr, "MetadataEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WorldAssetChunks>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Coordinate;
	private static readonly IntPtr NativeFieldInfoPtr_MetadataEntity;

	public TerrainChunk Coordinate;

	public Entity MetadataEntity;
}
```
