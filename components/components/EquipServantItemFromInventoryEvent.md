---
nav_exclude: true
search_exclude: true
---

# EquipServantItemFromInventoryEvent

```csharp
[StructLayout(2)]
public struct EquipServantItemFromInventoryEvent
{
	static EquipServantItemFromInventoryEvent()
	{
		Il2CppClassPointerStore<EquipServantItemFromInventoryEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "EquipServantItemFromInventoryEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EquipServantItemFromInventoryEvent>.NativeClassPtr);
		EquipServantItemFromInventoryEvent.NativeFieldInfoPtr_FromInventory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipServantItemFromInventoryEvent>.NativeClassPtr, "FromInventory");
		EquipServantItemFromInventoryEvent.NativeFieldInfoPtr_ToEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipServantItemFromInventoryEvent>.NativeClassPtr, "ToEntity");
		EquipServantItemFromInventoryEvent.NativeFieldInfoPtr_SlotIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipServantItemFromInventoryEvent>.NativeClassPtr, "SlotIndex");
		EquipServantItemFromInventoryEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EquipServantItemFromInventoryEvent>.NativeClassPtr, 100684279);
		EquipServantItemFromInventoryEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EquipServantItemFromInventoryEvent>.NativeClassPtr, 100684280);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 291551, RefRangeEnd = 291552, XrefRangeStart = 291544, XrefRangeEnd = 291551, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EquipServantItemFromInventoryEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 291559, RefRangeEnd = 291560, XrefRangeStart = 291552, XrefRangeEnd = 291559, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EquipServantItemFromInventoryEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EquipServantItemFromInventoryEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FromInventory;
	private static readonly IntPtr NativeFieldInfoPtr_ToEntity;
	private static readonly IntPtr NativeFieldInfoPtr_SlotIndex;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public NetworkId FromInventory;
	[FieldOffset(12)]
	public NetworkId ToEntity;
	[FieldOffset(24)]
	public int SlotIndex;
}
