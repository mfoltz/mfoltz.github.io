---
nav_exclude: true
search_exclude: true
---

# UISoundEvent

```csharp
public struct UISoundEvent
{
	static UISoundEvent()
	{
		Il2CppClassPointerStore<UISoundEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Audio", "UISoundEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UISoundEvent>.NativeClassPtr);
		UISoundEvent.NativeFieldInfoPtr_EventGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UISoundEvent>.NativeClassPtr, "EventGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UISoundEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventGuid;

	public FmodEventGuid EventGuid;
}
```

## Client Systems

- [UIAudioSystem](/systems/client/UIAudioSystem)
