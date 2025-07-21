---
nav_exclude: true
search_exclude: false
---

# SendOnMissionEvent

```csharp
public struct SendOnMissionEvent
{
	static SendOnMissionEvent()
	{
		Il2CppClassPointerStore<SendOnMissionEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "SendOnMissionEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SendOnMissionEvent>.NativeClassPtr);
		SendOnMissionEvent.NativeFieldInfoPtr_Throne = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SendOnMissionEvent>.NativeClassPtr, "Throne");
		SendOnMissionEvent.NativeFieldInfoPtr_Servant1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SendOnMissionEvent>.NativeClassPtr, "Servant1");
		SendOnMissionEvent.NativeFieldInfoPtr_Servant2 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SendOnMissionEvent>.NativeClassPtr, "Servant2");
		SendOnMissionEvent.NativeFieldInfoPtr_Servant3 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SendOnMissionEvent>.NativeClassPtr, "Servant3");
		SendOnMissionEvent.NativeFieldInfoPtr_MissionDataID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SendOnMissionEvent>.NativeClassPtr, "MissionDataID");
		SendOnMissionEvent.NativeFieldInfoPtr_MapZoneId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SendOnMissionEvent>.NativeClassPtr, "MapZoneId");
		SendOnMissionEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SendOnMissionEvent>.NativeClassPtr, 100684367);
		SendOnMissionEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SendOnMissionEvent>.NativeClassPtr, 100684368);
	}

	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SendOnMissionEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SendOnMissionEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SendOnMissionEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Throne;
	private static readonly IntPtr NativeFieldInfoPtr_Servant1;
	private static readonly IntPtr NativeFieldInfoPtr_Servant2;
	private static readonly IntPtr NativeFieldInfoPtr_Servant3;
	private static readonly IntPtr NativeFieldInfoPtr_MissionDataID;
	private static readonly IntPtr NativeFieldInfoPtr_MapZoneId;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;

	public NetworkId Throne;

	public NetworkId Servant1;

	public NetworkId Servant2;

	public NetworkId Servant3;

	public int MissionDataID;

	public MapZoneId MapZoneId;
}
```
