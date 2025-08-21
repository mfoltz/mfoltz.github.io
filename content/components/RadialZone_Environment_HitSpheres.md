---
nav_exclude: true
search_exclude: true
---

```csharp
public struct RadialZone_Environment_HitSpheres
{
	static RadialZone_Environment_HitSpheres()
	{
		Il2CppClassPointerStore<RadialZone_Environment_HitSpheres>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Gameplay.Scripting", "RadialZone_Environment_HitSpheres");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RadialZone_Environment_HitSpheres>.NativeClassPtr);
		RadialZone_Environment_HitSpheres.NativeFieldInfoPtr_Offset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RadialZone_Environment_HitSpheres>.NativeClassPtr, "Offset");
		RadialZone_Environment_HitSpheres.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RadialZone_Environment_HitSpheres>.NativeClassPtr, "Radius");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RadialZone_Environment_HitSpheres>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Offset;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;

	public float3 Offset;

	public float Radius;
}
```
