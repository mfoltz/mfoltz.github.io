# SetTimeOfDayEvent

```csharp
[StructLayout(2)]
public struct SetTimeOfDayEvent
{
	static SetTimeOfDayEvent()
	{
		Il2CppClassPointerStore<SetTimeOfDayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "SetTimeOfDayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SetTimeOfDayEvent>.NativeClassPtr);
		SetTimeOfDayEvent.NativeFieldInfoPtr_Day = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SetTimeOfDayEvent>.NativeClassPtr, "Day");
		SetTimeOfDayEvent.NativeFieldInfoPtr_Hour = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SetTimeOfDayEvent>.NativeClassPtr, "Hour");
		SetTimeOfDayEvent.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SetTimeOfDayEvent>.NativeClassPtr, "Type");
		SetTimeOfDayEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SetTimeOfDayEvent>.NativeClassPtr, 100684467);
		SetTimeOfDayEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SetTimeOfDayEvent>.NativeClassPtr, 100684468);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292936, RefRangeEnd = 292937, XrefRangeStart = 292932, XrefRangeEnd = 292936, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SetTimeOfDayEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292941, RefRangeEnd = 292942, XrefRangeStart = 292937, XrefRangeEnd = 292941, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SetTimeOfDayEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SetTimeOfDayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Day;
	private static readonly IntPtr NativeFieldInfoPtr_Hour;
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public int Day;
	[FieldOffset(4)]
	public int Hour;
	[FieldOffset(8)]
	public SetTimeOfDayEvent.SetTimeType Type;
	public enum SetTimeType
	{
		Set,
		Add
	}
}
