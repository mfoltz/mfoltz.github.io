---
nav_exclude: true
search_exclude: true
---

# BlackboardElement

```csharp
public struct BlackboardElement
{
	static BlackboardElement()
	{
		Il2CppClassPointerStore<BlackboardElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("Sequencer.dll", "Stunlock.Sequencer", "BlackboardElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BlackboardElement>.NativeClassPtr);
		BlackboardElement.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlackboardElement>.NativeClassPtr, "Value");
		BlackboardElement.NativeMethodInfoPtr_op_Implicit_Public_Static_Byte_BlackboardElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlackboardElement>.NativeClassPtr, 100663369);
		BlackboardElement.NativeMethodInfoPtr_op_Implicit_Public_Static_BlackboardElement_Byte_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlackboardElement>.NativeClassPtr, 100663370);
	}

	public unsafe static implicit operator byte(BlackboardElement e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlackboardElement.NativeMethodInfoPtr_op_Implicit_Public_Static_Byte_BlackboardElement_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static implicit operator BlackboardElement(byte e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlackboardElement.NativeMethodInfoPtr_op_Implicit_Public_Static_BlackboardElement_Byte_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BlackboardElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_Byte_BlackboardElement_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_BlackboardElement_Byte_0;

	public byte Value;
}
```

## Server Systems

- [BehaviourTreeBindingSystem_Spawn](/systems/server/BehaviourTreeBindingSystem_Spawn)

## Client Systems

- [CreateSequenceSystem](/systems/client/CreateSequenceSystem)
- [CreateSequenceSystem_Deserialize](/systems/client/CreateSequenceSystem_Deserialize)
- [Pull_BuffTargetSystem](/systems/client/Pull_BuffTargetSystem)
- [Pull_EntitySystem](/systems/client/Pull_EntitySystem)
- [Pull_InputSystem](/systems/client/Pull_InputSystem)
- [Pull_PositionSystem](/systems/client/Pull_PositionSystem)
- [Pull_RotationSystem](/systems/client/Pull_RotationSystem)
- [Pull_TeamSystem](/systems/client/Pull_TeamSystem)
- [UpdatePresentationPostGraphSystem](/systems/client/UpdatePresentationPostGraphSystem)
