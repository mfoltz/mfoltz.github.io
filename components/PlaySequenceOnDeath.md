# PlaySequenceOnDeath

```csharp
[StructLayout(2)]
public struct PlaySequenceOnDeath
{
	static PlaySequenceOnDeath()
	{
		Il2CppClassPointerStore<PlaySequenceOnDeath>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "PlaySequenceOnDeath");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PlaySequenceOnDeath>.NativeClassPtr);
		PlaySequenceOnDeath.NativeFieldInfoPtr_SequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlaySequenceOnDeath>.NativeClassPtr, "SequenceGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PlaySequenceOnDeath>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceGuid;
	[FieldOffset(0)]
	public SequenceGUID SequenceGuid;
}
