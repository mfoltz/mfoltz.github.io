# ApplyBuffDebugEvent

```csharp
[StructLayout(2)]
public struct ApplyBuffDebugEvent
{
	static ApplyBuffDebugEvent()
	{
		Il2CppClassPointerStore<ApplyBuffDebugEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "ApplyBuffDebugEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ApplyBuffDebugEvent>.NativeClassPtr);
		ApplyBuffDebugEvent.NativeFieldInfoPtr_BuffPrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyBuffDebugEvent>.NativeClassPtr, "BuffPrefabGUID");
		ApplyBuffDebugEvent.NativeFieldInfoPtr_Who = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyBuffDebugEvent>.NativeClassPtr, "Who");
		ApplyBuffDebugEvent.NativeFieldInfoPtr_Stacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyBuffDebugEvent>.NativeClassPtr, "Stacks");
		ApplyBuffDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ApplyBuffDebugEvent>.NativeClassPtr, 100684241);
		ApplyBuffDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ApplyBuffDebugEvent>.NativeClassPtr, 100684242);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 291336, RefRangeEnd = 291337, XrefRangeStart = 291327, XrefRangeEnd = 291336, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ApplyBuffDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 291346, RefRangeEnd = 291347, XrefRangeStart = 291337, XrefRangeEnd = 291346, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ApplyBuffDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ApplyBuffDebugEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BuffPrefabGUID;
	private static readonly IntPtr NativeFieldInfoPtr_Who;
	private static readonly IntPtr NativeFieldInfoPtr_Stacks;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public PrefabGUID BuffPrefabGUID;
	[FieldOffset(4)]
	public NetworkId Who;
	[FieldOffset(16)]
	public byte Stacks;
}
