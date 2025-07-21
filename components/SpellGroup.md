---
nav_exclude: true
search_exclude: false
---

# SpellGroup

```csharp
public struct SpellGroup
{
	static SpellGroup()
	{
		Il2CppClassPointerStore<SpellGroup>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "SpellGroup");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellGroup>.NativeClassPtr);
		SpellGroup.NativeFieldInfoPtr_Group = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellGroup>.NativeClassPtr, "Group");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellGroup>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Group;

	public int Group;
}
```
