---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BehaviourTreeNodeInstanceElement
{
	static BehaviourTreeNodeInstanceElement()
	{
		Il2CppClassPointerStore<BehaviourTreeNodeInstanceElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Behaviours.dll", "ProjectM.Behaviours", "BehaviourTreeNodeInstanceElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BehaviourTreeNodeInstanceElement>.NativeClassPtr);
		BehaviourTreeNodeInstanceElement.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeNodeInstanceElement>.NativeClassPtr, "Value");
		BehaviourTreeNodeInstanceElement.NativeMethodInfoPtr_op_Implicit_Public_Static_BehaviourTreeNodeInstance_BehaviourTreeNodeInstanceElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BehaviourTreeNodeInstanceElement>.NativeClassPtr, 100665466);
		BehaviourTreeNodeInstanceElement.NativeMethodInfoPtr_op_Implicit_Public_Static_BehaviourTreeNodeInstanceElement_BehaviourTreeNodeInstance_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BehaviourTreeNodeInstanceElement>.NativeClassPtr, 100665467);
	}

	public unsafe static implicit operator BehaviourTreeNodeInstance(BehaviourTreeNodeInstanceElement e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BehaviourTreeNodeInstanceElement.NativeMethodInfoPtr_op_Implicit_Public_Static_BehaviourTreeNodeInstance_BehaviourTreeNodeInstanceElement_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static implicit operator BehaviourTreeNodeInstanceElement(BehaviourTreeNodeInstance e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BehaviourTreeNodeInstanceElement.NativeMethodInfoPtr_op_Implicit_Public_Static_BehaviourTreeNodeInstanceElement_BehaviourTreeNodeInstance_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BehaviourTreeNodeInstanceElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_BehaviourTreeNodeInstance_BehaviourTreeNodeInstanceElement_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_BehaviourTreeNodeInstanceElement_BehaviourTreeNodeInstance_0;

	public BehaviourTreeNodeInstance Value;
}
```
