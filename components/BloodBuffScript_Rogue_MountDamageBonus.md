---
nav_exclude: true
search_exclude: true
---

# BloodBuffScript_Rogue_MountDamageBonus

```csharp
public struct BloodBuffScript_Rogue_MountDamageBonus
{
	static BloodBuffScript_Rogue_MountDamageBonus()
	{
		Il2CppClassPointerStore<BloodBuffScript_Rogue_MountDamageBonus>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BloodBuffScript_Rogue_MountDamageBonus");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodBuffScript_Rogue_MountDamageBonus>.NativeClassPtr);
		BloodBuffScript_Rogue_MountDamageBonus.NativeFieldInfoPtr_MinMountDamageIncrease = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Rogue_MountDamageBonus>.NativeClassPtr, "MinMountDamageIncrease");
		BloodBuffScript_Rogue_MountDamageBonus.NativeFieldInfoPtr_MaxMountDamageIncrease = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Rogue_MountDamageBonus>.NativeClassPtr, "MaxMountDamageIncrease");
		BloodBuffScript_Rogue_MountDamageBonus.NativeFieldInfoPtr_RequiredBloodPercentage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Rogue_MountDamageBonus>.NativeClassPtr, "RequiredBloodPercentage");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodBuffScript_Rogue_MountDamageBonus>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MinMountDamageIncrease;
	private static readonly IntPtr NativeFieldInfoPtr_MaxMountDamageIncrease;
	private static readonly IntPtr NativeFieldInfoPtr_RequiredBloodPercentage;

	public float MinMountDamageIncrease;

	public float MaxMountDamageIncrease;

	public float RequiredBloodPercentage;
}
```
