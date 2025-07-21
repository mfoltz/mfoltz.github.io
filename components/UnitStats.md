---
nav_exclude: true
search_exclude: false
---

# UnitStats

```csharp
public struct UnitStats
{
	static UnitStats()
	{
		Il2CppClassPointerStore<UnitStats>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "UnitStats");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnitStats>.NativeClassPtr);
		UnitStats.NativeFieldInfoPtr_PRIMARY_ATTACK_SPEED_COOLDOWN_MODIFIER = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitStats>.NativeClassPtr, "PRIMARY_ATTACK_SPEED_COOLDOWN_MODIFIER");
		UnitStats.NativeFieldInfoPtr_MAX_PRIMARY_ATTACK_SPEED = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitStats>.NativeClassPtr, "MAX_PRIMARY_ATTACK_SPEED");
		UnitStats.NativeFieldInfoPtr_MAX_PRIMARY_COOLDOWN_MODIFIER = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitStats>.NativeClassPtr, "MAX_PRIMARY_COOLDOWN_MODIFIER");
		UnitStats.NativeFieldInfoPtr_PhysicalPower = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitStats>.NativeClassPtr, "PhysicalPower");
		UnitStats.NativeFieldInfoPtr_SpellPower = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitStats>.NativeClassPtr, "SpellPower");
		UnitStats.NativeFieldInfoPtr_ResourcePower = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitStats>.NativeClassPtr, "ResourcePower");
		UnitStats.NativeFieldInfoPtr_SiegePower = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitStats>.NativeClassPtr, "SiegePower");
		UnitStats.NativeFieldInfoPtr_PhysicalResistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitStats>.NativeClassPtr, "PhysicalResistance");
		UnitStats.NativeFieldInfoPtr_SpellResistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitStats>.NativeClassPtr, "SpellResistance");
		UnitStats.NativeFieldInfoPtr_FireResistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitStats>.NativeClassPtr, "FireResistance");
		UnitStats.NativeFieldInfoPtr_PassiveHealthRegen = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitStats>.NativeClassPtr, "PassiveHealthRegen");
		UnitStats.NativeFieldInfoPtr_CCReduction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitStats>.NativeClassPtr, "CCReduction");
		UnitStats.NativeFieldInfoPtr_HealthRecovery = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitStats>.NativeClassPtr, "HealthRecovery");
		UnitStats.NativeFieldInfoPtr_DamageReduction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitStats>.NativeClassPtr, "DamageReduction");
		UnitStats.NativeFieldInfoPtr_HealingReceived = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitStats>.NativeClassPtr, "HealingReceived");
		UnitStats.NativeFieldInfoPtr_ReducedBloodDrain = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitStats>.NativeClassPtr, "ReducedBloodDrain");
		UnitStats.NativeFieldInfoPtr_BloodDrainMultiplier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitStats>.NativeClassPtr, "BloodDrainMultiplier");
		UnitStats.NativeFieldInfoPtr_CorruptionDamageReduction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitStats>.NativeClassPtr, "CorruptionDamageReduction");
		UnitStats.NativeMethodInfoPtr_Default_Public_Static_UnitStats_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnitStats>.NativeClassPtr, 100668087);
	}

	public unsafe static UnitStats Default()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnitStats.NativeMethodInfoPtr_Default_Public_Static_UnitStats_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnitStats>.NativeClassPtr, ref this));
	}
	public unsafe static float PRIMARY_ATTACK_SPEED_COOLDOWN_MODIFIER
	{
		get
		{
			float result;
			IL2CPP.il2cpp_field_static_get_value(UnitStats.NativeFieldInfoPtr_PRIMARY_ATTACK_SPEED_COOLDOWN_MODIFIER, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(UnitStats.NativeFieldInfoPtr_PRIMARY_ATTACK_SPEED_COOLDOWN_MODIFIER, (void*)(&value));
		}
	}
	public unsafe static float MAX_PRIMARY_ATTACK_SPEED
	{
		get
		{
			float result;
			IL2CPP.il2cpp_field_static_get_value(UnitStats.NativeFieldInfoPtr_MAX_PRIMARY_ATTACK_SPEED, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(UnitStats.NativeFieldInfoPtr_MAX_PRIMARY_ATTACK_SPEED, (void*)(&value));
		}
	}
	public unsafe static float MAX_PRIMARY_COOLDOWN_MODIFIER
	{
		get
		{
			float result;
			IL2CPP.il2cpp_field_static_get_value(UnitStats.NativeFieldInfoPtr_MAX_PRIMARY_COOLDOWN_MODIFIER, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(UnitStats.NativeFieldInfoPtr_MAX_PRIMARY_COOLDOWN_MODIFIER, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_PRIMARY_ATTACK_SPEED_COOLDOWN_MODIFIER;
	private static readonly IntPtr NativeFieldInfoPtr_MAX_PRIMARY_ATTACK_SPEED;
	private static readonly IntPtr NativeFieldInfoPtr_MAX_PRIMARY_COOLDOWN_MODIFIER;
	private static readonly IntPtr NativeFieldInfoPtr_PhysicalPower;
	private static readonly IntPtr NativeFieldInfoPtr_SpellPower;
	private static readonly IntPtr NativeFieldInfoPtr_ResourcePower;
	private static readonly IntPtr NativeFieldInfoPtr_SiegePower;
	private static readonly IntPtr NativeFieldInfoPtr_PhysicalResistance;
	private static readonly IntPtr NativeFieldInfoPtr_SpellResistance;
	private static readonly IntPtr NativeFieldInfoPtr_FireResistance;
	private static readonly IntPtr NativeFieldInfoPtr_PassiveHealthRegen;
	private static readonly IntPtr NativeFieldInfoPtr_CCReduction;
	private static readonly IntPtr NativeFieldInfoPtr_HealthRecovery;
	private static readonly IntPtr NativeFieldInfoPtr_DamageReduction;
	private static readonly IntPtr NativeFieldInfoPtr_HealingReceived;
	private static readonly IntPtr NativeFieldInfoPtr_ReducedBloodDrain;
	private static readonly IntPtr NativeFieldInfoPtr_BloodDrainMultiplier;
	private static readonly IntPtr NativeFieldInfoPtr_CorruptionDamageReduction;
	private static readonly IntPtr NativeMethodInfoPtr_Default_Public_Static_UnitStats_0;

	public ModifiableFloat PhysicalPower;

	public ModifiableFloat SpellPower;

	public ModifiableFloat ResourcePower;

	public ModifiableFloat SiegePower;

	public ModifiableFloat PhysicalResistance;

	public ModifiableFloat SpellResistance;

	public ModifiableInt FireResistance;

	public ModifiableFloat PassiveHealthRegen;

	public ModifiableInt CCReduction;

	public ModifiableFloat HealthRecovery;

	public ModifiableFloat DamageReduction;

	public ModifiableFloat HealingReceived;

	public ModifiableFloat ReducedBloodDrain;

	public ModifiableFloat BloodDrainMultiplier;

	public ModifiableFloat CorruptionDamageReduction;
}
```

## Server Systems

- [MinionSpawnSystem](/systems/server/MinionSpawnSystem)
- [ServantPowerSystem](/systems/server/ServantPowerSystem)
