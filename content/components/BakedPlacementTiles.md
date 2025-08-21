---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BakedPlacementTiles
{
	static BakedPlacementTiles()
	{
		Il2CppClassPointerStore<BakedPlacementTiles>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Tiles", "BakedPlacementTiles");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BakedPlacementTiles>.NativeClassPtr);
		BakedPlacementTiles.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedPlacementTiles>.NativeClassPtr, "Data");
		BakedPlacementTiles.NativeFieldInfoPtr_TilePosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedPlacementTiles>.NativeClassPtr, "TilePosition");
		BakedPlacementTiles.NativeFieldInfoPtr_PrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedPlacementTiles>.NativeClassPtr, "PrefabGUID");
		BakedPlacementTiles.NativeFieldInfoPtr_LevelCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedPlacementTiles>.NativeClassPtr, "LevelCount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BakedPlacementTiles>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;
	private static readonly IntPtr NativeFieldInfoPtr_TilePosition;
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGUID;
	private static readonly IntPtr NativeFieldInfoPtr_LevelCount;

	public BlobAssetReference<TileDatas2dArray<PlacementData>> Data;

	public TilePosition TilePosition;

	public PrefabGUID PrefabGUID;

	public byte LevelCount;
}
```
