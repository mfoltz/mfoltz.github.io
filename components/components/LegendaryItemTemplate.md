---
nav_exclude: true
search_exclude: true
---

# LegendaryItemTemplate

```csharp
[StructLayout(2)]
public struct LegendaryItemTemplate
{
	static LegendaryItemTemplate()
	{
		Il2CppClassPointerStore<LegendaryItemTemplate>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "LegendaryItemTemplate");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LegendaryItemTemplate>.NativeClassPtr);
		LegendaryItemTemplate.NativeFieldInfoPtr_TemplateLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LegendaryItemTemplate>.NativeClassPtr, "TemplateLevel");
		LegendaryItemTemplate.NativeFieldInfoPtr_TemplateWeaponType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LegendaryItemTemplate>.NativeClassPtr, "TemplateWeaponType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LegendaryItemTemplate>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TemplateLevel;
	private static readonly IntPtr NativeFieldInfoPtr_TemplateWeaponType;
	[FieldOffset(0)]
	public int TemplateLevel;
	[FieldOffset(4)]
	public WeaponType TemplateWeaponType;
}
