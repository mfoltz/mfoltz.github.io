---
nav_exclude: true
search_exclude: true
---

```csharp
public struct UnsmoothedPathBuffer
{
	static UnsmoothedPathBuffer()
	{
		Il2CppClassPointerStore<UnsmoothedPathBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Pathfinding.dll", "ProjectM.Pathfinding", "UnsmoothedPathBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnsmoothedPathBuffer>.NativeClassPtr);
		UnsmoothedPathBuffer.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnsmoothedPathBuffer>.NativeClassPtr, "Value");
		UnsmoothedPathBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_int2_UnsmoothedPathBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnsmoothedPathBuffer>.NativeClassPtr, 100663436);
		UnsmoothedPathBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_UnsmoothedPathBuffer_int2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnsmoothedPathBuffer>.NativeClassPtr, 100663437);
	}

	public unsafe static implicit operator int2(UnsmoothedPathBuffer e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnsmoothedPathBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_int2_UnsmoothedPathBuffer_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static implicit operator UnsmoothedPathBuffer(int2 e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnsmoothedPathBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_UnsmoothedPathBuffer_int2_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnsmoothedPathBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_int2_UnsmoothedPathBuffer_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_UnsmoothedPathBuffer_int2_0;

	public int2 Value;
}
```
