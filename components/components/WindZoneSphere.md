---
nav_exclude: true
search_exclude: true
---

# WindZoneSphere

```csharp
[StructLayout(2)]
public struct WindZoneSphere
{
	static WindZoneSphere()
	{
		Il2CppClassPointerStore<WindZoneSphere>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Wind.Shared.dll", "ProjectM.Wind", "WindZoneSphere");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WindZoneSphere>.NativeClassPtr);
		WindZoneSphere.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WindZoneSphere>.NativeClassPtr, "Radius");
		WindZoneSphere.NativeFieldInfoPtr_MinWind = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WindZoneSphere>.NativeClassPtr, "MinWind");
		WindZoneSphere.NativeFieldInfoPtr_MaxWind = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WindZoneSphere>.NativeClassPtr, "MaxWind");
		WindZoneSphere.NativeFieldInfoPtr_Priority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WindZoneSphere>.NativeClassPtr, "Priority");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WindZoneSphere>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_MinWind;
	private static readonly IntPtr NativeFieldInfoPtr_MaxWind;
	private static readonly IntPtr NativeFieldInfoPtr_Priority;
	[FieldOffset(0)]
	public float Radius;
	[FieldOffset(4)]
	public float MinWind;
	[FieldOffset(8)]
	public float MaxWind;
	[FieldOffset(12)]
	public byte Priority;
}
