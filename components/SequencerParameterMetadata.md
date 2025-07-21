---
nav_exclude: true
search_exclude: false
---

# SequencerParameterMetadata

```csharp
public struct SequencerParameterMetadata
{
	static SequencerParameterMetadata()
	{
		Il2CppClassPointerStore<SequencerParameterMetadata>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Sequencer.Debugging", "SequencerParameterMetadata");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SequencerParameterMetadata>.NativeClassPtr);
		SequencerParameterMetadata.NativeFieldInfoPtr_Name = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequencerParameterMetadata>.NativeClassPtr, "Name");
		SequencerParameterMetadata.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequencerParameterMetadata>.NativeClassPtr, "Type");
		SequencerParameterMetadata.NativeFieldInfoPtr_BlackboardIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequencerParameterMetadata>.NativeClassPtr, "BlackboardIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SequencerParameterMetadata>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Name;
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_BlackboardIndex;

	public FixedString128Bytes Name;

	public BlackboardRegisterType Type;

	public int BlackboardIndex;
}
```
