---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BakedLineOfSightTiles
{
	static BakedLineOfSightTiles()
	{
		Il2CppClassPointerStore<BakedLineOfSightTiles>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Tiles", "BakedLineOfSightTiles");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BakedLineOfSightTiles>.NativeClassPtr);
		BakedLineOfSightTiles.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedLineOfSightTiles>.NativeClassPtr, "Data");
		BakedLineOfSightTiles.NativeFieldInfoPtr_TilePosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedLineOfSightTiles>.NativeClassPtr, "TilePosition");
		BakedLineOfSightTiles.NativeFieldInfoPtr_Layer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedLineOfSightTiles>.NativeClassPtr, "Layer");
		BakedLineOfSightTiles.NativeFieldInfoPtr_StaticTileModelData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedLineOfSightTiles>.NativeClassPtr, "StaticTileModelData");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BakedLineOfSightTiles>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;
	private static readonly IntPtr NativeFieldInfoPtr_TilePosition;
	private static readonly IntPtr NativeFieldInfoPtr_Layer;
	private static readonly IntPtr NativeFieldInfoPtr_StaticTileModelData;

	public BlobAssetReference<TileDatas<LineOfSightTileData>> Data;

	public TilePosition TilePosition;

	public TileModelLayerEnum Layer;

	public StaticTileModelData StaticTileModelData;
}
```
