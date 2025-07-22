---
nav_exclude: true
search_exclude: false
---

# WeaponLevelSource

```csharp
public struct WeaponLevelSource
{
	static WeaponLevelSource()
	{
		Il2CppClassPointerStore<WeaponLevelSource>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "WeaponLevelSource");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WeaponLevelSource>.NativeClassPtr);
		WeaponLevelSource.NativeFieldInfoPtr_Level = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WeaponLevelSource>.NativeClassPtr, "Level");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WeaponLevelSource>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Level;

	public float Level;
}
```
