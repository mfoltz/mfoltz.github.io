# ChatMessageServerEvent

```csharp
[StructLayout(2)]
public struct ChatMessageServerEvent
{
	static ChatMessageServerEvent()
	{
		Il2CppClassPointerStore<ChatMessageServerEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "ChatMessageServerEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChatMessageServerEvent>.NativeClassPtr);
		ChatMessageServerEvent.NativeFieldInfoPtr_TimeUTC = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChatMessageServerEvent>.NativeClassPtr, "TimeUTC");
		ChatMessageServerEvent.NativeFieldInfoPtr_MessageType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChatMessageServerEvent>.NativeClassPtr, "MessageType");
		ChatMessageServerEvent.NativeFieldInfoPtr_MessageText = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChatMessageServerEvent>.NativeClassPtr, "MessageText");
		ChatMessageServerEvent.NativeFieldInfoPtr_FromUser = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChatMessageServerEvent>.NativeClassPtr, "FromUser");
		ChatMessageServerEvent.NativeFieldInfoPtr_FromCharacter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChatMessageServerEvent>.NativeClassPtr, "FromCharacter");
		ChatMessageServerEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChatMessageServerEvent>.NativeClassPtr, 100684629);
		ChatMessageServerEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChatMessageServerEvent>.NativeClassPtr, 100684630);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 294259, RefRangeEnd = 294260, XrefRangeStart = 294247, XrefRangeEnd = 294259, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChatMessageServerEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 294274, RefRangeEnd = 294275, XrefRangeStart = 294260, XrefRangeEnd = 294274, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChatMessageServerEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChatMessageServerEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TimeUTC;
	private static readonly IntPtr NativeFieldInfoPtr_MessageType;
	private static readonly IntPtr NativeFieldInfoPtr_MessageText;
	private static readonly IntPtr NativeFieldInfoPtr_FromUser;
	private static readonly IntPtr NativeFieldInfoPtr_FromCharacter;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public long TimeUTC;
	[FieldOffset(8)]
	public ServerChatMessageType MessageType;
	[FieldOffset(12)]
	public FixedString512Bytes MessageText;
	[FieldOffset(524)]
	public NetworkId FromUser;
	[FieldOffset(536)]
	public NetworkId FromCharacter;
}
