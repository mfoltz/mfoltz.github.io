# ServantPreferredWorkstationsBuffer

```csharp
[StructLayout(2)]
public struct ServantPreferredWorkstationsBuffer
{
	static ServantPreferredWorkstationsBuffer()
	{
		Il2CppClassPointerStore<ServantPreferredWorkstationsBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ServantPreferredWorkstationsBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantPreferredWorkstationsBuffer>.NativeClassPtr);
		ServantPreferredWorkstationsBuffer.NativeFieldInfoPtr_PrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantPreferredWorkstationsBuffer>.NativeClassPtr, "PrefabGuid");
		ServantPreferredWorkstationsBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_PrefabGUID_ServantPreferredWorkstationsBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantPreferredWorkstationsBuffer>.NativeClassPtr, 100668140);
		ServantPreferredWorkstationsBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_ServantPreferredWorkstationsBuffer_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantPreferredWorkstationsBuffer>.NativeClassPtr, 100668141);
	}
	[CallerCount(529)]
	[CachedScanResults(RefRangeStart = 117126, RefRangeEnd = 117655, XrefRangeStart = 117126, XrefRangeEnd = 117655, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static implicit operator PrefabGUID(ServantPreferredWorkstationsBuffer e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantPreferredWorkstationsBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_PrefabGUID_ServantPreferredWorkstationsBuffer_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(529)]
	[CachedScanResults(RefRangeStart = 117126, RefRangeEnd = 117655, XrefRangeStart = 117126, XrefRangeEnd = 117655, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static implicit operator ServantPreferredWorkstationsBuffer(PrefabGUID e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantPreferredWorkstationsBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_ServantPreferredWorkstationsBuffer_PrefabGUID_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantPreferredWorkstationsBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGuid;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_PrefabGUID_ServantPreferredWorkstationsBuffer_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_ServantPreferredWorkstationsBuffer_PrefabGUID_0;
	[FieldOffset(0)]
	public PrefabGUID PrefabGuid;
}
