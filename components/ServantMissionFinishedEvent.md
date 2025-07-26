# ServantMissionFinishedEvent

```csharp
[StructLayout(2)]
public struct ServantMissionFinishedEvent
{
	static ServantMissionFinishedEvent()
	{
		Il2CppClassPointerStore<ServantMissionFinishedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "ServantMissionFinishedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantMissionFinishedEvent>.NativeClassPtr);
		ServantMissionFinishedEvent.NativeFieldInfoPtr_ServantName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantMissionFinishedEvent>.NativeClassPtr, "ServantName");
		ServantMissionFinishedEvent.NativeFieldInfoPtr_MissionId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantMissionFinishedEvent>.NativeClassPtr, "MissionId");
		ServantMissionFinishedEvent.NativeFieldInfoPtr_Success = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantMissionFinishedEvent>.NativeClassPtr, "Success");
		ServantMissionFinishedEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantMissionFinishedEvent>.NativeClassPtr, 100684666);
		ServantMissionFinishedEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantMissionFinishedEvent>.NativeClassPtr, 100684667);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 294426, RefRangeEnd = 294427, XrefRangeStart = 294417, XrefRangeEnd = 294426, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantMissionFinishedEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 294433, RefRangeEnd = 294434, XrefRangeStart = 294427, XrefRangeEnd = 294433, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantMissionFinishedEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantMissionFinishedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ServantName;
	private static readonly IntPtr NativeFieldInfoPtr_MissionId;
	private static readonly IntPtr NativeFieldInfoPtr_Success;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public FixedString64Bytes ServantName;
	[FieldOffset(64)]
	public PrefabGUID MissionId;
	[FieldOffset(68)]
	[MarshalAs(4)]
	public bool Success;
}
