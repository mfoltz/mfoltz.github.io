# SequenceInput

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public BlobAssetReference<SequenceInputBlob> SequenceInputBlob;
}
