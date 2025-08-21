---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ControllableAreaIdBuffer
{
	static ControllableAreaIdBuffer()
	{
		Il2CppClassPointerStore<ControllableAreaIdBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "ControllableAreaIdBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ControllableAreaIdBuffer>.NativeClassPtr);
		ControllableAreaIdBuffer.NativeFieldInfoPtr_AreaId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ControllableAreaIdBuffer>.NativeClassPtr, "AreaId");
		ControllableAreaIdBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_ControllableAreaIdBuffer_ControllableAreaId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ControllableAreaIdBuffer>.NativeClassPtr, 100668617);
		ControllableAreaIdBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_ControllableAreaId_ControllableAreaIdBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ControllableAreaIdBuffer>.NativeClassPtr, 100668618);
	}

	public unsafe static implicit operator ControllableAreaIdBuffer(ControllableAreaId e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ControllableAreaIdBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_ControllableAreaIdBuffer_ControllableAreaId_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static implicit operator ControllableAreaId(ControllableAreaIdBuffer e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ControllableAreaIdBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_ControllableAreaId_ControllableAreaIdBuffer_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ControllableAreaIdBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AreaId;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_ControllableAreaIdBuffer_ControllableAreaId_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_ControllableAreaId_ControllableAreaIdBuffer_0;

	public ControllableAreaId AreaId;
}
```
