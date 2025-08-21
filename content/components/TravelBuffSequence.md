---
nav_exclude: true
search_exclude: true
---

```csharp
public struct TravelBuffSequence
{
	static TravelBuffSequence()
	{
		Il2CppClassPointerStore<TravelBuffSequence>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "TravelBuffSequence");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TravelBuffSequence>.NativeClassPtr);
		TravelBuffSequence.NativeFieldInfoPtr_Sequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSequence>.NativeClassPtr, "Sequence");
		TravelBuffSequence.NativeFieldInfoPtr_Instance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSequence>.NativeClassPtr, "Instance");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TravelBuffSequence>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Sequence;
	private static readonly IntPtr NativeFieldInfoPtr_Instance;

	public SequenceGUID Sequence;

	public SequenceState Instance;
}
```

## Client Systems

- [TravelBuffSequenceSpawnSystem]({{% relref "systems/client/TravelBuffSequenceSpawnSystem.md" %}})
- [TravelBuffSequenceSystem]({{% relref "systems/client/TravelBuffSequenceSystem.md" %}})
