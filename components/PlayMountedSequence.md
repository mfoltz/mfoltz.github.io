---
nav_exclude: true
search_exclude: true
---

# PlayMountedSequence

```csharp
public struct PlayMountedSequence
{
	static PlayMountedSequence()
	{
		Il2CppClassPointerStore<PlayMountedSequence>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "PlayMountedSequence");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PlayMountedSequence>.NativeClassPtr);
		PlayMountedSequence.NativeFieldInfoPtr_Sequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayMountedSequence>.NativeClassPtr, "Sequence");
		PlayMountedSequence.NativeFieldInfoPtr_Instance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayMountedSequence>.NativeClassPtr, "Instance");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PlayMountedSequence>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Sequence;
	private static readonly IntPtr NativeFieldInfoPtr_Instance;

	public SequenceGUID Sequence;

	public SequenceState Instance;
}
```
