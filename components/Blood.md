---
nav_exclude: true
search_exclude: true
---

# Blood

```csharp
public struct Blood
{
	static Blood()
	{
		Il2CppClassPointerStore<Blood>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Blood");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Blood>.NativeClassPtr);
		Blood.NativeFieldInfoPtr_MaxBlood = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "MaxBlood");
		Blood.NativeFieldInfoPtr_LossPerSecond = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "LossPerSecond");
		Blood.NativeFieldInfoPtr_ReducedBloodDrain = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "ReducedBloodDrain");
		Blood.NativeFieldInfoPtr_BloodDrainMultiplier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "BloodDrainMultiplier");
		Blood.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "Value");
		Blood.NativeFieldInfoPtr_ChangeBloodCounter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "ChangeBloodCounter");
		Blood.NativeFieldInfoPtr_Quality = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "Quality");
		Blood.NativeFieldInfoPtr_LowBloodSequenceStartFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "LowBloodSequenceStartFactor");
		Blood.NativeFieldInfoPtr_BloodType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "BloodType");
		Blood.NativeFieldInfoPtr_SecondaryBlood = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "SecondaryBlood");
		Blood.NativeFieldInfoPtr_DefaultBloodType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "DefaultBloodType");
		Blood.NativeFieldInfoPtr_CorruptedBloodType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "CorruptedBloodType");
		Blood.NativeFieldInfoPtr_DebuffPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "DebuffPrefab");
		Blood.NativeFieldInfoPtr_DebuffEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "DebuffEntity");
		Blood.NativeFieldInfoPtr_SCTType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "SCTType");
		Blood.NativeFieldInfoPtr_LowBloodSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "LowBloodSequenceGuid");
		Blood.NativeFieldInfoPtr_LowBloodSequenceInstance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "LowBloodSequenceInstance");
		Blood.NativeFieldInfoPtr_NoBloodSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "NoBloodSequenceGuid");
		Blood.NativeFieldInfoPtr_NoBloodSequenceInstance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "NoBloodSequenceInstance");
		Blood.NativeFieldInfoPtr_ShowBloodHUD = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "ShowBloodHUD");
		Blood.NativeFieldInfoPtr_IgnoreIdleDrain = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "IgnoreIdleDrain");
		Blood.NativeFieldInfoPtr_BloodEfficiency = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "BloodEfficiency");
		Blood.NativeFieldInfoPtr_StopDrainOnDisconnect = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Blood>.NativeClassPtr, "StopDrainOnDisconnect");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Blood>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MaxBlood;
	private static readonly IntPtr NativeFieldInfoPtr_LossPerSecond;
	private static readonly IntPtr NativeFieldInfoPtr_ReducedBloodDrain;
	private static readonly IntPtr NativeFieldInfoPtr_BloodDrainMultiplier;
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_ChangeBloodCounter;
	private static readonly IntPtr NativeFieldInfoPtr_Quality;
	private static readonly IntPtr NativeFieldInfoPtr_LowBloodSequenceStartFactor;
	private static readonly IntPtr NativeFieldInfoPtr_BloodType;
	private static readonly IntPtr NativeFieldInfoPtr_SecondaryBlood;
	private static readonly IntPtr NativeFieldInfoPtr_DefaultBloodType;
	private static readonly IntPtr NativeFieldInfoPtr_CorruptedBloodType;
	private static readonly IntPtr NativeFieldInfoPtr_DebuffPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_DebuffEntity;
	private static readonly IntPtr NativeFieldInfoPtr_SCTType;
	private static readonly IntPtr NativeFieldInfoPtr_LowBloodSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_LowBloodSequenceInstance;
	private static readonly IntPtr NativeFieldInfoPtr_NoBloodSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_NoBloodSequenceInstance;
	private static readonly IntPtr NativeFieldInfoPtr_ShowBloodHUD;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreIdleDrain;
	private static readonly IntPtr NativeFieldInfoPtr_BloodEfficiency;
	private static readonly IntPtr NativeFieldInfoPtr_StopDrainOnDisconnect;

	public ModifiableFloat MaxBlood;

	public ModifiableFloat LossPerSecond;

	public ModifiableFloat ReducedBloodDrain;

	public ModifiableFloat BloodDrainMultiplier;

	public float Value;

	public int ChangeBloodCounter;

	public float Quality;

	public float LowBloodSequenceStartFactor;

	public PrefabGUID BloodType;

	public SecondaryBloodData SecondaryBlood;

	public PrefabGUID DefaultBloodType;

	public PrefabGUID CorruptedBloodType;

	public PrefabGUID DebuffPrefab;

	public Entity DebuffEntity;

	public PrefabGUID SCTType;

	public SequenceGUID LowBloodSequenceGuid;

	public SequenceState LowBloodSequenceInstance;

	public SequenceGUID NoBloodSequenceGuid;

	public SequenceState NoBloodSequenceInstance;

	public ModifiableBool ShowBloodHUD;

	public ModifiableBool IgnoreIdleDrain;

	public ModifiableFloat BloodEfficiency;

	public bool StopDrainOnDisconnect;
}
```

## Server Systems

- [VBloodSystem](/systems/server/VBloodSystem)
