---
nav_exclude: true
search_exclude: true
---

```csharp
public struct SequenceInput
{
	static SequenceInput()
	{
		Il2CppClassPointerStore<SequenceInput>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "Stunlock.Sequencer", "SequenceInput");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SequenceInput>.NativeClassPtr);
		SequenceInput.NativeFieldInfoPtr_SequenceInputBlob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequenceInput>.NativeClassPtr, "SequenceInputBlob");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SequenceInput>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceInputBlob;

	public BlobAssetReference<SequenceInputBlob> SequenceInputBlob;
}
```

## Client Systems

- [CreateSequenceSystem]({{% relref "systems/client/CreateSequenceSystem.md" %}})
- [CreateSequenceSystem_Deserialize]({{% relref "systems/client/CreateSequenceSystem_Deserialize.md" %}})
