---
nav_exclude: true
search_exclude: false
---

# BakedSurfaceFluffData

```csharp
public struct BakedSurfaceFluffData
{
	static BakedSurfaceFluffData()
	{
		Il2CppClassPointerStore<BakedSurfaceFluffData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Tiles", "BakedSurfaceFluffData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BakedSurfaceFluffData>.NativeClassPtr);
		BakedSurfaceFluffData.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedSurfaceFluffData>.NativeClassPtr, "Data");
		BakedSurfaceFluffData.NativeFieldInfoPtr_TilePosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedSurfaceFluffData>.NativeClassPtr, "TilePosition");
		BakedSurfaceFluffData.NativeFieldInfoPtr_LevelCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedSurfaceFluffData>.NativeClassPtr, "LevelCount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BakedSurfaceFluffData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;
	private static readonly IntPtr NativeFieldInfoPtr_TilePosition;
	private static readonly IntPtr NativeFieldInfoPtr_LevelCount;

	public BlobAssetReference<TileDatas<SurfaceFluffData>> Data;

	public TilePosition TilePosition;

	public byte LevelCount;
}
```
