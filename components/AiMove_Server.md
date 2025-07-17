---
nav_exclude: true
search_exclude: true
---

# AiMove_Server

```csharp
[StructLayout(2)]
public struct AiMove_Server
{
	static AiMove_Server()
	{
		Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AiMove_Server");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr);
		AiMove_Server.NativeFieldInfoPtr_TargetPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr, "TargetPosition");
		AiMove_Server.NativeFieldInfoPtr_NextCircleDirectionChangeTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr, "NextCircleDirectionChangeTime");
		AiMove_Server.NativeFieldInfoPtr_TargetEntity_Ability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr, "TargetEntity_Ability");
		AiMove_Server.NativeFieldInfoPtr_TargetEntity_Movement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr, "TargetEntity_Movement");
		AiMove_Server.NativeFieldInfoPtr_CircleCurveInRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr, "CircleCurveInRange");
		AiMove_Server.NativeFieldInfoPtr_CircleCurveOutOfRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr, "CircleCurveOutOfRange");
		AiMove_Server.NativeFieldInfoPtr_MinDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr, "MinDistance");
		AiMove_Server.NativeFieldInfoPtr_GoalDistanceInner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr, "GoalDistanceInner");
		AiMove_Server.NativeFieldInfoPtr_GoalDistanceOuter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr, "GoalDistanceOuter");
		AiMove_Server.NativeFieldInfoPtr_MaxDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr, "MaxDistance");
		AiMove_Server.NativeFieldInfoPtr_CircleChangeDirectionFrequencyMin = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr, "CircleChangeDirectionFrequencyMin");
		AiMove_Server.NativeFieldInfoPtr_CircleChangeDirectionFrequencyMax = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr, "CircleChangeDirectionFrequencyMax");
		AiMove_Server.NativeFieldInfoPtr_TargettingMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr, "TargettingMode");
		AiMove_Server.NativeFieldInfoPtr_MovePattern = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr, "MovePattern");
		AiMove_Server.NativeFieldInfoPtr_ForceLookAtTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr, "ForceLookAtTarget");
		AiMove_Server.NativeFieldInfoPtr_SeekOutwards = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr, "SeekOutwards");
		AiMove_Server.NativeFieldInfoPtr_CircleClockwise = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr, "CircleClockwise");
		AiMove_Server.NativeFieldInfoPtr_FreezeRotationWhenStationary = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr, "FreezeRotationWhenStationary");
		AiMove_Server.NativeFieldInfoPtr_IsSeekingGoalPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr, "IsSeekingGoalPosition");
		AiMove_Server.NativeFieldInfoPtr_OnlyChangeCircleDirectionOnCast = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr, "OnlyChangeCircleDirectionOnCast");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AiMove_Server>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetPosition;
	private static readonly IntPtr NativeFieldInfoPtr_NextCircleDirectionChangeTime;
	private static readonly IntPtr NativeFieldInfoPtr_TargetEntity_Ability;
	private static readonly IntPtr NativeFieldInfoPtr_TargetEntity_Movement;
	private static readonly IntPtr NativeFieldInfoPtr_CircleCurveInRange;
	private static readonly IntPtr NativeFieldInfoPtr_CircleCurveOutOfRange;
	private static readonly IntPtr NativeFieldInfoPtr_MinDistance;
	private static readonly IntPtr NativeFieldInfoPtr_GoalDistanceInner;
	private static readonly IntPtr NativeFieldInfoPtr_GoalDistanceOuter;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDistance;
	private static readonly IntPtr NativeFieldInfoPtr_CircleChangeDirectionFrequencyMin;
	private static readonly IntPtr NativeFieldInfoPtr_CircleChangeDirectionFrequencyMax;
	private static readonly IntPtr NativeFieldInfoPtr_TargettingMode;
	private static readonly IntPtr NativeFieldInfoPtr_MovePattern;
	private static readonly IntPtr NativeFieldInfoPtr_ForceLookAtTarget;
	private static readonly IntPtr NativeFieldInfoPtr_SeekOutwards;
	private static readonly IntPtr NativeFieldInfoPtr_CircleClockwise;
	private static readonly IntPtr NativeFieldInfoPtr_FreezeRotationWhenStationary;
	private static readonly IntPtr NativeFieldInfoPtr_IsSeekingGoalPosition;
	private static readonly IntPtr NativeFieldInfoPtr_OnlyChangeCircleDirectionOnCast;
	[FieldOffset(0)]
	public float2 TargetPosition;
	[FieldOffset(8)]
	public double NextCircleDirectionChangeTime;
	[FieldOffset(16)]
	public Entity TargetEntity_Ability;
	[FieldOffset(24)]
	public Entity TargetEntity_Movement;
	[FieldOffset(32)]
	public CurveReference CircleCurveInRange;
	[FieldOffset(40)]
	public CurveReference CircleCurveOutOfRange;
	[FieldOffset(48)]
	public float MinDistance;
	[FieldOffset(52)]
	public float GoalDistanceInner;
	[FieldOffset(56)]
	public float GoalDistanceOuter;
	[FieldOffset(60)]
	public float MaxDistance;
	[FieldOffset(64)]
	public float CircleChangeDirectionFrequencyMin;
	[FieldOffset(68)]
	public float CircleChangeDirectionFrequencyMax;
	[FieldOffset(72)]
	public AiTargettingMode TargettingMode;
	[FieldOffset(73)]
	public AiMovePattern MovePattern;
	[FieldOffset(74)]
	public AiForceLookAtTarget ForceLookAtTarget;
	[FieldOffset(75)]
	[MarshalAs(4)]
	public bool SeekOutwards;
	[FieldOffset(76)]
	[MarshalAs(4)]
	public bool CircleClockwise;
	[FieldOffset(77)]
	[MarshalAs(4)]
	public bool FreezeRotationWhenStationary;
	[FieldOffset(78)]
	[MarshalAs(4)]
	public bool IsSeekingGoalPosition;
	[FieldOffset(79)]
	[MarshalAs(4)]
	public bool OnlyChangeCircleDirectionOnCast;
}
