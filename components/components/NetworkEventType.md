---
nav_exclude: true
search_exclude: true
---

# NetworkEventType

```csharp
[StructLayout(2)]
public struct NetworkEventType
{
	static NetworkEventType()
	{
		Il2CppClassPointerStore<NetworkEventType>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "NetworkEventType");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NetworkEventType>.NativeClassPtr);
		NetworkEventType.NativeFieldInfoPtr_EventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkEventType>.NativeClassPtr, "EventId");
		NetworkEventType.NativeFieldInfoPtr_IsDebugEvent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkEventType>.NativeClassPtr, "IsDebugEvent");
		NetworkEventType.NativeFieldInfoPtr_IsAdminEvent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkEventType>.NativeClassPtr, "IsAdminEvent");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NetworkEventType>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventId;
	private static readonly IntPtr NativeFieldInfoPtr_IsDebugEvent;
	private static readonly IntPtr NativeFieldInfoPtr_IsAdminEvent;
	[FieldOffset(0)]
	public int EventId;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool IsDebugEvent;
	[FieldOffset(5)]
	[MarshalAs(4)]
	public bool IsAdminEvent;
}
