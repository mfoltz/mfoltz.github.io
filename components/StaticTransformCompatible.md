---
nav_exclude: true
search_exclude: true
---

# StaticTransformCompatible

```csharp
[StructLayout(2)]
public struct StaticTransformCompatible
{
	static StaticTransformCompatible()
	{
		Il2CppClassPointerStore<StaticTransformCompatible>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "StaticTransformCompatible");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StaticTransformCompatible>.NativeClassPtr);
		StaticTransformCompatible.NativeFieldInfoPtr_UseStaticTransform = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StaticTransformCompatible>.NativeClassPtr, "UseStaticTransform");
		StaticTransformCompatible.NativeFieldInfoPtr_StaticTransform = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StaticTransformCompatible>.NativeClassPtr, "StaticTransform");
		StaticTransformCompatible.NativeFieldInfoPtr_NonStaticTransform_Pos = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StaticTransformCompatible>.NativeClassPtr, "NonStaticTransform_Pos");
		StaticTransformCompatible.NativeFieldInfoPtr_NonStaticTransform_Height = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StaticTransformCompatible>.NativeClassPtr, "NonStaticTransform_Height");
		StaticTransformCompatible.NativeFieldInfoPtr_NonStaticTransform_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StaticTransformCompatible>.NativeClassPtr, "NonStaticTransform_Rotation");
		StaticTransformCompatible.NativeMethodInfoPtr_SetStaticTransform_Public_Void_StaticTransformIndex_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StaticTransformCompatible>.NativeClassPtr, 100668044);
		StaticTransformCompatible.NativeMethodInfoPtr_SetNonStaticTransform_Public_Void_Translation_Rotation_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StaticTransformCompatible>.NativeClassPtr, 100668045);
	}
	[CallerCount(0)]
	public unsafe void SetStaticTransform(StaticTransformIndex staticTransform)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref staticTransform;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StaticTransformCompatible.NativeMethodInfoPtr_SetStaticTransform_Public_Void_StaticTransformIndex_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1103141, XrefRangeEnd = 1103142, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void SetNonStaticTransform(Translation newRoofTranslation, Rotation roofRotation)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref newRoofTranslation;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref roofRotation;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StaticTransformCompatible.NativeMethodInfoPtr_SetNonStaticTransform_Public_Void_Translation_Rotation_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StaticTransformCompatible>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UseStaticTransform;
	private static readonly IntPtr NativeFieldInfoPtr_StaticTransform;
	private static readonly IntPtr NativeFieldInfoPtr_NonStaticTransform_Pos;
	private static readonly IntPtr NativeFieldInfoPtr_NonStaticTransform_Height;
	private static readonly IntPtr NativeFieldInfoPtr_NonStaticTransform_Rotation;
	private static readonly IntPtr NativeMethodInfoPtr_SetStaticTransform_Public_Void_StaticTransformIndex_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetNonStaticTransform_Public_Void_Translation_Rotation_0;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool UseStaticTransform;
	[FieldOffset(2)]
	public StaticTransformIndex StaticTransform;
	[FieldOffset(8)]
	public float2 NonStaticTransform_Pos;
	[FieldOffset(16)]
	public float NonStaticTransform_Height;
	[FieldOffset(20)]
	public TileRotation NonStaticTransform_Rotation;
}
