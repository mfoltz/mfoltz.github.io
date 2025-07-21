---
nav_exclude: true
search_exclude: false
---

# JewelSpawnSystemData

```csharp
public struct JewelSpawnSystemData
{
	static JewelSpawnSystemData()
	{
		Il2CppClassPointerStore<JewelSpawnSystemData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "JewelSpawnSystemData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<JewelSpawnSystemData>.NativeClassPtr);
		JewelSpawnSystemData.NativeFieldInfoPtr_JewelTemplateId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelSpawnSystemData>.NativeClassPtr, "JewelTemplateId");
		JewelSpawnSystemData.NativeFieldInfoPtr_LegendaryItemTemplateId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelSpawnSystemData>.NativeClassPtr, "LegendaryItemTemplateId");
		JewelSpawnSystemData.NativeFieldInfoPtr_SpellSchoolTierToJewel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelSpawnSystemData>.NativeClassPtr, "SpellSchoolTierToJewel");
		JewelSpawnSystemData.NativeFieldInfoPtr_WeaponTypeTierToLegendaryWeapons = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelSpawnSystemData>.NativeClassPtr, "WeaponTypeTierToLegendaryWeapons");
		JewelSpawnSystemData.NativeFieldInfoPtr_AbilityGroupsPerUnitLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelSpawnSystemData>.NativeClassPtr, "AbilityGroupsPerUnitLevel");
		JewelSpawnSystemData.NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<JewelSpawnSystemData>.NativeClassPtr, 100671589);
	}

	public unsafe void Dispose()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(JewelSpawnSystemData.NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<JewelSpawnSystemData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_JewelTemplateId;
	private static readonly IntPtr NativeFieldInfoPtr_LegendaryItemTemplateId;
	private static readonly IntPtr NativeFieldInfoPtr_SpellSchoolTierToJewel;
	private static readonly IntPtr NativeFieldInfoPtr_WeaponTypeTierToLegendaryWeapons;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityGroupsPerUnitLevel;
	private static readonly IntPtr NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0;

	public PrefabGUID JewelTemplateId;

	public PrefabGUID LegendaryItemTemplateId;

	public NativeParallelHashMap<SpellSchoolTier, PrefabGUID> SpellSchoolTierToJewel;

	public NativeParallelMultiHashMap<WeaponTypeTier, PrefabGUID> WeaponTypeTierToLegendaryWeapons;

	public NativeList<UnitLevelAbilityGroupData> AbilityGroupsPerUnitLevel;
}
```
