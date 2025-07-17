---
nav_exclude: true
search_exclude: true
---

# DayNightCycle

```csharp
[StructLayout(2)]
public struct DayNightCycle
{
	static DayNightCycle()
	{
		Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DayNightCycle");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr);
		DayNightCycle.NativeFieldInfoPtr_Time = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "Time");
		DayNightCycle.NativeFieldInfoPtr_ServerTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "ServerTime");
		DayNightCycle.NativeFieldInfoPtr_DayNightCycleStartTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "DayNightCycleStartTime");
		DayNightCycle.NativeFieldInfoPtr_DayDurationInSeconds = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "DayDurationInSeconds");
		DayNightCycle.NativeFieldInfoPtr_Cloudiness = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "Cloudiness");
		DayNightCycle.NativeFieldInfoPtr_MorningMoodTransitionDurationBeforeSunrise = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "MorningMoodTransitionDurationBeforeSunrise");
		DayNightCycle.NativeFieldInfoPtr_MorningMoodTransitionDurationAfterSunrise = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "MorningMoodTransitionDurationAfterSunrise");
		DayNightCycle.NativeFieldInfoPtr_EveningMoodTransitionDurationBeforeSunset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "EveningMoodTransitionDurationBeforeSunset");
		DayNightCycle.NativeFieldInfoPtr_EveningMoodTransitionDurationAfterSunset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "EveningMoodTransitionDurationAfterSunset");
		DayNightCycle.NativeFieldInfoPtr_MorningShadowTransitionDurationBeforeSunrise = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "MorningShadowTransitionDurationBeforeSunrise");
		DayNightCycle.NativeFieldInfoPtr_MorningShadowTransitionDurationAfterSunrise = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "MorningShadowTransitionDurationAfterSunrise");
		DayNightCycle.NativeFieldInfoPtr_EveningShadowTransitionDurationBeforeSunset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "EveningShadowTransitionDurationBeforeSunset");
		DayNightCycle.NativeFieldInfoPtr_EveningShadowTransitionDurationAfterSunset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "EveningShadowTransitionDurationAfterSunset");
		DayNightCycle.NativeFieldInfoPtr_DurationBeforeSunDamageAfterSunrise = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "DurationBeforeSunDamageAfterSunrise");
		DayNightCycle.NativeFieldInfoPtr_DayTimeStartInSeconds = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "DayTimeStartInSeconds");
		DayNightCycle.NativeFieldInfoPtr_DayTimeDurationInSeconds = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "DayTimeDurationInSeconds");
		DayNightCycle.NativeFieldInfoPtr_NightTimeDurationInSeconds = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "NightTimeDurationInSeconds");
		DayNightCycle.NativeFieldInfoPtr_DayTimeSpan = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "DayTimeSpan");
		DayNightCycle.NativeFieldInfoPtr_BloodMoonBuffBonus = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "BloodMoonBuffBonus");
		DayNightCycle.NativeFieldInfoPtr_NextBloodMoonDay = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "NextBloodMoonDay");
		DayNightCycle.NativeFieldInfoPtr_BloodMoonFrequency_Min = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "BloodMoonFrequency_Min");
		DayNightCycle.NativeFieldInfoPtr_BloodMoonFrequency_Max = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "BloodMoonFrequency_Max");
		DayNightCycle.NativeFieldInfoPtr_CastlePvPEnabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "CastlePvPEnabled");
		DayNightCycle.NativeFieldInfoPtr_PlayerPvPEnabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "PlayerPvPEnabled");
		DayNightCycle.NativeFieldInfoPtr__TimeSpanTicksSinceStart_k__BackingField = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "<TimeSpanTicksSinceStart>k__BackingField");
		DayNightCycle.NativeFieldInfoPtr_AmbientBiome = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "AmbientBiome");
		DayNightCycle.NativeFieldInfoPtr_GameDateTimeNow = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, "GameDateTimeNow");
		DayNightCycle.NativeMethodInfoPtr_get_TimeSinceMidnight_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, 100664117);
		DayNightCycle.NativeMethodInfoPtr_get_TimeSinceDayStart_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, 100664118);
		DayNightCycle.NativeMethodInfoPtr_get_MorningMoodTransitionStart_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, 100664119);
		DayNightCycle.NativeMethodInfoPtr_get_MorningMoodTransitionEnd_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, 100664120);
		DayNightCycle.NativeMethodInfoPtr_get_MorningMoodTransitionDuration_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, 100664121);
		DayNightCycle.NativeMethodInfoPtr_get_MorningShadowTransitionStart_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, 100664122);
		DayNightCycle.NativeMethodInfoPtr_get_MorningShadowTransitionEnd_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, 100664123);
		DayNightCycle.NativeMethodInfoPtr_get_MorningShadowTransitionDuration_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, 100664124);
		DayNightCycle.NativeMethodInfoPtr_get_EveningMoodTransitionStart_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, 100664125);
		DayNightCycle.NativeMethodInfoPtr_get_EveningMoodTransitionEnd_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, 100664126);
		DayNightCycle.NativeMethodInfoPtr_get_EveningMoodTransitionDuration_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, 100664127);
		DayNightCycle.NativeMethodInfoPtr_get_EveningShadowTransitionStart_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, 100664128);
		DayNightCycle.NativeMethodInfoPtr_get_EveningShadowTransitionEnd_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, 100664129);
		DayNightCycle.NativeMethodInfoPtr_get_EveningShadowTransitionDuration_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, 100664130);
		DayNightCycle.NativeMethodInfoPtr_get_TimeOfDay_Public_get_TimeOfDay_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, 100664131);
		DayNightCycle.NativeMethodInfoPtr_CalculateNextBloodMoonDay_Public_Void_Random_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, 100664132);
		DayNightCycle.NativeMethodInfoPtr_IsBloodMoonDay_Public_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, 100664133);
		DayNightCycle.NativeMethodInfoPtr_get_TimeSpanTicksSinceStart_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, 100664134);
		DayNightCycle.NativeMethodInfoPtr_set_TimeSpanTicksSinceStart_Private_set_Void_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, 100664135);
	}
	public unsafe float TimeSinceMidnight
	{
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1056640, XrefRangeEnd = 1056641, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayNightCycle.NativeMethodInfoPtr_get_TimeSinceMidnight_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe float TimeSinceDayStart
	{
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1056641, XrefRangeEnd = 1056642, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayNightCycle.NativeMethodInfoPtr_get_TimeSinceDayStart_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe float MorningMoodTransitionStart
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayNightCycle.NativeMethodInfoPtr_get_MorningMoodTransitionStart_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe float MorningMoodTransitionEnd
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayNightCycle.NativeMethodInfoPtr_get_MorningMoodTransitionEnd_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe float MorningMoodTransitionDuration
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayNightCycle.NativeMethodInfoPtr_get_MorningMoodTransitionDuration_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe float MorningShadowTransitionStart
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayNightCycle.NativeMethodInfoPtr_get_MorningShadowTransitionStart_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe float MorningShadowTransitionEnd
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayNightCycle.NativeMethodInfoPtr_get_MorningShadowTransitionEnd_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe float MorningShadowTransitionDuration
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayNightCycle.NativeMethodInfoPtr_get_MorningShadowTransitionDuration_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe float EveningMoodTransitionStart
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayNightCycle.NativeMethodInfoPtr_get_EveningMoodTransitionStart_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe float EveningMoodTransitionEnd
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayNightCycle.NativeMethodInfoPtr_get_EveningMoodTransitionEnd_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe float EveningMoodTransitionDuration
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayNightCycle.NativeMethodInfoPtr_get_EveningMoodTransitionDuration_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe float EveningShadowTransitionStart
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayNightCycle.NativeMethodInfoPtr_get_EveningShadowTransitionStart_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe float EveningShadowTransitionEnd
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayNightCycle.NativeMethodInfoPtr_get_EveningShadowTransitionEnd_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe float EveningShadowTransitionDuration
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayNightCycle.NativeMethodInfoPtr_get_EveningShadowTransitionDuration_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe TimeOfDay TimeOfDay
	{
		[CallerCount(4)]
		[CachedScanResults(RefRangeStart = 1056644, RefRangeEnd = 1056648, XrefRangeStart = 1056642, XrefRangeEnd = 1056644, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayNightCycle.NativeMethodInfoPtr_get_TimeOfDay_Public_get_TimeOfDay_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1056652, RefRangeEnd = 1056653, XrefRangeStart = 1056648, XrefRangeEnd = 1056652, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void CalculateNextBloodMoonDay(Unity.Mathematics.Random random)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref random;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayNightCycle.NativeMethodInfoPtr_CalculateNextBloodMoonDay_Public_Void_Random_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(6)]
	[CachedScanResults(RefRangeStart = 1056658, RefRangeEnd = 1056664, XrefRangeStart = 1056653, XrefRangeEnd = 1056658, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool IsBloodMoonDay()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayNightCycle.NativeMethodInfoPtr_IsBloodMoonDay_Public_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public unsafe float TimeSpanTicksSinceStart
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayNightCycle.NativeMethodInfoPtr_get_TimeSpanTicksSinceStart_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DayNightCycle.NativeMethodInfoPtr_set_TimeSpanTicksSinceStart_Private_set_Void_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DayNightCycle>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Time;
	private static readonly IntPtr NativeFieldInfoPtr_ServerTime;
	private static readonly IntPtr NativeFieldInfoPtr_DayNightCycleStartTime;
	private static readonly IntPtr NativeFieldInfoPtr_DayDurationInSeconds;
	private static readonly IntPtr NativeFieldInfoPtr_Cloudiness;
	private static readonly IntPtr NativeFieldInfoPtr_MorningMoodTransitionDurationBeforeSunrise;
	private static readonly IntPtr NativeFieldInfoPtr_MorningMoodTransitionDurationAfterSunrise;
	private static readonly IntPtr NativeFieldInfoPtr_EveningMoodTransitionDurationBeforeSunset;
	private static readonly IntPtr NativeFieldInfoPtr_EveningMoodTransitionDurationAfterSunset;
	private static readonly IntPtr NativeFieldInfoPtr_MorningShadowTransitionDurationBeforeSunrise;
	private static readonly IntPtr NativeFieldInfoPtr_MorningShadowTransitionDurationAfterSunrise;
	private static readonly IntPtr NativeFieldInfoPtr_EveningShadowTransitionDurationBeforeSunset;
	private static readonly IntPtr NativeFieldInfoPtr_EveningShadowTransitionDurationAfterSunset;
	private static readonly IntPtr NativeFieldInfoPtr_DurationBeforeSunDamageAfterSunrise;
	private static readonly IntPtr NativeFieldInfoPtr_DayTimeStartInSeconds;
	private static readonly IntPtr NativeFieldInfoPtr_DayTimeDurationInSeconds;
	private static readonly IntPtr NativeFieldInfoPtr_NightTimeDurationInSeconds;
	private static readonly IntPtr NativeFieldInfoPtr_DayTimeSpan;
	private static readonly IntPtr NativeFieldInfoPtr_BloodMoonBuffBonus;
	private static readonly IntPtr NativeFieldInfoPtr_NextBloodMoonDay;
	private static readonly IntPtr NativeFieldInfoPtr_BloodMoonFrequency_Min;
	private static readonly IntPtr NativeFieldInfoPtr_BloodMoonFrequency_Max;
	private static readonly IntPtr NativeFieldInfoPtr_CastlePvPEnabled;
	private static readonly IntPtr NativeFieldInfoPtr_PlayerPvPEnabled;
	private static readonly IntPtr NativeFieldInfoPtr__TimeSpanTicksSinceStart_k__BackingField;
	private static readonly IntPtr NativeFieldInfoPtr_AmbientBiome;
	private static readonly IntPtr NativeFieldInfoPtr_GameDateTimeNow;
	private static readonly IntPtr NativeMethodInfoPtr_get_TimeSinceMidnight_Public_get_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_TimeSinceDayStart_Public_get_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_MorningMoodTransitionStart_Public_get_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_MorningMoodTransitionEnd_Public_get_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_MorningMoodTransitionDuration_Public_get_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_MorningShadowTransitionStart_Public_get_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_MorningShadowTransitionEnd_Public_get_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_MorningShadowTransitionDuration_Public_get_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_EveningMoodTransitionStart_Public_get_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_EveningMoodTransitionEnd_Public_get_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_EveningMoodTransitionDuration_Public_get_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_EveningShadowTransitionStart_Public_get_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_EveningShadowTransitionEnd_Public_get_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_EveningShadowTransitionDuration_Public_get_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_TimeOfDay_Public_get_TimeOfDay_0;
	private static readonly IntPtr NativeMethodInfoPtr_CalculateNextBloodMoonDay_Public_Void_Random_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsBloodMoonDay_Public_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_TimeSpanTicksSinceStart_Public_get_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_set_TimeSpanTicksSinceStart_Private_set_Void_Single_0;
	[FieldOffset(0)]
	public double Time;
	[FieldOffset(8)]
	public double ServerTime;
	[FieldOffset(16)]
	public float DayNightCycleStartTime;
	[FieldOffset(20)]
	public float DayDurationInSeconds;
	[FieldOffset(24)]
	public float Cloudiness;
	[FieldOffset(28)]
	public float MorningMoodTransitionDurationBeforeSunrise;
	[FieldOffset(32)]
	public float MorningMoodTransitionDurationAfterSunrise;
	[FieldOffset(36)]
	public float EveningMoodTransitionDurationBeforeSunset;
	[FieldOffset(40)]
	public float EveningMoodTransitionDurationAfterSunset;
	[FieldOffset(44)]
	public float MorningShadowTransitionDurationBeforeSunrise;
	[FieldOffset(48)]
	public float MorningShadowTransitionDurationAfterSunrise;
	[FieldOffset(52)]
	public float EveningShadowTransitionDurationBeforeSunset;
	[FieldOffset(56)]
	public float EveningShadowTransitionDurationAfterSunset;
	[FieldOffset(60)]
	public float DurationBeforeSunDamageAfterSunrise;
	[FieldOffset(64)]
	public float DayTimeStartInSeconds;
	[FieldOffset(68)]
	public float DayTimeDurationInSeconds;
	[FieldOffset(72)]
	public float NightTimeDurationInSeconds;
	[FieldOffset(76)]
	public DayTimeSpan DayTimeSpan;
	[FieldOffset(88)]
	public float BloodMoonBuffBonus;
	[FieldOffset(92)]
	public int NextBloodMoonDay;
	[FieldOffset(96)]
	public int BloodMoonFrequency_Min;
	[FieldOffset(100)]
	public int BloodMoonFrequency_Max;
	[FieldOffset(104)]
	[MarshalAs(4)]
	public bool CastlePvPEnabled;
	[FieldOffset(105)]
	[MarshalAs(4)]
	public bool PlayerPvPEnabled;
	[FieldOffset(108)]
	public float _TimeSpanTicksSinceStart_k__BackingField;
	[FieldOffset(112)]
	public int AmbientBiome;
	[FieldOffset(116)]
	public GameDateTime GameDateTimeNow;
}
