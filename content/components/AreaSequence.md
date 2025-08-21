---
nav_exclude: true
search_exclude: true
---

```csharp
public struct AreaSequence
{
	static AreaSequence()
	{
		Il2CppClassPointerStore<AreaSequence>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AreaSequence");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AreaSequence>.NativeClassPtr);
		AreaSequence.NativeFieldInfoPtr_Sequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AreaSequence>.NativeClassPtr, "Sequence");
		AreaSequence.NativeFieldInfoPtr_Instance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AreaSequence>.NativeClassPtr, "Instance");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AreaSequence>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Sequence;
	private static readonly IntPtr NativeFieldInfoPtr_Instance;

	public SequenceGUID Sequence;

	public SequenceState Instance;
}
```

## Client Systems

- [AreaSequenceSystem]({{% relref "systems/client/AreaSequenceSystem.md" %}})
