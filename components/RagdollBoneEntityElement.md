---
nav_exclude: true
search_exclude: true
---

# RagdollBoneEntityElement

```csharp
public struct RagdollBoneEntityElement
{
	static RagdollBoneEntityElement()
	{
		Il2CppClassPointerStore<RagdollBoneEntityElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RagdollBoneEntityElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RagdollBoneEntityElement>.NativeClassPtr);
		RagdollBoneEntityElement.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RagdollBoneEntityElement>.NativeClassPtr, "Value");
		RagdollBoneEntityElement.NativeMethodInfoPtr_op_Implicit_Public_Static_Entity_RagdollBoneEntityElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RagdollBoneEntityElement>.NativeClassPtr, 100674647);
		RagdollBoneEntityElement.NativeMethodInfoPtr_op_Implicit_Public_Static_RagdollBoneEntityElement_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RagdollBoneEntityElement>.NativeClassPtr, 100674648);
	}

	public unsafe static implicit operator Entity(RagdollBoneEntityElement e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RagdollBoneEntityElement.NativeMethodInfoPtr_op_Implicit_Public_Static_Entity_RagdollBoneEntityElement_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static implicit operator RagdollBoneEntityElement(Entity e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RagdollBoneEntityElement.NativeMethodInfoPtr_op_Implicit_Public_Static_RagdollBoneEntityElement_Entity_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RagdollBoneEntityElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_Entity_RagdollBoneEntityElement_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_RagdollBoneEntityElement_Entity_0;

	public Entity Value;
}
```
