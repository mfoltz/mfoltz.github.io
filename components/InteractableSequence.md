---
nav_exclude: true
search_exclude: false
---

# InteractableSequence

```csharp
public struct InteractableSequence
{
	static InteractableSequence()
	{
		Il2CppClassPointerStore<InteractableSequence>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "InteractableSequence");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<InteractableSequence>.NativeClassPtr);
		InteractableSequence.NativeFieldInfoPtr_ActiveInteractionSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InteractableSequence>.NativeClassPtr, "ActiveInteractionSequenceGuid");
		InteractableSequence.NativeFieldInfoPtr_ActiveInteractionSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InteractableSequence>.NativeClassPtr, "ActiveInteractionSequence");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<InteractableSequence>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ActiveInteractionSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveInteractionSequence;

	public SequenceGUID ActiveInteractionSequenceGuid;

	public SequenceState ActiveInteractionSequence;
}
```

## Client Systems

- [InteractSystemClient_Sequences](/systems/client/InteractSystemClient_Sequences)
