---
nav_exclude: true
search_exclude: true
---

# RevealedMapEvent

```csharp
public struct RevealedMapEvent
{
	static RevealedMapEvent()
	{
		Il2CppClassPointerStore<RevealedMapEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RevealedMapEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RevealedMapEvent>.NativeClassPtr);
		RevealedMapEvent.NativeFieldInfoPtr_WorldZoneId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RevealedMapEvent>.NativeClassPtr, "WorldZoneId");
		RevealedMapEvent.NativeFieldInfoPtr_RevealedElementList = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RevealedMapEvent>.NativeClassPtr, "RevealedElementList");
		RevealedMapEvent.NativeMethodInfoPtr_CreateEvent_Public_Static_RevealedMapEvent_WorldZoneId_NativeArray_1_UserMapZonePackedRevealElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RevealedMapEvent>.NativeClassPtr, 100672684);
		RevealedMapEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RevealedMapEvent>.NativeClassPtr, 100672685);
		RevealedMapEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RevealedMapEvent>.NativeClassPtr, 100672686);
	}

	public unsafe static RevealedMapEvent CreateEvent(WorldZoneId worldZoneId, NativeArray<UserMapZonePackedRevealElement> revealedBuffer)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldZoneId;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref revealedBuffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RevealedMapEvent.NativeMethodInfoPtr_CreateEvent_Public_Static_RevealedMapEvent_WorldZoneId_NativeArray_1_UserMapZonePackedRevealElement_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RevealedMapEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RevealedMapEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RevealedMapEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WorldZoneId;
	private static readonly IntPtr NativeFieldInfoPtr_RevealedElementList;
	private static readonly IntPtr NativeMethodInfoPtr_CreateEvent_Public_Static_RevealedMapEvent_WorldZoneId_NativeArray_1_UserMapZonePackedRevealElement_0;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;

	public WorldZoneId WorldZoneId;

	public NativeArray<UserMapZonePackedRevealElement> RevealedElementList;
}
```
