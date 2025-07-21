---
nav_exclude: true
search_exclude: false
---

# EditWallpaperSelection

```csharp
public struct EditWallpaperSelection
{
	static EditWallpaperSelection()
	{
		Il2CppClassPointerStore<EditWallpaperSelection>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "EditWallpaperSelection");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EditWallpaperSelection>.NativeClassPtr);
		EditWallpaperSelection.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditWallpaperSelection>.NativeClassPtr, "Target");
		EditWallpaperSelection.NativeFieldInfoPtr_Orientation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditWallpaperSelection>.NativeClassPtr, "Orientation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EditWallpaperSelection>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_Orientation;

	public Entity Target;

	public WallpaperOrientation Orientation;
}
```
