---
nav_exclude: true
search_exclude: true
---

# LegendaryItemGeneratorTemplate

```csharp
public struct LegendaryItemGeneratorTemplate
{
	static LegendaryItemGeneratorTemplate()
	{
		Il2CppClassPointerStore<LegendaryItemGeneratorTemplate>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "LegendaryItemGeneratorTemplate");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LegendaryItemGeneratorTemplate>.NativeClassPtr);
		LegendaryItemGeneratorTemplate.NativeFieldInfoPtr_StatModsGenerator = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LegendaryItemGeneratorTemplate>.NativeClassPtr, "StatModsGenerator");
		LegendaryItemGeneratorTemplate.NativeFieldInfoPtr_Ability0ModsGenerator = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LegendaryItemGeneratorTemplate>.NativeClassPtr, "Ability0ModsGenerator");
		LegendaryItemGeneratorTemplate.NativeFieldInfoPtr_Ability1ModsGenerator = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LegendaryItemGeneratorTemplate>.NativeClassPtr, "Ability1ModsGenerator");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LegendaryItemGeneratorTemplate>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StatModsGenerator;
	private static readonly IntPtr NativeFieldInfoPtr_Ability0ModsGenerator;
	private static readonly IntPtr NativeFieldInfoPtr_Ability1ModsGenerator;

	public BlobAssetReference<SpellModSetGeneratorBlob> StatModsGenerator;

	public BlobAssetReference<SpellModSetGeneratorBlob> Ability0ModsGenerator;

	public BlobAssetReference<SpellModSetGeneratorBlob> Ability1ModsGenerator;
}
```
