---
nav_exclude: true
search_exclude: true
---

# Script_ModifyAbilityCooldownOnGameplayEvent_DataServer

```csharp
public struct Script_ModifyAbilityCooldownOnGameplayEvent_DataServer
{
	static Script_ModifyAbilityCooldownOnGameplayEvent_DataServer()
	{
		Il2CppClassPointerStore<Script_ModifyAbilityCooldownOnGameplayEvent_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_ModifyAbilityCooldownOnGameplayEvent_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_ModifyAbilityCooldownOnGameplayEvent_DataServer>.NativeClassPtr);
		Script_ModifyAbilityCooldownOnGameplayEvent_DataServer.NativeFieldInfoPtr_AbilityGroupType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ModifyAbilityCooldownOnGameplayEvent_DataServer>.NativeClassPtr, "AbilityGroupType");
		Script_ModifyAbilityCooldownOnGameplayEvent_DataServer.NativeFieldInfoPtr_ModifyCooldownFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ModifyAbilityCooldownOnGameplayEvent_DataServer>.NativeClassPtr, "ModifyCooldownFactor");
		Script_ModifyAbilityCooldownOnGameplayEvent_DataServer.NativeFieldInfoPtr_ModifyCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ModifyAbilityCooldownOnGameplayEvent_DataServer>.NativeClassPtr, "ModifyCooldown");
		Script_ModifyAbilityCooldownOnGameplayEvent_DataServer.NativeFieldInfoPtr_TriggerMaxCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ModifyAbilityCooldownOnGameplayEvent_DataServer>.NativeClassPtr, "TriggerMaxCooldown");
		Script_ModifyAbilityCooldownOnGameplayEvent_DataServer.NativeFieldInfoPtr_ResetCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ModifyAbilityCooldownOnGameplayEvent_DataServer>.NativeClassPtr, "ResetCooldown");
		Script_ModifyAbilityCooldownOnGameplayEvent_DataServer.NativeFieldInfoPtr_AbilityIndexOverride = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ModifyAbilityCooldownOnGameplayEvent_DataServer>.NativeClassPtr, "AbilityIndexOverride");
		Script_ModifyAbilityCooldownOnGameplayEvent_DataServer.NativeFieldInfoPtr_ScaleWithBloodEfficiency = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ModifyAbilityCooldownOnGameplayEvent_DataServer>.NativeClassPtr, "ScaleWithBloodEfficiency");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_ModifyAbilityCooldownOnGameplayEvent_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbilityGroupType;
	private static readonly IntPtr NativeFieldInfoPtr_ModifyCooldownFactor;
	private static readonly IntPtr NativeFieldInfoPtr_ModifyCooldown;
	private static readonly IntPtr NativeFieldInfoPtr_TriggerMaxCooldown;
	private static readonly IntPtr NativeFieldInfoPtr_ResetCooldown;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityIndexOverride;
	private static readonly IntPtr NativeFieldInfoPtr_ScaleWithBloodEfficiency;

	public PrefabGUID AbilityGroupType;

	public float ModifyCooldownFactor;

	public float ModifyCooldown;

	public bool TriggerMaxCooldown;

	public bool ResetCooldown;

	public int AbilityIndexOverride;

	public bool ScaleWithBloodEfficiency;
}
```
