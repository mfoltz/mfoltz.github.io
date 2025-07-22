---
nav_exclude: true
search_exclude: false
---

# Pull_Input

```csharp
public struct Pull_Input
{
	static Pull_Input()
	{
		Il2CppClassPointerStore<Pull_Input>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Sequencer", "Pull_Input");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Pull_Input>.NativeClassPtr);
		Pull_Input.NativeFieldInfoPtr_FromEntityRegister = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Pull_Input>.NativeClassPtr, "FromEntityRegister");
		Pull_Input.NativeFieldInfoPtr_ToAimDirectionRegister = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Pull_Input>.NativeClassPtr, "ToAimDirectionRegister");
		Pull_Input.NativeFieldInfoPtr_ToMovementDirectionRegister = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Pull_Input>.NativeClassPtr, "ToMovementDirectionRegister");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Pull_Input>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FromEntityRegister;
	private static readonly IntPtr NativeFieldInfoPtr_ToAimDirectionRegister;
	private static readonly IntPtr NativeFieldInfoPtr_ToMovementDirectionRegister;

	public int FromEntityRegister;

	public int ToAimDirectionRegister;

	public int ToMovementDirectionRegister;
}
```

## Client Systems

- [Pull_InputSystem](/systems/client/Pull_InputSystem)
