---
nav_exclude: true
search_exclude: true
---

# UnitSpawnData

```csharp
[StructLayout(2)]
public struct UnitSpawnData
{
	static UnitSpawnData()
	{
		Il2CppClassPointerStore<UnitSpawnData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "UnitSpawnData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnitSpawnData>.NativeClassPtr);
		UnitSpawnData.NativeFieldInfoPtr_HealthSettingsPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnData>.NativeClassPtr, "HealthSettingsPrefabGuid");
		UnitSpawnData.NativeFieldInfoPtr_SpellPowerSettingsPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnData>.NativeClassPtr, "SpellPowerSettingsPrefabGuid");
		UnitSpawnData.NativeFieldInfoPtr_PhysicalPowerSettingsPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnData>.NativeClassPtr, "PhysicalPowerSettingsPrefabGuid");
		UnitSpawnData.NativeFieldInfoPtr_SiegePowerSettingsPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnData>.NativeClassPtr, "SiegePowerSettingsPrefabGuid");
		UnitSpawnData.NativeFieldInfoPtr_MaxHealthFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnData>.NativeClassPtr, "MaxHealthFactor");
		UnitSpawnData.NativeFieldInfoPtr_HealthFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnData>.NativeClassPtr, "HealthFactor");
		UnitSpawnData.NativeFieldInfoPtr_Misery = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnData>.NativeClassPtr, "Misery");
		UnitSpawnData.NativeFieldInfoPtr_BloodQuality = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnData>.NativeClassPtr, "BloodQuality");
		UnitSpawnData.NativeFieldInfoPtr_OverrideMaxHealth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnData>.NativeClassPtr, "OverrideMaxHealth");
		UnitSpawnData.NativeFieldInfoPtr_PhysicalPowerFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnData>.NativeClassPtr, "PhysicalPowerFactor");
		UnitSpawnData.NativeFieldInfoPtr_OverridePhysicalPower = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnData>.NativeClassPtr, "OverridePhysicalPower");
		UnitSpawnData.NativeFieldInfoPtr_SpellPowerFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnData>.NativeClassPtr, "SpellPowerFactor");
		UnitSpawnData.NativeFieldInfoPtr_OverrideSpellPower = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnData>.NativeClassPtr, "OverrideSpellPower");
		UnitSpawnData.NativeFieldInfoPtr_SiegePowerFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnData>.NativeClassPtr, "SiegePowerFactor");
		UnitSpawnData.NativeFieldInfoPtr_OverrideSiegePower = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnData>.NativeClassPtr, "OverrideSiegePower");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnitSpawnData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HealthSettingsPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_SpellPowerSettingsPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_PhysicalPowerSettingsPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_SiegePowerSettingsPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_MaxHealthFactor;
	private static readonly IntPtr NativeFieldInfoPtr_HealthFactor;
	private static readonly IntPtr NativeFieldInfoPtr_Misery;
	private static readonly IntPtr NativeFieldInfoPtr_BloodQuality;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideMaxHealth;
	private static readonly IntPtr NativeFieldInfoPtr_PhysicalPowerFactor;
	private static readonly IntPtr NativeFieldInfoPtr_OverridePhysicalPower;
	private static readonly IntPtr NativeFieldInfoPtr_SpellPowerFactor;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideSpellPower;
	private static readonly IntPtr NativeFieldInfoPtr_SiegePowerFactor;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideSiegePower;
	[FieldOffset(0)]
	public PrefabGUID HealthSettingsPrefabGuid;
	[FieldOffset(4)]
	public PrefabGUID SpellPowerSettingsPrefabGuid;
	[FieldOffset(8)]
	public PrefabGUID PhysicalPowerSettingsPrefabGuid;
	[FieldOffset(12)]
	public PrefabGUID SiegePowerSettingsPrefabGuid;
	[FieldOffset(16)]
	public ModifiableFloat MaxHealthFactor;
	[FieldOffset(20)]
	public float HealthFactor;
	[FieldOffset(24)]
	public float Misery;
	[FieldOffset(28)]
	public float BloodQuality;
	[FieldOffset(32)]
	public float OverrideMaxHealth;
	[FieldOffset(36)]
	public float PhysicalPowerFactor;
	[FieldOffset(40)]
	public float OverridePhysicalPower;
	[FieldOffset(44)]
	public float SpellPowerFactor;
	[FieldOffset(48)]
	public float OverrideSpellPower;
	[FieldOffset(52)]
	public float SiegePowerFactor;
	[FieldOffset(56)]
	public float OverrideSiegePower;
}
