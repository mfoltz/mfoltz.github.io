---
nav_exclude: true
search_exclude: true
---

# PlannedWallpaper

```csharp
public struct PlannedWallpaper
{
	static PlannedWallpaper()
	{
		Il2CppClassPointerStore<PlannedWallpaper>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "PlannedWallpaper");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PlannedWallpaper>.NativeClassPtr);
		PlannedWallpaper.NativeFieldInfoPtr_SelectedDescription = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlannedWallpaper>.NativeClassPtr, "SelectedDescription");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PlannedWallpaper>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SelectedDescription;

	public WallpaperDescription SelectedDescription;
}
```
