# PlaySequenceOnDestroy

```csharp
[StructLayout(2)]
public struct PlaySequenceOnDestroy
{
	static PlaySequenceOnDestroy()
	{
		Il2CppClassPointerStore<PlaySequenceOnDestroy>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "PlaySequenceOnDestroy");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PlaySequenceOnDestroy>.NativeClassPtr);
		PlaySequenceOnDestroy.NativeFieldInfoPtr_SequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlaySequenceOnDestroy>.NativeClassPtr, "SequenceGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PlaySequenceOnDestroy>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceGuid;
	[FieldOffset(0)]
	public SequenceGUID SequenceGuid;
}
