---
nav_exclude: true
search_exclude: false
---

# HealOnGameplayEvent

```csharp
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

	public float Health;

	public float HealthPercent;

	public float HealthPerSpellPower;

	public bool showSCT;

	public bool TrueHealing;

	public HealOnGameplayEventWho Who;

	public bool MultiplyMainFactorWithStacks;
}
```
