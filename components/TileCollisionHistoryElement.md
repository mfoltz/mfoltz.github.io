---
nav_exclude: true
search_exclude: true
---

# TileCollisionHistoryElement

```csharp
[StructLayout(2)]
public struct TileCollisionHistoryElement
{
	static TileCollisionHistoryElement()
	{
		Il2CppClassPointerStore<TileCollisionHistoryElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "TileCollisionHistoryElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TileCollisionHistoryElement>.NativeClassPtr);
		TileCollisionHistoryElement.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TileCollisionHistoryElement>.NativeClassPtr, "Value");
		TileCollisionHistoryElement.NativeMethodInfoPtr_op_Implicit_Public_Static_Byte_TileCollisionHistoryElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TileCollisionHistoryElement>.NativeClassPtr, 100670528);
		TileCollisionHistoryElement.NativeMethodInfoPtr_op_Implicit_Public_Static_TileCollisionHistoryElement_Byte_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TileCollisionHistoryElement>.NativeClassPtr, 100670529);
	}
	[CallerCount(0)]
	public unsafe static implicit operator byte(TileCollisionHistoryElement e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileCollisionHistoryElement.NativeMethodInfoPtr_op_Implicit_Public_Static_Byte_TileCollisionHistoryElement_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static implicit operator TileCollisionHistoryElement(byte e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileCollisionHistoryElement.NativeMethodInfoPtr_op_Implicit_Public_Static_TileCollisionHistoryElement_Byte_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TileCollisionHistoryElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_Byte_TileCollisionHistoryElement_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_TileCollisionHistoryElement_Byte_0;
	[FieldOffset(0)]
	public byte Value;
}
