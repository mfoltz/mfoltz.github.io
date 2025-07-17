---
nav_exclude: true
search_exclude: true
---

# MapZoneNameOverride

```csharp
[StructLayout(2)]
public struct MapZoneNameOverride
{
	static MapZoneNameOverride()
	{
		Il2CppClassPointerStore<MapZoneNameOverride>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "MapZoneNameOverride");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MapZoneNameOverride>.NativeClassPtr);
		MapZoneNameOverride.NativeFieldInfoPtr_FromName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneNameOverride>.NativeClassPtr, "FromName");
		MapZoneNameOverride.NativeFieldInfoPtr_ToName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneNameOverride>.NativeClassPtr, "ToName");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MapZoneNameOverride>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FromName;
	private static readonly IntPtr NativeFieldInfoPtr_ToName;
	[FieldOffset(0)]
	public LocalizationKey FromName;
	[FieldOffset(16)]
	public LocalizationKey ToName;
}
