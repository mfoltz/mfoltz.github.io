---
nav_exclude: true
search_exclude: true
---

# AbilityJewelTemplate

```csharp
public struct AbilityJewelTemplate
{
	static AbilityJewelTemplate()
	{
		Il2CppClassPointerStore<AbilityJewelTemplate>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "AbilityJewelTemplate");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityJewelTemplate>.NativeClassPtr);
		AbilityJewelTemplate.NativeFieldInfoPtr_JewelItemGenerator = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityJewelTemplate>.NativeClassPtr, "JewelItemGenerator");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityJewelTemplate>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_JewelItemGenerator;

	public BlobAssetReference<SpellModSetGeneratorBlob> JewelItemGenerator;
}
```
