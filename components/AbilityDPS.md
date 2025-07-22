---
nav_exclude: true
search_exclude: false
---

# AbilityDPS

```csharp
public struct AbilityDPS
{
	static AbilityDPS()
	{
		Il2CppClassPointerStore<AbilityDPS>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AbilityDPS");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityDPS>.NativeClassPtr);
		AbilityDPS.NativeFieldInfoPtr_MaterialModifiers = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityDPS>.NativeClassPtr, "MaterialModifiers");
		AbilityDPS.NativeFieldInfoPtr_DPSWeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityDPS>.NativeClassPtr, "DPSWeight");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityDPS>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MaterialModifiers;
	private static readonly IntPtr NativeFieldInfoPtr_DPSWeight;

	public EntityTypeModifiers MaterialModifiers;

	public float DPSWeight;
}
```
