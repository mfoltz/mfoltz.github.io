---
nav_exclude: true
search_exclude: true
---

# Script_HomingSpell_DataServer

```csharp
public struct Script_HomingSpell_DataServer
{
	static Script_HomingSpell_DataServer()
	{
		Il2CppClassPointerStore<Script_HomingSpell_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_HomingSpell_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_HomingSpell_DataServer>.NativeClassPtr);
		Script_HomingSpell_DataServer.NativeFieldInfoPtr_EventOnHomingStart = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataServer>.NativeClassPtr, "EventOnHomingStart");
		Script_HomingSpell_DataServer.NativeFieldInfoPtr_DestroyWhenOwnerReached = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataServer>.NativeClassPtr, "DestroyWhenOwnerReached");
		Script_HomingSpell_DataServer.NativeFieldInfoPtr_DestroyWhenOwnerReachedExtraDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataServer>.NativeClassPtr, "DestroyWhenOwnerReachedExtraDistance");
		Script_HomingSpell_DataServer.NativeFieldInfoPtr_SetSpellTargetToOwnerWhenTargetReached = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataServer>.NativeClassPtr, "SetSpellTargetToOwnerWhenTargetReached");
		Script_HomingSpell_DataServer.NativeFieldInfoPtr_DistanceToTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataServer>.NativeClassPtr, "DistanceToTarget");
		Script_HomingSpell_DataServer.NativeFieldInfoPtr_LockProjectileHeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HomingSpell_DataServer>.NativeClassPtr, "LockProjectileHeight");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_HomingSpell_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventOnHomingStart;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyWhenOwnerReached;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyWhenOwnerReachedExtraDistance;
	private static readonly IntPtr NativeFieldInfoPtr_SetSpellTargetToOwnerWhenTargetReached;
	private static readonly IntPtr NativeFieldInfoPtr_DistanceToTarget;
	private static readonly IntPtr NativeFieldInfoPtr_LockProjectileHeight;

	public GameplayEventId EventOnHomingStart;

	public bool DestroyWhenOwnerReached;

	public float DestroyWhenOwnerReachedExtraDistance;

	public bool SetSpellTargetToOwnerWhenTargetReached;

	public float DistanceToTarget;

	public bool LockProjectileHeight;
}
```
