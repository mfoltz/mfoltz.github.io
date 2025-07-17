---
nav_exclude: true
search_exclude: true
---

# ProfessorCoilPairElement

```csharp
[StructLayout(2)]
public struct ProfessorCoilPairElement
{
	static ProfessorCoilPairElement()
	{
		Il2CppClassPointerStore<ProfessorCoilPairElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ProfessorCoilPairElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProfessorCoilPairElement>.NativeClassPtr);
		ProfessorCoilPairElement.NativeFieldInfoPtr_CoilIndex0 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilPairElement>.NativeClassPtr, "CoilIndex0");
		ProfessorCoilPairElement.NativeFieldInfoPtr_CoilIndex1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilPairElement>.NativeClassPtr, "CoilIndex1");
		ProfessorCoilPairElement.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ProfessorCoilPairElement>.NativeClassPtr, 100666821);
		ProfessorCoilPairElement.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ProfessorCoilPairElement>.NativeClassPtr, 100666822);
		ProfessorCoilPairElement.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_ProfessorCoilPairElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ProfessorCoilPairElement>.NativeClassPtr, 100666823);
		ProfessorCoilPairElement.NativeMethodInfoPtr_Equals_Public_Static_Boolean_Int32_Int32_Int32_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ProfessorCoilPairElement>.NativeClassPtr, 100666824);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 68744, XrefRangeEnd = 68750, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override bool Equals(Object obj)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ProfessorCoilPairElement.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ProfessorCoilPairElement.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe bool Equals(ProfessorCoilPairElement other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ProfessorCoilPairElement.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_ProfessorCoilPairElement_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static bool Equals(int coil0Index0, int coil0Index1, int coil1Index0, int coil1Index1)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref coil0Index0;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref coil0Index1;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref coil1Index0;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref coil1Index1;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ProfessorCoilPairElement.NativeMethodInfoPtr_Equals_Public_Static_Boolean_Int32_Int32_Int32_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProfessorCoilPairElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CoilIndex0;
	private static readonly IntPtr NativeFieldInfoPtr_CoilIndex1;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_ProfessorCoilPairElement_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Static_Boolean_Int32_Int32_Int32_Int32_0;
	[FieldOffset(0)]
	public int CoilIndex0;
	[FieldOffset(4)]
	public int CoilIndex1;
}
