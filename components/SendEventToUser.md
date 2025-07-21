---
nav_exclude: true
search_exclude: false
---

# SendEventToUser

```csharp
public struct SendEventToUser
{
	static SendEventToUser()
	{
		Il2CppClassPointerStore<SendEventToUser>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "SendEventToUser");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SendEventToUser>.NativeClassPtr);
		SendEventToUser.NativeFieldInfoPtr_UserIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SendEventToUser>.NativeClassPtr, "UserIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SendEventToUser>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UserIndex;

	public int UserIndex;
}
```

## Server Systems

- [SerializeAndSendServerEventsSystem](/systems/server/SerializeAndSendServerEventsSystem)
- [ServerBootstrapSystem](/systems/server/ServerBootstrapSystem)
