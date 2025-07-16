# DestroySequenceWhenSelfIsDestroyed

```csharp
[StructLayout(2)]
public struct DestroySequenceWhenSelfIsDestroyed
{
	static DestroySequenceWhenSelfIsDestroyed()
	{
		Il2CppClassPointerStore<DestroySequenceWhenSelfIsDestroyed>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DestroySequenceWhenSelfIsDestroyed");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DestroySequenceWhenSelfIsDestroyed>.NativeClassPtr);
		DestroySequenceWhenSelfIsDestroyed.NativeFieldInfoPtr_SequenceEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroySequenceWhenSelfIsDestroyed>.NativeClassPtr, "SequenceEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DestroySequenceWhenSelfIsDestroyed>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceEntity;
	[FieldOffset(0)]
	public Entity SequenceEntity;
}
