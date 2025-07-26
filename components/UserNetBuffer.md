# UserNetBuffer

```csharp
[StructLayout(2)]
public struct UserNetBuffer
{
	static UserNetBuffer()
	{
		Il2CppClassPointerStore<UserNetBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "UserNetBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UserNetBuffer>.NativeClassPtr);
		UserNetBuffer.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserNetBuffer>.NativeClassPtr, "Value");
		UserNetBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_Byte_UserNetBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UserNetBuffer>.NativeClassPtr, 100670523);
		UserNetBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_UserNetBuffer_Byte_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UserNetBuffer>.NativeClassPtr, 100670524);
	}
	[CallerCount(0)]
	public unsafe static implicit operator byte(UserNetBuffer e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UserNetBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_Byte_UserNetBuffer_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static implicit operator UserNetBuffer(byte e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UserNetBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_UserNetBuffer_Byte_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UserNetBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_Byte_UserNetBuffer_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_UserNetBuffer_Byte_0;
	[FieldOffset(0)]
	public byte Value;
}
