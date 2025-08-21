---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_Modify_Combat_Movement_Buff_Data
{
	static Script_Modify_Combat_Movement_Buff_Data()
	{
		Il2CppClassPointerStore<Script_Modify_Combat_Movement_Buff_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Modify_Combat_Movement_Buff_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Modify_Combat_Movement_Buff_Data>.NativeClassPtr);
		Script_Modify_Combat_Movement_Buff_Data.NativeFieldInfoPtr_MinDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Modify_Combat_Movement_Buff_Data>.NativeClassPtr, "MinDistance");
		Script_Modify_Combat_Movement_Buff_Data.NativeFieldInfoPtr_GoalDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Modify_Combat_Movement_Buff_Data>.NativeClassPtr, "GoalDistance");
		Script_Modify_Combat_Movement_Buff_Data.NativeFieldInfoPtr_GoalDistanceOuter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Modify_Combat_Movement_Buff_Data>.NativeClassPtr, "GoalDistanceOuter");
		Script_Modify_Combat_Movement_Buff_Data.NativeFieldInfoPtr_MaxDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Modify_Combat_Movement_Buff_Data>.NativeClassPtr, "MaxDistance");
		Script_Modify_Combat_Movement_Buff_Data.NativeFieldInfoPtr_MovePattern = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Modify_Combat_Movement_Buff_Data>.NativeClassPtr, "MovePattern");
		Script_Modify_Combat_Movement_Buff_Data.NativeFieldInfoPtr_ForceLookAtTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Modify_Combat_Movement_Buff_Data>.NativeClassPtr, "ForceLookAtTarget");
		Script_Modify_Combat_Movement_Buff_Data.NativeFieldInfoPtr_CircleCurveInRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Modify_Combat_Movement_Buff_Data>.NativeClassPtr, "CircleCurveInRange");
		Script_Modify_Combat_Movement_Buff_Data.NativeFieldInfoPtr_CircleCurveOutOfRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Modify_Combat_Movement_Buff_Data>.NativeClassPtr, "CircleCurveOutOfRange");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Modify_Combat_Movement_Buff_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MinDistance;
	private static readonly IntPtr NativeFieldInfoPtr_GoalDistance;
	private static readonly IntPtr NativeFieldInfoPtr_GoalDistanceOuter;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDistance;
	private static readonly IntPtr NativeFieldInfoPtr_MovePattern;
	private static readonly IntPtr NativeFieldInfoPtr_ForceLookAtTarget;
	private static readonly IntPtr NativeFieldInfoPtr_CircleCurveInRange;
	private static readonly IntPtr NativeFieldInfoPtr_CircleCurveOutOfRange;

	public float MinDistance;

	public float GoalDistance;

	public float GoalDistanceOuter;

	public float MaxDistance;

	public AiMovePattern MovePattern;

	public AiForceLookAtTarget ForceLookAtTarget;

	public CurveReference CircleCurveInRange;

	public CurveReference CircleCurveOutOfRange;
}
```
