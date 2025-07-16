# GetTerritoryOwnerResponseEvent

```csharp
[StructLayout(2)]
public struct GetTerritoryOwnerResponseEvent
{
	static GetTerritoryOwnerResponseEvent()
	{
		Il2CppClassPointerStore<GetTerritoryOwnerResponseEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "GetTerritoryOwnerResponseEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GetTerritoryOwnerResponseEvent>.NativeClassPtr);
		GetTerritoryOwnerResponseEvent.NativeFieldInfoPtr_TerritoryIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetTerritoryOwnerResponseEvent>.NativeClassPtr, "TerritoryIndex");
		GetTerritoryOwnerResponseEvent.NativeFieldInfoPtr_CharacterName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetTerritoryOwnerResponseEvent>.NativeClassPtr, "CharacterName");
		GetTerritoryOwnerResponseEvent.NativeFieldInfoPtr_PlatformId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetTerritoryOwnerResponseEvent>.NativeClassPtr, "PlatformId");
		GetTerritoryOwnerResponseEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GetTerritoryOwnerResponseEvent>.NativeClassPtr, 100684646);
		GetTerritoryOwnerResponseEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GetTerritoryOwnerResponseEvent>.NativeClassPtr, 100684647);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 294350, RefRangeEnd = 294351, XrefRangeStart = 294341, XrefRangeEnd = 294350, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GetTerritoryOwnerResponseEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 294358, RefRangeEnd = 294359, XrefRangeStart = 294351, XrefRangeEnd = 294358, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GetTerritoryOwnerResponseEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GetTerritoryOwnerResponseEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TerritoryIndex;
	private static readonly IntPtr NativeFieldInfoPtr_CharacterName;
	private static readonly IntPtr NativeFieldInfoPtr_PlatformId;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public int TerritoryIndex;
	[FieldOffset(4)]
	public FixedString64Bytes CharacterName;
	[FieldOffset(72)]
	public ulong PlatformId;
}
