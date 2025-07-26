---
nav_exclude: true
search_exclude: true
---

# SendNetworkEventTag

```csharp
public struct SendNetworkEventTag
{
	static SendNetworkEventTag()
	{
		Il2CppClassPointerStore<SendNetworkEventTag>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "SendNetworkEventTag");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SendNetworkEventTag>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SendNetworkEventTag>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [SerializeAndSendServerEventsSystem](/systems/server/SerializeAndSendServerEventsSystem)

## Client Systems

- [SerializeAndSendClientEventsSystem](/systems/client/SerializeAndSendClientEventsSystem)
