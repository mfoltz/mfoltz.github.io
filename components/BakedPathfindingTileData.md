---
nav_exclude: true
search_exclude: true
---

# BakedPathfindingTileData

```csharp
public struct BakedPathfindingTileData
{
	static BakedPathfindingTileData()
	{
		Il2CppClassPointerStore<BakedPathfindingTileData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Tiles", "BakedPathfindingTileData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BakedPathfindingTileData>.NativeClassPtr);
		BakedPathfindingTileData.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedPathfindingTileData>.NativeClassPtr, "Data");
		BakedPathfindingTileData.NativeFieldInfoPtr_TilePosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedPathfindingTileData>.NativeClassPtr, "TilePosition");
		BakedPathfindingTileData.NativeFieldInfoPtr_StaticTileModelData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedPathfindingTileData>.NativeClassPtr, "StaticTileModelData");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BakedPathfindingTileData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;
	private static readonly IntPtr NativeFieldInfoPtr_TilePosition;
	private static readonly IntPtr NativeFieldInfoPtr_StaticTileModelData;

	public BlobAssetReference<TileDatas<PathfindingTileData>> Data;

	public TilePosition TilePosition;

	public StaticTileModelData StaticTileModelData;
}
```
