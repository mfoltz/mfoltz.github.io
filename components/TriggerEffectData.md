# TriggerEffectData

```csharp
[StructLayout(2)]
public struct TriggerEffectData
{
	static TriggerEffectData()
	{
		Il2CppClassPointerStore<TriggerEffectData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Haptics.dll", "ProjectM.Haptics", "TriggerEffectData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TriggerEffectData>.NativeClassPtr);
		TriggerEffectData.NativeFieldInfoPtr_TriggerButton = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TriggerEffectData>.NativeClassPtr, "TriggerButton");
		TriggerEffectData.NativeFieldInfoPtr_EffectCommand = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TriggerEffectData>.NativeClassPtr, "EffectCommand");
		TriggerEffectData.NativeMethodInfoPtr__ctor_Public_Void_TriggerButton_AdaptiveTriggerEffectParams_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TriggerEffectData>.NativeClassPtr, 100663303);
		TriggerEffectData.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_TriggerEffectData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TriggerEffectData>.NativeClassPtr, 100663304);
		TriggerEffectData.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TriggerEffectData>.NativeClassPtr, 100663305);
		TriggerEffectData.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TriggerEffectData>.NativeClassPtr, 100663306);
		TriggerEffectData.NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_TriggerEffectData_TriggerEffectData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TriggerEffectData>.NativeClassPtr, 100663307);
		TriggerEffectData.NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_TriggerEffectData_TriggerEffectData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TriggerEffectData>.NativeClassPtr, 100663308);
		TriggerEffectData.NativeMethodInfoPtr_get_Default_Public_Static_get_TriggerEffectData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TriggerEffectData>.NativeClassPtr, 100663309);
	}
	[CallerCount(0)]
	public unsafe TriggerEffectData(TriggerButton triggerButton, AdaptiveTriggerEffectParams effectCommand)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref triggerButton;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref effectCommand;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TriggerEffectData.NativeMethodInfoPtr__ctor_Public_Void_TriggerButton_AdaptiveTriggerEffectParams_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(3)]
	[CachedScanResults(RefRangeStart = 2372181, RefRangeEnd = 2372184, XrefRangeStart = 2372180, XrefRangeEnd = 2372181, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool Equals(TriggerEffectData other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TriggerEffectData.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_TriggerEffectData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2372184, XrefRangeEnd = 2372187, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override bool Equals(Object obj)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TriggerEffectData.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2372187, XrefRangeEnd = 2372191, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TriggerEffectData.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2372191, XrefRangeEnd = 2372192, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool operator ==(TriggerEffectData left, TriggerEffectData right)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref left;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref right;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TriggerEffectData.NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_TriggerEffectData_TriggerEffectData_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2372192, XrefRangeEnd = 2372193, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool operator !=(TriggerEffectData left, TriggerEffectData right)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref left;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref right;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TriggerEffectData.NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_TriggerEffectData_TriggerEffectData_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public unsafe static TriggerEffectData Default
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TriggerEffectData.NativeMethodInfoPtr_get_Default_Public_Static_get_TriggerEffectData_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TriggerEffectData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TriggerButton;
	private static readonly IntPtr NativeFieldInfoPtr_EffectCommand;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_TriggerButton_AdaptiveTriggerEffectParams_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_TriggerEffectData_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_TriggerEffectData_TriggerEffectData_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_TriggerEffectData_TriggerEffectData_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Default_Public_Static_get_TriggerEffectData_0;
	[FieldOffset(0)]
	public TriggerButton TriggerButton;
	[FieldOffset(4)]
	public AdaptiveTriggerEffectParams EffectCommand;
}
