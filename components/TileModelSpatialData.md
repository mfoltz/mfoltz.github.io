---
nav_exclude: true
search_exclude: true
---

# TileModelSpatialData

```csharp
[StructLayout(2)]
public struct TileModelSpatialData
{
	static TileModelSpatialData()
	{
		Il2CppClassPointerStore<TileModelSpatialData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TileModelSpatialData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TileModelSpatialData>.NativeClassPtr);
		TileModelSpatialData.NativeFieldInfoPtr_LastTilePosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TileModelSpatialData>.NativeClassPtr, "LastTilePosition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TileModelSpatialData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastTilePosition;
	[FieldOffset(0)]
	public TilePosition LastTilePosition;
}
