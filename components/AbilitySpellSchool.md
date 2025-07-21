---
nav_exclude: true
search_exclude: false
---

# AbilitySpellSchool

```csharp
public struct AbilitySpellSchool
{
	static AbilitySpellSchool()
	{
		Il2CppClassPointerStore<AbilitySpellSchool>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilitySpellSchool");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilitySpellSchool>.NativeClassPtr);
		AbilitySpellSchool.NativeFieldInfoPtr_SpellSchool = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilitySpellSchool>.NativeClassPtr, "SpellSchool");
		AbilitySpellSchool.NativeFieldInfoPtr_Tier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilitySpellSchool>.NativeClassPtr, "Tier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilitySpellSchool>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpellSchool;
	private static readonly IntPtr NativeFieldInfoPtr_Tier;

	public PrefabGUID SpellSchool;

	public SpellSchoolProgressionTier Tier;
}
```
