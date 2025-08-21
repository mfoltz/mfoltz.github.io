---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ServantInjuredChance
{
	static ServantInjuredChance()
	{
		Il2CppClassPointerStore<ServantInjuredChance>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ServantInjuredChance");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantInjuredChance>.NativeClassPtr);
		ServantInjuredChance.NativeFieldInfoPtr_Injured_Weight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantInjuredChance>.NativeClassPtr, "Injured_Weight");
		ServantInjuredChance.NativeFieldInfoPtr_Injured_Time = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantInjuredChance>.NativeClassPtr, "Injured_Time");
		ServantInjuredChance.NativeFieldInfoPtr_Injured_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantInjuredChance>.NativeClassPtr, "Injured_Type");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantInjuredChance>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Injured_Weight;
	private static readonly IntPtr NativeFieldInfoPtr_Injured_Time;
	private static readonly IntPtr NativeFieldInfoPtr_Injured_Type;

	public float Injured_Weight;

	public float Injured_Time;

	public PrefabGUID Injured_Type;
}
```
