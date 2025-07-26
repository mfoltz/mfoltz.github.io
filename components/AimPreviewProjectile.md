# AimPreviewProjectile

```csharp
[StructLayout(2)]
public struct AimPreviewProjectile
{
	static AimPreviewProjectile()
	{
		Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AimPreviewProjectile");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr);
		AimPreviewProjectile.NativeFieldInfoPtr_LineSequenceGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr, "LineSequenceGUID");
		AimPreviewProjectile.NativeFieldInfoPtr_LineSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr, "LineSequenceState");
		AimPreviewProjectile.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr, "Position");
		AimPreviewProjectile.NativeFieldInfoPtr_TargetPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr, "TargetPosition");
		AimPreviewProjectile.NativeFieldInfoPtr_FirstControlOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr, "FirstControlOffset");
		AimPreviewProjectile.NativeFieldInfoPtr_SecondControlOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr, "SecondControlOffset");
		AimPreviewProjectile.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr, "Radius");
		AimPreviewProjectile.NativeFieldInfoPtr_IsOnCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr, "IsOnCooldown");
		AimPreviewProjectile.NativeFieldInfoPtr_HasData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr, "HasData");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LineSequenceGUID;
	private static readonly IntPtr NativeFieldInfoPtr_LineSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_TargetPosition;
	private static readonly IntPtr NativeFieldInfoPtr_FirstControlOffset;
	private static readonly IntPtr NativeFieldInfoPtr_SecondControlOffset;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_IsOnCooldown;
	private static readonly IntPtr NativeFieldInfoPtr_HasData;
	[FieldOffset(0)]
	public SequenceGUID LineSequenceGUID;
	[FieldOffset(4)]
	public SequenceState LineSequenceState;
	[FieldOffset(12)]
	public float3 Position;
	[FieldOffset(24)]
	public float3 TargetPosition;
	[FieldOffset(36)]
	public float2 FirstControlOffset;
	[FieldOffset(44)]
	public float2 SecondControlOffset;
	[FieldOffset(52)]
	public float Radius;
	[FieldOffset(56)]
	[MarshalAs(4)]
	public bool IsOnCooldown;
	[FieldOffset(57)]
	[MarshalAs(4)]
	public bool HasData;
}
