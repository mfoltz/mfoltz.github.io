# PersistentBlocksetBlockBuffer

```csharp
[StructLayout(2)]
public struct PersistentBlocksetBlockBuffer
{
	static PersistentBlocksetBlockBuffer()
	{
		Il2CppClassPointerStore<PersistentBlocksetBlockBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "PersistentBlocksetBlockBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PersistentBlocksetBlockBuffer>.NativeClassPtr);
		PersistentBlocksetBlockBuffer.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PersistentBlocksetBlockBuffer>.NativeClassPtr, "Value");
		PersistentBlocksetBlockBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_Entity_PersistentBlocksetBlockBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PersistentBlocksetBlockBuffer>.NativeClassPtr, 100664104);
		PersistentBlocksetBlockBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_PersistentBlocksetBlockBuffer_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PersistentBlocksetBlockBuffer>.NativeClassPtr, 100664105);
	}
	[CallerCount(307)]
	[CachedScanResults(RefRangeStart = 1577, RefRangeEnd = 1884, XrefRangeStart = 1577, XrefRangeEnd = 1884, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static implicit operator Entity(PersistentBlocksetBlockBuffer e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PersistentBlocksetBlockBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_Entity_PersistentBlocksetBlockBuffer_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(307)]
	[CachedScanResults(RefRangeStart = 1577, RefRangeEnd = 1884, XrefRangeStart = 1577, XrefRangeEnd = 1884, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static implicit operator PersistentBlocksetBlockBuffer(Entity e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PersistentBlocksetBlockBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_PersistentBlocksetBlockBuffer_Entity_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PersistentBlocksetBlockBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_Entity_PersistentBlocksetBlockBuffer_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_PersistentBlocksetBlockBuffer_Entity_0;
	[FieldOffset(0)]
	public Entity Value;
}
