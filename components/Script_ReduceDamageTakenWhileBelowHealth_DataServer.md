---
nav_exclude: true
search_exclude: false
---

# Script_ReduceDamageTakenWhileBelowHealth_DataServer

```csharp
public struct Script_ReduceDamageTakenWhileBelowHealth_DataServer
{
	static Script_ReduceDamageTakenWhileBelowHealth_DataServer()
	{
		Il2CppClassPointerStore<Script_ReduceDamageTakenWhileBelowHealth_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_ReduceDamageTakenWhileBelowHealth_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_ReduceDamageTakenWhileBelowHealth_DataServer>.NativeClassPtr);
		Script_ReduceDamageTakenWhileBelowHealth_DataServer.NativeFieldInfoPtr_HealthFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ReduceDamageTakenWhileBelowHealth_DataServer>.NativeClassPtr, "HealthFactor");
		Script_ReduceDamageTakenWhileBelowHealth_DataServer.NativeFieldInfoPtr_DamageReductionFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ReduceDamageTakenWhileBelowHealth_DataServer>.NativeClassPtr, "DamageReductionFactor");
		Script_ReduceDamageTakenWhileBelowHealth_DataServer.NativeFieldInfoPtr_DamageListenerId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ReduceDamageTakenWhileBelowHealth_DataServer>.NativeClassPtr, "DamageListenerId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_ReduceDamageTakenWhileBelowHealth_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HealthFactor;
	private static readonly IntPtr NativeFieldInfoPtr_DamageReductionFactor;
	private static readonly IntPtr NativeFieldInfoPtr_DamageListenerId;

	public float HealthFactor;

	public float DamageReductionFactor;

	public ListenerId DamageListenerId;
}
```
