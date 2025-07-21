---
nav_exclude: true
search_exclude: false
---

# WarEvent_ClosePortalEvent

```csharp
public struct WarEvent_ClosePortalEvent
{
	static WarEvent_ClosePortalEvent()
	{
		Il2CppClassPointerStore<WarEvent_ClosePortalEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "WarEvent_ClosePortalEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WarEvent_ClosePortalEvent>.NativeClassPtr);
		WarEvent_ClosePortalEvent.NativeFieldInfoPtr_Coordinate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ClosePortalEvent>.NativeClassPtr, "Coordinate");
		WarEvent_ClosePortalEvent.NativeFieldInfoPtr_AllPortals = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ClosePortalEvent>.NativeClassPtr, "AllPortals");
		WarEvent_ClosePortalEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WarEvent_ClosePortalEvent>.NativeClassPtr, 100684523);
		WarEvent_ClosePortalEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WarEvent_ClosePortalEvent>.NativeClassPtr, 100684524);
	}

	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WarEvent_ClosePortalEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WarEvent_ClosePortalEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WarEvent_ClosePortalEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Coordinate;
	private static readonly IntPtr NativeFieldInfoPtr_AllPortals;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;

	public TerrainChunk Coordinate;

	public bool AllPortals;
}
```
