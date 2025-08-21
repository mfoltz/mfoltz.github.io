---
nav_exclude: true
search_exclude: true
---

```csharp
public struct EndInteractableSequence
{
	static EndInteractableSequence()
	{
		Il2CppClassPointerStore<EndInteractableSequence>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "EndInteractableSequence");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EndInteractableSequence>.NativeClassPtr);
		EndInteractableSequence.NativeFieldInfoPtr_InteractionEndSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EndInteractableSequence>.NativeClassPtr, "InteractionEndSequenceGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EndInteractableSequence>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_InteractionEndSequenceGuid;

	public SequenceGUID InteractionEndSequenceGuid;
}
```
