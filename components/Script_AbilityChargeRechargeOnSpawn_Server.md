---
nav_exclude: true
search_exclude: true
---

# Script_AbilityChargeRechargeOnSpawn_Server

```csharp
public struct Script_AbilityChargeRechargeOnSpawn_Server
{
	static Script_AbilityChargeRechargeOnSpawn_Server()
	{
		Il2CppClassPointerStore<Script_AbilityChargeRechargeOnSpawn_Server>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_AbilityChargeRechargeOnSpawn_Server");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_AbilityChargeRechargeOnSpawn_Server>.NativeClassPtr);
		Script_AbilityChargeRechargeOnSpawn_Server.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_AbilityChargeRechargeOnSpawn_Server>.NativeClassPtr, "Value");
		Script_AbilityChargeRechargeOnSpawn_Server.NativeFieldInfoPtr_AbilitySlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_AbilityChargeRechargeOnSpawn_Server>.NativeClassPtr, "AbilitySlot");
		Script_AbilityChargeRechargeOnSpawn_Server.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_AbilityChargeRechargeOnSpawn_Server>.NativeClassPtr, "Type");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_AbilityChargeRechargeOnSpawn_Server>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_AbilitySlot;
	private static readonly IntPtr NativeFieldInfoPtr_Type;

	public float Value;

	public int AbilitySlot;

	public AbilityRechargeType Type;
}
```
