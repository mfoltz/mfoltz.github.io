# SetPlayerTeamDebugEvent

```csharp
[StructLayout(2)]
public struct SetPlayerTeamDebugEvent
{
	static SetPlayerTeamDebugEvent()
	{
		Il2CppClassPointerStore<SetPlayerTeamDebugEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "SetPlayerTeamDebugEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SetPlayerTeamDebugEvent>.NativeClassPtr);
		SetPlayerTeamDebugEvent.NativeFieldInfoPtr_TeamId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SetPlayerTeamDebugEvent>.NativeClassPtr, "TeamId");
		SetPlayerTeamDebugEvent.NativeFieldInfoPtr_CreateNewTeam = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SetPlayerTeamDebugEvent>.NativeClassPtr, "CreateNewTeam");
		SetPlayerTeamDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SetPlayerTeamDebugEvent>.NativeClassPtr, 100684157);
		SetPlayerTeamDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SetPlayerTeamDebugEvent>.NativeClassPtr, 100684158);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 290585, RefRangeEnd = 290586, XrefRangeStart = 290580, XrefRangeEnd = 290585, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SetPlayerTeamDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 290590, RefRangeEnd = 290591, XrefRangeStart = 290586, XrefRangeEnd = 290590, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SetPlayerTeamDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SetPlayerTeamDebugEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TeamId;
	private static readonly IntPtr NativeFieldInfoPtr_CreateNewTeam;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public int TeamId;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool CreateNewTeam;
}
