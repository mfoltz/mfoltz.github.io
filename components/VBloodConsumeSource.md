---
nav_exclude: true
search_exclude: true
---

# VBloodConsumeSource

```csharp
public struct VBloodConsumeSource
{
	static VBloodConsumeSource()
	{
		Il2CppClassPointerStore<VBloodConsumeSource>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "VBloodConsumeSource");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<VBloodConsumeSource>.NativeClassPtr);
		VBloodConsumeSource.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodConsumeSource>.NativeClassPtr, "Source");
		VBloodConsumeSource.NativeFieldInfoPtr_JournalCategory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodConsumeSource>.NativeClassPtr, "JournalCategory");
		VBloodConsumeSource.NativeFieldInfoPtr_QuestFlavorTextOverride = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodConsumeSource>.NativeClassPtr, "QuestFlavorTextOverride");
		VBloodConsumeSource.NativeFieldInfoPtr_TooltipGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodConsumeSource>.NativeClassPtr, "TooltipGUID");
		VBloodConsumeSource.NativeFieldInfoPtr_SpellSchool = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodConsumeSource>.NativeClassPtr, "SpellSchool");
		VBloodConsumeSource.NativeFieldInfoPtr_Tier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodConsumeSource>.NativeClassPtr, "Tier");
		VBloodConsumeSource.NativeFieldInfoPtr_SpellSchoolPoints = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodConsumeSource>.NativeClassPtr, "SpellSchoolPoints");
		VBloodConsumeSource.NativeFieldInfoPtr_PassivePoints = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodConsumeSource>.NativeClassPtr, "PassivePoints");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<VBloodConsumeSource>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	private static readonly IntPtr NativeFieldInfoPtr_JournalCategory;
	private static readonly IntPtr NativeFieldInfoPtr_QuestFlavorTextOverride;
	private static readonly IntPtr NativeFieldInfoPtr_TooltipGUID;
	private static readonly IntPtr NativeFieldInfoPtr_SpellSchool;
	private static readonly IntPtr NativeFieldInfoPtr_Tier;
	private static readonly IntPtr NativeFieldInfoPtr_SpellSchoolPoints;
	private static readonly IntPtr NativeFieldInfoPtr_PassivePoints;

	public PrefabGUID Source;

	public JournalCategoryType JournalCategory;

	public LocalizationKey QuestFlavorTextOverride;

	public PrefabGUID TooltipGUID;

	public PrefabGUID SpellSchool;

	public SpellSchoolProgressionTier Tier;

	public int SpellSchoolPoints;

	public int PassivePoints;
}
```
