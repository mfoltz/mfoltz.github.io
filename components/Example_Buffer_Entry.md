# Example_Buffer_Entry

```csharp
[StructLayout(2)]
public struct Example_Buffer_Entry
{
	static Example_Buffer_Entry()
	{
		Il2CppClassPointerStore<Example_Buffer_Entry>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Example_Buffer_Entry");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Example_Buffer_Entry>.NativeClassPtr);
		Example_Buffer_Entry.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Example_Buffer_Entry>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Example_Buffer_Entry>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public int Value;
}
