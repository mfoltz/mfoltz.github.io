---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BloodBuff_CritAmplifyProc_DataShared
{
	static BloodBuff_CritAmplifyProc_DataShared()
	{
		Il2CppClassPointerStore<BloodBuff_CritAmplifyProc_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "BloodBuff_CritAmplifyProc_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodBuff_CritAmplifyProc_DataShared>.NativeClassPtr);
		BloodBuff_CritAmplifyProc_DataShared.NativeFieldInfoPtr_MinBonus = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_CritAmplifyProc_DataShared>.NativeClassPtr, "MinBonus");
		BloodBuff_CritAmplifyProc_DataShared.NativeFieldInfoPtr_MaxBonus = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_CritAmplifyProc_DataShared>.NativeClassPtr, "MaxBonus");
		BloodBuff_CritAmplifyProc_DataShared.NativeFieldInfoPtr_RequiredBloodPercentage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_CritAmplifyProc_DataShared>.NativeClassPtr, "RequiredBloodPercentage");
		BloodBuff_CritAmplifyProc_DataShared.NativeFieldInfoPtr_ProcBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_CritAmplifyProc_DataShared>.NativeClassPtr, "ProcBuff");
		BloodBuff_CritAmplifyProc_DataShared.NativeFieldInfoPtr_OnDamageDealtListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_CritAmplifyProc_DataShared>.NativeClassPtr, "OnDamageDealtListener");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodBuff_CritAmplifyProc_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MinBonus;
	private static readonly IntPtr NativeFieldInfoPtr_MaxBonus;
	private static readonly IntPtr NativeFieldInfoPtr_RequiredBloodPercentage;
	private static readonly IntPtr NativeFieldInfoPtr_ProcBuff;
	private static readonly IntPtr NativeFieldInfoPtr_OnDamageDealtListener;

	public float MinBonus;

	public float MaxBonus;

	public float RequiredBloodPercentage;

	public PrefabGUID ProcBuff;

	public ListenerId OnDamageDealtListener;
}
```
