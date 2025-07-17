---
nav_exclude: true
search_exclude: true
---

# Buff_Reduce_Cooldown_DataShared

```csharp
[StructLayout(2)]
public struct Buff_Reduce_Cooldown_DataShared
{
	static Buff_Reduce_Cooldown_DataShared()
	{
		Il2CppClassPointerStore<Buff_Reduce_Cooldown_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Buff_Reduce_Cooldown_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Buff_Reduce_Cooldown_DataShared>.NativeClassPtr);
		Buff_Reduce_Cooldown_DataShared.NativeFieldInfoPtr_Spell_CooldownReduction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_Reduce_Cooldown_DataShared>.NativeClassPtr, "Spell_CooldownReduction");
		Buff_Reduce_Cooldown_DataShared.NativeFieldInfoPtr_Spell_CooldownReductionPerStack = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_Reduce_Cooldown_DataShared>.NativeClassPtr, "Spell_CooldownReductionPerStack");
		Buff_Reduce_Cooldown_DataShared.NativeFieldInfoPtr_Weapon_CooldownReduction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_Reduce_Cooldown_DataShared>.NativeClassPtr, "Weapon_CooldownReduction");
		Buff_Reduce_Cooldown_DataShared.NativeFieldInfoPtr_Weapon_CooldownReductionPerStack = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_Reduce_Cooldown_DataShared>.NativeClassPtr, "Weapon_CooldownReductionPerStack");
		Buff_Reduce_Cooldown_DataShared.NativeFieldInfoPtr_Travel_CooldownReduction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_Reduce_Cooldown_DataShared>.NativeClassPtr, "Travel_CooldownReduction");
		Buff_Reduce_Cooldown_DataShared.NativeFieldInfoPtr_Travel_CooldownReductionPerStack = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_Reduce_Cooldown_DataShared>.NativeClassPtr, "Travel_CooldownReductionPerStack");
		Buff_Reduce_Cooldown_DataShared.NativeFieldInfoPtr_SpellCooldownModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_Reduce_Cooldown_DataShared>.NativeClassPtr, "SpellCooldownModificationId");
		Buff_Reduce_Cooldown_DataShared.NativeFieldInfoPtr_TravelCooldownModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_Reduce_Cooldown_DataShared>.NativeClassPtr, "TravelCooldownModificationId");
		Buff_Reduce_Cooldown_DataShared.NativeFieldInfoPtr_WeaponCooldownModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_Reduce_Cooldown_DataShared>.NativeClassPtr, "WeaponCooldownModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Buff_Reduce_Cooldown_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Spell_CooldownReduction;
	private static readonly IntPtr NativeFieldInfoPtr_Spell_CooldownReductionPerStack;
	private static readonly IntPtr NativeFieldInfoPtr_Weapon_CooldownReduction;
	private static readonly IntPtr NativeFieldInfoPtr_Weapon_CooldownReductionPerStack;
	private static readonly IntPtr NativeFieldInfoPtr_Travel_CooldownReduction;
	private static readonly IntPtr NativeFieldInfoPtr_Travel_CooldownReductionPerStack;
	private static readonly IntPtr NativeFieldInfoPtr_SpellCooldownModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_TravelCooldownModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_WeaponCooldownModificationId;
	[FieldOffset(0)]
	public float Spell_CooldownReduction;
	[FieldOffset(4)]
	public float Spell_CooldownReductionPerStack;
	[FieldOffset(8)]
	public float Weapon_CooldownReduction;
	[FieldOffset(12)]
	public float Weapon_CooldownReductionPerStack;
	[FieldOffset(16)]
	public float Travel_CooldownReduction;
	[FieldOffset(20)]
	public float Travel_CooldownReductionPerStack;
	[FieldOffset(24)]
	public ModificationId SpellCooldownModificationId;
	[FieldOffset(28)]
	public ModificationId TravelCooldownModificationId;
	[FieldOffset(32)]
	public ModificationId WeaponCooldownModificationId;
}
