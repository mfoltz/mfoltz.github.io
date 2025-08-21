---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BloodBuff_Scholar_ManaRegenBonus_DataShared
{
	static BloodBuff_Scholar_ManaRegenBonus_DataShared()
	{
		Il2CppClassPointerStore<BloodBuff_Scholar_ManaRegenBonus_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "BloodBuff_Scholar_ManaRegenBonus_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodBuff_Scholar_ManaRegenBonus_DataShared>.NativeClassPtr);
		BloodBuff_Scholar_ManaRegenBonus_DataShared.NativeFieldInfoPtr_MinBloodManaRegeneration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_Scholar_ManaRegenBonus_DataShared>.NativeClassPtr, "MinBloodManaRegeneration");
		BloodBuff_Scholar_ManaRegenBonus_DataShared.NativeFieldInfoPtr_MaxBloodManaRegeneration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_Scholar_ManaRegenBonus_DataShared>.NativeClassPtr, "MaxBloodManaRegeneration");
		BloodBuff_Scholar_ManaRegenBonus_DataShared.NativeFieldInfoPtr_ModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_Scholar_ManaRegenBonus_DataShared>.NativeClassPtr, "ModificationId");
		BloodBuff_Scholar_ManaRegenBonus_DataShared.NativeFieldInfoPtr_RequiredBloodPercentage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_Scholar_ManaRegenBonus_DataShared>.NativeClassPtr, "RequiredBloodPercentage");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodBuff_Scholar_ManaRegenBonus_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MinBloodManaRegeneration;
	private static readonly IntPtr NativeFieldInfoPtr_MaxBloodManaRegeneration;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_RequiredBloodPercentage;

	public float MinBloodManaRegeneration;

	public float MaxBloodManaRegeneration;

	public ModificationId ModificationId;

	public float RequiredBloodPercentage;
}
```
