---
nav_exclude: true
search_exclude: true
---

```csharp
public struct IncomingNetBuffer
{
	static IncomingNetBuffer()
	{
		Il2CppClassPointerStore<IncomingNetBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "IncomingNetBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<IncomingNetBuffer>.NativeClassPtr);
		IncomingNetBuffer.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IncomingNetBuffer>.NativeClassPtr, "Value");
		IncomingNetBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_Byte_IncomingNetBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<IncomingNetBuffer>.NativeClassPtr, 100670258);
		IncomingNetBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_IncomingNetBuffer_Byte_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<IncomingNetBuffer>.NativeClassPtr, 100670259);
	}

	public unsafe static implicit operator byte(IncomingNetBuffer e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(IncomingNetBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_Byte_IncomingNetBuffer_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static implicit operator IncomingNetBuffer(byte e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(IncomingNetBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_IncomingNetBuffer_Byte_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<IncomingNetBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_Byte_IncomingNetBuffer_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_IncomingNetBuffer_Byte_0;

	public byte Value;
}
```
