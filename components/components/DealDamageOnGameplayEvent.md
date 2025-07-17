---
nav_exclude: true
search_exclude: true
---

# DealDamageOnGameplayEvent

```csharp
[StructLayout(2)]
public struct DealDamageOnGameplayEvent
{
	static DealDamageOnGameplayEvent()
	{
		Il2CppClassPointerStore<DealDamageOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DealDamageOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DealDamageOnGameplayEvent>.NativeClassPtr);
		DealDamageOnGameplayEvent.NativeFieldInfoPtr_Parameters = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DealDamageOnGameplayEvent>.NativeClassPtr, "Parameters");
		DealDamageOnGameplayEvent.NativeFieldInfoPtr_DamageModifierPerHit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DealDamageOnGameplayEvent>.NativeClassPtr, "DamageModifierPerHit");
		DealDamageOnGameplayEvent.NativeFieldInfoPtr_MultiplyMainFactorWithStacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DealDamageOnGameplayEvent>.NativeClassPtr, "MultiplyMainFactorWithStacks");
		DealDamageOnGameplayEvent.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DealDamageOnGameplayEvent>.NativeClassPtr, 100665650);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1074280, XrefRangeEnd = 1074287, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void ApplyArithmetic(SpellModArithmetic spellMod, float value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DealDamageOnGameplayEvent.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DealDamageOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Parameters;
	private static readonly IntPtr NativeFieldInfoPtr_DamageModifierPerHit;
	private static readonly IntPtr NativeFieldInfoPtr_MultiplyMainFactorWithStacks;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0;
	[FieldOffset(0)]
	public DealDamageParameters Parameters;
	[FieldOffset(120)]
	public float DamageModifierPerHit;
	[FieldOffset(124)]
	[MarshalAs(4)]
	public bool MultiplyMainFactorWithStacks;
}
