---
nav_exclude: true
search_exclude: true
---

# CustomDirtyTileBoundsEvent

```csharp
public struct CustomDirtyTileBoundsEvent
{
	static CustomDirtyTileBoundsEvent()
	{
		Il2CppClassPointerStore<CustomDirtyTileBoundsEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CustomDirtyTileBoundsEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CustomDirtyTileBoundsEvent>.NativeClassPtr);
		CustomDirtyTileBoundsEvent.NativeFieldInfoPtr_TileTypes = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomDirtyTileBoundsEvent>.NativeClassPtr, "TileTypes");
		CustomDirtyTileBoundsEvent.NativeFieldInfoPtr_WorldBounds = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomDirtyTileBoundsEvent>.NativeClassPtr, "WorldBounds");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CustomDirtyTileBoundsEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TileTypes;
	private static readonly IntPtr NativeFieldInfoPtr_WorldBounds;

	public TileType TileTypes;

	public BoundsMinMax WorldBounds;
}
```
