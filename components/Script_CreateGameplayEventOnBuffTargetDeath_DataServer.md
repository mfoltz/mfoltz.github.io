---
nav_exclude: true
search_exclude: true
---

# Script_CreateGameplayEventOnBuffTargetDeath_DataServer

```csharp
public struct Script_CreateGameplayEventOnBuffTargetDeath_DataServer
{
	static Script_CreateGameplayEventOnBuffTargetDeath_DataServer()
	{
		Il2CppClassPointerStore<Script_CreateGameplayEventOnBuffTargetDeath_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_CreateGameplayEventOnBuffTargetDeath_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_CreateGameplayEventOnBuffTargetDeath_DataServer>.NativeClassPtr);
		Script_CreateGameplayEventOnBuffTargetDeath_DataServer.NativeFieldInfoPtr_OnTargetDeathListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnBuffTargetDeath_DataServer>.NativeClassPtr, "OnTargetDeathListener");
		Script_CreateGameplayEventOnBuffTargetDeath_DataServer.NativeFieldInfoPtr_GameplayEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnBuffTargetDeath_DataServer>.NativeClassPtr, "GameplayEventId");
		Script_CreateGameplayEventOnBuffTargetDeath_DataServer.NativeFieldInfoPtr_EventTriggerTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnBuffTargetDeath_DataServer>.NativeClassPtr, "EventTriggerTarget");
		Script_CreateGameplayEventOnBuffTargetDeath_DataServer.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnBuffTargetDeath_DataServer>.NativeClassPtr, "Target");
		Script_CreateGameplayEventOnBuffTargetDeath_DataServer.NativeFieldInfoPtr_TriggerForMinionMasterIfMinion = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnBuffTargetDeath_DataServer>.NativeClassPtr, "TriggerForMinionMasterIfMinion");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_CreateGameplayEventOnBuffTargetDeath_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OnTargetDeathListener;
	private static readonly IntPtr NativeFieldInfoPtr_GameplayEventId;
	private static readonly IntPtr NativeFieldInfoPtr_EventTriggerTarget;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_TriggerForMinionMasterIfMinion;

	public ListenerId OnTargetDeathListener;

	public GameplayEventId GameplayEventId;

	public EventTriggerTarget EventTriggerTarget;

	public Entity Target;

	public bool TriggerForMinionMasterIfMinion;
}
```
