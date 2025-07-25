---
nav_exclude: true
search_exclude: true
---

# RotateTowardsAimDirectionDuringCastData

```csharp
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

	public float RotationAngle;

	public float MinDegrees;

	public float MaxDegrees;

	public float ManualDuration;

	public CurveReference Curve;

	public RotateDirectionType Clockwise;

	public bool UseManualDuration;

	public bool ExcludePostCastDuration;

	public bool TargetRotationCanChangeDuringCast;
}
```
