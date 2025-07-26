# RunScriptOnGameplayEvent

```csharp
[StructLayout(2)]
public struct RunScriptOnGameplayEvent
{
	static RunScriptOnGameplayEvent()
	{
		Il2CppClassPointerStore<RunScriptOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RunScriptOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RunScriptOnGameplayEvent>.NativeClassPtr);
		RunScriptOnGameplayEvent.NativeFieldInfoPtr_ScriptReference = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RunScriptOnGameplayEvent>.NativeClassPtr, "ScriptReference");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RunScriptOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ScriptReference;
	[FieldOffset(0)]
	public ScriptMethodReference ScriptReference;
}
