---
nav_exclude: true
search_exclude: true
---

# Dash

```csharp
public struct Dash
{
	static Dash()
	{
		Il2CppClassPointerStore<Dash>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Dash");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Dash>.NativeClassPtr);
		Dash.NativeFieldInfoPtr_StartRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Dash>.NativeClassPtr, "StartRotation");
		Dash.NativeFieldInfoPtr_StartPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Dash>.NativeClassPtr, "StartPosition");
		Dash.NativeFieldInfoPtr_Range = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Dash>.NativeClassPtr, "Range");
		Dash.NativeFieldInfoPtr_Speed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Dash>.NativeClassPtr, "Speed");
		Dash.NativeFieldInfoPtr_Curve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Dash>.NativeClassPtr, "Curve");
		Dash.NativeFieldInfoPtr_RotationMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Dash>.NativeClassPtr, "RotationMode");
		Dash.NativeFieldInfoPtr_TileCollisionHitCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Dash>.NativeClassPtr, "TileCollisionHitCount");
		Dash.NativeFieldInfoPtr_CurveId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Dash>.NativeClassPtr, "CurveId");
		Dash.NativeFieldInfoPtr_StopOnMapCollision = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Dash>.NativeClassPtr, "StopOnMapCollision");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Dash>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StartRotation;
	private static readonly IntPtr NativeFieldInfoPtr_StartPosition;
	private static readonly IntPtr NativeFieldInfoPtr_Range;
	private static readonly IntPtr NativeFieldInfoPtr_Speed;
	private static readonly IntPtr NativeFieldInfoPtr_Curve;
	private static readonly IntPtr NativeFieldInfoPtr_RotationMode;
	private static readonly IntPtr NativeFieldInfoPtr_TileCollisionHitCount;
	private static readonly IntPtr NativeFieldInfoPtr_CurveId;
	private static readonly IntPtr NativeFieldInfoPtr_StopOnMapCollision;

	public quaternion StartRotation;

	public float3 StartPosition;

	public float Range;

	public float Speed;

	public CurveReference Curve;

	public MovementCurveRotationMode RotationMode;

	public int TileCollisionHitCount;

	public int CurveId;

	public bool StopOnMapCollision;
}
```

## Server Systems

- [ProjectM.Gameplay.DashStopOnMapCollisionSystem](/systems/ProjectM.Gameplay.DashStopOnMapCollisionSystem)
- [ProjectM.Gameplay.Spawn_DashSystem](/systems/ProjectM.Gameplay.Spawn_DashSystem)
