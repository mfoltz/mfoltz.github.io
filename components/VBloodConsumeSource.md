---
nav_exclude: true
search_exclude: true
---

# VBloodConsumeSource

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public PrefabGUID Source;
	[FieldOffset(4)]
	public JournalCategoryType JournalCategory;
	[FieldOffset(8)]
	public LocalizationKey QuestFlavorTextOverride;
	[FieldOffset(24)]
	public PrefabGUID TooltipGUID;
	[FieldOffset(28)]
	public PrefabGUID SpellSchool;
	[FieldOffset(32)]
	public SpellSchoolProgressionTier Tier;
	[FieldOffset(36)]
	public int SpellSchoolPoints;
	[FieldOffset(40)]
	public int PassivePoints;
}
