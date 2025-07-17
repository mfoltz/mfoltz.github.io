---
nav_exclude: true
search_exclude: true
---

# RepairItemEvent

```csharp
[StructLayout(2)]
public struct RepairItemEvent
{
	static RepairItemEvent()
	{
		Il2CppClassPointerStore<RepairItemEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "RepairItemEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RepairItemEvent>.NativeClassPtr);
		RepairItemEvent.NativeFieldInfoPtr_Workstation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RepairItemEvent>.NativeClassPtr, "Workstation");
		RepairItemEvent.NativeFieldInfoPtr_Inventory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RepairItemEvent>.NativeClassPtr, "Inventory");
		RepairItemEvent.NativeFieldInfoPtr_Slot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RepairItemEvent>.NativeClassPtr, "Slot");
		RepairItemEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RepairItemEvent>.NativeClassPtr, 100684315);
		RepairItemEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RepairItemEvent>.NativeClassPtr, 100684316);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 291787, RefRangeEnd = 291788, XrefRangeStart = 291780, XrefRangeEnd = 291787, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RepairItemEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 291795, RefRangeEnd = 291796, XrefRangeStart = 291788, XrefRangeEnd = 291795, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RepairItemEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RepairItemEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Workstation;
	private static readonly IntPtr NativeFieldInfoPtr_Inventory;
	private static readonly IntPtr NativeFieldInfoPtr_Slot;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public NetworkId Workstation;
	[FieldOffset(12)]
	public NetworkId Inventory;
	[FieldOffset(24)]
	public int Slot;
}
