---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CreateSequence
{
	static CreateSequence()
	{
		Il2CppClassPointerStore<CreateSequence>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "Stunlock.Sequencer", "CreateSequence");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateSequence>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateSequence>.NativeClassPtr, ref this));
	}
}
```

## Client Systems

- [CreateSequenceSystem]({{% relref "systems/client/CreateSequenceSystem.md" %}})
- [CreateSequenceSystem_Deserialize]({{% relref "systems/client/CreateSequenceSystem_Deserialize.md" %}})
