---
nav_exclude: true
search_exclude: true
---

```csharp
public struct VBloodUnitSpawnSource
{
	static VBloodUnitSpawnSource()
	{
		Il2CppClassPointerStore<VBloodUnitSpawnSource>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "VBloodUnitSpawnSource");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<VBloodUnitSpawnSource>.NativeClassPtr);
		VBloodUnitSpawnSource.NativeFieldInfoPtr_CustomUnit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodUnitSpawnSource>.NativeClassPtr, "CustomUnit");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<VBloodUnitSpawnSource>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CustomUnit;

	public PrefabGUID CustomUnit;
}
```
