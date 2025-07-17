---
nav_exclude: true
search_exclude: true
---

# ChangeTransmogColorEvent

```csharp
[StructLayout(2)]
public struct ChangeTransmogColorEvent
{
	static ChangeTransmogColorEvent()
	{
		Il2CppClassPointerStore<ChangeTransmogColorEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "ChangeTransmogColorEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChangeTransmogColorEvent>.NativeClassPtr);
		ChangeTransmogColorEvent.NativeFieldInfoPtr_ItemNetworkId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangeTransmogColorEvent>.NativeClassPtr, "ItemNetworkId");
		ChangeTransmogColorEvent.NativeFieldInfoPtr_EquipmentNetworkId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangeTransmogColorEvent>.NativeClassPtr, "EquipmentNetworkId");
		ChangeTransmogColorEvent.NativeFieldInfoPtr_EquipmentType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangeTransmogColorEvent>.NativeClassPtr, "EquipmentType");
		ChangeTransmogColorEvent.NativeFieldInfoPtr_NewIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangeTransmogColorEvent>.NativeClassPtr, "NewIndex");
		ChangeTransmogColorEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChangeTransmogColorEvent>.NativeClassPtr, 100684395);
		ChangeTransmogColorEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChangeTransmogColorEvent>.NativeClassPtr, 100684396);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292474, RefRangeEnd = 292475, XrefRangeStart = 292464, XrefRangeEnd = 292474, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChangeTransmogColorEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292485, RefRangeEnd = 292486, XrefRangeStart = 292475, XrefRangeEnd = 292485, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChangeTransmogColorEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChangeTransmogColorEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ItemNetworkId;
	private static readonly IntPtr NativeFieldInfoPtr_EquipmentNetworkId;
	private static readonly IntPtr NativeFieldInfoPtr_EquipmentType;
	private static readonly IntPtr NativeFieldInfoPtr_NewIndex;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public NetworkId ItemNetworkId;
	[FieldOffset(12)]
	public NetworkId EquipmentNetworkId;
	[FieldOffset(24)]
	public EquipmentType EquipmentType;
	[FieldOffset(28)]
	public byte NewIndex;
}
