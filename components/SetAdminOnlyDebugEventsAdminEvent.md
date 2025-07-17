---
nav_exclude: true
search_exclude: true
---

# SetAdminOnlyDebugEventsAdminEvent

```csharp
[StructLayout(2)]
public struct SetAdminOnlyDebugEventsAdminEvent
{
	static SetAdminOnlyDebugEventsAdminEvent()
	{
		Il2CppClassPointerStore<SetAdminOnlyDebugEventsAdminEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "SetAdminOnlyDebugEventsAdminEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SetAdminOnlyDebugEventsAdminEvent>.NativeClassPtr);
		SetAdminOnlyDebugEventsAdminEvent.NativeFieldInfoPtr_Active = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SetAdminOnlyDebugEventsAdminEvent>.NativeClassPtr, "Active");
		SetAdminOnlyDebugEventsAdminEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SetAdminOnlyDebugEventsAdminEvent>.NativeClassPtr, 100684441);
		SetAdminOnlyDebugEventsAdminEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SetAdminOnlyDebugEventsAdminEvent>.NativeClassPtr, 100684442);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292784, RefRangeEnd = 292785, XrefRangeStart = 292781, XrefRangeEnd = 292784, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SetAdminOnlyDebugEventsAdminEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292787, RefRangeEnd = 292788, XrefRangeStart = 292785, XrefRangeEnd = 292787, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SetAdminOnlyDebugEventsAdminEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SetAdminOnlyDebugEventsAdminEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Active;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool Active;
}
