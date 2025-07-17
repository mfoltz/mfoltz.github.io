---
nav_exclude: true
search_exclude: true
---

# InteractWithPrisonerEvent

```csharp
[StructLayout(2)]
public struct InteractWithPrisonerEvent
{
	static InteractWithPrisonerEvent()
	{
		Il2CppClassPointerStore<InteractWithPrisonerEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "InteractWithPrisonerEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<InteractWithPrisonerEvent>.NativeClassPtr);
		InteractWithPrisonerEvent.NativeFieldInfoPtr_Prison = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InteractWithPrisonerEvent>.NativeClassPtr, "Prison");
		InteractWithPrisonerEvent.NativeFieldInfoPtr_PrisonInteraction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InteractWithPrisonerEvent>.NativeClassPtr, "PrisonInteraction");
		InteractWithPrisonerEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<InteractWithPrisonerEvent>.NativeClassPtr, 100684363);
		InteractWithPrisonerEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<InteractWithPrisonerEvent>.NativeClassPtr, 100684364);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292143, RefRangeEnd = 292144, XrefRangeStart = 292137, XrefRangeEnd = 292143, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(InteractWithPrisonerEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292150, RefRangeEnd = 292151, XrefRangeStart = 292144, XrefRangeEnd = 292150, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(InteractWithPrisonerEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<InteractWithPrisonerEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Prison;
	private static readonly IntPtr NativeFieldInfoPtr_PrisonInteraction;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public NetworkId Prison;
	[FieldOffset(12)]
	public EventHelper.PrisonInteraction PrisonInteraction;
}
