---
nav_exclude: true
search_exclude: true
---

# TravelToTarget

```csharp
public struct TravelToTarget
{
	static TravelToTarget()
	{
		Il2CppClassPointerStore<TravelToTarget>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "TravelToTarget");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TravelToTarget>.NativeClassPtr);
		TravelToTarget.NativeFieldInfoPtr_StartRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelToTarget>.NativeClassPtr, "StartRotation");
		TravelToTarget.NativeFieldInfoPtr_TargetRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelToTarget>.NativeClassPtr, "TargetRotation");
		TravelToTarget.NativeFieldInfoPtr_StartPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelToTarget>.NativeClassPtr, "StartPosition");
		TravelToTarget.NativeFieldInfoPtr_EndPositionTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelToTarget>.NativeClassPtr, "EndPositionTarget");
		TravelToTarget.NativeFieldInfoPtr_Offset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelToTarget>.NativeClassPtr, "Offset");
		TravelToTarget.NativeFieldInfoPtr_TargetStartPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelToTarget>.NativeClassPtr, "TargetStartPosition");
		TravelToTarget.NativeFieldInfoPtr_Curve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelToTarget>.NativeClassPtr, "Curve");
		TravelToTarget.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelToTarget>.NativeClassPtr, "Target");
		TravelToTarget.NativeFieldInfoPtr_OffsetType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelToTarget>.NativeClassPtr, "OffsetType");
		TravelToTarget.NativeFieldInfoPtr_WithCollisionOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelToTarget>.NativeClassPtr, "WithCollisionOffset");
		TravelToTarget.NativeFieldInfoPtr_YOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelToTarget>.NativeClassPtr, "YOffset");
		TravelToTarget.NativeFieldInfoPtr_TravelSpeedBasedOnDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelToTarget>.NativeClassPtr, "TravelSpeedBasedOnDistance");
		TravelToTarget.NativeFieldInfoPtr_MinimumDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelToTarget>.NativeClassPtr, "MinimumDuration");
		TravelToTarget.NativeFieldInfoPtr_BuffLifetime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelToTarget>.NativeClassPtr, "BuffLifetime");
		TravelToTarget.NativeFieldInfoPtr_FetchLocationFirstFrame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelToTarget>.NativeClassPtr, "FetchLocationFirstFrame");
		TravelToTarget.NativeFieldInfoPtr_UseVisualOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelToTarget>.NativeClassPtr, "UseVisualOffset");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TravelToTarget>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StartRotation;
	private static readonly IntPtr NativeFieldInfoPtr_TargetRotation;
	private static readonly IntPtr NativeFieldInfoPtr_StartPosition;
	private static readonly IntPtr NativeFieldInfoPtr_EndPositionTarget;
	private static readonly IntPtr NativeFieldInfoPtr_Offset;
	private static readonly IntPtr NativeFieldInfoPtr_TargetStartPosition;
	private static readonly IntPtr NativeFieldInfoPtr_Curve;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_OffsetType;
	private static readonly IntPtr NativeFieldInfoPtr_WithCollisionOffset;
	private static readonly IntPtr NativeFieldInfoPtr_YOffset;
	private static readonly IntPtr NativeFieldInfoPtr_TravelSpeedBasedOnDistance;
	private static readonly IntPtr NativeFieldInfoPtr_MinimumDuration;
	private static readonly IntPtr NativeFieldInfoPtr_BuffLifetime;
	private static readonly IntPtr NativeFieldInfoPtr_FetchLocationFirstFrame;
	private static readonly IntPtr NativeFieldInfoPtr_UseVisualOffset;

	public quaternion StartRotation;

	public quaternion TargetRotation;

	public Nullable_Unboxed<float3> StartPosition;

	public float3 EndPositionTarget;

	public float3 Offset;

	public float3 TargetStartPosition;

	public CurveReference Curve;

	public NetworkedEntity Target;

	public TravelToTargetOffsetType OffsetType;

	public float3 WithCollisionOffset;

	public float YOffset;

	public float TravelSpeedBasedOnDistance;

	public float MinimumDuration;

	public float BuffLifetime;

	public bool FetchLocationFirstFrame;

	public bool UseVisualOffset;
}
```

## Server Systems

- [TravelToTargetSpawnSystem](/systems/server/TravelToTargetSpawnSystem)
- [TravelToTargetSystem](/systems/server/TravelToTargetSystem)

## Client Systems

- [TravelToTargetSystem](/systems/client/TravelToTargetSystem)
