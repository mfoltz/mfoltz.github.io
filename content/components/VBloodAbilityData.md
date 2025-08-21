---
nav_exclude: true
search_exclude: true
---

```csharp
public struct VBloodAbilityData
{
	static VBloodAbilityData()
	{
		Il2CppClassPointerStore<VBloodAbilityData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "VBloodAbilityData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<VBloodAbilityData>.NativeClassPtr);
		VBloodAbilityData.NativeFieldInfoPtr_AbilityType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodAbilityData>.NativeClassPtr, "AbilityType");
		VBloodAbilityData.NativeFieldInfoPtr_AbilitySchool = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodAbilityData>.NativeClassPtr, "AbilitySchool");
		VBloodAbilityData.NativeFieldInfoPtr_AbilityTooltipType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodAbilityData>.NativeClassPtr, "AbilityTooltipType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<VBloodAbilityData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbilityType;
	private static readonly IntPtr NativeFieldInfoPtr_AbilitySchool;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityTooltipType;

	public AbilityTypeEnum AbilityType;

	public AbilitySchoolType AbilitySchool;

	public AbilityTooltipType AbilityTooltipType;
}
```
