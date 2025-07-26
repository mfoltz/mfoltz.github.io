# UnitUptimeSetting

```csharp
[StructLayout(2)]
public struct UnitUptimeSetting
{
	static UnitUptimeSetting()
	{
		Il2CppClassPointerStore<UnitUptimeSetting>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "UnitUptimeSetting");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnitUptimeSetting>.NativeClassPtr);
		UnitUptimeSetting.NativeFieldInfoPtr_ActiveTimeSpace = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitUptimeSetting>.NativeClassPtr, "ActiveTimeSpace");
		UnitUptimeSetting.NativeFieldInfoPtr_ActiveHoursDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitUptimeSetting>.NativeClassPtr, "ActiveHoursDuration");
		UnitUptimeSetting.NativeFieldInfoPtr_ActivePercentage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitUptimeSetting>.NativeClassPtr, "ActivePercentage");
		UnitUptimeSetting.NativeFieldInfoPtr_RespawnVariancePercentage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitUptimeSetting>.NativeClassPtr, "RespawnVariancePercentage");
		UnitUptimeSetting.NativeFieldInfoPtr_AllowedSpawnTimes = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitUptimeSetting>.NativeClassPtr, "AllowedSpawnTimes");
		UnitUptimeSetting.NativeFieldInfoPtr_SpawnTimeBlob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitUptimeSetting>.NativeClassPtr, "SpawnTimeBlob");
		UnitUptimeSetting.NativeMethodInfoPtr_GetActiveDurationInSeconds_Public_Single_DayNightCycle_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnitUptimeSetting>.NativeClassPtr, 100666865);
		UnitUptimeSetting.NativeMethodInfoPtr_GetRespawnDurationInSeconds_Public_Single_DayNightCycle_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnitUptimeSetting>.NativeClassPtr, 100666866);
		UnitUptimeSetting.NativeMethodInfoPtr_TryGetNextValidTime_Public_Boolean_DayNightCycle_Single_Boolean_byref_Double_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnitUptimeSetting>.NativeClassPtr, 100666867);
		UnitUptimeSetting.NativeMethodInfoPtr_StepForwardOneTimeSpan_Private_Int32_Int32_byref_BlobArray_1_MinMaxValue_byref_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnitUptimeSetting>.NativeClassPtr, 100666868);
		UnitUptimeSetting.NativeMethodInfoPtr_StepBackOneTimeSpan_Private_Int32_Int32_byref_BlobArray_1_MinMaxValue_byref_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnitUptimeSetting>.NativeClassPtr, 100666869);
	}
	[CallerCount(5)]
	[CachedScanResults(RefRangeStart = 1089372, RefRangeEnd = 1089377, XrefRangeStart = 1089371, XrefRangeEnd = 1089372, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe float GetActiveDurationInSeconds(DayNightCycle dayNightCycle)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref dayNightCycle;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnitUptimeSetting.NativeMethodInfoPtr_GetActiveDurationInSeconds_Public_Single_DayNightCycle_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1089377, XrefRangeEnd = 1089378, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe float GetRespawnDurationInSeconds(DayNightCycle dayNightCycle)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref dayNightCycle;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnitUptimeSetting.NativeMethodInfoPtr_GetRespawnDurationInSeconds_Public_Single_DayNightCycle_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1089411, RefRangeEnd = 1089413, XrefRangeStart = 1089378, XrefRangeEnd = 1089411, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryGetNextValidTime(DayNightCycle dayNightCycle, float s, bool findNextValidTime, out double time)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref dayNightCycle;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref s;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref findNextValidTime;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &time;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnitUptimeSetting.NativeMethodInfoPtr_TryGetNextValidTime_Public_Boolean_DayNightCycle_Single_Boolean_byref_Double_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1089413, XrefRangeEnd = 1089414, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe int StepForwardOneTimeSpan(int currentIndex, ref BlobArray<DayTimeSpan.MinMaxValue> timeSpans, out bool yearChanged)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref currentIndex;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &timeSpans;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &yearChanged;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnitUptimeSetting.NativeMethodInfoPtr_StepForwardOneTimeSpan_Private_Int32_Int32_byref_BlobArray_1_MinMaxValue_byref_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1089414, XrefRangeEnd = 1089415, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe int StepBackOneTimeSpan(int currentIndex, ref BlobArray<DayTimeSpan.MinMaxValue> timeSpans, out bool yearChanged)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref currentIndex;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &timeSpans;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &yearChanged;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnitUptimeSetting.NativeMethodInfoPtr_StepBackOneTimeSpan_Private_Int32_Int32_byref_BlobArray_1_MinMaxValue_byref_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnitUptimeSetting>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ActiveTimeSpace;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveHoursDuration;
	private static readonly IntPtr NativeFieldInfoPtr_ActivePercentage;
	private static readonly IntPtr NativeFieldInfoPtr_RespawnVariancePercentage;
	private static readonly IntPtr NativeFieldInfoPtr_AllowedSpawnTimes;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnTimeBlob;
	private static readonly IntPtr NativeMethodInfoPtr_GetActiveDurationInSeconds_Public_Single_DayNightCycle_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetRespawnDurationInSeconds_Public_Single_DayNightCycle_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetNextValidTime_Public_Boolean_DayNightCycle_Single_Boolean_byref_Double_0;
	private static readonly IntPtr NativeMethodInfoPtr_StepForwardOneTimeSpan_Private_Int32_Int32_byref_BlobArray_1_MinMaxValue_byref_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_StepBackOneTimeSpan_Private_Int32_Int32_byref_BlobArray_1_MinMaxValue_byref_Boolean_0;
	[FieldOffset(0)]
	public TimeSpace ActiveTimeSpace;
	[FieldOffset(4)]
	public float ActiveHoursDuration;
	[FieldOffset(8)]
	public float ActivePercentage;
	[FieldOffset(12)]
	public float RespawnVariancePercentage;
	[FieldOffset(16)]
	public DayTimeSpan AllowedSpawnTimes;
	[FieldOffset(32)]
	public DayTimeSpanBlob SpawnTimeBlob;
}
