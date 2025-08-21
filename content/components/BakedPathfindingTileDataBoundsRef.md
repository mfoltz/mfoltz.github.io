---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BakedPathfindingTileDataBoundsRef
{
	static BakedPathfindingTileDataBoundsRef()
	{
		Il2CppClassPointerStore<BakedPathfindingTileDataBoundsRef>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Tiles", "BakedPathfindingTileDataBoundsRef");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BakedPathfindingTileDataBoundsRef>.NativeClassPtr);
		BakedPathfindingTileDataBoundsRef.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedPathfindingTileDataBoundsRef>.NativeClassPtr, "Data");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BakedPathfindingTileDataBoundsRef>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;

	public BlobAssetReference<BakedBoundsBlob> Data;
}
```
