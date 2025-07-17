---
nav_exclude: true
search_exclude: true
---

# Minion

```csharp
[StructLayout(2)]
public struct Minion
{
	static Minion()
	{
		Il2CppClassPointerStore<Minion>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Minion");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Minion>.NativeClassPtr);
		Minion.NativeFieldInfoPtr_PowerOverride = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Minion>.NativeClassPtr, "PowerOverride");
		Minion.NativeFieldInfoPtr_BonusHealthPerOwnerSpellPower = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Minion>.NativeClassPtr, "BonusHealthPerOwnerSpellPower");
		Minion.NativeFieldInfoPtr_BonusPhysicalPowerPerOwnerSpellPower = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Minion>.NativeClassPtr, "BonusPhysicalPowerPerOwnerSpellPower");
		Minion.NativeFieldInfoPtr_BonusSpellPowerPerOwnerSpellPower = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Minion>.NativeClassPtr, "BonusSpellPowerPerOwnerSpellPower");
		Minion.NativeFieldInfoPtr_SpawnBuffsBlob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Minion>.NativeClassPtr, "SpawnBuffsBlob");
		Minion.NativeFieldInfoPtr_SpawnEventTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Minion>.NativeClassPtr, "SpawnEventTarget");
		Minion.NativeFieldInfoPtr_MasterDeathActionBuffGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Minion>.NativeClassPtr, "MasterDeathActionBuffGuid");
		Minion.NativeFieldInfoPtr_SpawnSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Minion>.NativeClassPtr, "SpawnSequenceGuid");
		Minion.NativeFieldInfoPtr_MasterDeathAction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Minion>.NativeClassPtr, "MasterDeathAction");
		Minion.NativeFieldInfoPtr_IncludeInMinionCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Minion>.NativeClassPtr, "IncludeInMinionCount");
		Minion.NativeFieldInfoPtr_TriggerMasterDeathActionOnDowned = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Minion>.NativeClassPtr, "TriggerMasterDeathActionOnDowned");
		Minion.NativeFieldInfoPtr_DisableDropsFromMinion = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Minion>.NativeClassPtr, "DisableDropsFromMinion");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Minion>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PowerOverride;
	private static readonly IntPtr NativeFieldInfoPtr_BonusHealthPerOwnerSpellPower;
	private static readonly IntPtr NativeFieldInfoPtr_BonusPhysicalPowerPerOwnerSpellPower;
	private static readonly IntPtr NativeFieldInfoPtr_BonusSpellPowerPerOwnerSpellPower;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnBuffsBlob;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnEventTarget;
	private static readonly IntPtr NativeFieldInfoPtr_MasterDeathActionBuffGuid;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_MasterDeathAction;
	private static readonly IntPtr NativeFieldInfoPtr_IncludeInMinionCount;
	private static readonly IntPtr NativeFieldInfoPtr_TriggerMasterDeathActionOnDowned;
	private static readonly IntPtr NativeFieldInfoPtr_DisableDropsFromMinion;
	[FieldOffset(0)]
	public float PowerOverride;
	[FieldOffset(4)]
	public float BonusHealthPerOwnerSpellPower;
	[FieldOffset(8)]
	public float BonusPhysicalPowerPerOwnerSpellPower;
	[FieldOffset(12)]
	public float BonusSpellPowerPerOwnerSpellPower;
	[FieldOffset(16)]
	public BlobAssetReference<SpawnMinionOnGameplayEventBlob> SpawnBuffsBlob;
	[FieldOffset(24)]
	public Entity SpawnEventTarget;
	[FieldOffset(32)]
	public PrefabGUID MasterDeathActionBuffGuid;
	[FieldOffset(36)]
	public SequenceGUID SpawnSequenceGuid;
	[FieldOffset(40)]
	public MinionMasterDeathAction MasterDeathAction;
	[FieldOffset(44)]
	[MarshalAs(4)]
	public bool IncludeInMinionCount;
	[FieldOffset(45)]
	[MarshalAs(4)]
	public bool TriggerMasterDeathActionOnDowned;
	[FieldOffset(46)]
	[MarshalAs(4)]
	public bool DisableDropsFromMinion;
}
