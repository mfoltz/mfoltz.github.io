---
nav_exclude: true
search_exclude: true
---

# PlannedTileModel

```csharp
public struct PlannedTileModel
{
	static PlannedTileModel()
	{
		Il2CppClassPointerStore<PlannedTileModel>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "PlannedTileModel");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PlannedTileModel>.NativeClassPtr);
		PlannedTileModel.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlannedTileModel>.NativeClassPtr, "Position");
		PlannedTileModel.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlannedTileModel>.NativeClassPtr, "Rotation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PlannedTileModel>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;

	public float3 Position;

	public TileRotation Rotation;
}
```
