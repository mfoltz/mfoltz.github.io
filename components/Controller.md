---
nav_exclude: true
search_exclude: true
---

# Controller

```csharp
public struct Controller
{
	static Controller()
	{
		Il2CppClassPointerStore<Controller>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Controller");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Controller>.NativeClassPtr);
		Controller.NativeFieldInfoPtr_Controlled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Controller>.NativeClassPtr, "Controlled");
		Controller.NativeFieldInfoPtr_PreviouslyControlled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Controller>.NativeClassPtr, "PreviouslyControlled");
		Controller.NativeFieldInfoPtr_InputType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Controller>.NativeClassPtr, "InputType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Controller>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Controlled;
	private static readonly IntPtr NativeFieldInfoPtr_PreviouslyControlled;
	private static readonly IntPtr NativeFieldInfoPtr_InputType;

	public NetworkedEntity Controlled;

	public Entity PreviouslyControlled;

	public ControllerType InputType;
}
```
