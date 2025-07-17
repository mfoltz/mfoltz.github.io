---
nav_exclude: true
search_exclude: true
---

# HealOnGameplayEvent

```csharp
[Serializable]
[StructLayout(2)]
public struct HealOnGameplayEvent
{
	static HealOnGameplayEvent()
	{
		Il2CppClassPointerStore<HealOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "HealOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HealOnGameplayEvent>.NativeClassPtr);
		HealOnGameplayEvent.NativeFieldInfoPtr_Health = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealOnGameplayEvent>.NativeClassPtr, "Health");
		HealOnGameplayEvent.NativeFieldInfoPtr_HealthPercent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealOnGameplayEvent>.NativeClassPtr, "HealthPercent");
		HealOnGameplayEvent.NativeFieldInfoPtr_HealthPerSpellPower = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealOnGameplayEvent>.NativeClassPtr, "HealthPerSpellPower");
		HealOnGameplayEvent.NativeFieldInfoPtr_showSCT = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealOnGameplayEvent>.NativeClassPtr, "showSCT");
		HealOnGameplayEvent.NativeFieldInfoPtr_TrueHealing = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealOnGameplayEvent>.NativeClassPtr, "TrueHealing");
		HealOnGameplayEvent.NativeFieldInfoPtr_Who = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealOnGameplayEvent>.NativeClassPtr, "Who");
		HealOnGameplayEvent.NativeFieldInfoPtr_MultiplyMainFactorWithStacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HealOnGameplayEvent>.NativeClassPtr, "MultiplyMainFactorWithStacks");
		HealOnGameplayEvent.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HealOnGameplayEvent>.NativeClassPtr, 100668281);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 85273, XrefRangeEnd = 85281, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void ApplyArithmetic(SpellModArithmetic spellMod, float value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HealOnGameplayEvent.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HealOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Health;
	private static readonly IntPtr NativeFieldInfoPtr_HealthPercent;
	private static readonly IntPtr NativeFieldInfoPtr_HealthPerSpellPower;
	private static readonly IntPtr NativeFieldInfoPtr_showSCT;
	private static readonly IntPtr NativeFieldInfoPtr_TrueHealing;
	private static readonly IntPtr NativeFieldInfoPtr_Who;
	private static readonly IntPtr NativeFieldInfoPtr_MultiplyMainFactorWithStacks;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0;
	[FieldOffset(0)]
	public float Health;
	[FieldOffset(4)]
	public float HealthPercent;
	[FieldOffset(8)]
	public float HealthPerSpellPower;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool showSCT;
	[FieldOffset(13)]
	[MarshalAs(4)]
	public bool TrueHealing;
	[FieldOffset(16)]
	public HealOnGameplayEventWho Who;
	[FieldOffset(20)]
	[MarshalAs(4)]
	public bool MultiplyMainFactorWithStacks;
}
