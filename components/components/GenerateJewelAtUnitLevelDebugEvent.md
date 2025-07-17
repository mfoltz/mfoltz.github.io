---
nav_exclude: true
search_exclude: true
---

# GenerateJewelAtUnitLevelDebugEvent

```csharp
[StructLayout(2)]
public struct GenerateJewelAtUnitLevelDebugEvent
{
	static GenerateJewelAtUnitLevelDebugEvent()
	{
		Il2CppClassPointerStore<GenerateJewelAtUnitLevelDebugEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "GenerateJewelAtUnitLevelDebugEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GenerateJewelAtUnitLevelDebugEvent>.NativeClassPtr);
		GenerateJewelAtUnitLevelDebugEvent.NativeFieldInfoPtr_UnitLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenerateJewelAtUnitLevelDebugEvent>.NativeClassPtr, "UnitLevel");
		GenerateJewelAtUnitLevelDebugEvent.NativeFieldInfoPtr_Power = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenerateJewelAtUnitLevelDebugEvent>.NativeClassPtr, "Power");
		GenerateJewelAtUnitLevelDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GenerateJewelAtUnitLevelDebugEvent>.NativeClassPtr, 100684185);
		GenerateJewelAtUnitLevelDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GenerateJewelAtUnitLevelDebugEvent>.NativeClassPtr, 100684186);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 291049, RefRangeEnd = 291050, XrefRangeStart = 291043, XrefRangeEnd = 291049, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GenerateJewelAtUnitLevelDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 291056, RefRangeEnd = 291057, XrefRangeStart = 291050, XrefRangeEnd = 291056, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GenerateJewelAtUnitLevelDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GenerateJewelAtUnitLevelDebugEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UnitLevel;
	private static readonly IntPtr NativeFieldInfoPtr_Power;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public int UnitLevel;
	[FieldOffset(4)]
	public float Power;
}
