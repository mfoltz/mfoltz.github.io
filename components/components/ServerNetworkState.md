---
nav_exclude: true
search_exclude: true
---

# ServerNetworkState

```csharp
[StructLayout(2)]
public struct ServerNetworkState
{
	static ServerNetworkState()
	{
		Il2CppClassPointerStore<ServerNetworkState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "ServerNetworkState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServerNetworkState>.NativeClassPtr);
		ServerNetworkState.NativeFieldInfoPtr_LastClientFrameReceived = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerNetworkState>.NativeClassPtr, "LastClientFrameReceived");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServerNetworkState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastClientFrameReceived;
	[FieldOffset(0)]
	public int LastClientFrameReceived;
}
