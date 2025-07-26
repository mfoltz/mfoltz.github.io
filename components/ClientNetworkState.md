---
nav_exclude: true
search_exclude: true
---

# ClientNetworkState

```csharp
public struct ClientNetworkState
{
	static ClientNetworkState()
	{
		Il2CppClassPointerStore<ClientNetworkState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "ClientNetworkState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ClientNetworkState>.NativeClassPtr);
		ClientNetworkState.NativeFieldInfoPtr_LocalUserIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClientNetworkState>.NativeClassPtr, "LocalUserIndex");
		ClientNetworkState.NativeFieldInfoPtr_LocalUserGeneration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClientNetworkState>.NativeClassPtr, "LocalUserGeneration");
		ClientNetworkState.NativeFieldInfoPtr_LastServerFrameReceived = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClientNetworkState>.NativeClassPtr, "LastServerFrameReceived");
		ClientNetworkState.NativeFieldInfoPtr_BufferPositionBits = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClientNetworkState>.NativeClassPtr, "BufferPositionBits");
		ClientNetworkState.NativeFieldInfoPtr_LastClientFrameReceivedPacket = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClientNetworkState>.NativeClassPtr, "LastClientFrameReceivedPacket");
		ClientNetworkState.NativeFieldInfoPtr_LastClientUnscaledTimeReceivedPacket = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClientNetworkState>.NativeClassPtr, "LastClientUnscaledTimeReceivedPacket");
		ClientNetworkState.NativeFieldInfoPtr_HasBeenConnected = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClientNetworkState>.NativeClassPtr, "HasBeenConnected");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ClientNetworkState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LocalUserIndex;
	private static readonly IntPtr NativeFieldInfoPtr_LocalUserGeneration;
	private static readonly IntPtr NativeFieldInfoPtr_LastServerFrameReceived;
	private static readonly IntPtr NativeFieldInfoPtr_BufferPositionBits;
	private static readonly IntPtr NativeFieldInfoPtr_LastClientFrameReceivedPacket;
	private static readonly IntPtr NativeFieldInfoPtr_LastClientUnscaledTimeReceivedPacket;
	private static readonly IntPtr NativeFieldInfoPtr_HasBeenConnected;

	public int LocalUserIndex;

	public int LocalUserGeneration;

	public int LastServerFrameReceived;

	public int BufferPositionBits;

	public int LastClientFrameReceivedPacket;

	public float LastClientUnscaledTimeReceivedPacket;

	public bool HasBeenConnected;
}
```

## Client Systems

- [LocalUserSystem](/systems/client/LocalUserSystem)
- [ReceivePacketSystem](/systems/client/ReceivePacketSystem)
- [SendUserInputSystem](/systems/client/SendUserInputSystem)
