---
nav_exclude: true
search_exclude: false
---

# Script_ModifySpellAbilityCooldownOnGameplayEvent_DataServer

```csharp
public struct Script_ModifySpellAbilityCooldownOnGameplayEvent_DataServer
{
	static Script_ModifySpellAbilityCooldownOnGameplayEvent_DataServer()
	{
		Il2CppClassPointerStore<Script_ModifySpellAbilityCooldownOnGameplayEvent_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_ModifySpellAbilityCooldownOnGameplayEvent_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_ModifySpellAbilityCooldownOnGameplayEvent_DataServer>.NativeClassPtr);
		Script_ModifySpellAbilityCooldownOnGameplayEvent_DataServer.NativeFieldInfoPtr_ModifyCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ModifySpellAbilityCooldownOnGameplayEvent_DataServer>.NativeClassPtr, "ModifyCooldown");
		Script_ModifySpellAbilityCooldownOnGameplayEvent_DataServer.NativeFieldInfoPtr_ModifyCooldownPercent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ModifySpellAbilityCooldownOnGameplayEvent_DataServer>.NativeClassPtr, "ModifyCooldownPercent");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_ModifySpellAbilityCooldownOnGameplayEvent_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ModifyCooldown;
	private static readonly IntPtr NativeFieldInfoPtr_ModifyCooldownPercent;

	public float ModifyCooldown;

	public float ModifyCooldownPercent;
}
```
