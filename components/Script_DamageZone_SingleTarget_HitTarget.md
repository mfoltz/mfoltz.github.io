---
nav_exclude: true
search_exclude: true
---

# Script_DamageZone_SingleTarget_HitTarget

```csharp
public struct Script_DamageZone_SingleTarget_HitTarget
{
	static Script_DamageZone_SingleTarget_HitTarget()
	{
		Il2CppClassPointerStore<Script_DamageZone_SingleTarget_HitTarget>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_DamageZone_SingleTarget_HitTarget");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_DamageZone_SingleTarget_HitTarget>.NativeClassPtr);
		Script_DamageZone_SingleTarget_HitTarget.NativeFieldInfoPtr_HitConditionIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_DamageZone_SingleTarget_HitTarget>.NativeClassPtr, "HitConditionIndex");
		Script_DamageZone_SingleTarget_HitTarget.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_DamageZone_SingleTarget_HitTarget>.NativeClassPtr, "Target");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_DamageZone_SingleTarget_HitTarget>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HitConditionIndex;
	private static readonly IntPtr NativeFieldInfoPtr_Target;

	public int HitConditionIndex;

	public Entity Target;
}
```
