---
nav_exclude: true
search_exclude: true
---

# CharacterRespawnEvent

```csharp
[StructLayout(2)]
public struct CharacterRespawnEvent
{
	static CharacterRespawnEvent()
	{
		Il2CppClassPointerStore<CharacterRespawnEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "CharacterRespawnEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CharacterRespawnEvent>.NativeClassPtr);
		CharacterRespawnEvent.NativeFieldInfoPtr_SpawnLocationType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterRespawnEvent>.NativeClassPtr, "SpawnLocationType");
		CharacterRespawnEvent.NativeFieldInfoPtr_SpawnOptionIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterRespawnEvent>.NativeClassPtr, "SpawnOptionIndex");
		CharacterRespawnEvent.NativeFieldInfoPtr_SpawnLocationIcon = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterRespawnEvent>.NativeClassPtr, "SpawnLocationIcon");
		CharacterRespawnEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CharacterRespawnEvent>.NativeClassPtr, 100684429);
		CharacterRespawnEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CharacterRespawnEvent>.NativeClassPtr, 100684430);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292741, RefRangeEnd = 292742, XrefRangeStart = 292732, XrefRangeEnd = 292741, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CharacterRespawnEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292751, RefRangeEnd = 292752, XrefRangeStart = 292742, XrefRangeEnd = 292751, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CharacterRespawnEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CharacterRespawnEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnLocationType;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnOptionIndex;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnLocationIcon;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public SpawnLocationType SpawnLocationType;
	[FieldOffset(4)]
	public int SpawnOptionIndex;
	[FieldOffset(8)]
	public NetworkId SpawnLocationIcon;
}
