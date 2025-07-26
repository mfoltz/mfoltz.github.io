# SetUserAdminLevelAdminEvent

```csharp
[StructLayout(2)]
public struct SetUserAdminLevelAdminEvent
{
	static SetUserAdminLevelAdminEvent()
	{
		Il2CppClassPointerStore<SetUserAdminLevelAdminEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "SetUserAdminLevelAdminEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SetUserAdminLevelAdminEvent>.NativeClassPtr);
		SetUserAdminLevelAdminEvent.NativeFieldInfoPtr_UserNetworkId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SetUserAdminLevelAdminEvent>.NativeClassPtr, "UserNetworkId");
		SetUserAdminLevelAdminEvent.NativeFieldInfoPtr_AdminLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SetUserAdminLevelAdminEvent>.NativeClassPtr, "AdminLevel");
		SetUserAdminLevelAdminEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SetUserAdminLevelAdminEvent>.NativeClassPtr, 100684435);
		SetUserAdminLevelAdminEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SetUserAdminLevelAdminEvent>.NativeClassPtr, 100684436);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292759, RefRangeEnd = 292760, XrefRangeStart = 292752, XrefRangeEnd = 292759, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SetUserAdminLevelAdminEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292767, RefRangeEnd = 292768, XrefRangeStart = 292760, XrefRangeEnd = 292767, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SetUserAdminLevelAdminEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SetUserAdminLevelAdminEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UserNetworkId;
	private static readonly IntPtr NativeFieldInfoPtr_AdminLevel;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public NetworkId UserNetworkId;
	[FieldOffset(12)]
	public AdminLevel AdminLevel;
}
