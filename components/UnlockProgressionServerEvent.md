# UnlockProgressionServerEvent

```csharp
[StructLayout(2)]
public struct UnlockProgressionServerEvent
{
	static UnlockProgressionServerEvent()
	{
		Il2CppClassPointerStore<UnlockProgressionServerEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "UnlockProgressionServerEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnlockProgressionServerEvent>.NativeClassPtr);
		UnlockProgressionServerEvent.NativeFieldInfoPtr_UnlockID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnlockProgressionServerEvent>.NativeClassPtr, "UnlockID");
		UnlockProgressionServerEvent.NativeFieldInfoPtr_IgnoreAnnouncement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnlockProgressionServerEvent>.NativeClassPtr, "IgnoreAnnouncement");
		UnlockProgressionServerEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnlockProgressionServerEvent>.NativeClassPtr, 100684631);
		UnlockProgressionServerEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnlockProgressionServerEvent>.NativeClassPtr, 100684632);
		UnlockProgressionServerEvent.NativeMethodInfoPtr_RunConvertOnDemandForAllUnlockEvents_Public_Static_Void_World_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnlockProgressionServerEvent>.NativeClassPtr, 100684633);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 294280, RefRangeEnd = 294281, XrefRangeStart = 294275, XrefRangeEnd = 294280, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnlockProgressionServerEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 294285, RefRangeEnd = 294286, XrefRangeStart = 294281, XrefRangeEnd = 294285, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnlockProgressionServerEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(6)]
	[CachedScanResults(RefRangeStart = 40, RefRangeEnd = 46, XrefRangeStart = 40, XrefRangeEnd = 46, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void RunConvertOnDemandForAllUnlockEvents(World world)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(world);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnlockProgressionServerEvent.NativeMethodInfoPtr_RunConvertOnDemandForAllUnlockEvents_Public_Static_Void_World_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnlockProgressionServerEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UnlockID;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreAnnouncement;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_RunConvertOnDemandForAllUnlockEvents_Public_Static_Void_World_0;
	[FieldOffset(0)]
	public PrefabGUID UnlockID;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool IgnoreAnnouncement;
}
