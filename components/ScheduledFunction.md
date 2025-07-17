---
nav_exclude: true
search_exclude: true
---

# ScheduledFunction

```csharp
public struct ScheduledFunction
{
	static ScheduledFunction()
	{
		Il2CppClassPointerStore<ScheduledFunction>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Scripting", "ScheduledFunction");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ScheduledFunction>.NativeClassPtr);
		ScheduledFunction.NativeFieldInfoPtr_CallerEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScheduledFunction>.NativeClassPtr, "CallerEntity");
		ScheduledFunction.NativeFieldInfoPtr_FunctionHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScheduledFunction>.NativeClassPtr, "FunctionHash");
		ScheduledFunction.NativeFieldInfoPtr_DurationToCall = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScheduledFunction>.NativeClassPtr, "DurationToCall");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ScheduledFunction>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CallerEntity;
	private static readonly IntPtr NativeFieldInfoPtr_FunctionHash;
	private static readonly IntPtr NativeFieldInfoPtr_DurationToCall;

	public Entity CallerEntity;

	public int FunctionHash;

	public float DurationToCall;
}
```

## Server Systems

- [ProjectM.Shared.Systems.ScheduledFunctionSystem](/systems/ProjectM.Shared.Systems.ScheduledFunctionSystem)
