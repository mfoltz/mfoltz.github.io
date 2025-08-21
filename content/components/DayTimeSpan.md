---
nav_exclude: true
search_exclude: true
---

```csharp
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

	public unsafe static DayTimeSpan Default()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayTimeSpan.NativeMethodInfoPtr_Default_Public_Static_DayTimeSpan_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static DayTimeSpanBlob GetDayNightSpanBlob(DayTimeSpan dts)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref dts;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayTimeSpan.NativeMethodInfoPtr_GetDayNightSpanBlob_Public_Static_DayTimeSpanBlob_DayTimeSpan_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static void MergeTimes(NativeList<DayTimeSpan.MinMaxValue> mergedTimeSpans)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref mergedTimeSpans;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayTimeSpan.NativeMethodInfoPtr_MergeTimes_Private_Static_Void_NativeList_1_MinMaxValue_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

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

	public TimeSpanWeekDayFlag Days;

	public byte StartMonth;

	public byte EndMonth;

	public byte StartHour;

	public byte StartMinute;

	public byte EndHour;

	public byte EndMinute;

	public bool HasValue;

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

		public int MinMinutes;

		public int MaxMinutes;
	}
}
```
