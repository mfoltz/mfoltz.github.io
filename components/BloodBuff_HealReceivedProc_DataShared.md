---
nav_exclude: true
search_exclude: false
---

# BloodBuff_HealReceivedProc_DataShared

```csharp
public struct BloodBuff_HealReceivedProc_DataShared
{
	static BloodBuff_HealReceivedProc_DataShared()
	{
		Il2CppClassPointerStore<BloodBuff_HealReceivedProc_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "BloodBuff_HealReceivedProc_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodBuff_HealReceivedProc_DataShared>.NativeClassPtr);
		BloodBuff_HealReceivedProc_DataShared.NativeFieldInfoPtr_ChancePerRelativeHealth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_HealReceivedProc_DataShared>.NativeClassPtr, "ChancePerRelativeHealth");
		BloodBuff_HealReceivedProc_DataShared.NativeFieldInfoPtr_ProcBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_HealReceivedProc_DataShared>.NativeClassPtr, "ProcBuff");
		BloodBuff_HealReceivedProc_DataShared.NativeFieldInfoPtr_RequiredBloodPercentage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_HealReceivedProc_DataShared>.NativeClassPtr, "RequiredBloodPercentage");
		BloodBuff_HealReceivedProc_DataShared.NativeFieldInfoPtr_OnHealingListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_HealReceivedProc_DataShared>.NativeClassPtr, "OnHealingListener");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodBuff_HealReceivedProc_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ChancePerRelativeHealth;
	private static readonly IntPtr NativeFieldInfoPtr_ProcBuff;
	private static readonly IntPtr NativeFieldInfoPtr_RequiredBloodPercentage;
	private static readonly IntPtr NativeFieldInfoPtr_OnHealingListener;

	public float ChancePerRelativeHealth;

	public PrefabGUID ProcBuff;

	public float RequiredBloodPercentage;

	public ListenerId OnHealingListener;
}
```
