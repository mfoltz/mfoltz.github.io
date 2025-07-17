---
nav_exclude: true
search_exclude: true
---

# GenericEvent

```csharp
public struct GenericEvent
{
	static GenericEvent()
	{
		Il2CppClassPointerStore<GenericEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Scripting", "GenericEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GenericEvent>.NativeClassPtr);
		GenericEvent.NativeFieldInfoPtr_TypeIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenericEvent>.NativeClassPtr, "TypeIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GenericEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TypeIndex;

	public TypeIndex TypeIndex;
}
```

## Server Systems

- [ProjectM.Scripting.GenericEventSystem](/systems/ProjectM.Scripting.GenericEventSystem)
