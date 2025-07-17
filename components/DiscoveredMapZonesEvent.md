---
nav_exclude: true
search_exclude: true
---

# DiscoveredMapZonesEvent

```csharp
[StructLayout(2)]
public struct DiscoveredMapZonesEvent
{
	static DiscoveredMapZonesEvent()
	{
		Il2CppClassPointerStore<DiscoveredMapZonesEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DiscoveredMapZonesEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DiscoveredMapZonesEvent>.NativeClassPtr);
		DiscoveredMapZonesEvent.NativeFieldInfoPtr_MAX_ZONES = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DiscoveredMapZonesEvent>.NativeClassPtr, "MAX_ZONES");
		DiscoveredMapZonesEvent.NativeFieldInfoPtr_MapZoneDataLength = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DiscoveredMapZonesEvent>.NativeClassPtr, "MapZoneDataLength");
		DiscoveredMapZonesEvent.NativeFieldInfoPtr_MAX_DATA_LENGTH_BYTES = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DiscoveredMapZonesEvent>.NativeClassPtr, "MAX_DATA_LENGTH_BYTES");
		DiscoveredMapZonesEvent.NativeFieldInfoPtr_MapZoneData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DiscoveredMapZonesEvent>.NativeClassPtr, "MapZoneData");
		DiscoveredMapZonesEvent.NativeMethodInfoPtr_CreateEvent_Public_Static_DiscoveredMapZonesEvent_DynamicBuffer_1_DiscoveredMapZoneElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DiscoveredMapZonesEvent>.NativeClassPtr, 100672654);
		DiscoveredMapZonesEvent.NativeMethodInfoPtr_ReadEvent_Public_Static_Void_byref_DiscoveredMapZonesEvent_DynamicBuffer_1_DiscoveredMapZoneElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DiscoveredMapZonesEvent>.NativeClassPtr, 100672655);
		DiscoveredMapZonesEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DiscoveredMapZonesEvent>.NativeClassPtr, 100672656);
		DiscoveredMapZonesEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DiscoveredMapZonesEvent>.NativeClassPtr, 100672657);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 143353, RefRangeEnd = 143354, XrefRangeStart = 143298, XrefRangeEnd = 143353, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static DiscoveredMapZonesEvent CreateEvent(DynamicBuffer<DiscoveredMapZoneElement> discoveredMapZoneElements)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref discoveredMapZoneElements;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DiscoveredMapZonesEvent.NativeMethodInfoPtr_CreateEvent_Public_Static_DiscoveredMapZonesEvent_DynamicBuffer_1_DiscoveredMapZoneElement_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 143387, RefRangeEnd = 143388, XrefRangeStart = 143354, XrefRangeEnd = 143387, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void ReadEvent([In] ref DiscoveredMapZonesEvent discoveredMapZonesEvent, DynamicBuffer<DiscoveredMapZoneElement> discoveredMapZoneElements)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &discoveredMapZonesEvent;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref discoveredMapZoneElements;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DiscoveredMapZonesEvent.NativeMethodInfoPtr_ReadEvent_Public_Static_Void_byref_DiscoveredMapZonesEvent_DynamicBuffer_1_DiscoveredMapZoneElement_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 143396, RefRangeEnd = 143397, XrefRangeStart = 143388, XrefRangeEnd = 143396, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DiscoveredMapZonesEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 143407, RefRangeEnd = 143408, XrefRangeStart = 143397, XrefRangeEnd = 143407, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DiscoveredMapZonesEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DiscoveredMapZonesEvent>.NativeClassPtr, ref this));
	}
	public unsafe static int MAX_ZONES
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(DiscoveredMapZonesEvent.NativeFieldInfoPtr_MAX_ZONES, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(DiscoveredMapZonesEvent.NativeFieldInfoPtr_MAX_ZONES, (void*)(&value));
		}
	}
	public unsafe static int MAX_DATA_LENGTH_BYTES
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(DiscoveredMapZonesEvent.NativeFieldInfoPtr_MAX_DATA_LENGTH_BYTES, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(DiscoveredMapZonesEvent.NativeFieldInfoPtr_MAX_DATA_LENGTH_BYTES, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_MAX_ZONES;
	private static readonly IntPtr NativeFieldInfoPtr_MapZoneDataLength;
	private static readonly IntPtr NativeFieldInfoPtr_MAX_DATA_LENGTH_BYTES;
	private static readonly IntPtr NativeFieldInfoPtr_MapZoneData;
	private static readonly IntPtr NativeMethodInfoPtr_CreateEvent_Public_Static_DiscoveredMapZonesEvent_DynamicBuffer_1_DiscoveredMapZoneElement_0;
	private static readonly IntPtr NativeMethodInfoPtr_ReadEvent_Public_Static_Void_byref_DiscoveredMapZonesEvent_DynamicBuffer_1_DiscoveredMapZoneElement_0;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public int MapZoneDataLength;
	[FieldOffset(4)]
	public DiscoveredMapZonesEvent._MapZoneData_e__FixedBuffer MapZoneData;
	[ObfuscatedName("ProjectM.DiscoveredMapZonesEvent+<MapZoneData>e__FixedBuffer")]
	[StructLayout(2)]
	public struct _MapZoneData_e__FixedBuffer
	{
		static _MapZoneData_e__FixedBuffer()
		{
			Il2CppClassPointerStore<DiscoveredMapZonesEvent._MapZoneData_e__FixedBuffer>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<DiscoveredMapZonesEvent>.NativeClassPtr, "<MapZoneData>e__FixedBuffer");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DiscoveredMapZonesEvent._MapZoneData_e__FixedBuffer>.NativeClassPtr);
			DiscoveredMapZonesEvent._MapZoneData_e__FixedBuffer.NativeFieldInfoPtr_FixedElementField = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DiscoveredMapZonesEvent._MapZoneData_e__FixedBuffer>.NativeClassPtr, "FixedElementField");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DiscoveredMapZonesEvent._MapZoneData_e__FixedBuffer>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_FixedElementField;
		[FieldOffset(0)]
		public byte FixedElementField;
	}
}
