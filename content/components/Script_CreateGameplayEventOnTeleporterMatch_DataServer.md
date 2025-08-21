---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_CreateGameplayEventOnTeleporterMatch_DataServer
{
	static Script_CreateGameplayEventOnTeleporterMatch_DataServer()
	{
		Il2CppClassPointerStore<Script_CreateGameplayEventOnTeleporterMatch_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_CreateGameplayEventOnTeleporterMatch_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_CreateGameplayEventOnTeleporterMatch_DataServer>.NativeClassPtr);
		Script_CreateGameplayEventOnTeleporterMatch_DataServer.NativeFieldInfoPtr_TargetFilterCondition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnTeleporterMatch_DataServer>.NativeClassPtr, "TargetFilterCondition");
		Script_CreateGameplayEventOnTeleporterMatch_DataServer.NativeFieldInfoPtr_GameplayEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnTeleporterMatch_DataServer>.NativeClassPtr, "GameplayEventId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_CreateGameplayEventOnTeleporterMatch_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetFilterCondition;
	private static readonly IntPtr NativeFieldInfoPtr_GameplayEventId;

	public BlobAssetReference<ConditionBlob> TargetFilterCondition;

	public GameplayEventId GameplayEventId;
}
```
