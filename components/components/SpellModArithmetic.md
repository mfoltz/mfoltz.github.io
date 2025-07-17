---
nav_exclude: true
search_exclude: true
---

# SpellModArithmetic

```csharp
[StructLayout(2)]
public struct SpellModArithmetic
{
	static SpellModArithmetic()
	{
		Il2CppClassPointerStore<SpellModArithmetic>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "SpellModArithmetic");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellModArithmetic>.NativeClassPtr);
		SpellModArithmetic.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModArithmetic>.NativeClassPtr, "Condition");
		SpellModArithmetic.NativeFieldInfoPtr_SpellMod = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModArithmetic>.NativeClassPtr, "SpellMod");
		SpellModArithmetic.NativeFieldInfoPtr_Operation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModArithmetic>.NativeClassPtr, "Operation");
		SpellModArithmetic.NativeFieldInfoPtr_ValueIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModArithmetic>.NativeClassPtr, "ValueIndex");
		SpellModArithmetic.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModArithmetic>.NativeClassPtr, "Target");
		SpellModArithmetic.NativeFieldInfoPtr_TargetIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModArithmetic>.NativeClassPtr, "TargetIndex");
		SpellModArithmetic.NativeMethodInfoPtr_ShouldApplyOnClient_Public_Virtual_Final_New_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpellModArithmetic>.NativeClassPtr, 100672132);
		SpellModArithmetic.NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_GetSpellModPrefabGuid_Private_Virtual_Final_New_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpellModArithmetic>.NativeClassPtr, 100672133);
		SpellModArithmetic.NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_HasCondition_Private_Virtual_Final_New_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpellModArithmetic>.NativeClassPtr, 100672134);
	}
	[CallerCount(0)]
	public unsafe bool ShouldApplyOnClient()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpellModArithmetic.NativeMethodInfoPtr_ShouldApplyOnClient_Public_Virtual_Final_New_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe PrefabGUID ProjectM_Shared_ISpellModComponent_GetSpellModPrefabGuid()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpellModArithmetic.NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_GetSpellModPrefabGuid_Private_Virtual_Final_New_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1154647, XrefRangeEnd = 1154648, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool ProjectM_Shared_ISpellModComponent_HasCondition()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpellModArithmetic.NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_HasCondition_Private_Virtual_Final_New_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellModArithmetic>.NativeClassPtr, ref this));
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
	public SpellModArithmeticTarget Target;
	[FieldOffset(16)]
	public int TargetIndex;
}
