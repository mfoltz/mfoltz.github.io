# Child

```csharp
[Serializable]
[StructLayout(2)]
public struct Child
{
	static Child()
	{
		Il2CppClassPointerStore<Child>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Transforms.dll", "Unity.Transforms", "Child");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Child>.NativeClassPtr);
		Child.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Child>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Child>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public Entity Value;
}
