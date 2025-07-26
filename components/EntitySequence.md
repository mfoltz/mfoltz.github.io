# EntitySequence

```csharp
[StructLayout(2)]
public struct EntitySequence
{
	static EntitySequence()
	{
		Il2CppClassPointerStore<EntitySequence>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "EntitySequence");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EntitySequence>.NativeClassPtr);
		EntitySequence.NativeFieldInfoPtr_SequenceEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntitySequence>.NativeClassPtr, "SequenceEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EntitySequence>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceEntity;
	[FieldOffset(0)]
	public Entity SequenceEntity;
}
