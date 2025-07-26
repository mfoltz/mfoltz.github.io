# TileDisabledCollisionHistoryElement

```csharp
[StructLayout(2)]
public struct TileDisabledCollisionHistoryElement
{
	static TileDisabledCollisionHistoryElement()
	{
		Il2CppClassPointerStore<TileDisabledCollisionHistoryElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "TileDisabledCollisionHistoryElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TileDisabledCollisionHistoryElement>.NativeClassPtr);
		TileDisabledCollisionHistoryElement.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TileDisabledCollisionHistoryElement>.NativeClassPtr, "Value");
		TileDisabledCollisionHistoryElement.NativeMethodInfoPtr_op_Implicit_Public_Static_Boolean_TileDisabledCollisionHistoryElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TileDisabledCollisionHistoryElement>.NativeClassPtr, 100670532);
		TileDisabledCollisionHistoryElement.NativeMethodInfoPtr_op_Implicit_Public_Static_TileDisabledCollisionHistoryElement_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TileDisabledCollisionHistoryElement>.NativeClassPtr, 100670533);
	}
	[CallerCount(0)]
	public unsafe static implicit operator bool(TileDisabledCollisionHistoryElement e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileDisabledCollisionHistoryElement.NativeMethodInfoPtr_op_Implicit_Public_Static_Boolean_TileDisabledCollisionHistoryElement_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static implicit operator TileDisabledCollisionHistoryElement(bool e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileDisabledCollisionHistoryElement.NativeMethodInfoPtr_op_Implicit_Public_Static_TileDisabledCollisionHistoryElement_Boolean_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TileDisabledCollisionHistoryElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_Boolean_TileDisabledCollisionHistoryElement_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_TileDisabledCollisionHistoryElement_Boolean_0;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool Value;
}
