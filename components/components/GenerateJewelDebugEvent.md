---
nav_exclude: true
search_exclude: true
---

# GenerateJewelDebugEvent

```csharp
[StructLayout(2)]
public struct GenerateJewelDebugEvent
{
	static GenerateJewelDebugEvent()
	{
		Il2CppClassPointerStore<GenerateJewelDebugEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "GenerateJewelDebugEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GenerateJewelDebugEvent>.NativeClassPtr);
		GenerateJewelDebugEvent.NativeFieldInfoPtr_AbilityPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenerateJewelDebugEvent>.NativeClassPtr, "AbilityPrefabGuid");
		GenerateJewelDebugEvent.NativeFieldInfoPtr_Tier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenerateJewelDebugEvent>.NativeClassPtr, "Tier");
		GenerateJewelDebugEvent.NativeFieldInfoPtr_Power = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenerateJewelDebugEvent>.NativeClassPtr, "Power");
		GenerateJewelDebugEvent.NativeFieldInfoPtr_AllVariants = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenerateJewelDebugEvent>.NativeClassPtr, "AllVariants");
		GenerateJewelDebugEvent.NativeFieldInfoPtr_Equip = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenerateJewelDebugEvent>.NativeClassPtr, "Equip");
		GenerateJewelDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GenerateJewelDebugEvent>.NativeClassPtr, 100684179);
		GenerateJewelDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GenerateJewelDebugEvent>.NativeClassPtr, 100684180);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 290945, RefRangeEnd = 290946, XrefRangeStart = 290929, XrefRangeEnd = 290945, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GenerateJewelDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 290960, RefRangeEnd = 290961, XrefRangeStart = 290946, XrefRangeEnd = 290960, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GenerateJewelDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GenerateJewelDebugEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbilityPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_Tier;
	private static readonly IntPtr NativeFieldInfoPtr_Power;
	private static readonly IntPtr NativeFieldInfoPtr_AllVariants;
	private static readonly IntPtr NativeFieldInfoPtr_Equip;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public PrefabGUID AbilityPrefabGuid;
	[FieldOffset(4)]
	public int Tier;
	[FieldOffset(8)]
	public float Power;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool AllVariants;
	[FieldOffset(13)]
	[MarshalAs(4)]
	public bool Equip;
}
