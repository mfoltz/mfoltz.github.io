---
nav_exclude: true
search_exclude: false
---

# KillEvent

```csharp
public struct KillEvent
{
	static KillEvent()
	{
		Il2CppClassPointerStore<KillEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "KillEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<KillEvent>.NativeClassPtr);
		KillEvent.NativeFieldInfoPtr_Who = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<KillEvent>.NativeClassPtr, "Who");
		KillEvent.NativeFieldInfoPtr_Filter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<KillEvent>.NativeClassPtr, "Filter");
		KillEvent.NativeFieldInfoPtr_TargetNetworkId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<KillEvent>.NativeClassPtr, "TargetNetworkId");
		KillEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<KillEvent>.NativeClassPtr, 100684421);
		KillEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<KillEvent>.NativeClassPtr, 100684422);
	}

	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(KillEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(KillEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<KillEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Who;
	private static readonly IntPtr NativeFieldInfoPtr_Filter;
	private static readonly IntPtr NativeFieldInfoPtr_TargetNetworkId;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;

	public KillWho Who;

	public KillWhoFilter Filter;

	public NetworkId TargetNetworkId;
}
```

## Server Systems

- [KillEventSystem](/systems/server/KillEventSystem)
