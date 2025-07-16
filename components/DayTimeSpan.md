# DayTimeSpan

```csharp
[StructLayout(2)]
public struct DayTimeSpan
{
	static DayTimeSpan()
	{
		Il2CppClassPointerStore<DayTimeSpan>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DayTimeSpan");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DayTimeSpan>.NativeClassPtr);
		DayTimeSpan.NativeFieldInfoPtr_Days = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayTimeSpan>.NativeClassPtr, "Days");
		DayTimeSpan.NativeFieldInfoPtr_StartMonth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayTimeSpan>.NativeClassPtr, "StartMonth");
		DayTimeSpan.NativeFieldInfoPtr_EndMonth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayTimeSpan>.NativeClassPtr, "EndMonth");
		DayTimeSpan.NativeFieldInfoPtr_StartHour = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayTimeSpan>.NativeClassPtr, "StartHour");
		DayTimeSpan.NativeFieldInfoPtr_StartMinute = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayTimeSpan>.NativeClassPtr, "StartMinute");
		DayTimeSpan.NativeFieldInfoPtr_EndHour = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayTimeSpan>.NativeClassPtr, "EndHour");
		DayTimeSpan.NativeFieldInfoPtr_EndMinute = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayTimeSpan>.NativeClassPtr, "EndMinute");
		DayTimeSpan.NativeFieldInfoPtr_HasValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayTimeSpan>.NativeClassPtr, "HasValue");
		DayTimeSpan.NativeMethodInfoPtr_Default_Public_Static_DayTimeSpan_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayTimeSpan>.NativeClassPtr, 100666739);
		DayTimeSpan.NativeMethodInfoPtr_GetDayNightSpanBlob_Public_Static_DayTimeSpanBlob_DayTimeSpan_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayTimeSpan>.NativeClassPtr, 100666740);
		DayTimeSpan.NativeMethodInfoPtr_MergeTimes_Private_Static_Void_NativeList_1_MinMaxValue_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayTimeSpan>.NativeClassPtr, 100666741);
		DayTimeSpan.NativeMethodInfoPtr_SplitByWeekDays_Private_Static_NativeList_1_MinMaxValue_NativeList_1_MinMaxValue_TimeSpanWeekDayFlag_Int32_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayTimeSpan>.NativeClassPtr, 100666742);
		DayTimeSpan.NativeMethodInfoPtr_SplitByTime_Private_Static_NativeList_1_MinMaxValue_NativeList_1_MinMaxValue_Int32_Int32_Int32_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayTimeSpan>.NativeClassPtr, 100666743);
	}
	[CallerCount(0)]
	public unsafe static DayTimeSpan Default()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayTimeSpan.NativeMethodInfoPtr_Default_Public_Static_DayTimeSpan_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1088168, RefRangeEnd = 1088169, XrefRangeStart = 1088110, XrefRangeEnd = 1088168, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static DayTimeSpanBlob GetDayNightSpanBlob(DayTimeSpan dts)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref dts;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayTimeSpan.NativeMethodInfoPtr_GetDayNightSpanBlob_Public_Static_DayTimeSpanBlob_DayTimeSpan_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(3)]
	[CachedScanResults(RefRangeStart = 1088193, RefRangeEnd = 1088196, XrefRangeStart = 1088169, XrefRangeEnd = 1088193, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void MergeTimes(NativeList<DayTimeSpan.MinMaxValue> mergedTimeSpans)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref mergedTimeSpans;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayTimeSpan.NativeMethodInfoPtr_MergeTimes_Private_Static_Void_NativeList_1_MinMaxValue_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1088241, RefRangeEnd = 1088242, XrefRangeStart = 1088196, XrefRangeEnd = 1088241, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static NativeList<DayTimeSpan.MinMaxValue> SplitByWeekDays(NativeList<DayTimeSpan.MinMaxValue> timeSpans, TimeSpanWeekDayFlag weekDayFlag, int minutesPerDay, int minutesPerWeek)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref timeSpans;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref weekDayFlag;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref minutesPerDay;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref minutesPerWeek;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayTimeSpan.NativeMethodInfoPtr_SplitByWeekDays_Private_Static_NativeList_1_MinMaxValue_NativeList_1_MinMaxValue_TimeSpanWeekDayFlag_Int32_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1088290, RefRangeEnd = 1088292, XrefRangeStart = 1088242, XrefRangeEnd = 1088290, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static NativeList<DayTimeSpan.MinMaxValue> SplitByTime(NativeList<DayTimeSpan.MinMaxValue> timeSpans, int minuteValue, int start, int end, int max)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref timeSpans;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref minuteValue;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref start;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref end;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref max;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayTimeSpan.NativeMethodInfoPtr_SplitByTime_Private_Static_NativeList_1_MinMaxValue_NativeList_1_MinMaxValue_Int32_Int32_Int32_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DayTimeSpan>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Days;
	private static readonly IntPtr NativeFieldInfoPtr_StartMonth;
	private static readonly IntPtr NativeFieldInfoPtr_EndMonth;
	private static readonly IntPtr NativeFieldInfoPtr_StartHour;
	private static readonly IntPtr NativeFieldInfoPtr_StartMinute;
	private static readonly IntPtr NativeFieldInfoPtr_EndHour;
	private static readonly IntPtr NativeFieldInfoPtr_EndMinute;
	private static readonly IntPtr NativeFieldInfoPtr_HasValue;
	private static readonly IntPtr NativeMethodInfoPtr_Default_Public_Static_DayTimeSpan_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetDayNightSpanBlob_Public_Static_DayTimeSpanBlob_DayTimeSpan_0;
	private static readonly IntPtr NativeMethodInfoPtr_MergeTimes_Private_Static_Void_NativeList_1_MinMaxValue_0;
	private static readonly IntPtr NativeMethodInfoPtr_SplitByWeekDays_Private_Static_NativeList_1_MinMaxValue_NativeList_1_MinMaxValue_TimeSpanWeekDayFlag_Int32_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_SplitByTime_Private_Static_NativeList_1_MinMaxValue_NativeList_1_MinMaxValue_Int32_Int32_Int32_Int32_0;
	[FieldOffset(0)]
	public TimeSpanWeekDayFlag Days;
	[FieldOffset(4)]
	public byte StartMonth;
	[FieldOffset(5)]
	public byte EndMonth;
	[FieldOffset(6)]
	public byte StartHour;
	[FieldOffset(7)]
	public byte StartMinute;
	[FieldOffset(8)]
	public byte EndHour;
	[FieldOffset(9)]
	public byte EndMinute;
	[FieldOffset(10)]
	[MarshalAs(4)]
	public bool HasValue;
	[StructLayout(2)]
	public struct MinMaxValue
	{
		static MinMaxValue()
		{
			Il2CppClassPointerStore<DayTimeSpan.MinMaxValue>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<DayTimeSpan>.NativeClassPtr, "MinMaxValue");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DayTimeSpan.MinMaxValue>.NativeClassPtr);
			DayTimeSpan.MinMaxValue.NativeFieldInfoPtr_MinMinutes = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayTimeSpan.MinMaxValue>.NativeClassPtr, "MinMinutes");
			DayTimeSpan.MinMaxValue.NativeFieldInfoPtr_MaxMinutes = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayTimeSpan.MinMaxValue>.NativeClassPtr, "MaxMinutes");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DayTimeSpan.MinMaxValue>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_MinMinutes;
		private static readonly IntPtr NativeFieldInfoPtr_MaxMinutes;
		[FieldOffset(0)]
		public int MinMinutes;
		[FieldOffset(4)]
		public int MaxMinutes;
	}
}
