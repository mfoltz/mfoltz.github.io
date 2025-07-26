# ResetCooldownsDebugEvent

```csharp
[StructLayout(2)]
public struct ResetCooldownsDebugEvent
{
	static ResetCooldownsDebugEvent()
	{
		Il2CppClassPointerStore<ResetCooldownsDebugEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "ResetCooldownsDebugEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ResetCooldownsDebugEvent>.NativeClassPtr);
		ResetCooldownsDebugEvent.NativeFieldInfoPtr_Players = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResetCooldownsDebugEvent>.NativeClassPtr, "Players");
		ResetCooldownsDebugEvent.NativeFieldInfoPtr_Environment = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResetCooldownsDebugEvent>.NativeClassPtr, "Environment");
		ResetCooldownsDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ResetCooldownsDebugEvent>.NativeClassPtr, 100684209);
		ResetCooldownsDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ResetCooldownsDebugEvent>.NativeClassPtr, 100684210);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 291181, RefRangeEnd = 291182, XrefRangeStart = 291176, XrefRangeEnd = 291181, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ResetCooldownsDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 291185, RefRangeEnd = 291186, XrefRangeStart = 291182, XrefRangeEnd = 291185, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ResetCooldownsDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ResetCooldownsDebugEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Players;
	private static readonly IntPtr NativeFieldInfoPtr_Environment;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool Players;
	[FieldOffset(1)]
	[MarshalAs(4)]
	public bool Environment;
}
