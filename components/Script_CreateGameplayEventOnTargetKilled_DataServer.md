---
nav_exclude: true
search_exclude: false
---

# Script_CreateGameplayEventOnTargetKilled_DataServer

```csharp
public struct Script_CreateGameplayEventOnTargetKilled_DataServer
{
	static Script_CreateGameplayEventOnTargetKilled_DataServer()
	{
		Il2CppClassPointerStore<Script_CreateGameplayEventOnTargetKilled_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_CreateGameplayEventOnTargetKilled_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_CreateGameplayEventOnTargetKilled_DataServer>.NativeClassPtr);
		Script_CreateGameplayEventOnTargetKilled_DataServer.NativeFieldInfoPtr_GameplayEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnTargetKilled_DataServer>.NativeClassPtr, "GameplayEventId");
		Script_CreateGameplayEventOnTargetKilled_DataServer.NativeFieldInfoPtr_TargetFilterCondition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnTargetKilled_DataServer>.NativeClassPtr, "TargetFilterCondition");
		Script_CreateGameplayEventOnTargetKilled_DataServer.NativeFieldInfoPtr_EventTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnTargetKilled_DataServer>.NativeClassPtr, "EventTarget");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_CreateGameplayEventOnTargetKilled_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GameplayEventId;
	private static readonly IntPtr NativeFieldInfoPtr_TargetFilterCondition;
	private static readonly IntPtr NativeFieldInfoPtr_EventTarget;

	public GameplayEventId GameplayEventId;

	public BlobAssetReference<ConditionBlob> TargetFilterCondition;

	public KillTriggerTarget EventTarget;
}
```
