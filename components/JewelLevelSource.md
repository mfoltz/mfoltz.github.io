---
nav_exclude: true
search_exclude: false
---

# JewelLevelSource

```csharp
public struct JewelLevelSource
{
	static JewelLevelSource()
	{
		Il2CppClassPointerStore<JewelLevelSource>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "JewelLevelSource");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<JewelLevelSource>.NativeClassPtr);
		JewelLevelSource.NativeFieldInfoPtr_Level = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelLevelSource>.NativeClassPtr, "Level");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<JewelLevelSource>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Level;

	public float Level;
}
```
