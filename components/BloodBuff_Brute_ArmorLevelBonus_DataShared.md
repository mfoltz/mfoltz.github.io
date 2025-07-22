---
nav_exclude: true
search_exclude: true
---

# BloodBuff_Brute_ArmorLevelBonus_DataShared

```csharp
public struct BloodBuff_Brute_ArmorLevelBonus_DataShared
{
	static BloodBuff_Brute_ArmorLevelBonus_DataShared()
	{
		Il2CppClassPointerStore<BloodBuff_Brute_ArmorLevelBonus_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "BloodBuff_Brute_ArmorLevelBonus_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodBuff_Brute_ArmorLevelBonus_DataShared>.NativeClassPtr);
		BloodBuff_Brute_ArmorLevelBonus_DataShared.NativeFieldInfoPtr_GearLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_Brute_ArmorLevelBonus_DataShared>.NativeClassPtr, "GearLevel");
		BloodBuff_Brute_ArmorLevelBonus_DataShared.NativeFieldInfoPtr_IncreaseGearLevelModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_Brute_ArmorLevelBonus_DataShared>.NativeClassPtr, "IncreaseGearLevelModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodBuff_Brute_ArmorLevelBonus_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GearLevel;
	private static readonly IntPtr NativeFieldInfoPtr_IncreaseGearLevelModificationId;

	public float GearLevel;

	public ModificationId IncreaseGearLevelModificationId;
}
```
