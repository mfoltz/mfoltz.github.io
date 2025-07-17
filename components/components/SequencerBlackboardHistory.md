---
nav_exclude: true
search_exclude: true
---

# SequencerBlackboardHistory

```csharp
[StructLayout(2)]
public struct SequencerBlackboardHistory
{
	static SequencerBlackboardHistory()
	{
		Il2CppClassPointerStore<SequencerBlackboardHistory>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Sequencer.Debugging", "SequencerBlackboardHistory");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SequencerBlackboardHistory>.NativeClassPtr);
		SequencerBlackboardHistory.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequencerBlackboardHistory>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SequencerBlackboardHistory>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public byte Value;
}
