---
nav_exclude: true
search_exclude: true
---

```csharp
public struct AbilityChargeRechargeOnGameplayEvent_Server
{
	static AbilityChargeRechargeOnGameplayEvent_Server()
	{
		Il2CppClassPointerStore<AbilityChargeRechargeOnGameplayEvent_Server>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "AbilityChargeRechargeOnGameplayEvent_Server");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityChargeRechargeOnGameplayEvent_Server>.NativeClassPtr);
		AbilityChargeRechargeOnGameplayEvent_Server.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeRechargeOnGameplayEvent_Server>.NativeClassPtr, "Value");
		AbilityChargeRechargeOnGameplayEvent_Server.NativeFieldInfoPtr_AbilitySlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeRechargeOnGameplayEvent_Server>.NativeClassPtr, "AbilitySlot");
		AbilityChargeRechargeOnGameplayEvent_Server.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeRechargeOnGameplayEvent_Server>.NativeClassPtr, "Type");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityChargeRechargeOnGameplayEvent_Server>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_AbilitySlot;
	private static readonly IntPtr NativeFieldInfoPtr_Type;

	public float Value;

	public int AbilitySlot;

	public RechargeType Type;
}
```
