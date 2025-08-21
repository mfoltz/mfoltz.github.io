---
nav_exclude: true
search_exclude: true
---

```csharp
public struct SpawnLocationSelector
{
	static SpawnLocationSelector()
	{
		Il2CppClassPointerStore<SpawnLocationSelector>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "SpawnLocationSelector");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnLocationSelector>.NativeClassPtr);
		SpawnLocationSelector.NativeFieldInfoPtr_LocationType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnLocationSelector>.NativeClassPtr, "LocationType");
		SpawnLocationSelector.NativeFieldInfoPtr_IsLocked = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnLocationSelector>.NativeClassPtr, "IsLocked");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnLocationSelector>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LocationType;
	private static readonly IntPtr NativeFieldInfoPtr_IsLocked;

	public SpawnLocationType LocationType;

	public bool IsLocked;
}
```
