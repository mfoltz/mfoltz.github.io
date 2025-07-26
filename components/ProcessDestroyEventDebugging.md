---
nav_exclude: true
search_exclude: true
---

# ProcessDestroyEventDebugging

```csharp
public struct ProcessDestroyEventDebugging
{
	static ProcessDestroyEventDebugging()
	{
		Il2CppClassPointerStore<ProcessDestroyEventDebugging>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ProcessDestroyEventDebugging");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProcessDestroyEventDebugging>.NativeClassPtr);
		ProcessDestroyEventDebugging.NativeFieldInfoPtr_PrintState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProcessDestroyEventDebugging>.NativeClassPtr, "PrintState");
		ProcessDestroyEventDebugging.NativeFieldInfoPtr_LogDestroys = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProcessDestroyEventDebugging>.NativeClassPtr, "LogDestroys");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProcessDestroyEventDebugging>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrintState;
	private static readonly IntPtr NativeFieldInfoPtr_LogDestroys;

	public bool PrintState;

	public bool LogDestroys;
}
```
