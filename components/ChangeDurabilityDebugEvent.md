# ChangeDurabilityDebugEvent

```csharp
[StructLayout(2)]
public struct ChangeDurabilityDebugEvent
{
	static ChangeDurabilityDebugEvent()
	{
		Il2CppClassPointerStore<ChangeDurabilityDebugEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "ChangeDurabilityDebugEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChangeDurabilityDebugEvent>.NativeClassPtr);
		ChangeDurabilityDebugEvent.NativeFieldInfoPtr_EquipmentType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangeDurabilityDebugEvent>.NativeClassPtr, "EquipmentType");
		ChangeDurabilityDebugEvent.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangeDurabilityDebugEvent>.NativeClassPtr, "Amount");
		ChangeDurabilityDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChangeDurabilityDebugEvent>.NativeClassPtr, 100684469);
		ChangeDurabilityDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChangeDurabilityDebugEvent>.NativeClassPtr, 100684470);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292948, RefRangeEnd = 292949, XrefRangeStart = 292942, XrefRangeEnd = 292948, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChangeDurabilityDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292955, RefRangeEnd = 292956, XrefRangeStart = 292949, XrefRangeEnd = 292955, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChangeDurabilityDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChangeDurabilityDebugEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EquipmentType;
	private static readonly IntPtr NativeFieldInfoPtr_Amount;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public EquipmentType EquipmentType;
	[FieldOffset(4)]
	public float Amount;
}
