---
nav_exclude: true
search_exclude: true
---

# Minion

```csharp
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

	public float PowerOverride;

	public float BonusHealthPerOwnerSpellPower;

	public float BonusPhysicalPowerPerOwnerSpellPower;

	public float BonusSpellPowerPerOwnerSpellPower;

	public BlobAssetReference<SpawnMinionOnGameplayEventBlob> SpawnBuffsBlob;

	public Entity SpawnEventTarget;

	public PrefabGUID MasterDeathActionBuffGuid;

	public SequenceGUID SpawnSequenceGuid;

	public MinionMasterDeathAction MasterDeathAction;

	public bool IncludeInMinionCount;

	public bool TriggerMasterDeathActionOnDowned;

	public bool DisableDropsFromMinion;
}
```
