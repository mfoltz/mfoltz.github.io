# SurfaceControlColors

```csharp
[StructLayout(2)]
public struct SurfaceControlColors
{
	static SurfaceControlColors()
	{
		Il2CppClassPointerStore<SurfaceControlColors>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "SurfaceControlColors");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SurfaceControlColors>.NativeClassPtr);
		SurfaceControlColors.NativeFieldInfoPtr_Color = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SurfaceControlColors>.NativeClassPtr, "Color");
		SurfaceControlColors.NativeMethodInfoPtr_op_Implicit_Public_Static_Color32_SurfaceControlColors_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SurfaceControlColors>.NativeClassPtr, 100664765);
		SurfaceControlColors.NativeMethodInfoPtr_op_Implicit_Public_Static_SurfaceControlColors_Color32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SurfaceControlColors>.NativeClassPtr, 100664766);
		SurfaceControlColors.NativeMethodInfoPtr_GetDominantChannelIndex_Public_Byte_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SurfaceControlColors>.NativeClassPtr, 100664767);
		SurfaceControlColors.NativeMethodInfoPtr_GetWeakestChannel_Public_Byte_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SurfaceControlColors>.NativeClassPtr, 100664768);
		SurfaceControlColors.NativeMethodInfoPtr_GetChannelWeight_Public_Byte_Byte_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SurfaceControlColors>.NativeClassPtr, 100664769);
		SurfaceControlColors.NativeMethodInfoPtr_SetChannelValue_Public_Void_Byte_Byte_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SurfaceControlColors>.NativeClassPtr, 100664770);
		SurfaceControlColors.NativeMethodInfoPtr_CreateChannelWeight_Public_Static_Color32_Byte_Byte_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SurfaceControlColors>.NativeClassPtr, 100664771);
		SurfaceControlColors.NativeMethodInfoPtr_FromInt_Public_Static_SurfaceControlColors_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SurfaceControlColors>.NativeClassPtr, 100664772);
	}
	[CallerCount(529)]
	[CachedScanResults(RefRangeStart = 117126, RefRangeEnd = 117655, XrefRangeStart = 117126, XrefRangeEnd = 117655, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static implicit operator Color32(SurfaceControlColors e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SurfaceControlColors.NativeMethodInfoPtr_op_Implicit_Public_Static_Color32_SurfaceControlColors_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(529)]
	[CachedScanResults(RefRangeStart = 117126, RefRangeEnd = 117655, XrefRangeStart = 117126, XrefRangeEnd = 117655, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static implicit operator SurfaceControlColors(Color32 e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SurfaceControlColors.NativeMethodInfoPtr_op_Implicit_Public_Static_SurfaceControlColors_Color32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2026354, XrefRangeEnd = 2026355, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe byte GetDominantChannelIndex()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SurfaceControlColors.NativeMethodInfoPtr_GetDominantChannelIndex_Public_Byte_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2026355, XrefRangeEnd = 2026367, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe byte GetWeakestChannel(bool includeEmptyChannels)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref includeEmptyChannels;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SurfaceControlColors.NativeMethodInfoPtr_GetWeakestChannel_Public_Byte_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe byte GetChannelWeight(byte channelIndex)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref channelIndex;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SurfaceControlColors.NativeMethodInfoPtr_GetChannelWeight_Public_Byte_Byte_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe void SetChannelValue(byte channelIndex, byte weight)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref channelIndex;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref weight;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SurfaceControlColors.NativeMethodInfoPtr_SetChannelValue_Public_Void_Byte_Byte_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	public unsafe static Color32 CreateChannelWeight(byte channelIndex, byte weight)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref channelIndex;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref weight;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SurfaceControlColors.NativeMethodInfoPtr_CreateChannelWeight_Public_Static_Color32_Byte_Byte_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(529)]
	[CachedScanResults(RefRangeStart = 117126, RefRangeEnd = 117655, XrefRangeStart = 117126, XrefRangeEnd = 117655, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static SurfaceControlColors FromInt(int packedData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref packedData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SurfaceControlColors.NativeMethodInfoPtr_FromInt_Public_Static_SurfaceControlColors_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SurfaceControlColors>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Color;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_Color32_SurfaceControlColors_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_SurfaceControlColors_Color32_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetDominantChannelIndex_Public_Byte_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetWeakestChannel_Public_Byte_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetChannelWeight_Public_Byte_Byte_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetChannelValue_Public_Void_Byte_Byte_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateChannelWeight_Public_Static_Color32_Byte_Byte_0;
	private static readonly IntPtr NativeMethodInfoPtr_FromInt_Public_Static_SurfaceControlColors_Int32_0;
	[FieldOffset(0)]
	public Color32 Color;
}
