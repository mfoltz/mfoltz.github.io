# TargetDirection

```csharp
[StructLayout(2)]
public struct TargetDirection
{
	static TargetDirection()
	{
		Il2CppClassPointerStore<TargetDirection>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TargetDirection");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TargetDirection>.NativeClassPtr);
		TargetDirection.NativeFieldInfoPtr_ForcedDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetDirection>.NativeClassPtr, "ForcedDirection");
		TargetDirection.NativeFieldInfoPtr_Direction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetDirection>.NativeClassPtr, "Direction");
		TargetDirection.NativeFieldInfoPtr_AimDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetDirection>.NativeClassPtr, "AimDirection");
		TargetDirection.NativeFieldInfoPtr_DefaultRotationSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetDirection>.NativeClassPtr, "DefaultRotationSpeed");
		TargetDirection.NativeFieldInfoPtr_RotationSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetDirection>.NativeClassPtr, "RotationSpeed");
		TargetDirection.NativeFieldInfoPtr_RotateTowardsMouse = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetDirection>.NativeClassPtr, "RotateTowardsMouse");
		TargetDirection.NativeFieldInfoPtr_ForceRotateTowardsMovement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetDirection>.NativeClassPtr, "ForceRotateTowardsMovement");
		TargetDirection.NativeFieldInfoPtr_CurrentCanRotate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetDirection>.NativeClassPtr, "CurrentCanRotate");
		TargetDirection.NativeFieldInfoPtr_PlayerControlsRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetDirection>.NativeClassPtr, "PlayerControlsRotation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TargetDirection>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ForcedDirection;
	private static readonly IntPtr NativeFieldInfoPtr_Direction;
	private static readonly IntPtr NativeFieldInfoPtr_AimDirection;
	private static readonly IntPtr NativeFieldInfoPtr_DefaultRotationSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_RotationSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_RotateTowardsMouse;
	private static readonly IntPtr NativeFieldInfoPtr_ForceRotateTowardsMovement;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentCanRotate;
	private static readonly IntPtr NativeFieldInfoPtr_PlayerControlsRotation;
	[FieldOffset(0)]
	public ModifiableFloat3 ForcedDirection;
	[FieldOffset(12)]
	public float3 Direction;
	[FieldOffset(24)]
	public float3 AimDirection;
	[FieldOffset(36)]
	public float DefaultRotationSpeed;
	[FieldOffset(40)]
	public float RotationSpeed;
	[FieldOffset(44)]
	public ModifiableBool RotateTowardsMouse;
	[FieldOffset(45)]
	public ModifiableBool ForceRotateTowardsMovement;
	[FieldOffset(46)]
	[MarshalAs(4)]
	public bool CurrentCanRotate;
	[FieldOffset(47)]
	[MarshalAs(4)]
	public bool PlayerControlsRotation;
}
