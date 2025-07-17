---
nav_exclude: true
search_exclude: true
---

# StopCharacterCraftItemEvent

```csharp
[StructLayout(2)]
public struct StopCharacterCraftItemEvent
{
	static StopCharacterCraftItemEvent()
	{
		Il2CppClassPointerStore<StopCharacterCraftItemEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "StopCharacterCraftItemEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StopCharacterCraftItemEvent>.NativeClassPtr);
		StopCharacterCraftItemEvent.NativeFieldInfoPtr_RecipeGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StopCharacterCraftItemEvent>.NativeClassPtr, "RecipeGuid");
		StopCharacterCraftItemEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StopCharacterCraftItemEvent>.NativeClassPtr, 100684357);
		StopCharacterCraftItemEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StopCharacterCraftItemEvent>.NativeClassPtr, 100684358);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292106, RefRangeEnd = 292107, XrefRangeStart = 292101, XrefRangeEnd = 292106, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StopCharacterCraftItemEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292112, RefRangeEnd = 292113, XrefRangeStart = 292107, XrefRangeEnd = 292112, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StopCharacterCraftItemEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StopCharacterCraftItemEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RecipeGuid;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public PrefabGUID RecipeGuid;
}
