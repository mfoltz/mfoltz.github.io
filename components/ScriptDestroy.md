# ScriptDestroy

```csharp
[StructLayout(2)]
public struct ScriptDestroy
{
	static ScriptDestroy()
	{
		Il2CppClassPointerStore<ScriptDestroy>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Scripting", "ScriptDestroy");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ScriptDestroy>.NativeClassPtr);
		ScriptDestroy.NativeFieldInfoPtr_Handled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScriptDestroy>.NativeClassPtr, "Handled");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ScriptDestroy>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Handled;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool Handled;
}
