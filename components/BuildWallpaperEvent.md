---
nav_exclude: true
search_exclude: true
---

# BuildWallpaperEvent

```csharp
[StructLayout(2)]
public struct BuildWallpaperEvent
{
	static BuildWallpaperEvent()
	{
		Il2CppClassPointerStore<BuildWallpaperEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "BuildWallpaperEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuildWallpaperEvent>.NativeClassPtr);
		BuildWallpaperEvent.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildWallpaperEvent>.NativeClassPtr, "Target");
		BuildWallpaperEvent.NativeFieldInfoPtr_NewParentBlueprint = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildWallpaperEvent>.NativeClassPtr, "NewParentBlueprint");
		BuildWallpaperEvent.NativeFieldInfoPtr_Orientation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildWallpaperEvent>.NativeClassPtr, "Orientation");
		BuildWallpaperEvent.NativeFieldInfoPtr_VariationIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildWallpaperEvent>.NativeClassPtr, "VariationIndex");
		BuildWallpaperEvent.NativeMethodInfoPtr_ProjectM_Network_INetworkEventWithTarget_get_Target_Private_Virtual_Final_New_get_NetworkId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BuildWallpaperEvent>.NativeClassPtr, 100670576);
		BuildWallpaperEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BuildWallpaperEvent>.NativeClassPtr, 100670577);
		BuildWallpaperEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BuildWallpaperEvent>.NativeClassPtr, 100670578);
	}
	public unsafe NetworkId Target
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BuildWallpaperEvent.NativeMethodInfoPtr_ProjectM_Network_INetworkEventWithTarget_get_Target_Private_Virtual_Final_New_get_NetworkId_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 113504, RefRangeEnd = 113505, XrefRangeStart = 113493, XrefRangeEnd = 113504, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BuildWallpaperEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 113516, RefRangeEnd = 113517, XrefRangeStart = 113505, XrefRangeEnd = 113516, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BuildWallpaperEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuildWallpaperEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_NewParentBlueprint;
	private static readonly IntPtr NativeFieldInfoPtr_Orientation;
	private static readonly IntPtr NativeFieldInfoPtr_VariationIndex;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_Network_INetworkEventWithTarget_get_Target_Private_Virtual_Final_New_get_NetworkId_0;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public NetworkId Target;
	[FieldOffset(12)]
	public PrefabGUID NewParentBlueprint;
	[FieldOffset(16)]
	public WallpaperOrientation Orientation;
	[FieldOffset(17)]
	public byte VariationIndex;
}
