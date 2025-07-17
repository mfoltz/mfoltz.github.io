---
nav_exclude: true
search_exclude: true
---

# UnlockedShapeshiftElement

```csharp
[StructLayout(2)]
public struct UnlockedShapeshiftElement
{
	static UnlockedShapeshiftElement()
	{
		Il2CppClassPointerStore<UnlockedShapeshiftElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "UnlockedShapeshiftElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnlockedShapeshiftElement>.NativeClassPtr);
		UnlockedShapeshiftElement.NativeFieldInfoPtr_UnlockedShapeshift = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnlockedShapeshiftElement>.NativeClassPtr, "UnlockedShapeshift");
		UnlockedShapeshiftElement.NativeFieldInfoPtr_UserHasRequiredContentFlags = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnlockedShapeshiftElement>.NativeClassPtr, "UserHasRequiredContentFlags");
		UnlockedShapeshiftElement.NativeMethodInfoPtr_op_Implicit_Public_Static_PrefabGUID_UnlockedShapeshiftElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnlockedShapeshiftElement>.NativeClassPtr, 100670730);
		UnlockedShapeshiftElement.NativeMethodInfoPtr_op_Implicit_Public_Static_UnlockedShapeshiftElement_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnlockedShapeshiftElement>.NativeClassPtr, 100670731);
	}
	[CallerCount(529)]
	[CachedScanResults(RefRangeStart = 117126, RefRangeEnd = 117655, XrefRangeStart = 117126, XrefRangeEnd = 117126, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static implicit operator PrefabGUID(UnlockedShapeshiftElement e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnlockedShapeshiftElement.NativeMethodInfoPtr_op_Implicit_Public_Static_PrefabGUID_UnlockedShapeshiftElement_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static implicit operator UnlockedShapeshiftElement(PrefabGUID e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnlockedShapeshiftElement.NativeMethodInfoPtr_op_Implicit_Public_Static_UnlockedShapeshiftElement_PrefabGUID_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnlockedShapeshiftElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UnlockedShapeshift;
	private static readonly IntPtr NativeFieldInfoPtr_UserHasRequiredContentFlags;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_PrefabGUID_UnlockedShapeshiftElement_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_UnlockedShapeshiftElement_PrefabGUID_0;
	[FieldOffset(0)]
	public PrefabGUID UnlockedShapeshift;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool UserHasRequiredContentFlags;
}
