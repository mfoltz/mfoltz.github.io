---
nav_exclude: true
search_exclude: false
---

# RoofTileData

```csharp
public struct RoofTileData
{
	static RoofTileData()
	{
		Il2CppClassPointerStore<RoofTileData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.CastleBuilding.Systems.dll", "ProjectM.Roofs", "RoofTileData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RoofTileData>.NativeClassPtr);
		RoofTileData.NativeFieldInfoPtr_RoofCategory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoofTileData>.NativeClassPtr, "RoofCategory");
		RoofTileData.NativeFieldInfoPtr_TileBlobType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoofTileData>.NativeClassPtr, "TileBlobType");
		RoofTileData.NativeFieldInfoPtr_RotationOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoofTileData>.NativeClassPtr, "RotationOffset");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RoofTileData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RoofCategory;
	private static readonly IntPtr NativeFieldInfoPtr_TileBlobType;
	private static readonly IntPtr NativeFieldInfoPtr_RotationOffset;

	public RoofCategoryType RoofCategory;

	public TileBlobRootType TileBlobType;

	public OrthogonalRotation RotationOffset;
}
```
