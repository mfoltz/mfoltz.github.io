---
nav_exclude: true
search_exclude: false
---

# TileData

```csharp
public struct TileData
{
	static TileData()
	{
		Il2CppClassPointerStore<TileData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TileData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TileData>.NativeClassPtr);
		TileData.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TileData>.NativeClassPtr, "Data");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TileData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;

	public BlobAssetReference<TileBlob> Data;
}
```

## Server Systems

- [CastleRailingsRegisterOnPersistenceLoad](/systems/server/CastleRailingsRegisterOnPersistenceLoad)
- [CastleRailingsSystem](/systems/server/CastleRailingsSystem)
