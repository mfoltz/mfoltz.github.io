---
nav_exclude: true
search_exclude: true
---

# EventStateElement

```csharp
public struct EventStateElement
{
	static EventStateElement()
	{
		Il2CppClassPointerStore<EventStateElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "Stunlock.Sequencer", "EventStateElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EventStateElement>.NativeClassPtr);
		EventStateElement.NativeFieldInfoPtr_EventStruct = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EventStateElement>.NativeClassPtr, "EventStruct");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EventStateElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventStruct;

	public EventStruct EventStruct;
}
```

## Client Systems

- [UpdatePresentationPostGraphSystem](/systems/client/UpdatePresentationPostGraphSystem)
