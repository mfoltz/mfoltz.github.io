---
nav_exclude: true
search_exclude: false
---

# HandleClientDebugEvent

```csharp
public struct HandleClientDebugEvent
{
	static HandleClientDebugEvent()
	{
		Il2CppClassPointerStore<HandleClientDebugEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "HandleClientDebugEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HandleClientDebugEvent>.NativeClassPtr);
		HandleClientDebugEvent.NativeFieldInfoPtr_FromUserIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HandleClientDebugEvent>.NativeClassPtr, "FromUserIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HandleClientDebugEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FromUserIndex;

	public int FromUserIndex;
}
```

## Server Systems

- [DebugEventsSystem](/systems/server/DebugEventsSystem)
