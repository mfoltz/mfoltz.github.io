---
nav_exclude: true
search_exclude: false
---

# Script_CreateGameplayEventIfKilledHasBuff_DataServer

```csharp
public struct Script_CreateGameplayEventIfKilledHasBuff_DataServer
{
	static Script_CreateGameplayEventIfKilledHasBuff_DataServer()
	{
		Il2CppClassPointerStore<Script_CreateGameplayEventIfKilledHasBuff_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_CreateGameplayEventIfKilledHasBuff_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_CreateGameplayEventIfKilledHasBuff_DataServer>.NativeClassPtr);
		Script_CreateGameplayEventIfKilledHasBuff_DataServer.NativeFieldInfoPtr_BuffId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventIfKilledHasBuff_DataServer>.NativeClassPtr, "BuffId");
		Script_CreateGameplayEventIfKilledHasBuff_DataServer.NativeFieldInfoPtr_GameplayEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventIfKilledHasBuff_DataServer>.NativeClassPtr, "GameplayEventId");
		Script_CreateGameplayEventIfKilledHasBuff_DataServer.NativeFieldInfoPtr_OnKillEventListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventIfKilledHasBuff_DataServer>.NativeClassPtr, "OnKillEventListener");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_CreateGameplayEventIfKilledHasBuff_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BuffId;
	private static readonly IntPtr NativeFieldInfoPtr_GameplayEventId;
	private static readonly IntPtr NativeFieldInfoPtr_OnKillEventListener;

	public PrefabGUID BuffId;

	public GameplayEventId GameplayEventId;

	public ListenerId OnKillEventListener;
}
```
