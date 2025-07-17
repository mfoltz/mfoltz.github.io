---
nav_exclude: true
search_exclude: true
---

# AbilityCooldownData

```csharp
[StructLayout(2)]
public struct AbilityCooldownData
{
	static AbilityCooldownData()
	{
		Il2CppClassPointerStore<AbilityCooldownData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityCooldownData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityCooldownData>.NativeClassPtr);
		AbilityCooldownData.NativeFieldInfoPtr_ShowInteractCooldownHUD = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCooldownData>.NativeClassPtr, "ShowInteractCooldownHUD");
		AbilityCooldownData.NativeFieldInfoPtr_IgnoreCooldownModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCooldownData>.NativeClassPtr, "IgnoreCooldownModifier");
		AbilityCooldownData.NativeFieldInfoPtr_Cooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCooldownData>.NativeClassPtr, "Cooldown");
		AbilityCooldownData.NativeMethodInfoPtr__ctor_Public_Void_Boolean_Boolean_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityCooldownData>.NativeClassPtr, 100664358);
		AbilityCooldownData.NativeMethodInfoPtr_ApplyArithmeticModifiable_Public_ModificationId_SpellModArithmeticOperation_SpellModArithmeticModifiableTarget_Single_byref_SpellModArithmeticModifiableOperationData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityCooldownData>.NativeClassPtr, 100664359);
		AbilityCooldownData.NativeMethodInfoPtr_RemoveArithmeticModifiable_Public_Boolean_ModificationId_SpellModArithmeticModifiableTarget_byref_SpellModArithmeticModifiableOperationData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityCooldownData>.NativeClassPtr, 100664360);
		AbilityCooldownData.NativeMethodInfoPtr_ProjectM_Shared_IApplySpellModArithmeticModifiable_ApplyArithmeticModifiable_Private_Virtual_Final_New_ModificationId_SpellModArithmeticOperation_SpellModArithmeticModifiableTarget_Single_byref_SpellModArithmeticModifiableOperationData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityCooldownData>.NativeClassPtr, 100664361);
		AbilityCooldownData.NativeMethodInfoPtr_ProjectM_Shared_IApplySpellModArithmeticModifiable_RemoveArithmeticModifiable_Private_Virtual_Final_New_Boolean_ModificationId_SpellModArithmeticModifiableTarget_byref_SpellModArithmeticModifiableOperationData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityCooldownData>.NativeClassPtr, 100664362);
	}
	[CallerCount(0)]
	public unsafe AbilityCooldownData(bool showInteractCooldownHUD, bool ignoreCooldownModifier, float cooldown)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref showInteractCooldownHUD;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref ignoreCooldownModifier;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref cooldown;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityCooldownData.NativeMethodInfoPtr__ctor_Public_Void_Boolean_Boolean_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1060284, RefRangeEnd = 1060286, XrefRangeStart = 1060271, XrefRangeEnd = 1060284, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe ModificationId ApplyArithmeticModifiable(SpellModArithmeticOperation operation, SpellModArithmeticModifiableTarget target, float value, [In] ref SpellModArithmeticModifiableOperationData operationData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref operation;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &operationData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityCooldownData.NativeMethodInfoPtr_ApplyArithmeticModifiable_Public_ModificationId_SpellModArithmeticOperation_SpellModArithmeticModifiableTarget_Single_byref_SpellModArithmeticModifiableOperationData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1060292, RefRangeEnd = 1060294, XrefRangeStart = 1060286, XrefRangeEnd = 1060292, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool RemoveArithmeticModifiable(ModificationId modId, SpellModArithmeticModifiableTarget target, [In] ref SpellModArithmeticModifiableOperationData operationData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modId;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &operationData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityCooldownData.NativeMethodInfoPtr_RemoveArithmeticModifiable_Public_Boolean_ModificationId_SpellModArithmeticModifiableTarget_byref_SpellModArithmeticModifiableOperationData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1060294, XrefRangeEnd = 1060295, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe ModificationId ProjectM_Shared_IApplySpellModArithmeticModifiable_ApplyArithmeticModifiable(SpellModArithmeticOperation operation, SpellModArithmeticModifiableTarget target, float value, [In] ref SpellModArithmeticModifiableOperationData operationData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref operation;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &operationData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityCooldownData.NativeMethodInfoPtr_ProjectM_Shared_IApplySpellModArithmeticModifiable_ApplyArithmeticModifiable_Private_Virtual_Final_New_ModificationId_SpellModArithmeticOperation_SpellModArithmeticModifiableTarget_Single_byref_SpellModArithmeticModifiableOperationData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1060295, XrefRangeEnd = 1060296, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool ProjectM_Shared_IApplySpellModArithmeticModifiable_RemoveArithmeticModifiable(ModificationId modId, SpellModArithmeticModifiableTarget target, [In] ref SpellModArithmeticModifiableOperationData operationData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modId;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &operationData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityCooldownData.NativeMethodInfoPtr_ProjectM_Shared_IApplySpellModArithmeticModifiable_RemoveArithmeticModifiable_Private_Virtual_Final_New_Boolean_ModificationId_SpellModArithmeticModifiableTarget_byref_SpellModArithmeticModifiableOperationData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityCooldownData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ShowInteractCooldownHUD;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreCooldownModifier;
	private static readonly IntPtr NativeFieldInfoPtr_Cooldown;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Boolean_Boolean_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmeticModifiable_Public_ModificationId_SpellModArithmeticOperation_SpellModArithmeticModifiableTarget_Single_byref_SpellModArithmeticModifiableOperationData_0;
	private static readonly IntPtr NativeMethodInfoPtr_RemoveArithmeticModifiable_Public_Boolean_ModificationId_SpellModArithmeticModifiableTarget_byref_SpellModArithmeticModifiableOperationData_0;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_Shared_IApplySpellModArithmeticModifiable_ApplyArithmeticModifiable_Private_Virtual_Final_New_ModificationId_SpellModArithmeticOperation_SpellModArithmeticModifiableTarget_Single_byref_SpellModArithmeticModifiableOperationData_0;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_Shared_IApplySpellModArithmeticModifiable_RemoveArithmeticModifiable_Private_Virtual_Final_New_Boolean_ModificationId_SpellModArithmeticModifiableTarget_byref_SpellModArithmeticModifiableOperationData_0;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public readonly bool ShowInteractCooldownHUD;
	[FieldOffset(1)]
	[MarshalAs(4)]
	public readonly bool IgnoreCooldownModifier;
	[FieldOffset(4)]
	public ModifiableFloat Cooldown;
}
