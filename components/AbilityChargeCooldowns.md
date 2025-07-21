---
nav_exclude: true
search_exclude: false
---

# AbilityChargeCooldowns

```csharp
public struct AbilityChargeCooldowns
{
	static AbilityChargeCooldowns()
	{
		Il2CppClassPointerStore<AbilityChargeCooldowns>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "AbilityChargeCooldowns");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityChargeCooldowns>.NativeClassPtr);
		AbilityChargeCooldowns.NativeFieldInfoPtr_ExpectedAbility = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeCooldowns>.NativeClassPtr, "ExpectedAbility");
		AbilityChargeCooldowns.NativeFieldInfoPtr_AbilitySlotIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeCooldowns>.NativeClassPtr, "AbilitySlotIndex");
		AbilityChargeCooldowns.NativeFieldInfoPtr_Cooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeCooldowns>.NativeClassPtr, "Cooldown");
		AbilityChargeCooldowns.NativeFieldInfoPtr_CurrentCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeCooldowns>.NativeClassPtr, "CurrentCooldown");
		AbilityChargeCooldowns.NativeFieldInfoPtr_ConsumeWhenInterrupted = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeCooldowns>.NativeClassPtr, "ConsumeWhenInterrupted");
		AbilityChargeCooldowns.NativeFieldInfoPtr_ResetOnAbilityAnySlotUse = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeCooldowns>.NativeClassPtr, "ResetOnAbilityAnySlotUse");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityChargeCooldowns>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ExpectedAbility;
	private static readonly IntPtr NativeFieldInfoPtr_AbilitySlotIndex;
	private static readonly IntPtr NativeFieldInfoPtr_Cooldown;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentCooldown;
	private static readonly IntPtr NativeFieldInfoPtr_ConsumeWhenInterrupted;
	private static readonly IntPtr NativeFieldInfoPtr_ResetOnAbilityAnySlotUse;

	public PrefabGUID ExpectedAbility;

	public int AbilitySlotIndex;

	public float Cooldown;

	public float CurrentCooldown;

	public bool ConsumeWhenInterrupted;

	public bool ResetOnAbilityAnySlotUse;
}
```
