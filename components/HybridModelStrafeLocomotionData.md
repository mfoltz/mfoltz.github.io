---
nav_exclude: true
search_exclude: false
---

# HybridModelStrafeLocomotionData

```csharp
public struct HybridModelStrafeLocomotionData
{
	static HybridModelStrafeLocomotionData()
	{
		Il2CppClassPointerStore<HybridModelStrafeLocomotionData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Hybrid", "HybridModelStrafeLocomotionData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridModelStrafeLocomotionData>.NativeClassPtr);
		HybridModelStrafeLocomotionData.NativeFieldInfoPtr_LastValidNormalizedVelocity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelStrafeLocomotionData>.NativeClassPtr, "LastValidNormalizedVelocity");
		HybridModelStrafeLocomotionData.NativeFieldInfoPtr_SmoothInput = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelStrafeLocomotionData>.NativeClassPtr, "SmoothInput");
		HybridModelStrafeLocomotionData.NativeFieldInfoPtr_SlowSmoothInput = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelStrafeLocomotionData>.NativeClassPtr, "SlowSmoothInput");
		HybridModelStrafeLocomotionData.NativeFieldInfoPtr_NoZeroInstantInput = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelStrafeLocomotionData>.NativeClassPtr, "NoZeroInstantInput");
		HybridModelStrafeLocomotionData.NativeFieldInfoPtr_Angle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelStrafeLocomotionData>.NativeClassPtr, "Angle");
		HybridModelStrafeLocomotionData.NativeFieldInfoPtr_MovementKeyPressed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelStrafeLocomotionData>.NativeClassPtr, "MovementKeyPressed");
		HybridModelStrafeLocomotionData.NativeFieldInfoPtr_Turn180 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelStrafeLocomotionData>.NativeClassPtr, "Turn180");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridModelStrafeLocomotionData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastValidNormalizedVelocity;
	private static readonly IntPtr NativeFieldInfoPtr_SmoothInput;
	private static readonly IntPtr NativeFieldInfoPtr_SlowSmoothInput;
	private static readonly IntPtr NativeFieldInfoPtr_NoZeroInstantInput;
	private static readonly IntPtr NativeFieldInfoPtr_Angle;
	private static readonly IntPtr NativeFieldInfoPtr_MovementKeyPressed;
	private static readonly IntPtr NativeFieldInfoPtr_Turn180;

	public float3 LastValidNormalizedVelocity;

	public float2 SmoothInput;

	public float2 SlowSmoothInput;

	public float2 NoZeroInstantInput;

	public float Angle;

	public bool MovementKeyPressed;

	public bool Turn180;
}
```

## Client Systems

- [SetHybridModelLocomotionStrafeSystem](/systems/client/SetHybridModelLocomotionStrafeSystem)
