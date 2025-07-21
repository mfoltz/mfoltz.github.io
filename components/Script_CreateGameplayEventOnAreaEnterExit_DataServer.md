---
nav_exclude: true
search_exclude: false
---

# Script_CreateGameplayEventOnAreaEnterExit_DataServer

```csharp
public struct Script_CreateGameplayEventOnAreaEnterExit_DataServer
{
	static Script_CreateGameplayEventOnAreaEnterExit_DataServer()
	{
		Il2CppClassPointerStore<Script_CreateGameplayEventOnAreaEnterExit_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_CreateGameplayEventOnAreaEnterExit_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_CreateGameplayEventOnAreaEnterExit_DataServer>.NativeClassPtr);
		Script_CreateGameplayEventOnAreaEnterExit_DataServer.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnAreaEnterExit_DataServer>.NativeClassPtr, "Radius");
		Script_CreateGameplayEventOnAreaEnterExit_DataServer.NativeFieldInfoPtr_AdditionalExitRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnAreaEnterExit_DataServer>.NativeClassPtr, "AdditionalExitRadius");
		Script_CreateGameplayEventOnAreaEnterExit_DataServer.NativeFieldInfoPtr_CheckFrequency = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnAreaEnterExit_DataServer>.NativeClassPtr, "CheckFrequency");
		Script_CreateGameplayEventOnAreaEnterExit_DataServer.NativeFieldInfoPtr_TargetHitFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnAreaEnterExit_DataServer>.NativeClassPtr, "TargetHitFilter");
		Script_CreateGameplayEventOnAreaEnterExit_DataServer.NativeFieldInfoPtr_OnEnterGameplayEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnAreaEnterExit_DataServer>.NativeClassPtr, "OnEnterGameplayEventId");
		Script_CreateGameplayEventOnAreaEnterExit_DataServer.NativeFieldInfoPtr_OnExitGameplayEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnAreaEnterExit_DataServer>.NativeClassPtr, "OnExitGameplayEventId");
		Script_CreateGameplayEventOnAreaEnterExit_DataServer.NativeFieldInfoPtr_ExitOnDeath = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnAreaEnterExit_DataServer>.NativeClassPtr, "ExitOnDeath");
		Script_CreateGameplayEventOnAreaEnterExit_DataServer.NativeFieldInfoPtr_IgnoreLineOfSight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnAreaEnterExit_DataServer>.NativeClassPtr, "IgnoreLineOfSight");
		Script_CreateGameplayEventOnAreaEnterExit_DataServer.NativeFieldInfoPtr_OnlyUsers = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnAreaEnterExit_DataServer>.NativeClassPtr, "OnlyUsers");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_CreateGameplayEventOnAreaEnterExit_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_AdditionalExitRadius;
	private static readonly IntPtr NativeFieldInfoPtr_CheckFrequency;
	private static readonly IntPtr NativeFieldInfoPtr_TargetHitFilter;
	private static readonly IntPtr NativeFieldInfoPtr_OnEnterGameplayEventId;
	private static readonly IntPtr NativeFieldInfoPtr_OnExitGameplayEventId;
	private static readonly IntPtr NativeFieldInfoPtr_ExitOnDeath;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreLineOfSight;
	private static readonly IntPtr NativeFieldInfoPtr_OnlyUsers;

	public float Radius;

	public float AdditionalExitRadius;

	public float CheckFrequency;

	public HitFilter TargetHitFilter;

	public GameplayEventId OnEnterGameplayEventId;

	public GameplayEventId OnExitGameplayEventId;

	public bool ExitOnDeath;

	public bool IgnoreLineOfSight;

	public bool OnlyUsers;
}
```
