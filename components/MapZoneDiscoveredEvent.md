---
nav_exclude: true
search_exclude: false
---

# MapZoneDiscoveredEvent

```csharp
public struct MapZoneDiscoveredEvent
{
	static MapZoneDiscoveredEvent()
	{
		Il2CppClassPointerStore<MapZoneDiscoveredEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "MapZoneDiscoveredEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MapZoneDiscoveredEvent>.NativeClassPtr);
		MapZoneDiscoveredEvent.NativeFieldInfoPtr_ZoneId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneDiscoveredEvent>.NativeClassPtr, "ZoneId");
		MapZoneDiscoveredEvent.NativeFieldInfoPtr_ShowDiscoveredAnnouncement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneDiscoveredEvent>.NativeClassPtr, "ShowDiscoveredAnnouncement");
		MapZoneDiscoveredEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MapZoneDiscoveredEvent>.NativeClassPtr, 100684640);
		MapZoneDiscoveredEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MapZoneDiscoveredEvent>.NativeClassPtr, 100684641);
	}

	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MapZoneDiscoveredEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MapZoneDiscoveredEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MapZoneDiscoveredEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ZoneId;
	private static readonly IntPtr NativeFieldInfoPtr_ShowDiscoveredAnnouncement;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;

	public MapZoneId ZoneId;

	public bool ShowDiscoveredAnnouncement;
}
```

## Client Systems

- [AnnouncementHUDEventsSystem](/systems/client/AnnouncementHUDEventsSystem)
- [DiscoveredMapZonesClientSystem](/systems/client/DiscoveredMapZonesClientSystem)
- [RevealDiscoveredMapZonePresentationSystem](/systems/client/RevealDiscoveredMapZonePresentationSystem)
