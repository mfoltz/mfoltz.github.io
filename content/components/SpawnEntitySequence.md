---
nav_exclude: true
search_exclude: true
---

```csharp
public struct SpawnEntitySequence
{
	static SpawnEntitySequence()
	{
		Il2CppClassPointerStore<SpawnEntitySequence>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "SpawnEntitySequence");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnEntitySequence>.NativeClassPtr);
		SpawnEntitySequence.NativeFieldInfoPtr_SequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnEntitySequence>.NativeClassPtr, "SequenceGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnEntitySequence>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceGuid;

	public SequenceGUID SequenceGuid;
}
```

## Client Systems

- [EntitySequenceSystem_Spawn]({{% relref "systems/client/EntitySequenceSystem_Spawn.md" %}})
