---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BloodBuff_Worker_Pulverize_DataShared
{
	static BloodBuff_Worker_Pulverize_DataShared()
	{
		Il2CppClassPointerStore<BloodBuff_Worker_Pulverize_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "BloodBuff_Worker_Pulverize_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodBuff_Worker_Pulverize_DataShared>.NativeClassPtr);
		BloodBuff_Worker_Pulverize_DataShared.NativeFieldInfoPtr_PulverizeBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_Worker_Pulverize_DataShared>.NativeClassPtr, "PulverizeBuff");
		BloodBuff_Worker_Pulverize_DataShared.NativeFieldInfoPtr_RequiredBloodPercentage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_Worker_Pulverize_DataShared>.NativeClassPtr, "RequiredBloodPercentage");
		BloodBuff_Worker_Pulverize_DataShared.NativeFieldInfoPtr_PulverizeChance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_Worker_Pulverize_DataShared>.NativeClassPtr, "PulverizeChance");
		BloodBuff_Worker_Pulverize_DataShared.NativeFieldInfoPtr_PulverizeDamage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_Worker_Pulverize_DataShared>.NativeClassPtr, "PulverizeDamage");
		BloodBuff_Worker_Pulverize_DataShared.NativeFieldInfoPtr_SequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_Worker_Pulverize_DataShared>.NativeClassPtr, "SequenceGuid");
		BloodBuff_Worker_Pulverize_DataShared.NativeFieldInfoPtr_SequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_Worker_Pulverize_DataShared>.NativeClassPtr, "SequenceState");
		BloodBuff_Worker_Pulverize_DataShared.NativeFieldInfoPtr_OnDamageDealtListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_Worker_Pulverize_DataShared>.NativeClassPtr, "OnDamageDealtListener");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodBuff_Worker_Pulverize_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PulverizeBuff;
	private static readonly IntPtr NativeFieldInfoPtr_RequiredBloodPercentage;
	private static readonly IntPtr NativeFieldInfoPtr_PulverizeChance;
	private static readonly IntPtr NativeFieldInfoPtr_PulverizeDamage;
	private static readonly IntPtr NativeFieldInfoPtr_SequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_SequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_OnDamageDealtListener;

	public PrefabGUID PulverizeBuff;

	public float RequiredBloodPercentage;

	public float PulverizeChance;

	public DealDamageParameters PulverizeDamage;

	public SequenceGUID SequenceGuid;

	public SequenceState SequenceState;

	public ListenerId OnDamageDealtListener;
}
```
