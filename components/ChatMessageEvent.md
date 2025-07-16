# ChatMessageEvent

```csharp
[StructLayout(2)]
public struct ChatMessageEvent
{
	static ChatMessageEvent()
	{
		Il2CppClassPointerStore<ChatMessageEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "ChatMessageEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChatMessageEvent>.NativeClassPtr);
		ChatMessageEvent.NativeFieldInfoPtr_MessageType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChatMessageEvent>.NativeClassPtr, "MessageType");
		ChatMessageEvent.NativeFieldInfoPtr_MessageText = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChatMessageEvent>.NativeClassPtr, "MessageText");
		ChatMessageEvent.NativeFieldInfoPtr_ReceiverEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChatMessageEvent>.NativeClassPtr, "ReceiverEntity");
		ChatMessageEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChatMessageEvent>.NativeClassPtr, 100684393);
		ChatMessageEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChatMessageEvent>.NativeClassPtr, 100684394);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292453, RefRangeEnd = 292454, XrefRangeStart = 292444, XrefRangeEnd = 292453, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChatMessageEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292463, RefRangeEnd = 292464, XrefRangeStart = 292454, XrefRangeEnd = 292463, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChatMessageEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChatMessageEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MessageType;
	private static readonly IntPtr NativeFieldInfoPtr_MessageText;
	private static readonly IntPtr NativeFieldInfoPtr_ReceiverEntity;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public ChatMessageType MessageType;
	[FieldOffset(4)]
	public FixedString512Bytes MessageText;
	[FieldOffset(516)]
	public NetworkId ReceiverEntity;
}
