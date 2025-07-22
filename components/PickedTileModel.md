---
nav_exclude: true
search_exclude: false
---

# PickedTileModel

```csharp
public struct PickedTileModel
{
	static PickedTileModel()
	{
		Il2CppClassPointerStore<PickedTileModel>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "PickedTileModel");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PickedTileModel>.NativeClassPtr);
		PickedTileModel.NativeFieldInfoPtr_TileModel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PickedTileModel>.NativeClassPtr, "TileModel");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PickedTileModel>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TileModel;

	public Entity TileModel;
}
```
