---
nav_exclude: true
search_exclude: false
---

# TeleportPlayerToLocationDebugEvent

```csharp
public struct TeleportPlayerToLocationDebugEvent
{
	static TeleportPlayerToLocationDebugEvent()
	{
		Il2CppClassPointerStore<TeleportPlayerToLocationDebugEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "TeleportPlayerToLocationDebugEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TeleportPlayerToLocationDebugEvent>.NativeClassPtr);
		TeleportPlayerToLocationDebugEvent.NativeFieldInfoPtr_PlayerNetworkId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportPlayerToLocationDebugEvent>.NativeClassPtr, "PlayerNetworkId");
		TeleportPlayerToLocationDebugEvent.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportPlayerToLocationDebugEvent>.NativeClassPtr, "Position");
		TeleportPlayerToLocationDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TeleportPlayerToLocationDebugEvent>.NativeClassPtr, 100684153);
		TeleportPlayerToLocationDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TeleportPlayerToLocationDebugEvent>.NativeClassPtr, 100684154);
	}

	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TeleportPlayerToLocationDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TeleportPlayerToLocationDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TeleportPlayerToLocationDebugEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PlayerNetworkId;
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;

	public NetworkId PlayerNetworkId;

	public float3 Position;
}
```

## Server Systems

- [TeleportPlayerLocationSystem](/systems/server/TeleportPlayerLocationSystem)
