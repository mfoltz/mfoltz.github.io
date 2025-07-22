---
nav_exclude: true
search_exclude: false
---

# SnapshotFrameChangedBuffer

```csharp
public struct SnapshotFrameChangedBuffer
{
	static SnapshotFrameChangedBuffer()
	{
		Il2CppClassPointerStore<SnapshotFrameChangedBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "SnapshotFrameChangedBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SnapshotFrameChangedBuffer>.NativeClassPtr);
		SnapshotFrameChangedBuffer.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SnapshotFrameChangedBuffer>.NativeClassPtr, "Value");
		SnapshotFrameChangedBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_Int32_SnapshotFrameChangedBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SnapshotFrameChangedBuffer>.NativeClassPtr, 100670254);
		SnapshotFrameChangedBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_SnapshotFrameChangedBuffer_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SnapshotFrameChangedBuffer>.NativeClassPtr, 100670255);
	}

	public unsafe static implicit operator int(SnapshotFrameChangedBuffer e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SnapshotFrameChangedBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_Int32_SnapshotFrameChangedBuffer_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static implicit operator SnapshotFrameChangedBuffer(int e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SnapshotFrameChangedBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_SnapshotFrameChangedBuffer_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SnapshotFrameChangedBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_Int32_SnapshotFrameChangedBuffer_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_SnapshotFrameChangedBuffer_Int32_0;

	public int Value;
}
```
