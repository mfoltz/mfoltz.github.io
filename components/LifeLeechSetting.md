---
nav_exclude: true
search_exclude: false
---

# LifeLeechSetting

```csharp
public struct LifeLeechSetting
{
	static LifeLeechSetting()
	{
		Il2CppClassPointerStore<LifeLeechSetting>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "LifeLeechSetting");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LifeLeechSetting>.NativeClassPtr);
		LifeLeechSetting.NativeFieldInfoPtr_EntityCategory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LifeLeechSetting>.NativeClassPtr, "EntityCategory");
		LifeLeechSetting.NativeFieldInfoPtr_Modifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LifeLeechSetting>.NativeClassPtr, "Modifier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LifeLeechSetting>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EntityCategory;
	private static readonly IntPtr NativeFieldInfoPtr_Modifier;

	public EntityCategory_Editor EntityCategory;

	public float Modifier;
}
```
