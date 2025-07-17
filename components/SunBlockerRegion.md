---
nav_exclude: true
search_exclude: true
---

# SunBlockerRegion

```csharp
public struct SunBlockerRegion
{
	static SunBlockerRegion()
	{
		Il2CppClassPointerStore<SunBlockerRegion>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.SunBlocker", "SunBlockerRegion");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SunBlockerRegion>.NativeClassPtr);
		SunBlockerRegion.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SunBlockerRegion>.NativeClassPtr, "Data");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SunBlockerRegion>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;

	public BlobAssetReference<PolygonRegionBlob> Data;
}
```
