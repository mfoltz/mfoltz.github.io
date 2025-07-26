# ModifyMovementDuringCastData

```csharp
[StructLayout(2)]
public struct ModifyMovementDuringCastData
{
	static ModifyMovementDuringCastData()
	{
		Il2CppClassPointerStore<ModifyMovementDuringCastData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "ModifyMovementDuringCastData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyMovementDuringCastData>.NativeClassPtr);
		ModifyMovementDuringCastData.NativeFieldInfoPtr_MovementSpeedMultiplier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyMovementDuringCastData>.NativeClassPtr, "MovementSpeedMultiplier");
		ModifyMovementDuringCastData.NativeFieldInfoPtr_InDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyMovementDuringCastData>.NativeClassPtr, "InDuration");
		ModifyMovementDuringCastData.NativeFieldInfoPtr_Duration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyMovementDuringCastData>.NativeClassPtr, "Duration");
		ModifyMovementDuringCastData.NativeFieldInfoPtr_OutDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyMovementDuringCastData>.NativeClassPtr, "OutDuration");
		ModifyMovementDuringCastData.NativeFieldInfoPtr_UseCastDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyMovementDuringCastData>.NativeClassPtr, "UseCastDuration");
		ModifyMovementDuringCastData.NativeMethodInfoPtr__ctor_Public_Void_Single_Single_Single_Single_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModifyMovementDuringCastData>.NativeClassPtr, 100670534);
		ModifyMovementDuringCastData.NativeMethodInfoPtr_Evaluate_Public_Single_Single_Nullable_Unboxed_1_Single_Single_Single_Single_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModifyMovementDuringCastData>.NativeClassPtr, 100670535);
		ModifyMovementDuringCastData.NativeMethodInfoPtr_ApplyArithmeticModifiable_Public_ModificationId_SpellModArithmeticOperation_SpellModArithmeticModifiableTarget_Single_byref_SpellModArithmeticModifiableOperationData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModifyMovementDuringCastData>.NativeClassPtr, 100670536);
		ModifyMovementDuringCastData.NativeMethodInfoPtr_RemoveArithmeticModifiable_Public_Boolean_ModificationId_SpellModArithmeticModifiableTarget_byref_SpellModArithmeticModifiableOperationData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModifyMovementDuringCastData>.NativeClassPtr, 100670537);
		ModifyMovementDuringCastData.NativeMethodInfoPtr_ProjectM_Shared_IApplySpellModArithmeticModifiable_ApplyArithmeticModifiable_Private_Virtual_Final_New_ModificationId_SpellModArithmeticOperation_SpellModArithmeticModifiableTarget_Single_byref_SpellModArithmeticModifiableOperationData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModifyMovementDuringCastData>.NativeClassPtr, 100670538);
		ModifyMovementDuringCastData.NativeMethodInfoPtr_ProjectM_Shared_IApplySpellModArithmeticModifiable_RemoveArithmeticModifiable_Private_Virtual_Final_New_Boolean_ModificationId_SpellModArithmeticModifiableTarget_byref_SpellModArithmeticModifiableOperationData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModifyMovementDuringCastData>.NativeClassPtr, 100670539);
	}
	[CallerCount(0)]
	public unsafe ModifyMovementDuringCastData(float movementSpeedMultiplier, float inDuration, float duration, float outDuration, bool useCastDuration)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref movementSpeedMultiplier;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref inDuration;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref duration;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref outDuration;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref useCastDuration;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModifyMovementDuringCastData.NativeMethodInfoPtr__ctor_Public_Void_Single_Single_Single_Single_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1138008, RefRangeEnd = 1138009, XrefRangeStart = 1138004, XrefRangeEnd = 1138008, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe float Evaluate(float inTime, Nullable_Unboxed<float> outTime, float baseValue, float inDuration, float duration, float outDuration)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref inTime;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref outTime;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref baseValue;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref inDuration;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref duration;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref outDuration;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModifyMovementDuringCastData.NativeMethodInfoPtr_Evaluate_Public_Single_Single_Nullable_Unboxed_1_Single_Single_Single_Single_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1138019, RefRangeEnd = 1138020, XrefRangeStart = 1138009, XrefRangeEnd = 1138019, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe ModificationId ApplyArithmeticModifiable(SpellModArithmeticOperation operation, SpellModArithmeticModifiableTarget target, float value, [In] ref SpellModArithmeticModifiableOperationData operationData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref operation;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &operationData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModifyMovementDuringCastData.NativeMethodInfoPtr_ApplyArithmeticModifiable_Public_ModificationId_SpellModArithmeticOperation_SpellModArithmeticModifiableTarget_Single_byref_SpellModArithmeticModifiableOperationData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1138035, RefRangeEnd = 1138036, XrefRangeStart = 1138020, XrefRangeEnd = 1138035, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool RemoveArithmeticModifiable(ModificationId modId, SpellModArithmeticModifiableTarget target, [In] ref SpellModArithmeticModifiableOperationData operationData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modId;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &operationData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModifyMovementDuringCastData.NativeMethodInfoPtr_RemoveArithmeticModifiable_Public_Boolean_ModificationId_SpellModArithmeticModifiableTarget_byref_SpellModArithmeticModifiableOperationData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1138036, XrefRangeEnd = 1138037, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe ModificationId ProjectM_Shared_IApplySpellModArithmeticModifiable_ApplyArithmeticModifiable(SpellModArithmeticOperation operation, SpellModArithmeticModifiableTarget target, float value, [In] ref SpellModArithmeticModifiableOperationData operationData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref operation;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &operationData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModifyMovementDuringCastData.NativeMethodInfoPtr_ProjectM_Shared_IApplySpellModArithmeticModifiable_ApplyArithmeticModifiable_Private_Virtual_Final_New_ModificationId_SpellModArithmeticOperation_SpellModArithmeticModifiableTarget_Single_byref_SpellModArithmeticModifiableOperationData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1138037, XrefRangeEnd = 1138038, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool ProjectM_Shared_IApplySpellModArithmeticModifiable_RemoveArithmeticModifiable(ModificationId modId, SpellModArithmeticModifiableTarget target, [In] ref SpellModArithmeticModifiableOperationData operationData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modId;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &operationData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModifyMovementDuringCastData.NativeMethodInfoPtr_ProjectM_Shared_IApplySpellModArithmeticModifiable_RemoveArithmeticModifiable_Private_Virtual_Final_New_Boolean_ModificationId_SpellModArithmeticModifiableTarget_byref_SpellModArithmeticModifiableOperationData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyMovementDuringCastData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MovementSpeedMultiplier;
	private static readonly IntPtr NativeFieldInfoPtr_InDuration;
	private static readonly IntPtr NativeFieldInfoPtr_Duration;
	private static readonly IntPtr NativeFieldInfoPtr_OutDuration;
	private static readonly IntPtr NativeFieldInfoPtr_UseCastDuration;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Single_Single_Single_Single_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_Evaluate_Public_Single_Single_Nullable_Unboxed_1_Single_Single_Single_Single_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmeticModifiable_Public_ModificationId_SpellModArithmeticOperation_SpellModArithmeticModifiableTarget_Single_byref_SpellModArithmeticModifiableOperationData_0;
	private static readonly IntPtr NativeMethodInfoPtr_RemoveArithmeticModifiable_Public_Boolean_ModificationId_SpellModArithmeticModifiableTarget_byref_SpellModArithmeticModifiableOperationData_0;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_Shared_IApplySpellModArithmeticModifiable_ApplyArithmeticModifiable_Private_Virtual_Final_New_ModificationId_SpellModArithmeticOperation_SpellModArithmeticModifiableTarget_Single_byref_SpellModArithmeticModifiableOperationData_0;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_Shared_IApplySpellModArithmeticModifiable_RemoveArithmeticModifiable_Private_Virtual_Final_New_Boolean_ModificationId_SpellModArithmeticModifiableTarget_byref_SpellModArithmeticModifiableOperationData_0;
	[FieldOffset(0)]
	public ModifiableFloat MovementSpeedMultiplier;
	[FieldOffset(4)]
	public ModifiableFloat InDuration;
	[FieldOffset(8)]
	public ModifiableFloat Duration;
	[FieldOffset(12)]
	public ModifiableFloat OutDuration;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public readonly bool UseCastDuration;
}
