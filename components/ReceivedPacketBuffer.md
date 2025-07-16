# ReceivedPacketBuffer

```csharp
[StructLayout(2)]
public struct ReceivedPacketBuffer
{
	static ReceivedPacketBuffer()
	{
		Il2CppClassPointerStore<ReceivedPacketBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "ReceivedPacketBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ReceivedPacketBuffer>.NativeClassPtr);
		ReceivedPacketBuffer.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReceivedPacketBuffer>.NativeClassPtr, "Value");
		ReceivedPacketBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_Byte_ReceivedPacketBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ReceivedPacketBuffer>.NativeClassPtr, 100684823);
		ReceivedPacketBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_ReceivedPacketBuffer_Byte_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ReceivedPacketBuffer>.NativeClassPtr, 100684824);
	}
	[CallerCount(0)]
	public unsafe static implicit operator byte(ReceivedPacketBuffer e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ReceivedPacketBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_Byte_ReceivedPacketBuffer_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static implicit operator ReceivedPacketBuffer(byte e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ReceivedPacketBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_ReceivedPacketBuffer_Byte_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ReceivedPacketBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_Byte_ReceivedPacketBuffer_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_ReceivedPacketBuffer_Byte_0;
	[FieldOffset(0)]
	public byte Value;
}
