# RotateOverTimeData

```csharp
[StructLayout(2)]
public struct RotateOverTimeData
{
	static RotateOverTimeData()
	{
		Il2CppClassPointerStore<RotateOverTimeData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "RotateOverTimeData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RotateOverTimeData>.NativeClassPtr);
		RotateOverTimeData.NativeFieldInfoPtr_InitialRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateOverTimeData>.NativeClassPtr, "InitialRotation");
		RotateOverTimeData.NativeFieldInfoPtr_RotationAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateOverTimeData>.NativeClassPtr, "RotationAngle");
		RotateOverTimeData.NativeFieldInfoPtr_CustomDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateOverTimeData>.NativeClassPtr, "CustomDuration");
		RotateOverTimeData.NativeFieldInfoPtr_RotationTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateOverTimeData>.NativeClassPtr, "RotationTarget");
		RotateOverTimeData.NativeFieldInfoPtr_RotationType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateOverTimeData>.NativeClassPtr, "RotationType");
		RotateOverTimeData.NativeFieldInfoPtr_RotationCurve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateOverTimeData>.NativeClassPtr, "RotationCurve");
		RotateOverTimeData.NativeFieldInfoPtr_RotationOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateOverTimeData>.NativeClassPtr, "RotationOffset");
		RotateOverTimeData.NativeFieldInfoPtr_UseCustomDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateOverTimeData>.NativeClassPtr, "UseCustomDuration");
		RotateOverTimeData.NativeFieldInfoPtr_LoopAfterDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateOverTimeData>.NativeClassPtr, "LoopAfterDuration");
		RotateOverTimeData.NativeFieldInfoPtr_ServerOnly = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateOverTimeData>.NativeClassPtr, "ServerOnly");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RotateOverTimeData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_InitialRotation;
	private static readonly IntPtr NativeFieldInfoPtr_RotationAngle;
	private static readonly IntPtr NativeFieldInfoPtr_CustomDuration;
	private static readonly IntPtr NativeFieldInfoPtr_RotationTarget;
	private static readonly IntPtr NativeFieldInfoPtr_RotationType;
	private static readonly IntPtr NativeFieldInfoPtr_RotationCurve;
	private static readonly IntPtr NativeFieldInfoPtr_RotationOffset;
	private static readonly IntPtr NativeFieldInfoPtr_UseCustomDuration;
	private static readonly IntPtr NativeFieldInfoPtr_LoopAfterDuration;
	private static readonly IntPtr NativeFieldInfoPtr_ServerOnly;
	[FieldOffset(0)]
	public quaternion InitialRotation;
	[FieldOffset(16)]
	public float RotationAngle;
	[FieldOffset(20)]
	public float CustomDuration;
	[FieldOffset(24)]
	public RotationTarget RotationTarget;
	[FieldOffset(28)]
	public RotationType RotationType;
	[FieldOffset(32)]
	public CurveReference RotationCurve;
	[FieldOffset(40)]
	public float RotationOffset;
	[FieldOffset(44)]
	[MarshalAs(4)]
	public bool UseCustomDuration;
	[FieldOffset(45)]
	[MarshalAs(4)]
	public bool LoopAfterDuration;
	[FieldOffset(46)]
	[MarshalAs(4)]
	public bool ServerOnly;
}
