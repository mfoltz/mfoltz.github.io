# MovePatrolState

```csharp
[StructLayout(2)]
public struct MovePatrolState
{
	static MovePatrolState()
	{
		Il2CppClassPointerStore<MovePatrolState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MovePatrolState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MovePatrolState>.NativeClassPtr);
		MovePatrolState.NativeFieldInfoPtr_LastUpdateTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MovePatrolState>.NativeClassPtr, "LastUpdateTime");
		MovePatrolState.NativeFieldInfoPtr_FromPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MovePatrolState>.NativeClassPtr, "FromPosition");
		MovePatrolState.NativeFieldInfoPtr_ToPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MovePatrolState>.NativeClassPtr, "ToPosition");
		MovePatrolState.NativeFieldInfoPtr_TargetPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MovePatrolState>.NativeClassPtr, "TargetPosition");
		MovePatrolState.NativeFieldInfoPtr_WaypointProgress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MovePatrolState>.NativeClassPtr, "WaypointProgress");
		MovePatrolState.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MovePatrolState>.NativeClassPtr, "Type");
		MovePatrolState.NativeFieldInfoPtr_Speed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MovePatrolState>.NativeClassPtr, "Speed");
		MovePatrolState.NativeFieldInfoPtr_RotationSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MovePatrolState>.NativeClassPtr, "RotationSpeed");
		MovePatrolState.NativeFieldInfoPtr_SmoothPointDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MovePatrolState>.NativeClassPtr, "SmoothPointDistance");
		MovePatrolState.NativeFieldInfoPtr_WaitTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MovePatrolState>.NativeClassPtr, "WaitTime");
		MovePatrolState.NativeFieldInfoPtr_WaitDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MovePatrolState>.NativeClassPtr, "WaitDuration");
		MovePatrolState.NativeFieldInfoPtr_WaitRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MovePatrolState>.NativeClassPtr, "WaitRotation");
		MovePatrolState.NativeFieldInfoPtr_Status = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MovePatrolState>.NativeClassPtr, "Status");
		MovePatrolState.NativeFieldInfoPtr_Flip = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MovePatrolState>.NativeClassPtr, "Flip");
		MovePatrolState.NativeFieldInfoPtr_GoalReached = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MovePatrolState>.NativeClassPtr, "GoalReached");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MovePatrolState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastUpdateTime;
	private static readonly IntPtr NativeFieldInfoPtr_FromPosition;
	private static readonly IntPtr NativeFieldInfoPtr_ToPosition;
	private static readonly IntPtr NativeFieldInfoPtr_TargetPosition;
	private static readonly IntPtr NativeFieldInfoPtr_WaypointProgress;
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_Speed;
	private static readonly IntPtr NativeFieldInfoPtr_RotationSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_SmoothPointDistance;
	private static readonly IntPtr NativeFieldInfoPtr_WaitTime;
	private static readonly IntPtr NativeFieldInfoPtr_WaitDuration;
	private static readonly IntPtr NativeFieldInfoPtr_WaitRotation;
	private static readonly IntPtr NativeFieldInfoPtr_Status;
	private static readonly IntPtr NativeFieldInfoPtr_Flip;
	private static readonly IntPtr NativeFieldInfoPtr_GoalReached;
	[FieldOffset(0)]
	public double LastUpdateTime;
	[FieldOffset(8)]
	public float3 FromPosition;
	[FieldOffset(20)]
	public float3 ToPosition;
	[FieldOffset(32)]
	public float3 TargetPosition;
	[FieldOffset(44)]
	public float WaypointProgress;
	[FieldOffset(48)]
	public PatrolType Type;
	[FieldOffset(52)]
	public float Speed;
	[FieldOffset(56)]
	public float RotationSpeed;
	[FieldOffset(60)]
	public float SmoothPointDistance;
	[FieldOffset(64)]
	public float WaitTime;
	[FieldOffset(68)]
	public float WaitDuration;
	[FieldOffset(72)]
	public Nullable_Unboxed<quaternion> WaitRotation;
	[FieldOffset(92)]
	public PatrolStatus Status;
	[FieldOffset(96)]
	[MarshalAs(4)]
	public bool Flip;
	[FieldOffset(97)]
	[MarshalAs(4)]
	public bool GoalReached;
}
