---
nav_exclude: true
search_exclude: true
---

# Script_CreateGameplayEventOnTickRandomChance_DataServer

```csharp
public struct Script_CreateGameplayEventOnTickRandomChance_DataServer
{
	static Script_CreateGameplayEventOnTickRandomChance_DataServer()
	{
		Il2CppClassPointerStore<Script_CreateGameplayEventOnTickRandomChance_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_CreateGameplayEventOnTickRandomChance_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_CreateGameplayEventOnTickRandomChance_DataServer>.NativeClassPtr);
		Script_CreateGameplayEventOnTickRandomChance_DataServer.NativeFieldInfoPtr_EventTriggerChance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnTickRandomChance_DataServer>.NativeClassPtr, "EventTriggerChance");
		Script_CreateGameplayEventOnTickRandomChance_DataServer.NativeFieldInfoPtr_EventTriggerChanceIncreasePerTry = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnTickRandomChance_DataServer>.NativeClassPtr, "EventTriggerChanceIncreasePerTry");
		Script_CreateGameplayEventOnTickRandomChance_DataServer.NativeFieldInfoPtr_GameplayEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnTickRandomChance_DataServer>.NativeClassPtr, "GameplayEventId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_CreateGameplayEventOnTickRandomChance_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventTriggerChance;
	private static readonly IntPtr NativeFieldInfoPtr_EventTriggerChanceIncreasePerTry;
	private static readonly IntPtr NativeFieldInfoPtr_GameplayEventId;

	public float EventTriggerChance;

	public float EventTriggerChanceIncreasePerTry;

	public GameplayEventId GameplayEventId;
}
```
