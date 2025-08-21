---
nav_exclude: true
search_exclude: true
---

```csharp
public struct InteractableActive
{
	static InteractableActive()
	{
		Il2CppClassPointerStore<InteractableActive>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "InteractableActive");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<InteractableActive>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<InteractableActive>.NativeClassPtr, ref this));
	}
}
```

## Client Systems

- [InteractSystemClient_Sequences]({{% relref "systems/client/InteractSystemClient_Sequences.md" %}})
