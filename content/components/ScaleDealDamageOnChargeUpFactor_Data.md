---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ScaleDealDamageOnChargeUpFactor_Data
{
	static ScaleDealDamageOnChargeUpFactor_Data()
	{
		Il2CppClassPointerStore<ScaleDealDamageOnChargeUpFactor_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "ScaleDealDamageOnChargeUpFactor_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ScaleDealDamageOnChargeUpFactor_Data>.NativeClassPtr);
		ScaleDealDamageOnChargeUpFactor_Data.NativeFieldInfoPtr_ScaleFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScaleDealDamageOnChargeUpFactor_Data>.NativeClassPtr, "ScaleFactor");
		ScaleDealDamageOnChargeUpFactor_Data.NativeFieldInfoPtr_ListenerId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScaleDealDamageOnChargeUpFactor_Data>.NativeClassPtr, "ListenerId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ScaleDealDamageOnChargeUpFactor_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ScaleFactor;
	private static readonly IntPtr NativeFieldInfoPtr_ListenerId;

	public float ScaleFactor;

	public ListenerId ListenerId;
}
```
