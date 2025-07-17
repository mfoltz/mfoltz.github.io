---
nav_exclude: true
search_exclude: true
---

# GameplayEventIdMapping

```csharp
[StructLayout(2)]
public struct GameplayEventIdMapping
{
	static GameplayEventIdMapping()
	{
		Il2CppClassPointerStore<GameplayEventIdMapping>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "GameplayEventIdMapping");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GameplayEventIdMapping>.NativeClassPtr);
		GameplayEventIdMapping.NativeFieldInfoPtr_NextTriggerTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameplayEventIdMapping>.NativeClassPtr, "NextTriggerTime");
		GameplayEventIdMapping.NativeFieldInfoPtr_TriggerCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameplayEventIdMapping>.NativeClassPtr, "TriggerCooldown");
		GameplayEventIdMapping.NativeFieldInfoPtr_GameplayEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameplayEventIdMapping>.NativeClassPtr, "GameplayEventId");
		GameplayEventIdMapping.NativeFieldInfoPtr_MaxTriggers = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameplayEventIdMapping>.NativeClassPtr, "MaxTriggers");
		GameplayEventIdMapping.NativeFieldInfoPtr_CurrentTriggers = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameplayEventIdMapping>.NativeClassPtr, "CurrentTriggers");
		GameplayEventIdMapping.NativeFieldInfoPtr_TriggerMultipleTimes = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameplayEventIdMapping>.NativeClassPtr, "TriggerMultipleTimes");
		GameplayEventIdMapping.NativeMethodInfoPtr_Check_Public_Static_Boolean_DynamicBuffer_1_GameplayEventIdMapping_Int32_Int32_GameplayEventId_Double_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GameplayEventIdMapping>.NativeClassPtr, 100668296);
		GameplayEventIdMapping.NativeMethodInfoPtr_MarkUsed_Public_Static_Void_DynamicBuffer_1_GameplayEventIdMapping_Int32_Double_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GameplayEventIdMapping>.NativeClassPtr, 100668297);
	}
	[CallerCount(3)]
	[CachedScanResults(RefRangeStart = 85359, RefRangeEnd = 85362, XrefRangeStart = 85353, XrefRangeEnd = 85359, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool Check(DynamicBuffer<GameplayEventIdMapping> buffer, int eventIdIndex, int eventIdCount, GameplayEventId eventId, double serverTime, bool markUsed = false)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref buffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref eventIdIndex;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref eventIdCount;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref eventId;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref serverTime;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref markUsed;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GameplayEventIdMapping.NativeMethodInfoPtr_Check_Public_Static_Boolean_DynamicBuffer_1_GameplayEventIdMapping_Int32_Int32_GameplayEventId_Double_Boolean_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 85368, RefRangeEnd = 85370, XrefRangeStart = 85362, XrefRangeEnd = 85368, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void MarkUsed(DynamicBuffer<GameplayEventIdMapping> buffer, int eventIdIndex, double serverTime)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref buffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref eventIdIndex;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref serverTime;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GameplayEventIdMapping.NativeMethodInfoPtr_MarkUsed_Public_Static_Void_DynamicBuffer_1_GameplayEventIdMapping_Int32_Double_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GameplayEventIdMapping>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_NextTriggerTime;
	private static readonly IntPtr NativeFieldInfoPtr_TriggerCooldown;
	private static readonly IntPtr NativeFieldInfoPtr_GameplayEventId;
	private static readonly IntPtr NativeFieldInfoPtr_MaxTriggers;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentTriggers;
	private static readonly IntPtr NativeFieldInfoPtr_TriggerMultipleTimes;
	private static readonly IntPtr NativeMethodInfoPtr_Check_Public_Static_Boolean_DynamicBuffer_1_GameplayEventIdMapping_Int32_Int32_GameplayEventId_Double_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_MarkUsed_Public_Static_Void_DynamicBuffer_1_GameplayEventIdMapping_Int32_Double_0;
	[FieldOffset(0)]
	public double NextTriggerTime;
	[FieldOffset(8)]
	public float TriggerCooldown;
	[FieldOffset(12)]
	public GameplayEventId GameplayEventId;
	[FieldOffset(20)]
	public int MaxTriggers;
	[FieldOffset(24)]
	public int CurrentTriggers;
	[FieldOffset(28)]
	[MarshalAs(4)]
	public bool TriggerMultipleTimes;
}
