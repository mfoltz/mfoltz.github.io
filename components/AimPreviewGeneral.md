# AimPreviewGeneral

```csharp
[StructLayout(2)]
public struct AimPreviewGeneral
{
	static AimPreviewGeneral()
	{
		Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AimPreviewGeneral");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr);
		AimPreviewGeneral.NativeFieldInfoPtr_SequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr, "SequenceGuid");
		AimPreviewGeneral.NativeFieldInfoPtr_SequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr, "SequenceState");
		AimPreviewGeneral.NativeFieldInfoPtr_OverrideRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr, "OverrideRadius");
		AimPreviewGeneral.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr, "Radius");
		AimPreviewGeneral.NativeFieldInfoPtr_OverrideLength = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr, "OverrideLength");
		AimPreviewGeneral.NativeFieldInfoPtr_Length = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr, "Length");
		AimPreviewGeneral.NativeFieldInfoPtr_OverrideConeAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr, "OverrideConeAngle");
		AimPreviewGeneral.NativeFieldInfoPtr_ConeAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr, "ConeAngle");
		AimPreviewGeneral.NativeFieldInfoPtr_OverrideQuadSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr, "OverrideQuadSize");
		AimPreviewGeneral.NativeFieldInfoPtr_QuadSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr, "QuadSize");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_SequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideRadius;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideLength;
	private static readonly IntPtr NativeFieldInfoPtr_Length;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideConeAngle;
	private static readonly IntPtr NativeFieldInfoPtr_ConeAngle;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideQuadSize;
	private static readonly IntPtr NativeFieldInfoPtr_QuadSize;
	[FieldOffset(0)]
	public SequenceGUID SequenceGuid;
	[FieldOffset(4)]
	public SequenceState SequenceState;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool OverrideRadius;
	[FieldOffset(16)]
	public float Radius;
	[FieldOffset(20)]
	[MarshalAs(4)]
	public bool OverrideLength;
	[FieldOffset(24)]
	public float Length;
	[FieldOffset(28)]
	[MarshalAs(4)]
	public bool OverrideConeAngle;
	[FieldOffset(32)]
	public float ConeAngle;
	[FieldOffset(36)]
	[MarshalAs(4)]
	public bool OverrideQuadSize;
	[FieldOffset(40)]
	public float2 QuadSize;
}
