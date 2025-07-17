---
nav_exclude: true
search_exclude: true
---

# Blood

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public ModifiableFloat MaxBlood;
	[FieldOffset(4)]
	public ModifiableFloat LossPerSecond;
	[FieldOffset(8)]
	public ModifiableFloat ReducedBloodDrain;
	[FieldOffset(12)]
	public ModifiableFloat BloodDrainMultiplier;
	[FieldOffset(16)]
	public float Value;
	[FieldOffset(20)]
	public int ChangeBloodCounter;
	[FieldOffset(24)]
	public float Quality;
	[FieldOffset(28)]
	public float LowBloodSequenceStartFactor;
	[FieldOffset(32)]
	public PrefabGUID BloodType;
	[FieldOffset(36)]
	public SecondaryBloodData SecondaryBlood;
	[FieldOffset(48)]
	public PrefabGUID DefaultBloodType;
	[FieldOffset(52)]
	public PrefabGUID CorruptedBloodType;
	[FieldOffset(56)]
	public PrefabGUID DebuffPrefab;
	[FieldOffset(60)]
	public Entity DebuffEntity;
	[FieldOffset(68)]
	public PrefabGUID SCTType;
	[FieldOffset(72)]
	public SequenceGUID LowBloodSequenceGuid;
	[FieldOffset(76)]
	public SequenceState LowBloodSequenceInstance;
	[FieldOffset(84)]
	public SequenceGUID NoBloodSequenceGuid;
	[FieldOffset(88)]
	public SequenceState NoBloodSequenceInstance;
	[FieldOffset(96)]
	public ModifiableBool ShowBloodHUD;
	[FieldOffset(97)]
	public ModifiableBool IgnoreIdleDrain;
	[FieldOffset(100)]
	public ModifiableFloat BloodEfficiency;
	[FieldOffset(104)]
	[MarshalAs(4)]
	public bool StopDrainOnDisconnect;
}
