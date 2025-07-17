---
nav_exclude: true
search_exclude: true
---

# CreateJewelDebugEvent

```csharp
[StructLayout(2)]
public struct CreateJewelDebugEvent
{
	static CreateJewelDebugEvent()
	{
		Il2CppClassPointerStore<CreateJewelDebugEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "CreateJewelDebugEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateJewelDebugEvent>.NativeClassPtr);
		CreateJewelDebugEvent.NativeFieldInfoPtr_AbilityPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateJewelDebugEvent>.NativeClassPtr, "AbilityPrefabGuid");
		CreateJewelDebugEvent.NativeFieldInfoPtr_SpellModGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateJewelDebugEvent>.NativeClassPtr, "SpellModGuid");
		CreateJewelDebugEvent.NativeFieldInfoPtr_Tier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateJewelDebugEvent>.NativeClassPtr, "Tier");
		CreateJewelDebugEvent.NativeFieldInfoPtr_Power = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateJewelDebugEvent>.NativeClassPtr, "Power");
		CreateJewelDebugEvent.NativeFieldInfoPtr_Equip = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateJewelDebugEvent>.NativeClassPtr, "Equip");
		CreateJewelDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CreateJewelDebugEvent>.NativeClassPtr, 100684175);
		CreateJewelDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CreateJewelDebugEvent>.NativeClassPtr, 100684176);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 290849, RefRangeEnd = 290850, XrefRangeStart = 290833, XrefRangeEnd = 290849, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CreateJewelDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 290865, RefRangeEnd = 290866, XrefRangeStart = 290850, XrefRangeEnd = 290865, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CreateJewelDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateJewelDebugEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbilityPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_SpellModGuid;
	private static readonly IntPtr NativeFieldInfoPtr_Tier;
	private static readonly IntPtr NativeFieldInfoPtr_Power;
	private static readonly IntPtr NativeFieldInfoPtr_Equip;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public PrefabGUID AbilityPrefabGuid;
	[FieldOffset(4)]
	public PrefabGUID SpellModGuid;
	[FieldOffset(8)]
	public int Tier;
	[FieldOffset(12)]
	public float Power;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool Equip;
}
