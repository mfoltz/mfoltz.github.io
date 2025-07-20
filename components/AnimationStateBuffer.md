---
nav_exclude: true
search_exclude: true
---

# AnimationStateBuffer

```csharp
public struct AnimationStateBuffer
{
	static AnimationStateBuffer()
	{
		Il2CppClassPointerStore<AnimationStateBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AnimationStateBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AnimationStateBuffer>.NativeClassPtr);
		AnimationStateBuffer.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimationStateBuffer>.NativeClassPtr, "Value");
		AnimationStateBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_AnimationState_AnimationStateBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AnimationStateBuffer>.NativeClassPtr, 100667096);
		AnimationStateBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_AnimationStateBuffer_AnimationState_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AnimationStateBuffer>.NativeClassPtr, 100667097);
		AnimationStateBuffer.NativeMethodInfoPtr_CompareTo_Public_Virtual_Final_New_Int32_AnimationStateBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AnimationStateBuffer>.NativeClassPtr, 100667098);
	}

	public unsafe static implicit operator AnimationState(AnimationStateBuffer e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AnimationStateBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_AnimationState_AnimationStateBuffer_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static implicit operator AnimationStateBuffer(AnimationState e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AnimationStateBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_AnimationStateBuffer_AnimationState_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe int CompareTo(AnimationStateBuffer other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AnimationStateBuffer.NativeMethodInfoPtr_CompareTo_Public_Virtual_Final_New_Int32_AnimationStateBuffer_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AnimationStateBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_AnimationState_AnimationStateBuffer_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_AnimationStateBuffer_AnimationState_0;
	private static readonly IntPtr NativeMethodInfoPtr_CompareTo_Public_Virtual_Final_New_Int32_AnimationStateBuffer_0;

	public AnimationState Value;
}
```
