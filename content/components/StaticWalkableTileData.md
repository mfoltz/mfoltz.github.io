---
nav_exclude: true
search_exclude: true
---

# StaticWalkableTileData

```csharp
public struct StaticWalkableTileData
{
	static StaticWalkableTileData()
	{
		Il2CppClassPointerStore<StaticWalkableTileData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "StaticWalkableTileData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StaticWalkableTileData>.NativeClassPtr);
		StaticWalkableTileData.NativeFieldInfoPtr_Blob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StaticWalkableTileData>.NativeClassPtr, "Blob");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StaticWalkableTileData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Blob;

	public BlobAssetReference<StaticWalkableTile> Blob;
}
```
