# WarEvent_SimulateGateActiveUsers

```csharp
[StructLayout(2)]
public struct WarEvent_SimulateGateActiveUsers
{
	static WarEvent_SimulateGateActiveUsers()
	{
		Il2CppClassPointerStore<WarEvent_SimulateGateActiveUsers>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "WarEvent_SimulateGateActiveUsers");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WarEvent_SimulateGateActiveUsers>.NativeClassPtr);
		WarEvent_SimulateGateActiveUsers.NativeFieldInfoPtr_ActiveUsers = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_SimulateGateActiveUsers>.NativeClassPtr, "ActiveUsers");
		WarEvent_SimulateGateActiveUsers.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WarEvent_SimulateGateActiveUsers>.NativeClassPtr, 100684527);
		WarEvent_SimulateGateActiveUsers.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WarEvent_SimulateGateActiveUsers>.NativeClassPtr, 100684528);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 293219, RefRangeEnd = 293220, XrefRangeStart = 293217, XrefRangeEnd = 293219, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WarEvent_SimulateGateActiveUsers.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 293222, RefRangeEnd = 293223, XrefRangeStart = 293220, XrefRangeEnd = 293222, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WarEvent_SimulateGateActiveUsers.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WarEvent_SimulateGateActiveUsers>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ActiveUsers;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public int ActiveUsers;
}
