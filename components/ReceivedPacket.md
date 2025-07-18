---
nav_exclude: true
search_exclude: true
---

# ReceivedPacket

```csharp
public struct ReceivedPacket
{
	static ReceivedPacket()
	{
		Il2CppClassPointerStore<ReceivedPacket>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "ReceivedPacket");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ReceivedPacket>.NativeClassPtr);
		ReceivedPacket.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReceivedPacket>.NativeClassPtr, "Position");
		ReceivedPacket.NativeFieldInfoPtr_LengthBits = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReceivedPacket>.NativeClassPtr, "LengthBits");
		ReceivedPacket.NativeFieldInfoPtr_Skip = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReceivedPacket>.NativeClassPtr, "Skip");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ReceivedPacket>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_LengthBits;
	private static readonly IntPtr NativeFieldInfoPtr_Skip;

	public int Position;

	public int LengthBits;

	public bool Skip;
}
```

## Client Systems

- [ClientBootstrapSystem](/systems/client/ClientBootstrapSystem)
- [ReceivePacketSystem](/systems/client/ReceivePacketSystem)
