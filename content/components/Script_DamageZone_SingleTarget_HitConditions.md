---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_DamageZone_SingleTarget_HitConditions
{
	static Script_DamageZone_SingleTarget_HitConditions()
	{
		Il2CppClassPointerStore<Script_DamageZone_SingleTarget_HitConditions>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_DamageZone_SingleTarget_HitConditions");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_DamageZone_SingleTarget_HitConditions>.NativeClassPtr);
		Script_DamageZone_SingleTarget_HitConditions.NativeFieldInfoPtr_Timer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_DamageZone_SingleTarget_HitConditions>.NativeClassPtr, "Timer");
		Script_DamageZone_SingleTarget_HitConditions.NativeFieldInfoPtr_Elapsed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_DamageZone_SingleTarget_HitConditions>.NativeClassPtr, "Elapsed");
		Script_DamageZone_SingleTarget_HitConditions.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_DamageZone_SingleTarget_HitConditions>.NativeClassPtr, "Condition");
		Script_DamageZone_SingleTarget_HitConditions.NativeFieldInfoPtr_OnTargetHitEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_DamageZone_SingleTarget_HitConditions>.NativeClassPtr, "OnTargetHitEventId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_DamageZone_SingleTarget_HitConditions>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Timer;
	private static readonly IntPtr NativeFieldInfoPtr_Elapsed;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_OnTargetHitEventId;

	public float Timer;

	public float Elapsed;

	public BlobAssetReference<ConditionBlob> Condition;

	public GameplayEventId OnTargetHitEventId;
}
```
