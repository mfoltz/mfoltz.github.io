# UnequipItemEvent

```csharp
[StructLayout(2)]
public struct UnequipItemEvent
{
	static UnequipItemEvent()
	{
		Il2CppClassPointerStore<UnequipItemEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "UnequipItemEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnequipItemEvent>.NativeClassPtr);
		UnequipItemEvent.NativeFieldInfoPtr_EquipmentType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnequipItemEvent>.NativeClassPtr, "EquipmentType");
		UnequipItemEvent.NativeFieldInfoPtr_ToInventory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnequipItemEvent>.NativeClassPtr, "ToInventory");
		UnequipItemEvent.NativeFieldInfoPtr_ToSlotIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnequipItemEvent>.NativeClassPtr, "ToSlotIndex");
		UnequipItemEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnequipItemEvent>.NativeClassPtr, 100684281);
		UnequipItemEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnequipItemEvent>.NativeClassPtr, 100684282);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 291567, RefRangeEnd = 291568, XrefRangeStart = 291560, XrefRangeEnd = 291567, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnequipItemEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 291575, RefRangeEnd = 291576, XrefRangeStart = 291568, XrefRangeEnd = 291575, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnequipItemEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnequipItemEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EquipmentType;
	private static readonly IntPtr NativeFieldInfoPtr_ToInventory;
	private static readonly IntPtr NativeFieldInfoPtr_ToSlotIndex;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public EquipmentType EquipmentType;
	[FieldOffset(4)]
	public NetworkId ToInventory;
	[FieldOffset(16)]
	public int ToSlotIndex;
}
