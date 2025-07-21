---
nav_exclude: true
search_exclude: false
---

# VBloodItemSource

```csharp
public struct VBloodItemSource
{
	static VBloodItemSource()
	{
		Il2CppClassPointerStore<VBloodItemSource>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "VBloodItemSource");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<VBloodItemSource>.NativeClassPtr);
		VBloodItemSource.NativeFieldInfoPtr_VBloodUnit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodItemSource>.NativeClassPtr, "VBloodUnit");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<VBloodItemSource>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_VBloodUnit;

	public PrefabGUID VBloodUnit;
}
```
