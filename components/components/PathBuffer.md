---
nav_exclude: true
search_exclude: true
---

# PathBuffer

```csharp
[StructLayout(2)]
public struct PathBuffer
{
	static PathBuffer()
	{
		Il2CppClassPointerStore<PathBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Pathfinding.dll", "ProjectM.Pathfinding", "PathBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PathBuffer>.NativeClassPtr);
		PathBuffer.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathBuffer>.NativeClassPtr, "Value");
		PathBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_TileCoordinate_PathBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PathBuffer>.NativeClassPtr, 100663320);
		PathBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_PathBuffer_TileCoordinate_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PathBuffer>.NativeClassPtr, 100663321);
	}
	[CallerCount(0)]
	public unsafe static implicit operator TileCoordinate(PathBuffer e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PathBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_TileCoordinate_PathBuffer_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static implicit operator PathBuffer(TileCoordinate e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PathBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_PathBuffer_TileCoordinate_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PathBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_TileCoordinate_PathBuffer_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_PathBuffer_TileCoordinate_0;
	[FieldOffset(0)]
	public TileCoordinate Value;
}
