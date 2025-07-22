---
nav_exclude: true
search_exclude: false
---

# RadialZone_Environment_Data

```csharp
public struct RadialZone_Environment_Data
{
	static RadialZone_Environment_Data()
	{
		Il2CppClassPointerStore<RadialZone_Environment_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Gameplay.Scripting", "RadialZone_Environment_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RadialZone_Environment_Data>.NativeClassPtr);
		RadialZone_Environment_Data.NativeFieldInfoPtr_Debuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RadialZone_Environment_Data>.NativeClassPtr, "Debuff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RadialZone_Environment_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Debuff;

	public PrefabGUID Debuff;
}
```
