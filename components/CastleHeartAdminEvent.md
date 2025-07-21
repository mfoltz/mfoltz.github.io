---
nav_exclude: true
search_exclude: false
---

# CastleHeartAdminEvent

```csharp
public struct CastleHeartAdminEvent
{
	static CastleHeartAdminEvent()
	{
		Il2CppClassPointerStore<CastleHeartAdminEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "CastleHeartAdminEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleHeartAdminEvent>.NativeClassPtr);
		CastleHeartAdminEvent.NativeFieldInfoPtr_CastleHeart = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleHeartAdminEvent>.NativeClassPtr, "CastleHeart");
		CastleHeartAdminEvent.NativeFieldInfoPtr_EventType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleHeartAdminEvent>.NativeClassPtr, "EventType");
		CastleHeartAdminEvent.NativeFieldInfoPtr_UserIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleHeartAdminEvent>.NativeClassPtr, "UserIndex");
		CastleHeartAdminEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleHeartAdminEvent>.NativeClassPtr, 100684407);
		CastleHeartAdminEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleHeartAdminEvent>.NativeClassPtr, 100684408);
	}

	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleHeartAdminEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleHeartAdminEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleHeartAdminEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CastleHeart;
	private static readonly IntPtr NativeFieldInfoPtr_EventType;
	private static readonly IntPtr NativeFieldInfoPtr_UserIndex;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;

	public NetworkId CastleHeart;

	public CastleHeartInteractEventType EventType;

	public int UserIndex;
}
```
