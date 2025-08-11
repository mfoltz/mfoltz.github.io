---
nav_exclude: true
search_exclude: true
---

# MapIconPosition

```csharp
public struct MapIconPosition
{
	static MapIconPosition()
	{
		Il2CppClassPointerStore<MapIconPosition>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MapIconPosition");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MapIconPosition>.NativeClassPtr);
		MapIconPosition.NativeFieldInfoPtr_TilePosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapIconPosition>.NativeClassPtr, "TilePosition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MapIconPosition>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TilePosition;

	public int2 TilePosition;
}
```

## Server Systems

- [MapIconSpawnSystem](/systems/server/MapIconSpawnSystem)

## Client Systems

- [DeserializeMapIconSystem](/systems/client/DeserializeMapIconSystem)
