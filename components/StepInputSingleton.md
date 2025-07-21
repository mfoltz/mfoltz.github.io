---
nav_exclude: true
search_exclude: false
---

# StepInputSingleton

```csharp
public struct StepInputSingleton
{
	static StepInputSingleton()
	{
		Il2CppClassPointerStore<StepInputSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics", "StepInputSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StepInputSingleton>.NativeClassPtr);
		StepInputSingleton.NativeFieldInfoPtr_StepInput = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StepInputSingleton>.NativeClassPtr, "StepInput");
		StepInputSingleton.NativeFieldInfoPtr_MultiThreaded = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StepInputSingleton>.NativeClassPtr, "MultiThreaded");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StepInputSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StepInput;
	private static readonly IntPtr NativeFieldInfoPtr_MultiThreaded;

	public SimulationStepInput StepInput;

	public bool MultiThreaded;
}
```
