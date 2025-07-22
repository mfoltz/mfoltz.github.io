---
nav_exclude: true
search_exclude: false
---

# ChangeBloodOnGameplayEvent

```csharp
public struct ChangeBloodOnGameplayEvent
{
	static ChangeBloodOnGameplayEvent()
	{
		Il2CppClassPointerStore<ChangeBloodOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ChangeBloodOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChangeBloodOnGameplayEvent>.NativeClassPtr);
		ChangeBloodOnGameplayEvent.NativeFieldInfoPtr_BloodValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangeBloodOnGameplayEvent>.NativeClassPtr, "BloodValue");
		ChangeBloodOnGameplayEvent.NativeFieldInfoPtr_BloodQuality = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangeBloodOnGameplayEvent>.NativeClassPtr, "BloodQuality");
		ChangeBloodOnGameplayEvent.NativeFieldInfoPtr_BloodType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangeBloodOnGameplayEvent>.NativeClassPtr, "BloodType");
		ChangeBloodOnGameplayEvent.NativeFieldInfoPtr_GainBloodType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangeBloodOnGameplayEvent>.NativeClassPtr, "GainBloodType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChangeBloodOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BloodValue;
	private static readonly IntPtr NativeFieldInfoPtr_BloodQuality;
	private static readonly IntPtr NativeFieldInfoPtr_BloodType;
	private static readonly IntPtr NativeFieldInfoPtr_GainBloodType;

	public float BloodValue;

	public float BloodQuality;

	public PrefabGUID BloodType;

	public GainBloodType GainBloodType;
}
```
