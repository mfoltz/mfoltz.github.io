---
nav_exclude: true
search_exclude: true
---

# WindZoneBox

```csharp
public struct WindZoneBox
{
	static WindZoneBox()
	{
		Il2CppClassPointerStore<WindZoneBox>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Wind.Shared.dll", "ProjectM.Wind", "WindZoneBox");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WindZoneBox>.NativeClassPtr);
		WindZoneBox.NativeFieldInfoPtr_Size = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WindZoneBox>.NativeClassPtr, "Size");
		WindZoneBox.NativeFieldInfoPtr_MinWind = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WindZoneBox>.NativeClassPtr, "MinWind");
		WindZoneBox.NativeFieldInfoPtr_MaxWind = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WindZoneBox>.NativeClassPtr, "MaxWind");
		WindZoneBox.NativeFieldInfoPtr_Priority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WindZoneBox>.NativeClassPtr, "Priority");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WindZoneBox>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Size;
	private static readonly IntPtr NativeFieldInfoPtr_MinWind;
	private static readonly IntPtr NativeFieldInfoPtr_MaxWind;
	private static readonly IntPtr NativeFieldInfoPtr_Priority;

	public float3 Size;

	public float MinWind;

	public float MaxWind;

	public byte Priority;
}
```
