---
nav_exclude: true
search_exclude: true
---

# StationServants

```csharp
public struct StationServants
{
	static StationServants()
	{
		Il2CppClassPointerStore<StationServants>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "StationServants");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StationServants>.NativeClassPtr);
		StationServants.NativeFieldInfoPtr_Servants = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StationServants>.NativeClassPtr, "Servants");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StationServants>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Servants;

	public ServantType Servants;
}
```
