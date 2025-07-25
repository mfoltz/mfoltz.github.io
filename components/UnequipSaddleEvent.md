---
nav_exclude: true
search_exclude: true
---

# UnequipSaddleEvent

```csharp
public struct UnequipSaddleEvent
{
	static UnequipSaddleEvent()
	{
		Il2CppClassPointerStore<UnequipSaddleEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "UnequipSaddleEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnequipSaddleEvent>.NativeClassPtr);
		UnequipSaddleEvent.NativeFieldInfoPtr_MountTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnequipSaddleEvent>.NativeClassPtr, "MountTarget");
		UnequipSaddleEvent.NativeFieldInfoPtr_ToSlotIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnequipSaddleEvent>.NativeClassPtr, "ToSlotIndex");
		UnequipSaddleEvent.NativeMethodInfoPtr_ProjectM_Network_INetworkEventWithTarget_get_Target_Private_Virtual_Final_New_get_NetworkId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnequipSaddleEvent>.NativeClassPtr, 100684288);
		UnequipSaddleEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnequipSaddleEvent>.NativeClassPtr, 100684289);
		UnequipSaddleEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnequipSaddleEvent>.NativeClassPtr, 100684290);
	}
	public unsafe NetworkId Target
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnequipSaddleEvent.NativeMethodInfoPtr_ProjectM_Network_INetworkEventWithTarget_get_Target_Private_Virtual_Final_New_get_NetworkId_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}

	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnequipSaddleEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnequipSaddleEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnequipSaddleEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MountTarget;
	private static readonly IntPtr NativeFieldInfoPtr_ToSlotIndex;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_Network_INetworkEventWithTarget_get_Target_Private_Virtual_Final_New_get_NetworkId_0;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;

	public NetworkId MountTarget;

	public int ToSlotIndex;
}
```
