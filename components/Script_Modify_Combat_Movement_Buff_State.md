# Script_Modify_Combat_Movement_Buff_State

```csharp
[StructLayout(2)]
public struct Script_Modify_Combat_Movement_Buff_State
{
	static Script_Modify_Combat_Movement_Buff_State()
	{
		Il2CppClassPointerStore<Script_Modify_Combat_Movement_Buff_State>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Modify_Combat_Movement_Buff_State");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Modify_Combat_Movement_Buff_State>.NativeClassPtr);
		Script_Modify_Combat_Movement_Buff_State.NativeFieldInfoPtr_MinDistanceModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Modify_Combat_Movement_Buff_State>.NativeClassPtr, "MinDistanceModId");
		Script_Modify_Combat_Movement_Buff_State.NativeFieldInfoPtr_GoalDistanceModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Modify_Combat_Movement_Buff_State>.NativeClassPtr, "GoalDistanceModId");
		Script_Modify_Combat_Movement_Buff_State.NativeFieldInfoPtr_GoalDistanceOuterModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Modify_Combat_Movement_Buff_State>.NativeClassPtr, "GoalDistanceOuterModId");
		Script_Modify_Combat_Movement_Buff_State.NativeFieldInfoPtr_MaxDistanceModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Modify_Combat_Movement_Buff_State>.NativeClassPtr, "MaxDistanceModId");
		Script_Modify_Combat_Movement_Buff_State.NativeFieldInfoPtr_MovePatternModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Modify_Combat_Movement_Buff_State>.NativeClassPtr, "MovePatternModId");
		Script_Modify_Combat_Movement_Buff_State.NativeFieldInfoPtr_ForceLookAtTargetModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Modify_Combat_Movement_Buff_State>.NativeClassPtr, "ForceLookAtTargetModId");
		Script_Modify_Combat_Movement_Buff_State.NativeFieldInfoPtr_OldCircleCurveInRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Modify_Combat_Movement_Buff_State>.NativeClassPtr, "OldCircleCurveInRange");
		Script_Modify_Combat_Movement_Buff_State.NativeFieldInfoPtr_OldCircleCurveOutOfRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Modify_Combat_Movement_Buff_State>.NativeClassPtr, "OldCircleCurveOutOfRange");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Modify_Combat_Movement_Buff_State>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MinDistanceModId;
	private static readonly IntPtr NativeFieldInfoPtr_GoalDistanceModId;
	private static readonly IntPtr NativeFieldInfoPtr_GoalDistanceOuterModId;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDistanceModId;
	private static readonly IntPtr NativeFieldInfoPtr_MovePatternModId;
	private static readonly IntPtr NativeFieldInfoPtr_ForceLookAtTargetModId;
	private static readonly IntPtr NativeFieldInfoPtr_OldCircleCurveInRange;
	private static readonly IntPtr NativeFieldInfoPtr_OldCircleCurveOutOfRange;
	[FieldOffset(0)]
	public ModificationId MinDistanceModId;
	[FieldOffset(4)]
	public ModificationId GoalDistanceModId;
	[FieldOffset(8)]
	public ModificationId GoalDistanceOuterModId;
	[FieldOffset(12)]
	public ModificationId MaxDistanceModId;
	[FieldOffset(16)]
	public ModificationId MovePatternModId;
	[FieldOffset(20)]
	public ModificationId ForceLookAtTargetModId;
	[FieldOffset(24)]
	public CurveReference OldCircleCurveInRange;
	[FieldOffset(32)]
	public CurveReference OldCircleCurveOutOfRange;
}
