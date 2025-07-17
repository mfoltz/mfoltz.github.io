---
nav_exclude: true
search_exclude: true
---

# SchoolDebuffData

```csharp
public struct SchoolDebuffData
{
	static SchoolDebuffData()
	{
		Il2CppClassPointerStore<SchoolDebuffData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "SchoolDebuffData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SchoolDebuffData>.NativeClassPtr);
		SchoolDebuffData.NativeFieldInfoPtr_AbilitySchool = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SchoolDebuffData>.NativeClassPtr, "AbilitySchool");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SchoolDebuffData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbilitySchool;

	public AbilitySchoolType AbilitySchool;
}
```
