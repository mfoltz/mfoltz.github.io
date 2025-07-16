# SequencerStateMetadata

```csharp
[StructLayout(2)]
public struct SequencerStateMetadata
{
	static SequencerStateMetadata()
	{
		Il2CppClassPointerStore<SequencerStateMetadata>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Sequencer.Debugging", "SequencerStateMetadata");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SequencerStateMetadata>.NativeClassPtr);
		SequencerStateMetadata.NativeFieldInfoPtr_Name = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequencerStateMetadata>.NativeClassPtr, "Name");
		SequencerStateMetadata.NativeFieldInfoPtr_Indentation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequencerStateMetadata>.NativeClassPtr, "Indentation");
		SequencerStateMetadata.NativeFieldInfoPtr_NodeIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequencerStateMetadata>.NativeClassPtr, "NodeIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SequencerStateMetadata>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Name;
	private static readonly IntPtr NativeFieldInfoPtr_Indentation;
	private static readonly IntPtr NativeFieldInfoPtr_NodeIndex;
	[FieldOffset(0)]
	public FixedString128Bytes Name;
	[FieldOffset(128)]
	public int Indentation;
	[FieldOffset(132)]
	public int NodeIndex;
}
