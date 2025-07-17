---
nav_exclude: true
search_exclude: true
---

# ServantCoffinActionEvent

```csharp
[StructLayout(2)]
public struct ServantCoffinActionEvent
{
	static ServantCoffinActionEvent()
	{
		Il2CppClassPointerStore<ServantCoffinActionEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "ServantCoffinActionEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantCoffinActionEvent>.NativeClassPtr);
		ServantCoffinActionEvent.NativeFieldInfoPtr_Workstation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinActionEvent>.NativeClassPtr, "Workstation");
		ServantCoffinActionEvent.NativeFieldInfoPtr_Action = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantCoffinActionEvent>.NativeClassPtr, "Action");
		ServantCoffinActionEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantCoffinActionEvent>.NativeClassPtr, 100684401);
		ServantCoffinActionEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantCoffinActionEvent>.NativeClassPtr, 100684402);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292535, RefRangeEnd = 292536, XrefRangeStart = 292528, XrefRangeEnd = 292535, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantCoffinActionEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292543, RefRangeEnd = 292544, XrefRangeStart = 292536, XrefRangeEnd = 292543, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantCoffinActionEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantCoffinActionEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Workstation;
	private static readonly IntPtr NativeFieldInfoPtr_Action;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public NetworkId Workstation;
	[FieldOffset(12)]
	public ServantCoffinAction Action;
}
