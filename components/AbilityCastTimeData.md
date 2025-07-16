# AbilityCastTimeData

```csharp
[StructLayout(2)]
public struct AbilityCastTimeData
{
	static AbilityCastTimeData()
	{
		Il2CppClassPointerStore<AbilityCastTimeData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AbilityCastTimeData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityCastTimeData>.NativeClassPtr);
		AbilityCastTimeData.NativeFieldInfoPtr_MaxCastTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastTimeData>.NativeClassPtr, "MaxCastTime");
		AbilityCastTimeData.NativeFieldInfoPtr_PostCastTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastTimeData>.NativeClassPtr, "PostCastTime");
		AbilityCastTimeData.NativeFieldInfoPtr_HideCastBar = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastTimeData>.NativeClassPtr, "HideCastBar");
		AbilityCastTimeData.NativeMethodInfoPtr_get_TotalCastTime_Public_get_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityCastTimeData>.NativeClassPtr, 100666721);
		AbilityCastTimeData.NativeMethodInfoPtr__ctor_Public_Void_Single_Single_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityCastTimeData>.NativeClassPtr, 100666722);
		AbilityCastTimeData.NativeMethodInfoPtr_ApplyArithmeticModifiable_Public_ModificationId_SpellModArithmeticOperation_SpellModArithmeticModifiableTarget_Single_byref_SpellModArithmeticModifiableOperationData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityCastTimeData>.NativeClassPtr, 100666723);
		AbilityCastTimeData.NativeMethodInfoPtr_RemoveArithmeticModifiable_Public_Boolean_ModificationId_SpellModArithmeticModifiableTarget_byref_SpellModArithmeticModifiableOperationData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityCastTimeData>.NativeClassPtr, 100666724);
		AbilityCastTimeData.NativeMethodInfoPtr_ProjectM_Shared_IApplySpellModArithmeticModifiable_ApplyArithmeticModifiable_Private_Virtual_Final_New_ModificationId_SpellModArithmeticOperation_SpellModArithmeticModifiableTarget_Single_byref_SpellModArithmeticModifiableOperationData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityCastTimeData>.NativeClassPtr, 100666725);
		AbilityCastTimeData.NativeMethodInfoPtr_ProjectM_Shared_IApplySpellModArithmeticModifiable_RemoveArithmeticModifiable_Private_Virtual_Final_New_Boolean_ModificationId_SpellModArithmeticModifiableTarget_byref_SpellModArithmeticModifiableOperationData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityCastTimeData>.NativeClassPtr, 100666726);
	}
	public unsafe float TotalCastTime
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityCastTimeData.NativeMethodInfoPtr_get_TotalCastTime_Public_get_Single_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(0)]
	public unsafe AbilityCastTimeData(float maxCastTime, float postCastTime, bool hideCastBar)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref maxCastTime;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref postCastTime;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref hideCastBar;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityCastTimeData.NativeMethodInfoPtr__ctor_Public_Void_Single_Single_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(3)]
	[CachedScanResults(RefRangeStart = 67938, RefRangeEnd = 67941, XrefRangeStart = 67936, XrefRangeEnd = 67938, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe ModificationId ApplyArithmeticModifiable(SpellModArithmeticOperation operation, SpellModArithmeticModifiableTarget target, float value, [In] ref SpellModArithmeticModifiableOperationData operationData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref operation;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &operationData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityCastTimeData.NativeMethodInfoPtr_ApplyArithmeticModifiable_Public_ModificationId_SpellModArithmeticOperation_SpellModArithmeticModifiableTarget_Single_byref_SpellModArithmeticModifiableOperationData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 67947, RefRangeEnd = 67949, XrefRangeStart = 67941, XrefRangeEnd = 67947, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool RemoveArithmeticModifiable(ModificationId modId, SpellModArithmeticModifiableTarget target, [In] ref SpellModArithmeticModifiableOperationData operationData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modId;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &operationData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityCastTimeData.NativeMethodInfoPtr_RemoveArithmeticModifiable_Public_Boolean_ModificationId_SpellModArithmeticModifiableTarget_byref_SpellModArithmeticModifiableOperationData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 67949, XrefRangeEnd = 67950, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe ModificationId ProjectM_Shared_IApplySpellModArithmeticModifiable_ApplyArithmeticModifiable(SpellModArithmeticOperation operation, SpellModArithmeticModifiableTarget target, float value, [In] ref SpellModArithmeticModifiableOperationData operationData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref operation;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &operationData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityCastTimeData.NativeMethodInfoPtr_ProjectM_Shared_IApplySpellModArithmeticModifiable_ApplyArithmeticModifiable_Private_Virtual_Final_New_ModificationId_SpellModArithmeticOperation_SpellModArithmeticModifiableTarget_Single_byref_SpellModArithmeticModifiableOperationData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 67950, XrefRangeEnd = 67951, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool ProjectM_Shared_IApplySpellModArithmeticModifiable_RemoveArithmeticModifiable(ModificationId modId, SpellModArithmeticModifiableTarget target, [In] ref SpellModArithmeticModifiableOperationData operationData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modId;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &operationData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityCastTimeData.NativeMethodInfoPtr_ProjectM_Shared_IApplySpellModArithmeticModifiable_RemoveArithmeticModifiable_Private_Virtual_Final_New_Boolean_ModificationId_SpellModArithmeticModifiableTarget_byref_SpellModArithmeticModifiableOperationData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityCastTimeData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MaxCastTime;
	private static readonly IntPtr NativeFieldInfoPtr_PostCastTime;
	private static readonly IntPtr NativeFieldInfoPtr_HideCastBar;
	private static readonly IntPtr NativeMethodInfoPtr_get_TotalCastTime_Public_get_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Single_Single_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmeticModifiable_Public_ModificationId_SpellModArithmeticOperation_SpellModArithmeticModifiableTarget_Single_byref_SpellModArithmeticModifiableOperationData_0;
	private static readonly IntPtr NativeMethodInfoPtr_RemoveArithmeticModifiable_Public_Boolean_ModificationId_SpellModArithmeticModifiableTarget_byref_SpellModArithmeticModifiableOperationData_0;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_Shared_IApplySpellModArithmeticModifiable_ApplyArithmeticModifiable_Private_Virtual_Final_New_ModificationId_SpellModArithmeticOperation_SpellModArithmeticModifiableTarget_Single_byref_SpellModArithmeticModifiableOperationData_0;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_Shared_IApplySpellModArithmeticModifiable_RemoveArithmeticModifiable_Private_Virtual_Final_New_Boolean_ModificationId_SpellModArithmeticModifiableTarget_byref_SpellModArithmeticModifiableOperationData_0;
	[FieldOffset(0)]
	public ModifiableFloat MaxCastTime;
	[FieldOffset(4)]
	public ModifiableFloat PostCastTime;
	[FieldOffset(8)]
	[MarshalAs(4)]
	public readonly bool HideCastBar;
}
