# MoveTileModelEvent

```csharp
[StructLayout(2)]
public struct MoveTileModelEvent
{
	static MoveTileModelEvent()
	{
		Il2CppClassPointerStore<MoveTileModelEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "MoveTileModelEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MoveTileModelEvent>.NativeClassPtr);
		MoveTileModelEvent.NativeFieldInfoPtr_NewTranslation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveTileModelEvent>.NativeClassPtr, "NewTranslation");
		MoveTileModelEvent.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveTileModelEvent>.NativeClassPtr, "Target");
		MoveTileModelEvent.NativeFieldInfoPtr_NewTileRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveTileModelEvent>.NativeClassPtr, "NewTileRotation");
		MoveTileModelEvent.NativeMethodInfoPtr_ProjectM_Network_INetworkEventWithTarget_get_Target_Private_Virtual_Final_New_get_NetworkId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MoveTileModelEvent>.NativeClassPtr, 100670567);
		MoveTileModelEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MoveTileModelEvent>.NativeClassPtr, 100670568);
		MoveTileModelEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MoveTileModelEvent>.NativeClassPtr, 100670569);
	}
	public unsafe NetworkId Target
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MoveTileModelEvent.NativeMethodInfoPtr_ProjectM_Network_INetworkEventWithTarget_get_Target_Private_Virtual_Final_New_get_NetworkId_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 113454, RefRangeEnd = 113455, XrefRangeStart = 113437, XrefRangeEnd = 113454, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MoveTileModelEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 113472, RefRangeEnd = 113473, XrefRangeStart = 113455, XrefRangeEnd = 113472, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MoveTileModelEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MoveTileModelEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_NewTranslation;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_NewTileRotation;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_Network_INetworkEventWithTarget_get_Target_Private_Virtual_Final_New_get_NetworkId_0;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public Translation NewTranslation;
	[FieldOffset(12)]
	public NetworkId Target;
	[FieldOffset(24)]
	public TileRotation NewTileRotation;
}
