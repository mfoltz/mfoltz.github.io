---
nav_exclude: true
search_exclude: true
---

# LoadCastleObjectWallpaperElements

```csharp
public struct LoadCastleObjectWallpaperElements
{
	static LoadCastleObjectWallpaperElements()
	{
		Il2CppClassPointerStore<LoadCastleObjectWallpaperElements>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "LoadCastleObjectWallpaperElements");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LoadCastleObjectWallpaperElements>.NativeClassPtr);
		LoadCastleObjectWallpaperElements.NativeFieldInfoPtr_TranslationOffsetFromHeart = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LoadCastleObjectWallpaperElements>.NativeClassPtr, "TranslationOffsetFromHeart");
		LoadCastleObjectWallpaperElements.NativeFieldInfoPtr_RotationOffsetFromHeart = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LoadCastleObjectWallpaperElements>.NativeClassPtr, "RotationOffsetFromHeart");
		LoadCastleObjectWallpaperElements.NativeFieldInfoPtr_Orientation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LoadCastleObjectWallpaperElements>.NativeClassPtr, "Orientation");
		LoadCastleObjectWallpaperElements.NativeFieldInfoPtr_Style = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LoadCastleObjectWallpaperElements>.NativeClassPtr, "Style");
		LoadCastleObjectWallpaperElements.NativeFieldInfoPtr_Variation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LoadCastleObjectWallpaperElements>.NativeClassPtr, "Variation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LoadCastleObjectWallpaperElements>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TranslationOffsetFromHeart;
	private static readonly IntPtr NativeFieldInfoPtr_RotationOffsetFromHeart;
	private static readonly IntPtr NativeFieldInfoPtr_Orientation;
	private static readonly IntPtr NativeFieldInfoPtr_Style;
	private static readonly IntPtr NativeFieldInfoPtr_Variation;

	public float3 TranslationOffsetFromHeart;

	public quaternion RotationOffsetFromHeart;

	public WallpaperOrientation Orientation;

	public byte Style;

	public byte Variation;
}
```
