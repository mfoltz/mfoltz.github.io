---
nav_exclude: true
search_exclude: false
---

# ModifyEntityCategoryBuff

```csharp
public struct ModifyEntityCategoryBuff
{
	static ModifyEntityCategoryBuff()
	{
		Il2CppClassPointerStore<ModifyEntityCategoryBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ModifyEntityCategoryBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyEntityCategoryBuff>.NativeClassPtr);
		ModifyEntityCategoryBuff.NativeFieldInfoPtr_MainCategory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyEntityCategoryBuff>.NativeClassPtr, "MainCategory");
		ModifyEntityCategoryBuff.NativeFieldInfoPtr_MainCategoryModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyEntityCategoryBuff>.NativeClassPtr, "MainCategoryModId");
		ModifyEntityCategoryBuff.NativeFieldInfoPtr_UnitCategory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyEntityCategoryBuff>.NativeClassPtr, "UnitCategory");
		ModifyEntityCategoryBuff.NativeFieldInfoPtr_UnitCategoryModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyEntityCategoryBuff>.NativeClassPtr, "UnitCategoryModId");
		ModifyEntityCategoryBuff.NativeFieldInfoPtr_StructureCategory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyEntityCategoryBuff>.NativeClassPtr, "StructureCategory");
		ModifyEntityCategoryBuff.NativeFieldInfoPtr_StructureCategoryModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyEntityCategoryBuff>.NativeClassPtr, "StructureCategoryModId");
		ModifyEntityCategoryBuff.NativeFieldInfoPtr_MaterialCategory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyEntityCategoryBuff>.NativeClassPtr, "MaterialCategory");
		ModifyEntityCategoryBuff.NativeFieldInfoPtr_MaterialCategoryModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyEntityCategoryBuff>.NativeClassPtr, "MaterialCategoryModId");
		ModifyEntityCategoryBuff.NativeFieldInfoPtr_ResourceLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyEntityCategoryBuff>.NativeClassPtr, "ResourceLevel");
		ModifyEntityCategoryBuff.NativeFieldInfoPtr_ResourceLevelModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyEntityCategoryBuff>.NativeClassPtr, "ResourceLevelModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyEntityCategoryBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MainCategory;
	private static readonly IntPtr NativeFieldInfoPtr_MainCategoryModId;
	private static readonly IntPtr NativeFieldInfoPtr_UnitCategory;
	private static readonly IntPtr NativeFieldInfoPtr_UnitCategoryModId;
	private static readonly IntPtr NativeFieldInfoPtr_StructureCategory;
	private static readonly IntPtr NativeFieldInfoPtr_StructureCategoryModId;
	private static readonly IntPtr NativeFieldInfoPtr_MaterialCategory;
	private static readonly IntPtr NativeFieldInfoPtr_MaterialCategoryModId;
	private static readonly IntPtr NativeFieldInfoPtr_ResourceLevel;
	private static readonly IntPtr NativeFieldInfoPtr_ResourceLevelModId;

	public MainEntityCategory MainCategory;

	public ModificationId MainCategoryModId;

	public UnitCategory UnitCategory;

	public ModificationId UnitCategoryModId;

	public StructureCategory StructureCategory;

	public ModificationId StructureCategoryModId;

	public MaterialCategory MaterialCategory;

	public ModificationId MaterialCategoryModId;

	public int ResourceLevel;

	public ModificationId ResourceLevelModId;
}
```
