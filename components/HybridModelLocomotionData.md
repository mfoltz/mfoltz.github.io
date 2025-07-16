# HybridModelLocomotionData

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public Vector3 Position;
	[FieldOffset(12)]
	public Vector3 AimDirection;
	[FieldOffset(24)]
	public float Velocity;
	[FieldOffset(28)]
	public float MoveVelocity;
	[FieldOffset(32)]
	public float AdditiveTurn;
	[FieldOffset(36)]
	public float AdditiveTurnSmoothing;
	[FieldOffset(40)]
	public float LocalScaleZ;
	[FieldOffset(44)]
	[MarshalAs(4)]
	public bool AdditiveTurnSupport;
	[FieldOffset(45)]
	[MarshalAs(4)]
	public bool IsInCombat;
	[FieldOffset(46)]
	[MarshalAs(4)]
	public bool MountSyncSupport;
}
