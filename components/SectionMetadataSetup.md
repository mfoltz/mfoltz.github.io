---
nav_exclude: true
search_exclude: false
---

# SectionMetadataSetup

```csharp
public struct SectionMetadataSetup
{
	static SectionMetadataSetup()
	{
		Il2CppClassPointerStore<SectionMetadataSetup>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "SectionMetadataSetup");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SectionMetadataSetup>.NativeClassPtr);
		SectionMetadataSetup.NativeFieldInfoPtr_SceneSectionIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SectionMetadataSetup>.NativeClassPtr, "SceneSectionIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SectionMetadataSetup>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SceneSectionIndex;

	public int SceneSectionIndex;
}
```
