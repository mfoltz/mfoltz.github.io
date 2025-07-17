---
nav_exclude: true
search_exclude: true
---

# StatusChangedEvent

```csharp
public struct StatusChangedEvent
{
	static StatusChangedEvent()
	{
		Il2CppClassPointerStore<StatusChangedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "StatusChangedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StatusChangedEvent>.NativeClassPtr);
		StatusChangedEvent.NativeFieldInfoPtr_Status = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StatusChangedEvent>.NativeClassPtr, "Status");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StatusChangedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Status;

	public ClientConnectState Status;
}
```
