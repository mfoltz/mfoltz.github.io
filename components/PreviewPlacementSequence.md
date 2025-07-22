---
nav_exclude: true
search_exclude: false
---

# PreviewPlacementSequence

```csharp
public struct PreviewPlacementSequence
{
	static PreviewPlacementSequence()
	{
		Il2CppClassPointerStore<PreviewPlacementSequence>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "PreviewPlacementSequence");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PreviewPlacementSequence>.NativeClassPtr);
		PreviewPlacementSequence.NativeFieldInfoPtr_Sequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PreviewPlacementSequence>.NativeClassPtr, "Sequence");
		PreviewPlacementSequence.NativeFieldInfoPtr_ValidPlacement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PreviewPlacementSequence>.NativeClassPtr, "ValidPlacement");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PreviewPlacementSequence>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Sequence;
	private static readonly IntPtr NativeFieldInfoPtr_ValidPlacement;

	public SequenceState Sequence;

	public bool ValidPlacement;
}
```
