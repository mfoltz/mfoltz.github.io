# EquipmentToEquipmentTransferEvent

```csharp
[StructLayout(2)]
public struct EquipmentToEquipmentTransferEvent
{
	static EquipmentToEquipmentTransferEvent()
	{
		Il2CppClassPointerStore<EquipmentToEquipmentTransferEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "EquipmentToEquipmentTransferEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EquipmentToEquipmentTransferEvent>.NativeClassPtr);
		EquipmentToEquipmentTransferEvent.NativeFieldInfoPtr_ToEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentToEquipmentTransferEvent>.NativeClassPtr, "ToEntity");
		EquipmentToEquipmentTransferEvent.NativeFieldInfoPtr_EquipmentType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentToEquipmentTransferEvent>.NativeClassPtr, "EquipmentType");
		EquipmentToEquipmentTransferEvent.NativeFieldInfoPtr_ServantToCharacter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentToEquipmentTransferEvent>.NativeClassPtr, "ServantToCharacter");
		EquipmentToEquipmentTransferEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EquipmentToEquipmentTransferEvent>.NativeClassPtr, 100684275);
		EquipmentToEquipmentTransferEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EquipmentToEquipmentTransferEvent>.NativeClassPtr, 100684276);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 291515, RefRangeEnd = 291516, XrefRangeStart = 291506, XrefRangeEnd = 291515, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EquipmentToEquipmentTransferEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 291524, RefRangeEnd = 291525, XrefRangeStart = 291516, XrefRangeEnd = 291524, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EquipmentToEquipmentTransferEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EquipmentToEquipmentTransferEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ToEntity;
	private static readonly IntPtr NativeFieldInfoPtr_EquipmentType;
	private static readonly IntPtr NativeFieldInfoPtr_ServantToCharacter;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public NetworkId ToEntity;
	[FieldOffset(12)]
	public EquipmentType EquipmentType;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool ServantToCharacter;
}
