---
nav_exclude: true
search_exclude: true
---

# BuildModeSettings

```csharp
public struct BuildModeSettings
{
	static BuildModeSettings()
	{
		Il2CppClassPointerStore<BuildModeSettings>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "BuildModeSettings");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuildModeSettings>.NativeClassPtr);
		BuildModeSettings.NativeFieldInfoPtr_LKey_InvalidDismantle_ItemsInside = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildModeSettings>.NativeClassPtr, "LKey_InvalidDismantle_ItemsInside");
		BuildModeSettings.NativeFieldInfoPtr_BuildMenuHeight1080pPixels = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildModeSettings>.NativeClassPtr, "BuildMenuHeight1080pPixels");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuildModeSettings>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LKey_InvalidDismantle_ItemsInside;
	private static readonly IntPtr NativeFieldInfoPtr_BuildMenuHeight1080pPixels;

	public AssetGuid LKey_InvalidDismantle_ItemsInside;

	public float BuildMenuHeight1080pPixels;
}
```
