# WarEvent_ScheduleEvent

```csharp
[StructLayout(2)]
public struct WarEvent_ScheduleEvent
{
	static WarEvent_ScheduleEvent()
	{
		Il2CppClassPointerStore<WarEvent_ScheduleEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "WarEvent_ScheduleEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WarEvent_ScheduleEvent>.NativeClassPtr);
		WarEvent_ScheduleEvent.NativeFieldInfoPtr_EventType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ScheduleEvent>.NativeClassPtr, "EventType");
		WarEvent_ScheduleEvent.NativeFieldInfoPtr_DurationInSeconds = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ScheduleEvent>.NativeClassPtr, "DurationInSeconds");
		WarEvent_ScheduleEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WarEvent_ScheduleEvent>.NativeClassPtr, 100684517);
		WarEvent_ScheduleEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WarEvent_ScheduleEvent>.NativeClassPtr, 100684518);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 293167, RefRangeEnd = 293168, XrefRangeStart = 293162, XrefRangeEnd = 293167, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WarEvent_ScheduleEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 293173, RefRangeEnd = 293174, XrefRangeStart = 293168, XrefRangeEnd = 293173, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WarEvent_ScheduleEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WarEvent_ScheduleEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventType;
	private static readonly IntPtr NativeFieldInfoPtr_DurationInSeconds;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public WarEventType EventType;
	[FieldOffset(4)]
	public int DurationInSeconds;
}
