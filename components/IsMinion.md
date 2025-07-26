# IsMinion

```csharp
[StructLayout(2)]
public struct IsMinion
{
	static IsMinion()
	{
		Il2CppClassPointerStore<IsMinion>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "IsMinion");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<IsMinion>.NativeClassPtr);
		IsMinion.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IsMinion>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<IsMinion>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool Value;
}
