---
nav_exclude: true
search_exclude: false
---

# Script_CreateGameplayEventOnTickAfterDelay_DataServer

```csharp
public struct Script_CreateGameplayEventOnTickAfterDelay_DataServer
{
	static Script_CreateGameplayEventOnTickAfterDelay_DataServer()
	{
		Il2CppClassPointerStore<Script_CreateGameplayEventOnTickAfterDelay_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_CreateGameplayEventOnTickAfterDelay_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_CreateGameplayEventOnTickAfterDelay_DataServer>.NativeClassPtr);
		Script_CreateGameplayEventOnTickAfterDelay_DataServer.NativeFieldInfoPtr_Delay = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnTickAfterDelay_DataServer>.NativeClassPtr, "Delay");
		Script_CreateGameplayEventOnTickAfterDelay_DataServer.NativeFieldInfoPtr_GameplayEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnTickAfterDelay_DataServer>.NativeClassPtr, "GameplayEventId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_CreateGameplayEventOnTickAfterDelay_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Delay;
	private static readonly IntPtr NativeFieldInfoPtr_GameplayEventId;

	public float Delay;

	public GameplayEventId GameplayEventId;
}
```
