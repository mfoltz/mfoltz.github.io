---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_SetSpellTargetToAggroListTarget_DataServer
{
	static Script_SetSpellTargetToAggroListTarget_DataServer()
	{
		Il2CppClassPointerStore<Script_SetSpellTargetToAggroListTarget_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SetSpellTargetToAggroListTarget_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SetSpellTargetToAggroListTarget_DataServer>.NativeClassPtr);
		Script_SetSpellTargetToAggroListTarget_DataServer.NativeFieldInfoPtr_MaxDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SetSpellTargetToAggroListTarget_DataServer>.NativeClassPtr, "MaxDistance");
		Script_SetSpellTargetToAggroListTarget_DataServer.NativeFieldInfoPtr_LowPrioBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SetSpellTargetToAggroListTarget_DataServer>.NativeClassPtr, "LowPrioBuff");
		Script_SetSpellTargetToAggroListTarget_DataServer.NativeFieldInfoPtr_OnFailGameplayEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SetSpellTargetToAggroListTarget_DataServer>.NativeClassPtr, "OnFailGameplayEventId");
		Script_SetSpellTargetToAggroListTarget_DataServer.NativeFieldInfoPtr_RandomTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SetSpellTargetToAggroListTarget_DataServer>.NativeClassPtr, "RandomTarget");
		Script_SetSpellTargetToAggroListTarget_DataServer.NativeFieldInfoPtr_ExcludeBuffTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SetSpellTargetToAggroListTarget_DataServer>.NativeClassPtr, "ExcludeBuffTarget");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SetSpellTargetToAggroListTarget_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MaxDistance;
	private static readonly IntPtr NativeFieldInfoPtr_LowPrioBuff;
	private static readonly IntPtr NativeFieldInfoPtr_OnFailGameplayEventId;
	private static readonly IntPtr NativeFieldInfoPtr_RandomTarget;
	private static readonly IntPtr NativeFieldInfoPtr_ExcludeBuffTarget;

	public float MaxDistance;

	public PrefabGUID LowPrioBuff;

	public GameplayEventId OnFailGameplayEventId;

	public bool RandomTarget;

	public bool ExcludeBuffTarget;
}
```
