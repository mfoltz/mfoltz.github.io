---
nav_exclude: true
search_exclude: false
---

# Script_SetAbilityCooldownOnGameplayEvent_DataServer

```csharp
public struct Script_SetAbilityCooldownOnGameplayEvent_DataServer
{
	static Script_SetAbilityCooldownOnGameplayEvent_DataServer()
	{
		Il2CppClassPointerStore<Script_SetAbilityCooldownOnGameplayEvent_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SetAbilityCooldownOnGameplayEvent_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SetAbilityCooldownOnGameplayEvent_DataServer>.NativeClassPtr);
		Script_SetAbilityCooldownOnGameplayEvent_DataServer.NativeFieldInfoPtr_Cooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SetAbilityCooldownOnGameplayEvent_DataServer>.NativeClassPtr, "Cooldown");
		Script_SetAbilityCooldownOnGameplayEvent_DataServer.NativeFieldInfoPtr_AbilityIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SetAbilityCooldownOnGameplayEvent_DataServer>.NativeClassPtr, "AbilityIndex");
		Script_SetAbilityCooldownOnGameplayEvent_DataServer.NativeFieldInfoPtr_ListenerEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SetAbilityCooldownOnGameplayEvent_DataServer>.NativeClassPtr, "ListenerEventId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SetAbilityCooldownOnGameplayEvent_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Cooldown;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ListenerEventId;

	public float Cooldown;

	public int AbilityIndex;

	public GameplayEventId ListenerEventId;
}
```
