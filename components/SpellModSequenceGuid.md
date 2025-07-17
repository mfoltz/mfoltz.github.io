---
nav_exclude: true
search_exclude: true
---

# SpellModSequenceGuid

```csharp
[StructLayout(2)]
public struct SpellModSequenceGuid
{
	static SpellModSequenceGuid()
	{
		Il2CppClassPointerStore<SpellModSequenceGuid>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "SpellModSequenceGuid");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellModSequenceGuid>.NativeClassPtr);
		SpellModSequenceGuid.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModSequenceGuid>.NativeClassPtr, "Condition");
		SpellModSequenceGuid.NativeFieldInfoPtr_SpellMod = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModSequenceGuid>.NativeClassPtr, "SpellMod");
		SpellModSequenceGuid.NativeFieldInfoPtr_Sequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModSequenceGuid>.NativeClassPtr, "Sequence");
		SpellModSequenceGuid.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModSequenceGuid>.NativeClassPtr, "Target");
		SpellModSequenceGuid.NativeFieldInfoPtr_TargetIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModSequenceGuid>.NativeClassPtr, "TargetIndex");
		SpellModSequenceGuid.NativeMethodInfoPtr_ShouldApplyOnClient_Public_Virtual_Final_New_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpellModSequenceGuid>.NativeClassPtr, 100672262);
		SpellModSequenceGuid.NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_GetSpellModPrefabGuid_Private_Virtual_Final_New_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpellModSequenceGuid>.NativeClassPtr, 100672263);
		SpellModSequenceGuid.NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_HasCondition_Private_Virtual_Final_New_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpellModSequenceGuid>.NativeClassPtr, 100672264);
	}
	[CallerCount(3)]
	[CachedScanResults(RefRangeStart = 12951, RefRangeEnd = 12954, XrefRangeStart = 12951, XrefRangeEnd = 12954, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool ShouldApplyOnClient()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpellModSequenceGuid.NativeMethodInfoPtr_ShouldApplyOnClient_Public_Virtual_Final_New_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe PrefabGUID ProjectM_Shared_ISpellModComponent_GetSpellModPrefabGuid()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpellModSequenceGuid.NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_GetSpellModPrefabGuid_Private_Virtual_Final_New_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1155591, XrefRangeEnd = 1155592, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool ProjectM_Shared_ISpellModComponent_HasCondition()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpellModSequenceGuid.NativeMethodInfoPtr_ProjectM_Shared_ISpellModComponent_HasCondition_Private_Virtual_Final_New_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellModSequenceGuid>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_SpellMod;
	private static readonly IntPtr NativeFieldInfoPtr_Sequence;
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
	public SequenceGUID Sequence;
	[FieldOffset(16)]
	public SpellModSequenceGuidTarget Target;
	[FieldOffset(20)]
	public int TargetIndex;
}
