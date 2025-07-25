---
nav_exclude: true
search_exclude: true
---

# ArmorLevelSource

```csharp
public struct ArmorLevelSource
{
	static ArmorLevelSource()
	{
		Il2CppClassPointerStore<ArmorLevelSource>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ArmorLevelSource");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ArmorLevelSource>.NativeClassPtr);
		ArmorLevelSource.NativeFieldInfoPtr_Level = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ArmorLevelSource>.NativeClassPtr, "Level");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ArmorLevelSource>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Level;

	public float Level;
}
```
