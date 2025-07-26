# UnequipServantItemEvent

```csharp
[StructLayout(2)]
public struct UnequipServantItemEvent
{
	static UnequipServantItemEvent()
	{
		Il2CppClassPointerStore<UnequipServantItemEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "UnequipServantItemEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnequipServantItemEvent>.NativeClassPtr);
		UnequipServantItemEvent.NativeFieldInfoPtr_EquipmentType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnequipServantItemEvent>.NativeClassPtr, "EquipmentType");
		UnequipServantItemEvent.NativeFieldInfoPtr_FromEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnequipServantItemEvent>.NativeClassPtr, "FromEntity");
		UnequipServantItemEvent.NativeFieldInfoPtr_ToInventory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnequipServantItemEvent>.NativeClassPtr, "ToInventory");
		UnequipServantItemEvent.NativeFieldInfoPtr_ToSlotIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnequipServantItemEvent>.NativeClassPtr, "ToSlotIndex");
		UnequipServantItemEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnequipServantItemEvent>.NativeClassPtr, 100684283);
		UnequipServantItemEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnequipServantItemEvent>.NativeClassPtr, 100684284);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 291584, RefRangeEnd = 291585, XrefRangeStart = 291576, XrefRangeEnd = 291584, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnequipServantItemEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 291593, RefRangeEnd = 291594, XrefRangeStart = 291585, XrefRangeEnd = 291593, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnequipServantItemEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnequipServantItemEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EquipmentType;
	private static readonly IntPtr NativeFieldInfoPtr_FromEntity;
	private static readonly IntPtr NativeFieldInfoPtr_ToInventory;
	private static readonly IntPtr NativeFieldInfoPtr_ToSlotIndex;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public EquipmentType EquipmentType;
	[FieldOffset(4)]
	public NetworkId FromEntity;
	[FieldOffset(16)]
	public NetworkId ToInventory;
	[FieldOffset(28)]
	public int ToSlotIndex;
}
