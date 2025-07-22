---
nav_exclude: true
search_exclude: true
---

# WallpaperUpdatedEvent

```csharp
public struct WallpaperUpdatedEvent
{
	static WallpaperUpdatedEvent()
	{
		Il2CppClassPointerStore<WallpaperUpdatedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding.AssetSwapping", "WallpaperUpdatedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WallpaperUpdatedEvent>.NativeClassPtr);
		WallpaperUpdatedEvent.NativeFieldInfoPtr_Owner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WallpaperUpdatedEvent>.NativeClassPtr, "Owner");
		WallpaperUpdatedEvent.NativeFieldInfoPtr_WallpaperEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WallpaperUpdatedEvent>.NativeClassPtr, "WallpaperEntity");
		WallpaperUpdatedEvent.NativeFieldInfoPtr_Orientation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WallpaperUpdatedEvent>.NativeClassPtr, "Orientation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WallpaperUpdatedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Owner;
	private static readonly IntPtr NativeFieldInfoPtr_WallpaperEntity;
	private static readonly IntPtr NativeFieldInfoPtr_Orientation;

	public Entity Owner;

	public Entity WallpaperEntity;

	public WallpaperOrientation Orientation;
}
```

## Server Systems

- [AssetSwapFloorUpdateSystem](/systems/server/AssetSwapFloorUpdateSystem)
