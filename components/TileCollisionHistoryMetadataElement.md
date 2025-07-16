# TileCollisionHistoryMetadataElement

```csharp
[StructLayout(2)]
public struct TileCollisionHistoryMetadataElement
{
	static TileCollisionHistoryMetadataElement()
	{
		Il2CppClassPointerStore<TileCollisionHistoryMetadataElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "TileCollisionHistoryMetadataElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TileCollisionHistoryMetadataElement>.NativeClassPtr);
		TileCollisionHistoryMetadataElement.NativeFieldInfoPtr_TilePosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TileCollisionHistoryMetadataElement>.NativeClassPtr, "TilePosition");
		TileCollisionHistoryMetadataElement.NativeMethodInfoPtr_op_Implicit_Public_Static_int2_TileCollisionHistoryMetadataElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TileCollisionHistoryMetadataElement>.NativeClassPtr, 100670530);
		TileCollisionHistoryMetadataElement.NativeMethodInfoPtr_op_Implicit_Public_Static_TileCollisionHistoryMetadataElement_int2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TileCollisionHistoryMetadataElement>.NativeClassPtr, 100670531);
	}
	[CallerCount(307)]
	[CachedScanResults(RefRangeStart = 1577, RefRangeEnd = 1884, XrefRangeStart = 1577, XrefRangeEnd = 1884, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static implicit operator int2(TileCollisionHistoryMetadataElement e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileCollisionHistoryMetadataElement.NativeMethodInfoPtr_op_Implicit_Public_Static_int2_TileCollisionHistoryMetadataElement_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(307)]
	[CachedScanResults(RefRangeStart = 1577, RefRangeEnd = 1884, XrefRangeStart = 1577, XrefRangeEnd = 1884, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static implicit operator TileCollisionHistoryMetadataElement(int2 e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TileCollisionHistoryMetadataElement.NativeMethodInfoPtr_op_Implicit_Public_Static_TileCollisionHistoryMetadataElement_int2_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TileCollisionHistoryMetadataElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TilePosition;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_int2_TileCollisionHistoryMetadataElement_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_TileCollisionHistoryMetadataElement_int2_0;
	[FieldOffset(0)]
	public int2 TilePosition;
}
