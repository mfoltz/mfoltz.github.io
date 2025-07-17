---
nav_exclude: true
search_exclude: true
---

# RotateTowardsAimDirectionDuringCastData

```csharp
[StructLayout(2)]
public struct RotateTowardsAimDirectionDuringCastData
{
	static RotateTowardsAimDirectionDuringCastData()
	{
		Il2CppClassPointerStore<RotateTowardsAimDirectionDuringCastData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RotateTowardsAimDirectionDuringCastData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RotateTowardsAimDirectionDuringCastData>.NativeClassPtr);
		RotateTowardsAimDirectionDuringCastData.NativeFieldInfoPtr_RotationAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateTowardsAimDirectionDuringCastData>.NativeClassPtr, "RotationAngle");
		RotateTowardsAimDirectionDuringCastData.NativeFieldInfoPtr_MinDegrees = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateTowardsAimDirectionDuringCastData>.NativeClassPtr, "MinDegrees");
		RotateTowardsAimDirectionDuringCastData.NativeFieldInfoPtr_MaxDegrees = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateTowardsAimDirectionDuringCastData>.NativeClassPtr, "MaxDegrees");
		RotateTowardsAimDirectionDuringCastData.NativeFieldInfoPtr_ManualDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateTowardsAimDirectionDuringCastData>.NativeClassPtr, "ManualDuration");
		RotateTowardsAimDirectionDuringCastData.NativeFieldInfoPtr_Curve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateTowardsAimDirectionDuringCastData>.NativeClassPtr, "Curve");
		RotateTowardsAimDirectionDuringCastData.NativeFieldInfoPtr_Clockwise = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateTowardsAimDirectionDuringCastData>.NativeClassPtr, "Clockwise");
		RotateTowardsAimDirectionDuringCastData.NativeFieldInfoPtr_UseManualDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateTowardsAimDirectionDuringCastData>.NativeClassPtr, "UseManualDuration");
		RotateTowardsAimDirectionDuringCastData.NativeFieldInfoPtr_ExcludePostCastDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateTowardsAimDirectionDuringCastData>.NativeClassPtr, "ExcludePostCastDuration");
		RotateTowardsAimDirectionDuringCastData.NativeFieldInfoPtr_TargetRotationCanChangeDuringCast = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateTowardsAimDirectionDuringCastData>.NativeClassPtr, "TargetRotationCanChangeDuringCast");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RotateTowardsAimDirectionDuringCastData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RotationAngle;
	private static readonly IntPtr NativeFieldInfoPtr_MinDegrees;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDegrees;
	private static readonly IntPtr NativeFieldInfoPtr_ManualDuration;
	private static readonly IntPtr NativeFieldInfoPtr_Curve;
	private static readonly IntPtr NativeFieldInfoPtr_Clockwise;
	private static readonly IntPtr NativeFieldInfoPtr_UseManualDuration;
	private static readonly IntPtr NativeFieldInfoPtr_ExcludePostCastDuration;
	private static readonly IntPtr NativeFieldInfoPtr_TargetRotationCanChangeDuringCast;
	[FieldOffset(0)]
	public float RotationAngle;
	[FieldOffset(4)]
	public float MinDegrees;
	[FieldOffset(8)]
	public float MaxDegrees;
	[FieldOffset(12)]
	public float ManualDuration;
	[FieldOffset(16)]
	public CurveReference Curve;
	[FieldOffset(24)]
	public RotateDirectionType Clockwise;
	[FieldOffset(28)]
	[MarshalAs(4)]
	public bool UseManualDuration;
	[FieldOffset(29)]
	[MarshalAs(4)]
	public bool ExcludePostCastDuration;
	[FieldOffset(30)]
	[MarshalAs(4)]
	public bool TargetRotationCanChangeDuringCast;
}
