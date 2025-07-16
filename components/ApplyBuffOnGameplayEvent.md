# ApplyBuffOnGameplayEvent

```csharp
[StructLayout(2)]
public struct ApplyBuffOnGameplayEvent
{
	static ApplyBuffOnGameplayEvent()
	{
		Il2CppClassPointerStore<ApplyBuffOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ApplyBuffOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ApplyBuffOnGameplayEvent>.NativeClassPtr);
		ApplyBuffOnGameplayEvent.NativeFieldInfoPtr_BuffTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyBuffOnGameplayEvent>.NativeClassPtr, "BuffTarget");
		ApplyBuffOnGameplayEvent.NativeFieldInfoPtr_SpellTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyBuffOnGameplayEvent>.NativeClassPtr, "SpellTarget");
		ApplyBuffOnGameplayEvent.NativeFieldInfoPtr_EntityOwner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyBuffOnGameplayEvent>.NativeClassPtr, "EntityOwner");
		ApplyBuffOnGameplayEvent.NativeFieldInfoPtr_OverrideDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyBuffOnGameplayEvent>.NativeClassPtr, "OverrideDuration");
		ApplyBuffOnGameplayEvent.NativeFieldInfoPtr_Stacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyBuffOnGameplayEvent>.NativeClassPtr, "Stacks");
		ApplyBuffOnGameplayEvent.NativeFieldInfoPtr_Buff0 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyBuffOnGameplayEvent>.NativeClassPtr, "Buff0");
		ApplyBuffOnGameplayEvent.NativeFieldInfoPtr_Buff1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyBuffOnGameplayEvent>.NativeClassPtr, "Buff1");
		ApplyBuffOnGameplayEvent.NativeFieldInfoPtr_Buff2 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyBuffOnGameplayEvent>.NativeClassPtr, "Buff2");
		ApplyBuffOnGameplayEvent.NativeFieldInfoPtr_Buff3 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyBuffOnGameplayEvent>.NativeClassPtr, "Buff3");
		ApplyBuffOnGameplayEvent.NativeFieldInfoPtr_EventOnConsume = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyBuffOnGameplayEvent>.NativeClassPtr, "EventOnConsume");
		ApplyBuffOnGameplayEvent.NativeFieldInfoPtr_ConsumeIfAlreadyExists = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyBuffOnGameplayEvent>.NativeClassPtr, "ConsumeIfAlreadyExists");
		ApplyBuffOnGameplayEvent.NativeFieldInfoPtr_ConsumeConditional = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyBuffOnGameplayEvent>.NativeClassPtr, "ConsumeConditional");
		ApplyBuffOnGameplayEvent.NativeFieldInfoPtr_CustomAbilitySpellModsSource = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyBuffOnGameplayEvent>.NativeClassPtr, "CustomAbilitySpellModsSource");
		ApplyBuffOnGameplayEvent.NativeMethodInfoPtr_ApplyPrefabGUID_Public_Virtual_Final_New_Void_SpellModPrefabGuid_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ApplyBuffOnGameplayEvent>.NativeClassPtr, 100668224);
		ApplyBuffOnGameplayEvent.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ApplyBuffOnGameplayEvent>.NativeClassPtr, 100668225);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 84941, RefRangeEnd = 84942, XrefRangeStart = 84941, XrefRangeEnd = 84941, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void ApplyPrefabGUID(SpellModPrefabGuid spellMod, PrefabGUID prefabGuid)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref prefabGuid;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ApplyBuffOnGameplayEvent.NativeMethodInfoPtr_ApplyPrefabGUID_Public_Virtual_Final_New_Void_SpellModPrefabGuid_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 84947, RefRangeEnd = 84948, XrefRangeStart = 84942, XrefRangeEnd = 84947, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void ApplyArithmetic(SpellModArithmetic spellMod, float value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ApplyBuffOnGameplayEvent.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ApplyBuffOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BuffTarget;
	private static readonly IntPtr NativeFieldInfoPtr_SpellTarget;
	private static readonly IntPtr NativeFieldInfoPtr_EntityOwner;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideDuration;
	private static readonly IntPtr NativeFieldInfoPtr_Stacks;
	private static readonly IntPtr NativeFieldInfoPtr_Buff0;
	private static readonly IntPtr NativeFieldInfoPtr_Buff1;
	private static readonly IntPtr NativeFieldInfoPtr_Buff2;
	private static readonly IntPtr NativeFieldInfoPtr_Buff3;
	private static readonly IntPtr NativeFieldInfoPtr_EventOnConsume;
	private static readonly IntPtr NativeFieldInfoPtr_ConsumeIfAlreadyExists;
	private static readonly IntPtr NativeFieldInfoPtr_ConsumeConditional;
	private static readonly IntPtr NativeFieldInfoPtr_CustomAbilitySpellModsSource;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyPrefabGUID_Public_Virtual_Final_New_Void_SpellModPrefabGuid_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0;
	[FieldOffset(0)]
	public ApplyBuffTarget BuffTarget;
	[FieldOffset(4)]
	public SetSpellTarget SpellTarget;
	[FieldOffset(8)]
	public SetEntityOwner EntityOwner;
	[FieldOffset(12)]
	public Nullable_Unboxed<float> OverrideDuration;
	[FieldOffset(20)]
	public byte Stacks;
	[FieldOffset(24)]
	public PrefabGUID Buff0;
	[FieldOffset(28)]
	public PrefabGUID Buff1;
	[FieldOffset(32)]
	public PrefabGUID Buff2;
	[FieldOffset(36)]
	public PrefabGUID Buff3;
	[FieldOffset(40)]
	public GameplayEventId EventOnConsume;
	[FieldOffset(48)]
	[MarshalAs(4)]
	public bool ConsumeIfAlreadyExists;
	[FieldOffset(56)]
	public BlobAssetReference<ConditionBlob> ConsumeConditional;
	[FieldOffset(64)]
	public PrefabGUID CustomAbilitySpellModsSource;
}
