---
nav_exclude: true
search_exclude: true
---

# SpellModPrefabGuidModifiable

```csharp
[StructLayout(2)]
public struct SpellModPrefabGuidModifiable
{
	static SpellModPrefabGuidModifiable()
	{
		Il2CppClassPointerStore<SpellModPrefabGuidModifiable>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "SpellModPrefabGuidModifiable");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellModPrefabGuidModifiable>.NativeClassPtr);
		SpellModPrefabGuidModifiable.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModPrefabGuidModifiable>.NativeClassPtr, "Condition");
		SpellModPrefabGuidModifiable.NativeFieldInfoPtr_SpellMod = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModPrefabGuidModifiable>.NativeClassPtr, "SpellMod");
		SpellModPrefabGuidModifiable.NativeFieldInfoPtr_Prefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModPrefabGuidModifiable>.NativeClassPtr, "Prefab");
		SpellModPrefabGuidModifiable.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModPrefabGuidModifiable>.NativeClassPtr, "Target");
		SpellModPrefabGuidModifiable.NativeFieldInfoPtr_TargetIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModPrefabGuidModifiable>.NativeClassPtr, "TargetIndex");
		SpellModPrefabGuidModifiable.NativeMethodInfoPtr_ShouldApplyOnClient_Public_Virtual_Final_New_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpellModPrefabGuidModifiable>.NativeClassPtr, 100672258);
		SpellModPrefabGuidModifiable.NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_GetSpellModPrefabGuid_Private_Virtual_Final_New_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpellModPrefabGuidModifiable>.NativeClassPtr, 100672259);
		SpellModPrefabGuidModifiable.NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_HasCondition_Private_Virtual_Final_New_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpellModPrefabGuidModifiable>.NativeClassPtr, 100672260);
	}
	[CallerCount(3)]
	[CachedScanResults(RefRangeStart = 12951, RefRangeEnd = 12954, XrefRangeStart = 12951, XrefRangeEnd = 12954, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool ShouldApplyOnClient()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpellModPrefabGuidModifiable.NativeMethodInfoPtr_ShouldApplyOnClient_Public_Virtual_Final_New_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe PrefabGUID ProjectM_Shared_ISpellModComponent_GetSpellModPrefabGuid()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpellModPrefabGuidModifiable.NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_GetSpellModPrefabGuid_Private_Virtual_Final_New_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1155590, XrefRangeEnd = 1155591, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool ProjectM_Shared_ISpellModComponent_HasCondition()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpellModPrefabGuidModifiable.NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_HasCondition_Private_Virtual_Final_New_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellModPrefabGuidModifiable>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_SpellMod;
	private static readonly IntPtr NativeFieldInfoPtr_Prefab;
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
	public PrefabGUID Prefab;
	[FieldOffset(16)]
	public SpellModPrefabGuidModifiableTarget Target;
	[FieldOffset(20)]
	public int TargetIndex;
}
