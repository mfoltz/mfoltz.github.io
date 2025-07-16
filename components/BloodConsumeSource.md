# BloodConsumeSource

```csharp
[StructLayout(2)]
public struct BloodConsumeSource
{
	static BloodConsumeSource()
	{
		Il2CppClassPointerStore<BloodConsumeSource>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BloodConsumeSource");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodConsumeSource>.NativeClassPtr);
		BloodConsumeSource.NativeFieldInfoPtr_ConstantData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodConsumeSource>.NativeClassPtr, "ConstantData");
		BloodConsumeSource.NativeFieldInfoPtr_BloodQuality = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodConsumeSource>.NativeClassPtr, "BloodQuality");
		BloodConsumeSource.NativeFieldInfoPtr_UnitBloodType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodConsumeSource>.NativeClassPtr, "UnitBloodType");
		BloodConsumeSource.NativeFieldInfoPtr_OverrideBloodCurve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodConsumeSource>.NativeClassPtr, "OverrideBloodCurve");
		BloodConsumeSource.NativeFieldInfoPtr_ForceBadBloodQuality = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodConsumeSource>.NativeClassPtr, "ForceBadBloodQuality");
		BloodConsumeSource.NativeFieldInfoPtr_BloodQualityBuffRequirement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodConsumeSource>.NativeClassPtr, "BloodQualityBuffRequirement");
		BloodConsumeSource.NativeFieldInfoPtr_CanBeConsumed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodConsumeSource>.NativeClassPtr, "CanBeConsumed");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodConsumeSource>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ConstantData;
	private static readonly IntPtr NativeFieldInfoPtr_BloodQuality;
	private static readonly IntPtr NativeFieldInfoPtr_UnitBloodType;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideBloodCurve;
	private static readonly IntPtr NativeFieldInfoPtr_ForceBadBloodQuality;
	private static readonly IntPtr NativeFieldInfoPtr_BloodQualityBuffRequirement;
	private static readonly IntPtr NativeFieldInfoPtr_CanBeConsumed;
	[FieldOffset(0)]
	public BlobAssetReference<BloodConsumeSourceBlob> ConstantData;
	[FieldOffset(8)]
	public float BloodQuality;
	[FieldOffset(12)]
	public ModifiablePrefabGUID UnitBloodType;
	[FieldOffset(16)]
	public CurveReference OverrideBloodCurve;
	[FieldOffset(24)]
	[MarshalAs(4)]
	public bool ForceBadBloodQuality;
	[FieldOffset(28)]
	public int BloodQualityBuffRequirement;
	[FieldOffset(32)]
	[MarshalAs(4)]
	public bool CanBeConsumed;
}
