---
nav_exclude: true
search_exclude: true
---

# RenderFilterSettings

```csharp
[StructLayout(2)]
public struct RenderFilterSettings
{
	static RenderFilterSettings()
	{
		Il2CppClassPointerStore<RenderFilterSettings>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Entities.Graphics", "RenderFilterSettings");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RenderFilterSettings>.NativeClassPtr);
		RenderFilterSettings.NativeFieldInfoPtr_Layer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RenderFilterSettings>.NativeClassPtr, "Layer");
		RenderFilterSettings.NativeFieldInfoPtr_RenderingLayerMask = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RenderFilterSettings>.NativeClassPtr, "RenderingLayerMask");
		RenderFilterSettings.NativeFieldInfoPtr_MotionMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RenderFilterSettings>.NativeClassPtr, "MotionMode");
		RenderFilterSettings.NativeFieldInfoPtr_ShadowCastingMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RenderFilterSettings>.NativeClassPtr, "ShadowCastingMode");
		RenderFilterSettings.NativeFieldInfoPtr_ReceiveShadows = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RenderFilterSettings>.NativeClassPtr, "ReceiveShadows");
		RenderFilterSettings.NativeFieldInfoPtr_StaticShadowCaster = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RenderFilterSettings>.NativeClassPtr, "StaticShadowCaster");
		RenderFilterSettings.NativeMethodInfoPtr_get_Default_Public_Static_get_RenderFilterSettings_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RenderFilterSettings>.NativeClassPtr, 100663331);
		RenderFilterSettings.NativeMethodInfoPtr_get_IsInMotionPass_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RenderFilterSettings>.NativeClassPtr, 100663332);
		RenderFilterSettings.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RenderFilterSettings>.NativeClassPtr, 100663333);
		RenderFilterSettings.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_RenderFilterSettings_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RenderFilterSettings>.NativeClassPtr, 100663334);
		RenderFilterSettings.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RenderFilterSettings>.NativeClassPtr, 100663335);
		RenderFilterSettings.NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_RenderFilterSettings_RenderFilterSettings_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RenderFilterSettings>.NativeClassPtr, 100663336);
		RenderFilterSettings.NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_RenderFilterSettings_RenderFilterSettings_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RenderFilterSettings>.NativeClassPtr, 100663337);
		RenderFilterSettings.NativeMethodInfoPtr___codegen__Equals_Public_Static_Boolean_ptr_Void_ptr_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RenderFilterSettings>.NativeClassPtr, 100663338);
		RenderFilterSettings.NativeMethodInfoPtr___codegen__GetHashCode_Public_Static_Int32_ptr_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RenderFilterSettings>.NativeClassPtr, 100663339);
	}
	public unsafe static RenderFilterSettings Default
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RenderFilterSettings.NativeMethodInfoPtr_get_Default_Public_Static_get_RenderFilterSettings_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe bool IsInMotionPass
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RenderFilterSettings.NativeMethodInfoPtr_get_IsInMotionPass_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2132432, XrefRangeEnd = 2132434, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override bool Equals(Il2CppSystem.Object obj)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RenderFilterSettings.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe bool Equals(RenderFilterSettings other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RenderFilterSettings.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_RenderFilterSettings_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 2132490, RefRangeEnd = 2132491, XrefRangeStart = 2132434, XrefRangeEnd = 2132490, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RenderFilterSettings.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static bool operator ==(RenderFilterSettings left, RenderFilterSettings right)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref left;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref right;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RenderFilterSettings.NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_RenderFilterSettings_RenderFilterSettings_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static bool operator !=(RenderFilterSettings left, RenderFilterSettings right)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref left;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref right;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RenderFilterSettings.NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_RenderFilterSettings_RenderFilterSettings_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static bool __codegen__Equals(void* self, void* A_1)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = self;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = A_1;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RenderFilterSettings.NativeMethodInfoPtr___codegen__Equals_Public_Static_Boolean_ptr_Void_ptr_Void_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2132491, XrefRangeEnd = 2132492, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static int __codegen__GetHashCode(void* self)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = self;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RenderFilterSettings.NativeMethodInfoPtr___codegen__GetHashCode_Public_Static_Int32_ptr_Void_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RenderFilterSettings>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Layer;
	private static readonly IntPtr NativeFieldInfoPtr_RenderingLayerMask;
	private static readonly IntPtr NativeFieldInfoPtr_MotionMode;
	private static readonly IntPtr NativeFieldInfoPtr_ShadowCastingMode;
	private static readonly IntPtr NativeFieldInfoPtr_ReceiveShadows;
	private static readonly IntPtr NativeFieldInfoPtr_StaticShadowCaster;
	private static readonly IntPtr NativeMethodInfoPtr_get_Default_Public_Static_get_RenderFilterSettings_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsInMotionPass_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_RenderFilterSettings_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_RenderFilterSettings_RenderFilterSettings_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_RenderFilterSettings_RenderFilterSettings_0;
	private static readonly IntPtr NativeMethodInfoPtr___codegen__Equals_Public_Static_Boolean_ptr_Void_ptr_Void_0;
	private static readonly IntPtr NativeMethodInfoPtr___codegen__GetHashCode_Public_Static_Int32_ptr_Void_0;
	[FieldOffset(0)]
	public int Layer;
	[FieldOffset(4)]
	public uint RenderingLayerMask;
	[FieldOffset(8)]
	public MotionVectorGenerationMode MotionMode;
	[FieldOffset(12)]
	public ShadowCastingMode ShadowCastingMode;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool ReceiveShadows;
	[FieldOffset(17)]
	[MarshalAs(4)]
	public bool StaticShadowCaster;
}
