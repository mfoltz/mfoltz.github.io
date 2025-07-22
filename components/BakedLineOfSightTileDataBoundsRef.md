---
nav_exclude: true
search_exclude: false
---

# BakedLineOfSightTileDataBoundsRef

```csharp
public struct BakedLineOfSightTileDataBoundsRef
{
	static BakedLineOfSightTileDataBoundsRef()
	{
		Il2CppClassPointerStore<BakedLineOfSightTileDataBoundsRef>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Tiles", "BakedLineOfSightTileDataBoundsRef");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BakedLineOfSightTileDataBoundsRef>.NativeClassPtr);
		BakedLineOfSightTileDataBoundsRef.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedLineOfSightTileDataBoundsRef>.NativeClassPtr, "Data");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BakedLineOfSightTileDataBoundsRef>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;

	public BlobAssetReference<BakedBoundsBlob> Data;
}
```
