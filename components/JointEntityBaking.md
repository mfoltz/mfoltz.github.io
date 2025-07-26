# JointEntityBaking

```csharp
[StructLayout(2)]
public struct JointEntityBaking
{
	static JointEntityBaking()
	{
		Il2CppClassPointerStore<JointEntityBaking>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.Hybrid.dll", "Unity.Physics.Authoring", "JointEntityBaking");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<JointEntityBaking>.NativeClassPtr);
		JointEntityBaking.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JointEntityBaking>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<JointEntityBaking>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	[FieldOffset(0)]
	public Entity Entity;
}
