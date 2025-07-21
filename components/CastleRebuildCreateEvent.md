---
nav_exclude: true
search_exclude: false
---

# CastleRebuildCreateEvent

```csharp
public struct CastleRebuildCreateEvent
{
	static CastleRebuildCreateEvent()
	{
		Il2CppClassPointerStore<CastleRebuildCreateEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "CastleRebuildCreateEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildCreateEvent>.NativeClassPtr);
		CastleRebuildCreateEvent.NativeFieldInfoPtr_RebuildTerritory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildCreateEvent>.NativeClassPtr, "RebuildTerritory");
		CastleRebuildCreateEvent.NativeFieldInfoPtr_SourceTerritory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildCreateEvent>.NativeClassPtr, "SourceTerritory");
		CastleRebuildCreateEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildCreateEvent>.NativeClassPtr, 100684695);
		CastleRebuildCreateEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildCreateEvent>.NativeClassPtr, 100684696);
		CastleRebuildCreateEvent.NativeMethodInfoPtr_GetRebuildTerritory_Public_Virtual_Final_New_MapZoneId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildCreateEvent>.NativeClassPtr, 100684697);
	}

	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildCreateEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildCreateEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe MapZoneId GetRebuildTerritory()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildCreateEvent.NativeMethodInfoPtr_GetRebuildTerritory_Public_Virtual_Final_New_MapZoneId_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildCreateEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RebuildTerritory;
	private static readonly IntPtr NativeFieldInfoPtr_SourceTerritory;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetRebuildTerritory_Public_Virtual_Final_New_MapZoneId_0;

	public MapZoneId RebuildTerritory;

	public MapZoneId SourceTerritory;
}
```

## Client Systems

- [CastleRebuildSystem_Client](/systems/client/CastleRebuildSystem_Client)
