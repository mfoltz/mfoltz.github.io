---
nav_exclude: true
search_exclude: false
---

# DownedEvent

```csharp
public struct DownedEvent
{
	static DownedEvent()
	{
		Il2CppClassPointerStore<DownedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DownedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DownedEvent>.NativeClassPtr);
		DownedEvent.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DownedEvent>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DownedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;

	public Entity Entity;
}
```

## Server Systems

- [DownedEventSystem](/systems/server/DownedEventSystem)
- [KillMinionsOnMasterDeathSystem](/systems/server/KillMinionsOnMasterDeathSystem)
