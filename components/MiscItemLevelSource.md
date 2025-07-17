---
nav_exclude: true
search_exclude: true
---

# MiscItemLevelSource

```csharp
public struct MiscItemLevelSource
{
	static MiscItemLevelSource()
	{
		Il2CppClassPointerStore<MiscItemLevelSource>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MiscItemLevelSource");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MiscItemLevelSource>.NativeClassPtr);
		MiscItemLevelSource.NativeFieldInfoPtr_Level = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MiscItemLevelSource>.NativeClassPtr, "Level");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MiscItemLevelSource>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Level;

	public float Level;
}
```
