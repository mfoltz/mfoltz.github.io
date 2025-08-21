---
nav_exclude: true
search_exclude: true
---

```csharp
public struct DismantleTileModelEvent
{
	static DismantleTileModelEvent()
	{
		Il2CppClassPointerStore<DismantleTileModelEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DismantleTileModelEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DismantleTileModelEvent>.NativeClassPtr);
		DismantleTileModelEvent.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DismantleTileModelEvent>.NativeClassPtr, "Target");
		DismantleTileModelEvent.NativeMethodInfoPtr_ProjectM_Network_INetworkEventWithTarget_get_Target_Private_Virtual_Final_New_get_NetworkId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DismantleTileModelEvent>.NativeClassPtr, 100670570);
		DismantleTileModelEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DismantleTileModelEvent>.NativeClassPtr, 100670571);
		DismantleTileModelEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DismantleTileModelEvent>.NativeClassPtr, 100670572);
	}
	public unsafe NetworkId Target
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DismantleTileModelEvent.NativeMethodInfoPtr_ProjectM_Network_INetworkEventWithTarget_get_Target_Private_Virtual_Final_New_get_NetworkId_0, ref this, (void**)ptr, ref intPtr2);
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
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DismantleTileModelEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DismantleTileModelEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DismantleTileModelEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_Network_INetworkEventWithTarget_get_Target_Private_Virtual_Final_New_get_NetworkId_0;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;

	public NetworkId Target;
}
```

## Server Systems

- [PlaceTileModelSystem]({{% relref "systems/server/PlaceTileModelSystem.md" %}})
