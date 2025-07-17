---
nav_exclude: true
search_exclude: true
---

# WallpaperDamaged

```csharp
[StructLayout(2)]
public struct WallpaperDamaged
{
	static WallpaperDamaged()
	{
		Il2CppClassPointerStore<WallpaperDamaged>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "WallpaperDamaged");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WallpaperDamaged>.NativeClassPtr);
		WallpaperDamaged.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WallpaperDamaged>.NativeClassPtr, "Type");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WallpaperDamaged>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	[FieldOffset(0)]
	public WallpaperDamagedType Type;
}
