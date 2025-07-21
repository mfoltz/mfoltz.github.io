---
nav_exclude: true
search_exclude: false
---

# MovePatrolState

```csharp
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

	public double LastUpdateTime;

	public float3 FromPosition;

	public float3 ToPosition;

	public float3 TargetPosition;

	public float WaypointProgress;

	public PatrolType Type;

	public float Speed;

	public float RotationSpeed;

	public float SmoothPointDistance;

	public float WaitTime;

	public float WaitDuration;

	public Nullable_Unboxed<quaternion> WaitRotation;

	public PatrolStatus Status;

	public bool Flip;

	public bool GoalReached;
}
```
