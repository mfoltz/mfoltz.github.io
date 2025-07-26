# LightningLight

```csharp
[StructLayout(2)]
public struct LightningLight
{
	static LightningLight()
	{
		Il2CppClassPointerStore<LightningLight>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.LightningStorm", "LightningLight");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LightningLight>.NativeClassPtr);
		LightningLight.NativeFieldInfoPtr_Duration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningLight>.NativeClassPtr, "Duration");
		LightningLight.NativeFieldInfoPtr_Angle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningLight>.NativeClassPtr, "Angle");
		LightningLight.NativeFieldInfoPtr_IntensityCurve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningLight>.NativeClassPtr, "IntensityCurve");
		LightningLight.NativeFieldInfoPtr_IntensityMin = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningLight>.NativeClassPtr, "IntensityMin");
		LightningLight.NativeFieldInfoPtr_IntensityMax = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningLight>.NativeClassPtr, "IntensityMax");
		LightningLight.NativeMethodInfoPtr_GetIntensity_Public_Single_Single_byref_CurveCollection_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LightningLight>.NativeClassPtr, 100680442);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 240002, XrefRangeEnd = 240003, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe float GetIntensity(float t, [In] ref CurveCollection curveCollection)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref t;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &curveCollection;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LightningLight.NativeMethodInfoPtr_GetIntensity_Public_Single_Single_byref_CurveCollection_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LightningLight>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Duration;
	private static readonly IntPtr NativeFieldInfoPtr_Angle;
	private static readonly IntPtr NativeFieldInfoPtr_IntensityCurve;
	private static readonly IntPtr NativeFieldInfoPtr_IntensityMin;
	private static readonly IntPtr NativeFieldInfoPtr_IntensityMax;
	private static readonly IntPtr NativeMethodInfoPtr_GetIntensity_Public_Single_Single_byref_CurveCollection_0;
	[FieldOffset(0)]
	public float Duration;
	[FieldOffset(4)]
	public float Angle;
	[FieldOffset(8)]
	public CurveReference IntensityCurve;
	[FieldOffset(16)]
	public float IntensityMin;
	[FieldOffset(20)]
	public float IntensityMax;
}
