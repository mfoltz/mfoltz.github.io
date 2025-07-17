---
nav_exclude: true
search_exclude: true
---

# OutgoingNetBuffer

```csharp
public struct OutgoingNetBuffer
{
	static OutgoingNetBuffer()
	{
		Il2CppClassPointerStore<OutgoingNetBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "OutgoingNetBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<OutgoingNetBuffer>.NativeClassPtr);
		OutgoingNetBuffer.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OutgoingNetBuffer>.NativeClassPtr, "Value");
		OutgoingNetBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_Byte_OutgoingNetBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<OutgoingNetBuffer>.NativeClassPtr, 100670256);
		OutgoingNetBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_OutgoingNetBuffer_Byte_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<OutgoingNetBuffer>.NativeClassPtr, 100670257);
	}

	public unsafe static implicit operator byte(OutgoingNetBuffer e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(OutgoingNetBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_Byte_OutgoingNetBuffer_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static implicit operator OutgoingNetBuffer(byte e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(OutgoingNetBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_OutgoingNetBuffer_Byte_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<OutgoingNetBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_Byte_OutgoingNetBuffer_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_OutgoingNetBuffer_Byte_0;

	public byte Value;
}
```
