# SetTileModelVariationEvent

```csharp
[StructLayout(2)]
public struct SetTileModelVariationEvent
{
	static SetTileModelVariationEvent()
	{
		Il2CppClassPointerStore<SetTileModelVariationEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "SetTileModelVariationEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SetTileModelVariationEvent>.NativeClassPtr);
		SetTileModelVariationEvent.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SetTileModelVariationEvent>.NativeClassPtr, "Target");
		SetTileModelVariationEvent.NativeFieldInfoPtr_VariationIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SetTileModelVariationEvent>.NativeClassPtr, "VariationIndex");
		SetTileModelVariationEvent.NativeFieldInfoPtr_WallpaperOrientation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SetTileModelVariationEvent>.NativeClassPtr, "WallpaperOrientation");
		SetTileModelVariationEvent.NativeMethodInfoPtr_ProjectM_Network_INetworkEventWithTarget_get_Target_Private_Virtual_Final_New_get_NetworkId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SetTileModelVariationEvent>.NativeClassPtr, 100670579);
		SetTileModelVariationEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SetTileModelVariationEvent>.NativeClassPtr, 100670580);
		SetTileModelVariationEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SetTileModelVariationEvent>.NativeClassPtr, 100670581);
	}
	public unsafe NetworkId Target
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SetTileModelVariationEvent.NativeMethodInfoPtr_ProjectM_Network_INetworkEventWithTarget_get_Target_Private_Virtual_Final_New_get_NetworkId_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 113526, RefRangeEnd = 113527, XrefRangeStart = 113517, XrefRangeEnd = 113526, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SetTileModelVariationEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 113536, RefRangeEnd = 113537, XrefRangeStart = 113527, XrefRangeEnd = 113536, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SetTileModelVariationEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SetTileModelVariationEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_VariationIndex;
	private static readonly IntPtr NativeFieldInfoPtr_WallpaperOrientation;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_Network_INetworkEventWithTarget_get_Target_Private_Virtual_Final_New_get_NetworkId_0;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public NetworkId Target;
	[FieldOffset(12)]
	public byte VariationIndex;
	[FieldOffset(13)]
	public WallpaperOrientation WallpaperOrientation;
}
