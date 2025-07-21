---
nav_exclude: true
search_exclude: false
---

# BloodBuff_BiteToMutant_DataShared

```csharp
public struct BloodBuff_BiteToMutant_DataShared
{
	static BloodBuff_BiteToMutant_DataShared()
	{
		Il2CppClassPointerStore<BloodBuff_BiteToMutant_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "BloodBuff_BiteToMutant_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodBuff_BiteToMutant_DataShared>.NativeClassPtr);
		BloodBuff_BiteToMutant_DataShared.NativeFieldInfoPtr_MinBonus = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_BiteToMutant_DataShared>.NativeClassPtr, "MinBonus");
		BloodBuff_BiteToMutant_DataShared.NativeFieldInfoPtr_MaxBonus = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_BiteToMutant_DataShared>.NativeClassPtr, "MaxBonus");
		BloodBuff_BiteToMutant_DataShared.NativeFieldInfoPtr_DeathBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_BiteToMutant_DataShared>.NativeClassPtr, "DeathBuff");
		BloodBuff_BiteToMutant_DataShared.NativeFieldInfoPtr_MutantFaction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_BiteToMutant_DataShared>.NativeClassPtr, "MutantFaction");
		BloodBuff_BiteToMutant_DataShared.NativeFieldInfoPtr_RequiredBloodPercentage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_BiteToMutant_DataShared>.NativeClassPtr, "RequiredBloodPercentage");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodBuff_BiteToMutant_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MinBonus;
	private static readonly IntPtr NativeFieldInfoPtr_MaxBonus;
	private static readonly IntPtr NativeFieldInfoPtr_DeathBuff;
	private static readonly IntPtr NativeFieldInfoPtr_MutantFaction;
	private static readonly IntPtr NativeFieldInfoPtr_RequiredBloodPercentage;

	public float MinBonus;

	public float MaxBonus;

	public PrefabGUID DeathBuff;

	public PrefabGUID MutantFaction;

	public float RequiredBloodPercentage;
}
```
