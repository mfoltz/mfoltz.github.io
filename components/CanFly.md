---
nav_exclude: true
search_exclude: true
---

# CanFly

```csharp
public struct CanFly
{
	static CanFly()
	{
		Il2CppClassPointerStore<CanFly>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CanFly");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CanFly>.NativeClassPtr);
		CanFly.NativeFieldInfoPtr_FlyingHeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CanFly>.NativeClassPtr, "FlyingHeight");
		CanFly.NativeFieldInfoPtr_HeightAboveObstacle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CanFly>.NativeClassPtr, "HeightAboveObstacle");
		CanFly.NativeFieldInfoPtr_ProximitySpeedModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CanFly>.NativeClassPtr, "ProximitySpeedModifier");
		CanFly.NativeFieldInfoPtr_LastValidPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CanFly>.NativeClassPtr, "LastValidPosition");
		CanFly.NativeFieldInfoPtr_LastTargetHeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CanFly>.NativeClassPtr, "LastTargetHeight");
		CanFly.NativeFieldInfoPtr_VerticalSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CanFly>.NativeClassPtr, "VerticalSpeed");
		CanFly.NativeFieldInfoPtr_VerticalAcceleration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CanFly>.NativeClassPtr, "VerticalAcceleration");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CanFly>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FlyingHeight;
	private static readonly IntPtr NativeFieldInfoPtr_HeightAboveObstacle;
	private static readonly IntPtr NativeFieldInfoPtr_ProximitySpeedModifier;
	private static readonly IntPtr NativeFieldInfoPtr_LastValidPosition;
	private static readonly IntPtr NativeFieldInfoPtr_LastTargetHeight;
	private static readonly IntPtr NativeFieldInfoPtr_VerticalSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_VerticalAcceleration;

	public ModifiableFloat FlyingHeight;

	public ModifiableFloat HeightAboveObstacle;

	public CurveReference ProximitySpeedModifier;

	public float3 LastValidPosition;

	public float LastTargetHeight;

	public float VerticalSpeed;

	public float VerticalAcceleration;
}
```

## Server Systems

- [ProjectM.FlyLastValidPositionSystem](/systems/ProjectM.FlyLastValidPositionSystem)
- [ProjectM.HeightCorrectionSystem](/systems/ProjectM.HeightCorrectionSystem)
