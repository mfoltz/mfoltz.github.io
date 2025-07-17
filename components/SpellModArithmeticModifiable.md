---
nav_exclude: true
search_exclude: true
---

# SpellModArithmeticModifiable

```csharp
[StructLayout(2)]
public struct SpellModArithmeticModifiable
{
	static SpellModArithmeticModifiable()
	{
		Il2CppClassPointerStore<SpellModArithmeticModifiable>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "SpellModArithmeticModifiable");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellModArithmeticModifiable>.NativeClassPtr);
		SpellModArithmeticModifiable.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModArithmeticModifiable>.NativeClassPtr, "Condition");
		SpellModArithmeticModifiable.NativeFieldInfoPtr_SpellMod = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModArithmeticModifiable>.NativeClassPtr, "SpellMod");
		SpellModArithmeticModifiable.NativeFieldInfoPtr_Operation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModArithmeticModifiable>.NativeClassPtr, "Operation");
		SpellModArithmeticModifiable.NativeFieldInfoPtr_ValueIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModArithmeticModifiable>.NativeClassPtr, "ValueIndex");
		SpellModArithmeticModifiable.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModArithmeticModifiable>.NativeClassPtr, "Target");
		SpellModArithmeticModifiable.NativeFieldInfoPtr_TargetIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModArithmeticModifiable>.NativeClassPtr, "TargetIndex");
		SpellModArithmeticModifiable.NativeMethodInfoPtr_ShouldApplyOnClient_Public_Virtual_Final_New_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpellModArithmeticModifiable>.NativeClassPtr, 100672138);
		SpellModArithmeticModifiable.NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_GetSpellModPrefabGuid_Private_Virtual_Final_New_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpellModArithmeticModifiable>.NativeClassPtr, 100672139);
		SpellModArithmeticModifiable.NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_HasCondition_Private_Virtual_Final_New_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpellModArithmeticModifiable>.NativeClassPtr, 100672140);
	}
	[CallerCount(0)]
	public unsafe bool ShouldApplyOnClient()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpellModArithmeticModifiable.NativeMethodInfoPtr_ShouldApplyOnClient_Public_Virtual_Final_New_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe PrefabGUID ProjectM_Shared_ISpellModComponent_GetSpellModPrefabGuid()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpellModArithmeticModifiable.NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_GetSpellModPrefabGuid_Private_Virtual_Final_New_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1154699, XrefRangeEnd = 1154700, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool ProjectM_Shared_ISpellModComponent_HasCondition()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpellModArithmeticModifiable.NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_HasCondition_Private_Virtual_Final_New_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellModArithmeticModifiable>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_SpellMod;
	private static readonly IntPtr NativeFieldInfoPtr_Operation;
	private static readonly IntPtr NativeFieldInfoPtr_ValueIndex;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_TargetIndex;
	private static readonly IntPtr NativeMethodInfoPtr_ShouldApplyOnClient_Public_Virtual_Final_New_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_GetSpellModPrefabGuid_Private_Virtual_Final_New_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_HasCondition_Private_Virtual_Final_New_Boolean_0;
	[FieldOffset(0)]
	public BlobAssetReference<ConditionBlob> Condition;
	[FieldOffset(8)]
	public PrefabGUID SpellMod;
	[FieldOffset(12)]
	public SpellModArithmeticOperation Operation;
	[FieldOffset(13)]
	public byte ValueIndex;
	[FieldOffset(14)]
	public SpellModArithmeticModifiableTarget Target;
	[FieldOffset(16)]
	public int TargetIndex;
}
