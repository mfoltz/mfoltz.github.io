---
nav_exclude: true
search_exclude: true
---

# HybridModelLocomotionData

```csharp
public struct HybridModelLocomotionData
{
	static HybridModelLocomotionData()
	{
		Il2CppClassPointerStore<HybridModelLocomotionData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Hybrid", "HybridModelLocomotionData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridModelLocomotionData>.NativeClassPtr);
		HybridModelLocomotionData.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelLocomotionData>.NativeClassPtr, "Position");
		HybridModelLocomotionData.NativeFieldInfoPtr_AimDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelLocomotionData>.NativeClassPtr, "AimDirection");
		HybridModelLocomotionData.NativeFieldInfoPtr_Velocity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelLocomotionData>.NativeClassPtr, "Velocity");
		HybridModelLocomotionData.NativeFieldInfoPtr_MoveVelocity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelLocomotionData>.NativeClassPtr, "MoveVelocity");
		HybridModelLocomotionData.NativeFieldInfoPtr_AdditiveTurn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelLocomotionData>.NativeClassPtr, "AdditiveTurn");
		HybridModelLocomotionData.NativeFieldInfoPtr_AdditiveTurnSmoothing = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelLocomotionData>.NativeClassPtr, "AdditiveTurnSmoothing");
		HybridModelLocomotionData.NativeFieldInfoPtr_LocalScaleZ = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelLocomotionData>.NativeClassPtr, "LocalScaleZ");
		HybridModelLocomotionData.NativeFieldInfoPtr_AdditiveTurnSupport = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelLocomotionData>.NativeClassPtr, "AdditiveTurnSupport");
		HybridModelLocomotionData.NativeFieldInfoPtr_IsInCombat = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelLocomotionData>.NativeClassPtr, "IsInCombat");
		HybridModelLocomotionData.NativeFieldInfoPtr_MountSyncSupport = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelLocomotionData>.NativeClassPtr, "MountSyncSupport");
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridModelLocomotionData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_AimDirection;
	private static readonly IntPtr NativeFieldInfoPtr_Velocity;
	private static readonly IntPtr NativeFieldInfoPtr_MoveVelocity;
	private static readonly IntPtr NativeFieldInfoPtr_AdditiveTurn;
	private static readonly IntPtr NativeFieldInfoPtr_AdditiveTurnSmoothing;
	private static readonly IntPtr NativeFieldInfoPtr_LocalScaleZ;
	private static readonly IntPtr NativeFieldInfoPtr_AdditiveTurnSupport;
	private static readonly IntPtr NativeFieldInfoPtr_IsInCombat;
	private static readonly IntPtr NativeFieldInfoPtr_MountSyncSupport;

	public Vector3 Position;

	public Vector3 AimDirection;

	public float Velocity;

	public float MoveVelocity;

	public float AdditiveTurn;

	public float AdditiveTurnSmoothing;

	public float LocalScaleZ;

	public bool AdditiveTurnSupport;

	public bool IsInCombat;

	public bool MountSyncSupport;
}
```
