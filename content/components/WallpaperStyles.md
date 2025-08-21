---
nav_exclude: true
search_exclude: true
---

```csharp
public struct WallpaperStyles
{
	static WallpaperStyles()
	{
		Il2CppClassPointerStore<WallpaperStyles>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "WallpaperStyles");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WallpaperStyles>.NativeClassPtr);
		WallpaperStyles.NativeFieldInfoPtr_InvalidStyleIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WallpaperStyles>.NativeClassPtr, "InvalidStyleIndex");
		WallpaperStyles.NativeFieldInfoPtr_SplitsPerStyle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WallpaperStyles>.NativeClassPtr, "SplitsPerStyle");
		WallpaperStyles.NativeFieldInfoPtr_Blob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WallpaperStyles>.NativeClassPtr, "Blob");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WallpaperStyles>.NativeClassPtr, ref this));
	}
	public unsafe static int InvalidStyleIndex
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(WallpaperStyles.NativeFieldInfoPtr_InvalidStyleIndex, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(WallpaperStyles.NativeFieldInfoPtr_InvalidStyleIndex, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_InvalidStyleIndex;
	private static readonly IntPtr NativeFieldInfoPtr_SplitsPerStyle;
	private static readonly IntPtr NativeFieldInfoPtr_Blob;

	public ObjectSplits SplitsPerStyle;

	public BlobAssetReference<WallpaperStyleBlob> Blob;
}
```
