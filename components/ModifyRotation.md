# ModifyRotation

```csharp
[Serializable]
[StructLayout(2)]
public struct ModifyRotation
{
	static ModifyRotation()
	{
		Il2CppClassPointerStore<ModifyRotation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "ModifyRotation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyRotation>.NativeClassPtr);
		ModifyRotation.NativeFieldInfoPtr_PreviousTargetDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyRotation>.NativeClassPtr, "PreviousTargetDirection");
		ModifyRotation.NativeFieldInfoPtr_OffsetRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyRotation>.NativeClassPtr, "OffsetRotation");
		ModifyRotation.NativeFieldInfoPtr_ActiveTimeline = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyRotation>.NativeClassPtr, "ActiveTimeline");
		ModifyRotation.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyRotation>.NativeClassPtr, "Value");
		ModifyRotation.NativeFieldInfoPtr_Curve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyRotation>.NativeClassPtr, "Curve");
		ModifyRotation.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyRotation>.NativeClassPtr, "Type");
		ModifyRotation.NativeFieldInfoPtr_TargetDirectionType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyRotation>.NativeClassPtr, "TargetDirectionType");
		ModifyRotation.NativeFieldInfoPtr_UseZeroAsDefaultForCurveRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyRotation>.NativeClassPtr, "UseZeroAsDefaultForCurveRotation");
		ModifyRotation.NativeFieldInfoPtr_SnapToDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyRotation>.NativeClassPtr, "SnapToDirection");
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyRotation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PreviousTargetDirection;
	private static readonly IntPtr NativeFieldInfoPtr_OffsetRotation;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveTimeline;
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_Curve;
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_TargetDirectionType;
	private static readonly IntPtr NativeFieldInfoPtr_UseZeroAsDefaultForCurveRotation;
	private static readonly IntPtr NativeFieldInfoPtr_SnapToDirection;
	[FieldOffset(0)]
	public Nullable_Unboxed<Vector3> PreviousTargetDirection;
	[FieldOffset(16)]
	public Nullable_Unboxed<Vector3> OffsetRotation;
	[FieldOffset(32)]
	public MinMaxValue ActiveTimeline;
	[FieldOffset(40)]
	public float Value;
	[FieldOffset(44)]
	public CurveReference Curve;
	[FieldOffset(52)]
	public RotationModificationType Type;
	[FieldOffset(56)]
	public TargetDirectionType TargetDirectionType;
	[FieldOffset(60)]
	[MarshalAs(4)]
	public bool UseZeroAsDefaultForCurveRotation;
	[FieldOffset(61)]
	[MarshalAs(4)]
	public bool SnapToDirection;
}
