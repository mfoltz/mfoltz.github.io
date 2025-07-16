# ControlledAreaPaintColorsBuffer

```csharp
[StructLayout(2)]
public struct ControlledAreaPaintColorsBuffer
{
	static ControlledAreaPaintColorsBuffer()
	{
		Il2CppClassPointerStore<ControlledAreaPaintColorsBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "ControlledAreaPaintColorsBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ControlledAreaPaintColorsBuffer>.NativeClassPtr);
		ControlledAreaPaintColorsBuffer.NativeFieldInfoPtr_Color = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ControlledAreaPaintColorsBuffer>.NativeClassPtr, "Color");
		ControlledAreaPaintColorsBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_ControlledAreaPaintColorsBuffer_Color32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ControlledAreaPaintColorsBuffer>.NativeClassPtr, 100664821);
		ControlledAreaPaintColorsBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_Color32_ControlledAreaPaintColorsBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ControlledAreaPaintColorsBuffer>.NativeClassPtr, 100664822);
	}
	[CallerCount(529)]
	[CachedScanResults(RefRangeStart = 117126, RefRangeEnd = 117655, XrefRangeStart = 117126, XrefRangeEnd = 117655, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static implicit operator ControlledAreaPaintColorsBuffer(Color32 e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ControlledAreaPaintColorsBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_ControlledAreaPaintColorsBuffer_Color32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(529)]
	[CachedScanResults(RefRangeStart = 117126, RefRangeEnd = 117655, XrefRangeStart = 117126, XrefRangeEnd = 117655, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static implicit operator Color32(ControlledAreaPaintColorsBuffer e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ControlledAreaPaintColorsBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_Color32_ControlledAreaPaintColorsBuffer_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ControlledAreaPaintColorsBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Color;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_ControlledAreaPaintColorsBuffer_Color32_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_Color32_ControlledAreaPaintColorsBuffer_0;
	[FieldOffset(0)]
	public Color32 Color;
}
