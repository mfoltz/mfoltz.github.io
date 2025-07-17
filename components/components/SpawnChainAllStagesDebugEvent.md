---
nav_exclude: true
search_exclude: true
---

# SpawnChainAllStagesDebugEvent

```csharp
[StructLayout(2)]
public struct SpawnChainAllStagesDebugEvent
{
	static SpawnChainAllStagesDebugEvent()
	{
		Il2CppClassPointerStore<SpawnChainAllStagesDebugEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "SpawnChainAllStagesDebugEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnChainAllStagesDebugEvent>.NativeClassPtr);
		SpawnChainAllStagesDebugEvent.NativeFieldInfoPtr_PrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnChainAllStagesDebugEvent>.NativeClassPtr, "PrefabGuid");
		SpawnChainAllStagesDebugEvent.NativeFieldInfoPtr_MouseWorldPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnChainAllStagesDebugEvent>.NativeClassPtr, "MouseWorldPosition");
		SpawnChainAllStagesDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpawnChainAllStagesDebugEvent>.NativeClassPtr, 100684167);
		SpawnChainAllStagesDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpawnChainAllStagesDebugEvent>.NativeClassPtr, 100684168);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 290716, RefRangeEnd = 290717, XrefRangeStart = 290701, XrefRangeEnd = 290716, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpawnChainAllStagesDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 290732, RefRangeEnd = 290733, XrefRangeStart = 290717, XrefRangeEnd = 290732, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpawnChainAllStagesDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnChainAllStagesDebugEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_MouseWorldPosition;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public PrefabGUID PrefabGuid;
	[FieldOffset(4)]
	public float3 MouseWorldPosition;
}
